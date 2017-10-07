import {Message} from 'discord.js';
import {Command} from './';

export class HelpCommand extends Command {
	public readonly trigger = 'help';

	public execute(message: Message, args: string[]): Promise<Message | Message[]> {
		let help = '';

		if (args.length > 0) {
			help = "Sorry, but I'm not sure what command you're asking about...";

			this.manager.commands.forEach((command) => {
				if (command !== this && command.trigger === args[0].toLowerCase()) {
					help = command.help();
				}
			});
		} else {
			help = 'Choose which command you would like help with:\n\n';

			this.manager.commands.forEach((command) => {
				if (command !== this) {
					help += `\`!${this.trigger} ${command.trigger}\`\n\n`;
				}
			});
		}

		return message.channel.send(help);
	}
}
