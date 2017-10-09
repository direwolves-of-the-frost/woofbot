/*
 * THIS FILE IS AUTO GENERATED! DO NOT EDIT!
 */

export enum ApplicationScopes {
	ReadBasicUserProfile = 1,
	ReadGroups = 2,
	WriteGroups = 4,
	AdminGroups = 8,
	BnetWrite = 16,
	MoveEquipDestinyItems = 32,
	ReadDestinyInventoryAndVault = 64,
	ReadUserData = 128,
	EditUserData = 256,
	ReadDestinyVendorsAndAdvisors = 512,
	ReadAndApplyTokens = 1024,
}

export interface GeneralUser {
	membershipId: number;
	uniqueName: string;
	normalizedName: string;
	displayName: string;
	profilePicture: number;
	profileTheme: number;
	userTitle: number;
	successMessageFlags: number;
	isDeleted: boolean;
	about: string;
	firstAccess?: string;
	lastUpdate?: string;
	legacyPortalUID?: number;
	context: UserToUserContext;
	psnDisplayName: string;
	xboxDisplayName: string;
	fbDisplayName: string;
	showActivity?: boolean;
	locale: string;
	localeInheritDefault: boolean;
	lastBanReportId?: number;
	showGroupMessaging: boolean;
	profilePicturePath: string;
	profilePictureWidePath: string;
	profileThemeName: string;
	userTitleDisplay: string;
	statusText: string;
	statusDate: string;
	profileBanExpire?: string;
	blizzardDisplayName: string;
}

export interface UserToUserContext {
	isFollowing: boolean;
	ignoreStatus: IgnoreResponse;
	globalIgnoreEndDate?: string;
}

export interface IgnoreResponse {
	isIgnored: boolean;
	ignoreFlags: IgnoreStatus;
}

export enum IgnoreStatus {
	NotIgnored = 0,
	IgnoredUser = 1,
	IgnoredGroup = 2,
	IgnoredByGroup = 4,
	IgnoredPost = 8,
	IgnoredTag = 16,
	IgnoredGlobal = 32,
}

export interface UserAlias {
	cachePrefix: string;
}

export interface UserTheme {
	userThemeId: number;
	userThemeName: string;
	userThemeDescription: string;
}

/**
 * The types of membership the Accounts system supports. This is the external facing enum used in place of the internal-only Bungie.SharedDefinitions.MembershipType.
 */
export enum BungieMembershipType {
	None = 0,
	TigerXbox = 1,
	TigerPsn = 2,
	TigerBlizzard = 4,
	TigerDemon = 10,
	BungieNext = 254,
	All = -1,
}

export interface UserMembershipData {
	/**
	 * this allows you to see destiny memberships that are visible and linked to this account (regardless of whether or not they have characters on the world server)
	 */
	destinyMemberships: UserInfoCard[];
	bungieNetUser: GeneralUser;
}

/**
 * Very basic info about a user as returned by the Account server.
 */
export interface UserMembership {
	/**
	 * Type of the membership.
	 */
	membershipType: BungieMembershipType;
	/**
	 * Membership ID as they user is known in the Accounts service
	 */
	membershipId: number;
	/**
	 * Display Name the player has chosen for themselves. The display name is optional when the data type is used as input to a platform API.
	 */
	displayName: string;
}

/**
 * This contract supplies basic information commonly used to display a minimal amount of information about a user. Take care to not add more properties here unless the property applies in all (or at least the majority) of the situations where UserInfoCard is used. Avoid adding game specific or platform specific details here. In cases where UserInfoCard is a subset of the data needed in a contract, use UserInfoCard as a property of other contracts.
 */
export interface UserInfoCard {
	/**
	 * A platform specific additional display name - ex: psn Real Name, bnet Unique Name, etc.
	 */
	supplementalDisplayName: string;
	/**
	 * URL the Icon if available.
	 */
	iconPath: string;
	/**
	 * Type of the membership.
	 */
	membershipType: BungieMembershipType;
	/**
	 * Membership ID as they user is known in the Accounts service
	 */
	membershipId: number;
	/**
	 * Display Name the player has chosen for themselves. The display name is optional when the data type is used as input to a platform API.
	 */
	displayName: string;
}

/**
 * All the partnership info that's fit to expose externally, if we care to do so.
 */
export interface PublicPartnershipDetail {
	partnerType: PartnershipType;
	identifier: string;
	name: string;
	icon: string;
}

/**
 * Representing external partners to which BNet users can link accounts, but that are not Account System credentials: partnerships that BNet uses exclusively for data.
 */
export enum PartnershipType {
	None = 0,
	Twitch = 1,
}

export enum ForumTopicsCategoryFiltersEnum {
	None = 0,
	Links = 1,
	Questions = 2,
	AnsweredQuestions = 4,
	Media = 8,
	TextOnly = 16,
	Announcement = 32,
	BungieOfficial = 64,
	Polls = 128,
}

export enum ForumTopicsQuickDateEnum {
	All = 0,
	LastYear = 1,
	LastMonth = 2,
	LastWeek = 3,
	LastDay = 4,
}

export enum ForumTopicsSortEnum {
	Default = 0,
	LastReplied = 1,
	MostReplied = 2,
	Popularity = 3,
	Controversiality = 4,
	Liked = 5,
	HighestRated = 6,
	MostUpvoted = 7,
}

export interface PostResponse {
	lastReplyTimestamp: string;
	IsPinned: boolean;
	urlMediaType: ForumMediaType;
	thumbnail: string;
	popularity: ForumPostPopularity;
	isActive: boolean;
	isAnnouncement: boolean;
	userRating: number;
	userHasRated: boolean;
	userHasMutedPost: boolean;
	latestReplyPostId: number;
	latestReplyAuthorId: number;
	ignoreStatus: IgnoreResponse;
	locale: string;
}

export enum ForumMediaType {
	None = 0,
	Image = 1,
	Video = 2,
	Youtube = 3,
}

export enum ForumPostPopularity {
	Empty = 0,
	Default = 1,
	Discussed = 2,
	CoolStory = 3,
	HeatingUp = 4,
	Hot = 5,
}

export enum ForumPostCategoryEnums {
	None = 0,
	TextOnly = 1,
	Media = 2,
	Link = 4,
	Poll = 8,
	Question = 16,
	Answered = 32,
	Announcement = 64,
	ContentComment = 128,
	BungieOfficial = 256,
	NinjaOfficial = 512,
	Recruitment = 1024,
}

export enum ForumFlagsEnum {
	None = 0,
	BungieStaffPost = 1,
	ForumNinjaPost = 2,
	ForumMentorPost = 4,
	TopicBungieStaffPosted = 8,
	TopicBungieVolunteerPosted = 16,
	QuestionAnsweredByBungie = 32,
	QuestionAnsweredByNinja = 64,
	CommunityContent = 128,
}

export interface SearchResult {
	totalResults: number;
	hasMore: boolean;
	query: PagedQuery;
	replacementContinuationToken: string;
	/**
	 * If useTotalResults is true, then totalResults represents an accurate count.
	 * If False, it does not, and may be estimated/only the size of the current page.
	 * Either way, you should probably always only trust hasMore.
	 * This is a long-held historical throwback to when we used to do paging with known total results. Those queries toasted our database, and we were left to hastily alter our endpoints and create backward- compatible shims, of which useTotalResults is one.
	 */
	useTotalResults: boolean;
}

export interface PagedQuery {
	itemsPerPage: number;
	currentPage: number;
	requestContinuationToken: string;
}

export interface SearchResultOfPostResponse {
	results: PostResponse[];
	totalResults: number;
	hasMore: boolean;
	query: PagedQuery;
	replacementContinuationToken: string;
	/**
	 * If useTotalResults is true, then totalResults represents an accurate count.
	 * If False, it does not, and may be estimated/only the size of the current page.
	 * Either way, you should probably always only trust hasMore.
	 * This is a long-held historical throwback to when we used to do paging with known total results. Those queries toasted our database, and we were left to hastily alter our endpoints and create backward- compatible shims, of which useTotalResults is one.
	 */
	useTotalResults: boolean;
}

export interface PostSearchResponse {
	relatedPosts: PostResponse[];
	authors: GeneralUser[];
	groups: GroupResponse[];
	searchedTags: TagResponse[];
	polls: PollResponse[];
	recruitmentDetails: ForumRecruitmentDetail[];
	availablePages?: number;
	results: PostResponse[];
	totalResults: number;
	hasMore: boolean;
	query: PagedQuery;
	replacementContinuationToken: string;
	/**
	 * If useTotalResults is true, then totalResults represents an accurate count.
	 * If False, it does not, and may be estimated/only the size of the current page.
	 * Either way, you should probably always only trust hasMore.
	 * This is a long-held historical throwback to when we used to do paging with known total results. Those queries toasted our database, and we were left to hastily alter our endpoints and create backward- compatible shims, of which useTotalResults is one.
	 */
	useTotalResults: boolean;
}

export interface GroupResponse {
	detail: GroupV2;
	founder: GroupMember;
	alliedIds: number[];
	parentGroup: GroupV2;
	allianceStatus: GroupAllianceStatus;
	groupJoinInviteCount: number;
	/**
	 * This property will be populated if the authenticated user is a member of the group. Note that because of account linking, a user can sometimes be part of a clan more than once. As such, this returns the highest member type available.
	 */
	currentUserMemberMap: {[field: number]: GroupMember};
	/**
	 * This property will be populated if the authenticated user is an applicant or has an outstanding invitation to join. Note that because of account linking, a user can sometimes be part of a clan more than once.
	 */
	currentUserPotentialMemberMap: {[field: number]: GroupPotentialMember};
}

export interface GroupV2 {
	groupId: number;
	name: string;
	groupType: GroupType;
	membershipIdCreated: number;
	creationDate: string;
	modificationDate: string;
	about: string;
	tags: string[];
	memberCount: number;
	isPublic: boolean;
	isPublicTopicAdminOnly: boolean;
	primaryAlliedGroupId: number;
	motto: string;
	allowChat: boolean;
	isDefaultPostPublic: boolean;
	chatSecurity: ChatSecuritySetting;
	locale: string;
	avatarImageIndex: number;
	homepage: GroupHomepage;
	membershipOption: MembershipOption;
	defaultPublicity: GroupPostPublicity;
	theme: string;
	bannerPath: string;
	avatarPath: string;
	isAllianceOwner: boolean;
	conversationId: number;
	enableInvitationMessagingForAdmins: boolean;
	banExpireDate?: string;
	features: GroupFeatures;
	clanInfo: GroupV2ClanInfoAndInvestment;
}

export enum GroupType {
	General = 0,
	Clan = 1,
}

export enum ChatSecuritySetting {
	Group = 0,
	Admins = 1,
}

export enum GroupHomepage {
	Wall = 0,
	Forum = 1,
	AllianceForum = 2,
}

export enum MembershipOption {
	Reviewed = 0,
	Open = 1,
	Closed = 2,
}

export enum GroupPostPublicity {
	Public = 0,
	Alliance = 1,
	Private = 2,
}

export interface GroupFeatures {
	maximumMembers: number;
	/**
	 * Maximum number of groups of this type a typical membership may join. For example, a user may join about 50 General groups with their Bungie.net account. They may join one clan per Destiny membership.
	 */
	maximumMembershipsOfGroupType: number;
	capabilities: Capabilities;
	membershipTypes: BungieMembershipType[];
	/**
	 * Minimum Member Level allowed to invite new members to group
	 * Always Allowed: Founder, Acting Founder
	 * True means admins have this power, false means they don't
	 * Default is false for clans, true for groups.
	 */
	invitePermissionOverride: boolean;
	/**
	 * Minimum Member Level allowed to update group culture
	 * Always Allowed: Founder, Acting Founder
	 * True means admins have this power, false means they don't
	 * Default is false for clans, true for groups.
	 */
	updateCulturePermissionOverride: boolean;
	/**
	 * Minimum Member Level allowed to host guided games
	 * Always Allowed: Founder, Acting Founder, Admin
	 * Allowed Overrides: None, Member, Beginner
	 * Default is Member for clans, None for groups, although this means nothing for groups.
	 */
	hostGuidedGamePermissionOverride: HostGuidedGamesPermissionLevel;
	/**
	 * Minimum Member Level allowed to update banner
	 * Always Allowed: Founder, Acting Founder
	 * True means admins have this power, false means they don't
	 * Default is false for clans, true for groups.
	 */
	updateBannerPermissionOverride: boolean;
	/**
	 * Level to join a member at when accepting an invite, application, or joining an open clan
	 * Default is Beginner.
	 */
	joinLevel: RuntimeGroupMemberType;
}

export enum Capabilities {
	None = 0,
	Leaderboards = 1,
	Callsign = 2,
	OptionalConversations = 4,
	ClanBanner = 8,
	D2InvestmentData = 16,
	Tags = 32,
	Alliances = 64,
}

/**
 * Used for setting the guided game permission level override (admins and founders can always host guided games).
 */
export enum HostGuidedGamesPermissionLevel {
	None = 0,
	Beginner = 1,
	Member = 2,
}

/**
 * The member levels used by all V2 Groups API. Individual group types use their own mappings in their native storage (general uses BnetDbGroupMemberType and D2 clans use ClanMemberLevel), but they are all translated to this in the runtime api. These runtime values should NEVER be stored anywhere, so the values can be changed as necessary.
 */
export enum RuntimeGroupMemberType {
	None = 0,
	Beginner = 1,
	Member = 2,
	Admin = 3,
	ActingFounder = 4,
	Founder = 5,
}

/**
 * This contract contains clan-specific group information. It does not include any investment data.
 */
export interface GroupV2ClanInfo {
	clanCallsign: string;
	clanBannerData: ClanBanner;
}

export interface ClanBanner {
	decalId: number;
	decalColorId: number;
	decalBackgroundColorId: number;
	gonfalonId: number;
	gonfalonColorId: number;
	gonfalonDetailId: number;
	gonfalonDetailColorId: number;
}

/**
 * The same as GroupV2ClanInfo, but includes any investment data.
 */
export interface GroupV2ClanInfoAndInvestment {
	d2ClanProgressions: {[field: number]: DestinyProgression};
	clanCallsign: string;
	clanBannerData: ClanBanner;
}

/**
 * Information about a current character's status with a Progression. A progression is a value that can increase with activity and has levels. Think Character Level and Reputation Levels. Combine this "live" data with the related DestinyProgressionDefinition for a full picture of the Progression.
 */
export interface DestinyProgression {
	/**
	 * The hash identifier of the Progression in question. Use it to look up the DestinyProgressionDefinition in static data.
	 */
	progressionHash: number;
	/**
	 * The amount of progress earned today for this progression.
	 */
	dailyProgress: number;
	/**
	 * If this progression has a daily limit, this is that limit.
	 */
	dailyLimit: number;
	/**
	 * The amount of progress earned toward this progression in the current week.
	 */
	weeklyProgress: number;
	/**
	 * If this progression has a weekly limit, this is that limit.
	 */
	weeklyLimit: number;
	/**
	 * This is the total amount of progress obtained overall for this progression (for instance, the total amount of Character Level experience earned)
	 */
	currentProgress: number;
	/**
	 * This is the level of the progression (for instance, the Character Level).
	 */
	level: number;
	/**
	 * This is the maximum possible level you can achieve for this progression (for example, the maximum character level obtainable)
	 */
	levelCap: number;
	/**
	 * Progressions define their levels in "steps". Since the last step may be repeatable, the user may be at a higher level than the actual Step achieved in the progression. Not necessarily useful, but potentially interesting for those cruising the API. Relate this to the "steps" property of the DestinyProgression to see which step the user is on, if you care about that. (Note that this is Content Version dependent since it refers to indexes.)
	 */
	stepIndex: number;
	/**
	 * The amount of progression (i.e. "Experience") needed to reach the next level of this Progression. Jeez, progression is such an overloaded word.
	 */
	progressToNextLevel: number;
	/**
	 * The total amount of progression (i.e. "Experience") needed in order to reach the next level.
	 */
	nextLevelAt: number;
}

/**
 * Provides common properties for destiny definitions.
 */
export interface DestinyDefinition {
	/**
	 * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
	 * When entities refer to each other in Destiny content, it is this hash that they are referring to.
	 */
	hash: number;
	/**
	 * The index of the entity as it was found in the investment tables.
	 */
	index: number;
	/**
	 * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
	 */
	redacted: boolean;
}

/**
 * A "Progression" in Destiny is best explained by an example.
 * A Character's "Level" is a progression: it has Experience that can be earned, levels that can be gained, and is evaluated and displayed at various points in the game. A Character's "Faction Reputation" is also a progression for much the same reason.
 * Progression is used by a variety of systems, and the definition of a Progression will generally only be useful if combining with live data (such as a character's DestinyCharacterProgressionComponent.progressions property, which holds that character's live Progression states).
 * Fundamentally, a Progression measures your "Level" by evaluating the thresholds in its Steps (one step per level, except for the last step which can be repeated indefinitely for "Levels" that have no ceiling) against the total earned "progression points"/experience. (for simplicity purposes, we will henceforth refer to earned progression points as experience, though it need not be a mechanic that in any way resembles Experience in a traditional sense).
 * Earned experience is calculated in a variety of ways, determined by the Progression's scope. These go from looking up a stored value to performing exceedingly obtuse calculations. This is why we provide live data in DestinyCharacterProgressionComponent.progressions, so you don't have to worry about those.
 */
export interface DestinyProgressionDefinition {
	displayProperties: DestinyProgressionDisplayPropertiesDefinition;
	/**
	 * The "Scope" of the progression indicates the source of the progression's live data.
	 * See the DestinyProgressionScope enum for more info: but essentially, a Progression can either be backed by a stored value, or it can be a calculated derivative of other values.
	 */
	scope: DestinyProgressionScope;
	/**
	 * If this is True, then the progression doesn't have a maximum level.
	 */
	repeatLastStep: boolean;
	/**
	 * If there's a description of how to earn this progression in the local config, this will be that localized description.
	 */
	source: string;
	/**
	 * Progressions are divided into Steps, which roughly equate to "Levels" in the traditional sense of a Progression. Notably, the last step can be repeated indefinitely if repeatLastStep is true, meaning that the calculation for your level is not as simple as comparing your current progress to the max progress of the steps.
	 * These and more calculations are done for you if you grab live character progression data, such as in the DestinyCharacterProgressionComponent.
	 */
	steps: DestinyProgressionStepDefinition[];
	/**
	 * If true, the Progression is something worth showing to users.
	 * If false, BNet isn't going to show it. But that doesn't mean you can't. We're all friends here.
	 */
	visible: boolean;
	/**
	 * If the value exists, this is the hash identifier for the Faction that owns this Progression.
	 * This is purely for convenience, if you're looking at a progression and want to know if and who it's related to in terms of Faction Reputation.
	 */
	factionHash?: number;
	/**
	 * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
	 * When entities refer to each other in Destiny content, it is this hash that they are referring to.
	 */
	hash: number;
	/**
	 * The index of the entity as it was found in the investment tables.
	 */
	index: number;
	/**
	 * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
	 */
	redacted: boolean;
}

/**
 * Many Destiny*Definition contracts - the "first order" entities of Destiny that have their own tables in the Manifest Database - also have displayable information. This is the base class for that display information.
 */
export interface DestinyDisplayPropertiesDefinition {
	description: string;
	name: string;
	/**
	 * Note that "icon" is sometimes misleading, and should be interpreted in the context of the entity. For instance, in Destiny 1 the DestinyRecordBookDefinition's icon was a big picture of a book.
	 * But usually, it will be a small square image that you can use as... well, an icon.
	 */
	icon: string;
	hasIcon: boolean;
}

export interface DestinyProgressionDisplayPropertiesDefinition {
	/**
	 * When progressions show your "experience" gained, that bar has units (i.e. "Experience", "Bad Dudes Snuffed Out", whatever). This is the localized string for that unit of measurement.
	 */
	displayUnitsName: string;
	description: string;
	name: string;
	/**
	 * Note that "icon" is sometimes misleading, and should be interpreted in the context of the entity. For instance, in Destiny 1 the DestinyRecordBookDefinition's icon was a big picture of a book.
	 * But usually, it will be a small square image that you can use as... well, an icon.
	 */
	icon: string;
	hasIcon: boolean;
}

/**
 * There are many Progressions in Destiny (think Character Level, or Reputation). These are the various "Scopes" of Progressions, which affect many things: * Where/if they are stored * How they are calculated * Where they can be used in other game logic
 */
export enum DestinyProgressionScope {
	Account = 0,
	Character = 1,
	Clan = 2,
	Item = 3,
	ImplicitFromEquipment = 4,
	Mapped = 5,
	MappedAggregate = 6,
	MappedStat = 7,
	MappedUnlockValue = 8,
}

/**
 * This defines a single Step in a progression (which roughly equates to a level. See DestinyProgressionDefinition for caveats).
 */
export interface DestinyProgressionStepDefinition {
	/**
	 * Very rarely, Progressions will have localized text describing the Level of the progression. This will be that localized text, if it exists. Otherwise, the standard appears to be to simply show the level numerically.
	 */
	stepName: string;
	/**
	 * This appears to be, when you "level up", whether a visual effect will display and on what entity. See DestinyProgressionStepDisplayEffect for slightly more info.
	 */
	displayEffectType: DestinyProgressionStepDisplayEffect;
	/**
	 * The total amount of progression points/"experience" you will need to initially reach this step. If this is the last step and the progression is repeating indefinitely (DestinyProgressionDefinition.repeatLastStep), this will also be the progress needed to level it up further by repeating this step again.
	 */
	progressTotal: number;
	/**
	 * A listing of items rewarded as a result of reaching this level.
	 */
	rewardItems: DestinyItemQuantity[];
}

/**
 * If progression is earned, this determines whether the progression shows visual effects on the character or its item - or neither.
 */
export enum DestinyProgressionStepDisplayEffect {
	None = 0,
	Character = 1,
	Item = 2,
}

/**
 * Used in a number of Destiny contracts to return data about an item stack and its quantity. Can optionally return an itemInstanceId if the item is instanced - in which case, the quantity returned will be 1. If it's not... uh, let me know okay? Thanks.
 */
export interface DestinyItemQuantity {
	/**
	 * The hash identifier for the item in question. Use it to look up the item's DestinyInventoryItemDefinition.
	 */
	itemHash: number;
	/**
	 * If this quantity is referring to a specific instance of an item, this will have the item's instance ID. Normally, this will be null.
	 */
	itemInstanceId?: number;
	/**
	 * The amount of the item needed/available depending on the context of where DestinyItemQuantity is being used.
	 */
	quantity: number;
}

/**
 * So much of what you see in Destiny is actually an Item used in a new and creative way. This is the definition for Items in Destiny, which started off as just entities that could exist in your Inventory but ended up being the backing data for so much more: quests, reward previews, slots, and subclasses.
 * In practice, you will want to associate this data with "live" item data from a Bungie.Net Platform call: these definitions describe the item in generic, non-instanced terms: but an actual instance of an item can vary widely from these generic definitions.
 */
export interface DestinyInventoryItemDefinition {
	displayProperties: DestinyDisplayPropertiesDefinition;
	/**
	 * A secondary icon associated with the item. Currently this is used in very context specific applications, such as Emblem Nameplates.
	 */
	secondaryIcon: string;
	/**
	 * Pulled from the secondary icon, this is the "secondary background" of the secondary icon. Confusing? Sure, that's why I call it "overlay" here: because as far as it's been used thus far, it has been for an optional overlay image. We'll see if that holds up, but at least for now it explains what this image is a bit better.
	 */
	secondaryOverlay: string;
	/**
	 * Pulled from the Secondary Icon, this is the "special" background for the item. For Emblems, this is the background image used on the Details view: but it need not be limited to that for other types of items.
	 */
	secondarySpecial: string;
	/**
	 * If we were able to acquire an in-game screenshot for the item, the path to that screenshot will be returned here. Note that not all items have screenshots: particularly not any non-equippable items.
	 */
	screenshot: string;
	/**
	 * The localized title/name of the item's type. This can be whatever the designers want, and has no guarantee of consistency between items.
	 */
	itemTypeDisplayName: string;
	/**
	 * It became a common enough pattern in our UI to show Item Type and Tier combined into a single localized string that I'm just going to go ahead and start pre-creating these for items.
	 */
	itemTypeAndTierDisplayName: string;
	/**
	 * In theory, it is a localized string telling you about how you can find the item. I really wish this was more consistent. Many times, it has nothing. Sometimes, it's instead a more narrative-forward description of the item. Which is cool, and I wish all properties had that data, but it should really be its own property.
	 */
	displaySource: string;
	/**
	 * An identifier that the game UI uses to determine what type of tooltip to show for the item. These have no corresponding definitions that BNet can link to: so it'll be up to you to interpret and display your UI differently according to these styles (or ignore it).
	 */
	tooltipStyle: string;
	/**
	 * If the item can be "used", this block will be non-null, and will have data related to the action performed when using the item. (Guess what? 99% of the time, this action is "dismantle". Shocker)
	 */
	action: DestinyItemActionBlockDefinition;
	/**
	 * If this item can exist in an inventory, this block will be non-null. In practice, every item that currently exists has one of these blocks. But note that it is not necessarily guaranteed.
	 */
	inventory: DestinyItemInventoryBlockDefinition;
	/**
	 * If this item is a quest, this block will be non-null. In practice, I wish I had called this the Quest block, but at the time it wasn't clear to me whether it would end up being used for purposes other than quests. It will contain data about the steps in the quest, and mechanics we can use for displaying and tracking the quest.
	 */
	setData: DestinyItemSetBlockDefinition;
	/**
	 * If this item can have stats (such as a weapon, armor, or vehicle), this block will be non-null and populated with the stats found on the item.
	 */
	stats: DestinyItemStatBlockDefinition;
	/**
	 * If this item can be equipped, this block will be non-null and will be populated with the conditions under which it can be equipped.
	 */
	equippingBlock: DestinyEquippingBlockDefinition;
	/**
	 * If this item can be rendered, this block will be non-null and will be populated with rendering information.
	 */
	translationBlock: DestinyItemTranslationBlockDefinition;
	/**
	 * If this item can be Used or Acquired to gain other items (for instance, how Eververse Boxes can be consumed to get items from the box), this block will be non-null and will give summary information for the items that can be acquired.
	 */
	preview: DestinyItemPreviewBlockDefinition;
	/**
	 * If this item can have a level or stats, this block will be non-null and will be populated with default quality (item level, "quality", and infusion) data. See the block for more details, there's often less upfront information in D2 so you'll want to be aware of how you use quality and item level on the definition level now.
	 */
	quality: DestinyItemQualityBlockDefinition;
	/**
	 * The conceptual "Value" of an item, if any was defined. See the DestinyItemValueBlockDefinition for more details.
	 */
	value: DestinyItemValueBlockDefinition;
	/**
	 * If this item has a known source, this block will be non-null and populated with source information. Unfortunately, at this time we are not generating sources: that is some aggressively manual work which we didn't have time for, and I'm hoping to get back to at some point in the future.
	 */
	sourceData: DestinyItemSourceBlockDefinition;
	/**
	 * If this item has Objectives (extra tasks that can be accomplished related to the item... most frequently when the item is a Quest Step and the Objectives need to be completed to move on to the next Quest Step), this block will be non-null and the objectives defined herein.
	 */
	objectives: DestinyItemObjectiveBlockDefinition;
	/**
	 * If this item *is* a Plug, this will be non-null and the info defined herein. See DestinyItemPlugDefinition for more information.
	 */
	plug: DestinyItemPlugDefinition;
	/**
	 * If this item has related items in a "Gear Set", this will be non-null and the relationships defined herein.
	 */
	gearset: DestinyItemGearsetBlockDefinition;
	/**
	 * If this item is a "reward sack" that can be opened to provide other items, this will be non-null and the properties of the sack contained herein.
	 */
	sack: DestinyItemSackBlockDefinition;
	/**
	 * If this item has any Sockets, this will be non-null and the individual sockets on the item will be defined herein.
	 */
	sockets: DestinyItemSocketBlockDefinition;
	/**
	 * Summary data about the item.
	 */
	summary: DestinyItemSummaryBlockDefinition;
	/**
	 * If the item has a Talent Grid, this will be non-null and the properties of the grid defined herein. Note that, while many items still have talent grids, the only ones with meaningful Nodes still on them will be Subclass/"Build" items.
	 */
	talentGrid: DestinyItemTalentGridBlockDefinition;
	/**
	 * If the item has stats, this block will be defined. It has the "raw" investment stats for the item. These investment stats don't take into account the ways that the items can spawn, nor do they take into account any Stat Group transformations. I have retained them for debugging purposes, but I do not know how useful people will find them.
	 */
	investmentStats: DestinyItemInvestmentStatDefinition[];
	/**
	 * If the item has any *intrinsic* Perks (Perks that it will provide regardless of Sockets, Talent Grid, and other transitory state), they will be defined here.
	 */
	perks: DestinyItemPerkEntryDefinition[];
	/**
	 * If the item has any related Lore (DestinyLoreDefinition), this will be the hash identifier you can use to look up the lore definition.
	 */
	loreHash?: number;
	/**
	 * There are times when the game will show you a "summary/vague" version of an item - such as a description of its type represented as a DestinyInventoryItemDefinition - rather than display the item itself.
	 * This happens sometimes when summarizing possible rewards in a tooltip. This is the item displayed instead, if it exists.
	 */
	summaryItemHash?: number;
	/**
	 * If any animations were extracted from game content for this item, these will be the definitions of those animations.
	 */
	animations: DestinyAnimationReference[];
	/**
	 * BNet may forbid the execution of actions on this item via the API. If that is occurring, allowActions will be set to false.
	 */
	allowActions: boolean;
	/**
	 * If we added any help or informational URLs about this item, these will be those links.
	 */
	links: HyperlinkReference[];
	/**
	 * The intrinsic transferability of an item.
	 * I hate that this boolean is negative - but there's a reason.
	 * Just because an item is intrinsically transferrable doesn't mean that it can be transferred, and we don't want to imply that this is the only source of that transferability.
	 */
	nonTransferrable: boolean;
	/**
	 * BNet attempts to make a more formal definition of item "Categories", as defined by DestinyItemCategoryDefinition. This is a list of all Categories that we were able to algorithmically determine that this item is a member of. (for instance, that it's a "Weapon", that it's an "Auto Rifle", etc...)
	 * The algorithm for these is, unfortunately, volatile. If you believe you see a miscategorized item, please let us know on the Bungie API forums.
	 */
	itemCategoryHashes: number[];
	/**
	 * In Destiny 1, we identified some items as having particular categories that we'd like to know about for various internal logic purposes. These are defined in SpecialItemType, and while these days the itemCategoryHashes are the preferred way of identifying types, we have retained this enum for its convenience.
	 */
	specialItemType: SpecialItemType;
	/**
	 * A value indicating the "base" the of the item. This enum is a useful but dramatic oversimplification of what it means for an item to have a "Type". Still, it's handy in many situations.
	 * itemCategoryHashes are the preferred way of identifying types, we have retained this enum for its convenience.
	 */
	itemType: DestinyItemType;
	/**
	 * A value indicating the "sub-type" of the item. For instance, where an item might have an itemType value "Weapon", this will be something more specific like "Auto Rifle".
	 * itemCategoryHashes are the preferred way of identifying types, we have retained this enum for its convenience.
	 */
	itemSubType: DestinyItemSubType;
	/**
	 * We run a similarly weak-sauce algorithm to try and determine whether an item is restricted to a specific class. If we find it to be restricted in such a way, we set this classType property to match the class' enumeration value so that users can easily identify class restricted items.
	 * If you see a mis-classed item, please inform the developers in the Bungie API forum.
	 */
	classType: DestinyClass;
	/**
	 * If true, then you will be allowed to equip the item if you pass its other requirements.
	 * This being false means that you cannot equip the item under any circumstances.
	 */
	equippable: boolean;
	/**
	 * Theoretically, an item can have many possible damage types. In *practice*, this is not true, but just in case weapons start being made that have multiple (for instance, an item where a socket has reusable plugs for every possible damage type that you can choose from freely), this field will return all of the possible damage types that are available to the weapon by default.
	 */
	damageTypeHashes: number[];
	/**
	 * This is the list of all damage types that we know ahead of time the item can take on. Unfortunately, this does not preclude the possibility of something funky happening to give the item a damage type that cannot be predicted beforehand: for example, if some designer decides to create arbitrary non-reusable plugs that cause damage type to change.
	 * This damage type prediction will only use the following to determine potential damage types:
	 * - Intrinsic perks
	 * - Talent Node perks
	 * - Known, reusable plugs for sockets
	 */
	damageTypes: DamageType[];
	/**
	 * If the item has a damage type that could be considered to be default, it will be populated here.
	 * For various upsetting reasons, it's surprisingly cumbersome to figure this out. I hope you're happy.
	 */
	defaultDamageType: DamageType;
	/**
	 * Similar to defaultDamageType, but represented as the hash identifier for a DestinyDamageTypeDefinition.
	 * I will likely regret leaving in the enumeration versions of these properties, but for now they're very convenient.
	 */
	defaultDamageTypeHash?: number;
	/**
	 * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
	 * When entities refer to each other in Destiny content, it is this hash that they are referring to.
	 */
	hash: number;
	/**
	 * The index of the entity as it was found in the investment tables.
	 */
	index: number;
	/**
	 * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
	 */
	redacted: boolean;
}

/**
 * If an item can have an action performed on it (like "Dismantle"), it will be defined here if you care.
 */
export interface DestinyItemActionBlockDefinition {
	/**
	 * Localized text for the verb of the action being performed.
	 */
	verbName: string;
	/**
	 * Localized text describing the action being performed.
	 */
	verbDescription: string;
	/**
	 * The content has this property, however it's not entirely clear how it is used.
	 */
	isPositive: boolean;
	/**
	 * If the action has an overlay screen associated with it, this is the name of that screen. Unfortunately, we cannot return the screen's data itself.
	 */
	overlayScreenName: string;
	/**
	 * The icon associated with the overlay screen for the action, if any.
	 */
	overlayIcon: string;
	/**
	 * The number of seconds to delay before allowing this action to be performed again.
	 */
	requiredCooldownSeconds: number;
	/**
	 * If the action requires other items to exist or be destroyed, this is the list of those items and requirements.
	 */
	requiredItems: DestinyItemActionRequiredItemDefinition[];
	/**
	 * If performing this action earns you Progression, this is the list of progressions and values granted for those progressions by performing this action.
	 */
	progressionRewards: DestinyProgressionRewardDefinition[];
	/**
	 * The internal identifier for the action.
	 */
	actionTypeLabel: string;
	/**
	 * Theoretically, an item could have a localized string for a hint about the location in which the action should be performed. In practice, no items yet have this property.
	 */
	requiredLocation: string;
	/**
	 * The identifier hash for the Cooldown associated with this action. We have not pulled this data yet for you to have more data to use for cooldowns.
	 */
	requiredCooldownHash: number;
	/**
	 * If true, the item is deleted when the action completes.
	 */
	deleteOnAction: boolean;
	/**
	 * If true, the entire stack is deleted when the action completes.
	 */
	consumeEntireStack: boolean;
	/**
	 * If true, this action will be performed as soon as you earn this item. Some rewards work this way, providing you a single item to pick up from a reward-granting vendor in-game and then immediately consuming itself to provide you multiple items.
	 */
	useOnAcquire: boolean;
}

/**
 * The definition of an item and quantity required in a character's inventory in order to perform an action.
 */
export interface DestinyItemActionRequiredItemDefinition {
	/**
	 * The minimum quantity of the item you have to have.
	 */
	count: number;
	/**
	 * The hash identifier of the item you need to have. Use it to look up the DestinyInventoryItemDefinition for more info.
	 */
	itemHash: number;
	/**
	 * If true, the item/quantity will be deleted from your inventory when the action is performed. Otherwise, you'll retain these required items after the action is complete.
	 */
	deleteOnAction: boolean;
}

/**
 * Inventory Items can reward progression when actions are performed on them. A common example of this in Destiny 1 was Bounties, which would reward Experience on your Character and the like when you completed the bounty.
 * Note that this maps to a DestinyProgressionMappingDefinition, and *not* a DestinyProgressionDefinition directly. This is apparently so that multiple progressions can be granted progression points/experience at the same time.
 */
export interface DestinyProgressionRewardDefinition {
	/**
	 * The hash identifier of the DestinyProgressionMappingDefinition that contains the progressions for which experience should be applied.
	 */
	progressionMappingHash: number;
	/**
	 * The amount of experience to give to each of the mapped progressions.
	 */
	amount: number;
	/**
	 * If true, the game's internal mechanisms to throttle progression should be applied.
	 */
	applyThrottles: boolean;
}

/**
 * Aggregations of multiple progressions.
 * These are used to apply rewards to multiple progressions at once. They can sometimes have human readable data as well, but only extremely sporadically.
 */
export interface DestinyProgressionMappingDefinition {
	/**
	 * Infrequently defined in practice. Defer to the individual progressions' display properties.
	 */
	displayProperties: DestinyDisplayPropertiesDefinition;
	/**
	 * The localized unit of measurement for progression across the progressions defined in this mapping. Unfortunately, this is very infrequently defined. Defer to the individual progressions' display units.
	 */
	displayUnits: string;
	/**
	 * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
	 * When entities refer to each other in Destiny content, it is this hash that they are referring to.
	 */
	hash: number;
	/**
	 * The index of the entity as it was found in the investment tables.
	 */
	index: number;
	/**
	 * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
	 */
	redacted: boolean;
}

/**
 * If the item can exist in an inventory - the overwhelming majority of them can and do - then this is the basic properties regarding the item's relationship with the inventory.
 */
export interface DestinyItemInventoryBlockDefinition {
	/**
	 * If this string is populated, you can't have more than one stack with this label in a given inventory. Note that this is different from the equipping block's unique label, which is used for equipping uniqueness.
	 */
	stackUniqueLabel: string;
	/**
	 * The maximum quantity of this item that can exist in a stack.
	 */
	maxStackSize: number;
	/**
	 * The hash identifier for the DestinyInventoryBucketDefinition to which this item belongs. I should have named this "bucketHash", but too many things refer to it now. Sigh.
	 */
	bucketTypeHash: number;
	/**
	 * If the item is picked up by the lost loot queue, this is the hash identifier for the DestinyInventoryBucketDefinition into which it will be placed. Again, I should have named this recoveryBucketHash instead.
	 */
	recoveryBucketTypeHash: number;
	/**
	 * The hash identifier for the Tier Type of the item, use to look up its DestinyItemTierTypeDefinition if you need to show localized data for the item's tier.
	 */
	tierTypeHash: number;
	/**
	 * If TRUE, this item is instanced. Otherwise, it is a generic item that merely has a quantity in a stack (like Glimmer).
	 */
	isInstanceItem: boolean;
	/**
	 * The localized name of the tier type, which is a useful shortcut so you don't have to look up the definition every time. However, it's mostly a holdover from days before we had a DestinyItemTierTypeDefinition to refer to.
	 */
	tierTypeName: string;
	/**
	 * The enumeration matching the tier type of the item to known values, again for convenience sake.
	 */
	tierType: TierType;
}

export enum TierType {
	Unknown = 0,
	Currency = 1,
	Basic = 2,
	Common = 3,
	Rare = 4,
	Superior = 5,
	Exotic = 6,
}

/**
 * An Inventory (be it Character or Profile level) is comprised of many Buckets. An example of a bucket is "Primary Weapons", where all of the primary weapons on a character are gathered together into a single visual element in the UI: a subset of the inventory that has a limited number of slots, and in this case also has an associated Equipment Slot for equipping an item in the bucket.
 * Item definitions declare what their "default" bucket is (DestinyInventoryItemDefinition.inventory.bucketTypeHash), and Item instances will tell you which bucket they are currently residing in (DestinyItemComponent.bucketHash). You can use this information along with the DestinyInventoryBucketDefinition to show these items grouped by bucket.
 * You cannot transfer an item to a bucket that is not its Default without going through a Vendor's "accepted items" (DestinyVendorDefinition.acceptedItems). This is how transfer functionality like the Vault is implemented, as a feature of a Vendor. See the vendor's acceptedItems property for more details.
 */
export interface DestinyInventoryBucketDefinition {
	displayProperties: DestinyDisplayPropertiesDefinition;
	/**
	 * Where the bucket is found. 0 = Character, 1 = Account
	 */
	scope: BucketScope;
	/**
	 * An enum value for what items can be found in the bucket. See the BucketCategory enum for more details.
	 */
	category: BucketCategory;
	/**
	 * Use this property to provide a quick-and-dirty recommended ordering for buckets in the UI. Most UIs will likely want to forsake this for something more custom and manual.
	 */
	bucketOrder: number;
	/**
	 * The maximum # of item "slots" in a bucket. A slot is a given combination of item + quantity.
	 * For instance, a Weapon will always take up a single slot, and always have a quantity of 1. But a material could take up only a single slot with hundreds of quantity.
	 */
	itemCount: number;
	/**
	 * Sometimes, inventory buckets represent conceptual "locations" in the game that might not be expected. This value indicates the conceptual location of the bucket, regardless of where it is actually contained on the character/account.
	 * See ItemLocation for details.
	 * Note that location includes the Vault and the Postmaster (both of whom being just inventory buckets with additional actions that can be performed on them through a Vendor)
	 */
	location: ItemLocation;
	/**
	 * If TRUE, there is at least one Vendor that can transfer items to/from this bucket. See the DestinyVendorDefinition's acceptedItems property for more information on how transferring works.
	 */
	hasTransferDestination: boolean;
	/**
	 * If True, this bucket is enabled. Disabled buckets may include buckets that were included for test purposes, or that were going to be used but then were abandoned but never removed from content *cough*.
	 */
	enabled: boolean;
	/**
	 * if a FIFO bucket fills up, it will delete the oldest item from said bucket when a new item tries to be added to it. If this is FALSE, the bucket will not allow new items to be placed in it until room is made by the user manually deleting items from it. You can see an example of this with the Postmaster's bucket.
	 */
	fifo: boolean;
	/**
	 * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
	 * When entities refer to each other in Destiny content, it is this hash that they are referring to.
	 */
	hash: number;
	/**
	 * The index of the entity as it was found in the investment tables.
	 */
	index: number;
	/**
	 * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
	 */
	redacted: boolean;
}

export enum BucketScope {
	Character = 0,
	Account = 1,
}

export enum BucketCategory {
	Invisible = 0,
	Item = 1,
	Currency = 2,
	Equippable = 3,
	Ignored = 4,
}

export enum ItemLocation {
	Unknown = 0,
	Inventory = 1,
	Vault = 2,
	Vendor = 3,
	Postmaster = 4,
}

/**
 * Defines the tier type of an item. Mostly this provides human readable properties for types like Common, Rare, etc...
 * It also provides some base data for infusion that could be useful.
 */
export interface DestinyItemTierTypeDefinition {
	displayProperties: DestinyDisplayPropertiesDefinition;
	/**
	 * If this tier defines infusion properties, they will be contained here.
	 */
	infusionProcess: DestinyItemTierTypeInfusionBlock;
	/**
	 * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
	 * When entities refer to each other in Destiny content, it is this hash that they are referring to.
	 */
	hash: number;
	/**
	 * The index of the entity as it was found in the investment tables.
	 */
	index: number;
	/**
	 * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
	 */
	redacted: boolean;
}

export interface DestinyItemTierTypeInfusionBlock {
	/**
	 * The default portion of quality that will transfer from the infuser to the infusee item. (InfuserQuality - InfuseeQuality) * baseQualityTransferRatio = base quality transferred.
	 */
	baseQualityTransferRatio: number;
	/**
	 * As long as InfuserQuality > InfuseeQuality, the amount of quality bestowed is guaranteed to be at least this value, even if the transferRatio would dictate that it should be less. The total amount of quality that ends up in the Infusee cannot exceed the Infuser's quality however (for instance, if you infuse a 300 item with a 301 item and the minimum quality increment is 10, the infused item will not end up with 310 quality)
	 */
	minimumQualityIncrement: number;
}

/**
 * Primarily for Quests, this is the definition of properties related to the item if it is a quest and its various quest steps.
 */
export interface DestinyItemSetBlockDefinition {
	/**
	 * A collection of hashes of set items, for items such as Quest Metadata items that possess this data.
	 */
	itemList: DestinyItemSetBlockEntryDefinition[];
	/**
	 * If true, items in the set can only be added in increasing order, and adding an item will remove any previous item. For Quests, this is by necessity true. Only one quest step is present at a time, and previous steps are removed as you advance in the quest.
	 */
	requireOrderedSetItemAdd: boolean;
	/**
	 * If true, the UI should treat this quest as "featured"
	 */
	setIsFeatured: boolean;
	/**
	 * A string identifier we can use to attempt to identify the category of the Quest.
	 */
	setType: string;
}

/**
 * Defines a particular entry in an ItemSet (AKA a particular Quest Step in a Quest)
 */
export interface DestinyItemSetBlockEntryDefinition {
	/**
	 * Used for tracking which step a user reached. These values will be populated in the user's internal state, which we expose externally as a more usable DestinyQuestStatus object. If this item has been obtained, this value will be set in trackingUnlockValueHash.
	 */
	trackingValue: number;
	/**
	 * This is the hash identifier for a DestinyInventoryItemDefinition representing this quest step.
	 */
	itemHash: number;
}

/**
 * Information about the item's calculated stats, with as much data as we can find for the stats without having an actual instance of the item.
 * Note that this means the entire concept of providing these stats is fundamentally insufficient: we cannot predict with 100% accuracy the conditions under which an item can spawn, so we use various heuristics to attempt to simulate the conditions as accurately as possible. Actual stats for items in-game can and will vary, but these should at least be useful base points for comparison and display.
 * It is also worth noting that some stats, like Magazine size, have further calculations performed on them by scripts in-game and on the game servers that BNet does not have access to. We cannot know how those stats are further transformed, and thus some stats will be inaccurate even on instances of items in BNet vs. how they appear in-game. This is a known limitation of our item statistics, without any planned fix.
 */
export interface DestinyItemStatBlockDefinition {
	/**
	 * If the item's stats are meant to be modified by a DestinyStatGroupDefinition, this will be the identifier for that definition.
	 * If you are using live data or precomputed stats data on the DestinyInventoryItemDefinition.stats.stats property, you don't have to worry about statGroupHash and how it alters stats: the already altered stats are provided to you. But if you want to see how the sausage gets made, or perform computations yourself, this is valuable information.
	 */
	statGroupHash?: number;
	/**
	 * If you are looking for precomputed values for the stats on a weapon, this is where they are stored. Technically these are the "Display" stat values. Please see DestinyStatsDefinition for what Display Stat Values means, it's a very long story... but essentially these are the closest values BNet can get to the item stats that you see in-game.
	 * These stats are keyed by the DestinyStatDefinition's hash identifier for the stat that's found on the item.
	 */
	stats: {[field: number]: DestinyInventoryItemStatDefinition};
	/**
	 * A quick and lazy way to determine whether any stat other than the "primary" stat is actually visible on the item. Items often have stats that we return in case people find them useful, but they're not part of the "Stat Group" and thus we wouldn't display them in our UI. If this is False, then we're not going to display any of these stats other than the primary one.
	 */
	hasDisplayableStats: boolean;
	/**
	 * This stat is determined to be the "primary" stat, and can be looked up in the stats or any other stat collection related to the item.
	 * Use this hash to look up the stat's value using DestinyInventoryItemDefinition.stats.stats, and the renderable data for the primary stat in the related DestinyStatDefinition.
	 */
	primaryBaseStatHash: number;
}

/**
 * Defines a specific stat value on an item, and the minimum/maximum range that we could compute for the item based on our heuristics for how the item might be generated.
 * Not guaranteed to match real-world instances of the item, but should hopefully at least be close. If it's not close, let us know on the Bungie API forums.
 */
export interface DestinyInventoryItemStatDefinition {
	/**
	 * The hash for the DestinyStatDefinition representing this stat.
	 */
	statHash: number;
	/**
	 * This value represents the stat value assuming the minimum possible roll but accounting for any mandatory bonuses that should be applied to the stat on item creation.
	 * In Destiny 1, this was different from the "minimum" value because there were certain conditions where an item could be theoretically lower level/value than the initial roll.
	 * In Destiny 2, this is not possible unless Talent Grids begin to be used again for these purposes or some other system change occurs... thus in practice, value and minimum should be the same in Destiny 2. Good riddance.
	 */
	value: number;
	/**
	 * The minimum possible value for this stat that we think the item can roll.
	 */
	minimum: number;
	/**
	 * The maximum possible value for this stat that we think the item can roll.
	 */
	maximum: number;
}

/**
 * This represents a stat that's applied to a character or an item (such as a weapon, piece of armor, or a vehicle).
 * An example of a stat might be Attack Power on a weapon.
 * Stats go through a complex set of transformations before they end up being shown to the user as a number or a progress bar, and those transformations are fundamentally intertwined with the concept of a "Stat Group" (DestinyStatGroupDefinition). Items have both Stats and a reference to a Stat Group, and it is the Stat Group that takes the raw stat information and gives it both rendering metadata (such as whether to show it as a number or a progress bar) and the final transformation data (interpolation tables to turn the raw investment stat into a display stat). Please see DestinyStatGroupDefinition for more information on that transformational process.
 * Stats are segregated from Stat Groups because different items and types of items can refer to the same stat, but have different "scales" for the stat while still having the same underlying value. For example, both a Shotgun and an Auto Rifle may have a "raw" impact stat of 50, but the Auto Rifle's Stat Group will scale that 50 down so that, when it is displayed, it is a smaller value relative to the shotgun. (this is a totally made up example, don't assume shotguns have naturally higher impact than auto rifles because of this)
 * A final caveat is that some stats, even after this "final" transformation, go through yet another set of transformations directly in the game as a result of dynamic, stateful scripts that get run. BNet has no access to these scripts, nor any way to know which scripts get executed. As a result, the stats for an item that you see in-game - particularly for stats that are often impacted by Perks, like Magazine Size - can change dramatically from what we return on Bungie.Net. This is a known issue with no fix coming down the pipeline. Take these stats with a grain of salt.
 * Stats actually go through four transformations, for those interested:
 * 1) "Sandbox" stat, the "most raw" form. These are pretty much useless without transformations applied, and thus are not currently returned in the API. If you really want these, we can provide them. Maybe someone could do something cool with it?
 * 2) "Investment" stat (the stat's value after DestinyStatDefinition's interpolation tables and aggregation logic is applied to the "Sandbox" stat value)
 * 3) "Display" stat (the stat's base UI-visible value after DestinyStatGroupDefinition's interpolation tables are applied to the Investment Stat value. For most stats, this is what is displayed.)
 * 4) Underlying in-game stat (the stat's actual value according to the game, after the game runs dynamic scripts based on the game and character's state. This is the final transformation that BNet does not have access to. For most stats, this is not actually displayed to the user, with the exception of Magazine Size which is then piped back to the UI for display in-game, but not to BNet.)
 */
export interface DestinyStatDefinition {
	displayProperties: DestinyDisplayPropertiesDefinition;
	/**
	 * Stats can exist on a character or an item, and they may potentially be aggregated in different ways. The DestinyStatAggregationType enum value indicates the way that this stat is being aggregated.
	 */
	aggregationType: DestinyStatAggregationType;
	/**
	 * True if the stat is computed rather than being delivered as a raw value on items.
	 * For instance, the Light stat in Destiny 1 was a computed stat.
	 */
	hasComputedBlock: boolean;
	/**
	 * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
	 * When entities refer to each other in Destiny content, it is this hash that they are referring to.
	 */
	hash: number;
	/**
	 * The index of the entity as it was found in the investment tables.
	 */
	index: number;
	/**
	 * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
	 */
	redacted: boolean;
}

/**
 * When a Stat (DestinyStatDefinition) is aggregated, this is the rules used for determining the level and formula used for aggregation.
 * * CharacterAverage = apply a weighted average using the related DestinyStatGroupDefinition on the DestinyInventoryItemDefinition across the character's equipped items. See both of those definitions for details. * Character = don't aggregate: the stat should be located and used directly on the character. * Item = don't aggregate: the stat should be located and used directly on the item.
 */
export enum DestinyStatAggregationType {
	CharacterAverage = 0,
	Character = 1,
	Item = 2,
}

/**
 * When an inventory item (DestinyInventoryItemDefinition) has Stats (such as Attack Power), the item will refer to a Stat Group. This definition enumerates the properties used to transform the item's "Investment" stats into "Display" stats.
 * See DestinyStatDefinition's documentation for information about the transformation of Stats, and the meaning of an Investment vs. a Display stat.
 * If you don't want to do these calculations on your own, fear not: pulling live data from the BNet endpoints will return display stat values pre-computed and ready for you to use. I highly recommend this approach, saves a lot of time and also accounts for certain stat modifiers that can't easily be accounted for without live data (such as stat modifiers on Talent Grids and Socket Plugs)
 */
export interface DestinyStatGroupDefinition {
	/**
	 * The maximum possible value that any stat in this group can be transformed into.
	 * This is used by stats that *don't* have scaledStats entries below, but that still need to be displayed as a progress bar, in which case this is used as the upper bound for said progress bar. (the lower bound is always 0)
	 */
	maximumValue: number;
	/**
	 * This apparently indicates the position of the stats in the UI? I've returned it in case anyone can use it, but it's not of any use to us on BNet. Something's being lost in translation with this value.
	 */
	uiPosition: number;
	/**
	 * Any stat that requires scaling to be transformed from an "Investment" stat to a "Display" stat will have an entry in this list. For more information on what those types of stats mean and the transformation process, see DestinyStatDefinition.
	 * In retrospect, I wouldn't mind if this was a dictionary keyed by the stat hash instead. But I'm going to leave it be because [[After Apple Picking]].
	 */
	scaledStats: DestinyStatDisplayDefinition[];
	/**
	 * The game has the ability to override, based on the stat group, what the localized text is that is displayed for Stats being shown on the item.
	 * Mercifully, no Stat Groups use this feature currently. If they start using them, we'll all need to start using them (and those of you who are more prudent than I am can go ahead and start pre-checking for this.)
	 */
	overrides: {[field: number]: DestinyStatOverrideDefinition};
	/**
	 * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
	 * When entities refer to each other in Destiny content, it is this hash that they are referring to.
	 */
	hash: number;
	/**
	 * The index of the entity as it was found in the investment tables.
	 */
	index: number;
	/**
	 * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
	 */
	redacted: boolean;
}

/**
 * Describes the way that an Item Stat (see DestinyStatDefinition) is transformed using the DestinyStatGroupDefinition related to that item. See both of the aforementioned definitions for more information about the stages of stat transformation.
 * This represents the transformation of a stat into a "Display" stat (the closest value that BNet can get to the in-game display value of the stat)
 */
export interface DestinyStatDisplayDefinition {
	/**
	 * The hash identifier for the stat being transformed into a Display stat.
	 * Use it to look up the DestinyStatDefinition, or key into a DestinyInventoryItemDefinition's stats property.
	 */
	statHash: number;
	/**
	 * Regardless of the output of interpolation, this is the maximum possible value that the stat can be. It should also be used as the upper bound for displaying the stat as a progress bar (the minimum always being 0)
	 */
	maximumValue: number;
	/**
	 * If this is true, the stat should be displayed as a number. Otherwise, display it as a progress bar. Or, you know, do whatever you want. There's no displayAsNumeric police.
	 */
	displayAsNumeric: boolean;
	/**
	 * The interpolation table representing how the Investment Stat is transformed into a Display Stat.
	 * See DestinyStatDefinition for a description of the stages of stat transformation.
	 */
	displayInterpolation: InterpolationPoint[];
}

export interface InterpolationPoint {
	value: number;
	weight: number;
}

/**
 * Stat Groups (DestinyStatGroupDefinition) has the ability to override the localized text associated with stats that are to be shown on the items with which they are associated.
 * This defines a specific overridden stat. You could theoretically check these before rendering your stat UI, and for each stat that has an override show these displayProperties instead of those on the DestinyStatDefinition.
 * Or you could be like us, and skip that for now because the game has yet to actually use this feature. But know that it's here, waiting for a resilliant young designer to take up the mantle and make us all look foolish by showing the wrong name for stats.
 * Note that, if this gets used, the override will apply only to items using the overriding Stat Group. Other items will still show the default stat's name/description.
 */
export interface DestinyStatOverrideDefinition {
	/**
	 * The hash identifier of the stat whose display properties are being overridden.
	 */
	statHash: number;
	/**
	 * The display properties to show instead of the base DestinyStatDefinition display properties.
	 */
	displayProperties: DestinyDisplayPropertiesDefinition;
}

/**
 * Items that can be equipped define this block. It contains information we need to understand how and when the item can be equipped.
 */
export interface DestinyEquippingBlockDefinition {
	/**
	 * If the item is part of a gearset, this is a reference to that gearset item.
	 */
	gearsetItemHash?: number;
	/**
	 * If defined, this is the label used to check if the item has other items of matching types already equipped.
	 * For instance, when you aren't allowed to equip more than one Exotic Weapon, that's because all exotic weapons have identical uniqueLabels and the game checks the to-be-equipped item's uniqueLabel vs. all other already equipped items (other than the item in the slot that's about to be occupied).
	 */
	uniqueLabel: string;
	/**
	 * The hash of that unique label. Does not point to a specific definition.
	 */
	uniqueLabelHash: number;
	/**
	 * An equipped item *must* be equipped in an Equipment Slot. This is the hash identifier of the DestinyEquipmentSlotDefinition into which it must be equipped.
	 */
	equipmentSlotTypeHash: number;
	/**
	 * These are custom attributes on the equippability of the item.
	 * For now, this can only be "equip on acquire", which would mean that the item will be automatically equipped as soon as you pick it up.
	 */
	attributes: EquippingItemBlockAttributes;
	/**
	 * These are strings that represent the possible Game/Account/Character state failure conditions that can occur when trying to equip the item. They match up one-to-one with requiredUnlockExpressions.
	 */
	displayStrings: string[];
}

export enum EquippingItemBlockAttributes {
	None = 0,
	EquipOnAcquire = 1,
}

/**
 * Characters can not only have Inventory buckets (containers of items that are generally matched by their type or functionality), they can also have Equipment Slots.
 * The Equipment Slot is an indicator that the related bucket can have instanced items equipped on the character. For instance, the Primary Weapon bucket has an Equipment Slot that determines whether you can equip primary weapons, and holds the association between its slot and the inventory bucket from which it can have items equipped.
 * An Equipment Slot must have a related Inventory Bucket, but not all inventory buckets must have Equipment Slots.
 */
export interface DestinyEquipmentSlotDefinition {
	displayProperties: DestinyDisplayPropertiesDefinition;
	/**
	 * These technically point to "Equipment Category Definitions". But don't get excited. There's nothing of significant value in those definitions, so I didn't bother to expose them. You can use the hash here to group equipment slots by common functionality, which serves the same purpose as if we had the Equipment Category definitions exposed.
	 */
	equipmentCategoryHash: number;
	/**
	 * The inventory bucket that owns this equipment slot.
	 */
	bucketTypeHash: number;
	/**
	 * If True, equipped items should have their custom art dyes applied when rendering the item. Otherwise, custom art dyes on an item should be ignored if the item is equipped in this slot.
	 */
	applyCustomArtDyes: boolean;
	/**
	 * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
	 * When entities refer to each other in Destiny content, it is this hash that they are referring to.
	 */
	hash: number;
	/**
	 * The index of the entity as it was found in the investment tables.
	 */
	index: number;
	/**
	 * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
	 */
	redacted: boolean;
}

/**
 * This Block defines the rendering data associated with the item, if any.
 */
export interface DestinyItemTranslationBlockDefinition {
	weaponPatternIdentifier: string;
	weaponPatternHash: number;
	defaultDyes: DyeReference[];
	lockedDyes: DyeReference[];
	customDyes: DyeReference[];
	arrangements: DestinyGearArtArrangementReference[];
	hasGeometry: boolean;
}

export interface DyeReference {
	channelHash: number;
	dyeHash: number;
}

export interface DestinyGearArtArrangementReference {
	classHash: number;
	artArrangementHash: number;
}

/**
 * Items like Sacks or Boxes can have items that it shows in-game when you view details that represent the items you can obtain if you use or acquire the item.
 * This defines those categories, and gives some insights into that data's source.
 */
export interface DestinyItemPreviewBlockDefinition {
	/**
	 * If the preview data is derived from a fake "Preview" Vendor, this will be the hash identifier for the DestinyVendorDefinition of that fake vendor.
	 */
	previewVendorHash: number;
	/**
	 * If the preview has an associated action (like "Open"), this will be the localized string for that action.
	 */
	previewActionString: string;
	/**
	 * This is a list of the items being previewed, categorized in the same way as they are in the preview UI.
	 */
	derivedItemCategories: DestinyDerivedItemCategoryDefinition[];
}

/**
 * A shortcut for the fact that some items have a "Preview Vendor" - See DestinyInventoryItemDefinition.preview.previewVendorHash - that is intended to be used to show what items you can get as a result of acquiring or using this item.
 * A common example of this in Destiny 1 was Eververse "Boxes," which could have many possible items. This "Preview Vendor" is not a vendor you can actually see in the game, but it defines categories and sale items for all of the possible items you could get from the Box so that the game can show them to you. We summarize that info here so that you don't have to do that Vendor lookup and aggregation manually.
 */
export interface DestinyDerivedItemCategoryDefinition {
	/**
	 * The localized string for the category title. This will be something describing the items you can get as a group, or your likelihood/the quantity you'll get.
	 */
	categoryDescription: string;
	/**
	 * This is the list of all of the items for this category and the basic properties we'll know about them.
	 */
	items: DestinyDerivedItemDefinition[];
}

/**
 * This is a reference to, and summary data for, a specific item that you can get as a result of Using or Acquiring some other Item (For example, this could be summary information for an Emote that you can get by opening an an Eververse Box) See DestinyDerivedItemCategoryDefinition for more information.
 */
export interface DestinyDerivedItemDefinition {
	/**
	 * The hash for the DestinyInventoryItemDefinition of this derived item, if there is one. Sometimes we are given this information as a manual override, in which case there won't be an actual DestinyInventoryItemDefinition for what we display, but you can still show the strings from this object itself.
	 */
	itemHash?: number;
	/**
	 * The name of the derived item.
	 */
	itemName: string;
	/**
	 * Additional details about the derived item, in addition to the description.
	 */
	itemDetail: string;
	/**
	 * A brief description of the item.
	 */
	itemDescription: string;
	/**
	 * An icon for the item.
	 */
	iconPath: string;
	/**
	 * If the item was derived from a "Preview Vendor", this will be an index into the DestinyVendorDefinition's itemList property. Otherwise, -1.
	 */
	vendorItemIndex: number;
}

/**
 * These are the definitions for Vendors.
 * In Destiny, a Vendor can be a lot of things - some things that you wouldn't expect, and some things that you don't even see directly in the game. Vendors are the Dolly Levi of the Destiny universe.
 * - Traditional Vendors as you see in game: people who you come up to and who give you quests, rewards, or who you can buy things from.
 * - Kiosks/Collections, which are really just Vendors that don't charge currency (or charge some pittance of a currency) and whose gating for purchases revolves more around your character's state.
 * - Previews for rewards or the contents of sacks. These are implemented as Vendors, where you can't actually purchase from them but the items that they have for sale and the categories of sale items reflect the rewards or contents of the sack. This is so that the game could reuse the existing Vendor display UI for rewards and save a bunch of wheel reinvention.
 * - Item Transfer capabilities, like the Vault and Postmaster. Vendors can have "acceptedItem" buckets that determine the source and destination buckets for transfers. When you interact with such a vendor, these buckets are what gets shown in the UI instead of any items that the Vendor would have for sale. Yep, the Vault is a vendor.
 * It is pretty much guaranteed that they'll be used for even more features in the future. They have come to be seen more as generic categorized containers for items than "vendors" in a traditional sense, for better or worse.
 * Where possible and time allows, we'll attempt to split those out into their own more digestible derived "Definitions": but often time does not allow that, as you can see from the above ways that vendors are used which we never split off from Vendor Definitions externally.
 * Since Vendors are so many things to so many parts of the game, the definition is understandably complex. You will want to combine this data with live Vendor information from the API when it is available.
 */
export interface DestinyVendorDefinition {
	displayProperties: DestinyVendorDisplayPropertiesDefinition;
	/**
	 * If the vendor has a custom localized string describing the "buy" action, that is returned here.
	 */
	buyString: string;
	/**
	 * Ditto for selling. Not that you can sell items to a vendor anymore. Will it come back? Who knows. The string's still there.
	 */
	sellString: string;
	/**
	 * If the vendor has an item that should be displayed as the "featured" item, this is the hash identifier for that DestinyVendorItemDefinition.
	 * Apparently this is usually a related currency, like a reputation token. But it need not be restricted to that.
	 */
	displayItemHash: number;
	/**
	 * If this is true, you aren't allowed to buy whatever the vendor is selling.
	 */
	inhibitBuying: boolean;
	/**
	 * If this is true, you're not allowed to sell whatever the vendor is buying.
	 */
	inhibitSelling: boolean;
	/**
	 * If the Vendor has a faction, this hash will be valid and point to a DestinyFactionDefinition.
	 * The game UI and BNet often mine the faction definition for additional elements and details to place on the screen, such as the faction's Progression status (aka "Reputation").
	 */
	factionHash: number;
	/**
	 * A number used for calculating the frequency of a vendor's inventory resetting/refreshing.
	 * Don't worry about calculating this - we do it on the server side and send you the next refresh date with the live data.
	 */
	resetIntervalMinutes: number;
	/**
	 * Again, used for reset/refreshing of inventory. Don't worry too much about it. Unless you want to.
	 */
	resetOffsetMinutes: number;
	/**
	 * If an item can't be purchased from the vendor, there may be many "custom"/game state specific reasons why not.
	 * This is a list of localized strings with messages for those custom failures. The live BNet data will return a failureIndexes property for items that can't be purchased: using those values to index into this array, you can show the user the appropriate failure message for the item that can't be bought.
	 */
	failureStrings: string[];
	/**
	 * If we were able to predict the dates when this Vendor will be visible/available, this will be the list of those date ranges. Sadly, we're not able to predict this very frequently, so this will often be useless data.
	 */
	unlockRanges: DateRange[];
	/**
	 * The internal identifier for the Vendor. A holdover from the old days of Vendors, but we don't have time to refactor it away.
	 */
	vendorIdentifier: string;
	/**
	 * A portrait of the Vendor's smiling mug. Or frothing tentacles.
	 */
	vendorPortrait: string;
	/**
	 * If the vendor has a custom banner image, that can be found here.
	 */
	vendorBanner: string;
	/**
	 * If a vendor is not enabled, we won't even save the vendor's definition, and we won't return any items or info about them. It's as if they don't exist.
	 */
	enabled: boolean;
	/**
	 * If a vendor is not visible, we still have and will give vendor definition info, but we won't use them for things like Advisors or UI.
	 */
	visible: boolean;
	/**
	 * The identifier of the VendorCategoryDefinition for this vendor.
	 */
	vendorCategoryIdentifier: string;
	/**
	 * The identifier of the VendorCategoryDefinition for this vendor's subcategory.
	 */
	vendorSubcategoryIdentifier: string;
	/**
	 * If TRUE, consolidate categories that only differ by trivial properties (such as having minor differences in name)
	 */
	consolidateCategories: boolean;
	/**
	 * Describes "actions" that can be performed on a vendor. Currently, none of these exist. But theoretically a Vendor could let you interact with it by performing actions. We'll see what these end up looking like if they ever get used.
	 */
	actions: DestinyVendorActionDefinition[];
	/**
	 * These are the headers for sections of items that the vendor is selling. When you see items organized by category in the header, it is these categories that it is showing.
	 * Well, technically not *exactly* these. On BNet, it doesn't make sense to have categories be "paged" as we do in Destiny, so we run some heuristics to attempt to aggregate pages of categories together.
	 * These are the categories post-concatenation, if the vendor had concatenation applied. If you want the pre-aggregated category data, use originalCategories.
	 */
	categories: DestinyVendorCategoryEntryDefinition[];
	/**
	 * See the categories property for a description of categories and why originalCategories exists.
	 */
	originalCategories: DestinyVendorCategoryEntryDefinition[];
	/**
	 * Display Categories are different from "categories" in that these are specifically for visual grouping and display of categories in Vendor UI.
	 * The "categories" structure is for validation of the contained items, and can be categorized entirely separately from "Display Categories", there need be and often will be no meaningful relationship between the two.
	 */
	displayCategories: DestinyDisplayCategoryDefinition[];
	/**
	 * In addition to selling items, vendors can have "interactions": UI where you "talk" with the vendor and they offer you a reward, some item, or merely acknowledge via dialog that you did something cool.
	 */
	interactions: DestinyVendorInteractionDefinition[];
	/**
	 * If the vendor shows you items from your own inventory - such as the Vault vendor does - this data describes the UI around showing those inventory buckets and which ones get shown.
	 */
	inventoryFlyouts: DestinyVendorInventoryFlyoutDefinition[];
	/**
	 * If the vendor sells items (or merely has a list of items to show like the "Sack" vendors do), this is the list of those items that the vendor can sell. From this list, only a subset will be available from the vendor at any given time, selected randomly and reset on the vendor's refresh interval.
	 * Note that a vendor can sell the same item multiple ways: for instance, nothing stops a vendor from selling you some specific weapon but using two different currencies, or the same weapon at multiple "item levels".
	 */
	itemList: DestinyVendorItemDefinition[];
	/**
	 * BNet doesn't use this data yet, but it appears to be an optional list of flavor text about services that the Vendor can provide.
	 */
	services: DestinyVendorServiceDefinition[];
	/**
	 * If the Vendor is actually a vehicle for the transferring of items (like the Vault and Postmaster vendors), this defines the list of source->destination buckets for transferring.
	 */
	acceptedItems: DestinyVendorAcceptedItemDefinition[];
	/**
	 * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
	 * When entities refer to each other in Destiny content, it is this hash that they are referring to.
	 */
	hash: number;
	/**
	 * The index of the entity as it was found in the investment tables.
	 */
	index: number;
	/**
	 * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
	 */
	redacted: boolean;
}

export interface DestinyVendorDisplayPropertiesDefinition {
	largeIcon: string;
	subtitle: string;
	/**
	 * Vendors, in addition to expected display property data, may also show some "common requirements" as statically defined definition data. This might be when a vendor accepts a single type of currency, or when the currency is unique to the vendor and the designers wanted to show that currency when you interact with the vendor.
	 */
	requirementsDisplay: DestinyVendorRequirementDisplayEntryDefinition[];
	description: string;
	name: string;
	/**
	 * Note that "icon" is sometimes misleading, and should be interpreted in the context of the entity. For instance, in Destiny 1 the DestinyRecordBookDefinition's icon was a big picture of a book.
	 * But usually, it will be a small square image that you can use as... well, an icon.
	 */
	icon: string;
	hasIcon: boolean;
}

/**
 * The localized properties of the requirementsDisplay, allowing information about the requirement or item being featured to be seen.
 */
export interface DestinyVendorRequirementDisplayEntryDefinition {
	icon: string;
	name: string;
	source: string;
	type: string;
}

export interface DateRange {
	start: string;
	end: string;
}

/**
 * If a vendor can ever end up performing actions, these are the properties that will be related to those actions. I'm not going to bother documenting this yet, as it is unused and unclear if it will ever be used... but in case it is ever populated and someone finds it useful, it is defined here.
 */
export interface DestinyVendorActionDefinition {
	description: string;
	executeSeconds: number;
	icon: string;
	name: string;
	verb: string;
	isPositive: boolean;
	actionId: string;
	actionHash: number;
	autoPerformAction: boolean;
}

/**
 * This is the definition for a single Vendor Category, into which Sale Items are grouped.
 */
export interface DestinyVendorCategoryEntryDefinition {
	/**
	 * The index of the category in the original category definitions for the vendor.
	 */
	categoryIndex: number;
	/**
	 * The string identifier of the category.
	 */
	categoryId: string;
	/**
	 * The hashed identifier for the category. (note that this is NOT pointing to a DestinyVendorCategoryDefinition, it's confusing but this is a sale item category in a vendor, not a categorization of vendors themselves)
	 */
	categoryHash: number;
	/**
	 * The amount of items that will be available when this category is shown.
	 */
	quantityAvailable: number;
	/**
	 * If items aren't up for sale in this category, should we still show them (greyed out)?
	 */
	showUnavailableItems: boolean;
	/**
	 * If you don't have the currency required to buy items from this category, should the items be hidden?
	 */
	hideIfNoCurrency: boolean;
	/**
	 * True if this category doesn't allow purchases.
	 */
	hideFromRegularPurchase: boolean;
	/**
	 * The localized string for making purchases from this category, if it is different from the vendor's string for purchasing.
	 */
	buyStringOverride: string;
	/**
	 * If the category is disabled, this is the localized description to show.
	 */
	disabledDescription: string;
	/**
	 * The localized title of the category.
	 */
	displayTitle: string;
	/**
	 * If this category has an overlay prompt that should appear, this contains the details of that prompt.
	 */
	overlay: DestinyVendorCategoryOverlayDefinition;
}

/**
 * The details of an overlay prompt to show to a user. They are all fairly self-explanatory localized strings that can be shown.
 */
export interface DestinyVendorCategoryOverlayDefinition {
	choiceDescription: string;
	description: string;
	icon: string;
	title: string;
}

/**
 * Display Categories are different from "categories" in that these are specifically for visual grouping and display of categories in Vendor UI. The "categories" structure is for validation of the contained items, and can be categorized entirely separately from "Display Categories", there need be and often will be no meaningful relationship between the two.
 */
export interface DestinyDisplayCategoryDefinition {
	/**
	 * A string identifier for the display category.
	 */
	identifier: string;
	displayProperties: DestinyDisplayPropertiesDefinition;
}

/**
 * A Vendor Interaction is a dialog shown by the vendor other than sale items or transfer screens. The vendor is showing you something, and asking you to reply to it by choosing an option or reward.
 */
export interface DestinyVendorInteractionDefinition {
	/**
	 * The potential replies that the user can make to the interaction.
	 */
	replies: DestinyVendorInteractionReplyDefinition[];
	/**
	 * If >= 0, this is the category of sale items to show along with this interaction dialog.
	 */
	vendorCategoryIndex: number;
	/**
	 * If this interaction dialog is about a quest, this is the questline related to the interaction. You can use this to show the quest overview, or even the character's status with the quest if you use it to find the character's current Quest Step by checking their inventory against this questlineItemHash's DestinyInventoryItemDefinition.setData.
	 */
	questlineItemHash: number;
	/**
	 * If this interaction is meant to show you sacks, this is the list of types of sacks to be shown. If empty, the interaction is not meant to show sacks.
	 */
	sackInteractionList: DestinyVendorInteractionSackEntryDefinition[];
	/**
	 * A UI hint for the behavior of the interaction screen. BNet doesn't use this, but you can choose to.
	 */
	uiInteractionType: number;
	/**
	 * If this interaction is displaying rewards, this is the text to use for the header of the reward-displaying section of the interaction.
	 */
	rewardBlockLabel: string;
	/**
	 * If the vendor's reward list is sourced from one of his categories, this is the index into the category array of items to show.
	 */
	rewardVendorCategoryIndex: number;
	/**
	 * If the vendor interaction has flavor text, this is some of it.
	 */
	flavorLineOne: string;
	/**
	 * If the vendor interaction has flavor text, this is the rest of it.
	 */
	flavorLineTwo: string;
	/**
	 * The header for the interaction dialog.
	 */
	headerDisplayProperties: DestinyDisplayPropertiesDefinition;
	/**
	 * The localized text telling the player what to do when they see this dialog.
	 */
	instructions: string;
}

/**
 * When the interaction is replied to, Reward sites will fire and items potentially selected based on whether the given unlock expression is TRUE.
 * You can potentially choose one from multiple replies when replying to an interaction: this is how you get either/or rewards from vendors.
 */
export interface DestinyVendorInteractionReplyDefinition {
	/**
	 * The rewards granted upon responding to the vendor.
	 */
	itemRewardsSelection: DestinyVendorInteractionRewardSelection;
	/**
	 * The localized text for the reply.
	 */
	reply: string;
	/**
	 * An enum indicating the type of reply being made.
	 */
	replyType: DestinyVendorReplyType;
}

/**
 * When a Vendor Interaction provides rewards, they'll either let you choose one or let you have all of them. This determines which it will be.
 */
export enum DestinyVendorInteractionRewardSelection {
	None = 0,
	One = 1,
	All = 2,
}

/**
 * This determines the type of reply that a Vendor will have during an Interaction.
 */
export enum DestinyVendorReplyType {
	Accept = 0,
	Decline = 1,
	Complete = 2,
}

/**
 * Compare this sackType to the sack identifier in the DestinyInventoryItemDefinition.vendorSackType property of items. If they match, show this sack with this interaction.
 */
export interface DestinyVendorInteractionSackEntryDefinition {
	sackType: number;
}

/**
 * The definition for an "inventory flyout": a UI screen where we show you part of an otherwise hidden vendor inventory: like the Vault inventory buckets.
 */
export interface DestinyVendorInventoryFlyoutDefinition {
	/**
	 * If the flyout is locked, this is the reason why.
	 */
	lockedDescription: string;
	/**
	 * The title and other common properties of the flyout.
	 */
	displayProperties: DestinyDisplayPropertiesDefinition;
	/**
	 * A list of inventory buckets and other metadata to show on the screen.
	 */
	buckets: DestinyVendorInventoryFlyoutBucketDefinition[];
	/**
	 * An identifier for the flyout, in case anything else needs to refer to them.
	 */
	flyoutId: number;
	/**
	 * If this is true, don't show any of the glistening "this is a new item" UI elements, like we show on the inventory items themselves in in-game UI.
	 */
	suppressNewness: boolean;
}

/**
 * Information about a single inventory bucket in a vendor flyout UI and how it is shown.
 */
export interface DestinyVendorInventoryFlyoutBucketDefinition {
	/**
	 * If true, the inventory bucket should be able to be collapsed visually.
	 */
	collapsible: boolean;
	/**
	 * The inventory bucket whose contents should be shown.
	 */
	inventoryBucketHash: number;
	/**
	 * The methodology to use for sorting items from the flyout.
	 */
	sortItemsBy: DestinyItemSortType;
}

/**
 * Determines how items are sorted in an inventory bucket.
 */
export enum DestinyItemSortType {
	ItemId = 0,
	Timestamp = 1,
	StackSize = 2,
}

/**
 * This represents an item being sold by the vendor.
 */
export interface DestinyVendorItemDefinition {
	/**
	 * The index into the DestinyVendorDefinition.saleList. This is what we use to refer to items being sold throughout live and definition data.
	 */
	vendorItemIndex: number;
	/**
	 * The hash identifier of the item being sold (DestinyInventoryItemDefinition).
	 * Note that a vendor can sell the same item in multiple ways, so don't assume that itemHash is a unique identifier for this entity.
	 */
	itemHash: number;
	/**
	 * The amount you will recieve of the item described in itemHash if you make the purchase.
	 */
	quantity: number;
	/**
	 * An list of indexes into the DestinyVendorDefinition.failureStrings array, indicating the possible failure strings that can be relevant for this item.
	 */
	failureIndexes: number[];
	/**
	 * This is a pre-compiled aggregation of item value and priceOverrideList, so that we have one place to check for what the purchaser must pay for the item. Use this instead of trying to piece together the price separately.
	 */
	currencies: DestinyItemQuantity[];
	/**
	 * If this item can be refunded, this is the policy for what will be refundd, how, and in what time period.
	 */
	refundPolicy: DestinyVendorItemRefundPolicy;
	/**
	 * The amount of time before refundability of the newly purchased item will expire.
	 */
	refundTimeLimit: number;
	/**
	 * The Default level at which the item will spawn. Almost always driven by an adjusto these days. Ideally should be singular. It's a long story how this ended up as a list, but there is always either going to be 0:1 of these entities.
	 */
	creationLevels: DestinyItemCreationEntryLevelDefinition[];
	/**
	 * This is an index specifically into the display category, as opposed to the server-side Categories (which do not need to match or pair with each other in any way: server side categories are really just structures for common validation. Display Category will let us more easily categorize items visually)
	 */
	displayCategoryIndex: number;
	/**
	 * The index into the DestinyVendorDefinition.categories array, so you can find the category associated with this item.
	 */
	categoryIndex: number;
	/**
	 * Same as above, but for the original category indexes.
	 */
	originalCategoryIndex: number;
	/**
	 * The minimum character level at which this item is available for sale.
	 */
	minimumLevel: number;
	/**
	 * The maximum character level at which this item is available for sale.
	 */
	maximumLevel: number;
	/**
	 * The action to be performed when purchasing the item, if it's not just "buy".
	 */
	action: DestinyVendorSaleItemActionBlockDefinition;
	/**
	 * The string identifier for the category selling this item.
	 */
	displayCategory: string;
	/**
	 * The inventory bucket into which this item will be placed upon purchase.
	 */
	inventoryBucketHash: number;
	/**
	 * The most restrictive scope that determines whether the item is available in the Vendor's inventory. See DestinyGatingScope's documentation for more information.
	 * This can be determined by Unlock gating, or by whether or not the item has purchase level requirements (minimumLevel and maximumLevel properties).
	 */
	visibilityScope: DestinyGatingScope;
	/**
	 * Similar to visibilityScope, it represents the most restrictive scope that determines whether the item can be purchased. It will at least be as restrictive as visibilityScope, but could be more restrictive if the item has additional purchase requirements beyond whether it is merely visible or not.
	 * See DestinyGatingScope's documentation for more information.
	 */
	purchasableScope: DestinyGatingScope;
}

/**
 * The action that happens when the user attempts to refund an item.
 */
export enum DestinyVendorItemRefundPolicy {
	NotRefundable = 0,
	DeletesItem = 1,
	RevokesLicense = 2,
}

/**
 * An overly complicated wrapper for the item level at which the item should spawn.
 */
export interface DestinyItemCreationEntryLevelDefinition {
	level: number;
}

/**
 * Not terribly useful, some basic cooldown interaction info.
 */
export interface DestinyVendorSaleItemActionBlockDefinition {
	executeSeconds: number;
	isPositive: boolean;
}

/**
 * This enumeration represents the most restrictive type of gating that is being performed by an entity. This is useful as a shortcut to avoid a lot of lookups when determining whether the gating on an Entity applies to everyone equally, or to their specific Profile or Character states.
 * None = There is no gating on this item. Global = The gating on this item is based entirely on global game state. It will be gated the same for everyone. Clan = The gating on this item is at the Clan level. For instance, if you're gated by Clan level this will be the case. Profile = The gating includes Profile-specific checks, but not on the Profile's characters. An example of this might be when you acquire an Emblem: the Emblem will be available in your Kiosk for all characters in your Profile from that point onward. Character = The gating includes Character-specific checks, including character level restrictions. An example of this might be an item that you can't purchase from a Vendor until you reach a specific Character Level. Item = The gating includes item-specific checks. For BNet, this generally implies that we'll show this data only on a character level or deeper. AssumedWorstCase = The unlocks and checks being used for this calculation are of an unknown type and are used for unknown purposes. For instance, if some great person decided that an unlock value should be globally scoped, but then the game changes it using character-specific data in a way that BNet doesn't know about. Because of the open-ended potential for this to occur, many unlock checks for "globally" scoped unlock data may be assumed as the worst case unless it has been specifically whitelisted as otherwise. That sucks, but them's the breaks.
 */
export enum DestinyGatingScope {
	None = 0,
	Global = 1,
	Clan = 2,
	Profile = 3,
	Character = 4,
	Item = 5,
	AssumedWorstCase = 6,
}

/**
 * When a vendor provides services, this is the localized name of those services.
 */
export interface DestinyVendorServiceDefinition {
	/**
	 * The localized name of a service provided.
	 */
	name: string;
}

/**
 * If you ever wondered how the Vault works, here it is.
 * The Vault is merely a set of inventory buckets that exist on your Profile/Account level. When you transfer items in the Vault, the game is using the Vault Vendor's DestinyVendorAcceptedItemDefinitions to see where the appropriate destination bucket is for the source bucket from whence your item is moving. If it finds such an entry, it transfers the item to the other bucket.
 * The mechanics for Postmaster works similarly, which is also a vendor. All driven by Accepted Items.
 */
export interface DestinyVendorAcceptedItemDefinition {
	/**
	 * The "source" bucket for a transfer. When a user wants to transfer an item, the appropriate DestinyVendorDefinition's acceptedItems property is evaluated, looking for an entry where acceptedInventoryBucketHash matches the bucket that the item being transferred is currently located. If it exists, the item will be transferred into whatever bucket is defined by destinationInventoryBucketHash.
	 */
	acceptedInventoryBucketHash: number;
	/**
	 * This is the bucket where the item being transferred will be put, given that it was being transferred *from* the bucket defined in acceptedInventoryBucketHash.
	 */
	destinationInventoryBucketHash: number;
}

/**
 * These definitions represent Factions in the game. Factions have ended up unilaterally being related to Vendors that represent them, but that need not necessarily be the case.
 * A Faction is really just an entity that has a related progression for which a character can gain experience. In Destiny 1, Dead Orbit was an example of a Faction: there happens to be a Vendor that represents Dead Orbit (and indeed, DestinyVendorDefinition.factionHash defines to this relationship), but Dead Orbit could theoretically exist without the Vendor that provides rewards.
 */
export interface DestinyFactionDefinition {
	displayProperties: DestinyDisplayPropertiesDefinition;
	/**
	 * The hash identifier for the DestinyProgressionDefinition that indicates the character's relationship with this faction in terms of experience and levels.
	 */
	progressionHash: number;
	/**
	 * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
	 * When entities refer to each other in Destiny content, it is this hash that they are referring to.
	 */
	hash: number;
	/**
	 * The index of the entity as it was found in the investment tables.
	 */
	index: number;
	/**
	 * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
	 */
	redacted: boolean;
}

/**
 * An item's "Quality" determines its calculated stats. The Level at which the item spawns is combined with its "qualityLevel" along with some additional calculations to determine the value of those stats.
 * In Destiny 2, most items don't have default item levels and quality, making this property less useful: these apparently are almost always determined by the complex mechanisms of the Reward system rather than statically. They are still provided here in case they are still useful for people. This also contains some information about Infusion.
 */
export interface DestinyItemQualityBlockDefinition {
	/**
	 * The "base" defined level of an item. This is a list because, in theory, each Expansion could define its own base level for an item.
	 * In practice, not only was that never done in Destiny 1, but now this isn't even populated at all. When it's not populated, the level at which it spawns has to be inferred by Reward information, of which BNet receives an imperfect view and will only be reliable on instanced data as a result.
	 */
	itemLevels: number[];
	/**
	 * qualityLevel is used in combination with the item's level to calculate stats like Attack and Defense. It plays a role in that calculation, but not nearly as large as itemLevel does.
	 */
	qualityLevel: number;
	/**
	 * The string identifier for this item's "infusability", if any.
	 * Items that match the same infusionCategoryName are allowed to infuse with each other.
	 */
	infusionCategoryName: string;
	/**
	 * The hash identifier for the infusion. It does not map to a Definition entity.
	 */
	infusionCategoryHash: number;
	/**
	 * An item can refer to pre-set level requirements. They are defined in DestinyProgressionLevelRequirementDefinition, and you can use this hash to find the appropriate definition.
	 */
	progressionLevelRequirementHash: number;
}

/**
 * These are pre-constructed collections of data that can be used to determine the Level Requirement for an item given a Progression to be tested (such as the Character's level).
 * For instance, say a character receives a new Auto Rifle, and that Auto Rifle's DestinyInventoryItemDefinition.quality.progressionLevelRequirementHash property is pointing at one of these DestinyProgressionLevelRequirementDefinitions. Let's pretend also that the progressionHash it is pointing at is the Character Level progression. In that situation, the character's level will be used to interpolate a value in the requirementCurve property. The value picked up from that interpolation will be the required level for the item.
 */
export interface DestinyProgressionLevelRequirementDefinition {
	/**
	 * A curve of level requirements, weighted by the related progressions' level.
	 * Interpolate against this curve with the character's progression level to determine what the level requirement of the generated item that is using this data will be.
	 */
	requirementCurve: InterpolationPointFloat[];
	/**
	 * The progression whose level should be used to determine the level requirement.
	 * Look up the DestinyProgressionDefinition with this hash for more information about the progression in question.
	 */
	progressionHash: number;
	/**
	 * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
	 * When entities refer to each other in Destiny content, it is this hash that they are referring to.
	 */
	hash: number;
	/**
	 * The index of the entity as it was found in the investment tables.
	 */
	index: number;
	/**
	 * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
	 */
	redacted: boolean;
}

export interface InterpolationPointFloat {
	value: number;
	weight: number;
}

/**
 * This defines an item's "Value". Unfortunately, this appears to be used in different ways depending on the way that the item itself is used.
 * For items being sold at a Vendor, this is the default "sale price" of the item. These days, the vendor itself almost always sets the price, but it still possible for the price to fall back to this value. For quests, it is a preview of rewards you can gain by completing the quest. For dummy items, if the itemValue refers to an Emblem, it is the emblem that should be shown as the reward. (jeez louise)
 * It will likely be used in a number of other ways in the future, it appears to be a bucket where they put arbitrary items and quantities into the item.
 */
export interface DestinyItemValueBlockDefinition {
	/**
	 * References to the items that make up this item's "value", and the quantity.
	 */
	itemValue: DestinyItemQuantity[];
	/**
	 * If there's a localized text description of the value provided, this will be said description.
	 */
	valueDescription: string;
}

/**
 * Data about an item's "sources": ways that the item can be obtained.
 */
export interface DestinyItemSourceBlockDefinition {
	/**
	 * The list of hash identifiers for Reward Sources that hint where the item can be found (DestinyRewardSourceDefinition).
	 */
	sourceHashes: number[];
	/**
	 * A collection of details about the stats that were computed for the ways we found that the item could be spawned.
	 */
	sources: DestinyItemSourceDefinition[];
	/**
	 * If we found that this item is exclusive to a specific platform, this will be set to the BungieMembershipType enumeration that matches that platform.
	 */
	exclusive: BungieMembershipType;
}

/**
 * Properties of a DestinyInventoryItemDefinition that store all of the information we were able to discern about how the item spawns, and where you can find the item.
 * Items will have many of these sources, one per level at which it spawns, to try and give more granular data about where items spawn for specific level ranges.
 */
export interface DestinyItemSourceDefinition {
	/**
	 * The level at which the item spawns. Essentially the Primary Key for this source data: there will be multiple of these source entries per item that has source data, grouped by the level at which the item spawns.
	 */
	level: number;
	/**
	 * The minimum Quality at which the item spawns for this level. Examine DestinyInventoryItemDefinition for more information about what Quality means. Just don't ask Phaedrus about it, he'll never stop talking and you'll have to write a book about it.
	 */
	minQuality: number;
	/**
	 * The maximum quality at which the item spawns for this level.
	 */
	maxQuality: number;
	/**
	 * The minimum Character Level required for equipping the item when the item spawns at the item level defined on this DestinyItemSourceDefinition, as far as we saw in our processing.
	 */
	minLevelRequired: number;
	/**
	 * The maximum Character Level required for equipping the item when the item spawns at the item level defined on this DestinyItemSourceDefinition, as far as we saw in our processing.
	 */
	maxLevelRequired: number;
	/**
	 * The stats computed for this level/quality range.
	 */
	computedStats: {[field: number]: DestinyInventoryItemStatDefinition};
	/**
	 * The DestinyRewardSourceDefinitions found that can spawn the item at this level.
	 */
	sourceHashes: number[];
}

/**
 * Represents a heuristically-determined "item source" according to Bungie.net. These item sources are non-canonical: we apply a combination of special configuration and often-fragile heuristics to attempt to discern whether an item should be part of a given "source," but we have known cases of false positives and negatives due to our imperfect heuristics.
 * Still, they provide a decent approximation for people trying to figure out how an item can be obtained. DestinyInventoryItemDefinition refers to sources in the sourceDatas.sourceHashes property for all sources we determined the item could spawn from.
 * An example in Destiny 1 of a Source would be "Nightfall". If an item has the "Nightfall" source associated with it, it's extremely likely that you can earn that item while playing Nightfall, either during play or as an after-completion reward.
 */
export interface DestinyRewardSourceDefinition {
	displayProperties: DestinyDisplayPropertiesDefinition;
	/**
	 * Sources are grouped into categories: common ways that items are provided. I hope to see this expand in Destiny 2 once we have time to generate accurate reward source data.
	 */
	category: DestinyRewardSourceCategory;
	/**
	 * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
	 * When entities refer to each other in Destiny content, it is this hash that they are referring to.
	 */
	hash: number;
	/**
	 * The index of the entity as it was found in the investment tables.
	 */
	index: number;
	/**
	 * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
	 */
	redacted: boolean;
}

/**
 * BNet's custom categorization of reward sources. We took a look at the existing ways that items could be spawned, and tried to make high-level categorizations of them. This needs to be re-evaluated for Destiny 2.
 */
export enum DestinyRewardSourceCategory {
	None = 0,
	Activity = 1,
	Vendor = 2,
	Aggregate = 3,
}

/**
 * An item can have objectives on it. In practice, these are the exclusive purview of "Quest Step" items: DestinyInventoryItemDefinitions that represent a specific step in a Quest.
 * Quest steps have 1:M objectives that we end up processing and returning in live data as DestinyQuestStatus data, and other useful information.
 */
export interface DestinyItemObjectiveBlockDefinition {
	/**
	 * The hashes to Objectives (DestinyObjectiveDefinition) that are part of this Quest Step, in the order that they should be rendered.
	 */
	objectiveHashes: number[];
	/**
	 * For every entry in objectiveHashes, there is a corresponding entry in this array at the same index. If the objective is meant to be associated with a specific DestinyActivityDefinition, there will be a valid hash at that index. Otherwise, it will be invalid (0).
	 */
	displayActivityHashes: number[];
	/**
	 * If True, all objectives must be completed for the step to be completed. If False, any one objective can be completed for the step to be completed.
	 */
	requireFullObjectiveCompletion: boolean;
	/**
	 * The hash for the DestinyInventoryItemDefinition representing the Quest to which this Quest Step belongs.
	 */
	questlineItemHash: number;
	/**
	 * The localized string for narrative text related to this quest step, if any.
	 */
	narrative: string;
	/**
	 * The localized string describing an action to be performed associated with the objectives, if any.
	 */
	objectiveVerbName: string;
	/**
	 * The identifier for the type of quest being performed, if any. Not associated with any fixed definition, yet.
	 */
	questTypeIdentifier: string;
	/**
	 * A hashed value for the questTypeIdentifier, because apparently I like to be redundant.
	 */
	questTypeHash: number;
}

/**
 * Defines an "Objective".
 * An objective is a specific task you should accomplish in the game. These are referred to by:
 * - Quest Steps (which are DestinyInventoryItemDefinition entities with Objectives)
 * - Challenges (which are Objectives defined on an DestinyActivityDefintion)
 * - Milestones (which refer to Objectives that are defined on both Quest Steps and Activities)
 * - Anything else that the designers decide to do later.
 * Objectives have progress, a notion of having been Completed, human readable data describing the task to be accomplished, and a lot of optional tack-on data that can enhance the information provided about the task.
 */
export interface DestinyObjectiveDefinition {
	/**
	 * Ideally, this should tell you what your task is. I'm not going to lie to you though. Sometimes this doesn't have useful information at all. Which sucks, but there's nothing either of us can do about it.
	 */
	displayProperties: DestinyDisplayPropertiesDefinition;
	/**
	 * The value that the unlock value defined in unlockValueHash must reach in order for the objective to be considered Completed. Used in calculating progress and completion status.
	 */
	completionValue: number;
	/**
	 * OPTIONAL: a hash identifier for the location at which this objective must be accomplished, if there is a location defined. Look up the DestinyLocationDefinition for this hash for that additional location info.
	 */
	locationHash: number;
	/**
	 * If true, the value is allowed to go negative.
	 */
	allowNegativeValue: boolean;
	/**
	 * If true, you can effectively "un-complete" this objective if you lose progress after crossing the completion threshold.
	 * If False, once you complete the task it will remain completed forever by locking the value.
	 */
	allowValueChangeWhenCompleted: boolean;
	/**
	 * If true, completion means having an unlock value less than or equal to the completionValue.
	 * If False, completion means having an unlock value greater than or equal to the completionValue.
	 */
	isCountingDownward: boolean;
	/**
	 * The UI style applied to the objective. It's an enum, take a look at DestinyUnlockValueUIStyle for details of the possible styles. Use this info as you wish to customize your UI.
	 */
	valueStyle: DestinyUnlockValueUIStyle;
	/**
	 * Text to describe the progress bar.
	 */
	progressDescription: string;
	/**
	 * If this objective enables Perks intrinsically, the conditions for that enabling are defined here.
	 */
	perks: DestinyObjectivePerkEntryDefinition;
	/**
	 * If this objective enables modifications on a player's stats intrinsically, the conditions are defined here.
	 */
	stats: DestinyObjectiveStatEntryDefinition;
	/**
	 * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
	 * When entities refer to each other in Destiny content, it is this hash that they are referring to.
	 */
	hash: number;
	/**
	 * The index of the entity as it was found in the investment tables.
	 */
	index: number;
	/**
	 * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
	 */
	redacted: boolean;
}

/**
 * If you're showing an unlock value in the UI, this is the format in which it should be shown. You'll have to build your own algorithms on the client side to determine how best to render these options.
 */
export enum DestinyUnlockValueUIStyle {
	Automatic = 0,
	Fraction = 1,
	Checkbox = 2,
	Percentage = 3,
	DateTime = 4,
	FractionFloat = 5,
	Integer = 6,
	TimeDuration = 7,
	Hidden = 8,
}

/**
 * Defines the conditions under which an intrinsic perk is applied while participating in an Objective.
 * These perks will generally not be benefit-granting perks, but rather a perk that modifies gameplay in some interesting way.
 */
export interface DestinyObjectivePerkEntryDefinition {
	/**
	 * The hash identifier of the DestinySandboxPerkDefinition that will be applied to the character.
	 */
	perkHash: number;
	/**
	 * An enumeration indicating whether it will be applied as long as the Objective is active, when it's completed, or until it's completed.
	 */
	style: DestinyObjectiveGrantStyle;
}

/**
 * Some Objectives provide perks, generally as part of providing some kind of interesting modifier for a Challenge or Quest. This indicates when the Perk is granted.
 */
export enum DestinyObjectiveGrantStyle {
	WhenIncomplete = 0,
	WhenComplete = 1,
	Always = 2,
}

/**
 * Perks are modifiers to a character or item that can be applied situationally.
 * - Perks determine a weapons' damage type.
 * - Perks put the Mods in Modifiers (they are literally the entity that bestows the Sandbox benefit for whatever fluff text about the modifier in the Socket, Plug or Talent Node)
 * - Perks are applied for unique alterations of state in Objectives
 * Anyways, I'm sure you can see why perks are so interesting.
 * What Perks often don't have is human readable information, so we attempt to reverse engineer that by pulling that data from places that uniquely refer to these perks: namely, Talent Nodes and Plugs. That only gives us a subset of perks that are human readable, but those perks are the ones people generally care about anyways. The others are left as a mystery, their true purpose mostly unknown and undocumented.
 */
export interface DestinySandboxPerkDefinition {
	/**
	 * These display properties are by no means guaranteed to be populated. Usually when it is, it's only because we back-filled them with the displayProperties of some Talent Node or Plug item that happened to be uniquely providing that perk.
	 */
	displayProperties: DestinyDisplayPropertiesDefinition;
	/**
	 * The string identifier for the perk.
	 */
	perkIdentifier: string;
	/**
	 * If true, you can actually show the perk in the UI. Otherwise, it doesn't have useful player-facing information.
	 */
	isDisplayable: boolean;
	/**
	 * If this perk grants a damage type to a weapon, the damage type will be defined here.
	 * Unless you have a compelling reason to use this enum value, use the damageTypeHash instead to look up the actual DestinyDamageTypeDefinition.
	 */
	damageType: DamageType;
	/**
	 * The hash identifier for looking up the DestinyDamageTypeDefinition, if this perk has a damage type.
	 * This is preferred over using the damageType enumeration value, which has been left purely because it is occasionally convenient.
	 */
	damageTypeHash?: number;
	/**
	 * An old holdover from the original Armory, this was an attempt to group perks by functionality.
	 * It is as yet unpopulated, and there will be quite a bit of work needed to restore it to its former working order.
	 */
	perkGroups: DestinyTalentNodeStepGroups;
	/**
	 * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
	 * When entities refer to each other in Destiny content, it is this hash that they are referring to.
	 */
	hash: number;
	/**
	 * The index of the entity as it was found in the investment tables.
	 */
	index: number;
	/**
	 * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
	 */
	redacted: boolean;
}

export enum DamageType {
	None = 0,
	Kinetic = 1,
	Arc = 2,
	Thermal = 3,
	Void = 4,
	Raid = 5,
}

/**
 * These properties are an attempt to categorize talent node steps by certain common properties. See the related enumerations for the type of properties being categorized.
 */
export interface DestinyTalentNodeStepGroups {
	weaponPerformance: DestinyTalentNodeStepWeaponPerformances;
	impactEffects: DestinyTalentNodeStepImpactEffects;
	guardianAttributes: DestinyTalentNodeStepGuardianAttributes;
	lightAbilities: DestinyTalentNodeStepLightAbilities;
	damageTypes: DestinyTalentNodeStepDamageTypes;
}

export enum DestinyTalentNodeStepWeaponPerformances {
	None = 0,
	RateOfFire = 1,
	Damage = 2,
	Accuracy = 4,
	Range = 8,
	Zoom = 16,
	Recoil = 32,
	Ready = 64,
	Reload = 128,
	HairTrigger = 256,
	AmmoAndMagazine = 512,
	TrackingAndDetonation = 1024,
	ShotgunSpread = 2048,
	ChargeTime = 4096,
	All = 8191,
}

export enum DestinyTalentNodeStepImpactEffects {
	None = 0,
	ArmorPiercing = 1,
	Ricochet = 2,
	Flinch = 4,
	CollateralDamage = 8,
	Disorient = 16,
	HighlightTarget = 32,
	All = 63,
}

export enum DestinyTalentNodeStepGuardianAttributes {
	None = 0,
	Stats = 1,
	Shields = 2,
	Health = 4,
	Revive = 8,
	AimUnderFire = 16,
	Radar = 32,
	Invisibility = 64,
	Reputations = 128,
	All = 255,
}

export enum DestinyTalentNodeStepLightAbilities {
	None = 0,
	Grenades = 1,
	Melee = 2,
	MovementModes = 4,
	Orbs = 8,
	SuperEnergy = 16,
	SuperMods = 32,
	All = 63,
}

export enum DestinyTalentNodeStepDamageTypes {
	None = 0,
	Kinetic = 1,
	Arc = 2,
	Solar = 4,
	Void = 8,
	All = 15,
}

/**
 * Defines the conditions under which stat modifications will be applied to a Character while participating in an objective.
 */
export interface DestinyObjectiveStatEntryDefinition {
	/**
	 * The stat being modified, and the value used.
	 */
	stat: DestinyItemInvestmentStatDefinition;
	/**
	 * Whether it will be applied as long as the objective is active, when it's completed, or until it's completed.
	 */
	style: DestinyObjectiveGrantStyle;
}

/**
 * Represents a "raw" investment stat, before calculated stats are calculated and before any DestinyStatGroupDefinition is applied to transform the stat into something closer to what you see in-game.
 * Because these won't match what you see in-game, consider carefully whether you really want to use these stats. I have left them in case someone can do something useful or interesting with the pre-processed statistics.
 */
export interface DestinyItemInvestmentStatDefinition {
	/**
	 * The hash identifier for the DestinyStatDefinition defining this stat.
	 */
	statTypeHash: number;
	/**
	 * The raw "Investment" value for the stat, before transformations are performed to turn this raw stat into stats that are displayed in the game UI.
	 */
	value: number;
}

/**
 * A "Location" is a sort of shortcut for referring to a specific combination of Activity, Destination, Place, and even Bubble or NavPoint within a space.
 * Most of this data isn't intrinsically useful to us, but Objectives refer to locations, and through that we can at least infer the Activity, Destination, and Place being referred to by the Objective.
 */
export interface DestinyLocationDefinition {
	/**
	 * If the location has a Vendor on it, this is the hash identifier for that Vendor. Look them up with DestinyVendorDefinition.
	 */
	vendorHash: number;
	/**
	 * A Location may refer to different specific spots in the world based on the world's current state. This is a list of those potential spots, and the data we can use at runtime to determine which one of the spots is the currently valid one.
	 */
	locationReleases: DestinyLocationReleaseDefinition[];
	/**
	 * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
	 * When entities refer to each other in Destiny content, it is this hash that they are referring to.
	 */
	hash: number;
	/**
	 * The index of the entity as it was found in the investment tables.
	 */
	index: number;
	/**
	 * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
	 */
	redacted: boolean;
}

/**
 * A specific "spot" referred to by a location. Only one of these can be active at a time for a given Location.
 */
export interface DestinyLocationReleaseDefinition {
	/**
	 * Sadly, these don't appear to be populated anymore (ever?)
	 */
	displayProperties: DestinyDisplayPropertiesDefinition;
	/**
	 * If we had map information, this spawnPoint would be interesting. But sadly, we don't have that info.
	 */
	spawnPoint: number;
	/**
	 * The Destination being pointed to by this location.
	 */
	destinationHash: number;
	/**
	 * The Activity being pointed to by this location.
	 */
	activityHash: number;
	/**
	 * The Activity Graph being pointed to by this location.
	 */
	activityGraphHash: number;
	/**
	 * The Activity Graph Node being pointed to by this location. (Remember that Activity Graph Node hashes are only unique within an Activity Graph: so use the combination to find the node being spoken of)
	 */
	activityGraphNodeHash: number;
	/**
	 * The Activity Bubble within the Destination. Look this up in the DestinyDestinationDefinition's bubbles and bubbleSettings properties.
	 */
	activityBubbleName: number;
	/**
	 * If we had map information, this would tell us something cool about the path this location wants you to take. I wish we had map information.
	 */
	activityPathBundle: number;
	/**
	 * If we had map information, this would tell us about path information related to destination on the map. Sad. Maybe you can do something cool with it. Go to town man.
	 */
	activityPathDestination: number;
	/**
	 * The type of Nav Point that this represents. See the enumeration for more info.
	 */
	navPointType: DestinyActivityNavPointType;
	/**
	 * Looks like it should be the position on the map, but sadly it does not look populated... yet?
	 */
	worldPosition: number[];
}

export enum DestinyActivityNavPointType {
	Inactive = 0,
	PrimaryObjective = 1,
	SecondaryObjective = 2,
	TravelObjective = 3,
	PublicEventObjective = 4,
	AmmoCache = 5,
	PointTypeFlag = 6,
	CapturePoint = 7,
	DefensiveEncounter = 8,
	GhostInteraction = 9,
	KillAi = 10,
	QuestItem = 11,
	PatrolMission = 12,
	Incoming = 13,
	ArenaObjective = 14,
	AutomationHint = 15,
	TrackedQuest = 16,
}

/**
 * On to one of the more confusing subjects of the API. What is a Destination, and what is the relationship between it, Activities, Locations, and Places?
 * A "Destination" is a specific region/city/area of a larger "Place". For instance, a Place might be Earth where a Destination might be Bellevue, Washington. (Please, pick a more interesting destination if you come to visit Earth).
 */
export interface DestinyDestinationDefinition {
	displayProperties: DestinyDisplayPropertiesDefinition;
	/**
	 * The place that "owns" this Destination. Use this hash to look up the DestinyPlaceDefinition.
	 */
	placeHash: number;
	/**
	 * If this Destination has a default Free-Roam activity, this is the hash for that Activity. Use it to look up the DestinyActivityDefintion.
	 */
	defaultFreeroamActivityHash: number;
	/**
	 * If the Destination has default Activity Graphs (i.e. "Map") that should be shown in the director, this is the list of those Graphs. At most, only one should be active at any given time for a Destination: these would represent, for example, different variants on a Map if the Destination is changing on a macro level based on game state.
	 */
	activityGraphEntries: DestinyActivityGraphListEntryDefinition[];
	/**
	 * A Destination may have many "Bubbles" zones with human readable properties.
	 * We don't get as much info as I'd like about them - I'd love to return info like where on the map they are located - but at least this gives you the name of those bubbles. bubbleSettings and bubbles both have the identical number of entries, and you should match up their indexes to provide matching bubble and bubbleSettings data.
	 */
	bubbleSettings: DestinyDestinationBubbleSettingDefinition[];
	/**
	 * This provides the unique identifiers for every bubble in the destination (only guaranteed unique within the destination), and any intrinsic properties of the bubble.
	 * bubbleSettings and bubbles both have the identical number of entries, and you should match up their indexes to provide matching bubble and bubbleSettings data.
	 */
	bubbles: DestinyBubbleDefinition[];
	/**
	 * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
	 * When entities refer to each other in Destiny content, it is this hash that they are referring to.
	 */
	hash: number;
	/**
	 * The index of the entity as it was found in the investment tables.
	 */
	index: number;
	/**
	 * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
	 */
	redacted: boolean;
}

/**
 * Destinations and Activities may have default Activity Graphs that should be shown when you bring up the Director and are playing in either.
 * This contract defines the graph referred to and the gating for when it is relevant.
 */
export interface DestinyActivityGraphListEntryDefinition {
	/**
	 * The hash identifier of the DestinyActivityGraphDefinition that should be shown when opening the director.
	 */
	activityGraphHash: number;
}

/**
 * Represents a Map View in the director: be them overview views, destination views, or other.
 * They have nodes which map to activities, and other various visual elements that we (or others) may or may not be able to use.
 * Activity graphs, most importantly, have nodes which can have activities in various states of playability.
 * Unfortunately, activity graphs are combined at runtime with Game UI-only assets such as fragments of map images, various in-game special effects, decals etc... that we don't get in these definitions.
 * If we end up having time, we may end up trying to manually populate those here: but the last time we tried that, before the lead-up to D1, it proved to be unmaintainable as the game's content changed. So don't bet the farm on us providing that content in this definition.
 */
export interface DestinyActivityGraphDefinition {
	/**
	 * These represent the visual "nodes" on the map's view. These are the activities you can click on in the map.
	 */
	nodes: DestinyActivityGraphNodeDefinition[];
	/**
	 * Represents one-off/special UI elements that appear on the map.
	 */
	artElements: DestinyActivityGraphArtElementDefinition[];
	/**
	 * Represents connections between graph nodes. However, it lacks context that we'd need to make good use of it.
	 */
	connections: DestinyActivityGraphConnectionDefinition[];
	/**
	 * Objectives can display on maps, and this is supposedly metadata for that. I have not had the time to analyze the details of what is useful within however: we could be missing important data to make this work. Expect this property to be expanded on later if possible.
	 */
	displayObjectives: DestinyActivityGraphDisplayObjectiveDefinition[];
	/**
	 * Progressions can also display on maps, but similarly to displayObjectives we appear to lack some required information and context right now. We will have to look into it later and add more data if possible.
	 */
	displayProgressions: DestinyActivityGraphDisplayProgressionDefinition[];
	/**
	 * Represents links between this Activity Graph and other ones.
	 */
	linkedGraphs: DestinyLinkedGraphDefinition[];
	/**
	 * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
	 * When entities refer to each other in Destiny content, it is this hash that they are referring to.
	 */
	hash: number;
	/**
	 * The index of the entity as it was found in the investment tables.
	 */
	index: number;
	/**
	 * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
	 */
	redacted: boolean;
}

/**
 * This is the position and other data related to nodes in the activity graph that you can click to launch activities. An Activity Graph node will only have one active Activity at a time, which will determine the activity to be launched (and, unless overrideDisplay information is provided, will also determine the tooltip and other UI related to the node)
 */
export interface DestinyActivityGraphNodeDefinition {
	/**
	 * An identifier for the Activity Graph Node, only guaranteed to be unique within its parent Activity Graph.
	 */
	nodeId: number;
	/**
	 * The node *may* have display properties that override the active Activity's display properties.
	 */
	overrideDisplay: DestinyDisplayPropertiesDefinition;
	/**
	 * The position on the map for this node.
	 */
	position: DestinyPositionDefinition;
	/**
	 * The node may have various visual accents placed on it, or styles applied. These are the list of possible styles that the Node can have. The game iterates through each, looking for the first one that passes a check of the required game/character/account state in order to show that style, and then renders the node in that style.
	 */
	featuringStates: DestinyActivityGraphNodeFeaturingStateDefinition[];
	/**
	 * The node may have various possible activities that could be active for it, however only one may be active at a time. See the DestinyActivityGraphNodeActivityDefinition for details.
	 */
	activities: DestinyActivityGraphNodeActivityDefinition[];
}

export interface DestinyPositionDefinition {
	x: number;
	y: number;
	z: number;
}

/**
 * Nodes can have different visual states. This object represents a single visual state ("highlight type") that a node can be in, and the unlock expression condition to determine whether it should be set.
 */
export interface DestinyActivityGraphNodeFeaturingStateDefinition {
	/**
	 * The node can be highlighted in a variety of ways - the game iterates through these and finds the first FeaturingState that is valid at the present moment given the Game, Account, and Character state, and renders the node in that state. See the ActivityGraphNodeHighlightType enum for possible values.
	 */
	highlightType: ActivityGraphNodeHighlightType;
}

/**
 * The various known UI styles in which an item can be highlighted. It'll be up to you to determine what you want to show based on this highlighting, BNet doesn't have any assets that correspond to these states. And yeah, RiseOfIron and Comet have their own special highlight states. Don't ask me, I can't imagine they're still used.
 */
export enum ActivityGraphNodeHighlightType {
	None = 0,
	Normal = 1,
	Hyper = 2,
	Comet = 3,
	RiseOfIron = 4,
}

/**
 * The actual activity to be redirected to when you click on the node. Note that a node can have many Activities attached to it: but only one will be active at any given time. The list of Node Activities will be traversed, and the first one found to be active will be displayed. This way, a node can layer multiple variants of an activity on top of each other. For instance, one node can control the weekly Crucible Playlist. There are multiple possible playlists, but only one is active for the week.
 */
export interface DestinyActivityGraphNodeActivityDefinition {
	/**
	 * An identifier for this node activity. It is only guaranteed to be unique within the Activity Graph.
	 */
	nodeActivityId: number;
	/**
	 * The activity that will be activated if the user clicks on this node. Controls all activity-related information displayed on the node if it is active (the text shown in the tooltip etc)
	 */
	activityHash: number;
}

/**
 * The static data about Activities in Destiny 2.
 * Note that an Activity must be combined with an ActivityMode to know - from a Gameplay perspective - what the user is "Playing".
 * In most PvE activities, this is fairly straightforward. A Story Activity can only be played in the Story Activity Mode.
 * However, in PvP activities, the Activity alone only tells you the map being played, or the Playlist that the user chose to enter. You'll need to know the Activity Mode they're playing to know that they're playing Mode X on Map Y.
 * Activity Definitions tell a great deal of information about what *could* be relevant to a user: what rewards they can earn, what challenges could be performed, what modifiers could be applied. To figure out which of these properties is actually live, you'll need to combine the definition with "Live" data from one of the Destiny endpoints.
 * Activities also have Activity Types, but unfortunately in Destiny 2 these are even less reliable of a source of information than they were in Destiny 1. I will be looking into ways to provide more reliable sources for type information as time goes on, but for now we're going to have to deal with the limitations. See DestinyActivityTypeDefinition for more information.
 */
export interface DestinyActivityDefinition {
	/**
	 * The title, subtitle, and icon for the activity.
	 */
	displayProperties: DestinyDisplayPropertiesDefinition;
	/**
	 * If the activity has an icon associated with a specific release (such as a DLC), this is the path to that release's icon.
	 */
	releaseIcon: string;
	/**
	 * If the activity will not be visible until a specific and known time, this will be the seconds since the Epoch when it will become visible.
	 */
	releaseTime: number;
	/**
	 * The difficulty level of the activity.
	 */
	activityLevel: number;
	/**
	 * The recommended light level for this activity.
	 */
	activityLightLevel: number;
	/**
	 * The hash identifier for the Destination on which this Activity is played. Use it to look up the DestinyDestinationDefinition for human readable info about the destination. A Destination can be thought of as a more specific location than a "Place". For instance, if the "Place" is Earth, the "Destination" would be a specific city or region on Earth.
	 */
	destinationHash: number;
	/**
	 * The hash identifier for the "Place" on which this Activity is played. Use it to look up the DestinyPlaceDefinition for human readable info about the Place. A Place is the largest-scoped concept for location information. For instance, if the "Place" is Earth, the "Destination" would be a specific city or region on Earth.
	 */
	placeHash: number;
	/**
	 * The hash identifier for the Activity Type of this Activity. You may use it to look up the DestinyActivityTypeDefinition for human readable info, but be forewarned: Playlists and many PVP Map Activities will map to generic Activity Types. You'll have to use your knowledge of the Activity Mode being played to get more specific information about what the user is playing.
	 */
	activityTypeHash: number;
	/**
	 * The difficulty tier of the activity.
	 */
	tier: number;
	/**
	 * When Activities are completed, we generate a "Post-Game Carnage Report", or PGCR, with details about what happened in that activity (how many kills someone got, which team won, etc...) We use this image as the background when displaying PGCR information, and often use it when we refer to the Activity in general.
	 */
	pgcrImage: string;
	/**
	 * The expected possible rewards for the activity. These rewards may or may not be accessible for an individual player based on their character state, the account state, and even the game's state overall. But it is a useful reference for possible rewards you can earn in the activity. These match up to rewards displayed when you hover over the Activity in the in-game Director, and often refer to Placeholder or "Dummy" items: items that tell you what you can earn in vague terms rather than what you'll specifically be earning (partly because the game doesn't even know what you'll earn specifically until you roll for it at the end)
	 */
	rewards: DestinyActivityRewardDefinition[];
	/**
	 * Activities can have Modifiers, as defined in DestinyActivityModifierDefinition. These are references to the modifiers that *can* be applied to that activity, along with data that we use to determine if that modifier is actually active at any given point in time.
	 */
	modifiers: DestinyActivityModifierReferenceDefinition[];
	/**
	 * If True, this Activity is actually a Playlist that refers to multiple possible specific Activities and Activity Modes. For instance, a Crucible Playlist may have references to multiple Activities (Maps) with multiple Activity Modes (specific PvP gameplay modes). If this is true, refer to the playlistItems property for the specific entries in the playlist.
	 */
	isPlaylist: boolean;
	/**
	 * An activity can have many Challenges, of which any subset of them may be active for play at any given period of time. This gives the information about the challenges and data that we use to understand when they're active and what rewards they provide. Sadly, at the moment there's no central definition for challenges: much like "Skulls" were in Destiny 1, these are defined on individual activities and there can be many duplicates/near duplicates across the Destiny 2 ecosystem. I have it in mind to centralize these in a future revision of the API, but we are out of time.
	 */
	challenges: DestinyActivityChallengeDefinition[];
	/**
	 * If there are status strings related to the activity and based on internal state of the game, account, or character, then this will be the definition of those strings and the states needed in order for the strings to be shown.
	 */
	optionalUnlockStrings: DestinyActivityUnlockStringDefinition[];
	/**
	 * Represents all of the possible activities that could be played in the Playlist, along with information that we can use to determine if they are active at the present time.
	 */
	playlistItems: DestinyActivityPlaylistItemDefinition[];
	/**
	 * Unfortunately, in practice this is almost never populated. In theory, this is supposed to tell which Activity Graph to show if you bring up the director while in this activity.
	 */
	activityGraphList: DestinyActivityGraphListEntryDefinition[];
	/**
	 * This block of data provides information about the Activity's matchmaking attributes: how many people can join and such.
	 */
	matchmaking: DestinyActivityMatchmakingBlockDefinition;
	/**
	 * This block of data, if it exists, provides information about the guided game experience and restrictions for this activity. If it doesn't exist, the game is not able to be played as a guided game.
	 */
	guidedGame: DestinyActivityGuidedBlockDefinition;
	directActivityModeHash?: number;
	directActivityModeType?: number;
	activityModeHashes: number[];
	activityModeTypes: DestinyActivityModeType[];
	/**
	 * If true, this activity is a PVP activity or playlist.
	 */
	isPvP: boolean;
	/**
	 * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
	 * When entities refer to each other in Destiny content, it is this hash that they are referring to.
	 */
	hash: number;
	/**
	 * The index of the entity as it was found in the investment tables.
	 */
	index: number;
	/**
	 * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
	 */
	redacted: boolean;
}

/**
 * Activities can refer to one or more sets of tooltip-friendly reward data. These are the definitions for those tooltip friendly rewards.
 */
export interface DestinyActivityRewardDefinition {
	/**
	 * The header for the reward set, if any.
	 */
	rewardText: string;
	/**
	 * The "Items provided" in the reward. This is almost always a pointer to a DestinyInventoryItemDefintion for an item that you can't actually earn in-game, but that has name/description/icon information for the vague concept of the rewards you will receive. This is because the actual reward generation is non-deterministic and extremely complicated, so the best the game can do is tell you what you'll get in vague terms. And so too shall we.
	 * Interesting trivia: you actually *do* earn these items when you complete the activity. They go into a single-slot bucket on your profile, which is how you see the pop-ups of these rewards when you complete an activity that match these "dummy" items. You can even see them if you look at the last one you earned in your profile-level inventory through the BNet API! Who said reading documentation is a waste of time?
	 */
	rewardItems: DestinyItemQuantity[];
}

/**
 * A reference to an Activity Modifier from another entity, such as an Activity (for now, just Activities).
 * This defines some
 */
export interface DestinyActivityModifierReferenceDefinition {
	/**
	 * The hash identifier for the DestinyActivityModifierDefinition referenced by this activity.
	 */
	activityModifierHash: number;
}

/**
 * Modifiers - in Destiny 1, these were referred to as "Skulls" - are changes that can be applied to an Activity.
 */
export interface DestinyActivityModifierDefinition {
	displayProperties: DestinyDisplayPropertiesDefinition;
	/**
	 * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
	 * When entities refer to each other in Destiny content, it is this hash that they are referring to.
	 */
	hash: number;
	/**
	 * The index of the entity as it was found in the investment tables.
	 */
	index: number;
	/**
	 * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
	 */
	redacted: boolean;
}

/**
 * Represents a reference to a Challenge, which for now is just an Objective.
 */
export interface DestinyActivityChallengeDefinition {
	/**
	 * The hash for the Objective that matches this challenge. Use it to look up the DestinyObjectiveDefinition.
	 */
	objectiveHash: number;
}

/**
 * Represents a status string that could be conditionally displayed about an activity. Note that externally, you can only see the strings themselves. Internally we combine this information with server state to determine which strings should be shown.
 */
export interface DestinyActivityUnlockStringDefinition {
	/**
	 * The string to be displayed if the conditions are met.
	 */
	displayString: string;
}

/**
 * If the activity is a playlist, this is the definition for a specific entry in the playlist: a single possible combination of Activity and Activity Mode that can be chosen.
 */
export interface DestinyActivityPlaylistItemDefinition {
	/**
	 * The hash identifier of the Activity that can be played. Use it to look up the DestinyActivityDefinition.
	 */
	activityHash: number;
	directActivityModeHash?: number;
	directActivityModeType?: number;
	activityModeHashes: number[];
	activityModeTypes: DestinyActivityModeType[];
}

export enum DestinyActivityModeType {
	None = 0,
	Story = 2,
	Strike = 3,
	Raid = 4,
	AllPvP = 5,
	Patrol = 6,
	AllPvE = 7,
	Reserved9 = 9,
	Control = 10,
	Reserved11 = 11,
	Clash = 12,
	Reserved13 = 13,
	Reserved15 = 15,
	Nightfall = 16,
	HeroicNightfall = 17,
	AllStrikes = 18,
	IronBanner = 19,
	Reserved20 = 20,
	Reserved21 = 21,
	Reserved22 = 22,
	Reserved24 = 24,
	Reserved25 = 25,
	Reserved26 = 26,
	Reserved27 = 27,
	Reserved28 = 28,
	Reserved29 = 29,
	Reserved30 = 30,
	Supremacy = 31,
	Reserved32 = 32,
	Survival = 37,
	Countdown = 38,
	TrialsOfTheNine = 39,
	Social = 40,
}

export interface DestinyActivityModeDefinition {
	displayProperties: DestinyDisplayPropertiesDefinition;
	pgcrImage: string;
	modeType: DestinyActivityModeType;
	activityModeCategory: DestinyActivityModeCategory;
	isTeamBased: boolean;
	isAggregateMode: boolean;
	parentHashes: number[];
	friendlyName: string;
	activityModeMappings: {[field: number]: DestinyActivityModeType};
	/**
	 * If FALSE, we want to ignore this type when we're showing activity modes in BNet UI. It will still be returned in case 3rd parties want to use it for any purpose.
	 */
	display: boolean;
	/**
	 * The relative ordering of activity modes.
	 */
	order: number;
	/**
	 * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
	 * When entities refer to each other in Destiny content, it is this hash that they are referring to.
	 */
	hash: number;
	/**
	 * The index of the entity as it was found in the investment tables.
	 */
	index: number;
	/**
	 * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
	 */
	redacted: boolean;
}

/**
 * Activity Modes are grouped into a few possible broad categories.
 */
export enum DestinyActivityModeCategory {
	None = 0,
	PvE = 1,
	PvP = 2,
}

/**
 * Information about matchmaking and party size for the activity.
 */
export interface DestinyActivityMatchmakingBlockDefinition {
	/**
	 * If TRUE, the activity is matchmade. Otherwise, it requires explicit forming of a party.
	 */
	isMatchmade: boolean;
	/**
	 * The minimum # of people in the fireteam for the activity to launch.
	 */
	minParty: number;
	/**
	 * The maximum # of people allowed in a Fireteam.
	 */
	maxParty: number;
	/**
	 * The maximum # of people allowed across all teams in the activity.
	 */
	maxPlayers: number;
	/**
	 * If true, you have to Solemnly Swear to be up to Nothing But Good(tm) to play.
	 */
	requiresGuardianOath: boolean;
}

/**
 * Guided Game information for this activity.
 */
export interface DestinyActivityGuidedBlockDefinition {
	/**
	 * The maximum amount of people that can be in the waiting lobby.
	 */
	guidedMaxLobbySize: number;
	/**
	 * The minimum amount of people that can be in the waiting lobby.
	 */
	guidedMinLobbySize: number;
	/**
	 * If -1, the guided group cannot be disbanded. Otherwise, take the total # of players in the activity and subtract this number: that is the total # of votes needed for the guided group to disband.
	 */
	guidedDisbandCount: number;
}

/**
 * Okay, so Activities (DestinyActivityDefinition) take place in Destinations (DestinyDestinationDefinition). Destinations are part of larger locations known as Places (you're reading its documentation right now).
 * Places are more on the planetary scale, like "Earth" and "Your Mom."
 */
export interface DestinyPlaceDefinition {
	displayProperties: DestinyDisplayPropertiesDefinition;
	/**
	 * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
	 * When entities refer to each other in Destiny content, it is this hash that they are referring to.
	 */
	hash: number;
	/**
	 * The index of the entity as it was found in the investment tables.
	 */
	index: number;
	/**
	 * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
	 */
	redacted: boolean;
}

/**
 * The definition for an Activity Type.
 * In Destiny 2, an Activity Type represents a conceptual categorization of Activities.
 * These are most commonly used in the game for the subtitle under Activities, but BNet uses them extensively to identify and group activities by their common properties.
 * Unfortunately, there has been a movement away from providing the richer data in Destiny 2 that we used to get in Destiny 1 for Activity Types. For instance, Nightfalls are grouped under the same Activity Type as regular Strikes.
 * For this reason, BNet will eventually migrate toward Activity Modes as a better indicator of activity category. But for the time being, it is still referred to in many places across our codebase.
 */
export interface DestinyActivityTypeDefinition {
	displayProperties: DestinyDisplayPropertiesDefinition;
	/**
	 * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
	 * When entities refer to each other in Destiny content, it is this hash that they are referring to.
	 */
	hash: number;
	/**
	 * The index of the entity as it was found in the investment tables.
	 */
	index: number;
	/**
	 * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
	 */
	redacted: boolean;
}

/**
 * These Art Elements are meant to represent one-off visual effects overlaid on the map. Currently, we do not have a pipeline to import the assets for these overlays, so this info exists as a placeholder for when such a pipeline exists (if it ever will)
 */
export interface DestinyActivityGraphArtElementDefinition {
	/**
	 * The position on the map of the art element.
	 */
	position: DestinyPositionDefinition;
}

/**
 * Nodes on a graph can be visually connected: this appears to be the information about which nodes to link. It appears to lack more detailed information, such as the path for that linking.
 */
export interface DestinyActivityGraphConnectionDefinition {
	sourceNodeHash: number;
	destNodeHash: number;
}

/**
 * When a Graph needs to show active Objectives, this defines those objectives as well as an identifier.
 */
export interface DestinyActivityGraphDisplayObjectiveDefinition {
	/**
	 * $NOTE $amola 2017-01-19 This field is apparently something that CUI uses to manually wire up objectives to display info. I am unsure how it works.
	 */
	id: number;
	/**
	 * The objective being shown on the map.
	 */
	objectiveHash: number;
}

/**
 * When a Graph needs to show active Progressions, this defines those objectives as well as an identifier.
 */
export interface DestinyActivityGraphDisplayProgressionDefinition {
	id: number;
	progressionHash: number;
}

/**
 * This describes links between the current graph and others, as well as when that link is relevant.
 */
export interface DestinyLinkedGraphDefinition {
	description: string;
	name: string;
	unlockExpression: DestinyUnlockExpressionDefinition;
	linkedGraphId: number;
	linkedGraphs: DestinyLinkedGraphEntryDefinition[];
	overview: string;
}

/**
 * Where the sausage gets made. Unlock Expressions are the foundation of the game's gating mechanics and investment-related restrictions. They can test Unlock Flags and Unlock Values for certain states, using a sufficient amount of logical operators such that unlock expressions are effectively Turing complete.
 * Use UnlockExpressionParser to evaluate expressions using an IUnlockContext parsed from Babel.
 */
export interface DestinyUnlockExpressionDefinition {
	/**
	 * A shortcut for determining the most restrictive gating that this expression performs. See the DestinyGatingScope enum's documentation for more details.
	 */
	scope: DestinyGatingScope;
}

export interface DestinyLinkedGraphEntryDefinition {
	activityGraphHash: number;
}

/**
 * Human readable data about the bubble. Combine with DestinyBubbleDefinition - see DestinyDestinationDefinition.bubbleSettings for more information.
 */
export interface DestinyDestinationBubbleSettingDefinition {
	displayProperties: DestinyDisplayPropertiesDefinition;
}

/**
 * Basic identifying data about the bubble. Combine with DestinyDestinationBubbleSettingDefinition - see DestinyDestinationDefinition.bubbleSettings for more information.
 */
export interface DestinyBubbleDefinition {
	/**
	 * The identifier for the bubble: only guaranteed to be unique within the Destination.
	 */
	hash: number;
}

/**
 * If an item is a Plug, its DestinyInventoryItemDefinition.plug property will be populated with an instance of one of these bad boys.
 * This gives information about when it can be inserted, what the plug's category is (and thus whether it is compatible with a socket... see DestinySocketTypeDefinition for information about Plug Categories and socket compatibility), whether it is enabled and other Plug info.
 */
export interface DestinyItemPlugDefinition {
	/**
	 * The rules around when this plug can be inserted into a socket, aside from the socket's individual restrictions.
	 * The live data DestinyItemPlugComponent.insertFailIndexes will be an index into this array, so you can pull out the failure strings appropriate for the user.
	 */
	insertionRules: DestinyPlugRuleDefinition[];
	/**
	 * The string identifier for the plug's category. Use the socket's DestinySocketTypeDefinition.plugWhitelist to determine whether this plug can be inserted into the socket.
	 */
	plugCategoryIdentifier: string;
	/**
	 * The hash for the plugCategoryIdentifier. You can use this instead if you wish: I put both in the definition for debugging purposes.
	 */
	plugCategoryHash: number;
	/**
	 * If you successfully socket the item, this will determine whether or not you get "refunded" on the plug.
	 */
	onActionRecreateSelf: boolean;
	/**
	 * If inserting this plug requires materials, this is the hash identifier for looking up the DestinyMaterialRequirementSetDefinition for those requirements.
	 */
	insertionMaterialRequirementHash: number;
	/**
	 * In the game, if you're inspecting a plug item directly, this will be the item shown with the plug attached. Look up the DestinyInventoryItemDefinition for this hash for the item.
	 */
	previewItemOverrideHash: number;
	/**
	 * It's not enough for the plug to be inserted. It has to be enabled as well. For it to be enabled, it may require materials. This is the hash identifier for the DestinyMaterialRequirementSetDefinition for those requirements, if there is one.
	 */
	enabledMaterialRequirementHash: number;
	/**
	 * The rules around whether the plug, once inserted, is enabled and providing its benefits.
	 * The live data DestinyItemPlugComponent.enableFailIndexes will be an index into this array, so you can pull out the failure strings appropriate for the user.
	 */
	enabledRules: DestinyPlugRuleDefinition[];
}

/**
 * Dictates a rule around whether the plug is enabled or insertable.
 * In practice, the live Destiny data will refer to these entries by index. You can then look up that index in the appropriate property (enabledRules or insertionRules) to get the localized string for the failure message if it failed.
 */
export interface DestinyPlugRuleDefinition {
	/**
	 * The localized string to show if this rule fails.
	 */
	failureMessage: string;
}

/**
 * Represent a set of material requirements: Items that either need to be owned or need to be consumed in order to perform an action.
 * A variety of other entities refer to these as gatekeepers and payments for actions that can be performed in game.
 */
export interface DestinyMaterialRequirementSetDefinition {
	/**
	 * The list of all materials that are required.
	 */
	materials: DestinyMaterialRequirement[];
	/**
	 * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
	 * When entities refer to each other in Destiny content, it is this hash that they are referring to.
	 */
	hash: number;
	/**
	 * The index of the entity as it was found in the investment tables.
	 */
	index: number;
	/**
	 * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
	 */
	redacted: boolean;
}

/**
 * Many actions relating to items require you to expend materials: - Activating a talent node - Inserting a plug into a socket The items will refer to material requirements by a materialRequirementsHash in these cases, and this is the definition for those requirements in terms of the item required, how much of it is required and other interesting info. This is one of the rare/strange times where a single contract class is used both in definitions *and* in live data response contracts. I'm not sure yet whether I regret that.
 */
export interface DestinyMaterialRequirement {
	/**
	 * The hash identifier of the material required. Use it to look up the material's DestinyInventoryItemDefinition.
	 */
	itemHash: number;
	/**
	 * If True, the material will be removed from the character's inventory when the action is performed.
	 */
	deleteOnAction: boolean;
	/**
	 * The amount of the material required.
	 */
	count: number;
	/**
	 * If True, this requirement is "silent": don't bother showing it in a material requirements display. I mean, I'm not your mom: I'm not going to tell you you *can't* show it. But we won't show it in our UI.
	 */
	omitFromRequirements: boolean;
}

/**
 * If an item has a related gearset, this is the list of items in that set, and an unlock expression that evaluates to a number representing the progress toward gearset completion (a very rare use for unlock expressions!)
 */
export interface DestinyItemGearsetBlockDefinition {
	/**
	 * The maximum possible number of items that can be collected.
	 */
	trackingValueMax: number;
	/**
	 * The list of hashes for items in the gearset. Use them to look up DestinyInventoryItemDefinition entries for the items in the set.
	 */
	itemList: number[];
}

/**
 * Some items are "sacks" - they can be "opened" to produce other items. This is information related to its sack status, mostly UI strings. Engrams are an example of items that are considered to be "Sacks".
 */
export interface DestinyItemSackBlockDefinition {
	/**
	 * A description of what will happen when you open the sack. As far as I can tell, this is blank currently. Unknown whether it will eventually be populated with useful info.
	 */
	detailAction: string;
	/**
	 * The localized name of the action being performed when you open the sack.
	 */
	openAction: string;
	selectItemCount: number;
	vendorSackType: string;
}

/**
 * If defined, the item has at least one socket.
 */
export interface DestinyItemSocketBlockDefinition {
	/**
	 * This was supposed to be a string that would give per-item details about sockets. In practice, it turns out that all this ever has is the localized word "details". ... that's lame, but perhaps it will become something cool in the future.
	 */
	detail: string;
	/**
	 * Each socket on an item is defined here. Check inside for more info.
	 */
	socketEntries: DestinyItemSocketEntryDefinition[];
	/**
	 * A convenience property, that refers to the sockets in the "sockets" property, pre-grouped by category and ordered in the manner that they should be grouped in the UI. You could form this yourself with the existing data, but why would you want to? Enjoy life man.
	 */
	socketCategories: DestinyItemSocketCategoryDefinition[];
}

/**
 * The definition information for a specific socket on an item. This will determine how the socket behaves in-game.
 */
export interface DestinyItemSocketEntryDefinition {
	/**
	 * All sockets have a type, and this is the hash identifier for this particular type. Use it to look up the DestinySocketTypeDefinition: read there for more information on how socket types affect the behavior of the socket.
	 */
	socketTypeHash: number;
	/**
	 * If a valid hash, this is the hash identifier for the DestinyInventoryItemDefinition representing the Plug that will be initially inserted into the item on item creation. Otherwise, this Socket will either start without a plug inserted, or will have one randomly inserted.
	 */
	singleInitialItemHash: number;
	/**
	 * This is a list of pre-determined plugs that can *always* be plugged into this socket, without the character having the plug in their inventory.
	 * If this list is populated, you will not be allowed to plug an arbitrary item in the socket: you will only be able to choose from one of these reusable plugs.
	 */
	reusablePlugItems: DestinyItemSocketEntryPlugItemDefinition[];
}

/**
 * The definition of a known, reusable plug that can be applied to a socket.
 */
export interface DestinyItemSocketEntryPlugItemDefinition {
	/**
	 * The hash identifier of a DestinyInventoryItemDefinition representing the plug that can be inserted.
	 */
	plugItemHash: number;
}

/**
 * All Sockets have a "Type": a set of common properties that determine when the socket allows Plugs to be inserted, what Categories of Plugs can be inserted, and whether the socket is even visible at all given the current game/character/account state.
 * See DestinyInventoryItemDefinition for more information about Socketed items and Plugs.
 */
export interface DestinySocketTypeDefinition {
	/**
	 * There are fields for this display data, but they appear to be unpopulated as of now. I am not sure where in the UI these would show if they even were populated, but I will continue to return this data in case it becomes useful.
	 */
	displayProperties: DestinyDisplayPropertiesDefinition;
	/**
	 * Defines what happens when a plug is inserted into sockets of this type.
	 */
	insertAction: DestinyInsertPlugActionDefinition;
	/**
	 * A list of Plug "Categories" that are allowed to be plugged into sockets of this type.
	 * These should be compared against a given plug item's DestinyInventoryItemDefinition.plug.plugCategoryHash, which indicates the plug item's category.
	 * If the plug's category matches any whitelisted plug, or if the whitelist is empty, it is allowed to be inserted.
	 */
	plugWhitelist: DestinyPlugWhitelistEntryDefinition[];
	socketCategoryHash: number;
	visibility: DestinySocketVisibility;
	/**
	 * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
	 * When entities refer to each other in Destiny content, it is this hash that they are referring to.
	 */
	hash: number;
	/**
	 * The index of the entity as it was found in the investment tables.
	 */
	index: number;
	/**
	 * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
	 */
	redacted: boolean;
}

/**
 * Data related to what happens while a plug is being inserted, mostly for UI purposes.
 */
export interface DestinyInsertPlugActionDefinition {
	/**
	 * How long it takes for the Plugging of the item to be completed once it is initiated, if you care.
	 */
	actionExecuteSeconds: number;
}

/**
 * Defines a plug "Category" that is allowed to be plugged into a socket of this type.
 * This should be compared against a given plug item's DestinyInventoryItemDefinition.plug.plugCategoryHash, which indicates the plug item's category.
 */
export interface DestinyPlugWhitelistEntryDefinition {
	/**
	 * The hash identifier of the Plug Category to compare against the plug item's plug.plugCategoryHash.
	 * Note that this does NOT relate to any Definition in itself, it is only used for comparison purposes.
	 */
	categoryHash: number;
	/**
	 * The string identifier for the category, which is here mostly for debug purposes.
	 */
	categoryIdentifier: string;
}

export enum DestinySocketVisibility {
	Visible = 0,
	Hidden = 1,
	HiddenWhenEmpty = 2,
}

/**
 * Sockets on an item are organized into Categories visually.
 * You can find references to the socket category defined on an item's DestinyInventoryItemDefinition.sockets.socketCategories property.
 * This has the display information for rendering the categories' header, and a hint for how the UI should handle showing this category.
 */
export interface DestinySocketCategoryDefinition {
	displayProperties: DestinyDisplayPropertiesDefinition;
	/**
	 * A string hinting to the game's UI system about how the sockets in this category should be displayed.
	 * BNet doesn't use it: it's up to you to find valid values and make your own special UI if you want to honor this category style.
	 */
	uiCategoryStyle: number;
	/**
	 * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
	 * When entities refer to each other in Destiny content, it is this hash that they are referring to.
	 */
	hash: number;
	/**
	 * The index of the entity as it was found in the investment tables.
	 */
	index: number;
	/**
	 * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
	 */
	redacted: boolean;
}

/**
 * Sockets are grouped into categories in the UI. These define which category and which sockets are under that category.
 */
export interface DestinyItemSocketCategoryDefinition {
	/**
	 * The hash for the Socket Category: a quick way to go get the header display information for the category. Use it to look up DestinySocketCategoryDefinition info.
	 */
	socketCategoryHash: number;
	/**
	 * Use these indexes to look up the sockets in the "sockets.socketEntries" property on the item definition. These are the indexes under the category, in game-rendered order.
	 */
	socketIndexes: number[];
}

/**
 * This appears to be information used when rendering rewards. We don't currently use it on BNet.
 */
export interface DestinyItemSummaryBlockDefinition {
	/**
	 * Apparently when rendering an item in a reward, this should be used as a sort priority. We're not doing it presently.
	 */
	sortPriority: number;
}

/**
 * This defines information that can only come from a talent grid on an item. Items mostly have negligible talent grid data these days, but instanced items still retain grids as a source for some of this common information.
 * Builds/Subclasses are the only items left that still have talent grids with meaningful Nodes.
 */
export interface DestinyItemTalentGridBlockDefinition {
	/**
	 * The hash identifier of the DestinyTalentGridDefinition attached to this item.
	 */
	talentGridHash: number;
	/**
	 * This is meant to be a subtitle for looking at the talent grid. In practice, somewhat frustratingly, this always merely says the localized word for "Details". Great. Maybe it'll have more if talent grids ever get used for more than builds and subclasses again.
	 */
	itemDetailString: string;
	/**
	 * A shortcut string identifier for the "build" in question, if this talent grid has an associated build. Doesn't map to anything we can expose at the moment.
	 */
	buildName: string;
	/**
	 * If the talent grid implies a damage type, this is the enum value for that damage type.
	 */
	hudDamageType: DamageType;
	/**
	 * If the talent grid has a special icon that's shown in the game UI (like builds, funny that), this is the identifier for that icon. Sadly, we don't actually get that icon right now. I'll be looking to replace this with a path to the actual icon itself.
	 */
	hudIcon: string;
}

/**
 * The time has unfortunately come to talk about Talent Grids.
 * Talent Grids are the most complex and unintuitive part of the Destiny Definition data. Grab a cup of coffee before we begin, I can wait.
 * Talent Grids were the primary way that items could be customized in Destiny 1. In Destiny 2, for now, talent grids have become exclusively used by Subclass/Build items: but the system is still in place for it to be used by items should the direction change back toward talent grids.
 * Talent Grids have Nodes: the visual circles on the talent grid detail screen that have icons and can be activated if you meet certain requirements and pay costs. The actual visual data and effects, however, are driven by the "Steps" on Talent Nodes. Any given node will have 1:M of these steps, and the specific step that will be considered the "current" step (and thus the dictator of all benefits, visual state, and activation requirements on the Node) will almost always not be determined until an instance of the item is created. This is how, in Destiny 1, items were able to have such a wide variety of what users saw as "Perks": they were actually Talent Grids with nodes that had a wide variety of Steps, randomly chosen at the time of item creation.
 * Now that Talent Grids are used exclusively by subclasses and builds, all of the properties within still apply: but there are additional visual elements on the Subclass/Build screens that are superimposed on top of the talent nodes. Unfortunately, BNet doesn't have this data: if you want to build a subclass screen, you will have to provide your own "decorative" assets, such as the visual connectors between nodes and the fancy colored-fire-bathed character standing behind the nodes.
 * DestinyInventoryItem.talentGrid.talentGridHash defines an item's linked Talent Grid, which brings you to this definition that contains enough satic data about talent grids to make your head spin. These *must* be combined with instanced data - found when live data returns DestinyItemTalentGridComponent - in order to derive meaning. The instanced data will reference nodes and steps within these definitions, which you will then have to look up in the definition and combine with the instanced data to give the user the visual representation of their item's talent grid.
 */
export interface DestinyTalentGridDefinition {
	/**
	 * The maximum possible level of the Talent Grid: at this level, any nodes are allowed to be activated.
	 */
	maxGridLevel: number;
	/**
	 * The meaning of this has been lost in the sands of time: it still exists as a property, but appears to be unused in the modern UI of talent grids. It used to imply that each visual "column" of talent nodes required identical progression levels in order to be activated. Returning this value in case it is still useful to someone? Perhaps it's just a bit of interesting history.
	 */
	gridLevelPerColumn: number;
	/**
	 * The hash identifier of the Progression (DestinyProgressionDefinition) that drives whether and when Talent Nodes can be activated on the Grid. Items will have instances of this Progression, and will gain experience that will eventually cause the grid to increase in level. As the grid's level increases, it will cross the threshold where nodes can be activated. See DestinyTalentGridStepDefinition's activation requirements for more information.
	 */
	progressionHash: number;
	/**
	 * The list of Talent Nodes on the Grid (recall that Nodes themselves are really just locations in the UI to show whatever their current Step is. You will only know the current step for a node by retrieving instanced data through platform calls to the API that return DestinyItemTalentGridComponent).
	 */
	nodes: DestinyTalentNodeDefinition[];
	/**
	 * Talent Nodes can exist in "exclusive sets": these are sets of nodes in which only a single node in the set can be activated at any given time. Activating a node in this set will automatically deactivate the other nodes in the set (referred to as a "Swap").
	 * If a node in the exclusive set has already been activated, the game will not charge you materials to activate another node in the set, even if you have never activated it before, because you already paid the cost to activate one node in the set.
	 * Not to be confused with Exclusive Groups. (how the heck do we NOT get confused by that? Jeez) See the groups property for information about that only-tangentially-related concept.
	 */
	exclusiveSets: DestinyTalentNodeExclusiveSetDefinition[];
	/**
	 * This is a quick reference to the indexes of nodes that are not part of exclusive sets. Handy for knowing which talent nodes can only be activated directly, rather than via swapping.
	 */
	independentNodeIndexes: number[];
	/**
	 * Talent Nodes can have "Exclusive Groups". These are not to be confused with Exclusive Sets (see exclusiveSets property).
	 * Look at the definition of DestinyTalentExclusiveGroup for more information and how they work. These groups are keyed by the "groupHash" from DestinyTalentExclusiveGroup.
	 */
	groups: {[field: number]: DestinyTalentExclusiveGroup};
	/**
	 * BNet wants to show talent nodes grouped by similar purpose with localized titles. This is the ordered list of those categories: if you want to show nodes by category, you can iterate over this list, render the displayProperties for the category as the title, and then iterate over the talent nodes referenced by the category to show the related nodes.
	 * Note that this is different from Exclusive Groups or Sets, because these categories also incorporate "Independent" nodes that belong to neither sets nor groups. These are purely for visual grouping of nodes rather than functional grouping.
	 */
	nodeCategories: DestinyTalentNodeCategory[];
	/**
	 * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
	 * When entities refer to each other in Destiny content, it is this hash that they are referring to.
	 */
	hash: number;
	/**
	 * The index of the entity as it was found in the investment tables.
	 */
	index: number;
	/**
	 * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
	 */
	redacted: boolean;
}

/**
 * Talent Grids on items have Nodes. These nodes have positions in the talent grid's UI, and contain "Steps" (DestinyTalentNodeStepDefinition), one of whom will be the "Current" step.
 * The Current Step determines the visual properties of the node, as well as what the node grants when it is activated.
 * See DestinyTalentGridDefinition for a more complete overview of how Talent Grids work, and how they are used in Destiny 2 (and how they were used in Destiny 1).
 */
export interface DestinyTalentNodeDefinition {
	/**
	 * The index into the DestinyTalentGridDefinition's "nodes" property where this node is located. Used to uniquely identify the node within the Talent Grid. Note that this is content version dependent: make sure you have the latest version of content before trying to use these properties.
	 */
	nodeIndex: number;
	/**
	 * The hash identifier for the node, which unfortunately is also content version dependent but can be (and ideally, should be) used instead of the nodeIndex to uniquely identify the node.
	 * The two exist side-by-side for backcompat reasons due to the Great Talent Node Restructuring of Destiny 1, and I ran out of time to remove one of them and standardize on the other. Sorry!
	 */
	nodeHash: number;
	/**
	 * The visual "row" where the node should be shown in the UI. If negative, then the node is hidden.
	 */
	row: number;
	/**
	 * The visual "column" where the node should be shown in the UI. If negative, the node is hidden.
	 */
	column: number;
	/**
	 * Indexes into the DestinyTalentGridDefinition.nodes property for any nodes that must be activated before this one is allowed to be activated.
	 * I would have liked to change this to hashes for Destiny 2, but we have run out of time.
	 */
	prerequisiteNodeIndexes: number[];
	/**
	 * At one point, Talent Nodes supported the idea of "Binary Pairs": nodes that overlapped each other visually, and where activating one deactivated the other. They ended up not being used, mostly because Exclusive Sets are *almost* a superset of this concept, but the potential for it to be used still exists in theory.
	 * If this is ever used, this will be the index into the DestinyTalentGridDefinition.nodes property for the node that is the binary pair match to this node. Activating one deactivates the other.
	 */
	binaryPairNodeIndex: number;
	/**
	 * If true, this node will automatically unlock when the Talent Grid's level reaches the required level of the current step of this node.
	 */
	autoUnlocks: boolean;
	/**
	 * At one point, Nodes were going to be able to be activated multiple times, changing the current step and potentially piling on multiple effects from the previously activated steps. This property would indicate if the last step could be activated multiple times.
	 * This is not currently used, but it isn't out of the question that this could end up being used again in a theoretical future.
	 */
	lastStepRepeats: boolean;
	/**
	 * If this is true, the node's step is determined randomly rather than the first step being chosen.
	 */
	isRandom: boolean;
	/**
	 * At one point, you were going to be able to repurchase talent nodes that had random steps, to "re-roll" the current step of the node (and thus change the properties of your item). This was to be the activation requirement for performing that re-roll.
	 * The system still exists to do this, as far as I know, so it may yet come back around!
	 */
	randomActivationRequirement: DestinyNodeActivationRequirement;
	/**
	 * If this is true, the node can be "re-rolled" to acquire a different random current step. This is not used, but still exists for a theoretical future of talent grids.
	 */
	isRandomRepurchasable: boolean;
	/**
	 * At this point, "steps" have been obfuscated into conceptual entities, aggregating the underlying notions of "properties" and "true steps".
	 * If you need to know a step as it truly exists - such as when recreating Node logic when processing Vendor data - you'll have to use the "realSteps" property below.
	 */
	steps: DestinyNodeStepDefinition[];
	/**
	 * The nodeHash values for nodes that are in an Exclusive Set with this node.
	 * See DestinyTalentGridDefinition.exclusiveSets for more info about exclusive sets.
	 * Again, note that these are nodeHashes and *not* nodeIndexes.
	 */
	exclusiveWithNodeHashes: number[];
	/**
	 * If the node's step is randomly selected, this is the amount of the Talent Grid's progression experience at which the progression bar for the node should be shown.
	 */
	randomStartProgressionBarAtProgression: number;
	/**
	 * A string identifier for a custom visual layout to apply to this talent node. Unfortunately, we do not have any data for rendering these custom layouts. It will be up to you to interpret these strings and change your UI if you want to have custom UI matching these layouts.
	 */
	layoutIdentifier: string;
	/**
	 * As of Destiny 2, nodes can exist as part of "Exclusive Groups". These differ from exclusive sets in that, within the group, many nodes can be activated. But the act of activating any node in the group will cause "opposing" nodes (nodes in groups that are not allowed to be activated at the same time as this group) to deactivate.
	 * See DestinyTalentExclusiveGroup for more information on the details. This is an identifier for this node's group, if it is part of one.
	 */
	groupHash?: number;
	/**
	 * Talent nodes can be associated with a piece of Lore, generally rendered in a tooltip. This is the hash identifier of the lore element to show, if there is one to be show.
	 */
	loreHash?: number;
	/**
	 * Comes from the talent grid node style: this identifier should be used to determine how to render the node in the UI.
	 */
	nodeStyleIdentifier: string;
	/**
	 * Comes from the talent grid node style: if true, then this node should be ignored for determining whether the grid is complete.
	 */
	ignoreForCompletion: boolean;
}

/**
 * Talent nodes have requirements that must be met before they can be activated.
 * This describes the material costs, the Level of the Talent Grid's progression required, and other conditional information that limits whether a talent node can be activated.
 */
export interface DestinyNodeActivationRequirement {
	/**
	 * The Progression level on the Talent Grid required to activate this node.
	 * See DestinyTalentGridDefinition.progressionHash for the related Progression, and read DestinyProgressionDefinition's documentation to learn more about Progressions.
	 */
	gridLevel: number;
	/**
	 * The list of hash identifiers for material requirement sets: materials that are required for the node to be activated. See DestinyMaterialRequirementSetDefinition for more information about material requirements.
	 * In this case, only a single DestinyMaterialRequirementSetDefinition will be chosen from this list, and we won't know which one will be chosen until an instance of the item is created.
	 */
	materialRequirementHashes: number[];
}

/**
 * This defines the properties of a "Talent Node Step". When you see a talent node in game, the actual visible properties that you see (its icon, description, the perks and stats it provides) are not provided by the Node itself, but rather by the currently active Step on the node.
 * When a Talent Node is activated, the currently active step's benefits are conferred upon the item and character.
 * The currently active step on talent nodes are determined when an item is first instantiated. Sometimes it is random, sometimes it is more deterministic (particularly when a node has only a single step).
 * Note that, when dealing with Talent Node Steps, you must ensure that you have the latest version of content. stepIndex and nodeStepHash - two ways of identifying the step within a node - are both content version dependent, and thus are subject to change between content updates.
 */
export interface DestinyNodeStepDefinition {
	/**
	 * These are the display properties actually used to render the Talent Node. The currently active step's displayProperties are shown.
	 */
	displayProperties: DestinyDisplayPropertiesDefinition;
	/**
	 * The index of this step in the list of Steps on the Talent Node.
	 * Unfortunately, this is the closest thing we have to an identifier for the Step: steps are not provided a content version agnostic identifier. This means that, when you are dealing with talent nodes, you will need to first ensure that you have the latest version of content.
	 */
	stepIndex: number;
	/**
	 * The hash of this node step. Unfortunately, while it can be used to uniquely identify the step within a node, it is also content version dependent and should not be relied on without ensuring you have the latest vesion of content.
	 */
	nodeStepHash: number;
	/**
	 * If you can interact with this node in some way, this is the localized description of that interaction.
	 */
	interactionDescription: string;
	/**
	 * An enum representing a damage type granted by activating this step, if any.
	 */
	damageType: DamageType;
	/**
	 * If the step provides a damage type, this will be the hash identifier used to look up the damage type's DestinyDamageTypeDefinition.
	 */
	damageTypeHash?: number;
	/**
	 * If the step has requirements for activation (they almost always do, if nothing else than for the Talent Grid's Progression to have reached a certain level), they will be defined here.
	 */
	activationRequirement: DestinyNodeActivationRequirement;
	/**
	 * There was a time when talent nodes could be activated multiple times, and the effects of subsequent Steps would be compounded on each other, essentially "upgrading" the node. We have moved away from this, but theoretically the capability still exists.
	 * I continue to return this in case it is used in the future: if true and this step is the current step in the node, you are allowed to activate the node a second time to receive the benefits of the next step in the node, which will then become the active step.
	 */
	canActivateNextStep: boolean;
	/**
	 * The stepIndex of the next step in the talent node, or -1 if this is the last step or if the next step to be chosen is random.
	 * This doesn't really matter anymore unless canActivateNextStep begins to be used again.
	 */
	nextStepIndex: number;
	/**
	 * If true, the next step to be chosen is random, and if you're allowed to activate the next step. (if canActivateNextStep = true)
	 */
	isNextStepRandom: boolean;
	/**
	 * The list of hash identifiers for Perks (DestinySandboxPerkDefinition) that are applied when this step is active. Perks provide a variety of benefits and modifications - examine DestinySandboxPerkDefinition to learn more.
	 */
	perkHashes: number[];
	/**
	 * When the Talent Grid's progression reaches this value, the circular "progress bar" that surrounds the talent node should be shown.
	 * This also indicates the lower bound of said progress bar, with the upper bound being the progress required to reach activationRequirement.gridLevel. (at some point I should precalculate the upper bound and put it in the definition to save people time)
	 */
	startProgressionBarAtProgress: number;
	/**
	 * When the step provides stat benefits on the item or character, this is the list of hash identifiers for stats (DestinyStatDefinition) that are provided.
	 */
	statHashes: number[];
	/**
	 * If this is true, the step affects the item's Quality in some way. See DestinyInventoryItemDefinition for more information about the meaning of Quality. I already made a joke about Zen and the Art of Motorcycle Maintenance elsewhere in the documentation, so I will avoid doing it again. Oops too late
	 */
	affectsQuality: boolean;
	/**
	 * In Destiny 1, the Armory's Perk Filtering was driven by a concept of TalentNodeStepGroups: categorizations of talent nodes based on their functionality. While the Armory isn't a BNet-facing thing for now, and the new Armory will need to account for Sockets rather than Talent Nodes, this categorization capability feels useful enough to still keep around.
	 */
	stepGroups: DestinyTalentNodeStepGroups;
	/**
	 * If true, this step can affect the level of the item. See DestinyInventoryItemDefintion for more information about item levels and their effect on stats.
	 */
	affectsLevel: boolean;
	/**
	 * If this step is activated, this will be a list of information used to replace socket items with new Plugs. See DestinyInventoryItemDefinition for more information about sockets and plugs.
	 */
	socketReplacements: DestinyNodeSocketReplaceResponse[];
}

/**
 * This is a bit of an odd duck. Apparently, if talent nodes steps have this data, the game will go through on step activation and alter the first Socket it finds on the item that has a type matching the given socket type, inserting the indicated plug item.
 */
export interface DestinyNodeSocketReplaceResponse {
	/**
	 * The hash identifier of the socket type to find amidst the item's sockets (the item to which this talent grid is attached). See DestinyInventoryItemDefinition.sockets.socketEntries to find the socket type of sockets on the item in question.
	 */
	socketTypeHash: number;
	/**
	 * The hash identifier of the plug item that will be inserted into the socket found.
	 */
	plugItemHash: number;
}

/**
 * All damage types that are possible in the game are defined here, along with localized info and icons as needed.
 */
export interface DestinyDamageTypeDefinition {
	/**
	 * The description of the damage type, icon etc...
	 */
	displayProperties: DestinyDisplayPropertiesDefinition;
	/**
	 * A variant of the icon that is transparent and colorless.
	 */
	transparentIconPath: string;
	/**
	 * If TRUE, the game shows this damage type's icon. Otherwise, it doesn't. Whether you show it or not is up to you.
	 */
	showIcon: boolean;
	/**
	 * We have an enumeration for damage types for quick reference. This is the current definition's damage type enum value.
	 */
	enumValue: DamageType;
	/**
	 * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
	 * When entities refer to each other in Destiny content, it is this hash that they are referring to.
	 */
	hash: number;
	/**
	 * The index of the entity as it was found in the investment tables.
	 */
	index: number;
	/**
	 * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
	 */
	redacted: boolean;
}

/**
 * These are definitions for in-game "Lore," meant to be narrative enhancements of the game experience.
 * DestinyInventoryItemDefinitions for interesting items point to these definitions, but nothing's stopping you from scraping all of these and doing something cool with them. If they end up having cool data.
 */
export interface DestinyLoreDefinition {
	displayProperties: DestinyDisplayPropertiesDefinition;
	subtitle: string;
	/**
	 * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
	 * When entities refer to each other in Destiny content, it is this hash that they are referring to.
	 */
	hash: number;
	/**
	 * The index of the entity as it was found in the investment tables.
	 */
	index: number;
	/**
	 * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
	 */
	redacted: boolean;
}

/**
 * The list of indexes into the Talent Grid's "nodes" property for nodes in this exclusive set. (See DestinyTalentNodeDefinition.nodeIndex)
 */
export interface DestinyTalentNodeExclusiveSetDefinition {
	/**
	 * The list of node indexes for the exclusive set. Historically, these were indexes. I would have liked to replace this with nodeHashes for consistency, but it's way too late for that. (9:09 PM, he's right!)
	 */
	nodeIndexes: number[];
}

/**
 * As of Destiny 2, nodes can exist as part of "Exclusive Groups". These differ from exclusive sets in that, within the group, many nodes can be activated. But the act of activating any node in the group will cause "opposing" nodes (nodes in groups that are not allowed to be activated at the same time as this group) to deactivate.
 */
export interface DestinyTalentExclusiveGroup {
	/**
	 * The identifier for this exclusive group. Only guaranteed unique within the talent grid, not globally.
	 */
	groupHash: number;
	/**
	 * If this group has an associated piece of lore to show next to it, this will be the identifier for that DestinyLoreDefinition.
	 */
	loreHash?: number;
	/**
	 * A quick reference of the talent nodes that are part of this group, by their Talent Node hashes. (See DestinyTalentNodeDefinition.nodeHash)
	 */
	nodeHashes: number[];
	/**
	 * A quick reference of Groups whose nodes will be deactivated if any node in this group is activated.
	 */
	opposingGroupHashes: number[];
	/**
	 * A quick reference of Nodes that will be deactivated if any node in this group is activated, by their Talent Node hashes. (See DestinyTalentNodeDefinition.nodeHash)
	 */
	opposingNodeHashes: number[];
}

/**
 * An artificial construct provided by Bungie.Net, where we attempt to group talent nodes by functionality.
 * This is a single set of references to Talent Nodes that share a common trait or purpose.
 */
export interface DestinyTalentNodeCategory {
	/**
	 * Mostly just for debug purposes, but if you find it useful you can have it. This is BNet's manually created identifier for this category.
	 */
	identifier: string;
	/**
	 * If true, we found the localized content in a related DestinyLoreDefinition instead of local BNet localization files. This is mostly for ease of my own future investigations.
	 */
	isLoreDriven: boolean;
	/**
	 * Will contain at least the "name", which will be the title of the category. We will likely not have description and an icon yet, but I'm going to keep my options open.
	 */
	displayProperties: DestinyDisplayPropertiesDefinition;
	/**
	 * The set of all hash identifiers for Talent Nodes (DestinyTalentNodeDefinition) in this Talent Grid that are part of this Category.
	 */
	nodeHashes: number[];
}

/**
 * An intrinsic perk on an item, and the requirements for it to be activated.
 */
export interface DestinyItemPerkEntryDefinition {
	/**
	 * If this perk is not active, this is the string to show for why it's not providing its benefits.
	 */
	requirementDisplayString: string;
	/**
	 * A hash identifier for the DestinySandboxPerkDefinition being provided on the item.
	 */
	perkHash: number;
}

export interface DestinyAnimationReference {
	animName: string;
	animIdentifier: string;
	path: string;
}

export interface HyperlinkReference {
	title: string;
	url: string;
}

/**
 * As you run into items that need to be classified for Milestone purposes in ways that we cannot infer via Babel or Bonbobo-sourced data, add a new classification here and use a string constant to represent it in the local item config file.
 * NOTE: This is not all of the item types available, and some of these are holdovers from Destiny 1 that may or may not still exist.
 */
export enum SpecialItemType {
	None = 0,
	SpecialCurrency = 1,
	Armor = 8,
	Weapon = 9,
	Engram = 23,
	Consumable = 24,
	ExchangeMaterial = 25,
	MissionReward = 27,
	Currency = 29,
}

/**
 * An enumeration that indicates the high-level "type" of the item, attempting to iron out the context specific differences for specific instances of an entity. For instance, though a weapon may be of various wepaon "Types", in DestinyItemType they are all classified as "Weapon". This allows for better filtering on a higher level of abstraction for the concept of types.
 *  This enum is provided for historical compatibility with Destiny 1, but an ideal alternative is to use DestinyItemCategoryDefinitions and the DestinyItemDefinition.itemCategories property instead. Item Categories allow for arbitrary hierarchies of specificity, and for items to belong to multiple categories across multiple hierarchies simultaneously. For this enum, we pick a single type as a "best guess" fit.
 *  NOTE: This is not all of the item types available, and some of these are holdovers from Destiny 1 that may or may not still exist.
 */
export enum DestinyItemType {
	None = 0,
	Currency = 1,
	Armor = 2,
	Weapon = 3,
	Message = 7,
	Engram = 8,
	Consumable = 9,
	ExchangeMaterial = 10,
	MissionReward = 11,
	QuestStep = 12,
	QuestStepComplete = 13,
	Emblem = 14,
	Quest = 15,
	Subclass = 16,
	ClanBanner = 17,
	Aura = 18,
	Mod = 19,
}

/**
 * This Enumeration further classifies items by more specific categorizations than DestinyItemType. The "Sub-Type" is where we classify and categorize items one step further in specificity: "Auto Rifle" instead of just "Weapon" for example, or "Vanguard Bounty" instead of merely "Bounty".
 * These sub-types are provided for historical compatibility with Destiny 1, but an ideal alternative is to use DestinyItemCategoryDefinitions and the DestinyItemDefinition.itemCategories property instead. Item Categories allow for arbitrary hierarchies of specificity, and for items to belong to multiple categories across multiple hierarchies simultaneously. For this enum, we pick a single type as a "best guess" fit.
 * NOTE: This is not all of the item types available, and some of these are holdovers from Destiny 1 that may or may not still exist.
 */
export enum DestinyItemSubType {
	None = 0,
	Crucible = 1,
	Vanguard = 2,
	Exotic = 5,
	AutoRifle = 6,
	Shotgun = 7,
	Machinegun = 8,
	HandCannon = 9,
	RocketLauncher = 10,
	FusionRifle = 11,
	SniperRifle = 12,
	PulseRifle = 13,
	ScoutRifle = 14,
	Crm = 16,
	Sidearm = 17,
	Sword = 18,
	Mask = 19,
	Shader = 20,
}

export enum DestinyClass {
	Titan = 0,
	Hunter = 1,
	Warlock = 2,
	Unknown = 3,
}

/**
 * In an attempt to categorize items by type, usage, and other interesting properties, we created DestinyItemCategoryDefinition: information about types that is assembled using a set of heuristics that examine the properties of an item such as what inventory bucket it's in, its item type name, and whether it has or is missing certain blocks of data.
 * This heuristic is imperfect, however. If you find an item miscategorized, let us know on the Bungie API forums!
 * We then populate all of the categories that we think an item belongs to in its DestinyInventoryItemDefinition.itemCategoryHashes property. You can use that to provide your own custom item filtering, sorting, aggregating... go nuts on it! And let us know if you see more categories that you wish would be added!
 */
export interface DestinyItemCategoryDefinition {
	displayProperties: DestinyDisplayPropertiesDefinition;
	/**
	 * If True, this category should be visible in UI. Sometimes we make categories that we don't think are interesting externally. It's up to you if you want to skip on showing them.
	 */
	visible: boolean;
	/**
	 * A shortened version of the title. The reason why we have this is because the Armory in German had titles that were too long to display in our UI, so these were localized abbreviated versions of those categories. The property still exists today, even though the Armory doesn't exist for D2... yet.
	 */
	shortTitle: string;
	/**
	 * The janky regular expression we used against the item type to try and discern whether the item belongs to this category.
	 */
	itemTypeRegex: string;
	/**
	 * If the item type matches this janky regex, it does *not* belong to this category.
	 */
	itemTypeRegexNot: string;
	/**
	 * If the item belongs to this bucket, it does belong to this category.
	 */
	originBucketIdentifier: string;
	/**
	 * If an item belongs to this category, it will also receive this item type. This is now how DestinyItemType is populated for items: it used to be an even jankier process, but that's a story that requires more alcohol.
	 */
	grantDestinyItemType: DestinyItemType;
	/**
	 * If an item belongs to this category, it will also receive this subtype enum value.
	 * I know what you're thinking - what if it belongs to multiple categories that provide sub-types?
	 * The last one processed wins, as is the case with all of these "grant" enums. Now you can see one reason why we moved away from these enums... but they're so convenient when they work, aren't they?
	 */
	grantDestinySubType: DestinyItemSubType;
	/**
	 * If an item belongs to this category, it will also get this class restriction enum value.
	 * See the other "grant"-prefixed properties on this definition for my color commentary.
	 */
	grantDestinyClass: DestinyClass;
	/**
	 * If this category is a "parent" category of other categories, those children will have their hashes listed in rendering order here, and can be looked up using these hashes against DestinyItemCategoryDefinition.
	 * In this way, you can build up a visual hierarchy of item categories. That's what we did, and you can do it too. I believe in you. Yes, you, Carl.
	 * (I hope someone named Carl reads this someday)
	 */
	groupedCategoryHashes: number[];
	/**
	 * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
	 * When entities refer to each other in Destiny content, it is this hash that they are referring to.
	 */
	hash: number;
	/**
	 * The index of the entity as it was found in the investment tables.
	 */
	index: number;
	/**
	 * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
	 */
	redacted: boolean;
}

export interface GroupUserBase {
	groupId: number;
	destinyUserInfo: UserInfoCard;
	bungieNetUserInfo: UserInfoCard;
	joinDate: string;
}

export interface GroupMember {
	memberType: RuntimeGroupMemberType;
	isOnline: boolean;
	groupId: number;
	destinyUserInfo: UserInfoCard;
	bungieNetUserInfo: UserInfoCard;
	joinDate: string;
}

export enum GroupAllianceStatus {
	Unallied = 0,
	Parent = 1,
	Child = 2,
}

export interface GroupPotentialMember {
	potentialStatus: GroupPotentialMemberStatus;
	groupId: number;
	destinyUserInfo: UserInfoCard;
	bungieNetUserInfo: UserInfoCard;
	joinDate: string;
}

export enum GroupPotentialMemberStatus {
	None = 0,
	Applicant = 1,
	Invitee = 2,
}

export interface TagResponse {
	tagText: string;
	ignoreStatus: IgnoreResponse;
}

export interface PollResponse {
	topicId: number;
	results: PollResult[];
	totalVotes: number;
}

export interface PollResult {
	answerText: string;
	answerSlot: number;
	lastVoteDate: string;
	votes: number;
	requestingUserVoted: boolean;
}

export interface ForumRecruitmentDetail {
	topicId: number;
	microphoneRequired: boolean;
	intensity: ForumRecruitmentIntensityLabel;
	tone: ForumRecruitmentToneLabel;
	approved: boolean;
	conversationId?: number;
	playerSlotsTotal: number;
	playerSlotsRemaining: number;
	Fireteam: GeneralUser[];
	kickedPlayerIds: number[];
}

export enum ForumRecruitmentIntensityLabel {
	None = 0,
	Casual = 1,
	Professional = 2,
}

export enum ForumRecruitmentToneLabel {
	None = 0,
	FamilyFriendly = 1,
	Rowdy = 2,
}

export enum ForumPostSortEnum {
	Default = 0,
	OldestFirst = 1,
}

export interface SaveMessageResult {
	conversationId: number;
	messageId: number;
}

export interface GroupTheme {
	name: string;
	folder: string;
	description: string;
}

/**
 * A small infocard of group information, usually used for when a list of groups are returned
 */
export interface GroupV2Card {
	groupId: number;
	name: string;
	groupType: GroupType;
	creationDate: string;
	about: string;
	motto: string;
	memberCount: number;
	locale: string;
	membershipOption: MembershipOption;
	capabilities: Capabilities;
	clanInfo: GroupV2ClanInfo;
	avatarPath: string;
	theme: string;
}

export interface SearchResultOfGroupV2Card {
	results: GroupV2Card[];
	totalResults: number;
	hasMore: boolean;
	query: PagedQuery;
	replacementContinuationToken: string;
	/**
	 * If useTotalResults is true, then totalResults represents an accurate count.
	 * If False, it does not, and may be estimated/only the size of the current page.
	 * Either way, you should probably always only trust hasMore.
	 * This is a long-held historical throwback to when we used to do paging with known total results. Those queries toasted our database, and we were left to hastily alter our endpoints and create backward- compatible shims, of which useTotalResults is one.
	 */
	useTotalResults: boolean;
}

export interface GroupSearchResponse {
	results: GroupV2Card[];
	totalResults: number;
	hasMore: boolean;
	query: PagedQuery;
	replacementContinuationToken: string;
	/**
	 * If useTotalResults is true, then totalResults represents an accurate count.
	 * If False, it does not, and may be estimated/only the size of the current page.
	 * Either way, you should probably always only trust hasMore.
	 * This is a long-held historical throwback to when we used to do paging with known total results. Those queries toasted our database, and we were left to hastily alter our endpoints and create backward- compatible shims, of which useTotalResults is one.
	 */
	useTotalResults: boolean;
}

export interface GroupQuery {
	name: string;
	groupType: GroupType;
	creationDate: GroupDateRange;
	sortBy: GroupSortBy;
	groupMemberCountFilter?: number;
	localeFilter: string;
	tagText: string;
	itemsPerPage: number;
	currentPage: number;
	requestContinuationToken: string;
}

export enum GroupDateRange {
	All = 0,
	PastDay = 1,
	PastWeek = 2,
	PastMonth = 3,
	PastYear = 4,
}

export enum GroupSortBy {
	Name = 0,
	Date = 1,
	Popularity = 2,
	Id = 3,
}

export enum GroupMemberCountFilter {
	All = 0,
	OneToTen = 1,
	ElevenToOneHundred = 2,
	GreaterThanOneHundred = 3,
}

export interface GroupOptionalConversation {
	groupId: number;
	conversationId: number;
	chatEnabled: boolean;
	chatName: string;
	chatSecurity: ChatSecuritySetting;
}

export interface GroupCreationResponse {
	groupId: number;
}

export interface GroupAction {
	/**
	 * Type of group, either Bungie.net hosted group, or a game services hosted clan.
	 */
	groupType: GroupType;
	name: string;
	about: string;
	motto: string;
	theme: string;
	avatarImageIndex: number;
	tags: string;
	isPublic: boolean;
	membershipOption: MembershipOption;
	isPublicTopicAdminOnly: boolean;
	isDefaultPostPublic: boolean;
	allowChat: boolean;
	isDefaultPostAlliance: boolean;
	chatSecurity: ChatSecuritySetting;
	callsign: string;
	locale: string;
	homepage: GroupHomepage;
	/**
	 * When operation needs a platform specific account ID for the present user, use this property. In particular, groupType of Clan requires this value to be set.
	 */
	platformMembershipType: BungieMembershipType;
}

export interface GroupEditAction {
	name: string;
	about: string;
	motto: string;
	theme: string;
	avatarImageIndex?: number;
	tags: string;
	isPublic?: boolean;
	membershipOption?: number;
	isPublicTopicAdminOnly?: boolean;
	allowChat?: boolean;
	chatSecurity?: number;
	callsign: string;
	locale: string;
	homepage?: number;
	enableInvitationMessagingForAdmins?: boolean;
	defaultPublicity?: number;
}

export interface GroupOptionsEditAction {
	/**
	 * Minimum Member Level allowed to invite new members to group
	 * Always Allowed: Founder, Acting Founder
	 * True means admins have this power, false means they don't
	 * Default is false for clans, true for groups.
	 */
	InvitePermissionOverride?: boolean;
	/**
	 * Minimum Member Level allowed to update group culture
	 * Always Allowed: Founder, Acting Founder
	 * True means admins have this power, false means they don't
	 * Default is false for clans, true for groups.
	 */
	UpdateCulturePermissionOverride?: boolean;
	/**
	 * Minimum Member Level allowed to host guided games
	 * Always Allowed: Founder, Acting Founder, Admin
	 * Allowed Overrides: None, Member, Beginner
	 * Default is Member for clans, None for groups, although this means nothing for groups.
	 */
	HostGuidedGamePermissionOverride?: number;
	/**
	 * Minimum Member Level allowed to update banner
	 * Always Allowed: Founder, Acting Founder
	 * True means admins have this power, false means they don't
	 * Default is false for clans, true for groups.
	 */
	UpdateBannerPermissionOverride?: boolean;
	/**
	 * Level to join a member at when accepting an invite, application, or joining an open clan
	 * Default is Beginner.
	 */
	JoinLevel?: number;
}

export interface GroupOptionalConversationAddRequest {
	chatName: string;
	chatSecurity: ChatSecuritySetting;
}

export interface GroupOptionalConversationEditRequest {
	chatEnabled?: boolean;
	chatName: string;
	chatSecurity?: number;
}

export interface SearchResultOfGroupMember {
	results: GroupMember[];
	totalResults: number;
	hasMore: boolean;
	query: PagedQuery;
	replacementContinuationToken: string;
	/**
	 * If useTotalResults is true, then totalResults represents an accurate count.
	 * If False, it does not, and may be estimated/only the size of the current page.
	 * Either way, you should probably always only trust hasMore.
	 * This is a long-held historical throwback to when we used to do paging with known total results. Those queries toasted our database, and we were left to hastily alter our endpoints and create backward- compatible shims, of which useTotalResults is one.
	 */
	useTotalResults: boolean;
}

export interface GroupMemberLeaveResult {
	group: GroupV2;
	groupDeleted: boolean;
}

export interface GroupBanRequest {
	comment: string;
	length: IgnoreLength;
}

export enum IgnoreLength {
	None = 0,
	Week = 1,
	TwoWeeks = 2,
	ThreeWeeks = 3,
	Month = 4,
	ThreeMonths = 5,
	SixMonths = 6,
	Year = 7,
	Forever = 8,
	ThreeMinutes = 9,
	Hour = 10,
	ThirtyDays = 11,
}

export interface GroupBan {
	groupId: number;
	lastModifiedBy: UserInfoCard;
	createdBy: UserInfoCard;
	dateBanned: string;
	dateExpires: string;
	comment: string;
	bungieNetUserInfo: UserInfoCard;
	destinyUserInfo: UserInfoCard;
}

export interface SearchResultOfGroupBan {
	results: GroupBan[];
	totalResults: number;
	hasMore: boolean;
	query: PagedQuery;
	replacementContinuationToken: string;
	/**
	 * If useTotalResults is true, then totalResults represents an accurate count.
	 * If False, it does not, and may be estimated/only the size of the current page.
	 * Either way, you should probably always only trust hasMore.
	 * This is a long-held historical throwback to when we used to do paging with known total results. Those queries toasted our database, and we were left to hastily alter our endpoints and create backward- compatible shims, of which useTotalResults is one.
	 */
	useTotalResults: boolean;
}

export interface GroupApplicationResponse {
	resolution: GroupApplicationResolveState;
}

export enum GroupApplicationResolveState {
	Unresolved = 0,
	Accepted = 1,
	Denied = 2,
	Rescinded = 3,
}

export interface GroupApplicationRequest {
	message: string;
}

export interface GroupMemberApplication {
	groupId: number;
	creationDate: string;
	resolveState: GroupApplicationResolveState;
	resolveDate?: string;
	resolvedByMembershipId?: number;
	requestMessage: string;
	resolveMessage: string;
	destinyUserInfo: UserInfoCard;
	bungieNetUserInfo: UserInfoCard;
}

export interface SearchResultOfGroupMemberApplication {
	results: GroupMemberApplication[];
	totalResults: number;
	hasMore: boolean;
	query: PagedQuery;
	replacementContinuationToken: string;
	/**
	 * If useTotalResults is true, then totalResults represents an accurate count.
	 * If False, it does not, and may be estimated/only the size of the current page.
	 * Either way, you should probably always only trust hasMore.
	 * This is a long-held historical throwback to when we used to do paging with known total results. Those queries toasted our database, and we were left to hastily alter our endpoints and create backward- compatible shims, of which useTotalResults is one.
	 */
	useTotalResults: boolean;
}

export interface EntityActionResult {
	entityId: number;
	result: PlatformErrorCodes;
}

export enum PlatformErrorCodes {
	None = 0,
	Success = 1,
	TransportException = 2,
	UnhandledException = 3,
	NotImplemented = 4,
	SystemDisabled = 5,
	FailedToLoadAvailableLocalesConfiguration = 6,
	ParameterParseFailure = 7,
	ParameterInvalidRange = 8,
	BadRequest = 9,
	AuthenticationInvalid = 10,
	DataNotFound = 11,
	InsufficientPrivileges = 12,
	Duplicate = 13,
	UnknownSqlResult = 14,
	ValidationError = 15,
	ValidationMissingFieldError = 16,
	ValidationInvalidInputError = 17,
	InvalidParameters = 18,
	ParameterNotFound = 19,
	UnhandledHttpException = 20,
	NotFound = 21,
	WebAuthModuleAsyncFailed = 22,
	InvalidReturnValue = 23,
	UserBanned = 24,
	InvalidPostBody = 25,
	MissingPostBody = 26,
	ExternalServiceTimeout = 27,
	ValidationLengthError = 28,
	ValidationRangeError = 29,
	JsonDeserializationError = 30,
	ThrottleLimitExceeded = 31,
	ValidationTagError = 32,
	ValidationProfanityError = 33,
	ValidationUrlFormatError = 34,
	ThrottleLimitExceededMinutes = 35,
	ThrottleLimitExceededMomentarily = 36,
	ThrottleLimitExceededSeconds = 37,
	ExternalServiceUnknown = 38,
	ValidationWordLengthError = 39,
	ValidationInvisibleUnicode = 40,
	ValidationBadNames = 41,
	ExternalServiceFailed = 42,
	ServiceRetired = 43,
	UnknownSqlException = 44,
	UnsupportedLocale = 45,
	InvalidPageNumber = 46,
	MaximumPageSizeExceeded = 47,
	ServiceUnsupported = 48,
	ValidationMaximumUnicodeCombiningCharacters = 49,
	ValidationMaximumSequentialCarriageReturns = 50,
	PerEndpointRequestThrottleExceeded = 51,
	AuthContextCacheAssertion = 52,
	ObsoleteCredentialType = 89,
	UnableToUnPairMobileApp = 90,
	UnableToPairMobileApp = 91,
	CannotUseMobileAuthWithNonMobileProvider = 92,
	MissingDeviceCookie = 93,
	FacebookTokenExpired = 94,
	AuthTicketRequired = 95,
	CookieContextRequired = 96,
	UnknownAuthenticationError = 97,
	BungieNetAccountCreationRequired = 98,
	WebAuthRequired = 99,
	ContentUnknownSqlResult = 100,
	ContentNeedUniquePath = 101,
	ContentSqlException = 102,
	ContentNotFound = 103,
	ContentSuccessWithTagAddFail = 104,
	ContentSearchMissingParameters = 105,
	ContentInvalidId = 106,
	ContentPhysicalFileDeletionError = 107,
	ContentPhysicalFileCreationError = 108,
	ContentPerforceSubmissionError = 109,
	ContentPerforceInitializationError = 110,
	ContentDeploymentPackageNotReadyError = 111,
	ContentUploadFailed = 112,
	ContentTooManyResults = 113,
	ContentInvalidState = 115,
	ContentNavigationParentNotFound = 116,
	ContentNavigationParentUpdateError = 117,
	DeploymentPackageNotEditable = 118,
	ContentValidationError = 119,
	ContentPropertiesValidationError = 120,
	ContentTypeNotFound = 121,
	DeploymentPackageNotFound = 122,
	ContentSearchInvalidParameters = 123,
	ContentItemPropertyAggregationError = 124,
	DeploymentPackageFileNotFound = 125,
	ContentPerforceFileHistoryNotFound = 126,
	ContentAssetZipCreationFailure = 127,
	ContentAssetZipCreationBusy = 128,
	ContentProjectNotFound = 129,
	ContentFolderNotFound = 130,
	ContentPackagesInconsistent = 131,
	ContentPackagesInvalidState = 132,
	ContentPackagesInconsistentType = 133,
	ContentCannotDeletePackage = 134,
	ContentLockedForChanges = 135,
	ContentFileUploadFailed = 136,
	ContentNotReviewed = 137,
	ContentPermissionDenied = 138,
	ContentInvalidExternalUrl = 139,
	ContentExternalFileCannotBeImportedLocally = 140,
	ContentTagSaveFailure = 141,
	ContentPerforceUnmatchedFileError = 142,
	ContentPerforceChangelistResultNotFound = 143,
	ContentPerforceChangelistFileItemsNotFound = 144,
	ContentPerforceInvalidRevisionError = 145,
	ContentUnloadedSaveResult = 146,
	ContentPropertyInvalidNumber = 147,
	ContentPropertyInvalidUrl = 148,
	ContentPropertyInvalidDate = 149,
	ContentPropertyInvalidSet = 150,
	ContentPropertyCannotDeserialize = 151,
	ContentRegexValidationFailOnProperty = 152,
	ContentMaxLengthFailOnProperty = 153,
	ContentPropertyUnexpectedDeserializationError = 154,
	ContentPropertyRequired = 155,
	ContentCannotCreateFile = 156,
	ContentInvalidMigrationFile = 157,
	ContentMigrationAlteringProcessedItem = 158,
	ContentPropertyDefinitionNotFound = 159,
	ContentReviewDataChanged = 160,
	ContentRollbackRevisionNotInPackage = 161,
	ContentItemNotBasedOnLatestRevision = 162,
	ContentUnauthorized = 163,
	ContentCannotCreateDeploymentPackage = 164,
	ContentUserNotFound = 165,
	ContentLocalePermissionDenied = 166,
	ContentInvalidLinkToInternalEnvironment = 167,
	ContentInvalidBlacklistedContent = 168,
	ContentMacroMalformedNoContentId = 169,
	ContentMacroMalformedNoTemplateType = 170,
	ContentIllegalBNetMembershipId = 171,
	ContentLocaleDidNotMatchExpected = 172,
	ContentBabelCallFailed = 173,
	ContentEnglishPostLiveForbidden = 174,
	ContentLocaleEditPermissionDenied = 175,
	UserNonUniqueName = 200,
	UserManualLinkingStepRequired = 201,
	UserCreateUnknownSqlResult = 202,
	UserCreateUnknownSqlException = 203,
	UserMalformedMembershipId = 204,
	UserCannotFindRequestedUser = 205,
	UserCannotLoadAccountCredentialLinkInfo = 206,
	UserInvalidMobileAppType = 207,
	UserMissingMobilePairingInfo = 208,
	UserCannotGenerateMobileKeyWhileUsingMobileCredential = 209,
	UserGenerateMobileKeyExistingSlotCollision = 210,
	UserDisplayNameMissingOrInvalid = 211,
	UserCannotLoadAccountProfileData = 212,
	UserCannotSaveUserProfileData = 213,
	UserEmailMissingOrInvalid = 214,
	UserTermsOfUseRequired = 215,
	UserCannotCreateNewAccountWhileLoggedIn = 216,
	UserCannotResolveCentralAccount = 217,
	UserInvalidAvatar = 218,
	UserMissingCreatedUserResult = 219,
	UserCannotChangeUniqueNameYet = 220,
	UserCannotChangeDisplayNameYet = 221,
	UserCannotChangeEmail = 222,
	UserUniqueNameMustStartWithLetter = 223,
	UserNoLinkedAccountsSupportFriendListings = 224,
	UserAcknowledgmentTableFull = 225,
	UserCreationDestinyMembershipRequired = 226,
	UserFriendsTokenNeedsRefresh = 227,
	MessagingUnknownError = 300,
	MessagingSelfError = 301,
	MessagingSendThrottle = 302,
	MessagingNoBody = 303,
	MessagingTooManyUsers = 304,
	MessagingCanNotLeaveConversation = 305,
	MessagingUnableToSend = 306,
	MessagingDeletedUserForbidden = 307,
	MessagingCannotDeleteExternalConversation = 308,
	MessagingGroupChatDisabled = 309,
	MessagingMustIncludeSelfInPrivateMessage = 310,
	MessagingSenderIsBanned = 311,
	MessagingGroupOptionalChatExceededMaximum = 312,
	AddSurveyAnswersUnknownSqlException = 400,
	ForumBodyCannotBeEmpty = 500,
	ForumSubjectCannotBeEmptyOnTopicPost = 501,
	ForumCannotLocateParentPost = 502,
	ForumThreadLockedForReplies = 503,
	ForumUnknownSqlResultDuringCreatePost = 504,
	ForumUnknownTagCreationError = 505,
	ForumUnknownSqlResultDuringTagItem = 506,
	ForumUnknownExceptionCreatePost = 507,
	ForumQuestionMustBeTopicPost = 508,
	ForumExceptionDuringTagSearch = 509,
	ForumExceptionDuringTopicRetrieval = 510,
	ForumAliasedTagError = 511,
	ForumCannotLocateThread = 512,
	ForumUnknownExceptionEditPost = 513,
	ForumCannotLocatePost = 514,
	ForumUnknownExceptionGetOrCreateTags = 515,
	ForumEditPermissionDenied = 516,
	ForumUnknownSqlResultDuringTagIdRetrieval = 517,
	ForumCannotGetRating = 518,
	ForumUnknownExceptionGetRating = 519,
	ForumRatingsAccessError = 520,
	ForumRelatedPostAccessError = 521,
	ForumLatestReplyAccessError = 522,
	ForumUserStatusAccessError = 523,
	ForumAuthorAccessError = 524,
	ForumGroupAccessError = 525,
	ForumUrlExpectedButMissing = 526,
	ForumRepliesCannotBeEmpty = 527,
	ForumRepliesCannotBeInDifferentGroups = 528,
	ForumSubTopicCannotBeCreatedAtThisThreadLevel = 529,
	ForumCannotCreateContentTopic = 530,
	ForumTopicDoesNotExist = 531,
	ForumContentCommentsNotAllowed = 532,
	ForumUnknownSqlResultDuringEditPost = 533,
	ForumUnknownSqlResultDuringGetPost = 534,
	ForumPostValidationBadUrl = 535,
	ForumBodyTooLong = 536,
	ForumSubjectTooLong = 537,
	ForumAnnouncementNotAllowed = 538,
	ForumCannotShareOwnPost = 539,
	ForumEditNoOp = 540,
	ForumUnknownDatabaseErrorDuringGetPost = 541,
	ForumExceeedMaximumRowLimit = 542,
	ForumCannotSharePrivatePost = 543,
	ForumCannotCrossPostBetweenGroups = 544,
	ForumIncompatibleCategories = 555,
	ForumCannotUseTheseCategoriesOnNonTopicPost = 556,
	ForumCanOnlyDeleteTopics = 557,
	ForumDeleteSqlException = 558,
	ForumDeleteSqlUnknownResult = 559,
	ForumTooManyTags = 560,
	ForumCanOnlyRateTopics = 561,
	ForumBannedPostsCannotBeEdited = 562,
	ForumThreadRootIsBanned = 563,
	ForumCannotUseOfficialTagCategoryAsTag = 564,
	ForumAnswerCannotBeMadeOnCreatePost = 565,
	ForumAnswerCannotBeMadeOnEditPost = 566,
	ForumAnswerPostIdIsNotADirectReplyOfQuestion = 567,
	ForumAnswerTopicIdIsNotAQuestion = 568,
	ForumUnknownExceptionDuringMarkAnswer = 569,
	ForumUnknownSqlResultDuringMarkAnswer = 570,
	ForumCannotRateYourOwnPosts = 571,
	ForumPollsMustBeTheFirstPostInTopic = 572,
	ForumInvalidPollInput = 573,
	ForumGroupAdminEditNonMember = 574,
	ForumCannotEditModeratorEditedPost = 575,
	ForumRequiresDestinyMembership = 576,
	ForumUnexpectedError = 577,
	ForumAgeLock = 578,
	ForumMaxPages = 579,
	ForumMaxPagesOldestFirst = 580,
	ForumCannotApplyForumIdWithoutTags = 581,
	ForumCannotApplyForumIdToNonTopics = 582,
	ForumCannotDownvoteCommunityCreations = 583,
	ForumTopicsMustHaveOfficialCategory = 584,
	ForumRecruitmentTopicMalformed = 585,
	ForumRecruitmentTopicNotFound = 586,
	ForumRecruitmentTopicNoSlotsRemaining = 587,
	ForumRecruitmentTopicKickBan = 588,
	ForumRecruitmentTopicRequirementsNotMet = 589,
	ForumRecruitmentTopicNoPlayers = 590,
	ForumRecruitmentApproveFailMessageBan = 591,
	ForumRecruitmentGlobalBan = 592,
	ForumUserBannedFromThisTopic = 593,
	ForumRecruitmentFireteamMembersOnly = 594,
	GroupMembershipApplicationAlreadyResolved = 601,
	GroupMembershipAlreadyApplied = 602,
	GroupMembershipInsufficientPrivileges = 603,
	GroupIdNotReturnedFromCreation = 604,
	GroupSearchInvalidParameters = 605,
	GroupMembershipPendingApplicationNotFound = 606,
	GroupInvalidId = 607,
	GroupInvalidMembershipId = 608,
	GroupInvalidMembershipType = 609,
	GroupMissingTags = 610,
	GroupMembershipNotFound = 611,
	GroupInvalidRating = 612,
	GroupUserFollowingAccessError = 613,
	GroupUserMembershipAccessError = 614,
	GroupCreatorAccessError = 615,
	GroupAdminAccessError = 616,
	GroupPrivatePostNotViewable = 617,
	GroupMembershipNotLoggedIn = 618,
	GroupNotDeleted = 619,
	GroupUnknownErrorUndeletingGroup = 620,
	GroupDeleted = 621,
	GroupNotFound = 622,
	GroupMemberBanned = 623,
	GroupMembershipClosed = 624,
	GroupPrivatePostOverrideError = 625,
	GroupNameTaken = 626,
	GroupDeletionGracePeriodExpired = 627,
	GroupCannotCheckBanStatus = 628,
	GroupMaximumMembershipCountReached = 629,
	NoDestinyAccountForClanPlatform = 630,
	AlreadyRequestingMembershipForClanPlatform = 631,
	AlreadyClanMemberOnPlatform = 632,
	GroupJoinedCannotSetClanName = 633,
	GroupLeftCannotClearClanName = 634,
	GroupRelationshipRequestPending = 635,
	GroupRelationshipRequestBlocked = 636,
	GroupRelationshipRequestNotFound = 637,
	GroupRelationshipBlockNotFound = 638,
	GroupRelationshipNotFound = 639,
	GroupAlreadyAllied = 641,
	GroupAlreadyMember = 642,
	GroupRelationshipAlreadyExists = 643,
	InvalidGroupTypesForRelationshipRequest = 644,
	GroupAtMaximumAlliances = 646,
	GroupCannotSetClanOnlySettings = 647,
	ClanCannotSetTwoDefaultPostTypes = 648,
	GroupMemberInvalidMemberType = 649,
	GroupInvalidPlatformType = 650,
	GroupMemberInvalidSort = 651,
	GroupInvalidResolveState = 652,
	ClanAlreadyEnabledForPlatform = 653,
	ClanNotEnabledForPlatform = 654,
	ClanEnabledButCouldNotJoinNoAccount = 655,
	ClanEnabledButCouldNotJoinAlreadyMember = 656,
	ClanCannotJoinNoCredential = 657,
	NoClanMembershipForPlatform = 658,
	GroupToGroupFollowLimitReached = 659,
	ChildGroupAlreadyInAlliance = 660,
	OwnerGroupAlreadyInAlliance = 661,
	AllianceOwnerCannotJoinAlliance = 662,
	GroupNotInAlliance = 663,
	ChildGroupCannotInviteToAlliance = 664,
	GroupToGroupAlreadyFollowed = 665,
	GroupToGroupNotFollowing = 666,
	ClanMaximumMembershipReached = 667,
	ClanNameNotValid = 668,
	ClanNameNotValidError = 669,
	AllianceOwnerNotDefined = 670,
	AllianceChildNotDefined = 671,
	ClanCultureIllegalCharacters = 672,
	ClanTagIllegalCharacters = 673,
	ClanRequiresInvitation = 674,
	ClanMembershipClosed = 675,
	ClanInviteAlreadyMember = 676,
	GroupInviteAlreadyMember = 677,
	GroupJoinApprovalRequired = 678,
	ClanTagRequired = 679,
	GroupNameCannotStartOrEndWithWhiteSpace = 680,
	ClanCallsignCannotStartOrEndWithWhiteSpace = 681,
	ClanMigrationFailed = 682,
	ClanNotEnabledAlreadyMemberOfAnotherClan = 683,
	GroupModerationNotPermittedOnNonMembers = 684,
	ClanCreationInWorldServerFailed = 685,
	ClanNotFound = 686,
	ClanMembershipLevelDoesNotPermitThatAction = 687,
	ClanMemberNotFound = 688,
	ClanMissingMembershipApprovers = 689,
	ClanInWrongStateForRequestedAction = 690,
	ClanNameAlreadyUsed = 691,
	ClanTooFewMembers = 692,
	ClanInfoCannotBeWhitespace = 693,
	GroupCultureThrottle = 694,
	ClanTargetDisallowsInvites = 695,
	ClanInvalidOperation = 696,
	ClanFounderCannotLeaveWithoutAbdication = 697,
	ClanNameReserved = 698,
	ClanApplicantInClanSoNowInvited = 699,
	ActivitiesUnknownException = 701,
	ActivitiesParameterNull = 702,
	ActivityCountsDiabled = 703,
	ActivitySearchInvalidParameters = 704,
	ActivityPermissionDenied = 705,
	ShareAlreadyShared = 706,
	ActivityLoggingDisabled = 707,
	ItemAlreadyFollowed = 801,
	ItemNotFollowed = 802,
	CannotFollowSelf = 803,
	GroupFollowLimitExceeded = 804,
	TagFollowLimitExceeded = 805,
	UserFollowLimitExceeded = 806,
	FollowUnsupportedEntityType = 807,
	NoValidTagsInList = 900,
	BelowMinimumSuggestionLength = 901,
	CannotGetSuggestionsOnMultipleTagsSimultaneously = 902,
	NotAValidPartialTag = 903,
	TagSuggestionsUnknownSqlResult = 904,
	TagsUnableToLoadPopularTagsFromDatabase = 905,
	TagInvalid = 906,
	TagNotFound = 907,
	SingleTagExpected = 908,
	TagsExceededMaximumPerItem = 909,
	IgnoreInvalidParameters = 1000,
	IgnoreSqlException = 1001,
	IgnoreErrorRetrievingGroupPermissions = 1002,
	IgnoreErrorInsufficientPermission = 1003,
	IgnoreErrorRetrievingItem = 1004,
	IgnoreCannotIgnoreSelf = 1005,
	IgnoreIllegalType = 1006,
	IgnoreNotFound = 1007,
	IgnoreUserGloballyIgnored = 1008,
	IgnoreUserIgnored = 1009,
	NotificationSettingInvalid = 1100,
	PsnApiExpiredAccessToken = 1204,
	PSNExForbidden = 1205,
	PSNExSystemDisabled = 1218,
	PsnApiErrorCodeUnknown = 1223,
	PsnApiErrorWebException = 1224,
	PsnApiBadRequest = 1225,
	PsnApiAccessTokenRequired = 1226,
	PsnApiInvalidAccessToken = 1227,
	PsnApiBannedUser = 1229,
	PsnApiAccountUpgradeRequired = 1230,
	PsnApiServiceTemporarilyUnavailable = 1231,
	PsnApiServerBusy = 1232,
	PsnApiUnderMaintenance = 1233,
	PsnApiProfileUserNotFound = 1234,
	PsnApiProfilePrivacyRestriction = 1235,
	PsnApiProfileUnderMaintenance = 1236,
	PsnApiAccountAttributeMissing = 1237,
	XblExSystemDisabled = 1300,
	XblExUnknownError = 1301,
	XblApiErrorWebException = 1302,
	XblStsTokenInvalid = 1303,
	XblStsMissingToken = 1304,
	XblStsExpiredToken = 1305,
	XblAccessToTheSandboxDenied = 1306,
	XblMsaResponseMissing = 1307,
	XblMsaAccessTokenExpired = 1308,
	XblMsaInvalidRequest = 1309,
	XblMsaFriendsRequireSignIn = 1310,
	XblUserActionRequired = 1311,
	XblParentalControls = 1312,
	XblDeveloperAccount = 1313,
	XblUserTokenExpired = 1314,
	XblUserTokenInvalid = 1315,
	XblOffline = 1316,
	XblUnknownErrorCode = 1317,
	XblMsaInvalidGrant = 1318,
	ReportNotYetResolved = 1400,
	ReportOverturnDoesNotChangeDecision = 1401,
	ReportNotFound = 1402,
	ReportAlreadyReported = 1403,
	ReportInvalidResolution = 1404,
	ReportNotAssignedToYou = 1405,
	LegacyGameStatsSystemDisabled = 1500,
	LegacyGameStatsUnknownError = 1501,
	LegacyGameStatsMalformedSneakerNetCode = 1502,
	DestinyAccountAcquisitionFailure = 1600,
	DestinyAccountNotFound = 1601,
	DestinyBuildStatsDatabaseError = 1602,
	DestinyCharacterStatsDatabaseError = 1603,
	DestinyPvPStatsDatabaseError = 1604,
	DestinyPvEStatsDatabaseError = 1605,
	DestinyGrimoireStatsDatabaseError = 1606,
	DestinyStatsParameterMembershipTypeParseError = 1607,
	DestinyStatsParameterMembershipIdParseError = 1608,
	DestinyStatsParameterRangeParseError = 1609,
	DestinyStringItemHashNotFound = 1610,
	DestinyStringSetNotFound = 1611,
	DestinyContentLookupNotFoundForKey = 1612,
	DestinyContentItemNotFound = 1613,
	DestinyContentSectionNotFound = 1614,
	DestinyContentPropertyNotFound = 1615,
	DestinyContentConfigNotFound = 1616,
	DestinyContentPropertyBucketValueNotFound = 1617,
	DestinyUnexpectedError = 1618,
	DestinyInvalidAction = 1619,
	DestinyCharacterNotFound = 1620,
	DestinyInvalidFlag = 1621,
	DestinyInvalidRequest = 1622,
	DestinyItemNotFound = 1623,
	DestinyInvalidCustomizationChoices = 1624,
	DestinyVendorItemNotFound = 1625,
	DestinyInternalError = 1626,
	DestinyVendorNotFound = 1627,
	DestinyRecentActivitiesDatabaseError = 1628,
	DestinyItemBucketNotFound = 1629,
	DestinyInvalidMembershipType = 1630,
	DestinyVersionIncompatibility = 1631,
	DestinyItemAlreadyInInventory = 1632,
	DestinyBucketNotFound = 1633,
	DestinyCharacterNotInTower = 1634,
	DestinyCharacterNotLoggedIn = 1635,
	DestinyDefinitionsNotLoaded = 1636,
	DestinyInventoryFull = 1637,
	DestinyItemFailedLevelCheck = 1638,
	DestinyItemFailedUnlockCheck = 1639,
	DestinyItemUnequippable = 1640,
	DestinyItemUniqueEquipRestricted = 1641,
	DestinyNoRoomInDestination = 1642,
	DestinyServiceFailure = 1643,
	DestinyServiceRetired = 1644,
	DestinyTransferFailed = 1645,
	DestinyTransferNotFoundForSourceBucket = 1646,
	DestinyUnexpectedResultInVendorTransferCheck = 1647,
	DestinyUniquenessViolation = 1648,
	DestinyErrorDeserializationFailure = 1649,
	DestinyValidAccountTicketRequired = 1650,
	DestinyShardRelayClientTimeout = 1651,
	DestinyShardRelayProxyTimeout = 1652,
	DestinyPGCRNotFound = 1653,
	DestinyAccountMustBeOffline = 1654,
	DestinyCanOnlyEquipInGame = 1655,
	DestinyCannotPerformActionOnEquippedItem = 1656,
	DestinyQuestAlreadyCompleted = 1657,
	DestinyQuestAlreadyTracked = 1658,
	DestinyTrackableQuestsFull = 1659,
	DestinyItemNotTransferrable = 1660,
	DestinyVendorPurchaseNotAllowed = 1661,
	DestinyContentVersionMismatch = 1662,
	DestinyItemActionForbidden = 1663,
	DestinyRefundInvalid = 1664,
	DestinyPrivacyRestriction = 1665,
	DestinyActionInsufficientPrivileges = 1666,
	DestinyInvalidClaimException = 1667,
	DestinyLegacyPlatformRestricted = 1668,
	DestinyLegacyPlatformInUse = 1669,
	DestinyLegacyPlatformInaccessible = 1670,
	DestinyCannotPerformActionAtThisLocation = 1671,
	DestinyThrottledByGameServer = 1672,
	FbInvalidRequest = 1800,
	FbRedirectMismatch = 1801,
	FbAccessDenied = 1802,
	FbUnsupportedResponseType = 1803,
	FbInvalidScope = 1804,
	FbUnsupportedGrantType = 1805,
	FbInvalidGrant = 1806,
	InvitationExpired = 1900,
	InvitationUnknownType = 1901,
	InvitationInvalidResponseStatus = 1902,
	InvitationInvalidType = 1903,
	InvitationAlreadyPending = 1904,
	InvitationInsufficientPermission = 1905,
	InvitationInvalidCode = 1906,
	InvitationInvalidTargetState = 1907,
	InvitationCannotBeReactivated = 1908,
	InvitationNoRecipients = 1910,
	InvitationGroupCannotSendToSelf = 1911,
	InvitationTooManyRecipients = 1912,
	InvitationInvalid = 1913,
	InvitationNotFound = 1914,
	TokenInvalid = 2000,
	TokenBadFormat = 2001,
	TokenAlreadyClaimed = 2002,
	TokenAlreadyClaimedSelf = 2003,
	TokenThrottling = 2004,
	TokenUnknownRedemptionFailure = 2005,
	TokenPurchaseClaimFailedAfterTokenClaimed = 2006,
	TokenUserAlreadyOwnsOffer = 2007,
	TokenInvalidOfferKey = 2008,
	TokenEmailNotValidated = 2009,
	TokenProvisioningBadVendorOrOffer = 2010,
	TokenPurchaseHistoryUnknownError = 2011,
	TokenThrottleStateUnknownError = 2012,
	TokenUserAgeNotVerified = 2013,
	TokenExceededOfferMaximum = 2014,
	TokenNoAvailableUnlocks = 2015,
	TokenMarketplaceInvalidPlatform = 2016,
	TokenNoMarketplaceCodesFound = 2017,
	TokenOfferNotAvailableForRedemption = 2018,
	TokenUnlockPartialFailure = 2019,
	TokenMarketplaceInvalidRegion = 2020,
	TokenOfferExpired = 2021,
	RAFExceededMaximumReferrals = 2022,
	RAFDuplicateBond = 2023,
	RAFNoValidVeteranDestinyMembershipsFound = 2024,
	RAFNotAValidVeteranUser = 2025,
	RAFCodeAlreadyClaimedOrNotFound = 2026,
	RAFMismatchedDestinyMembershipType = 2027,
	RAFUnableToAccessPurchaseHistory = 2028,
	RAFUnableToCreateBond = 2029,
	RAFUnableToFindBond = 2030,
	RAFUnableToRemoveBond = 2031,
	RAFCannotBondToSelf = 2032,
	RAFInvalidPlatform = 2033,
	RAFGenerateThrottled = 2034,
	RAFUnableToCreateBondVersionMismatch = 2035,
	RAFUnableToRemoveBondVersionMismatch = 2036,
	RAFRedeemThrottled = 2037,
	NoAvailableDiscountCode = 2038,
	DiscountAlreadyClaimed = 2039,
	DiscountClaimFailure = 2040,
	DiscountConfigurationFailure = 2041,
	DiscountGenerationFailure = 2042,
	DiscountAlreadyExists = 2043,
	TokenRequiresCredentialXuid = 2044,
	TokenRequiresCredentialPsnid = 2045,
	OfferRequired = 2046,
	ApiExceededMaxKeys = 2100,
	ApiInvalidOrExpiredKey = 2101,
	ApiKeyMissingFromRequest = 2102,
	ApplicationDisabled = 2103,
	ApplicationExceededMax = 2104,
	ApplicationDisallowedByScope = 2105,
	AuthorizationCodeInvalid = 2106,
	OriginHeaderDoesNotMatchKey = 2107,
	AccessNotPermittedByApplicationScope = 2108,
	ApplicationNameIsTaken = 2109,
	RefreshTokenNotYetValid = 2110,
	AccessTokenHasExpired = 2111,
	ApplicationTokenFormatNotValid = 2112,
	ApplicationNotConfiguredForBungieAuth = 2113,
	ApplicationNotConfiguredForOAuth = 2114,
	OAuthAccessTokenExpired = 2115,
	PartnershipInvalidType = 2200,
	PartnershipValidationError = 2201,
	PartnershipValidationTimeout = 2202,
	PartnershipAccessFailure = 2203,
	PartnershipAccountInvalid = 2204,
	PartnershipGetAccountInfoFailure = 2205,
	PartnershipDisabled = 2206,
	PartnershipAlreadyExists = 2207,
	CommunityStreamingUnavailable = 2300,
	TwitchNotLinked = 2500,
	TwitchAccountNotFound = 2501,
	TwitchCouldNotLoadDestinyInfo = 2502,
	TrendingCategoryNotFound = 2600,
	TrendingEntryTypeNotSupported = 2601,
}

export interface GroupApplicationListRequest {
	memberships: UserMembership[];
	message: string;
}

export enum GroupsForMemberFilter {
	All = 0,
	Founded = 1,
	NonFounded = 2,
}

export interface GroupMembershipBase {
	group: GroupV2;
}

export interface GroupMembership {
	member: GroupMember;
	group: GroupV2;
}

export interface SearchResultOfGroupMembership {
	results: GroupMembership[];
	totalResults: number;
	hasMore: boolean;
	query: PagedQuery;
	replacementContinuationToken: string;
	/**
	 * If useTotalResults is true, then totalResults represents an accurate count.
	 * If False, it does not, and may be estimated/only the size of the current page.
	 * Either way, you should probably always only trust hasMore.
	 * This is a long-held historical throwback to when we used to do paging with known total results. Those queries toasted our database, and we were left to hastily alter our endpoints and create backward- compatible shims, of which useTotalResults is one.
	 */
	useTotalResults: boolean;
}

export interface GroupMembershipSearchResponse {
	results: GroupMembership[];
	totalResults: number;
	hasMore: boolean;
	query: PagedQuery;
	replacementContinuationToken: string;
	/**
	 * If useTotalResults is true, then totalResults represents an accurate count.
	 * If False, it does not, and may be estimated/only the size of the current page.
	 * Either way, you should probably always only trust hasMore.
	 * This is a long-held historical throwback to when we used to do paging with known total results. Those queries toasted our database, and we were left to hastily alter our endpoints and create backward- compatible shims, of which useTotalResults is one.
	 */
	useTotalResults: boolean;
}

export interface GroupPotentialMembership {
	member: GroupPotentialMember;
	group: GroupV2;
}

export interface SearchResultOfGroupPotentialMembership {
	results: GroupPotentialMembership[];
	totalResults: number;
	hasMore: boolean;
	query: PagedQuery;
	replacementContinuationToken: string;
	/**
	 * If useTotalResults is true, then totalResults represents an accurate count.
	 * If False, it does not, and may be estimated/only the size of the current page.
	 * Either way, you should probably always only trust hasMore.
	 * This is a long-held historical throwback to when we used to do paging with known total results. Those queries toasted our database, and we were left to hastily alter our endpoints and create backward- compatible shims, of which useTotalResults is one.
	 */
	useTotalResults: boolean;
}

export interface GroupPotentialMembershipSearchResponse {
	results: GroupPotentialMembership[];
	totalResults: number;
	hasMore: boolean;
	query: PagedQuery;
	replacementContinuationToken: string;
	/**
	 * If useTotalResults is true, then totalResults represents an accurate count.
	 * If False, it does not, and may be estimated/only the size of the current page.
	 * Either way, you should probably always only trust hasMore.
	 * This is a long-held historical throwback to when we used to do paging with known total results. Those queries toasted our database, and we were left to hastily alter our endpoints and create backward- compatible shims, of which useTotalResults is one.
	 */
	useTotalResults: boolean;
}

/**
 * DestinyManifest is the external-facing contract for just the properties needed by those calling the Destiny Platform.
 */
export interface DestinyManifest {
	version: string;
	mobileAssetContentPath: string;
	mobileGearAssetDataBases: GearAssetDataBaseDefinition[];
	mobileWorldContentPaths: {[field: string]: string};
	mobileClanBannerDatabasePath: string;
	mobileGearCDN: {[field: string]: string};
}

export interface GearAssetDataBaseDefinition {
	version: number;
	path: string;
}

export enum DestinyComponentType {
	None = 0,
	Profiles = 100,
	VendorReceipts = 101,
	ProfileInventories = 102,
	ProfileCurrencies = 103,
	Characters = 200,
	CharacterInventories = 201,
	CharacterProgressions = 202,
	CharacterRenderData = 203,
	CharacterActivities = 204,
	CharacterEquipment = 205,
	ItemInstances = 300,
	ItemObjectives = 301,
	ItemPerks = 302,
	ItemRenderData = 303,
	ItemStats = 304,
	ItemSockets = 305,
	ItemTalentGrids = 306,
	ItemCommonData = 307,
	ItemPlugStates = 308,
	Vendors = 400,
	VendorCategories = 401,
	VendorSales = 402,
	Kiosks = 500,
}

/**
 * The response for GetDestinyProfile, with components for character and item-level data.
 */
export interface DestinyProfileResponse {
	/**
	 * Recent, refundable purchases you have made from vendors. When will you use it? Couldn't say...
	 * COMPONENT TYPE: VendorReceipts
	 */
	vendorReceipts: SingleComponentResponseOfDestinyVendorReceiptsComponent;
	/**
	 * The profile-level inventory of the Destiny Profile.
	 * COMPONENT TYPE: ProfileInventories
	 */
	profileInventory: SingleComponentResponseOfDestinyInventoryComponent;
	/**
	 * The profile-level currencies owned by the Destiny Profile.
	 * COMPONENT TYPE: ProfileCurrencies
	 */
	profileCurrencies: SingleComponentResponseOfDestinyInventoryComponent;
	/**
	 * The basic information about the Destiny Profile (formerly "Account").
	 * COMPONENT TYPE: Profiles
	 */
	profile: SingleComponentResponseOfDestinyProfileComponent;
	/**
	 * Items available from Kiosks that are available Profile-wide (i.e. across all characters)
	 * This component returns information about what Kiosk items are available to you on a *Profile* level. It is theoretically possible for Kiosks to have items gated by specific Character as well. If you ever have those, you will find them on the characterKiosks property.
	 * COMPONENT TYPE: Kiosks
	 */
	profileKiosks: SingleComponentResponseOfDestinyKiosksComponent;
	/**
	 * Basic information about each character, keyed by the CharacterId.
	 * COMPONENT TYPE: Characters
	 */
	characters: DictionaryComponentResponseOfint64AndDestinyCharacterComponent;
	/**
	 * The character-level non-equipped inventory items, keyed by the Character's Id.
	 * COMPONENT TYPE: CharacterInventories
	 */
	characterInventories: DictionaryComponentResponseOfint64AndDestinyInventoryComponent;
	/**
	 * Character-level progression data, keyed by the Character's Id.
	 * COMPONENT TYPE: CharacterProgressions
	 */
	characterProgressions: DictionaryComponentResponseOfint64AndDestinyCharacterProgressionComponent;
	/**
	 * Character rendering data - a minimal set of info needed to render a character in 3D - keyed by the Character's Id.
	 * COMPONENT TYPE: CharacterRenderData
	 */
	characterRenderData: DictionaryComponentResponseOfint64AndDestinyCharacterRenderComponent;
	/**
	 * Character activity data - the activities available to this character and its status, keyed by the Character's Id.
	 * COMPONENT TYPE: CharacterActivities
	 */
	characterActivities: DictionaryComponentResponseOfint64AndDestinyCharacterActivitiesComponent;
	/**
	 * The character's equipped items, keyed by the Character's Id.
	 * COMPONENT TYPE: CharacterEquipment
	 */
	characterEquipment: DictionaryComponentResponseOfint64AndDestinyInventoryComponent;
	/**
	 * Items available from Kiosks that are available to a specific character as opposed to the account as a whole. It must be combined with data from the profileKiosks property to get a full picture of the character's available items to check out of a kiosk.
	 * This component returns information about what Kiosk items are available to you on a *Character* level. Usually, kiosk items will be earned for the entire Profile (all characters) at once. To find those, look in the profileKiosks property.
	 * COMPONENT TYPE: Kiosks
	 */
	characterKiosks: DictionaryComponentResponseOfint64AndDestinyKiosksComponent;
	/**
	 * Information about instanced items across all returned characters, keyed by the item's instance ID.
	 * COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
	 */
	itemComponents: DestinyItemComponentSetOfint64;
}

/**
 * For now, this isn't used for much: it's a record of the recent refundable purchases that the user has made. In the future, it could be used for providing refunds/buyback via the API. Wouldn't that be fun?
 */
export interface DestinyVendorReceiptsComponent {
	/**
	 * The receipts for refundable purchases made at a vendor.
	 */
	receipts: DestinyVendorReceipt[];
}

/**
 * If a character purchased an item that is refundable, a Vendor Receipt will be created on the user's Destiny Profile. These expire after a configurable period of time, but until then can be used to get refunds on items. BNet does not provide the ability to refund a purchase *yet*, but you know.
 */
export interface DestinyVendorReceipt {
	/**
	 * The amount paid for the item, in terms of items that were consumed in the purchase and their quantity.
	 */
	currencyPaid: DestinyItemQuantity[];
	/**
	 * The item that was received, and its quantity.
	 */
	itemReceived: DestinyItemQuantity;
	/**
	 * The unlock flag used to determine whether you still have the purchased item.
	 */
	licenseUnlockHash: number;
	/**
	 * The ID of the character who made the purchase.
	 */
	purchasedByCharacterId: number;
	/**
	 * Whether you can get a refund, and what happens in order for the refund to be received. See the DestinyVendorItemRefundPolicy enum for details.
	 */
	refundPolicy: DestinyVendorItemRefundPolicy;
	/**
	 * The identifier of this receipt.
	 */
	sequenceNumber: number;
	/**
	 * The seconds since epoch at which this receipt is rendered invalid.
	 */
	timeToExpiration: number;
	/**
	 * The date at which this receipt is rendered invalid.
	 */
	expiresOn: string;
}

/**
 * The base class for any component-returning object that may need to indicate information about the state of the component being returned.
 */
export interface ComponentResponse {
	privacy: ComponentPrivacySetting;
}

/**
 * A set of flags for reason(s) why the component populated in the way that it did. Inspect the individual flags for the reasons.
 */
export enum ComponentPrivacySetting {
	None = 0,
	Public = 1,
	Private = 2,
}

export interface SingleComponentResponseOfDestinyVendorReceiptsComponent {
	data: DestinyVendorReceiptsComponent;
	privacy: ComponentPrivacySetting;
}

/**
 * A list of minimal information for items in an inventory: be it a character's inventory, or a Profile's inventory. (Note that the Vault is a collection of inventory buckets in the Profile's inventory)
 * Inventory Items returned here are in a flat list, but importantly they have a bucketHash property that indicates the specific inventory bucket that is holding them. These buckets constitute things like the separate sections of the Vault, the user's inventory slots, etc. See DestinyInventoryBucketDefinition for more info.
 */
export interface DestinyInventoryComponent {
	/**
	 * The items in this inventory. If you care to bucket them, use the item's bucketHash property to group them.
	 */
	items: DestinyItemComponent[];
}

/**
 * The base item component, filled with properties that are generally useful to know in any item request or that don't feel worthwhile to put in their own component.
 */
export interface DestinyItemComponent {
	/**
	 * The identifier for the item's definition, which is where most of the useful static information for the item can be found.
	 */
	itemHash: number;
	/**
	 * If the item is instanced, it will have an instance ID. Lack of an instance ID implies that the item has no distinct local qualities aside from stack size.
	 */
	itemInstanceId?: number;
	/**
	 * The quantity of the item in this stack. Note that Instanced items cannot stack. If an instanced item, this value will always be 1 (as the stack has exactly one item in it)
	 */
	quantity: number;
	/**
	 * If the item is bound to a location, it will be specified in this enum.
	 */
	bindStatus: ItemBindStatus;
	/**
	 * An easy reference for where the item is located. Redundant if you got the item from an Inventory, but useful when making detail calls on specific items.
	 */
	location: ItemLocation;
	/**
	 * The hash identifier for the specific inventory bucket in which the item is located.
	 */
	bucketHash: number;
	/**
	 * If there is a known error state that would cause this item to not be transferable, this Flags enum will indicate all of those error states. Otherwise, it will be 0 (CanTransfer).
	 */
	transferStatus: TransferStatuses;
	/**
	 * If the item can be locked, this will indicate that state.
	 */
	lockable: boolean;
	/**
	 * A flags enumeration indicating the states of the item: whether it's tracked or locked for example.
	 */
	state: ItemState;
}

export enum ItemBindStatus {
	NotBound = 0,
	BoundToCharacter = 1,
	BoundToAccount = 2,
	BoundToGuild = 3,
}

/**
 * Whether you can transfer an item, and why not if you can't.
 */
export enum TransferStatuses {
	CanTransfer = 0,
	ItemIsEquipped = 1,
	NotTransferrable = 2,
	NoRoomInDestination = 4,
}

export enum ItemState {
	None = 0,
	Locked = 1,
	Tracked = 2,
}

export interface SingleComponentResponseOfDestinyInventoryComponent {
	data: DestinyInventoryComponent;
	privacy: ComponentPrivacySetting;
}

/**
 * The most essential summary information about a Profile (in Destiny 1, we called these "Accounts").
 */
export interface DestinyProfileComponent {
	/**
	 * If you need to render the Profile (their platform name, icon, etc...) somewhere, this property contains that information.
	 */
	userInfo: UserInfoCard;
	/**
	 * The last time the user played with any character on this Profile.
	 */
	dateLastPlayed: string;
	/**
	 * If you want to know what expansions they own, this will contain that data.
	 */
	versionsOwned: DestinyGameVersions;
	/**
	 * A list of the character IDs, for further querying on your part.
	 */
	characterIds: number[];
}

/**
 * A flags enumeration indicating the versions of the game that a given user has purchased.
 */
export enum DestinyGameVersions {
	None = 0,
	Destiny2 = 1,
}

export interface SingleComponentResponseOfDestinyProfileComponent {
	data: DestinyProfileComponent;
	privacy: ComponentPrivacySetting;
}

/**
 * A Kiosk is a Vendor (DestinyVendorDefinition) that sells items based on whether you have already acquired that item before.
 * This component returns information about what Kiosk items are available to you on a *Profile* level. It is theoretically possible for Kiosks to have items gated by specific Character as well. If you ever have those, you will find them on the individual character's DestinyCharacterKiosksComponent.
 * Note that, because this component returns vendorItemIndexes (that is to say, indexes into the Kiosk Vendor's itemList property), these results are necessarily content version dependent. Make sure that you have the latest version of the content manifest databases before using this data.
 */
export interface DestinyKiosksComponent {
	/**
	 * A dictionary keyed by the Kiosk Vendor's hash identifier (use it to look up the DestinyVendorDefinition for the relevant kiosk vendor), and whose value is a list of all the items that the user can "see" in the Kiosk, and any other interesting metadata.
	 */
	kioskItems: {[field: number]: DestinyKioskItem[]};
}

export interface DestinyKioskItem {
	/**
	 * The index of the item in the related DestinyVendorDefintion's itemList property, representing the sale.
	 */
	index: number;
	/**
	 * If true, the user can not only see the item, but they can acquire it. It is possible that a user can see a kiosk item and not be able to acquire it.
	 */
	canAcquire: boolean;
	/**
	 * Indexes into failureStrings for the Vendor, indicating the reasons why it failed if any.
	 */
	failureIndexes: number[];
}

export interface SingleComponentResponseOfDestinyKiosksComponent {
	data: DestinyKiosksComponent;
	privacy: ComponentPrivacySetting;
}

/**
 * This component contains base properties of the character. You'll probably want to always request this component, but hey you do you.
 */
export interface DestinyCharacterComponent {
	/**
	 * Every Destiny Profile has a membershipId. This is provided on the character as well for convenience.
	 */
	membershipId: number;
	/**
	 * membershipType tells you the platform on which the character plays. Examine the BungieMembershipType enumeration for possible values.
	 */
	membershipType: BungieMembershipType;
	/**
	 * The unique identifier for the character.
	 */
	characterId: number;
	/**
	 * The last date that the user played Destiny.
	 */
	dateLastPlayed: string;
	/**
	 * If the user is currently playing, this is how long they've been playing.
	 */
	minutesPlayedThisSession: number;
	/**
	 * If this value is 525,600, then they played Destiny for a year. Or they're a very dedicated Rent fan. Note that this includes idle time, not just time spent actually in activities shooting things.
	 */
	minutesPlayedTotal: number;
	/**
	 * The user's calculated "Light Level". Light level is an indicator of your power that mostly matters in the end game, once you've reached the maximum character level: it's a level that's dependent on the average Attack/Defense power of your items.
	 */
	light: number;
	/**
	 * Your character's stats, such as Agility, Resilience, etc... *not* historical stats.
	 * You'll have to call a different endpoint for those.
	 */
	stats: {[field: number]: number};
	/**
	 * Use this hash to look up the character's DestinyRaceDefinition.
	 */
	raceHash: number;
	/**
	 * Use this hash to look up the character's DestinyGenderDefinition.
	 */
	genderHash: number;
	/**
	 * Use this hash to look up the character's DestinyClassDefinition.
	 */
	classHash: number;
	/**
	 * Mostly for historical purposes at this point, this is an enumeration for the character's race.
	 * It'll be preferable in the general case to look up the related definition: but for some people this was too convenient to remove.
	 */
	raceType: DestinyRace;
	/**
	 * Mostly for historical purposes at this point, this is an enumeration for the character's class.
	 * It'll be preferable in the general case to look up the related definition: but for some people this was too convenient to remove.
	 */
	classType: DestinyClass;
	/**
	 * Mostly for historical purposes at this point, this is an enumeration for the character's Gender.
	 * It'll be preferable in the general case to look up the related definition: but for some people this was too convenient to remove. And yeah, it's an enumeration and not a boolean. Fight me.
	 */
	genderType: DestinyGender;
	/**
	 * A shortcut path to the user's currently equipped emblem image. If you're just showing summary info for a user, this is more convenient than examining their equipped emblem and looking up the definition.
	 */
	emblemPath: string;
	/**
	 * A shortcut path to the user's currently equipped emblem background image. If you're just showing summary info for a user, this is more convenient than examining their equipped emblem and looking up the definition.
	 */
	emblemBackgroundPath: string;
	/**
	 * The hash of the currently equipped emblem for the user. Can be used to look up the DestinyInventoryItemDefinition.
	 */
	emblemHash: number;
	/**
	 * The progression that indicates your character's level. Not their light level, but their character level: you know, the thing you max out a couple hours in and then ignore for the sake of light level.
	 */
	levelProgression: DestinyProgression;
	/**
	 * The "base" level of your character, not accounting for any light level.
	 */
	baseCharacterLevel: number;
	/**
	 * A number between 0 and 100, indicating the whole and fractional % remaining to get to the next character level.
	 */
	percentToNextLevel: number;
}

export enum DestinyRace {
	Human = 0,
	Awoken = 1,
	Exo = 2,
	Unknown = 3,
}

export enum DestinyGender {
	Male = 0,
	Female = 1,
	Unknown = 2,
}

/**
 * In Destiny, "Races" are really more like "Species". Sort of. I mean, are the Awoken a separate species from humans? I'm not sure. But either way, they're defined here. You'll see Exo, Awoken, and Human as examples of these Species. Players will choose one for their character.
 */
export interface DestinyRaceDefinition {
	displayProperties: DestinyDisplayPropertiesDefinition;
	/**
	 * An enumeration defining the existing, known Races/Species for player characters. This value will be the enum value matching this definition.
	 */
	raceType: DestinyRace;
	/**
	 * A localized string referring to the singular form of the Race's name when referred to in gendered form. Keyed by the DestinyGender.
	 */
	genderedRaceNames: {[field: number]: string};
	/**
	 * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
	 * When entities refer to each other in Destiny content, it is this hash that they are referring to.
	 */
	hash: number;
	/**
	 * The index of the entity as it was found in the investment tables.
	 */
	index: number;
	/**
	 * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
	 */
	redacted: boolean;
}

/**
 * Gender is a social construct, and as such we have definitions for Genders. Right now there happens to only be two, but we'll see what the future holds.
 */
export interface DestinyGenderDefinition {
	/**
	 * This is a quick reference enumeration for all of the currently defined Genders. We use the enumeration for quicker lookups in related data, like DestinyClassDefinition.genderedClassNames.
	 */
	genderType: DestinyGender;
	displayProperties: DestinyDisplayPropertiesDefinition;
	/**
	 * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
	 * When entities refer to each other in Destiny content, it is this hash that they are referring to.
	 */
	hash: number;
	/**
	 * The index of the entity as it was found in the investment tables.
	 */
	index: number;
	/**
	 * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
	 */
	redacted: boolean;
}

/**
 * Defines a Character Class in Destiny 2. These are types of characters you can play, like Titan, Warlock, and Hunter.
 */
export interface DestinyClassDefinition {
	/**
	 * In Destiny 1, we added a convenience Enumeration for referring to classes. We've kept it, though mostly for posterity. This is the enum value for this definition's class.
	 */
	classType: DestinyClass;
	displayProperties: DestinyDisplayPropertiesDefinition;
	/**
	 * A localized string referring to the singular form of the Class's name when referred to in gendered form. Keyed by the DestinyGender.
	 */
	genderedClassNames: {[field: number]: string};
	/**
	 * If the Class has a Mentor (all classes *should*), this will be the hash identifier for that Vendor if you care.
	 */
	mentorVendorHash?: number;
	/**
	 * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
	 * When entities refer to each other in Destiny content, it is this hash that they are referring to.
	 */
	hash: number;
	/**
	 * The index of the entity as it was found in the investment tables.
	 */
	index: number;
	/**
	 * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
	 */
	redacted: boolean;
}

export interface DictionaryComponentResponseOfint64AndDestinyCharacterComponent {
	data: {[field: number]: undefined};
	privacy: ComponentPrivacySetting;
}

export interface DictionaryComponentResponseOfint64AndDestinyInventoryComponent {
	data: {[field: number]: DestinyInventoryComponent};
	privacy: ComponentPrivacySetting;
}

/**
 * This component returns anything that could be considered "Progression" on a user: data where the user is gaining levels, reputation, completions, rewards, etc...
 */
export interface DestinyCharacterProgressionComponent {
	/**
	 * A Dictionary of all known progressions for the Character, keyed by the Progression's hash.
	 * Not all progressions have user-facing data, but those who do will have that data contained in the DestinyProgressionDefinition.
	 */
	progressions: {[field: number]: DestinyProgression};
	/**
	 * A dictionary of all known Factions, keyed by the Faction's hash. It contains data about this character's status with the faction.
	 */
	factions: {[field: number]: DestinyFactionProgression};
	/**
	 * Milestones are related to the simple progressions shown in the game, but return additional and hopefully helpful information for users about the specifics of the Milestone's status.
	 */
	milestones: {[field: number]: DestinyMilestone};
	/**
	 * If the user has any active quests, the quests' statuses will be returned here.
	 * Note that quests have been largely supplanted by Milestones, but that doesn't mean that they won't make a comeback independent of milestones at some point.
	 */
	quests: DestinyQuestStatus[];
	/**
	 * Sometimes, you have items in your inventory that don't have instances, but still have Objective information. This provides you that objective information for uninstanced items.
	 * This dictionary is keyed by the item's hash: which you can use to look up the name and description for the overall task(s) implied by the objective. The value is the list of objectives for this item, and their statuses.
	 */
	uninstancedItemObjectives: {[field: number]: DestinyObjectiveProgress[]};
}

/**
 * Mostly for historical purposes, we segregate Faction progressions from other progressions. This is just a DestinyProgression with a shortcut for finding the DestinyFactionDefinition of the faction related to the progression.
 */
export interface DestinyFactionProgression {
	/**
	 * The hash identifier of the Faction related to this progression. Use it to look up the DestinyFactionDefinition for more rendering info.
	 */
	factionHash: number;
	/**
	 * The hash identifier of the Progression in question. Use it to look up the DestinyProgressionDefinition in static data.
	 */
	progressionHash: number;
	/**
	 * The amount of progress earned today for this progression.
	 */
	dailyProgress: number;
	/**
	 * If this progression has a daily limit, this is that limit.
	 */
	dailyLimit: number;
	/**
	 * The amount of progress earned toward this progression in the current week.
	 */
	weeklyProgress: number;
	/**
	 * If this progression has a weekly limit, this is that limit.
	 */
	weeklyLimit: number;
	/**
	 * This is the total amount of progress obtained overall for this progression (for instance, the total amount of Character Level experience earned)
	 */
	currentProgress: number;
	/**
	 * This is the level of the progression (for instance, the Character Level).
	 */
	level: number;
	/**
	 * This is the maximum possible level you can achieve for this progression (for example, the maximum character level obtainable)
	 */
	levelCap: number;
	/**
	 * Progressions define their levels in "steps". Since the last step may be repeatable, the user may be at a higher level than the actual Step achieved in the progression. Not necessarily useful, but potentially interesting for those cruising the API. Relate this to the "steps" property of the DestinyProgression to see which step the user is on, if you care about that. (Note that this is Content Version dependent since it refers to indexes.)
	 */
	stepIndex: number;
	/**
	 * The amount of progression (i.e. "Experience") needed to reach the next level of this Progression. Jeez, progression is such an overloaded word.
	 */
	progressToNextLevel: number;
	/**
	 * The total amount of progression (i.e. "Experience") needed in order to reach the next level.
	 */
	nextLevelAt: number;
}

/**
 * Represents a runtime instance of a user's milestone status. Live Milestone data should be combined with DestinyMilestoneDefinition data to show the user a picture of what is available for them to do in the game, and their status in regards to said "things to do." Consider it a big, wonky to-do list, or Advisors 3.0 for those who remember the Destiny 1 API.
 */
export interface DestinyMilestone {
	/**
	 * The unique identifier for the Milestone. Use it to look up the DestinyMilestoneDefinition, so you can combine the other data in this contract with static definition data.
	 */
	milestoneHash: number;
	/**
	 * Indicates what quests are available for this Milestone. Usually this will be only a single Quest, but some quests have multiple available that you can choose from at any given time. All possible quests for a milestone can be found in the DestinyMilestoneDefinition, but they must be combined with this Live data to determine which one(s) are actually active right now. It is possible for Milestones to not have any quests.
	 */
	availableQuests: DestinyMilestoneQuest[];
	/**
	 * Milestones may have arbitrary key/value pairs associated with them, for data that users will want to know about but that doesn't fit neatly into any of the common components such as Quests. A good example of this would be - if this existed in Destiny 1 - the number of wins you currently have on your Trials of Osiris ticket. Looking in the DestinyMilestoneDefinition, you can use the string identifier of this dictionary to look up more info about the value, including localized string content for displaying the value. The value in the dictionary is the floating point number. The definition will tell you how to format this number.
	 */
	values: {[field: string]: number};
	/**
	 * A milestone may have one or more active vendors that are "related" to it (that provide rewards, or that are the initiators of the Milestone). I already regret this, even as I'm typing it. You see, sometimes a milestone may be directly correlated with a set of vendors that provide varying tiers of rewards. The player may not be able to interact with one or more of those vendors. This will return the hashes of the Vendors that the player *can* interact with, allowing you to show their current inventory as rewards or related items to the Milestone or its activities.
	 */
	vendorHashes: number[];
	/**
	 * If the entity to which this component is attached has known active Rewards for the player, this will detail information about those rewards, keyed by the RewardEntry Hash. (See DestinyMilestoneDefinition for more information about Reward Entries) Note that these rewards are not for the Quests related to the Milestone. Think of these as "overview/checklist" rewards that may be provided for Milestones that may provide rewards for performing a variety of tasks that aren't under a specific Quest.
	 */
	rewards: DestinyMilestoneRewardCategory[];
	/**
	 * If known, this is the date when the event last began or refreshed. It will only be populated for events with fixed and repeating start and end dates.
	 */
	startDate?: string;
	/**
	 * If known, this is the date when the event will next end or repeat. It will only be populated for events with fixed and repeating start and end dates.
	 */
	endDate?: string;
}

/**
 * If a Milestone has one or more Quests, this will contain the live information for the character's status with one of those quests.
 */
export interface DestinyMilestoneQuest {
	/**
	 * Quests are defined as Items in content. As such, this is the hash identifier of the DestinyInventoryItemDefinition that represents this quest. It will have pointers to all of the steps in the quest, and display information for the quest (title, description, icon etc) Individual steps will be referred to in the Quest item's DestinyInventoryItemDefinition.setData property, and themselves are Items with their own renderable data.
	 */
	questItemHash: number;
	/**
	 * The current status of the quest for the character making the request.
	 */
	status: DestinyQuestStatus;
	/**
	 * *IF* the Milestone has an active Activity that can give you greater details about what you need to do, it will be returned here. Remember to associate this with the DestinyMilestoneDefinition's activities to get details about the activity, including what specific quest it is related to if you have multiple quests to choose from.
	 */
	activity: DestinyMilestoneActivity;
	/**
	 * The activities referred to by this quest can have many associated challenges. They are all contained here, with activityHashes so that you can associate them with the specific activity variants in which they can be found. In retrospect, I probably should have put these under the specific Activity Variants, but it's too late to change it now. Theoretically, a quest without Activities can still have Challenges, which is why this is on a higher level than activity/variants, but it probably should have been in both places. That may come as a later revision.
	 */
	challenges: DestinyChallengeStatus[];
}

/**
 * Data regarding the progress of a Quest for a specific character. Quests are composed of multiple steps, each with potentially multiple objectives: this QuestStatus will return Objective data for the *currently active* step in this quest.
 */
export interface DestinyQuestStatus {
	/**
	 * The hash identifier for the Quest Item. (Note: Quests are defined as Items, and thus you would use this to look up the quest's DestinyInventoryItemDefinition). For information on all steps in the quest, you can then examine its DestinyInventoryItemDefinition.setData property for Quest Steps (which are *also* items). You can use the Item Definition to display human readable data about the overall quest.
	 */
	questHash: number;
	/**
	 * The hash identifier of the current Quest Step, which is also a DestinyInventoryItemDefinition. You can use this to get human readable data about the current step and what to do in that step.
	 */
	stepHash: number;
	/**
	 * A step can have multiple objectives. This will give you the progress for each objective in the current step, in the order in which they are rendered in-game.
	 */
	stepObjectives: DestinyObjectiveProgress[];
	/**
	 * Whether or not the quest is tracked
	 */
	tracked: boolean;
	/**
	 * The current Quest Step will be an instanced item in the player's inventory. If you care about that, this is the instance ID of that item.
	 */
	itemInstanceId: number;
	/**
	 * Whether or not the whole quest has been completed, regardless of whether or not you have redeemed the rewards for the quest.
	 */
	completed: boolean;
	/**
	 * Whether or not you have redeemed rewards for this quest.
	 */
	redeemed: boolean;
	/**
	 * Whether or not you have started this quest.
	 */
	started: boolean;
	/**
	 * If the quest has a related Vendor that you should talk to in order to initiate the quest/earn rewards/continue the quest, this will be the hash identifier of that Vendor. Look it up its DestinyVendorDefinition.
	 */
	vendorHash?: number;
}

/**
 * Returns data about a character's status with a given Objective. Combine with DestinyObjectiveDefinition static data for display purposes.
 */
export interface DestinyObjectiveProgress {
	/**
	 * The unique identifier of the Objective being referred to. Use to look up the DestinyObjectiveDefinition in static data.
	 */
	objectiveHash: number;
	/**
	 * If the Objective has a Destination associated with it, this is the unique identifier of the Destination being referred to. Use to look up the DestinyDestinationDefinition in static data. This will give localized data about *where* in the universe the objective should be achieved.
	 */
	destinationHash?: number;
	/**
	 * If the Objective has an Activity associated with it, this is the unique identifier of the Activity being referred to. Use to look up the DestinyActivityDefinition in static data. This will give localized data about *what* you should be playing for the objective to be achieved.
	 */
	activityHash?: number;
	/**
	 * If progress has been made, and the progress can be measured numerically, this will be the value of that progress. You can compare it to the DestinyObjectiveDefinition.completionValue property for current vs. upper bounds, and use DestinyObjectiveDefinition.valueStyle to determine how this should be rendered. Note that progress, in Destiny 2, need not be a literal numeric progression. It could be one of a number of possible values, even a Timestamp. Always examine DestinyObjectiveDefinition.valueStyle before rendering progress.
	 */
	progress?: number;
	/**
	 * Whether or not the Objective is completed.
	 */
	complete: boolean;
}

/**
 * Sometimes, we know the specific activity that the Milestone wants you to play. This entity provides additional information about that Activity and all of its variants. (sometimes there's only one variant, but I think you get the point)
 */
export interface DestinyMilestoneActivity {
	/**
	 * The hash of an arbitrarily chosen variant of this activity. We'll go ahead and call that the "canonical" activity, because if you're using this value you should only use it for properties that are common across the variants: things like the name of the activity, it's location, etc... Use this hash to look up the DestinyActivityDefinition of this activity for rendering data.
	 */
	activityHash: number;
	/**
	 * If the activity has modifiers, this will be the list of modifiers that all variants have in common. Perform lookups against DestinyActivityModifierDefinition which defines the modifier being applied to get at the modifier data. Note that, in the DestiyActivityDefinition, you will see many more modifiers than this being referred to: those are all *possible* modifiers for the activity, not the active ones. Use only the active ones to match what's really live.
	 */
	modifierHashes: number[];
	/**
	 * If you want more than just name/location/etc... you're going to have to dig into and show the variants of the conceptual activity. These will differ in seemingly arbitrary ways, like difficulty level and modifiers applied. Show it in whatever way tickles your fancy.
	 */
	variants: DestinyMilestoneActivityVariant[];
}

/**
 * Represents custom data that we know about an individual variant of an activity.
 */
export interface DestinyMilestoneActivityVariant {
	/**
	 * The hash for the specific variant of the activity related to this milestone. You can pull more detailed static info from the DestinyActivityDefinition, such as difficulty level.
	 */
	activityHash: number;
	/**
	 * An OPTIONAL component: if it makes sense to talk about this activity variant in terms of whether or not it has been completed or what progress you have made in it, this will be returned. Otherwise, this will be NULL.
	 */
	completionStatus: DestinyMilestoneActivityCompletionStatus;
}

/**
 * Represents this player's personal completion status for the Activity under a Milestone, if the activity has trackable completion and progress information. (most activities won't, or the concept won't apply. For instance, it makes sense to talk about a tier of a raid as being Completed or having progress, but it doesn't make sense to talk about a Crucible Playlist in those terms.
 */
export interface DestinyMilestoneActivityCompletionStatus {
	/**
	 * If the activity has been "completed", that information will be returned here.
	 */
	completed: boolean;
	/**
	 * If the Activity has discrete "phases" that we can track, that info will be here. Otherwise, this value will be NULL. Note that this is a list and not a dictionary: the order implies the ascending order of phases or progression in this activity.
	 */
	phases: DestinyMilestoneActivityPhase[];
}

/**
 * Represents whatever information we can return about an explicit phase in an activity. In the future, I hope we'll have more than just "guh, you done gone and did something," but for the forseeable future that's all we've got. I'm making it more than just a list of booleans out of that overly-optimistic hope.
 */
export interface DestinyMilestoneActivityPhase {
	/**
	 * Indicates if the phase has been completed.
	 */
	complete: boolean;
}

/**
 * Represents the status and other related information for a challenge that is - or was - available to a player.
 * A challenge is a bonus objective, generally tacked onto Quests or Activities, that provide additional variations on play.
 */
export interface DestinyChallengeStatus {
	/**
	 * The progress - including completion status - of the active challenge.
	 */
	objective: DestinyObjectiveProgress;
}

/**
 * Represents a category of "summary" rewards that can be earned for the Milestone regardless of specific quest rewards that can be earned.
 */
export interface DestinyMilestoneRewardCategory {
	/**
	 * Look up the relevant DestinyMilestoneDefinition, and then use rewardCategoryHash to look up the category info in DestinyMilestoneDefinition.rewards.
	 */
	rewardCategoryHash: number;
	/**
	 * The individual reward entries for this category, and their status.
	 */
	entries: DestinyMilestoneRewardEntry[];
}

/**
 * The character-specific data for a milestone's reward entry. See DestinyMilestoneDefinition for more information about Reward Entries.
 */
export interface DestinyMilestoneRewardEntry {
	/**
	 * The identifier for the reward entry in question. It is important to look up the related DestinyMilestoneRewardEntryDefinition to get the static details about the reward, which you can do by looking up the milestone's DestinyMilestoneDefinition and examining the DestinyMilestoneDefinition.rewards[rewardCategoryHash].rewardEntries[rewardEntryHash] data.
	 */
	rewardEntryHash: number;
	/**
	 * If TRUE, the player has earned this reward.
	 */
	earned: boolean;
	/**
	 * If TRUE, the player has redeemed/picked up/obtained this reward. Feel free to alias this to "gotTheShinyBauble" in your own codebase.
	 */
	redeemed: boolean;
}

/**
 * Milestones are an in-game concept where they're attempting to tell you what you can do next in-game.
 * If that sounds a lot like Advisors in Destiny 1, it is! So we threw out Advisors in the Destiny 2 API and tacked all of the data we would have put on Advisors onto Milestones instead.
 * Each Milestone represents something going on in the game right now:
 * - A "ritual activity" you can perform, like nightfall
 * - A "special event" that may have activities related to it, like Taco Tuesday (there's no Taco Tuesday in Destiny 2)
 * - A checklist you can fulfill, like helping your Clan complete all of its weekly objectives
 * - A tutorial quest you can play through, like the introduction to the Crucible.
 * Most of these milestones appear in game as well. Some of them are BNet only, because we're so extra. You're welcome.
 */
export interface DestinyMilestoneDefinition {
	displayProperties: DestinyDisplayPropertiesDefinition;
	/**
	 * A custom image someone made just for the milestone. Isn't that special?
	 */
	image: string;
	/**
	 * An enumeration listing one of the possible types of milestones. Check out the DestinyMilestoneType enum for more info!
	 */
	milestoneType: DestinyMilestoneType;
	/**
	 * If True, then the Milestone has been integrated with BNet's recruiting feature.
	 */
	recruitable: boolean;
	/**
	 * If the milestone has a friendly identifier for association with other features - such as Recruiting - that identifier can be found here. This is "friendly" in that it looks better in a URL than whatever the identifier for the Milestone actually is.
	 */
	friendlyName: string;
	/**
	 * If TRUE, this entry should be returned in the list of milestones for the "Explore Destiny" (i.e. new BNet homepage) features of Bungie.net (as long as the underlying event is active)
	 */
	showInExplorer: boolean;
	/**
	 * A shortcut for clients - and the server - to understand whether we can predict the start and end dates for this event. In practice, there are multiple ways that an event could have predictable date ranges, but not all events will be able to be predicted via any mechanism (for instance, events that are manually triggered on and off)
	 */
	hasPredictableDates: boolean;
	/**
	 * The full set of possible Quests that give the overview of the Milestone event/activity in question. Only one of these can be active at a time for a given Conceptual Milestone, but many of them may be "available" for the user to choose from. (for instance, with Milestones you can choose from the three available Quests, but only one can be active at a time) Keyed by the quest item.
	 */
	quests: {[field: number]: DestinyMilestoneQuestDefinition};
	/**
	 * If this milestone can provide rewards, this will define the categories into which the individual reward entries are placed.
	 */
	rewards: {[field: number]: DestinyMilestoneRewardCategoryDefinition};
	/**
	 * Sometimes, milestones will have rewards provided by Vendors. This definition gives the information needed to understand which vendors are relevant, the order in which they should be returned if order matters, and the conditions under which the Vendor is relevant to the user.
	 */
	vendors: DestinyMilestoneVendorDefinition[];
	/**
	 * Sometimes, milestones will have arbitrary values associated with them that are of interest to us or to third party developers. This is the collection of those values' definitions, keyed by the identifier of the value and providing useful definition information such as localizable names and descriptions for the value.
	 */
	values: {[field: string]: DestinyMilestoneValueDefinition};
	/**
	 * Some milestones are explicit objectives that you can see and interact with in the game. Some milestones are more conceptual, built by BNet to help advise you on activities and events that happen in-game but that aren't explicitly shown in game as Milestones. If this is TRUE, you can see this as a milestone in the game. If this is FALSE, it's an event or activity you can participate in, but you won't see it as a Milestone in the game's UI.
	 */
	isInGameMilestone: boolean;
	/**
	 * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
	 * When entities refer to each other in Destiny content, it is this hash that they are referring to.
	 */
	hash: number;
	/**
	 * The index of the entity as it was found in the investment tables.
	 */
	index: number;
	/**
	 * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
	 */
	redacted: boolean;
}

/**
 * The type of milestone. Milestones can be Tutorials, one-time/triggered/non-repeating but not necessarily tutorials, or Repeating Milestones.
 */
export enum DestinyMilestoneType {
	Unknown = 0,
	Tutorial = 1,
	OneTime = 2,
	Weekly = 3,
	Daily = 4,
	Special = 5,
}

/**
 * Any data we need to figure out whether this Quest Item is the currently active one for the conceptual Milestone. Even just typing this description, I already regret it.
 */
export interface DestinyMilestoneQuestDefinition {
	/**
	 * The item representing this Milestone quest. Use this hash to look up the DestinyInventoryItemDefinition for the quest to find its steps and human readable data.
	 */
	questItemHash: number;
	/**
	 * The individual quests may have different definitions from the overall milestone: if there's a specific active quest, use these displayProperties instead of that of the overall DestinyMilestoneDefinition.
	 */
	displayProperties: DestinyDisplayPropertiesDefinition;
	/**
	 * If populated, this image can be shown instead of the generic milestone's image when this quest is live, or it can be used to show a background image for the quest itself that differs from that of the Activity or the Milestone.
	 */
	overrideImage: string;
	/**
	 * The rewards you will get for completing this quest, as best as we could extract them from our data. Sometimes, it'll be a decent amount of data. Sometimes, it's going to be sucky. Sorry.
	 */
	questRewards: DestinyMilestoneQuestRewardsDefinition;
	/**
	 * The full set of all possible "conceptual activities" that are related to this Milestone. Tiers or alternative modes of play within these conceptual activities will be defined as sub-entities. Keyed by the Conceptual Activity Hash. Use the key to look up DestinyActivityDefinition.
	 */
	activities: {[field: number]: DestinyMilestoneActivityDefinition};
}

/**
 * If rewards are given in a quest - as opposed to overall in the entire Milestone - there's way less to track. We're going to simplify this contract as a result. However, this also gives us the opportunity to potentially put more than just item information into the reward data if we're able to mine it out in the future. Remember this if you come back and ask "why are quest reward items nested inside of their own class?"
 */
export interface DestinyMilestoneQuestRewardsDefinition {
	/**
	 * The items that represent your reward for completing the quest.
	 * Be warned, these could be "dummy" items: items that are only used to render a good-looking in-game tooltip, but aren't the actual items themselves.
	 * For instance, when experience is given there's often a dummy item representing "experience", with quantity being the amount of experience you got. We don't have a programmatic association between those and whatever Progression is actually getting that experience... yet.
	 */
	items: DestinyMilestoneQuestRewardItem[];
}

/**
 * A subclass of DestinyItemQuantity, that provides not just the item and its quantity but also information that BNet can - at some point - use internally to provide more robust runtime information about the item's qualities.
 * If you want it, please ask! We're just out of time to wire it up right now. Or a clever person just may do it with our existing endpoints.
 */
export interface DestinyMilestoneQuestRewardItem {
	/**
	 * The quest reward item *may* be associated with a vendor. If so, this is that vendor. Use this hash to look up the DestinyVendorDefinition.
	 */
	vendorHash?: number;
	/**
	 * The quest reward item *may* be associated with a vendor. If so, this is the index of the item being sold, which we can use at runtime to find instanced item information for the reward item.
	 */
	vendorItemIndex?: number;
	/**
	 * The hash identifier for the item in question. Use it to look up the item's DestinyInventoryItemDefinition.
	 */
	itemHash: number;
	/**
	 * If this quantity is referring to a specific instance of an item, this will have the item's instance ID. Normally, this will be null.
	 */
	itemInstanceId?: number;
	/**
	 * The amount of the item needed/available depending on the context of where DestinyItemQuantity is being used.
	 */
	quantity: number;
}

/**
 * Milestones can have associated activities which provide additional information about the context, challenges, modifiers, state etc... related to this Milestone.
 * Information we need to be able to return that data is defined here, along with Tier data to establish a relationship between a conceptual Activity and its difficulty levels and variants.
 */
export interface DestinyMilestoneActivityDefinition {
	/**
	 * The "Conceptual" activity hash. Basically, we picked the lowest level activity and are treating it as the canonical definition of the activity for rendering purposes.
	 * If you care about the specific difficulty modes and variations, use the activities under "Variants".
	 */
	conceptualActivityHash: number;
	/**
	 * A milestone-referenced activity can have many variants, such as Tiers or alternative modes of play.
	 * Even if there is only a single variant, the details for these are represented within as a variant definition.
	 * It is assumed that, if this DestinyMilestoneActivityDefinition is active, then all variants should be active.
	 * If a Milestone could ever split the variants' active status conditionally, they should all have their own DestinyMilestoneActivityDefinition instead! The potential duplication will be worth it for the obviousness of processing and use.
	 */
	variants: {[field: number]: DestinyMilestoneActivityVariantDefinition};
}

/**
 * Represents a variant on an activity for a Milestone: a specific difficulty tier, or a specific activity variant for example.
 * These will often have more specific details, such as an associated Guided Game, progression steps, tier-specific rewards, and custom values.
 */
export interface DestinyMilestoneActivityVariantDefinition {
	/**
	 * The hash to use for looking up the variant Activity's definition (DestinyActivityDefinition), where you can find its distinguishing characteristics such as difficulty level and recommended light level.
	 * Frequently, that will be the only distinguishing characteristics in practice, which is somewhat of a bummer.
	 */
	activityHash: number;
	/**
	 * If you care to do so, render the variants in the order prescribed by this value.
	 * When you combine live Milestone data with the definition, the order becomes more useful because you'll be cross-referencing between the definition and live data.
	 */
	order: number;
}

/**
 * The definition of a category of rewards, that contains many individual rewards.
 */
export interface DestinyMilestoneRewardCategoryDefinition {
	/**
	 * Identifies the reward category. Only guaranteed unique within this specific component!
	 */
	categoryHash: number;
	/**
	 * The string identifier for the category, if you want to use it for some end. Guaranteed unique within the specific component.
	 */
	categoryIdentifier: string;
	/**
	 * Hopefully this is obvious by now.
	 */
	displayProperties: DestinyDisplayPropertiesDefinition;
	/**
	 * If this milestone can provide rewards, this will define the sets of rewards that can be earned, the conditions under which they can be acquired, internal data that we'll use at runtime to determine whether you've already earned or redeemed this set of rewards, and the category that this reward should be placed under.
	 */
	rewardEntries: {[field: number]: DestinyMilestoneRewardEntryDefinition};
	/**
	 * If you want to use BNet's recommended order for rendering categories programmatically, use this value and compare it to other categories to determine the order in which they should be rendered. I don't feel great about putting this here, I won't lie.
	 */
	order: number;
}

/**
 * The definition of a specific reward, which may be contained in a category of rewards and that has optional information about how it is obtained.
 */
export interface DestinyMilestoneRewardEntryDefinition {
	/**
	 * The identifier for this reward entry. Runtime data will refer to reward entries by this hash. Only guaranteed unique within the specific Milestone.
	 */
	rewardEntryHash: number;
	/**
	 * The string identifier, if you care about it. Only guaranteed unique within the specific Milestone.
	 */
	rewardEntryIdentifier: string;
	/**
	 * The items you will get as rewards, and how much of it you'll get.
	 */
	items: DestinyItemQuantity[];
	/**
	 * If this reward is redeemed at a Vendor, this is the hash of the Vendor to go to in order to redeem the reward. Use this hash to look up the DestinyVendorDefinition.
	 */
	vendorHash?: number;
	/**
	 * For us to bother returning this info, we should be able to return some kind of information about why these rewards are grouped together. This is ideally that information. Look at how confident I am that this will always remain true.
	 */
	displayProperties: DestinyDisplayPropertiesDefinition;
	/**
	 * If you want to follow BNet's ordering of these rewards, use this number within a given category to order the rewards. Yeah, I know. I feel dirty too.
	 */
	order: number;
}

/**
 * If the Milestone or a component has vendors whose inventories could/should be displayed that are relevant to it, this will return the vendor in question.
 * It also contains information we need to determine whether that vendor is actually relevant at the moment, given the user's current state.
 */
export interface DestinyMilestoneVendorDefinition {
	/**
	 * The hash of the vendor whose wares should be shown as associated with the Milestone.
	 */
	vendorHash: number;
}

/**
 * The definition for information related to a key/value pair that is relevant for a particular Milestone or component within the Milestone.
 * This lets us more flexibly pass up information that's useful to someone, even if it's not necessarily us.
 */
export interface DestinyMilestoneValueDefinition {
	key: string;
	displayProperties: DestinyDisplayPropertiesDefinition;
}

export interface DictionaryComponentResponseOfint64AndDestinyCharacterProgressionComponent {
	data: {[field: number]: undefined};
	privacy: ComponentPrivacySetting;
}

/**
 * Only really useful if you're attempting to render the character's current appearance in 3D, this returns a bare minimum of information, pre-aggregated, that you'll need to perform that rendering. Note that you need to combine this with other 3D assets and data from our servers.
 * Examine the Javascript returned by https://bungie.net/sharedbundle/spasm to see how we use this data, but be warned: the rabbit hole goes pretty deep.
 */
export interface DestinyCharacterRenderComponent {
	/**
	 * Custom dyes, calculated by iterating over the character's equipped items. Useful for pre-fetching all of the dye data needed from our server.
	 */
	customDyes: DyeReference[];
	/**
	 * This is actually something that Spasm.js *doesn't* do right now, and that we don't return assets for yet. This is the data about what character customization options you picked. You can combine this with DestinyCharacterCustomizationOptionDefinition to show some cool info, and hopefully someday to actually render a user's face in 3D. We'll see if we ever end up with time for that.
	 */
	customization: DestinyCharacterCustomization;
	/**
	 * A minimal view of:
	 * - Equipped items
	 * - The rendering-related custom options on those equipped items
	 * Combined, that should be enough to render all of the items on the equipped character.
	 */
	peerView: DestinyCharacterPeerView;
}

/**
 * Raw data about the customization options chosen for a character's face and appearance.
 * You can look up the relevant class/race/gender combo in DestinyCharacterCustomizationOptionDefinition for the character, and then look up these values within the CustomizationOptions found to pull some data about their choices. Warning: not all of that data is meaningful. Some data has useful icons. Others have nothing, and are only meant for 3D rendering purposes (which we sadly do not expose yet)
 */
export interface DestinyCharacterCustomization {
	personality: number;
	face: number;
	skinColor: number;
	lipColor: number;
	eyeColor: number;
	hairColors: number[];
	featureColors: number[];
	decalColor: number;
	wearHelmet: boolean;
	hairIndex: number;
	featureIndex: number;
	decalIndex: number;
}

/**
 * A minimal view of a character's equipped items, for the purpose of rendering a summary screen or showing the character in 3D.
 */
export interface DestinyCharacterPeerView {
	equipment: DestinyItemPeerView[];
}

/**
 * Bare minimum summary information for an item, for the sake of 3D rendering the item.
 */
export interface DestinyItemPeerView {
	/**
	 * The hash identifier of the item in question. Use it to look up the DestinyInventoryItemDefinition of the item for static rendering data.
	 */
	itemHash: number;
	/**
	 * The list of dyes that have been applied to this item.
	 */
	dyes: DyeReference[];
}

export interface DictionaryComponentResponseOfint64AndDestinyCharacterRenderComponent {
	data: {[field: number]: undefined};
	privacy: ComponentPrivacySetting;
}

/**
 * This component holds activity data for a character. It will tell you about the character's current activity status, as well as activities that are available to the user.
 */
export interface DestinyCharacterActivitiesComponent {
	/**
	 * The last date that the user started playing an activity.
	 */
	dateActivityStarted: string;
	/**
	 * The list of activities that the user can play.
	 */
	availableActivities: DestinyActivity[];
	/**
	 * If the user is in an activity, this will be the hash of the Activity being played. Note that you must combine this info with currentActivityModeHash to get a real picture of what the user is doing right now. For instance, PVP "Activities" are just maps: it's the ActivityMode that determines what type of PVP game they're playing.
	 */
	currentActivityHash: number;
	/**
	 * If the user is in an activity, this will be the hash of the activity mode being played. Combine with currentActivityHash to give a person a full picture of what they're doing right now.
	 */
	currentActivityModeHash: number;
	currentActivityModeType?: number;
	currentActivityModeHashes: number[];
	currentActivityModeTypes: DestinyActivityModeType[];
	currentPlaylistActivityHash?: number;
	/**
	 * This will have the activity hash of the last completed story/campaign mission, in case you care about that.
	 */
	lastCompletedStoryHash: number;
}

/**
 * Represents the "Live" data that we can obtain about a Character's status with a specific Activity. This will tell you whether the character can participate in the activity, as well as some other basic mutable information.
 * Meant to be combined with static DestinyActivityDefinition data for a full picture of the Activity.
 */
export interface DestinyActivity {
	/**
	 * The hash identifier of the Activity. Use this to look up the DestinyActivityDefinition of the activity.
	 */
	activityHash: number;
	/**
	 * If true, then the activity should have a "new" indicator in the Director UI.
	 */
	isNew: boolean;
	/**
	 * If true, the user is allowed to lead a Fireteam into this activity.
	 */
	canLead: boolean;
	/**
	 * If true, the user is allowed to join with another Fireteam in this activity.
	 */
	canJoin: boolean;
	/**
	 * If true, we both have the ability to know that the user has completed this activity and they have completed it. Unfortunately, we can't necessarily know this for all activities. As such, this should probably only be used if you already know in advance which specific activities you wish to check.
	 */
	isCompleted: boolean;
	/**
	 * If true, the user should be able to see this activity.
	 */
	isVisible: boolean;
	/**
	 * The difficulty level of the activity, if applicable.
	 */
	displayLevel?: number;
	/**
	 * The recommended light level for the activity, if applicable.
	 */
	recommendedLight?: number;
	/**
	 * A DestinyActivityDifficultyTier enum value indicating the difficulty of the activity.
	 */
	difficultyTier: DestinyActivityDifficultyTier;
}

/**
 * An enumeration representing the potential difficulty levels of an activity. Their names are... more qualitative than quantitative.
 */
export enum DestinyActivityDifficultyTier {
	Trivial = 0,
	Easy = 1,
	Normal = 2,
	Challenging = 3,
	Hard = 4,
	Brave = 5,
	AlmostImpossible = 6,
	Impossible = 7,
}

export interface DictionaryComponentResponseOfint64AndDestinyCharacterActivitiesComponent {
	data: {[field: number]: undefined};
	privacy: ComponentPrivacySetting;
}

export interface DictionaryComponentResponseOfint64AndDestinyKiosksComponent {
	data: {[field: number]: undefined};
	privacy: ComponentPrivacySetting;
}

export interface DestinyItemComponentSetOfint64 {
	instances: undefined;
	objectives: undefined;
	perks: undefined;
	renderData: undefined;
	stats: undefined;
	sockets: undefined;
	talentGrids: undefined;
	plugStates: undefined;
}

/**
 * If an item is "instanced", this will contain information about the item's instance that doesn't fit easily into other components. One might say this is the "essential" instance data for the item.
 * Items are instanced if they require information or state that can vary. For instance, weapons are Instanced: they are given a unique identifier, uniquely generated stats, and can have their properties altered. Non-instanced items have none of these things: for instance, Glimmer has no unique properties aside from how much of it you own.
 * You can tell from an item's definition whether it will be instanced or not by looking at the DestinyInventoryItemDefinition's definition.inventory.isInstanceItem property.
 */
export interface DestinyItemInstanceComponent {
	/**
	 * If the item has a damage type, this is the item's current damage type.
	 */
	damageType: DamageType;
	/**
	 * The current damage type's hash, so you can look up localized info and icons for it.
	 */
	damageTypeHash?: number;
	/**
	 * The item stat that we consider to be "primary" for the item. For instance, this would be "Attack" for Weapons or "Defense" for armor.
	 */
	primaryStat: DestinyStat;
	/**
	 * The Item's "Level" has the most significant bearing on its stats, such as Light and Power.
	 */
	itemLevel: number;
	/**
	 * The "Quality" of the item has a lesser - but still impactful - bearing on stats like Light and Power.
	 */
	quality: number;
	/**
	 * Is the item currently equipped on the given character?
	 */
	isEquipped: boolean;
	/**
	 * If this is an equippable item, you can check it here. There are permanent as well as transitory reasons why an item might not be able to be equipped: check cannotEquipReason for details.
	 */
	canEquip: boolean;
	/**
	 * If the item cannot be equipped until you reach a certain level, that level will be reflected here.
	 */
	equipRequiredLevel: number;
	/**
	 * Sometimes, there are limitations to equipping that are represented by character-level flags called "unlocks".
	 * This is a list of flags that they need in order to equip the item that the character has not met. Use these to look up the descriptions to show in your UI by looking up the relevant DestinyUnlockDefinitions for the hashes.
	 */
	unlockHashesRequiredToEquip: number[];
	/**
	 * If you cannot equip the item, this is a flags enum that enumerates all of the reasons why you couldn't equip the item. You may need to refine your UI further by using unlockHashesRequiredToEquip and equipRequiredLevel.
	 */
	cannotEquipReason: EquipFailureReason;
}

/**
 * Represents a stat on an item *or* Character (NOT a Historical Stat, but a physical attribute stat like Attack, Defense etc...)
 */
export interface DestinyStat {
	/**
	 * The hash identifier for the Stat. Use it to look up the DestinyStatDefinition for static data about the stat.
	 */
	statHash: number;
	/**
	 * The current value of the Stat.
	 */
	value: number;
	/**
	 * The highest possible value for the stat, if we were able to compute it. (I wouldn't necessarily trust this value right now. I would like to improve its calculation in later iterations of the API. Consider this a placeholder for desired future functionality)
	 */
	maximumValue: number;
}

/**
 * The reasons why an item cannot be equipped, if any. Many flags can be set, or "None" if
 */
export enum EquipFailureReason {
	None = 0,
	ItemUnequippable = 1,
	ItemUniqueEquipRestricted = 2,
	ItemFailedUnlockCheck = 4,
	ItemFailedLevelCheck = 8,
	ItemNotOnCharacter = 16,
}

/**
 * Unlock Flags are small bits (literally, a bit, as in a boolean value) that the game server uses for an extremely wide range of state checks, progress storage, and other interesting tidbits of information.
 */
export interface DestinyUnlockDefinition {
	/**
	 * Sometimes, but not frequently, these unlock flags also have human readable information: usually when they are being directly tested for some requirement, in which case the string is a localized description of why the requirement check failed.
	 */
	displayProperties: DestinyDisplayPropertiesDefinition;
	/**
	 * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
	 * When entities refer to each other in Destiny content, it is this hash that they are referring to.
	 */
	hash: number;
	/**
	 * The index of the entity as it was found in the investment tables.
	 */
	index: number;
	/**
	 * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
	 */
	redacted: boolean;
}

export interface DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent {
	data: {[field: number]: undefined};
	privacy: ComponentPrivacySetting;
}

/**
 * Items can have objectives and progression. When you request this block, you will obtain information about any Objectives and progression tied to this item.
 */
export interface DestinyItemObjectivesComponent {
	/**
	 * If the item has a hard association with objectives, your progress on them will be defined here.
	 * Objectives are our standard way to describe a series of tasks that have to be completed for a reward.
	 */
	objectives: DestinyObjectiveProgress[];
}

export interface DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent {
	data: {[field: number]: undefined};
	privacy: ComponentPrivacySetting;
}

/**
 * Instanced items can have perks: benefits that the item bestows.
 * These are related to DestinySandboxPerkDefinition, and sometimes - but not always - have human readable info. When they do, they are the icons and text that you see in an item's tooltip.
 * Talent Grids, Sockets, and the item itself can apply Perks, which are then summarized here for your convenience.
 */
export interface DestinyItemPerksComponent {
	/**
	 * The list of perks to display in an item tooltip - and whether or not they have been activated.
	 */
	perks: DestinyPerkReference[];
}

/**
 * The list of perks to display in an item tooltip - and whether or not they have been activated.
 * Perks apply a variety of effects to a character, and are generally either intrinsic to the item or provided in activated talent nodes or sockets.
 */
export interface DestinyPerkReference {
	/**
	 * The hash identifier for the perk, which can be used to look up DestinySandboxPerkDefinition if it exists. Be warned, perks frequently do not have user-viewable information. You should examine whether you actually found a name/description in the perk's definition before you show it to the user.
	 */
	perkHash: number;
	/**
	 * The icon for the perk.
	 */
	iconPath: string;
	/**
	 * Whether this perk is currently active. (We may return perks that you have not actually activated yet: these represent perks that you should show in the item's tooltip, but that the user has not yet activated.)
	 */
	isActive: boolean;
	/**
	 * Some perks provide benefits, but aren't visible in the UI. This value will let you know if this is perk should be shown in your UI.
	 */
	visible: boolean;
}

export interface DictionaryComponentResponseOfint64AndDestinyItemPerksComponent {
	data: {[field: number]: undefined};
	privacy: ComponentPrivacySetting;
}

/**
 * Many items can be rendered in 3D. When you request this block, you will obtain the custom data needed to render this specific instance of the item.
 */
export interface DestinyItemRenderComponent {
	/**
	 * If you should use custom dyes on this item, it will be indicated here.
	 */
	useCustomDyes: boolean;
	/**
	 * A dictionary for rendering gear components, with:
	 * key = Art Arrangement Region Index
	 * value = The chosen Arrangement Index for the Region, based on the value of a stat on the item used for making the choice.
	 */
	artRegions: {[field: number]: number};
}

export interface DictionaryComponentResponseOfint64AndDestinyItemRenderComponent {
	data: {[field: number]: undefined};
	privacy: ComponentPrivacySetting;
}

/**
 * If you want the stats on an item's instanced data, get this component.
 * These are stats like Attack, Defense etc... and *not* historical stats.
 * Note that some stats have additional computation in-game at runtime - for instance, Magazine Size - and thus these stats might not be 100% accurate compared to what you see in-game for some stats. I know, it sucks. I hate it too.
 */
export interface DestinyItemStatsComponent {
	/**
	 * If the item has stats that it provides (damage, defense, etc...), it will be given here.
	 */
	stats: {[field: number]: DestinyStat};
}

export interface DictionaryComponentResponseOfint64AndDestinyItemStatsComponent {
	data: {[field: number]: undefined};
	privacy: ComponentPrivacySetting;
}

/**
 * Instanced items can have sockets, which are slots on the item where plugs can be inserted.
 * Sockets are a bit complex: be sure to examine the documentation on the DestinyInventoryItemDefinition's "socket" block and elsewhere on these objects for more details.
 */
export interface DestinyItemSocketsComponent {
	/**
	 * The list of all sockets on the item, and their status information.
	 */
	sockets: DestinyItemSocketState[];
}

/**
 * The status of a given item's socket. (which plug is inserted, if any: whether it is enabled, what "reusable" plugs can be inserted, etc...)
 */
export interface DestinyItemSocketState {
	/**
	 * The currently active plug, if any.
	 * Note that, because all plugs are statically defined, its effect on stats and perks can be statically determined using the plug item's definition. The stats and perks can be taken at face value on the plug item as the stats and perks it will provide to the user/item.
	 */
	plugHash?: number;
	/**
	 * Even if a plug is inserted, it doesn't mean it's enabled.
	 * This flag indicates whether the plug is active and providing its benefits.
	 */
	isEnabled: boolean;
	/**
	 * If a plug is inserted but not enabled, this will be populated with indexes into the plug item definition's plug.enabledRules property, so that you can show the reasons why it is not enabled.
	 */
	enableFailIndexes: number[];
	/**
	 * If the item supports reusable plugs, this is the list of plug item hashes that are currently allowed to be used for this socket. (sometimes restrictions may cause reusable plugs defined on the item definition to not be valid, so you should trust the instanced reusablePlugHashes list rather than the definition's list)
	 * A Reusable Plug is a plug that you can *always* insert into this socket, regardless of whether or not you have the plug in your inventory. In practice, a socket will *either* have reusable plugs *or* it will allow for plugs in your inventory to be inserted. See DestinyInventoryItemDefinition.socket for more info.
	 */
	reusablePlugHashes: number[];
}

export interface DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent {
	data: {[field: number]: undefined};
	privacy: ComponentPrivacySetting;
}

/**
 * Well, we're here in Destiny 2, and Talent Grids are unfortunately still around.
 * The good news is that they're pretty much only being used for certain base information on items and for Builds/Subclasses. The bad news is that they still suck. If you really want this information, grab this component.
 * An important note is that talent grids are defined as such:
 * A Grid has 1:M Nodes, which has 1:M Steps.
 * Any given node can only have a single step active at one time, which represents the actual visual contents and effects of the Node (for instance, if you see a "Super Cool Bonus" node, the actual icon and text for the node is coming from the current Step of that node).
 * Nodes can be grouped into exclusivity sets *and* as of D2, exclusivity groups (which are collections of exclusivity sets that affect each other).
 * See DestinyTalentGridDefinition for more information. Brace yourself, the water's cold out there in the deep end.
 */
export interface DestinyItemTalentGridComponent {
	/**
	 * Most items don't have useful talent grids anymore, but Builds in particular still do.
	 * You can use this hash to lookup the DestinyTalentGridDefinition attached to this item, which will be crucial for understanding the node values on the item.
	 */
	talentGridHash: number;
	/**
	 * Detailed information about the individual nodes in the talent grid.
	 * A node represents a single visual "pip" in the talent grid or Build detail view, though each node may have multiple "steps" which indicate the actual bonuses and visual representation of that node.
	 */
	nodes: DestinyTalentNode[];
	/**
	 * Indicates whether the talent grid on this item is completed, and thus whether it should have a gold border around it.
	 * Only will be true if the item actually *has* a talent grid, and only then if it is completed (i.e. every exclusive set has an activated node, and every non-exclusive set node has been activated)
	 */
	isGridComplete: boolean;
	/**
	 * If the item has a progression, it will be detailed here. A progression means that the item can gain experience. Thresholds of experience are what determines whether and when a talent node can be activated.
	 */
	gridProgression: DestinyProgression;
}

/**
 * I see you've come to find out more about Talent Nodes. I'm so sorry. Talent Nodes are the conceptual, visual nodes that appear on Talent Grids. Talent Grids, in Destiny 1, were found on almost every instanced item: they had Nodes that could be activated to change the properties of the item. In Destiny 2, Talent Grids only exist for Builds/Subclasses, and while the basic concept is the same (Nodes can be activated once you've gained sufficient Experience on the Item, and provide effects), there are some new concepts from Destiny 1. Examine DestinyTalentGridDefinition and its subordinates for more information. This is the "Live" information for the current status of a Talent Node on a specific item. Talent Nodes have many Steps, but only one can be active at any one time: and it is the Step that determines both the visual and the game state-changing properties that the Node provides. Examine this and DestinyTalentNodeStepDefinition carefully. *IMPORTANT NOTE* Talent Nodes are, unfortunately, Content Version DEPENDENT. Though they refer to hashes for Nodes and Steps, those hashes are not guaranteed to be immutable across content versions. This is a source of great exasperation for me, but as a result anyone using Talent Grid data must ensure that the content version of their static content matches that of the server responses before showing or making decisions based on talent grid data.
 */
export interface DestinyTalentNode {
	/**
	 * The index of the Talent Node being referred to (an index into DestinyTalentGridDefinition.nodes[]). CONTENT VERSION DEPENDENT.
	 */
	nodeIndex: number;
	/**
	 * The hash of the Talent Node being referred to (in DestinyTalentGridDefinition.nodes). Deceptively CONTENT VERSION DEPENDENT. We have no guarantee of the hash's immutability between content versions.
	 */
	nodeHash: number;
	/**
	 * An DestinyTalentNodeState enum value indicating the node's state: whether it can be activated or swapped, and why not if neither can be performed.
	 */
	state: DestinyTalentNodeState;
	/**
	 * If true, the node is activated: it's current step then provides its benefits.
	 */
	isActivated: boolean;
	/**
	 * The currently relevant Step for the node. It is this step that has rendering data for the node and the benefits that are provided if the node is activated. (the actual rules for benefits provided are extremely complicated in theory, but with how Talent Grids are being used in Destiny 2 you don't have to worry about a lot of those old Destiny 1 rules.) This is an index into: DestinyTalentGridDefinition.nodes[nodeIndex].steps[stepIndex]
	 */
	stepIndex: number;
	/**
	 * If the node has material requirements to be activated, this is the list of those requirements.
	 */
	materialsToUpgrade: DestinyMaterialRequirement[];
	/**
	 * The progression level required on the Talent Grid in order to be able to activate this talent node. Talent Grids have their own Progression - similar to Character Level, but in this case it is experience related to the item itself.
	 */
	activationGridLevel: number;
	/**
	 * If you want to show a progress bar or circle for how close this talent node is to being activate-able, this is the percentage to show. It follows the node's underlying rules about when the progress bar should first show up, and when it should be filled.
	 */
	progressPercent: number;
	/**
	 * Whether or not the talent node is actually visible in the game's UI. Whether you want to show it in your own UI is up to you! I'm not gonna tell you who to sock it to.
	 */
	hidden: boolean;
	/**
	 * This property has some history. A talent grid can provide stats on both the item it's related to and the character equipping the item. This returns data about those stat bonuses.
	 */
	nodeStatsBlock: DestinyTalentNodeStatBlock;
}

export enum DestinyTalentNodeState {
	Invalid = 0,
	CanUpgrade = 1,
	NoPoints = 2,
	NoPrerequisites = 3,
	NoSteps = 4,
	NoUnlock = 5,
	NoMaterial = 6,
	NoGridLevel = 7,
	SwappingLocked = 8,
	MustSwap = 9,
	Complete = 10,
	Unknown = 11,
	CreationOnly = 12,
	Hidden = 13,
}

/**
 * This property has some history. A talent grid can provide stats on both the item it's related to and the character equipping the item. This returns data about those stat bonuses.
 */
export interface DestinyTalentNodeStatBlock {
	/**
	 * The stat benefits conferred when this talent node is activated for the current Step that is active on the node.
	 */
	currentStepStats: DestinyStat[];
	/**
	 * This is a holdover from the old days of Destiny 1, when a node could be activated multiple times, conferring multiple steps worth of benefits: you would use this property to show what activating the "next" step on the node would provide vs. what the current step is providing. While Nodes are currently not being used this way, the underlying system for this functionality still exists. I hesitate to remove this property while the ability for designers to make such a talent grid still exists. Whether you want to show it is up to you.
	 */
	nextStepStats: DestinyStat[];
}

export interface DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent {
	data: {[field: number]: undefined};
	privacy: ComponentPrivacySetting;
}

/**
 * Plugs are non-instanced items that can provide Stat and Perk benefits when socketed into an instanced item. Items have Sockets, and Plugs are inserted into Sockets.
 * This component finds all items that are considered "Plugs" in your inventory, and return information about the plug aside from any specific Socket into which it could be inserted.
 */
export interface DestinyItemPlugComponent {
	/**
	 * If the plug cannot be inserted for some reason, this will have the indexes into the plug item definition's plug.insertionRules property, so you can show the reasons why it can't be inserted.
	 * This list will be empty if the plug can be inserted.
	 */
	insertFailIndexes: number[];
	/**
	 * If a plug is not enabled, this will be populated with indexes into the plug item definition's plug.enabledRules property, so that you can show the reasons why it is not enabled.
	 * This list will be empty if the plug is enabled.
	 */
	enableFailIndexes: number[];
}

export interface DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent {
	data: {[field: number]: undefined};
	privacy: ComponentPrivacySetting;
}

/**
 * The response contract for GetDestinyCharacter, with components that can be returned for character and item-level data.
 */
export interface DestinyCharacterResponse {
	/**
	 * The character-level non-equipped inventory items.
	 * COMPONENT TYPE: CharacterInventories
	 */
	inventory: SingleComponentResponseOfDestinyInventoryComponent;
	/**
	 * Base information about the character in question.
	 * COMPONENT TYPE: Characters
	 */
	character: SingleComponentResponseOfDestinyCharacterComponent;
	/**
	 * Character progression data, including Milestones.
	 * COMPONENT TYPE: CharacterProgressions
	 */
	progressions: SingleComponentResponseOfDestinyCharacterProgressionComponent;
	/**
	 * Character rendering data - a minimal set of information about equipment and dyes used for rendering.
	 * COMPONENT TYPE: CharacterRenderData
	 */
	renderData: SingleComponentResponseOfDestinyCharacterRenderComponent;
	/**
	 * Activity data - info about current activities available to the player.
	 * COMPONENT TYPE: CharacterActivities
	 */
	activities: SingleComponentResponseOfDestinyCharacterActivitiesComponent;
	/**
	 * Equipped items on the character.
	 * COMPONENT TYPE: CharacterEquipment
	 */
	equipment: SingleComponentResponseOfDestinyInventoryComponent;
	/**
	 * Items available from Kiosks that are available to this specific character.
	 * COMPONENT TYPE: Kiosks
	 */
	kiosks: SingleComponentResponseOfDestinyKiosksComponent;
	/**
	 * The set of components belonging to the player's instanced items.
	 * COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
	 */
	itemComponents: DestinyItemComponentSetOfint64;
}

export interface SingleComponentResponseOfDestinyCharacterComponent {
	data: DestinyCharacterComponent;
	privacy: ComponentPrivacySetting;
}

export interface SingleComponentResponseOfDestinyCharacterProgressionComponent {
	data: DestinyCharacterProgressionComponent;
	privacy: ComponentPrivacySetting;
}

export interface SingleComponentResponseOfDestinyCharacterRenderComponent {
	data: DestinyCharacterRenderComponent;
	privacy: ComponentPrivacySetting;
}

export interface SingleComponentResponseOfDestinyCharacterActivitiesComponent {
	data: DestinyCharacterActivitiesComponent;
	privacy: ComponentPrivacySetting;
}

/**
 * The response object for retrieving an individual instanced item. None of these components are relevant for an item that doesn't have an "itemInstanceId": for those, get your information from the DestinyInventoryDefinition.
 */
export interface DestinyItemResponse {
	/**
	 * If the item is on a character, this will return the ID of the character that is holding the item.
	 */
	characterId?: number;
	/**
	 * Common data for the item relevant to its non-instanced properties.
	 * COMPONENT TYPE: ItemCommonData
	 */
	item: SingleComponentResponseOfDestinyItemComponent;
	/**
	 * Basic instance data for the item.
	 * COMPONENT TYPE: ItemInstances
	 */
	instance: SingleComponentResponseOfDestinyItemInstanceComponent;
	/**
	 * Information specifically about the item's objectives.
	 * COMPONENT TYPE: ItemObjectives
	 */
	objectives: SingleComponentResponseOfDestinyItemObjectivesComponent;
	/**
	 * Information specifically about the perks currently active on the item.
	 * COMPONENT TYPE: ItemPerks
	 */
	perks: SingleComponentResponseOfDestinyItemPerksComponent;
	/**
	 * Information about how to render the item in 3D.
	 * COMPONENT TYPE: ItemRenderData
	 */
	renderData: SingleComponentResponseOfDestinyItemRenderComponent;
	/**
	 * Information about the computed stats of the item: power, defense, etc...
	 * COMPONENT TYPE: ItemStats
	 */
	stats: SingleComponentResponseOfDestinyItemStatsComponent;
	/**
	 * Information about the talent grid attached to the item. Talent nodes can provide a variety of benefits and abilities, and in Destiny 2 are used almost exclusively for the character's "Builds".
	 * COMPONENT TYPE: ItemTalentGrids
	 */
	talentGrid: SingleComponentResponseOfDestinyItemTalentGridComponent;
	/**
	 * Information about the sockets of the item: which are currently active, what potential sockets you could have and the stats/abilities/perks you can gain from them.
	 * COMPONENT TYPE: ItemSockets
	 */
	sockets: SingleComponentResponseOfDestinyItemSocketsComponent;
}

export interface SingleComponentResponseOfDestinyItemComponent {
	data: DestinyItemComponent;
	privacy: ComponentPrivacySetting;
}

export interface SingleComponentResponseOfDestinyItemInstanceComponent {
	data: DestinyItemInstanceComponent;
	privacy: ComponentPrivacySetting;
}

export interface SingleComponentResponseOfDestinyItemObjectivesComponent {
	data: DestinyItemObjectivesComponent;
	privacy: ComponentPrivacySetting;
}

export interface SingleComponentResponseOfDestinyItemPerksComponent {
	data: DestinyItemPerksComponent;
	privacy: ComponentPrivacySetting;
}

export interface SingleComponentResponseOfDestinyItemRenderComponent {
	data: DestinyItemRenderComponent;
	privacy: ComponentPrivacySetting;
}

export interface SingleComponentResponseOfDestinyItemStatsComponent {
	data: DestinyItemStatsComponent;
	privacy: ComponentPrivacySetting;
}

export interface SingleComponentResponseOfDestinyItemTalentGridComponent {
	data: DestinyItemTalentGridComponent;
	privacy: ComponentPrivacySetting;
}

export interface SingleComponentResponseOfDestinyItemSocketsComponent {
	data: DestinyItemSocketsComponent;
	privacy: ComponentPrivacySetting;
}

/**
 * A response containing all of the components for a vendor.
 */
export interface DestinyVendorResponse {
	/**
	 * The base properties of the vendor.
	 * COMPONENT TYPE: Vendors
	 */
	vendor: SingleComponentResponseOfDestinyVendorComponent;
	/**
	 * Categories that the vendor has available, and references to the sales therein.
	 * COMPONENT TYPE: VendorCategories
	 */
	categories: SingleComponentResponseOfDestinyVendorCategoriesComponent;
	/**
	 * Sales, keyed by the vendorItemIndex of the item being sold.
	 * COMPONENT TYPE: VendorSales
	 */
	sales: DictionaryComponentResponseOfint32AndDestinyVendorSaleItemComponent;
	/**
	 * Item components, keyed by the vendorItemIndex of the active sale items.
	 * COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
	 */
	items: DestinyItemComponentSetOfint32;
}

/**
 * This component contains essential/summary information about the vendor.
 */
export interface DestinyVendorComponent {
	/**
	 * The unique identifier for the vendor. Use it to look up their DestinyVendorDefinition.
	 */
	vendorHash: number;
	/**
	 * Long ago, we thought it would be a good idea to have special UI that showed whether or not you've seen a Vendor's inventory after cycling.
	 * For now, we don't have that UI anymore. This property still exists for historical purposes. Don't worry about it.
	 */
	ackState: AckState;
	/**
	 * The date when this vendor's inventory will next rotate/refresh.
	 */
	nextRefreshDate: string;
	/**
	 * If True, the Vendor is currently accessible.
	 * If False, they may not actually be visible in the world at the moment.
	 */
	enabled: boolean;
	/**
	 * If True, you can purchase from the Vendor.
	 * Theoretically, Vendors can be restricted from selling items. In practice, none do that (yet?).
	 */
	canPurchase: boolean;
	/**
	 * If the Vendor has a related Reputation, this is the Progression data that represents the character's Reputation level with this Vendor.
	 */
	progression: DestinyProgression;
}

export interface AckState {
	/**
	 * Indicates the related item has not been acknowledged.
	 */
	needsAck: boolean;
	/**
	 * Identifier to use when acknowledging the related item. [category]:[entityId]:[targetId]
	 */
	ackId: string;
}

export interface SingleComponentResponseOfDestinyVendorComponent {
	data: DestinyVendorComponent;
	privacy: ComponentPrivacySetting;
}

/**
 * A vendor can have many categories of items that they sell. This component will return the category information for available items, as well as the index into those items in the user's sale item list.
 * Note that, since both the category and items are indexes, this data is Content Version dependent. Be sure to check that your content is up to date before using this data. This is an unfortunate, but permanent, limitation of Vendor data.
 */
export interface DestinyVendorCategoriesComponent {
	/**
	 * The list of categories for items that the vendor sells, in rendering order.
	 */
	categories: DestinyVendorCategory[];
}

/**
 * Information about the category and items currently sold in that category.
 */
export interface DestinyVendorCategory {
	/**
	 * An index into the DestinyVendorDefinition.categories property, so you can grab the display data for this category.
	 */
	categoryIndex: number;
	/**
	 * An ordered list of indexes into items being sold in this category (DestinyVendorDefinition.itemList) which will contain more information about the items being sold themselves. Can also be used to index into DestinyVendorSaleItemComponent data, if you asked for that data to be returned.
	 */
	itemIndexes: number[];
}

export interface SingleComponentResponseOfDestinyVendorCategoriesComponent {
	data: DestinyVendorCategoriesComponent;
	privacy: ComponentPrivacySetting;
}

/**
 * Request this component if you want the details about an item being sold in relation to the character making the request: whether the character can buy it, whether they can afford it, and other data related to purchasing the item.
 * Note that if you want instance, stats, etc... data for the item, you'll have to request additional components such as ItemInstances, ItemPerks etc... and acquire them from the DestinyVendorResponse's "items" property.
 */
export interface DestinyVendorSaleItemComponent {
	/**
	 * The index into the DestinyVendorDefinition.itemList property. Note that this means Vendor data *is* Content Version dependent: make sure you have the latest content before you use Vendor data, or these indexes may mismatch.
	 * Most systems avoid this problem, but Vendors is one area where we are unable to reasonably avoid content dependency at the moment.
	 */
	vendorItemIndex: number;
	/**
	 * The hash of the item being sold, as a quick shortcut for looking up the DestinyInventoryItemDefinition of the sale item.
	 */
	itemHash: number;
	/**
	 * A flag indicating whether the requesting character can buy the item, and if not the reasons why the character can't buy it.
	 */
	saleStatus: VendorItemStatus;
	/**
	 * A summary of the current costs of the item.
	 */
	costs: DestinyItemQuantity[];
	/**
	 * If you can't buy the item due to a complex character state, these will be hashes for DestinyUnlockDefinitions that you can check to see messages regarding the failure (if the unlocks have human readable information: it is not guaranteed that Unlocks will have human readable strings, and your application will have to handle that)
	 * Prefer using failureIndexes instead. These are provided for informational purposes, but have largely been supplanted by failureIndexes.
	 */
	requiredUnlocks: number[];
	/**
	 * If any complex unlock states are checked in determining purchasability, these will be returned here along with the status of the unlock check.
	 * Prefer using failureIndexes instead. These are provided for informational purposes, but have largely been supplanted by failureIndexes.
	 */
	unlockStatuses: DestinyUnlockStatus[];
	/**
	 * Indexes in to the "failureStrings" lookup table in DestinyVendorDefinition for the given Vendor. Gives some more reliable failure information for why you can't purchase an item.
	 * It is preferred to use these over requiredUnlocks and unlockStatuses: the latter are provided mostly in case someone can do something interesting with it that I didn't anticipate.
	 */
	failureIndexes: number[];
}

export enum VendorItemStatus {
	Success = 0,
	NoInventorySpace = 1,
	NoFunds = 2,
	NoProgression = 4,
	NoUnlock = 8,
	NoQuantity = 16,
	OutsidePurchaseWindow = 32,
	NotAvailable = 64,
	UniquenessViolation = 128,
	UnknownError = 256,
	AlreadySelling = 512,
	Unsellable = 1024,
	SellingInhibited = 2048,
	AlreadyOwned = 4096,
}

/**
 * Indicates the status of an "Unlock Flag" on a Character or Profile.
 * These are individual bits of state that can be either set or not set, and sometimes provide interesting human-readable information in their related DestinyUnlockDefinition.
 */
export interface DestinyUnlockStatus {
	/**
	 * The hash identifier for the Unlock Flag. Use to lookup DestinyUnlockDefinition for static data. Not all unlocks have human readable data - in fact, most don't. But when they do, it can be very useful to show. Even if they don't have human readable data, you might be able to infer the meaning of an unlock flag with a bit of experimentation...
	 */
	unlockHash: number;
	/**
	 * Whether the unlock flag is set.
	 */
	isSet: boolean;
}

export interface DictionaryComponentResponseOfint32AndDestinyVendorSaleItemComponent {
	data: {[field: number]: undefined};
	privacy: ComponentPrivacySetting;
}

export interface DestinyItemComponentSetOfint32 {
	instances: undefined;
	objectives: undefined;
	perks: undefined;
	renderData: undefined;
	stats: undefined;
	sockets: undefined;
	talentGrids: undefined;
	plugStates: undefined;
}

export interface DictionaryComponentResponseOfint32AndDestinyItemInstanceComponent {
	data: {[field: number]: undefined};
	privacy: ComponentPrivacySetting;
}

export interface DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent {
	data: {[field: number]: undefined};
	privacy: ComponentPrivacySetting;
}

export interface DictionaryComponentResponseOfint32AndDestinyItemPerksComponent {
	data: {[field: number]: undefined};
	privacy: ComponentPrivacySetting;
}

export interface DictionaryComponentResponseOfint32AndDestinyItemRenderComponent {
	data: {[field: number]: undefined};
	privacy: ComponentPrivacySetting;
}

export interface DictionaryComponentResponseOfint32AndDestinyItemStatsComponent {
	data: {[field: number]: undefined};
	privacy: ComponentPrivacySetting;
}

export interface DictionaryComponentResponseOfint32AndDestinyItemSocketsComponent {
	data: {[field: number]: undefined};
	privacy: ComponentPrivacySetting;
}

export interface DictionaryComponentResponseOfint32AndDestinyItemTalentGridComponent {
	data: {[field: number]: undefined};
	privacy: ComponentPrivacySetting;
}

export interface DestinyActionRequest {
	membershipType: BungieMembershipType;
}

export interface DestinyCharacterActionRequest {
	characterId: number;
	membershipType: BungieMembershipType;
}

export interface DestinyItemActionRequest {
	itemId: number;
	characterId: number;
	membershipType: BungieMembershipType;
}

export interface DestinyItemTransferRequest {
	itemReferenceHash: number;
	stackSize: number;
	transferToVault: boolean;
	itemId: number;
	characterId: number;
	membershipType: BungieMembershipType;
}

/**
 * The results of a bulk Equipping operation performed through the Destiny API.
 */
export interface DestinyEquipItemResults {
	equipResults: DestinyEquipItemResult[];
}

/**
 * The results of an Equipping operation performed through the Destiny API.
 */
export interface DestinyEquipItemResult {
	/**
	 * The instance ID of the item in question (all items that can be equipped must, but definition, be Instanced and thus have an Instance ID that you can use to refer to them)
	 */
	itemInstanceId: number;
	/**
	 * A PlatformErrorCodes enum indicating whether it succeeded, and if it failed why.
	 */
	equipStatus: PlatformErrorCodes;
}

export interface DestinyItemSetActionRequest {
	itemIds: number[];
	characterId: number;
	membershipType: BungieMembershipType;
}

export interface DestinyItemStateRequest {
	state: boolean;
	itemId: number;
	characterId: number;
	membershipType: BungieMembershipType;
}

export interface DestinyPostGameCarnageReportData {
	/**
	 * Date and time for the activity.
	 */
	period: string;
	/**
	 * Details about the activity.
	 */
	activityDetails: DestinyHistoricalStatsActivity;
	/**
	 * Collection of players and their data for this activity.
	 */
	entries: DestinyPostGameCarnageReportEntry[];
	/**
	 * Collection of stats for the player in this activity.
	 */
	teams: DestinyPostGameCarnageReportTeamEntry[];
}

export interface DestinyHistoricalStatsActivity {
	/**
	 * Hash ID that can be looked up in the DestinyActivityTable.
	 */
	referenceId: number;
	directorActivityHash: number;
	/**
	 * This value can be used to get additional data about this activity such as who else was playing.
	 */
	instanceId: number;
	/**
	 * Indicates the game mode of the activity.
	 */
	mode: DestinyActivityModeType;
	modes: DestinyActivityModeType[];
	/**
	 * Whether or not the match was a private match.
	 */
	isPrivate: boolean;
}

export interface DestinyPostGameCarnageReportEntry {
	/**
	 * Standing of the player
	 */
	standing: number;
	/**
	 * Score of the player if available
	 */
	score: DestinyHistoricalStatsValue;
	/**
	 * Identity details of the player
	 */
	player: DestinyPlayer;
	/**
	 * ID of the player's character used in the activity.
	 */
	characterId: number;
	/**
	 * Collection of stats for the player in this activity.
	 */
	values: {[field: string]: DestinyHistoricalStatsValue};
	/**
	 * Extended data extracted from the activity blob.
	 */
	extended: DestinyPostGameCarnageReportExtendedData;
}

export interface DestinyHistoricalStatsValue {
	/**
	 * Unique ID for this stat
	 */
	statId: string;
	/**
	 * Basic stat value.
	 */
	basic: DestinyHistoricalStatsValuePair;
	/**
	 * Per game average for the statistic, if applicable
	 */
	pga: DestinyHistoricalStatsValuePair;
	/**
	 * Weighted value of the stat if a weight greater than 1 has been assigned.
	 */
	weighted: DestinyHistoricalStatsValuePair;
}

export interface DestinyHistoricalStatsValuePair {
	/**
	 * Raw value of the statistic
	 */
	value: number;
	/**
	 * Localized formated version of the value.
	 */
	displayValue: string;
}

export interface DestinyPlayer {
	/**
	 * Details about the player as they are known in game (platform display name, Destiny emblem)
	 */
	destinyUserInfo: UserInfoCard;
	/**
	 * Class of the character if applicable and available.
	 */
	characterClass: string;
	/**
	 * Level of the character if available. Zero if it is not available.
	 */
	characterLevel: number;
	/**
	 * Light Level of the character if available. Zero if it is not available.
	 */
	lightLevel: number;
	/**
	 * Details about the player as they are known on BungieNet. This will be undefined if the player has marked their credential private, or does not have a BungieNet account.
	 */
	bungieNetUserInfo: UserInfoCard;
	/**
	 * Current clan name for the player. This value may be null or an empty string if the user does not have a clan.
	 */
	clanName: string;
	/**
	 * Current clan tag for the player. This value may be null or an empty string if the user does not have a clan.
	 */
	clanTag: string;
}

export interface DestinyPostGameCarnageReportExtendedData {
	/**
	 * List of weapons and their perspective values.
	 */
	weapons: DestinyHistoricalWeaponStats[];
	/**
	 * Collection of stats for the player in this activity.
	 */
	values: {[field: string]: DestinyHistoricalStatsValue};
}

export interface DestinyHistoricalWeaponStats {
	/**
	 * The hash ID of the item definition that describes the weapon.
	 */
	referenceId: number;
	/**
	 * Collection of stats for the period.
	 */
	values: {[field: string]: DestinyHistoricalStatsValue};
}

export interface DestinyPostGameCarnageReportTeamEntry {
	/**
	 * Integer ID for the team.
	 */
	teamId: number;
	/**
	 * Team's standing relative to other teams.
	 */
	standing: DestinyHistoricalStatsValue;
	/**
	 * Score earned by the team
	 */
	score: DestinyHistoricalStatsValue;
	/**
	 * Alpha or Bravo
	 */
	teamName: string;
}

export interface DestinyHistoricalStatsDefinition {
	/**
	 * Unique programmer friendly ID for this stat
	 */
	statId: string;
	/**
	 * Statistic group
	 */
	group: DestinyStatsGroupType;
	/**
	 * Time periods the statistic covers
	 */
	periodTypes: PeriodType[];
	/**
	 * Game modes where this statistic can be reported.
	 */
	modes: DestinyActivityModeType[];
	/**
	 * Category for the stat.
	 */
	category: DestinyStatsCategoryType;
	/**
	 * Display name
	 */
	statName: string;
	/**
	 * Description of a stat if applicable.
	 */
	statDescription: string;
	/**
	 * Unit, if any, for the statistic
	 */
	unitType: UnitType;
	/**
	 * Optional URI to an icon for the statistic
	 */
	iconImage: string;
	/**
	 * Optional icon for the statistic
	 */
	mergeMethod?: number;
	/**
	 * Localized Unit Name for the stat.
	 */
	unitLabel: string;
	/**
	 * Weight assigned to this stat indicating its relative impressiveness.
	 */
	weight: number;
	/**
	 * The tier associated with this medal - be it implicitly or explicitly.
	 */
	medalTierHash?: number;
}

export enum DestinyStatsGroupType {
	None = 0,
	General = 1,
	Weapons = 2,
	Medals = 3,
	ReservedGroups = 100,
	Leaderboard = 101,
	Activity = 102,
	UniqueWeapon = 103,
	Internal = 104,
}

export enum DestinyStatsCategoryType {
	None = 0,
	Kills = 1,
	Assists = 2,
	Deaths = 3,
	Criticals = 4,
	KDa = 5,
	KD = 6,
	Score = 7,
	Entered = 8,
	TimePlayed = 9,
	MedalWins = 10,
	MedalGame = 11,
	MedalSpecialKills = 12,
	MedalSprees = 13,
	MedalMultiKills = 14,
	MedalAbilities = 15,
}

export enum UnitType {
	None = 0,
	Count = 1,
	PerGame = 2,
	Seconds = 3,
	Points = 4,
	Team = 5,
	Distance = 6,
	Percent = 7,
	Ratio = 8,
	Boolean = 9,
	WeaponType = 10,
	Standing = 11,
	Milliseconds = 12,
}

export enum DestinyStatsMergeMethod {
	Add = 0,
	Min = 1,
	Max = 2,
}

export interface DestinyLeaderboard {
	statId: string;
	entries: DestinyLeaderboardEntry[];
}

export interface DestinyLeaderboardEntry {
	/**
	 * Where this player ranks on the leaderboard. A value of 1 is the top rank.
	 */
	rank: number;
	/**
	 * Identity details of the player
	 */
	player: DestinyPlayer;
	/**
	 * ID of the player's best character for the reported stat.
	 */
	characterId: number;
	/**
	 * Value of the stat for this player
	 */
	value: DestinyHistoricalStatsValue;
}

export interface DestinyLeaderboardResults {
	/**
	 * Indicate the membership ID of the account that is the focal point of the provided leaderboards.
	 */
	focusMembershipId?: number;
	/**
	 * Indicate the character ID of the character that is the focal point of the provided leaderboards. May be null, in which case any character from the focus membership can appear in the provided leaderboards.
	 */
	focusCharacterId?: number;
}

export interface DestinyClanAggregateStat {
	/**
	 * The id of the mode of stats (allPvp, allPvE, etc)
	 */
	mode: DestinyActivityModeType;
	/**
	 * The id of the stat
	 */
	statId: string;
	/**
	 * Value of the stat for this player
	 */
	value: DestinyHistoricalStatsValue;
}

/**
 * The results of a search for Destiny content. This will be improved on over time, I've been doing some experimenting to see what might be useful.
 */
export interface DestinyEntitySearchResult {
	/**
	 * A list of suggested words that might make for better search results, based on the text searched for.
	 */
	suggestedWords: string[];
	/**
	 * The items found that are matches/near matches for the searched-for term, sorted by something vaguely resembling "relevance". Hopefully this will get better in the future.
	 */
	results: SearchResultOfDestinyEntitySearchResultItem;
}

/**
 * An individual Destiny Entity returned from the entity search.
 */
export interface DestinyEntitySearchResultItem {
	/**
	 * The hash identifier of the entity. You will use this to look up the DestinyDefinition relevant for the entity found.
	 */
	hash: number;
	/**
	 * The type of entity, returned as a string matching the DestinyDefinition's contract class name. You'll have to have your own mapping from class names to actually looking up those definitions in the manifest databases.
	 */
	entityType: string;
	/**
	 * Basic display properties on the entity, so you don't have to look up the definition to show basic results for the item.
	 */
	displayProperties: DestinyDisplayPropertiesDefinition;
	/**
	 * The ranking value for sorting that we calculated using our relevance formula. This will hopefully get better with time and iteration.
	 */
	weight: number;
}

export interface SearchResultOfDestinyEntitySearchResultItem {
	results: DestinyEntitySearchResultItem[];
	totalResults: number;
	hasMore: boolean;
	query: PagedQuery;
	replacementContinuationToken: string;
	/**
	 * If useTotalResults is true, then totalResults represents an accurate count.
	 * If False, it does not, and may be estimated/only the size of the current page.
	 * Either way, you should probably always only trust hasMore.
	 * This is a long-held historical throwback to when we used to do paging with known total results. Those queries toasted our database, and we were left to hastily alter our endpoints and create backward- compatible shims, of which useTotalResults is one.
	 */
	useTotalResults: boolean;
}

export enum PeriodType {
	None = 0,
	Daily = 1,
	AllTime = 2,
	Activity = 3,
}

export interface DestinyHistoricalStatsByPeriod {
	allTime: {[field: string]: DestinyHistoricalStatsValue};
	allTimeTier1: {[field: string]: DestinyHistoricalStatsValue};
	allTimeTier2: {[field: string]: DestinyHistoricalStatsValue};
	allTimeTier3: {[field: string]: DestinyHistoricalStatsValue};
	daily: DestinyHistoricalStatsPeriodGroup[];
	monthly: DestinyHistoricalStatsPeriodGroup[];
}

export interface DestinyHistoricalStatsPeriodGroup {
	/**
	 * Period for the group. If the stat periodType is day, then this will have a specific day. If the type is monthly, then this value will be the first day of the applicable month. This value is not set when the periodType is 'all time'.
	 */
	period: string;
	/**
	 * If the period group is for a specific activity, this property will be set.
	 */
	activityDetails: DestinyHistoricalStatsActivity;
	/**
	 * Collection of stats for the period.
	 */
	values: {[field: string]: DestinyHistoricalStatsValue};
}

export interface DestinyHistoricalStatsAccountResult {
	mergedDeletedCharacters: DestinyHistoricalStatsWithMerged;
	mergedAllCharacters: DestinyHistoricalStatsWithMerged;
	characters: DestinyHistoricalStatsPerCharacter[];
}

export interface DestinyHistoricalStatsWithMerged {
	results: {[field: string]: DestinyHistoricalStatsByPeriod};
	merged: DestinyHistoricalStatsByPeriod;
}

export interface DestinyHistoricalStatsPerCharacter {
	characterId: number;
	deleted: boolean;
	results: {[field: string]: DestinyHistoricalStatsByPeriod};
	merged: DestinyHistoricalStatsByPeriod;
}

export interface DestinyActivityHistoryResults {
	/**
	 * List of activities, the most recent activity first.
	 */
	activities: DestinyHistoricalStatsPeriodGroup[];
}

export interface DestinyHistoricalWeaponStatsData {
	/**
	 * List of weapons and their perspective values.
	 */
	weapons: DestinyHistoricalWeaponStats[];
}

export interface DestinyAggregateActivityResults {
	/**
	 * List of all activities the player has participated in.
	 */
	activities: DestinyAggregateActivityStats[];
}

export interface DestinyAggregateActivityStats {
	/**
	 * Hash ID that can be looked up in the DestinyActivityTable.
	 */
	activityHash: number;
	/**
	 * Collection of stats for the player in this activity.
	 */
	values: {[field: string]: DestinyHistoricalStatsValue};
}

/**
 * Represents localized, extended content related to Milestones. This is intentionally returned by a separate endpoint and not with Character-level Milestone data because we do not put localized data into standard Destiny responses, both for brevity of response and for caching purposes. If you really need this data, hit the Milestone Content endpoint.
 */
export interface DestinyMilestoneContent {
	/**
	 * The "About this Milestone" text from the Firehose.
	 */
	about: string;
	/**
	 * The Current Status of the Milestone, as driven by the Firehose.
	 */
	status: string;
	/**
	 * A list of tips, provided by the Firehose.
	 */
	tips: string[];
	/**
	 * If DPS has defined items related to this Milestone, they can categorize those items in the Firehose. That data will then be returned as item categories here.
	 */
	itemCategories: DestinyMilestoneContentItemCategory[];
}

/**
 * Part of our dynamic, localized Milestone content is arbitrary categories of items. These are built in our content management system, and thus aren't the same as programmatically generated rewards.
 */
export interface DestinyMilestoneContentItemCategory {
	title: string;
	itemHashes: number[];
}

/**
 * Information about milestones, presented in a character state-agnostic manner. Combine this data with DestinyMilestoneDefinition to get a full picture of the milestone, which is basically a checklist of things to do in the game. Think of this as GetPublicAdvisors 3.0, for those who used the Destiny 1 API.
 */
export interface DestinyPublicMilestone {
	/**
	 * The hash identifier for the milestone. Use it to look up the DestinyMilestoneDefinition for static data about the Milestone.
	 */
	milestoneHash: number;
	/**
	 * A milestone not need have even a single quest, but if there are active quests they will be returned here.
	 */
	availableQuests: DestinyPublicMilestoneQuest[];
	/**
	 * Sometimes milestones - or activities active in milestones - will have relevant vendors. These are the vendors that are currently relevant.
	 */
	vendorHashes: number[];
	/**
	 * If known, this is the date when the Milestone started/became active.
	 */
	startDate?: string;
	/**
	 * If known, this is the date when the Milestone will expire/recycle/end.
	 */
	endDate?: string;
}

export interface DestinyPublicMilestoneQuest {
	/**
	 * Quests are defined as Items in content. As such, this is the hash identifier of the DestinyInventoryItemDefinition that represents this quest. It will have pointers to all of the steps in the quest, and display information for the quest (title, description, icon etc) Individual steps will be referred to in the Quest item's DestinyInventoryItemDefinition.setData property, and themselves are Items with their own renderable data.
	 */
	questItemHash: number;
	/**
	 * A milestone need not have an active activity, but if there is one it will be returned here, along with any variant and additional information.
	 */
	activity: DestinyPublicMilestoneActivity;
	/**
	 * For the given quest there could be 0-to-Many challenges: mini quests that you can perform in the course of doing this quest, that may grant you rewards and benefits.
	 */
	challenges: DestinyPublicMilestoneChallenge[];
}

/**
 * A milestone may have one or more conceptual Activities associated with it, and each of those conceptual activities could have a variety of variants, modes, tiers, what-have-you. Our attempts to determine what qualifies as a conceptual activity are, unfortunately, janky. So if you see missing modes or modes that don't seem appropriate to you, let us know and I'll buy you a beer if we ever meet up in person.
 */
export interface DestinyPublicMilestoneActivity {
	/**
	 * The hash identifier of the activity that's been chosen to be considered the canonical "conceptual" activity definition. This may have many variants, defined herein.
	 */
	activityHash: number;
	/**
	 * The activity may have 0-to-many modifiers: if it does, this will contain the hashes to the DestinyActivityModifierDefinition that defines the modifier being applied.
	 */
	modifierHashes: number[];
	/**
	 * Every relevant variation of this conceptual activity, including the conceptual activity itself, have variants defined here.
	 */
	variants: DestinyPublicMilestoneActivityVariant[];
}

/**
 * Represents a variant of an activity that's relevant to a milestone.
 */
export interface DestinyPublicMilestoneActivityVariant {
	/**
	 * The hash identifier of this activity variant. Examine the activity's definition in the Manifest database to determine what makes it a distinct variant. Usually it will be difficulty level or whether or not it is a guided game variant of the activity, but theoretically it could be distinguished in any arbitrary way.
	 */
	activityHash: number;
}

/**
 * A Milestone can have many Challenges. Challenges are just extra Objectives that provide a fun way to mix-up play and provide extra rewards.
 */
export interface DestinyPublicMilestoneChallenge {
	/**
	 * The objective for the Challenge, which should have human-readable data about what needs to be done to accomplish the objective. Use this hash to look up the DestinyObjectiveDefinition.
	 */
	objectiveHash: number;
	/**
	 * IF the Objective is related to a specific Activity, this will be that activity's hash. Use it to look up the DestinyActivityDefinition for additional data to show.
	 */
	activityHash?: number;
}

export enum CommunityContentSortMode {
	Trending = 0,
	Latest = 1,
	HighestRated = 2,
}

export enum CommunityStatusSort {
	Viewers = 0,
	Trending = 1,
	OverallViewers = 2,
	Followers = 3,
}

export interface CommunityLiveStatus {
	dateStatusUpdated: string;
	url: string;
	partnershipIdentifier: string;
	partnershipType: PartnershipType;
	thumbnail: string;
	thumbnailSmall: string;
	thumbnailLarge: string;
	destinyCharacterId: number;
	userInfo: UserInfoCard;
	currentActivityHash: number;
	dateLastPlayed: string;
	dateStreamStarted: string;
	locale: string;
	currentViewers: number;
	followers: number;
	overallViewers: number;
	isFeatured: boolean;
	title: string;
	activityModeHash: number;
	dateFeatured?: string;
	trendingValue: number;
	isSubscribable: boolean;
}

export interface SearchResultOfCommunityLiveStatus {
	results: CommunityLiveStatus[];
	totalResults: number;
	hasMore: boolean;
	query: PagedQuery;
	replacementContinuationToken: string;
	/**
	 * If useTotalResults is true, then totalResults represents an accurate count.
	 * If False, it does not, and may be estimated/only the size of the current page.
	 * Either way, you should probably always only trust hasMore.
	 * This is a long-held historical throwback to when we used to do paging with known total results. Those queries toasted our database, and we were left to hastily alter our endpoints and create backward- compatible shims, of which useTotalResults is one.
	 */
	useTotalResults: boolean;
}

export interface TrendingCategories {
	categories: TrendingCategory[];
}

export interface TrendingCategory {
	categoryName: string;
	entries: SearchResultOfTrendingEntry;
	categoryId: string;
}

/**
 * The list entry view for trending items. Returns just enough to show the item on the trending page.
 */
export interface TrendingEntry {
	/**
	 * The weighted score of this trending item.
	 */
	weight: number;
	isFeatured: boolean;
	/**
	 * We don't know whether the identifier will be a string, a uint, or a long... so we're going to cast it all to a string. But either way, we need any trending item created to have a single unique identifier for its type.
	 */
	identifier: string;
	/**
	 * An enum - unfortunately - dictating all of the possible kinds of trending items that you might get in your result set, in case you want to do custom rendering or call to get the details of the item.
	 */
	entityType: TrendingEntryType;
	/**
	 * The localized "display name/article title/'primary localized identifier'" of the entity.
	 */
	displayName: string;
	/**
	 * If the entity has a localized tagline/subtitle/motto/whatever, that is found here.
	 */
	tagline: string;
	image: string;
	startDate?: string;
	endDate?: string;
	link: string;
	/**
	 * If this is populated, the entry has a related WebM video to show. I am 100% certain I am going to regret putting this directly on TrendingEntry, but it will work so yolo
	 */
	webmVideo: string;
	/**
	 * If this is populated, the entry has a related MP4 video to show. I am 100% certain I am going to regret putting this directly on TrendingEntry, but it will work so yolo
	 */
	mp4Video: string;
	/**
	 * If isFeatured, this image will be populated with whatever the featured image is. Note that this will likely be a very large image, so don't use it all the time.
	 */
	featureImage: string;
}

/**
 * The known entity types that you can have returned from Trending.
 */
export enum TrendingEntryType {
	News = 0,
	DestinyItem = 1,
	DestinyActivity = 2,
	DestinyRitual = 3,
	SupportArticle = 4,
	Creation = 5,
	Stream = 6,
	Update = 7,
	Link = 8,
	ForumTag = 9,
}

export interface SearchResultOfTrendingEntry {
	results: TrendingEntry[];
	totalResults: number;
	hasMore: boolean;
	query: PagedQuery;
	replacementContinuationToken: string;
	/**
	 * If useTotalResults is true, then totalResults represents an accurate count.
	 * If False, it does not, and may be estimated/only the size of the current page.
	 * Either way, you should probably always only trust hasMore.
	 * This is a long-held historical throwback to when we used to do paging with known total results. Those queries toasted our database, and we were left to hastily alter our endpoints and create backward- compatible shims, of which useTotalResults is one.
	 */
	useTotalResults: boolean;
}

export interface TrendingDetail {
	identifier: string;
	entityType: TrendingEntryType;
	news: TrendingEntryNews;
	support: TrendingEntrySupportArticle;
	destinyItem: TrendingEntryDestinyItem;
	destinyActivity: TrendingEntryDestinyActivity;
	destinyRitual: TrendingEntryDestinyRitual;
	creation: TrendingEntryCommunityCreation;
	stream: TrendingEntryCommunityStream;
}

export interface TrendingEntryNews {
	article: ContentItemPublicContract;
}

export interface ContentItemPublicContract {
	contentId: number;
	cType: string;
	cmsPath: string;
	creationDate: string;
	modifyDate: string;
	allowComments: boolean;
	hasAgeGate: boolean;
	minimumAge: number;
	ratingImagePath: string;
	author: GeneralUser;
	autoEnglishPropertyFallback: boolean;
	/**
	 * Firehose content is really a collection of metadata and "properties", which are the potentially-but-not-strictly localizable data that comprises the meat of whatever content is being shown.
	 * As Cole Porter would have crooned, "Anything Goes" with Firehose properties. They are most often strings, but they can theoretically be anything. They are JSON encoded, and could be JSON structures, simple strings, numbers etc... The Content Type of the item (cType) will describe the properties, and thus how they ought to be deserialized.
	 */
	properties: {[field: string]: any};
	representations: ContentRepresentation[];
	tags: string[];
	commentSummary: CommentSummary;
}

export interface ContentRepresentation {
	name: string;
	path: string;
	validationString: string;
}

export interface CommentSummary {
	topicId: number;
	commentCount: number;
}

export interface TrendingEntrySupportArticle {
	article: ContentItemPublicContract;
}

export interface TrendingEntryDestinyItem {
	itemHash: number;
}

export interface TrendingEntryDestinyActivity {
	activityHash: number;
	status: DestinyPublicActivityStatus;
}

/**
 * Represents the public-facing status of an activity: any data about what is currently active in the Activity, regardless of an individual character's progress in it.
 */
export interface DestinyPublicActivityStatus {
	/**
	 * Active Challenges for the activity, if any - represented as hashes for DestinyObjectiveDefinitions.
	 */
	challengeObjectiveHashes: number[];
	/**
	 * The active modifiers on this activity, if any - represented as hashes for DestinyActivityModifierDefinitions.
	 */
	modifierHashes: number[];
	/**
	 * If the activity itself provides any specific "mock" rewards, this will be the items and their quantity.
	 * Why "mock", you ask? Because these are the rewards as they are represented in the tooltip of the Activity.
	 * These are often pointers to fake items that look good in a tooltip, but represent an abstract concept of what you will get for a reward rather than the specific items you may obtain.
	 */
	rewardTooltipItems: DestinyItemQuantity[];
}

export interface TrendingEntryDestinyRitual {
	image: string;
	icon: string;
	title: string;
	subtitle: string;
	dateStart?: string;
	dateEnd?: string;
	/**
	 * A destiny event does not necessarily have a related Milestone, but if it does the details will be returned here.
	 */
	milestoneDetails: DestinyPublicMilestone;
	/**
	 * A destiny event will not necessarily have milestone "custom content", but if it does the details will be here.
	 */
	eventContent: DestinyMilestoneContent;
}

export interface TrendingEntryCommunityCreation {
	media: string;
	title: string;
	author: string;
	authorMembershipId: number;
	postId: number;
	body: string;
	upvotes: number;
}

export interface TrendingEntryCommunityStream {
	image: string;
	title: string;
	partnershipIdentifier: string;
	partnershipType: PartnershipType;
}
