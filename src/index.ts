import * as dotenv from 'dotenv';

dotenv.config();

import {Client, Message} from 'discord.js';
import {CommandManager} from './command.manager';
import {HelpCommand, RewardsCommand, WoofCommand} from './commands';

const client = new Client();
const commands = new CommandManager(client, {
	commands: [HelpCommand, RewardsCommand, WoofCommand],
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
