import {Message, RichEmbed} from 'discord.js';
import {BungieAPI} from '../bungie-api';
import {Command} from '../command';

const destiny = new BungieAPI(process.env.BUNGIE_KEY).destiny2;

export class RewardsCommand extends Command {
	public readonly trigger = 'rewards';

	public execute(message: Message, _: string[]): Promise<Message | Message[]> {
		return destiny.getClanWeeklyRewardState(parseInt(process.env.BUNGIE_GROUP, 10)).then((milestone) => {
			return destiny.getDestinyMilestoneDefinition(milestone.milestoneHash).then((definition) => {
				const category = milestone.rewards.shift();
				const categoryDefinition = definition.rewards[category.rewardCategoryHash];
				const embed = new RichEmbed();

				category.entries.forEach((entry) => {
					const entryDefinition = categoryDefinition.rewardEntries[entry.rewardEntryHash];
					embed.addField(entryDefinition.displayProperties.name, entry.earned ? 'Earned.' : 'Not yet earned.');
				});

				return message.channel.send(`Here are this week\'s rewards:`, embed);
			});
		});
	}

	public help(): string {
		return `\`!${this.trigger}\` Lists the clan's reward status for this week.`;
	}
}
