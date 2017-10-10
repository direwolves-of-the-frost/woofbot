import * as Defs from '../definitions';
import {Module} from '../module';

export class Destiny2Module extends Module {
	public getDestinyManifest(): Promise<Defs.DestinyManifest> {
		return this.client.get('Destiny2/Manifest');
	}

	public getDestinyEntityDefinition<T = Defs.DestinyDefinition>(entityType: string, itemHash: number): Promise<T> {
		return this.client.get(`Destiny2/Manifest/${entityType}/${itemHash}`);
	}

	public getDestinyMilestoneDefinition(milestoneHash: number): Promise<Defs.DestinyMilestoneDefinition> {
		return this.getDestinyEntityDefinition<Defs.DestinyMilestoneDefinition>('DestinyMilestoneDefinition', milestoneHash);
	}

	public searchDestinyPlayer(displayName: string, membershipType: Defs.BungieMembershipType = Defs.BungieMembershipType.All): Promise<Defs.UserInfoCard[]> {
		return this.client.get(`Destiny2/SearchDestinyPlayer/${Defs.BungieMembershipType[membershipType]}/${displayName}`);
	}

	public getProfile(membershipType: Defs.BungieMembershipType, membershipId: string, components: Defs.DestinyComponentType[] = [Defs.DestinyComponentType.Profiles]): Promise<Defs.DestinyProfileResponse> {
		return this.client.get(`Destiny2/${Defs.BungieMembershipType[membershipType]}/Profile/${membershipId}`, {
			components: components.join(','),
		});
	}

	public getCharacter(membershipType: Defs.BungieMembershipType, membershipId: string, characterId: string, components: Defs.DestinyComponentType[] = [Defs.DestinyComponentType.Characters]): Promise<Defs.DestinyCharacterResponse> {
		return this.client.get(`Destiny2/${Defs.BungieMembershipType[membershipType]}/Profile/${membershipId}/Character/${characterId}`, {
			components: components.join(','),
		});
	}

	public getClanWeeklyRewardState(groupId: number): Promise<Defs.DestinyMilestone> {
		return this.client.get(`Destiny2/Clan/${groupId}/WeeklyRewardState`);
	}
}
