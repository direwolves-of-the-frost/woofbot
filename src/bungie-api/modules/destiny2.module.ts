import {Module} from '../module';

export interface DestinyManifest {
	version: string;
	mobileAssetContentPath: string;
	mobileGearAssetDataBases: Array<{version: number, path: string}>;
	mobileWorldContentPaths: {[languageCode: string]: string};
	mobileClanBannerDatabasePath: string;
	mobileGearCDN: {[assetType: string]: string};
}

export interface EntityDefinition {
	hash: number;
	index: number;
	redacted: boolean;
	[property: string]: any;
}

export class Destiny2Module extends Module {
	public getDestinyManifest(): Promise<DestinyManifest> {
		return this.client.get('Destiny2/Manifest');
	}

	public getDestinyEntityDefinition(entityType: string, itemHash: number): Promise<EntityDefinition> {
		return this.client.get(`Destiny2/Manifest/${entityType}/${itemHash}`);
	}

	public getClanWeeklyRewardState(groupId: number): Promise<EntityDefinition> {
		return this.client.get(`Destiny2/Clan/${groupId}/WeeklyRewardState`);
	}
}
