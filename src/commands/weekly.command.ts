import {Message, RichEmbed} from 'discord.js';
import * as request from 'request-promise-native';
import {Command} from './';

function API(endpoint: string): Promise<any> {
	return request.get(`https://bungie.net/Platform/Destiny2/${endpoint}/`, {
		json: true,
		headers: {
			['X-API-Key']: process.env.BUNGIE_KEY,
		},
	}).then((data) => {
		if (data.Response instanceof Object) {
			return data.Response;
		} else {
			throw new Error('Destiny API error!');
		}
	});
}

export class WeeklyCommand extends Command {
	public readonly trigger = 'weekly';

	public execute(message: Message, _: string[]): Promise<Message | Message[]> {
		return API(`Clan/${process.env.BUNGIE_GROUP}/WeeklyRewardState`).then((state) => {
			return API(`Manifest/DestinyMilestoneDefinition/${state.milestoneHash}`).then((definition) => {
				const promises: Array<Promise<Message | Message[]>> = [];

				state.rewards.forEach((categoryState: any) => {
					const embed = new RichEmbed();
					const category = definition.rewards[categoryState.rewardCategoryHash];

					embed.setAuthor(category.displayProperties.name);
					embed.setDescription(category.displayProperties.description);

					categoryState.entries.forEach((entryState: any) => {
						const entry = category.rewardEntries[entryState.rewardEntryHash];

						embed.addField(`Name`, entry.displayProperties.name.replace(' - Last Week', ''), true);
						embed.addBlankField(true);
						embed.addField(`Earned`, (entryState.earned ? 'True' : 'False'), true);
					});

					promises.push(message.channel.send(embed));
				});

				return Promise.all(promises).then((values) => {
					const messages: Message[] = [];

					values.forEach((value) => {
						if (value instanceof Array) {
							messages.concat(value);
						} else {
							messages.push(value);
						}
					});

					return messages;
				});
			});
		});
	}

	public help(): string {
		return `\`!${this.trigger}\` displays the clan's weekly rewards status.\n\n`;
	}
}
