import {Message} from 'discord.js';
import * as request from 'request-promise-native';
import {Command} from './';

export class WoofCommand extends Command {
	public readonly trigger = 'woof';

	public execute(message: Message, _: string[]): Promise<Message | Message[]> {
		return request.get(`https://api.giphy.com/v1/gifs/random`, {
			json: true,
			qs: {
				api_key: process.env.GIPHY_KEY,
				tag: 'doggo',
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
		return `\`!${this.trigger}\` displays a random doggo from giphy.\n\n`;
	}
}
