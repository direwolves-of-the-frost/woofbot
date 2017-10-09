import {DestinyDefinition, DestinyManifest, DestinyMilestone, DestinyMilestoneDefinition} from '../definitions';
import {Module} from '../module';

export class Destiny2Module extends Module {
	public getDestinyManifest(): Promise<DestinyManifest> {
		return this.client.get('Destiny2/Manifest');
	}

	public getDestinyEntityDefinition<T = DestinyDefinition>(entityType: string, itemHash: number): Promise<T> {
		return this.client.get(`Destiny2/Manifest/${entityType}/${itemHash}`);
	}

	public getDestinyMilestoneDefinition(milestoneHash: number): Promise<DestinyMilestoneDefinition> {
		return this.getDestinyEntityDefinition<DestinyMilestoneDefinition>('DestinyMilestoneDefinition', milestoneHash);
	}

	public getClanWeeklyRewardState(groupId: number): Promise<DestinyMilestone> {
		return this.client.get(`Destiny2/Clan/${groupId}/WeeklyRewardState`);
	}
}
