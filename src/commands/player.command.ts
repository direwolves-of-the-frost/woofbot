import {Message, RichEmbed} from 'discord.js';
import {BungieAPI} from '../bungie-api';
import * as Defs from '../bungie-api/definitions';
import {Command} from '../command';

const destiny = new BungieAPI(process.env.BUNGIE_KEY).destiny2;
const platforms: {[platform: string]: Defs.BungieMembershipType} = {
	bnet: Defs.BungieMembershipType.TigerBlizzard,
	psn: Defs.BungieMembershipType.TigerPsn,
	xbox: Defs.BungieMembershipType.TigerXbox,
};

function formatDuration(duration: number) {
	const days = Math.floor(duration / 60 / 24);
	const hours = Math.floor(duration / 60) - (days * 24);
	const minutes = Math.floor(duration) - (hours * 60) - (days * 60 * 24);
	let output = '';

	if (days > 0) {
		if (days > 1) {
			output = `${days} days`;
		} else {
			output = `${days} day`;
		}
	}

	if (hours > 0 || days > 0) {
		if (days > 0) {
			output += ', ';
		}

		if (hours !== 1) {
			output += `${hours} hours`;
		} else {
			output += `${hours} hour`;
		}

		output += ' and ';
	}

	if (minutes !== 1) {
		output += `${minutes} minutes`;
	} else {
		output += `${minutes} minute`;
	}

	return output;
}

export class PlayerCommand extends Command {
	public readonly trigger = 'player';

	public execute(message: Message, args: string[]): Promise<Message | Message[]> {
		const displayName = args[0];
		const platform = args[1];

		let membershipType = Defs.BungieMembershipType.All;

		if (platform !== undefined) {
			membershipType = platforms[platform];
		}

		if (displayName !== undefined && membershipType !== undefined) {
			return destiny.searchDestinyPlayer(displayName, membershipType).then((players) => {
				if (players.length > 0) {
					if (players.length === 1) {
						const player = players[0];

						if (player !== undefined) {
							return destiny.getProfile(player.membershipType, player.membershipId).then((profile) => {
								const promises: Array<Promise<Defs.DestinyCharacterResponse>> = [];

								profile.profile.data.characterIds.forEach((characterId) => {
									promises.push(destiny.getCharacter(player.membershipType, player.membershipId, characterId));
								});

								return Promise.all(promises).then((characters) => {
									const embed = new RichEmbed();

									embed.setAuthor(`${player.displayName}'s Account`);

									characters.forEach((character) => {
										const data = character.character.data;

										embed.addField(
											Defs.DestinyClass[data.classType],
											`Level: ${data.baseCharacterLevel}\n` +
											`Light Level: ${data.light}\n` +
											`Race: ${Defs.DestinyRace[data.raceType]}\n` +
											`Gender: ${Defs.DestinyGender[data.genderType]}\n` +
											`Playtime: ${formatDuration(parseInt(data.minutesPlayedTotal, 10))}\n` +
											`Last Played: ${data.dateLastPlayed}\n`,
										);
									});

									return message.channel.send(embed);
								}).catch(() => {
									return message.channel.send(`Sorry, I wasn't able to retrieve that player's characters...`);
								});
							}).catch(() => {
								return message.channel.send(`Sorry, I wasn't able to retrieve that player's profile...`);
							});
						}
					}

					return message.channel.send(`Sorry, I found more than one player by that name.`);
				}

				return message.channel.send(`Sorry, I couldn't find any players by that name.`);
			}).catch(() => {
				return message.channel.send(`Sorry, I wasn't able execute that request...`);
			});
		}

		return message.channel.send(`Sorry but I didn't understand that, try \`!help ${this.trigger}\` if you need help.`);
	}

	public help(): string {
		return `\`!${this.trigger} <name> [platform]\` Retreives the player info for the specified player, optionally filters by platform.\n\nPlatforms: \`${Object.keys(platforms).join('`, `')}\``;
	}
}
