import {Client, Message} from 'discord.js';
import {Command} from './command';

const deletionDelay = 30 * 1000;

export interface CommandManagerOptions {
	commands?: Array<{ new(_: CommandManager): Command }>;
}

export class CommandManager {
	public readonly client: Client;
	public readonly commands: Command[] = [];

	constructor(client: Client, options?: CommandManagerOptions) {
		this.client = client;

		if (options != null) {
			this.registerCommands(options.commands || []);
		}
	}

	public registerCommand(type: { new(_: CommandManager): Command }) {
		this.commands.push(new type(this));
	}

	public registerCommands(commands: Array<{ new(_: CommandManager): Command }>) {
		commands.forEach((command) => {
			this.registerCommand(command);
		});
	}

	public handleMessage(incomingMessage: Message) {
		const match = incomingMessage.cleanContent.match(/^!(\w+)\s*(.*)$/);

		if (match) {
			const trigger = match[1].toLowerCase();
			const args = match[2].split(/\s+/).filter((s) => s !== '');

			this.commands.every((command) => {
				if (command.trigger === trigger) {
					command.execute(incomingMessage, args).then((outgoingMessage) => {
						if (incomingMessage.deletable) {
							incomingMessage.delete(deletionDelay);

							if (outgoingMessage instanceof Array) {
								outgoingMessage.forEach((m) => {
									if (m.deletable) {
										m.delete(deletionDelay);
									}
								});
							} else if (outgoingMessage.deletable) {
								outgoingMessage.delete(deletionDelay);
							}
						}
					}).catch((err) => {
						console.log(err);
					});

					return false;
				}

				return true;
			});
		}
	}
}
