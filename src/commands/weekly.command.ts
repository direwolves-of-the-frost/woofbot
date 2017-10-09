import {Message, RichEmbed} from 'discord.js';
import {BungieAPI} from '../bungie-api';
import {Command} from '../command';

const destiny = new BungieAPI(process.env.BUNGIE_KEY).destiny2;

export class WeeklyCommand extends Command {
	public readonly trigger = 'weekly';

	public execute(message: Message, _: string[]): Promise<Message | Message[]> {
		return destiny.getClanWeeklyRewardState(parseInt(process.env.BUNGIE_GROUP, 10)).then((milestone) => {
			return destiny.getDestinyEntityDefinition('DestinyMilestoneDefinition', milestone.milestoneHash).then((definition) => {
				const promises: Array<Promise<Message | Message[]>> = [];

				milestone.rewards.forEach((categoryState: any) => {
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
