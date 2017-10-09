import {existsSync, unlinkSync, writeFileSync} from 'fs';
import * as request from 'request-promise-native';
import {isReference, OpenAPI, Reference, Schema} from '../openapi';
import {Writer} from '../utils/writer';

const out = './src/bungie-api/definitions.ts';

request('https://raw.githubusercontent.com/Bungie-net/api/master/openapi.json', {
	json: true,
}).then((specification: OpenAPI) => {
	function resolveReference<T>(reference: Reference): T {
		console.info(`Resolving reference ${reference.$ref}.`);
		let object: any = specification;
		const path = reference.$ref.replace('#/', '').split('/');

		while (object && path.length > 0) {
			const key = path.shift();
			object = object[key];
		}

		return object || null;
	}

	function resolveType(resolvable: Schema | Reference): string {
		if (resolvable) {
			if (isReference(resolvable)) {
				return resolvable.$ref.split('/').pop().split('.').pop();
			} else {
				const type = resolvable.type;

				if (type === 'integer') {
					return 'number';
				} else if (type === 'object') {
					if (resolvable['x-dictionary-key'] !== undefined) {
						const keyType = resolveType(resolvable['x-dictionary-key']);
						const dictionaryType = resolveType(resolvable.additionalProperties);

						if (keyType !== 'string' && keyType !== 'number') {
							if (isReference(resolvable['x-dictionary-key'])) {
								const reference = resolveReference<Schema>(resolvable['x-dictionary-key']);

								if (reference['x-enum-values'] instanceof Array) {
									console.warn('Dictionary key type rewritten to number (workaround for https://github.com/Microsoft/TypeScript/issues/13042).');
									return `{[field: number]: ${dictionaryType}}`;
								}
							}

							console.warn('Dictionary key type was not a number or string!');
							return `{[field: string | number]: ${dictionaryType}}`;
						}

						return `{[field: ${keyType}]: ${dictionaryType}}`;
					} else if (resolvable.allOf instanceof Array && resolvable.allOf.length > 0) {
						let types = '';

						resolvable.allOf.forEach((value) => {
							types += `${types !== '' ? ' | ' : ''}${resolveType(value)}`;
						});

						return types;
					}
				} else if (type === 'array') {
					return `${resolveType(resolvable.items)}[]`;
				} else {
					return type;
				}
			}
		}

		console.info('Unable to resolve type of:', resolvable);
		return 'any';
	}

	if (specification instanceof Object) {
		const schemas = specification.components && specification.components.schemas;

		if (schemas instanceof Object) {
			const writer = new Writer();

			writer.writeBlockComment('THIS FILE IS AUTO GENERATED! DO NOT EDIT!');
			writer.writeBlankLine();

			Object.keys(schemas).forEach((name) => {
				const schema = schemas[name];

				if (!isReference(schema)) {
					const classname = name.split('/').pop().split('.').pop();

					console.info(`Processing ${classname}...`);

					if (schema['x-enum-values'] instanceof Array) {
						if (schema.description !== undefined) {
							writer.writeDocComment(schema.description);
						}

						writer.writeLine(`export enum ${classname} {`);
						writer.indent();

						schema['x-enum-values'].forEach((value: any) => {
							writer.writeLine(`${value.identifier} = ${value.numericValue},`);
						});

						writer.unindent();
						writer.writeLine('}');
						writer.writeBlankLine();
					} else if (schema.type === 'object' && schema.properties instanceof Object) {
						const properties = schema.properties;

						if (schema.description !== undefined) {
							writer.writeDocComment(schema.description);
						}

						writer.writeLine(`export interface ${classname} {`);
						writer.indent();

						Object.keys(properties).forEach((propertyName) => {
							console.info(`Processing property ${propertyName}...`);

							const property: Schema | Reference = properties[propertyName];
							const propertySchema = isReference(property) ? resolveReference<Schema>(property) : property;

							if (propertySchema !== null) {
								if (!isReference(property) && propertySchema.description !== undefined) {
									writer.writeDocComment(propertySchema.description);
								}

								writer.writeLine(`${propertyName}${propertySchema.nullable ? '?:' : ':'} ${resolveType(property)};`);
							} else {
								console.warn(`Unable to resolve reference!`);
							}
						});

						writer.unindent();
						writer.writeLine('}');
						writer.writeBlankLine();
					}
				}
			});

			if (existsSync(out)) {
				unlinkSync(out);
			}

			writeFileSync(out, writer.getOutput());
		} else {
			throw new Error('Malformed API definition!');
		}
	}
}).catch((error: Error) => {
	console.error(`Unable to process API definition: ${error.name} (${error.message})`);
});
