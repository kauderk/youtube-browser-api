export interface PlayerResponse {
	responseContext: ResponseContext
	playabilityStatus: PlayabilityStatus
	streamingData: StreamingData
	playerAds?: PlayerAdsEntity[] | null
	playbackTracking: PlaybackTracking
	captions: Captions
	videoDetails: VideoDetails
	annotations?: AnnotationsEntity[] | null
	playerConfig: PlayerConfig
	storyboards: Storyboards
	microformat: Microformat
	cards: Cards
	trackingParams: string
	attestation: Attestation
	messages?: MessagesEntity[] | null
	endscreen: Endscreen
	adPlacements?: AdPlacementsEntity[] | null
	frameworkUpdates: FrameworkUpdates
}
export interface ResponseContext {
	serviceTrackingParams?: ServiceTrackingParamsEntity[] | null
	mainAppWebResponseContext: MainAppWebResponseContext
	webResponseContextExtensionData: WebResponseContextExtensionData
}
export interface ServiceTrackingParamsEntity {
	service: string
	params?: ParamsEntity[] | null
}
export interface ParamsEntity {
	key: string
	value: string
}
export interface MainAppWebResponseContext {
	loggedOut: boolean
}
export interface WebResponseContextExtensionData {
	hasDecorated: boolean
}
export interface PlayabilityStatus {
	status: string
	playableInEmbed: boolean
	miniplayer: Miniplayer
	contextParams: string
}
export interface Miniplayer {
	miniplayerRenderer: MiniplayerRenderer
}
export interface MiniplayerRenderer {
	playbackMode: string
}
export interface StreamingData {
	expiresInSeconds: string
	formats?: FormatsEntity[] | null
	adaptiveFormats?: AdaptiveFormatsEntity[] | null
}
export interface FormatsEntity {
	itag: number
	url: string
	mimeType: string
	bitrate: number
	width: number
	height: number
	lastModified: string
	quality: string
	fps: number
	qualityLabel: string
	projectionType: string
	audioQuality: string
	approxDurationMs: string
	audioSampleRate: string
	audioChannels: number
}
export interface AdaptiveFormatsEntity {
	itag: number
	url: string
	mimeType: string
	bitrate: number
	width?: number | null
	height?: number | null
	initRange: InitRangeOrIndexRange
	indexRange: InitRangeOrIndexRange
	lastModified: string
	contentLength: string
	quality: string
	fps?: number | null
	qualityLabel?: string | null
	projectionType: string
	averageBitrate: number
	colorInfo?: ColorInfo | null
	approxDurationMs: string
	highReplication?: boolean | null
	audioQuality?: string | null
	audioSampleRate?: string | null
	audioChannels?: number | null
	loudnessDb?: number | null
}
export interface InitRangeOrIndexRange {
	start: string
	end: string
}
export interface ColorInfo {
	primaries: string
	transferCharacteristics: string
	matrixCoefficients: string
}
export interface PlayerAdsEntity {
	playerLegacyDesktopWatchAdsRenderer: PlayerLegacyDesktopWatchAdsRenderer
}
export interface PlayerLegacyDesktopWatchAdsRenderer {
	playerAdParams: PlayerAdParams
	gutParams: GutParams
	showCompanion: boolean
	showInstream: boolean
	useGut: boolean
}
export interface PlayerAdParams {
	showContentThumbnail: boolean
	enabledEngageTypes: string
}
export interface GutParams {
	tag: string
}
export interface PlaybackTracking {
	videostatsPlaybackUrl: VideostatsPlaybackUrlOrVideostatsDelayplayUrlOrVideostatsWatchtimeUrlOrPtrackingUrlOrQoeUrl
	videostatsDelayplayUrl: VideostatsPlaybackUrlOrVideostatsDelayplayUrlOrVideostatsWatchtimeUrlOrPtrackingUrlOrQoeUrl
	videostatsWatchtimeUrl: VideostatsPlaybackUrlOrVideostatsDelayplayUrlOrVideostatsWatchtimeUrlOrPtrackingUrlOrQoeUrl
	ptrackingUrl: VideostatsPlaybackUrlOrVideostatsDelayplayUrlOrVideostatsWatchtimeUrlOrPtrackingUrlOrQoeUrl
	qoeUrl: VideostatsPlaybackUrlOrVideostatsDelayplayUrlOrVideostatsWatchtimeUrlOrPtrackingUrlOrQoeUrl
	atrUrl: AtrUrlOrYoutubeRemarketingUrlOrGoogleRemarketingUrl
	videostatsScheduledFlushWalltimeSeconds?: number[] | null
	videostatsDefaultFlushIntervalSeconds: number
	youtubeRemarketingUrl: AtrUrlOrYoutubeRemarketingUrlOrGoogleRemarketingUrl
	googleRemarketingUrl: AtrUrlOrYoutubeRemarketingUrlOrGoogleRemarketingUrl
}
export interface VideostatsPlaybackUrlOrVideostatsDelayplayUrlOrVideostatsWatchtimeUrlOrPtrackingUrlOrQoeUrl {
	baseUrl: string
}
export interface AtrUrlOrYoutubeRemarketingUrlOrGoogleRemarketingUrl {
	baseUrl: string
	elapsedMediaTimeSeconds: number
}
export interface Captions {
	playerCaptionsTracklistRenderer: PlayerCaptionsTracklistRenderer
}
export interface PlayerCaptionsTracklistRenderer {
	captionTracks?: CaptionTracksEntity[] | null
	audioTracks?: AudioTracksEntity[] | null
	translationLanguages?: TranslationLanguagesEntity[] | null
	defaultAudioTrackIndex: number
}
export interface CaptionTracksEntity {
	baseUrl: string
	name: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismiss
	vssId: string
	languageCode: string
	kind: string
	isTranslatable: boolean
}
export interface NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismiss {
	simpleText: string
}
export interface AudioTracksEntity {
	captionTrackIndices?: number[] | null
}
export interface TranslationLanguagesEntity {
	languageCode: string
	languageName: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismiss
}
export interface VideoDetails {
	videoId: string
	title: string
	lengthSeconds: string
	keywords?: string[] | null
	channelId: string
	isOwnerViewing: boolean
	shortDescription: string
	isCrawlable: boolean
	thumbnail: ThumbnailOrWatermarkOrIconOrImage
	allowRatings: boolean
	viewCount: string
	author: string
	isPrivate: boolean
	isUnpluggedCorpus: boolean
	isLiveContent: boolean
}
export interface ThumbnailOrWatermarkOrIconOrImage {
	thumbnails?: ThumbnailsEntity[] | null
}
export interface ThumbnailsEntity {
	url: string
	width: number
	height: number
}
export interface AnnotationsEntity {
	playerAnnotationsExpandedRenderer: PlayerAnnotationsExpandedRenderer
}
export interface PlayerAnnotationsExpandedRenderer {
	featuredChannel: FeaturedChannel
	allowSwipeDismiss: boolean
	annotationId: string
}
export interface FeaturedChannel {
	startTimeMs: string
	endTimeMs: string
	watermark: ThumbnailOrWatermarkOrIconOrImage
	trackingParams: string
	navigationEndpoint: NavigationEndpointOrEndpoint
	channelName: string
	subscribeButton: SubscribeButtonOrHovercardButton
}
export interface NavigationEndpointOrEndpoint {
	clickTrackingParams: string
	commandMetadata: CommandMetadata
	browseEndpoint: BrowseEndpoint
}
export interface CommandMetadata {
	webCommandMetadata: WebCommandMetadata
}
export interface WebCommandMetadata {
	url: string
	webPageType: string
	rootVe: number
	apiUrl: string
}
export interface BrowseEndpoint {
	browseId: string
}
export interface SubscribeButtonOrHovercardButton {
	subscribeButtonRenderer: SubscribeButtonRenderer
}
export interface SubscribeButtonRenderer {
	buttonText: DialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrMessageTextsEntityOrMessageTitleOrDetailsText
	subscribed: boolean
	enabled: boolean
	type: string
	channelId: string
	showPreferences: boolean
	subscribedButtonText: DialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrMessageTextsEntityOrMessageTitleOrDetailsText
	unsubscribedButtonText: DialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrMessageTextsEntityOrMessageTitleOrDetailsText
	trackingParams: string
	unsubscribeButtonText: DialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrMessageTextsEntityOrMessageTitleOrDetailsText
	serviceEndpoints?: ServiceEndpointsEntity[] | null
	subscribeAccessibility: SubscribeAccessibilityOrUnsubscribeAccessibilityOrAccessibility
	unsubscribeAccessibility: SubscribeAccessibilityOrUnsubscribeAccessibilityOrAccessibility
	signInEndpoint: SignInEndpoint
}
export interface DialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrMessageTextsEntityOrMessageTitleOrDetailsText {
	runs?: RunsEntity[] | null
}
export interface RunsEntity {
	text: string
}
export interface ServiceEndpointsEntity {
	clickTrackingParams: string
	commandMetadata: CommandMetadata1
	subscribeEndpoint?: SubscribeEndpointOrUnsubscribeEndpoint | null
	signalServiceEndpoint?: SignalServiceEndpoint | null
}
export interface CommandMetadata1 {
	webCommandMetadata: WebCommandMetadata1
}
export interface WebCommandMetadata1 {
	sendPost: boolean
	apiUrl?: string | null
}
export interface SubscribeEndpointOrUnsubscribeEndpoint {
	channelIds?: string[] | null
	params: string
}
export interface SignalServiceEndpoint {
	signal: string
	actions?: ActionsEntity[] | null
}
export interface ActionsEntity {
	clickTrackingParams: string
	openPopupAction: OpenPopupAction
}
export interface OpenPopupAction {
	popup: Popup
	popupType: string
}
export interface Popup {
	confirmDialogRenderer: ConfirmDialogRenderer
}
export interface ConfirmDialogRenderer {
	trackingParams: string
	dialogMessages?:
		| DialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrMessageTextsEntityOrMessageTitleOrDetailsText[]
		| null
	confirmButton: ConfirmButton
	cancelButton: CancelButton
	primaryIsCancel: boolean
}
export interface ConfirmButton {
	buttonRenderer: ButtonRenderer
}
export interface ButtonRenderer {
	style: string
	size: string
	isDisabled: boolean
	text: DialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrMessageTextsEntityOrMessageTitleOrDetailsText
	serviceEndpoint: ServiceEndpointOrUnsubscribeCommand
	accessibility: AccessibilityOrAccessibilityData
	trackingParams: string
}
export interface ServiceEndpointOrUnsubscribeCommand {
	clickTrackingParams: string
	commandMetadata: CommandMetadata2
	unsubscribeEndpoint: SubscribeEndpointOrUnsubscribeEndpoint1
}
export interface CommandMetadata2 {
	webCommandMetadata: WebCommandMetadata2
}
export interface WebCommandMetadata2 {
	sendPost: boolean
	apiUrl: string
}
export interface SubscribeEndpointOrUnsubscribeEndpoint1 {
	channelIds?: string[] | null
	params: string
}
export interface AccessibilityOrAccessibilityData {
	label: string
}
export interface CancelButton {
	buttonRenderer: ButtonRenderer1
}
export interface ButtonRenderer1 {
	style: string
	size: string
	isDisabled: boolean
	text: DialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrMessageTextsEntityOrMessageTitleOrDetailsText
	accessibility: AccessibilityOrAccessibilityData
	trackingParams: string
}
export interface SubscribeAccessibilityOrUnsubscribeAccessibilityOrAccessibility {
	accessibilityData: AccessibilityOrAccessibilityData
}
export interface SignInEndpoint {
	clickTrackingParams: string
	commandMetadata: CommandMetadata3
}
export interface CommandMetadata3 {
	webCommandMetadata: WebCommandMetadataOrThumbnailsEntityOrCommonConfig
}
export interface WebCommandMetadataOrThumbnailsEntityOrCommonConfig {
	url: string
}
export interface PlayerConfig {
	audioConfig: AudioConfig
	streamSelectionConfig: StreamSelectionConfig
	mediaCommonConfig: MediaCommonConfig
	webPlayerConfig: WebPlayerConfig
}
export interface AudioConfig {
	loudnessDb: number
	perceptualLoudnessDb: number
	enablePerFormatLoudness: boolean
}
export interface StreamSelectionConfig {
	maxBitrate: string
}
export interface MediaCommonConfig {
	dynamicReadaheadConfig: DynamicReadaheadConfig
}
export interface DynamicReadaheadConfig {
	maxReadAheadMediaTimeMs: number
	minReadAheadMediaTimeMs: number
	readAheadGrowthRateMs: number
}
export interface WebPlayerConfig {
	useCobaltTvosDash: boolean
	webPlayerActionsPorting: WebPlayerActionsPorting
}
export interface WebPlayerActionsPorting {
	getSharePanelCommand: GetSharePanelCommand
	subscribeCommand: SubscribeCommand
	unsubscribeCommand: ServiceEndpointOrUnsubscribeCommand
	addToWatchLaterCommand: AddToWatchLaterCommand
	removeFromWatchLaterCommand: RemoveFromWatchLaterCommand
}
export interface GetSharePanelCommand {
	clickTrackingParams: string
	commandMetadata: CommandMetadata2
	webPlayerShareEntityServiceEndpoint: WebPlayerShareEntityServiceEndpoint
}
export interface WebPlayerShareEntityServiceEndpoint {
	serializedShareEntity: string
}
export interface SubscribeCommand {
	clickTrackingParams: string
	commandMetadata: CommandMetadata2
	subscribeEndpoint: SubscribeEndpointOrUnsubscribeEndpoint1
}
export interface AddToWatchLaterCommand {
	clickTrackingParams: string
	commandMetadata: CommandMetadata2
	playlistEditEndpoint: PlaylistEditEndpoint
}
export interface PlaylistEditEndpoint {
	playlistId: string
	actions?: ActionsEntity1[] | null
}
export interface ActionsEntity1 {
	addedVideoId: string
	action: string
}
export interface RemoveFromWatchLaterCommand {
	clickTrackingParams: string
	commandMetadata: CommandMetadata2
	playlistEditEndpoint: PlaylistEditEndpoint1
}
export interface PlaylistEditEndpoint1 {
	playlistId: string
	actions?: ActionsEntity2[] | null
}
export interface ActionsEntity2 {
	action: string
	removedVideoId: string
}
export interface Storyboards {
	playerStoryboardSpecRenderer: PlayerStoryboardSpecRenderer
}
export interface PlayerStoryboardSpecRenderer {
	spec: string
}
export interface Microformat {
	playerMicroformatRenderer: PlayerMicroformatRenderer
}
export interface PlayerMicroformatRenderer {
	thumbnail: ThumbnailOrWatermarkOrIconOrImage
	embed: Embed
	title: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismiss
	description: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismiss
	lengthSeconds: string
	ownerProfileUrl: string
	externalChannelId: string
	isFamilySafe: boolean
	availableCountries?: string[] | null
	isUnlisted: boolean
	hasYpcMetadata: boolean
	viewCount: string
	category: string
	publishDate: string
	ownerChannelName: string
	uploadDate: string
}
export interface Embed {
	iframeUrl: string
	flashUrl: string
	width: number
	height: number
	flashSecureUrl: string
}
export interface Cards {
	cardCollectionRenderer: CardCollectionRenderer
}
export interface CardCollectionRenderer {
	cards?: CardsEntity[] | null
	headerText: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismiss
	icon: IconOrCloseButton
	closeButton: IconOrCloseButton
	trackingParams: string
	allowTeaserDismiss: boolean
	logIconVisibilityUpdates: boolean
}
export interface CardsEntity {
	cardRenderer: CardRenderer
}
export interface CardRenderer {
	teaser: Teaser
	cueRanges?: CueRangesEntity[] | null
	trackingParams: string
}
export interface Teaser {
	simpleCardTeaserRenderer: SimpleCardTeaserRenderer
}
export interface SimpleCardTeaserRenderer {
	message: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismiss
	trackingParams: string
	prominent: boolean
	logVisibilityUpdates: boolean
	onTapCommand: OnTapCommand
}
export interface OnTapCommand {
	clickTrackingParams: string
	changeEngagementPanelVisibilityAction: ChangeEngagementPanelVisibilityAction
}
export interface ChangeEngagementPanelVisibilityAction {
	targetId: string
	visibility: string
}
export interface CueRangesEntity {
	startCardActiveMs: string
	endCardActiveMs: string
	teaserDurationMs: string
	iconAfterTeaserMs: string
}
export interface IconOrCloseButton {
	infoCardIconRenderer: InfoCardIconRenderer
}
export interface InfoCardIconRenderer {
	trackingParams: string
}
export interface Attestation {
	playerAttestationRenderer: PlayerAttestationRenderer
}
export interface PlayerAttestationRenderer {
	challenge: string
	botguardData: BotguardData
}
export interface BotguardData {
	program: string
	interpreterSafeUrl: InterpreterSafeUrl
	serverEnvironment: number
}
export interface InterpreterSafeUrl {
	privateDoNotAccessOrElseTrustedResourceUrlWrappedValue: string
}
export interface MessagesEntity {
	mealbarPromoRenderer?: MealbarPromoRenderer | null
	tooltipRenderer?: TooltipRenderer | null
}
export interface MealbarPromoRenderer {
	icon: ThumbnailOrWatermarkOrIconOrImage
	messageTexts?:
		| DialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrMessageTextsEntityOrMessageTitleOrDetailsText[]
		| null
	actionButton: ActionButton
	dismissButton: DismissButton
	triggerCondition: string
	style: string
	trackingParams: string
	impressionEndpoints?:
		| CommandsEntityOrImpressionEndpointsEntityOrAcceptCommandOrDismissCommand[]
		| null
	isVisible: boolean
	messageTitle: DialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrMessageTextsEntityOrMessageTitleOrDetailsText
}
export interface ActionButton {
	buttonRenderer: ButtonRenderer2
}
export interface ButtonRenderer2 {
	style: string
	size: string
	text: DialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrMessageTextsEntityOrMessageTitleOrDetailsText
	trackingParams: string
	command: Command
}
export interface Command {
	clickTrackingParams: string
	commandExecutorCommand: CommandExecutorCommand
}
export interface CommandExecutorCommand {
	commands?: CommandsEntity[] | null
}
export interface CommandsEntity {
	clickTrackingParams?: string | null
	commandMetadata: CommandMetadata4
	browseEndpoint?: BrowseEndpoint1 | null
	feedbackEndpoint?: FeedbackEndpoint | null
}
export interface CommandMetadata4 {
	webCommandMetadata: WebCommandMetadata3
}
export interface WebCommandMetadata3 {
	url?: string | null
	webPageType?: string | null
	rootVe?: number | null
	apiUrl: string
	sendPost?: boolean | null
}
export interface BrowseEndpoint1 {
	browseId: string
	params: string
}
export interface FeedbackEndpoint {
	feedbackToken: string
	uiActions: UiActions
}
export interface UiActions {
	hideEnclosingContainer: boolean
}
export interface DismissButton {
	buttonRenderer: ButtonRenderer3
}
export interface ButtonRenderer3 {
	style: string
	size: string
	text: DialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrMessageTextsEntityOrMessageTitleOrDetailsText
	trackingParams: string
	command: Command1
}
export interface Command1 {
	clickTrackingParams: string
	commandExecutorCommand: CommandExecutorCommand1
}
export interface CommandExecutorCommand1 {
	commands?:
		| CommandsEntityOrImpressionEndpointsEntityOrAcceptCommandOrDismissCommand[]
		| null
}
export interface CommandsEntityOrImpressionEndpointsEntityOrAcceptCommandOrDismissCommand {
	clickTrackingParams: string
	commandMetadata: CommandMetadata2
	feedbackEndpoint: FeedbackEndpoint1
}
export interface FeedbackEndpoint1 {
	feedbackToken: string
	uiActions: UiActions
}
export interface TooltipRenderer {
	promoConfig: PromoConfig
	targetId: string
	text: DialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrMessageTextsEntityOrMessageTitleOrDetailsText
	detailsText: DialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrMessageTextsEntityOrMessageTitleOrDetailsText
	dismissButton: DismissButton1
	suggestedPosition: SuggestedPositionOrDismissStrategy
	dismissStrategy: SuggestedPositionOrDismissStrategy
	dwellTimeMs: string
	trackingParams: string
}
export interface PromoConfig {
	promoId: string
	impressionEndpoints?:
		| CommandsEntityOrImpressionEndpointsEntityOrAcceptCommandOrDismissCommand[]
		| null
	acceptCommand: CommandsEntityOrImpressionEndpointsEntityOrAcceptCommandOrDismissCommand
	dismissCommand: CommandsEntityOrImpressionEndpointsEntityOrAcceptCommandOrDismissCommand
}
export interface DismissButton1 {
	buttonRenderer: ButtonRenderer4
}
export interface ButtonRenderer4 {
	size: string
	text: DialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrMessageTextsEntityOrMessageTitleOrDetailsText
	trackingParams: string
	command: Command1
}
export interface SuggestedPositionOrDismissStrategy {
	type: string
}
export interface Endscreen {
	endscreenRenderer: EndscreenRenderer
}
export interface EndscreenRenderer {
	elements?: ElementsEntity[] | null
	startMs: string
	trackingParams: string
}
export interface ElementsEntity {
	endscreenElementRenderer: EndscreenElementRenderer
}
export interface EndscreenElementRenderer {
	style: string
	image: ThumbnailOrWatermarkOrIconOrImage
	icon?: Icon | null
	left: number
	width: number
	top: number
	aspectRatio: number
	startMs: string
	endMs: string
	title: TitleOrText
	metadata: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismiss
	callToAction?: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismiss1 | null
	dismiss?: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismiss2 | null
	endpoint: Endpoint
	hovercardButton?: SubscribeButtonOrHovercardButton1 | null
	trackingParams: string
	isSubscribe?: boolean | null
	id: string
	thumbnailOverlays?: ThumbnailOverlaysEntity[] | null
}
export interface Icon {
	thumbnails?: WebCommandMetadataOrThumbnailsEntityOrCommonConfig[] | null
}
export interface TitleOrText {
	accessibility: SubscribeAccessibilityOrUnsubscribeAccessibilityOrAccessibility
	simpleText: string
}
export interface NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismiss1 {
	simpleText: string
}
export interface NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismiss2 {
	simpleText: string
}
export interface Endpoint {
	clickTrackingParams: string
	commandMetadata: CommandMetadata5
	browseEndpoint?: BrowseEndpoint2 | null
	watchEndpoint?: WatchEndpoint | null
}
export interface CommandMetadata5 {
	webCommandMetadata: WebCommandMetadata4
}
export interface WebCommandMetadata4 {
	url: string
	webPageType: string
	rootVe: number
	apiUrl?: string | null
}
export interface BrowseEndpoint2 {
	browseId: string
}
export interface WatchEndpoint {
	videoId: string
	watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig
}
export interface WatchEndpointSupportedOnesieConfig {
	html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig
}
export interface Html5PlaybackOnesieConfig {
	commonConfig: WebCommandMetadataOrThumbnailsEntityOrCommonConfig
}
export interface SubscribeButtonOrHovercardButton1 {
	subscribeButtonRenderer: SubscribeButtonRenderer
}
export interface ThumbnailOverlaysEntity {
	thumbnailOverlayTimeStatusRenderer: ThumbnailOverlayTimeStatusRenderer
}
export interface ThumbnailOverlayTimeStatusRenderer {
	text: TitleOrText
	style: string
}
export interface AdPlacementsEntity {
	adPlacementRenderer: AdPlacementRenderer
}
export interface AdPlacementRenderer {
	config: Config
	renderer: Renderer
}
export interface Config {
	adPlacementConfig: AdPlacementConfig
}
export interface AdPlacementConfig {
	kind: string
	adTimeOffset: AdTimeOffset
	hideCueRangeMarker: boolean
}
export interface AdTimeOffset {
	offsetStartMilliseconds: string
	offsetEndMilliseconds: string
}
export interface Renderer {
	adBreakServiceRenderer: AdBreakServiceRenderer
}
export interface AdBreakServiceRenderer {
	prefetchMilliseconds: string
	getAdBreakUrl: string
}
export interface FrameworkUpdates {
	entityBatchUpdate: EntityBatchUpdate
}
export interface EntityBatchUpdate {
	mutations?: MutationsEntity[] | null
	timestamp: Timestamp
}
export interface MutationsEntity {
	entityKey: string
	type: string
	payload: Payload
}
export interface Payload {
	offlineabilityEntity: OfflineabilityEntity
}
export interface OfflineabilityEntity {
	key: string
	addToOfflineButtonState: string
}
export interface Timestamp {
	seconds: string
	nanos: number
}
