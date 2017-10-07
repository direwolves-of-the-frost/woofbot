import {Message} from 'discord.js';
import {CommandManager} from './';

export abstract class Command {
	public readonly abstract trigger: string;
	protected manager: CommandManager;

	constructor(manager: CommandManager) {
		this.manager = manager;
	}

	public abstract execute(message: Message, args: string[]): Promise<Message | Message[]>;

	public help(): string {
		return `!${this.trigger}`;
	}
}
