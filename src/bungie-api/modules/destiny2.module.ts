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

export interface DestinyObjectiveProgress {
	objectiveHash: number;
	destinationHash?: number;
	activityHash?: number;
	progress?: number;
	complete: boolean;
}

export interface DestinyQuestStatus {
	questHash: number;
	stepHash: number;
	stepObjectives: DestinyObjectiveProgress[];
	tracked: boolean;
	itemInstanceId: string;
	completed: boolean;
	redeemed: boolean;
	started: boolean;
	vendorHash?: number;
}

export interface DestinyMilestoneActivityPhase {
	complete: boolean;
}

export interface DestinyMilestoneActivityCompletionStatus {
	completed: boolean;
	phases: DestinyMilestoneActivityPhase[];
}

export interface DestinyMilestoneActivityVariant {
	activityHash: number;
	completionStatus: DestinyMilestoneActivityCompletionStatus;
}

export interface DestinyMilestoneActivity {
	activityHash: number;
	modifierHashes: number[];
	variants: DestinyMilestoneActivityVariant[];
}

export interface DestinyChallengeStatus {
	objective: DestinyObjectiveProgress;
}

export interface DestinyMilestoneQuest {
	questItemHash: number;
	status: DestinyQuestStatus;
	activity: DestinyMilestoneActivity;
	challenges: DestinyChallengeStatus[];
}

export interface DestinyMilestoneRewardEntry {
	rewardEntryHash: number;
	earned: boolean;
	redeemed: boolean;
}

export interface DestinyMilestoneRewardCategory {
	rewardCategoryHash: number;
	entries: DestinyMilestoneRewardEntry[];
}

export interface DestinyMilestone {
	milestoneHash: number;
	availableQuests: DestinyMilestoneQuest[];
	values: {[key: string]: number};
	vendorHashes: number[];
	rewards: DestinyMilestoneRewardCategory[];
	startDate?: string;
	endDate?: string;
}

export class Destiny2Module extends Module {
	public getDestinyManifest(): Promise<DestinyManifest> {
		return this.client.get('Destiny2/Manifest');
	}

	public getDestinyEntityDefinition(entityType: string, itemHash: number): Promise<EntityDefinition> {
		return this.client.get(`Destiny2/Manifest/${entityType}/${itemHash}`);
	}

	public getClanWeeklyRewardState(groupId: number): Promise<DestinyMilestone> {
		return this.client.get(`Destiny2/Clan/${groupId}/WeeklyRewardState`);
	}
}
