import {Client, Message} from 'discord.js';
import * as dotenv from 'dotenv';
import {CommandManager, HelpCommand, WoofCommand} from './commands';

dotenv.config();

const client = new Client();
const commands = new CommandManager(client, {
	commands: [HelpCommand, WoofCommand],
});

client.on('message', (message: Message) => {
	if (message.author !== client.user) {
		commands.handleMessage(message);
	}

	console.log(`${message.author.username}: ${message.cleanContent}`);
});

client.on('ready', () => {
	console.log('Client ready!');
});

client.login(process.env.DISCORD_LOGIN);
