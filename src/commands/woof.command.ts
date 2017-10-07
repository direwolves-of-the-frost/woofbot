import {Message} from 'discord.js';
import * as request from 'request-promise-native';
import {Command} from './';

const tags = ['doggo', 'doge'];

export class WoofCommand extends Command {
	public readonly trigger = 'woof';

	public execute(message: Message, args: string[]): Promise<Message | Message[]> {
		let tag = tags[Math.floor(Math.random() * tags.length)];

		if (args.length > 0) {
			tag = args[0];
		}

		return request.get(`https://api.giphy.com/v1/gifs/random`, {
			json: true,
			qs: {
				api_key: process.env.GIPHY_KEY,
				tag,
				format: 'json',
				rating: 'r',
			},
		}).then((response) => {
			if (response && response.data && response.data.image_url) {
				return message.channel.send(response.data.image_url);
			} else {
				throw new Error('No gifs were found!');
			}
		});
	}

	public help(): string {
		return `\`!${this.trigger} [tag]\` displays a random doggo from giphy, or something else if you're more specific.\n\n`;
	}
}
