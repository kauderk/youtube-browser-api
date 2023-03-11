interface Param {
	key: string
	value: string
}

interface ServiceTrackingParam {
	service: string
	params: Param[]
}

interface MainAppWebResponseContext {
	datasyncId: string
	loggedOut: boolean
}

interface YtConfigData {
	visitorData: string
	sessionIndex: number
	rootVisualElementType: number
}

interface WebCommandMetadata {
	url: string
	webPageType: string
	rootVe: number
}

interface CommandMetadata {
	webCommandMetadata: WebCommandMetadata
}

interface PrefetchHintConfig {
	prefetchPriority: number
	countdownUiRelativeSecondsPrefetchCondition: number
}

interface WatchEndpointSupportedPrefetchConfig {
	prefetchHintConfig: PrefetchHintConfig
}

interface WatchEndpoint {
	videoId: string
	params: string
	playerParams: string
	watchEndpointSupportedPrefetchConfig: WatchEndpointSupportedPrefetchConfig
}

interface NavigationEndpoint {
	clickTrackingParams: string
	commandMetadata: CommandMetadata
	watchEndpoint: WatchEndpoint
}

interface WebPrefetchData {
	navigationEndpoints: NavigationEndpoint[]
}

interface WebResponseContextExtensionData {
	ytConfigData: YtConfigData
	webPrefetchData: WebPrefetchData
	hasDecorated: boolean
}

interface ResponseContext {
	serviceTrackingParams: ServiceTrackingParam[]
	mainAppWebResponseContext: MainAppWebResponseContext
	webResponseContextExtensionData: WebResponseContextExtensionData
}

interface Run {
	text: string
}

interface Title {
	runs: Run[]
}

interface ViewCount2 {
	simpleText: string
}

interface ShortViewCount {
	simpleText: string
}

interface VideoViewCountRenderer {
	viewCount: ViewCount2
	shortViewCount: ShortViewCount
	isLive?: boolean
}

interface ViewCount {
	videoViewCountRenderer: VideoViewCountRenderer
}

interface Run2 {
	text: string
}

interface Text {
	runs: Run2[]
}

interface Icon {
	iconType: string
}

interface WebCommandMetadata2 {
	sendPost: boolean
	apiUrl: string
}

interface CommandMetadata2 {
	webCommandMetadata: WebCommandMetadata2
}

interface GetReportFormEndpoint {
	params: string
}

interface ChangeEngagementPanelVisibilityAction {
	targetId: string
	visibility: string
}

interface Action {
	clickTrackingParams: string
	changeEngagementPanelVisibilityAction: ChangeEngagementPanelVisibilityAction
}

interface SignalServiceEndpoint {
	signal: string
	actions: Action[]
}

interface ServiceEndpoint {
	clickTrackingParams: string
	commandMetadata: CommandMetadata2
	getReportFormEndpoint: GetReportFormEndpoint
	signalServiceEndpoint: SignalServiceEndpoint
}

interface MenuServiceItemRenderer {
	text: Text
	icon: Icon
	serviceEndpoint: ServiceEndpoint
	trackingParams: string
}

interface Item {
	menuServiceItemRenderer: MenuServiceItemRenderer
}

interface Style {
	styleType: string
}

interface DefaultIcon {
	iconType: string
}

interface AccessibilityData {
	label: string
}

interface Accessibility {
	accessibilityData: AccessibilityData
}

interface DefaultText {
	accessibility: Accessibility
	simpleText: string
}

interface UpdateToggleButtonStateCommand {
	toggled: boolean
	buttonId: string
}

interface WebCommandMetadata3 {
	sendPost: boolean
	apiUrl: string
}

interface CommandMetadata3 {
	webCommandMetadata: WebCommandMetadata3
}

interface Target {
	videoId: string
}

interface LikeEndpoint {
	status: string
	target: Target
	likeParams: string
}

interface Command {
	clickTrackingParams: string
	updateToggleButtonStateCommand: UpdateToggleButtonStateCommand
	commandMetadata: CommandMetadata3
	likeEndpoint: LikeEndpoint
}

interface CommandExecutorCommand {
	commands: Command[]
}

interface DefaultServiceEndpoint {
	clickTrackingParams: string
	commandExecutorCommand: CommandExecutorCommand
}

interface AccessibilityData2 {
	label: string
}

interface Accessibility2 {
	accessibilityData: AccessibilityData2
}

interface ToggledText {
	accessibility: Accessibility2
	simpleText: string
}

interface WebCommandMetadata4 {
	sendPost: boolean
	apiUrl: string
}

interface CommandMetadata4 {
	webCommandMetadata: WebCommandMetadata4
}

interface Target2 {
	videoId: string
}

interface LikeEndpoint2 {
	status: string
	target: Target2
	removeLikeParams: string
}

interface ToggledServiceEndpoint {
	clickTrackingParams: string
	commandMetadata: CommandMetadata4
	likeEndpoint: LikeEndpoint2
}

interface Accessibility3 {
	label: string
}

interface ToggledStyle {
	styleType: string
}

interface AccessibilityData4 {
	label: string
}

interface AccessibilityData3 {
	accessibilityData: AccessibilityData4
}

interface ToggleButtonIdData {
	id: string
}

interface ToggleButtonSupportedData {
	toggleButtonIdData: ToggleButtonIdData
}

interface ToggleButtonRenderer {
	style: Style
	isToggled: boolean
	isDisabled: boolean
	defaultIcon: DefaultIcon
	defaultText: DefaultText
	defaultServiceEndpoint: DefaultServiceEndpoint
	toggledText: ToggledText
	toggledServiceEndpoint: ToggledServiceEndpoint
	accessibility: Accessibility3
	trackingParams: string
	defaultTooltip: string
	toggledTooltip: string
	toggledStyle: ToggledStyle
	accessibilityData: AccessibilityData3
	toggleButtonSupportedData: ToggleButtonSupportedData
	targetId: string
}

interface LikeButton {
	toggleButtonRenderer: ToggleButtonRenderer
}

interface Style2 {
	styleType: string
}

interface DefaultIcon2 {
	iconType: string
}

interface UpdateToggleButtonStateCommand2 {
	toggled: boolean
	buttonId: string
}

interface WebCommandMetadata5 {
	sendPost: boolean
	apiUrl: string
}

interface CommandMetadata5 {
	webCommandMetadata: WebCommandMetadata5
}

interface Target3 {
	videoId: string
}

interface LikeEndpoint3 {
	status: string
	target: Target3
	dislikeParams: string
}

interface Command2 {
	clickTrackingParams: string
	updateToggleButtonStateCommand: UpdateToggleButtonStateCommand2
	commandMetadata: CommandMetadata5
	likeEndpoint: LikeEndpoint3
}

interface CommandExecutorCommand2 {
	commands: Command2[]
}

interface DefaultServiceEndpoint2 {
	clickTrackingParams: string
	commandExecutorCommand: CommandExecutorCommand2
}

interface WebCommandMetadata6 {
	sendPost: boolean
	apiUrl: string
}

interface CommandMetadata6 {
	webCommandMetadata: WebCommandMetadata6
}

interface Target4 {
	videoId: string
}

interface LikeEndpoint4 {
	status: string
	target: Target4
	removeLikeParams: string
}

interface ToggledServiceEndpoint2 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata6
	likeEndpoint: LikeEndpoint4
}

interface Accessibility4 {
	label: string
}

interface ToggledStyle2 {
	styleType: string
}

interface AccessibilityData6 {
	label: string
}

interface AccessibilityData5 {
	accessibilityData: AccessibilityData6
}

interface ToggleButtonIdData2 {
	id: string
}

interface ToggleButtonSupportedData2 {
	toggleButtonIdData: ToggleButtonIdData2
}

interface ToggleButtonRenderer2 {
	style: Style2
	isToggled: boolean
	isDisabled: boolean
	defaultIcon: DefaultIcon2
	defaultServiceEndpoint: DefaultServiceEndpoint2
	toggledServiceEndpoint: ToggledServiceEndpoint2
	accessibility: Accessibility4
	trackingParams: string
	defaultTooltip: string
	toggledTooltip: string
	toggledStyle: ToggledStyle2
	accessibilityData: AccessibilityData5
	toggleButtonSupportedData: ToggleButtonSupportedData2
	targetId: string
}

interface DislikeButton {
	toggleButtonRenderer: ToggleButtonRenderer2
}

interface SegmentedLikeDislikeButtonRenderer {
	likeButton: LikeButton
	dislikeButton: DislikeButton
}

interface Run3 {
	text: string
}

interface Text2 {
	runs: Run3[]
}

interface WebCommandMetadata7 {
	sendPost: boolean
	apiUrl: string
}

interface CommandMetadata7 {
	webCommandMetadata: WebCommandMetadata7
}

interface UnifiedSharePanelRenderer {
	trackingParams: string
	showLoadingSpinner: boolean
}

interface Popup {
	unifiedSharePanelRenderer: UnifiedSharePanelRenderer
}

interface OpenPopupAction {
	popup: Popup
	popupType: string
	beReused: boolean
}

interface Command3 {
	clickTrackingParams: string
	openPopupAction: OpenPopupAction
}

interface ShareEntityServiceEndpoint {
	serializedShareEntity: string
	commands: Command3[]
}

interface ServiceEndpoint2 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata7
	shareEntityServiceEndpoint: ShareEntityServiceEndpoint
}

interface Icon2 {
	iconType: string
}

interface AccessibilityData8 {
	label: string
}

interface AccessibilityData7 {
	accessibilityData: AccessibilityData8
}

interface ButtonRenderer {
	style: string
	size: string
	isDisabled: boolean
	text: Text2
	serviceEndpoint: ServiceEndpoint2
	icon: Icon2
	tooltip: string
	trackingParams: string
	accessibilityData: AccessibilityData7
}

interface TopLevelButton {
	segmentedLikeDislikeButtonRenderer: SegmentedLikeDislikeButtonRenderer
	buttonRenderer: ButtonRenderer
}

interface AccessibilityData9 {
	label: string
}

interface Accessibility5 {
	accessibilityData: AccessibilityData9
}

interface GetDownloadActionCommand {
	videoId: string
	params: string
	offlineabilityEntityKey: string
}

interface OnAddCommand {
	clickTrackingParams: string
	getDownloadActionCommand: GetDownloadActionCommand
}

interface OfflineVideoEndpoint {
	videoId: string
	onAddCommand: OnAddCommand
}

interface ServiceEndpoint3 {
	clickTrackingParams: string
	offlineVideoEndpoint: OfflineVideoEndpoint
}

interface MenuServiceItemDownloadRenderer {
	serviceEndpoint: ServiceEndpoint3
	trackingParams: string
}

interface Run4 {
	text: string
}

interface Text3 {
	runs: Run4[]
}

interface Icon3 {
	iconType: string
}

interface WebCommandMetadata8 {
	sendPost: boolean
	apiUrl: string
}

interface CommandMetadata8 {
	webCommandMetadata: WebCommandMetadata8
}

interface AddToPlaylistServiceEndpoint {
	videoId: string
}

interface ServiceEndpoint4 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata8
	addToPlaylistServiceEndpoint: AddToPlaylistServiceEndpoint
}

interface MenuServiceItemRenderer2 {
	text: Text3
	icon: Icon3
	serviceEndpoint: ServiceEndpoint4
	trackingParams: string
}

interface MenuItem {
	menuServiceItemDownloadRenderer: MenuServiceItemDownloadRenderer
	menuServiceItemRenderer: MenuServiceItemRenderer2
}

interface GetDownloadActionCommand2 {
	videoId: string
	params: string
	offlineabilityEntityKey: string
}

interface OnAddCommand2 {
	clickTrackingParams: string
	getDownloadActionCommand: GetDownloadActionCommand2
}

interface OfflineVideoEndpoint2 {
	videoId: string
	onAddCommand: OnAddCommand2
}

interface Command4 {
	clickTrackingParams: string
	offlineVideoEndpoint: OfflineVideoEndpoint2
}

interface DownloadButtonRenderer {
	trackingParams: string
	style: string
	size: string
	targetId: string
	command: Command4
}

interface Run5 {
	text: string
}

interface Text4 {
	runs: Run5[]
}

interface Icon4 {
	iconType: string
}

interface Accessibility6 {
	label: string
}

interface AccessibilityData11 {
	label: string
}

interface AccessibilityData10 {
	accessibilityData: AccessibilityData11
}

interface WebCommandMetadata9 {
	sendPost: boolean
	apiUrl: string
}

interface CommandMetadata9 {
	webCommandMetadata: WebCommandMetadata9
}

interface AddToPlaylistServiceEndpoint2 {
	videoId: string
}

interface Command5 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata9
	addToPlaylistServiceEndpoint: AddToPlaylistServiceEndpoint2
}

interface ButtonRenderer2 {
	style: string
	size: string
	isDisabled: boolean
	text: Text4
	icon: Icon4
	accessibility: Accessibility6
	tooltip: string
	trackingParams: string
	accessibilityData: AccessibilityData10
	command: Command5
}

interface TopLevelButton2 {
	downloadButtonRenderer: DownloadButtonRenderer
	buttonRenderer: ButtonRenderer2
}

interface MenuFlexibleItemRenderer {
	menuItem: MenuItem
	topLevelButton: TopLevelButton2
}

interface FlexibleItem {
	menuFlexibleItemRenderer: MenuFlexibleItemRenderer
}

interface MenuRenderer {
	items: Item[]
	trackingParams: string
	topLevelButtons: TopLevelButton[]
	accessibility: Accessibility5
	flexibleItems: FlexibleItem[]
}

interface VideoActions {
	menuRenderer: MenuRenderer
}

interface WebCommandMetadata10 {
	url: string
	webPageType: string
	rootVe: number
	apiUrl: string
}

interface CommandMetadata10 {
	webCommandMetadata: WebCommandMetadata10
}

interface BrowseEndpoint {
	browseId: string
}

interface NavigationEndpoint2 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata10
	browseEndpoint: BrowseEndpoint
}

interface Visibility {
	types: string
}

interface LoggingDirectives {
	trackingParams: string
	visibility: Visibility
	enableDisplayloggerExperiment: boolean
}

interface Run6 {
	text: string
	navigationEndpoint: NavigationEndpoint2
	loggingDirectives: LoggingDirectives
}

interface SuperTitleLink {
	runs: Run6[]
}

interface DateText {
	simpleText: string
}

interface AccessibilityData12 {
	label: string
}

interface Accessibility7 {
	accessibilityData: AccessibilityData12
}

interface RelativeDateText {
	accessibility: Accessibility7
	simpleText: string
}

interface VideoPrimaryInfoRenderer {
	title: Title
	viewCount: ViewCount
	videoActions: VideoActions
	trackingParams: string
	superTitleLink: SuperTitleLink
	dateText: DateText
	relativeDateText: RelativeDateText
}

interface Thumbnail2 {
	url: string
	width: number
	height: number
}

interface Thumbnail {
	thumbnails: Thumbnail2[]
}

interface WebCommandMetadata11 {
	url: string
	webPageType: string
	rootVe: number
	apiUrl: string
}

interface CommandMetadata11 {
	webCommandMetadata: WebCommandMetadata11
}

interface BrowseEndpoint2 {
	browseId: string
	canonicalBaseUrl: string
}

interface NavigationEndpoint3 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata11
	browseEndpoint: BrowseEndpoint2
}

interface Run7 {
	text: string
	navigationEndpoint: NavigationEndpoint3
}

interface Title2 {
	runs: Run7[]
}

interface SubscriptionButton {
	type: string
	subscribed: boolean
}

interface WebCommandMetadata12 {
	url: string
	webPageType: string
	rootVe: number
	apiUrl: string
}

interface CommandMetadata12 {
	webCommandMetadata: WebCommandMetadata12
}

interface BrowseEndpoint3 {
	browseId: string
	canonicalBaseUrl: string
}

interface NavigationEndpoint4 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata12
	browseEndpoint: BrowseEndpoint3
}

interface AccessibilityData13 {
	label: string
}

interface Accessibility8 {
	accessibilityData: AccessibilityData13
}

interface SubscriberCountText {
	accessibility: Accessibility8
	simpleText: string
}

interface Run8 {
	text: string
}

interface Text5 {
	runs: Run8[]
}

interface WebCommandMetadata13 {
	sendPost: boolean
	apiUrl: string
}

interface CommandMetadata13 {
	webCommandMetadata: WebCommandMetadata13
}

interface YpcGetOffersEndpoint {
	params: string
}

interface ServiceEndpoint5 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata13
	ypcGetOffersEndpoint: YpcGetOffersEndpoint
}

interface AccessibilityData15 {
	label: string
}

interface AccessibilityData14 {
	accessibilityData: AccessibilityData15
}

interface ButtonRenderer3 {
	style: string
	size: string
	isDisabled: boolean
	text: Text5
	serviceEndpoint: ServiceEndpoint5
	trackingParams: string
	accessibilityData: AccessibilityData14
	targetId: string
}

interface MembershipButton {
	buttonRenderer: ButtonRenderer3
}

interface VideoOwnerRenderer {
	thumbnail: Thumbnail
	title: Title2
	subscriptionButton: SubscriptionButton
	navigationEndpoint: NavigationEndpoint4
	subscriberCountText: SubscriberCountText
	trackingParams: string
	membershipButton: MembershipButton
}

interface Owner {
	videoOwnerRenderer: VideoOwnerRenderer
}

interface WebCommandMetadata14 {
	url: string
	webPageType: string
	rootVe: number
}

interface CommandMetadata14 {
	webCommandMetadata: WebCommandMetadata14
}

interface UrlEndpoint {
	url: string
	target: string
	nofollow: boolean
}

interface NavigationEndpoint5 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata14
	urlEndpoint: UrlEndpoint
}

interface Run9 {
	text: string
	navigationEndpoint: NavigationEndpoint5
}

interface Description {
	runs: Run9[]
}

interface Run10 {
	text: string
}

interface ButtonText {
	runs: Run10[]
}

interface Run11 {
	text: string
}

interface SubscribedButtonText {
	runs: Run11[]
}

interface Run12 {
	text: string
}

interface UnsubscribedButtonText {
	runs: Run12[]
}

interface Run13 {
	text: string
}

interface UnsubscribeButtonText {
	runs: Run13[]
}

interface AccessibilityData16 {
	label: string
}

interface SubscribeAccessibility {
	accessibilityData: AccessibilityData16
}

interface AccessibilityData17 {
	label: string
}

interface UnsubscribeAccessibility {
	accessibilityData: AccessibilityData17
}

interface Icon5 {
	iconType: string
}

interface Accessibility9 {
	label: string
}

interface AccessibilityData19 {
	label: string
}

interface AccessibilityData18 {
	accessibilityData: AccessibilityData19
}

interface ButtonRenderer4 {
	style: string
	size: string
	isDisabled: boolean
	icon: Icon5
	accessibility: Accessibility9
	trackingParams: string
	accessibilityData: AccessibilityData18
}

interface State2 {
	buttonRenderer: ButtonRenderer4
}

interface State {
	stateId: number
	nextStateId: number
	state: State2
}

interface Text6 {
	simpleText: string
}

interface Icon6 {
	iconType: string
}

interface WebCommandMetadata15 {
	sendPost: boolean
	apiUrl: string
}

interface CommandMetadata15 {
	webCommandMetadata: WebCommandMetadata15
}

interface ModifyChannelNotificationPreferenceEndpoint {
	params: string
}

interface ServiceEndpoint6 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata15
	modifyChannelNotificationPreferenceEndpoint: ModifyChannelNotificationPreferenceEndpoint
}

interface MenuServiceItemRenderer3 {
	text: Text6
	icon: Icon6
	serviceEndpoint: ServiceEndpoint6
	trackingParams: string
	isSelected: boolean
}

interface Item2 {
	menuServiceItemRenderer: MenuServiceItemRenderer3
}

interface MenuPopupRenderer {
	items: Item2[]
}

interface Popup2 {
	menuPopupRenderer: MenuPopupRenderer
}

interface OpenPopupAction2 {
	popup: Popup2
	popupType: string
}

interface Command7 {
	clickTrackingParams: string
	openPopupAction: OpenPopupAction2
}

interface CommandExecutorCommand3 {
	commands: Command7[]
}

interface Command6 {
	clickTrackingParams: string
	commandExecutorCommand: CommandExecutorCommand3
}

interface SubscriptionNotificationToggleButtonRenderer {
	states: State[]
	currentStateId: number
	trackingParams: string
	command: Command6
	targetId: string
}

interface NotificationPreferenceButton {
	subscriptionNotificationToggleButtonRenderer: SubscriptionNotificationToggleButtonRenderer
}

interface WebCommandMetadata16 {
	sendPost: boolean
	apiUrl: string
}

interface CommandMetadata16 {
	webCommandMetadata: WebCommandMetadata16
}

interface SubscribeEndpoint {
	channelIds: string[]
	params: string
}

interface OnSubscribeEndpoint {
	clickTrackingParams: string
	commandMetadata: CommandMetadata16
	subscribeEndpoint: SubscribeEndpoint
}

interface WebCommandMetadata17 {
	sendPost: boolean
}

interface CommandMetadata17 {
	webCommandMetadata: WebCommandMetadata17
}

interface Run14 {
	text: string
}

interface DialogMessage {
	runs: Run14[]
}

interface Run15 {
	text: string
}

interface Text7 {
	runs: Run15[]
}

interface WebCommandMetadata18 {
	sendPost: boolean
	apiUrl: string
}

interface CommandMetadata18 {
	webCommandMetadata: WebCommandMetadata18
}

interface UnsubscribeEndpoint {
	channelIds: string[]
	params: string
}

interface ServiceEndpoint7 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata18
	unsubscribeEndpoint: UnsubscribeEndpoint
}

interface Accessibility10 {
	label: string
}

interface ButtonRenderer5 {
	style: string
	size: string
	isDisabled: boolean
	text: Text7
	serviceEndpoint: ServiceEndpoint7
	accessibility: Accessibility10
	trackingParams: string
}

interface ConfirmButton {
	buttonRenderer: ButtonRenderer5
}

interface Run16 {
	text: string
}

interface Text8 {
	runs: Run16[]
}

interface Accessibility11 {
	label: string
}

interface ButtonRenderer6 {
	style: string
	size: string
	isDisabled: boolean
	text: Text8
	accessibility: Accessibility11
	trackingParams: string
}

interface CancelButton {
	buttonRenderer: ButtonRenderer6
}

interface ConfirmDialogRenderer {
	trackingParams: string
	dialogMessages: DialogMessage[]
	confirmButton: ConfirmButton
	cancelButton: CancelButton
	primaryIsCancel: boolean
}

interface Popup3 {
	confirmDialogRenderer: ConfirmDialogRenderer
}

interface OpenPopupAction3 {
	popup: Popup3
	popupType: string
}

interface Action2 {
	clickTrackingParams: string
	openPopupAction: OpenPopupAction3
}

interface SignalServiceEndpoint2 {
	signal: string
	actions: Action2[]
}

interface OnUnsubscribeEndpoint {
	clickTrackingParams: string
	commandMetadata: CommandMetadata17
	signalServiceEndpoint: SignalServiceEndpoint2
}

interface SubscribeButtonRenderer {
	buttonText: ButtonText
	subscribed: boolean
	enabled: boolean
	type: string
	channelId: string
	showPreferences: boolean
	subscribedButtonText: SubscribedButtonText
	unsubscribedButtonText: UnsubscribedButtonText
	trackingParams: string
	unsubscribeButtonText: UnsubscribeButtonText
	subscribeAccessibility: SubscribeAccessibility
	unsubscribeAccessibility: UnsubscribeAccessibility
	notificationPreferenceButton: NotificationPreferenceButton
	targetId: string
	subscribedEntityKey: string
	onSubscribeEndpoints: OnSubscribeEndpoint[]
	onUnsubscribeEndpoints: OnUnsubscribeEndpoint[]
}

interface SubscribeButton {
	subscribeButtonRenderer: SubscribeButtonRenderer
}

interface MetadataRowContainerRenderer {
	collapsedItemCount: number
	trackingParams: string
}

interface MetadataRowContainer {
	metadataRowContainerRenderer: MetadataRowContainerRenderer
}

interface ShowMoreText {
	simpleText: string
}

interface ShowLessText {
	simpleText: string
}

interface ChangeEngagementPanelVisibilityAction2 {
	targetId: string
	visibility: string
}

interface ScrollToEngagementPanelCommand {
	targetId: string
}

interface Command8 {
	clickTrackingParams: string
	changeEngagementPanelVisibilityAction: ChangeEngagementPanelVisibilityAction2
	scrollToEngagementPanelCommand: ScrollToEngagementPanelCommand
}

interface CommandExecutorCommand4 {
	commands: Command8[]
}

interface ShowMoreCommand {
	clickTrackingParams: string
	commandExecutorCommand: CommandExecutorCommand4
}

interface ChangeEngagementPanelVisibilityAction3 {
	targetId: string
	visibility: string
}

interface ShowLessCommand {
	clickTrackingParams: string
	changeEngagementPanelVisibilityAction: ChangeEngagementPanelVisibilityAction3
}

interface VideoSecondaryInfoRenderer {
	owner: Owner
	description: Description
	subscribeButton: SubscribeButton
	metadataRowContainer: MetadataRowContainer
	showMoreText: ShowMoreText
	showLessText: ShowLessText
	trackingParams: string
	defaultExpanded: boolean
	descriptionCollapsedLines: number
	showMoreCommand: ShowMoreCommand
	showLessCommand: ShowLessCommand
}

interface Run17 {
	text: string
}

interface HeaderText {
	runs: Run17[]
}

interface ChangeEngagementPanelVisibilityAction4 {
	targetId: string
	visibility: string
}

interface ScrollToEngagementPanelCommand2 {
	targetId: string
}

interface Command9 {
	clickTrackingParams: string
	changeEngagementPanelVisibilityAction: ChangeEngagementPanelVisibilityAction4
	scrollToEngagementPanelCommand: ScrollToEngagementPanelCommand2
}

interface CommandExecutorCommand5 {
	commands: Command9[]
}

interface OnTap {
	clickTrackingParams: string
	commandExecutorCommand: CommandExecutorCommand5
}

interface CommentCount {
	simpleText: string
}

interface Thumbnail3 {
	url: string
	width: number
	height: number
}

interface AccessibilityData20 {
	label: string
}

interface Accessibility12 {
	accessibilityData: AccessibilityData20
}

interface TeaserAvatar {
	thumbnails: Thumbnail3[]
	accessibility: Accessibility12
}

interface TeaserContent {
	simpleText: string
}

interface CommentsEntryPointTeaserRenderer {
	teaserAvatar: TeaserAvatar
	teaserContent: TeaserContent
	trackingParams: string
}

interface ContentRenderer {
	commentsEntryPointTeaserRenderer: CommentsEntryPointTeaserRenderer
}

interface CommentsEntryPointHeaderRenderer {
	headerText: HeaderText
	onTap: OnTap
	trackingParams: string
	commentCount: CommentCount
	contentRenderer: ContentRenderer
	targetId: string
}

interface WebCommandMetadata19 {
	sendPost: boolean
	apiUrl: string
}

interface CommandMetadata19 {
	webCommandMetadata: WebCommandMetadata19
}

interface ContinuationCommand {
	token: string
	request: string
}

interface ContinuationEndpoint {
	clickTrackingParams: string
	commandMetadata: CommandMetadata19
	continuationCommand: ContinuationCommand
}

interface ContinuationItemRenderer {
	trigger: string
	continuationEndpoint: ContinuationEndpoint
}

interface Content2 {
	commentsEntryPointHeaderRenderer: CommentsEntryPointHeaderRenderer
	continuationItemRenderer: ContinuationItemRenderer
}

interface ItemSectionRenderer {
	contents: Content2[]
	trackingParams: string
	sectionIdentifier: string
	targetId: string
}

interface Content {
	videoPrimaryInfoRenderer: VideoPrimaryInfoRenderer
	videoSecondaryInfoRenderer: VideoSecondaryInfoRenderer
	itemSectionRenderer: ItemSectionRenderer
}

interface Results2 {
	contents: Content[]
	trackingParams: string
}

interface Results {
	results: Results2
}

interface Style3 {
	styleType: string
}

interface Text9 {
	simpleText: string
}

interface RelatedChipCommand {
	targetSectionIdentifier: string
	loadCached: boolean
}

interface WebCommandMetadata20 {
	sendPost: boolean
	apiUrl: string
}

interface CommandMetadata20 {
	webCommandMetadata: WebCommandMetadata20
}

interface ShowReloadUiCommand {
	targetId: string
}

interface Command10 {
	clickTrackingParams: string
	showReloadUiCommand: ShowReloadUiCommand
}

interface ContinuationCommand2 {
	token: string
	request: string
	command: Command10
}

interface NavigationEndpoint6 {
	clickTrackingParams: string
	relatedChipCommand: RelatedChipCommand
	commandMetadata: CommandMetadata20
	continuationCommand: ContinuationCommand2
}

interface ChipCloudChipRenderer {
	style: Style3
	text: Text9
	navigationEndpoint: NavigationEndpoint6
	trackingParams: string
	isSelected: boolean
}

interface Chip {
	chipCloudChipRenderer: ChipCloudChipRenderer
}

interface Icon7 {
	iconType: string
}

interface Accessibility13 {
	label: string
}

interface ButtonRenderer7 {
	style: string
	size: string
	isDisabled: boolean
	icon: Icon7
	accessibility: Accessibility13
	trackingParams: string
}

interface NextButton {
	buttonRenderer: ButtonRenderer7
}

interface Icon8 {
	iconType: string
}

interface Accessibility14 {
	label: string
}

interface ButtonRenderer8 {
	style: string
	size: string
	isDisabled: boolean
	icon: Icon8
	accessibility: Accessibility14
	trackingParams: string
}

interface PreviousButton {
	buttonRenderer: ButtonRenderer8
}

interface ChipCloudRenderer {
	chips: Chip[]
	trackingParams: string
	horizontalScrollable: boolean
	nextButton: NextButton
	previousButton: PreviousButton
}

interface Content3 {
	chipCloudRenderer: ChipCloudRenderer
}

interface RelatedChipCloudRenderer {
	content: Content3
}

export interface Thumbnail5 {
	url: string
	width: number
	height: number
}

interface Thumbnail4 {
	thumbnails: Thumbnail5[]
}

interface AccessibilityData21 {
	label: string
}

interface Accessibility15 {
	accessibilityData: AccessibilityData21
}

interface Title3 {
	accessibility: Accessibility15
	simpleText: string
}

interface WebCommandMetadata21 {
	url: string
	webPageType: string
	rootVe: number
	apiUrl: string
}

interface CommandMetadata21 {
	webCommandMetadata: WebCommandMetadata21
}

interface BrowseEndpoint4 {
	browseId: string
	canonicalBaseUrl: string
}

interface NavigationEndpoint7 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata21
	browseEndpoint: BrowseEndpoint4
}

interface Run18 {
	text: string
	navigationEndpoint: NavigationEndpoint7
}

interface LongBylineText {
	runs: Run18[]
}

interface PublishedTimeText {
	simpleText: string
}

interface ViewCountText {
	simpleText: string
}

interface AccessibilityData22 {
	label: string
}

interface Accessibility16 {
	accessibilityData: AccessibilityData22
}

export interface LengthText {
	accessibility: Accessibility16
	simpleText: string
}

interface WebCommandMetadata22 {
	url: string
	webPageType: string
	rootVe: number
}

interface CommandMetadata22 {
	webCommandMetadata: WebCommandMetadata22
}

interface CommonConfig {
	url: string
}

interface Html5PlaybackOnesieConfig {
	commonConfig: CommonConfig
}

interface WatchEndpointSupportedOnesieConfig {
	html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig
}

interface WatchEndpoint2 {
	videoId: string
	nofollow: boolean
	watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig
	params: string
	startTimeSeconds?: number
}

interface NavigationEndpoint8 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata22
	watchEndpoint: WatchEndpoint2
}

interface WebCommandMetadata23 {
	url: string
	webPageType: string
	rootVe: number
	apiUrl: string
}

interface CommandMetadata23 {
	webCommandMetadata: WebCommandMetadata23
}

interface BrowseEndpoint5 {
	browseId: string
	canonicalBaseUrl: string
}

interface NavigationEndpoint9 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata23
	browseEndpoint: BrowseEndpoint5
}

interface Run19 {
	text: string
	navigationEndpoint: NavigationEndpoint9
}

interface ShortBylineText {
	runs: Run19[]
}

interface Thumbnail6 {
	url: string
	width: number
	height: number
}

interface ChannelThumbnail {
	thumbnails: Thumbnail6[]
}

interface AccessibilityData23 {
	label: string
}

interface Accessibility17 {
	accessibilityData: AccessibilityData23
}

interface ShortViewCountText {
	accessibility: Accessibility17
	simpleText: string
}

interface Run20 {
	text: string
}

interface Text10 {
	runs: Run20[]
}

interface Icon9 {
	iconType: string
}

interface WebCommandMetadata24 {
	sendPost: boolean
	apiUrl: string
}

interface CommandMetadata24 {
	webCommandMetadata: WebCommandMetadata24
}

interface WebCommandMetadata25 {
	sendPost: boolean
	apiUrl: string
}

interface CommandMetadata25 {
	webCommandMetadata: WebCommandMetadata25
}

interface CreatePlaylistServiceEndpoint {
	videoIds: string[]
	params: string
}

interface OnCreateListCommand {
	clickTrackingParams: string
	commandMetadata: CommandMetadata25
	createPlaylistServiceEndpoint: CreatePlaylistServiceEndpoint
}

interface AddToPlaylistCommand {
	openMiniplayer: boolean
	openListPanel: boolean
	videoId: string
	listType: string
	onCreateListCommand: OnCreateListCommand
	videoIds: string[]
}

interface ResponseText {
	simpleText: string
}

interface NotificationActionRenderer {
	responseText: ResponseText
	trackingParams: string
}

interface Popup4 {
	notificationActionRenderer: NotificationActionRenderer
}

interface OpenPopupAction4 {
	popup: Popup4
	popupType: string
}

interface Action3 {
	clickTrackingParams: string
	addToPlaylistCommand: AddToPlaylistCommand
	openPopupAction: OpenPopupAction4
}

interface SignalServiceEndpoint3 {
	signal: string
	actions: Action3[]
}

interface Action4 {
	addedVideoId: string
	action: string
}

interface PlaylistEditEndpoint {
	playlistId: string
	actions: Action4[]
}

interface AddToPlaylistServiceEndpoint3 {
	videoId: string
}

interface UiActions {
	hideEnclosingContainer: boolean
}

interface AccessibilityData24 {
	label: string
}

interface Accessibility18 {
	accessibilityData: AccessibilityData24
}

interface Run21 {
	text: string
}

interface ResponseText2 {
	accessibility: Accessibility18
	simpleText: string
	runs: Run21[]
}

interface Run22 {
	text: string
}

interface Text11 {
	simpleText: string
	runs: Run22[]
}

interface WebCommandMetadata26 {
	sendPost: boolean
	apiUrl: string
}

interface CommandMetadata26 {
	webCommandMetadata: WebCommandMetadata26
}

interface UndoFeedbackAction {
	hack: boolean
}

interface Action6 {
	clickTrackingParams: string
	undoFeedbackAction: UndoFeedbackAction
}

interface UndoFeedbackEndpoint {
	undoToken: string
	actions: Action6[]
}

interface SignalAction {
	signal: string
}

interface Action7 {
	clickTrackingParams: string
	signalAction: SignalAction
}

interface SignalServiceEndpoint4 {
	signal: string
	actions: Action7[]
}

interface ServiceEndpoint9 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata26
	undoFeedbackEndpoint: UndoFeedbackEndpoint
	signalServiceEndpoint: SignalServiceEndpoint4
}

interface WebCommandMetadata27 {
	url: string
	webPageType: string
	rootVe: number
}

interface CommandMetadata27 {
	webCommandMetadata: WebCommandMetadata27
}

interface UrlEndpoint2 {
	url: string
	target: string
}

interface Command11 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata27
	urlEndpoint: UrlEndpoint2
}

interface ButtonRenderer9 {
	style: string
	text: Text11
	serviceEndpoint: ServiceEndpoint9
	trackingParams: string
	command: Command11
}

interface Button {
	buttonRenderer: ButtonRenderer9
}

interface NotificationMultiActionRenderer {
	responseText: ResponseText2
	buttons: Button[]
	trackingParams: string
	dismissalViewStyle: string
}

interface Item4 {
	notificationMultiActionRenderer: NotificationMultiActionRenderer
}

interface ReplaceEnclosingAction {
	item: Item4
}

interface Action5 {
	clickTrackingParams: string
	replaceEnclosingAction: ReplaceEnclosingAction
}

interface FeedbackEndpoint {
	feedbackToken: string
	uiActions: UiActions
	actions: Action5[]
}

interface GetReportFormEndpoint2 {
	params: string
}

interface ServiceEndpoint8 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata24
	signalServiceEndpoint: SignalServiceEndpoint3
	playlistEditEndpoint: PlaylistEditEndpoint
	addToPlaylistServiceEndpoint: AddToPlaylistServiceEndpoint3
	feedbackEndpoint: FeedbackEndpoint
	getReportFormEndpoint: GetReportFormEndpoint2
}

interface MenuServiceItemRenderer4 {
	text: Text10
	icon: Icon9
	serviceEndpoint: ServiceEndpoint8
	trackingParams: string
	hasSeparator?: boolean
}

interface Item3 {
	menuServiceItemRenderer: MenuServiceItemRenderer4
}

interface AccessibilityData25 {
	label: string
}

interface Accessibility19 {
	accessibilityData: AccessibilityData25
}

interface MenuRenderer2 {
	items: Item3[]
	trackingParams: string
	accessibility: Accessibility19
	targetId: string
}

interface Menu {
	menuRenderer: MenuRenderer2
}

interface AccessibilityData26 {
	label: string
}

interface Accessibility20 {
	accessibilityData: AccessibilityData26
}

interface Text12 {
	accessibility: Accessibility20
	simpleText: string
}

interface ThumbnailOverlayTimeStatusRenderer {
	text: Text12
	style: string
}

interface UntoggledIcon {
	iconType: string
}

interface ToggledIcon {
	iconType: string
}

interface WebCommandMetadata28 {
	sendPost: boolean
	apiUrl: string
}

interface CommandMetadata28 {
	webCommandMetadata: WebCommandMetadata28
}

interface Action8 {
	addedVideoId: string
	action: string
}

interface PlaylistEditEndpoint2 {
	playlistId: string
	actions: Action8[]
}

interface WebCommandMetadata29 {
	sendPost: boolean
	apiUrl: string
}

interface CommandMetadata29 {
	webCommandMetadata: WebCommandMetadata29
}

interface CreatePlaylistServiceEndpoint2 {
	videoIds: string[]
	params: string
}

interface OnCreateListCommand2 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata29
	createPlaylistServiceEndpoint: CreatePlaylistServiceEndpoint2
}

interface AddToPlaylistCommand2 {
	openMiniplayer: boolean
	openListPanel: boolean
	videoId: string
	listType: string
	onCreateListCommand: OnCreateListCommand2
	videoIds: string[]
}

interface Action9 {
	clickTrackingParams: string
	addToPlaylistCommand: AddToPlaylistCommand2
}

interface SignalServiceEndpoint5 {
	signal: string
	actions: Action9[]
}

interface UntoggledServiceEndpoint {
	clickTrackingParams: string
	commandMetadata: CommandMetadata28
	playlistEditEndpoint: PlaylistEditEndpoint2
	signalServiceEndpoint: SignalServiceEndpoint5
}

interface WebCommandMetadata30 {
	sendPost: boolean
	apiUrl: string
}

interface CommandMetadata30 {
	webCommandMetadata: WebCommandMetadata30
}

interface Action10 {
	action: string
	removedVideoId: string
}

interface PlaylistEditEndpoint3 {
	playlistId: string
	actions: Action10[]
}

interface ToggledServiceEndpoint3 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata30
	playlistEditEndpoint: PlaylistEditEndpoint3
}

interface AccessibilityData27 {
	label: string
}

interface UntoggledAccessibility {
	accessibilityData: AccessibilityData27
}

interface AccessibilityData28 {
	label: string
}

interface ToggledAccessibility {
	accessibilityData: AccessibilityData28
}

interface ThumbnailOverlayToggleButtonRenderer {
	isToggled: boolean
	untoggledIcon: UntoggledIcon
	toggledIcon: ToggledIcon
	untoggledTooltip: string
	toggledTooltip: string
	untoggledServiceEndpoint: UntoggledServiceEndpoint
	toggledServiceEndpoint: ToggledServiceEndpoint3
	untoggledAccessibility: UntoggledAccessibility
	toggledAccessibility: ToggledAccessibility
	trackingParams: string
}

interface Run23 {
	text: string
}

interface Text13 {
	runs: Run23[]
}

interface ThumbnailOverlayNowPlayingRenderer {
	text: Text13
}

interface ThumbnailOverlayResumePlaybackRenderer {
	percentDurationWatched: number
}

interface ThumbnailOverlay {
	thumbnailOverlayTimeStatusRenderer: ThumbnailOverlayTimeStatusRenderer
	thumbnailOverlayToggleButtonRenderer: ThumbnailOverlayToggleButtonRenderer
	thumbnailOverlayNowPlayingRenderer: ThumbnailOverlayNowPlayingRenderer
	thumbnailOverlayResumePlaybackRenderer: ThumbnailOverlayResumePlaybackRenderer
}

interface AccessibilityData29 {
	label: string
}

interface Accessibility21 {
	accessibilityData: AccessibilityData29
}

interface Thumbnail7 {
	url: string
	width: number
	height: number
}

interface MovingThumbnailDetails {
	thumbnails: Thumbnail7[]
	logAsMovingThumbnail: boolean
}

interface MovingThumbnailRenderer {
	movingThumbnailDetails: MovingThumbnailDetails
	enableHoveredLogging: boolean
	enableOverlay: boolean
}

interface RichThumbnail {
	movingThumbnailRenderer: MovingThumbnailRenderer
}

interface Icon10 {
	iconType: string
}

interface AccessibilityData30 {
	label: string
}

interface MetadataBadgeRenderer {
	icon: Icon10
	style: string
	tooltip: string
	trackingParams: string
	accessibilityData: AccessibilityData30
}

interface OwnerBadge {
	metadataBadgeRenderer: MetadataBadgeRenderer
}

interface CompactVideoRenderer {
	videoId: string
	thumbnail: Thumbnail4
	title: Title3
	longBylineText: LongBylineText
	publishedTimeText: PublishedTimeText
	viewCountText: ViewCountText
	lengthText: LengthText
	navigationEndpoint: NavigationEndpoint8
	shortBylineText: ShortBylineText
	channelThumbnail: ChannelThumbnail
	trackingParams: string
	shortViewCountText: ShortViewCountText
	menu: Menu
	thumbnailOverlays: ThumbnailOverlay[]
	accessibility: Accessibility21
	richThumbnail: RichThumbnail
	ownerBadges?: OwnerBadge[]
	badges?: OwnerBadge[]
}

interface Thumbnail9 {
	url: string
	width: number
	height: number
}

interface SampledThumbnailColor {
	red: number
	green: number
	blue: number
}

interface Thumbnail8 {
	thumbnails: Thumbnail9[]
	sampledThumbnailColor: SampledThumbnailColor
}

interface Title4 {
	simpleText: string
}

interface WebCommandMetadata31 {
	url: string
	webPageType: string
	rootVe: number
}

interface CommandMetadata31 {
	webCommandMetadata: WebCommandMetadata31
}

interface VssLoggingContext {
	serializedContextData: string
}

interface LoggingContext {
	vssLoggingContext: VssLoggingContext
}

interface CommonConfig2 {
	url: string
}

interface Html5PlaybackOnesieConfig2 {
	commonConfig: CommonConfig2
}

interface WatchEndpointSupportedOnesieConfig2 {
	html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig2
}

interface WatchEndpoint3 {
	videoId: string
	playlistId: string
	params: string
	continuePlayback: boolean
	loggingContext: LoggingContext
	watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig2
}

interface NavigationEndpoint10 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata31
	watchEndpoint: WatchEndpoint3
}

interface Run24 {
	text: string
}

interface VideoCountText {
	runs: Run24[]
}

interface WebCommandMetadata32 {
	url: string
	webPageType: string
	rootVe: number
}

interface CommandMetadata32 {
	webCommandMetadata: WebCommandMetadata32
}

interface VssLoggingContext2 {
	serializedContextData: string
}

interface LoggingContext2 {
	vssLoggingContext: VssLoggingContext2
}

interface CommonConfig3 {
	url: string
}

interface Html5PlaybackOnesieConfig3 {
	commonConfig: CommonConfig3
}

interface WatchEndpointSupportedOnesieConfig3 {
	html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig3
}

interface WatchEndpoint4 {
	videoId: string
	playlistId: string
	params: string
	loggingContext: LoggingContext2
	watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig3
}

interface SecondaryNavigationEndpoint {
	clickTrackingParams: string
	commandMetadata: CommandMetadata32
	watchEndpoint: WatchEndpoint4
}

interface LongBylineText2 {
	simpleText: string
}

interface Run25 {
	text: string
}

interface ThumbnailText {
	runs: Run25[]
}

interface Run26 {
	text: string
}

interface VideoCountShortText {
	runs: Run26[]
}

interface Run27 {
	text: string
}

interface Text14 {
	runs: Run27[]
}

interface Icon11 {
	iconType: string
}

interface WebCommandMetadata33 {
	sendPost: boolean
	apiUrl: string
}

interface CommandMetadata33 {
	webCommandMetadata: WebCommandMetadata33
}

interface UiActions2 {
	hideEnclosingContainer: boolean
}

interface Run28 {
	text: string
}

interface SuccessResponseText {
	runs: Run28[]
}

interface Run29 {
	text: string
}

interface UndoText {
	runs: Run29[]
}

interface WebCommandMetadata34 {
	sendPost: boolean
	apiUrl: string
}

interface CommandMetadata34 {
	webCommandMetadata: WebCommandMetadata34
}

interface UndoFeedbackAction2 {
	hack: boolean
}

interface Action12 {
	clickTrackingParams: string
	undoFeedbackAction: UndoFeedbackAction2
}

interface UndoFeedbackEndpoint2 {
	undoToken: string
	actions: Action12[]
}

interface UndoEndpoint {
	clickTrackingParams: string
	commandMetadata: CommandMetadata34
	undoFeedbackEndpoint: UndoFeedbackEndpoint2
}

interface NotificationTextRenderer {
	successResponseText: SuccessResponseText
	undoText: UndoText
	undoEndpoint: UndoEndpoint
	trackingParams: string
}

interface Item6 {
	notificationTextRenderer: NotificationTextRenderer
}

interface ReplaceEnclosingAction2 {
	item: Item6
}

interface Action11 {
	clickTrackingParams: string
	replaceEnclosingAction: ReplaceEnclosingAction2
}

interface FeedbackEndpoint2 {
	feedbackToken: string
	uiActions: UiActions2
	actions: Action11[]
}

interface ServiceEndpoint10 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata33
	feedbackEndpoint: FeedbackEndpoint2
}

interface MenuServiceItemRenderer5 {
	text: Text14
	icon: Icon11
	serviceEndpoint: ServiceEndpoint10
	trackingParams: string
}

interface Item5 {
	menuServiceItemRenderer: MenuServiceItemRenderer5
}

interface AccessibilityData31 {
	label: string
}

interface Accessibility22 {
	accessibilityData: AccessibilityData31
}

interface MenuRenderer3 {
	items: Item5[]
	trackingParams: string
	accessibility: Accessibility22
}

interface Menu2 {
	menuRenderer: MenuRenderer3
}

interface Icon12 {
	iconType: string
}

interface ThumbnailOverlayBottomPanelRenderer {
	icon: Icon12
}

interface Run30 {
	text: string
}

interface Text15 {
	runs: Run30[]
}

interface Icon13 {
	iconType: string
}

interface ThumbnailOverlayHoverTextRenderer {
	text: Text15
	icon: Icon13
}

interface Run31 {
	text: string
}

interface Text16 {
	runs: Run31[]
}

interface ThumbnailOverlayNowPlayingRenderer2 {
	text: Text16
}

interface ThumbnailOverlay2 {
	thumbnailOverlayBottomPanelRenderer: ThumbnailOverlayBottomPanelRenderer
	thumbnailOverlayHoverTextRenderer: ThumbnailOverlayHoverTextRenderer
	thumbnailOverlayNowPlayingRenderer: ThumbnailOverlayNowPlayingRenderer2
}

interface CompactRadioRenderer {
	playlistId: string
	thumbnail: Thumbnail8
	title: Title4
	navigationEndpoint: NavigationEndpoint10
	videoCountText: VideoCountText
	secondaryNavigationEndpoint: SecondaryNavigationEndpoint
	longBylineText: LongBylineText2
	trackingParams: string
	thumbnailText: ThumbnailText
	videoCountShortText: VideoCountShortText
	shareUrl: string
	menu: Menu2
	thumbnailOverlays: ThumbnailOverlay2[]
}

interface WebCommandMetadata35 {
	sendPost: boolean
	apiUrl: string
}

interface CommandMetadata35 {
	webCommandMetadata: WebCommandMetadata35
}

interface ContinuationCommand3 {
	token: string
	request: string
}

interface ContinuationEndpoint2 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata35
	continuationCommand: ContinuationCommand3
}

interface Run32 {
	text: string
}

interface Text17 {
	runs: Run32[]
}

interface WebCommandMetadata36 {
	sendPost: boolean
	apiUrl: string
}

interface CommandMetadata36 {
	webCommandMetadata: WebCommandMetadata36
}

interface ContinuationCommand4 {
	token: string
	request: string
}

interface Command12 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata36
	continuationCommand: ContinuationCommand4
}

interface ButtonRenderer10 {
	style: string
	size: string
	isDisabled: boolean
	text: Text17
	trackingParams: string
	command: Command12
}

interface Button2 {
	buttonRenderer: ButtonRenderer10
}

interface ContinuationItemRenderer2 {
	trigger: string
	continuationEndpoint: ContinuationEndpoint2
	button: Button2
}

interface Content4 {
	compactVideoRenderer: CompactVideoRenderer
	compactRadioRenderer: CompactRadioRenderer
	continuationItemRenderer: ContinuationItemRenderer2
}

interface ItemSectionRenderer2 {
	contents: Content4[]
	trackingParams: string
	sectionIdentifier: string
	targetId: string
}

interface Result {
	compactVideoRenderer: CompactVideoRenderer
	relatedChipCloudRenderer: RelatedChipCloudRenderer
	itemSectionRenderer: ItemSectionRenderer2
}

interface SecondaryResults2 {
	results: Result[]
	trackingParams: string
}

interface SecondaryResults {
	secondaryResults: SecondaryResults2
}

interface WebCommandMetadata37 {
	url: string
	webPageType: string
	rootVe: number
}

interface CommandMetadata37 {
	webCommandMetadata: WebCommandMetadata37
}

interface PrefetchHintConfig2 {
	prefetchPriority: number
	countdownUiRelativeSecondsPrefetchCondition: number
}

interface WatchEndpointSupportedPrefetchConfig2 {
	prefetchHintConfig: PrefetchHintConfig2
}

interface WatchEndpoint5 {
	videoId: string
	params: string
	playerParams: string
	watchEndpointSupportedPrefetchConfig: WatchEndpointSupportedPrefetchConfig2
}

interface AutoplayVideo {
	clickTrackingParams: string
	commandMetadata: CommandMetadata37
	watchEndpoint: WatchEndpoint5
}

interface Set {
	mode: string
	autoplayVideo: AutoplayVideo
}

interface Autoplay2 {
	sets: Set[]
	countDownSecs: number
	trackingParams: string
}

interface Autoplay {
	autoplay: Autoplay2
}

export interface TwoColumnWatchNextResults {
	results: Results
	secondaryResults: SecondaryResults
	autoplay: Autoplay
}

interface Contents {
	twoColumnWatchNextResults: TwoColumnWatchNextResults
	twoColumnBrowseResultsRenderer: TwoColumnBrowseResultsRenderer
	twoColumnSearchResultsRenderer: TwoColumnSearchResultsRenderer
}
interface TwoColumnSearchResultsRenderer {
	primaryContents: {
		sectionListRenderer: {
			contents: [
				{
					continuationItemRenderer: ContinuationItemRenderer

					itemSectionRenderer: {
						contents: {
							videoRenderer: {
								videoId: string
								title?: {
									runs?: {
										text?: string
									}[]
								}
								lengthText: {
									simpleText: string
								}
								longBylineText?: LongBylineText
								thumbnail?: { thumbnails: Thumbnail[] }
							}
							playlistRenderer: {
								playlistId: string
								title: {
									simpleText: string
								}
								thumbnails: Thumbnail[]
								videoCount: string
								videos: { title: Title; videoId: string }[]
							}

							channelRenderer: {
								channelId: string
								subscriberCountText?: unknown
								videoCountText?: unknown
								title: {
									simpleText: string
								}
								thumbnail: Thumbnail13
							}
						}[]
					}
				}
			]
		}
	}
}
interface TwoColumnBrowseResultsRenderer {
	tabs: Tab[]
}
interface Tab {
	tabRenderer?: TabRenderer
}

interface TabRenderer {
	title: string
	trackingParams: string
	selected?: boolean
	content?: TabRendererContent
}

export interface TabRendererContent {
	richGridRenderer?: RichGridRenderer
	sectionListRenderer?: SectionListRenderer
}

interface RichGridRenderer {
	contents: RichGridRendererContent[]
}

interface RichGridRendererContent {
	richItemRenderer?: RichItemRenderer
}

interface RichItemRenderer {
	content: RichItemRendererContent
}

interface RichItemRendererContent {
	videoRenderer: VideoRenderer
}

interface VideoRenderer {
	videoId: string
}

interface WebCommandMetadata38 {
	url: string
	webPageType: string
	rootVe: number
}

interface CommandMetadata38 {
	webCommandMetadata: WebCommandMetadata38
}

interface CommonConfig4 {
	url: string
}

interface Html5PlaybackOnesieConfig4 {
	commonConfig: CommonConfig4
}

interface WatchEndpointSupportedOnesieConfig4 {
	html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig4
}

interface WatchEndpoint6 {
	videoId: string
	watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig4
}

interface CurrentVideoEndpoint {
	clickTrackingParams: string
	commandMetadata: CommandMetadata38
	watchEndpoint: WatchEndpoint6
}

interface Thumbnail11 {
	url: string
	width: number
	height: number
}

interface Thumbnail10 {
	thumbnails: Thumbnail11[]
}

interface AccessibilityData32 {
	label: string
}

interface Accessibility23 {
	accessibilityData: AccessibilityData32
}

interface Title5 {
	accessibility: Accessibility23
	simpleText: string
}

interface WebCommandMetadata39 {
	url: string
	webPageType: string
	rootVe: number
	apiUrl: string
}

interface CommandMetadata39 {
	webCommandMetadata: WebCommandMetadata39
}

interface BrowseEndpoint6 {
	browseId: string
	canonicalBaseUrl: string
}

interface NavigationEndpoint11 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata39
	browseEndpoint: BrowseEndpoint6
}

interface Run33 {
	text: string
	navigationEndpoint: NavigationEndpoint11
}

interface ShortBylineText2 {
	runs: Run33[]
}

interface AccessibilityData33 {
	label: string
}

interface Accessibility24 {
	accessibilityData: AccessibilityData33
}

interface LengthText2 {
	accessibility: Accessibility24
	simpleText: string
}

interface WebCommandMetadata40 {
	url: string
	webPageType: string
	rootVe: number
}

interface CommandMetadata40 {
	webCommandMetadata: WebCommandMetadata40
}

interface CommonConfig5 {
	url: string
}

interface Html5PlaybackOnesieConfig5 {
	commonConfig: CommonConfig5
}

interface WatchEndpointSupportedOnesieConfig5 {
	html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig5
}

interface WatchEndpoint7 {
	videoId: string
	watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig5
}

interface NavigationEndpoint12 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata40
	watchEndpoint: WatchEndpoint7
}

interface AccessibilityData34 {
	label: string
}

interface Accessibility25 {
	accessibilityData: AccessibilityData34
}

interface ShortViewCountText2 {
	accessibility: Accessibility25
	simpleText: string
}

interface PublishedTimeText2 {
	simpleText: string
}

interface AccessibilityData35 {
	label: string
}

interface Accessibility26 {
	accessibilityData: AccessibilityData35
}

interface Text18 {
	accessibility: Accessibility26
	simpleText: string
}

interface ThumbnailOverlayTimeStatusRenderer2 {
	text: Text18
	style: string
}

interface Run34 {
	text: string
}

interface Text19 {
	runs: Run34[]
}

interface ThumbnailOverlayNowPlayingRenderer3 {
	text: Text19
}

interface ThumbnailOverlay3 {
	thumbnailOverlayTimeStatusRenderer: ThumbnailOverlayTimeStatusRenderer2
	thumbnailOverlayNowPlayingRenderer: ThumbnailOverlayNowPlayingRenderer3
}

interface EndScreenVideoRenderer {
	videoId: string
	thumbnail: Thumbnail10
	title: Title5
	shortBylineText: ShortBylineText2
	lengthText: LengthText2
	lengthInSeconds: number
	navigationEndpoint: NavigationEndpoint12
	trackingParams: string
	shortViewCountText: ShortViewCountText2
	publishedTimeText: PublishedTimeText2
	thumbnailOverlays: ThumbnailOverlay3[]
}

interface Title6 {
	simpleText: string
}

export interface Thumbnail13 {
	url: string
	width: number
	height: number
}

interface Thumbnail12 {
	thumbnails: Thumbnail13[]
}

interface LongBylineText3 {
	simpleText: string
}

interface Run35 {
	text: string
}

interface VideoCountText2 {
	runs: Run35[]
}

interface WebCommandMetadata41 {
	url: string
	webPageType: string
	rootVe: number
}

interface CommandMetadata41 {
	webCommandMetadata: WebCommandMetadata41
}

interface VssLoggingContext3 {
	serializedContextData: string
}

interface LoggingContext3 {
	vssLoggingContext: VssLoggingContext3
}

interface CommonConfig6 {
	url: string
}

interface Html5PlaybackOnesieConfig6 {
	commonConfig: CommonConfig6
}

interface WatchEndpointSupportedOnesieConfig6 {
	html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig6
}

interface WatchEndpoint8 {
	videoId: string
	playlistId: string
	params: string
	continuePlayback: boolean
	loggingContext: LoggingContext3
	watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig6
}

interface NavigationEndpoint13 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata41
	watchEndpoint: WatchEndpoint8
}

interface EndScreenPlaylistRenderer {
	playlistId: string
	title: Title6
	thumbnail: Thumbnail12
	longBylineText: LongBylineText3
	videoCountText: VideoCountText2
	navigationEndpoint: NavigationEndpoint13
	trackingParams: string
}

interface Result2 {
	endScreenVideoRenderer: EndScreenVideoRenderer
	endScreenPlaylistRenderer: EndScreenPlaylistRenderer
}

interface Title7 {
	simpleText: string
}

interface WatchNextEndScreenRenderer {
	results: Result2[]
	title: Title7
	trackingParams: string
}

interface EndScreen {
	watchNextEndScreenRenderer: WatchNextEndScreenRenderer
}

interface Title8 {
	simpleText: string
}

interface AccessibilityData36 {
	label: string
}

interface Accessibility27 {
	accessibilityData: AccessibilityData36
}

interface VideoTitle {
	accessibility: Accessibility27
	simpleText: string
}

interface WebCommandMetadata42 {
	url: string
	webPageType: string
	rootVe: number
	apiUrl: string
}

interface CommandMetadata42 {
	webCommandMetadata: WebCommandMetadata42
}

interface BrowseEndpoint7 {
	browseId: string
	canonicalBaseUrl: string
}

interface NavigationEndpoint14 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata42
	browseEndpoint: BrowseEndpoint7
}

interface Run36 {
	text: string
	navigationEndpoint: NavigationEndpoint14
}

interface Byline {
	runs: Run36[]
}

interface PauseText {
	simpleText: string
}

interface Thumbnail14 {
	url: string
	width: number
	height: number
}

interface Background {
	thumbnails: Thumbnail14[]
}

interface Text20 {
	simpleText: string
}

interface Accessibility28 {
	label: string
}

interface AccessibilityData38 {
	label: string
}

interface AccessibilityData37 {
	accessibilityData: AccessibilityData38
}

interface WebCommandMetadata43 {
	sendPost: boolean
	apiUrl: string
}

interface CommandMetadata43 {
	webCommandMetadata: WebCommandMetadata43
}

interface Watch {
	hack: boolean
}

interface Endpoint {
	watch: Watch
}

interface GetSurveyCommand {
	endpoint: Endpoint
	action: string
}

interface Command13 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata43
	getSurveyCommand: GetSurveyCommand
}

interface ButtonRenderer11 {
	style: string
	size: string
	isDisabled: boolean
	text: Text20
	accessibility: Accessibility28
	trackingParams: string
	accessibilityData: AccessibilityData37
	command: Command13
}

interface CancelButton2 {
	buttonRenderer: ButtonRenderer11
}

interface WebCommandMetadata44 {
	url: string
	webPageType: string
	rootVe: number
}

interface CommandMetadata44 {
	webCommandMetadata: WebCommandMetadata44
}

interface CommonConfig7 {
	url: string
}

interface Html5PlaybackOnesieConfig7 {
	commonConfig: CommonConfig7
}

interface WatchEndpointSupportedOnesieConfig7 {
	html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig7
}

interface WatchEndpoint9 {
	videoId: string
	watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig7
}

interface NavigationEndpoint15 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata44
	watchEndpoint: WatchEndpoint9
}

interface Accessibility29 {
	label: string
}

interface AccessibilityData40 {
	label: string
}

interface AccessibilityData39 {
	accessibilityData: AccessibilityData40
}

interface ButtonRenderer12 {
	style: string
	size: string
	isDisabled: boolean
	navigationEndpoint: NavigationEndpoint15
	accessibility: Accessibility29
	trackingParams: string
	accessibilityData: AccessibilityData39
}

interface NextButton2 {
	buttonRenderer: ButtonRenderer12
}

interface Icon14 {
	iconType: string
}

interface Accessibility30 {
	label: string
}

interface ButtonRenderer13 {
	style: string
	size: string
	isDisabled: boolean
	icon: Icon14
	accessibility: Accessibility30
	trackingParams: string
}

interface CloseButton {
	buttonRenderer: ButtonRenderer13
}

interface AccessibilityData41 {
	label: string
}

interface Accessibility31 {
	accessibilityData: AccessibilityData41
}

interface Text21 {
	accessibility: Accessibility31
	simpleText: string
}

interface ThumbnailOverlayTimeStatusRenderer3 {
	text: Text21
	style: string
}

interface ThumbnailOverlay4 {
	thumbnailOverlayTimeStatusRenderer: ThumbnailOverlayTimeStatusRenderer3
}

interface PublishedTimeText3 {
	simpleText: string
}

interface AccessibilityData42 {
	label: string
}

interface Accessibility32 {
	accessibilityData: AccessibilityData42
}

interface ShortViewCountText3 {
	accessibility: Accessibility32
	simpleText: string
}

interface PlayerOverlayAutoplayRenderer {
	title: Title8
	videoTitle: VideoTitle
	byline: Byline
	pauseText: PauseText
	background: Background
	countDownSecs: number
	cancelButton: CancelButton2
	nextButton: NextButton2
	trackingParams: string
	closeButton: CloseButton
	thumbnailOverlays: ThumbnailOverlay4[]
	preferImmediateRedirect: boolean
	videoId: string
	publishedTimeText: PublishedTimeText3
	webShowNewAutonavCountdown: boolean
	webShowBigThumbnailEndscreen: boolean
	shortViewCountText: ShortViewCountText3
	countDownSecsForFullscreen: number
}

interface Autoplay3 {
	playerOverlayAutoplayRenderer: PlayerOverlayAutoplayRenderer
}

interface Icon15 {
	iconType: string
}

interface WebCommandMetadata45 {
	sendPost: boolean
	apiUrl: string
}

interface CommandMetadata45 {
	webCommandMetadata: WebCommandMetadata45
}

interface UnifiedSharePanelRenderer2 {
	trackingParams: string
	showLoadingSpinner: boolean
}

interface Popup5 {
	unifiedSharePanelRenderer: UnifiedSharePanelRenderer2
}

interface OpenPopupAction5 {
	popup: Popup5
	popupType: string
	beReused: boolean
}

interface Command14 {
	clickTrackingParams: string
	openPopupAction: OpenPopupAction5
}

interface ShareEntityServiceEndpoint2 {
	serializedShareEntity: string
	commands: Command14[]
}

interface NavigationEndpoint16 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata45
	shareEntityServiceEndpoint: ShareEntityServiceEndpoint2
}

interface ButtonRenderer14 {
	style: string
	size: string
	isDisabled: boolean
	icon: Icon15
	navigationEndpoint: NavigationEndpoint16
	tooltip: string
	trackingParams: string
}

interface ShareButton {
	buttonRenderer: ButtonRenderer14
}

interface Run37 {
	text: string
}

interface Text22 {
	runs: Run37[]
}

interface Icon16 {
	iconType: string
}

interface WebCommandMetadata46 {
	sendPost: boolean
	apiUrl: string
}

interface CommandMetadata46 {
	webCommandMetadata: WebCommandMetadata46
}

interface Action13 {
	addedVideoId: string
	action: string
}

interface PlaylistEditEndpoint4 {
	playlistId: string
	actions: Action13[]
}

interface AddToPlaylistServiceEndpoint4 {
	videoId: string
}

interface ServiceEndpoint11 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata46
	playlistEditEndpoint: PlaylistEditEndpoint4
	addToPlaylistServiceEndpoint: AddToPlaylistServiceEndpoint4
}

interface MenuServiceItemRenderer6 {
	text: Text22
	icon: Icon16
	serviceEndpoint: ServiceEndpoint11
	trackingParams: string
	hasSeparator?: boolean
}

interface Item7 {
	menuServiceItemRenderer: MenuServiceItemRenderer6
}

interface MenuRenderer4 {
	items: Item7[]
	trackingParams: string
}

interface AddToMenu {
	menuRenderer: MenuRenderer4
}

interface Title9 {
	simpleText: string
}

interface Run38 {
	text: string
}

interface Subtitle {
	runs: Run38[]
}

interface PlayerOverlayVideoDetailsRenderer {
	title: Title9
	subtitle: Subtitle
}

interface VideoDetails {
	playerOverlayVideoDetailsRenderer: PlayerOverlayVideoDetailsRenderer
}

interface WebCommandMetadata47 {
	sendPost: boolean
	apiUrl: string
}

interface CommandMetadata47 {
	webCommandMetadata: WebCommandMetadata47
}

interface SetSettingEndpoint {
	settingItemId: string
	boolValue: boolean
	settingItemIdForClient: string
}

interface OnEnabledCommand {
	clickTrackingParams: string
	commandMetadata: CommandMetadata47
	setSettingEndpoint: SetSettingEndpoint
}

interface WebCommandMetadata48 {
	sendPost: boolean
	apiUrl: string
}

interface CommandMetadata48 {
	webCommandMetadata: WebCommandMetadata48
}

interface SetSettingEndpoint2 {
	settingItemId: string
	boolValue: boolean
	settingItemIdForClient: string
}

interface OnDisabledCommand {
	clickTrackingParams: string
	commandMetadata: CommandMetadata48
	setSettingEndpoint: SetSettingEndpoint2
}

interface AccessibilityData43 {
	label: string
}

interface EnabledAccessibilityData {
	accessibilityData: AccessibilityData43
}

interface AccessibilityData44 {
	label: string
}

interface DisabledAccessibilityData {
	accessibilityData: AccessibilityData44
}

interface AutoplaySwitchButtonRenderer {
	onEnabledCommand: OnEnabledCommand
	onDisabledCommand: OnDisabledCommand
	enabledAccessibilityData: EnabledAccessibilityData
	disabledAccessibilityData: DisabledAccessibilityData
	trackingParams: string
	enabled: boolean
}

interface AutonavToggle {
	autoplaySwitchButtonRenderer: AutoplaySwitchButtonRenderer
}

interface VisibleOnLoad {
	key: string
}

interface Title10 {
	simpleText: string
}

interface SetActivePanelItemAction {
	panelTargetId: string
	itemIndex: number
}

interface OnActiveCommand {
	clickTrackingParams: string
	setActivePanelItemAction: SetActivePanelItemAction
}

interface Thumbnail16 {
	url: string
	width: number
	height: number
}

interface Thumbnail15 {
	thumbnails: Thumbnail16[]
}

interface ChapterRenderer {
	title: Title10
	timeRangeStartMillis: number
	onActiveCommand: OnActiveCommand
	thumbnail: Thumbnail15
}

export interface Chapter {
	chapterRenderer: ChapterRenderer
}

interface Run39 {
	text: string
}

interface ResponseText3 {
	runs: Run39[]
}

interface Run40 {
	text: string
}

interface Text23 {
	runs: Run40[]
}

interface RepeatChapterCommand {
	repeat: string
}

interface Command15 {
	clickTrackingParams: string
	repeatChapterCommand: RepeatChapterCommand
}

interface ButtonRenderer15 {
	style: string
	text: Text23
	trackingParams: string
	command: Command15
}

interface ActionButton {
	buttonRenderer: ButtonRenderer15
}

interface NotificationActionRenderer2 {
	responseText: ResponseText3
	actionButton: ActionButton
	trackingParams: string
}

interface Popup6 {
	notificationActionRenderer: NotificationActionRenderer2
}

interface OpenPopupAction6 {
	popup: Popup6
	popupType: string
}

interface OnChapterRepeat {
	clickTrackingParams: string
	openPopupAction: OpenPopupAction6
}

interface HeatMarkerRenderer {
	timeRangeStartMillis: number
	markerDurationMillis: number
	heatMarkerIntensityScoreNormalized: number
}

interface HeatMarker {
	heatMarkerRenderer: HeatMarkerRenderer
}

interface Run41 {
	text: string
}

interface Label {
	runs: Run41[]
}

interface TimedMarkerDecorationRenderer {
	visibleTimeRangeStartMillis: number
	visibleTimeRangeEndMillis: number
	decorationTimeMillis: number
	label: Label
	icon: string
	trackingParams: string
}

interface HeatMarkersDecoration {
	timedMarkerDecorationRenderer: TimedMarkerDecorationRenderer
}

export interface HeatmapRenderer {
	maxHeightDp: number
	minHeightDp: number
	showHideAnimationDurationMillis: number
	heatMarkers: HeatMarker[]
	heatMarkersDecorations: HeatMarkersDecoration[]
}

interface Heatmap {
	heatmapRenderer: HeatmapRenderer
}

interface Value {
	chapters: Chapter[]
	trackingParams: string
	onChapterRepeat: OnChapterRepeat
	heatmap: Heatmap
}

interface MarkersMap {
	key: string
	value: Value
}

interface MultiMarkersPlayerBarRenderer {
	visibleOnLoad: VisibleOnLoad
	markersMap: MarkersMap[]
}

interface PlayerBar {
	multiMarkersPlayerBarRenderer: MultiMarkersPlayerBarRenderer
}

interface Run42 {
	text: string
}

interface Text24 {
	runs: Run42[]
}

interface ChangeEngagementPanelVisibilityAction5 {
	targetId: string
	visibility: string
}

interface Command16 {
	clickTrackingParams: string
	changeEngagementPanelVisibilityAction: ChangeEngagementPanelVisibilityAction5
}

interface ButtonRenderer16 {
	text: Text24
	trackingParams: string
	command: Command16
}

interface PlayerBarActionButton {
	buttonRenderer: ButtonRenderer16
}

interface DecoratedPlayerBarRenderer2 {
	playerBar: PlayerBar
	playerBarActionButton: PlayerBarActionButton
}

interface DecoratedPlayerBarRenderer {
	decoratedPlayerBarRenderer: DecoratedPlayerBarRenderer2
}

interface PlayerOverlayRenderer {
	endScreen: EndScreen
	autoplay: Autoplay3
	shareButton: ShareButton
	addToMenu: AddToMenu
	videoDetails: VideoDetails
	autonavToggle: AutonavToggle
	decoratedPlayerBarRenderer: DecoratedPlayerBarRenderer
}

interface PlayerOverlays {
	playerOverlayRenderer: PlayerOverlayRenderer
}

interface WebCommandMetadata49 {
	sendPost: boolean
}

interface CommandMetadata49 {
	webCommandMetadata: WebCommandMetadata49
}

interface SignalAction2 {
	signal: string
}

interface Action14 {
	clickTrackingParams: string
	signalAction: SignalAction2
}

interface SignalServiceEndpoint6 {
	signal: string
	actions: Action14[]
}

interface ChangeKeyedMarkersVisibilityCommand {
	isVisible: boolean
	key: string
}

interface LoadMarkersCommand {
	entityKeys: string[]
}

interface OnResponseReceivedEndpoint {
	clickTrackingParams: string
	commandMetadata: CommandMetadata49
	signalServiceEndpoint: SignalServiceEndpoint6
	changeKeyedMarkersVisibilityCommand: ChangeKeyedMarkersVisibilityCommand
	loadMarkersCommand: LoadMarkersCommand
}

interface AdsEngagementPanelContentRenderer {
	hack: boolean
}

interface Run43 {
	text: string
}

interface InfoText {
	runs: Run43[]
}

interface Run44 {
	text: string
}

interface Text25 {
	runs: Run44[]
}

interface WebCommandMetadata50 {
	url: string
	webPageType: string
	rootVe: number
}

interface CommandMetadata50 {
	webCommandMetadata: WebCommandMetadata50
}

interface UrlEndpoint3 {
	url: string
	target: string
}

interface NavigationEndpoint17 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata50
	urlEndpoint: UrlEndpoint3
}

interface MenuNavigationItemRenderer {
	text: Text25
	navigationEndpoint: NavigationEndpoint17
	trackingParams: string
}

interface Item8 {
	menuNavigationItemRenderer: MenuNavigationItemRenderer
}

interface AccessibilityData45 {
	label: string
}

interface Accessibility33 {
	accessibilityData: AccessibilityData45
}

interface MenuRenderer5 {
	items: Item8[]
	trackingParams: string
	accessibility: Accessibility33
}

interface Menu3 {
	menuRenderer: MenuRenderer5
}

interface MacroMarkersInfoItemRenderer {
	infoText: InfoText
	menu: Menu3
}

interface Title11 {
	simpleText: string
}

interface TimeDescription {
	simpleText: string
}

interface Thumbnail18 {
	url: string
	width: number
	height: number
}

interface Thumbnail17 {
	thumbnails: Thumbnail18[]
}

interface WebCommandMetadata51 {
	url: string
	webPageType: string
	rootVe: number
}

interface CommandMetadata51 {
	webCommandMetadata: WebCommandMetadata51
}

interface CommonConfig8 {
	url: string
}

interface Html5PlaybackOnesieConfig8 {
	commonConfig: CommonConfig8
}

interface WatchEndpointSupportedOnesieConfig8 {
	html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig8
}

interface WatchEndpoint10 {
	videoId: string
	continuePlayback: boolean
	startTimeSeconds: number
	watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig8
}

interface OnTap2 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata51
	watchEndpoint: WatchEndpoint10
}

interface Icon17 {
	iconType: string
}

interface AccessibilityData47 {
	label: string
}

interface AccessibilityData46 {
	accessibilityData: AccessibilityData47
}

interface WebCommandMetadata52 {
	sendPost: boolean
	apiUrl: string
}

interface CommandMetadata52 {
	webCommandMetadata: WebCommandMetadata52
}

interface UnifiedSharePanelRenderer3 {
	trackingParams: string
	showLoadingSpinner: boolean
}

interface Popup7 {
	unifiedSharePanelRenderer: UnifiedSharePanelRenderer3
}

interface OpenPopupAction7 {
	popup: Popup7
	popupType: string
	beReused: boolean
}

interface Command18 {
	clickTrackingParams: string
	openPopupAction: OpenPopupAction7
}

interface ShareEntityServiceEndpoint3 {
	serializedShareEntity: string
	commands: Command18[]
}

interface Command17 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata52
	shareEntityServiceEndpoint: ShareEntityServiceEndpoint3
}

interface ButtonRenderer17 {
	style: string
	icon: Icon17
	trackingParams: string
	accessibilityData: AccessibilityData46
	command: Command17
}

interface ShareButton2 {
	buttonRenderer: ButtonRenderer17
}

interface Style4 {
	styleType: string
}

interface DefaultIcon3 {
	iconType: string
}

interface RepeatChapterCommand2 {
	repeat: string
	startTimeMs: string
	endTimeMs: string
	repeatStateEntityKey: string
}

interface DefaultServiceEndpoint3 {
	clickTrackingParams: string
	repeatChapterCommand: RepeatChapterCommand2
}

interface Mutation {
	entityKey: string
	type: string
}

interface EntityBatchUpdate {
	mutations: Mutation[]
}

interface EntityUpdateCommand {
	entityBatchUpdate: EntityBatchUpdate
}

interface RepeatChapterCommand3 {
	repeat: string
}

interface Command19 {
	clickTrackingParams: string
	entityUpdateCommand: EntityUpdateCommand
	repeatChapterCommand: RepeatChapterCommand3
}

interface CommandExecutorCommand6 {
	commands: Command19[]
}

interface ToggledServiceEndpoint4 {
	clickTrackingParams: string
	commandExecutorCommand: CommandExecutorCommand6
}

interface ToggledStyle3 {
	styleType: string
}

interface AccessibilityData49 {
	label: string
}

interface AccessibilityData48 {
	accessibilityData: AccessibilityData49
}

interface AccessibilityData50 {
	label: string
}

interface ToggledAccessibilityData {
	accessibilityData: AccessibilityData50
}

interface ToggleButtonRenderer3 {
	style: Style4
	isToggled: boolean
	isDisabled: boolean
	defaultIcon: DefaultIcon3
	defaultServiceEndpoint: DefaultServiceEndpoint3
	toggledServiceEndpoint: ToggledServiceEndpoint4
	trackingParams: string
	toggledStyle: ToggledStyle3
	accessibilityData: AccessibilityData48
	toggledAccessibilityData: ToggledAccessibilityData
}

interface RepeatButton {
	toggleButtonRenderer: ToggleButtonRenderer3
}

interface Mutation2 {
	entityKey: string
	type: string
}

interface EntityBatchUpdate2 {
	mutations: Mutation2[]
}

interface EntityUpdateCommand2 {
	entityBatchUpdate: EntityBatchUpdate2
}

interface RepeatChapterCommand4 {
	repeat: string
}

interface Command20 {
	clickTrackingParams: string
	entityUpdateCommand: EntityUpdateCommand2
	repeatChapterCommand: RepeatChapterCommand4
}

interface CommandExecutorCommand7 {
	commands: Command20[]
}

interface EndRepeatCommand {
	clickTrackingParams: string
	commandExecutorCommand: CommandExecutorCommand7
}

interface MacroMarkersListItemRenderer {
	title: Title11
	timeDescription: TimeDescription
	thumbnail: Thumbnail17
	onTap: OnTap2
	trackingParams: string
	shareButton: ShareButton2
	repeatButton: RepeatButton
	macroMarkerRepeatStateEntityKey: string
	endRepeatCommand: EndRepeatCommand
	playerStateEntityKey: string
	carouselType: string
	timeDescriptionA11yLabel: string
}

interface Content6 {
	macroMarkersInfoItemRenderer?: MacroMarkersInfoItemRenderer
	macroMarkersListItemRenderer?: MacroMarkersListItemRenderer
}

interface Run45 {
	text: string
}

interface SyncButtonLabel {
	runs: Run45[]
}

interface MacroMarkersListRenderer {
	contents: Content6[]
	syncButtonLabel: SyncButtonLabel
	trackingParams: string
}

interface Run46 {
	text: string
}

interface Title12 {
	runs: Run46[]
}

interface Channel {
	simpleText: string
}

interface Views {
	simpleText: string
}

interface PublishDate {
	simpleText: string
}

interface Value2 {
	simpleText: string
}

interface Label2 {
	simpleText: string
}

interface FactoidRenderer {
	value: Value2
	label: Label2
	accessibilityText: string
}

interface Factoid {
	factoidRenderer: FactoidRenderer
}

interface WebCommandMetadata53 {
	url: string
	webPageType: string
	rootVe: number
	apiUrl: string
}

interface CommandMetadata53 {
	webCommandMetadata: WebCommandMetadata53
}

interface BrowseEndpoint8 {
	browseId: string
	canonicalBaseUrl: string
}

interface ChannelNavigationEndpoint {
	clickTrackingParams: string
	commandMetadata: CommandMetadata53
	browseEndpoint: BrowseEndpoint8
}

interface Thumbnail19 {
	url: string
}

interface ChannelThumbnail2 {
	thumbnails: Thumbnail19[]
}

interface VideoDescriptionHeaderRenderer {
	title: Title12
	channel: Channel
	views: Views
	publishDate: PublishDate
	factoid: Factoid[]
	channelNavigationEndpoint: ChannelNavigationEndpoint
	channelThumbnail: ChannelThumbnail2
}

interface WebCommandMetadata54 {
	url: string
	webPageType: string
	rootVe: number
}

interface CommandMetadata54 {
	webCommandMetadata: WebCommandMetadata54
}

interface UrlEndpoint4 {
	url: string
	target: string
	nofollow: boolean
}

interface NavigationEndpoint18 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata54
	urlEndpoint: UrlEndpoint4
}

interface Run47 {
	text: string
	navigationEndpoint: NavigationEndpoint18
}

interface DescriptionBodyText {
	runs: Run47[]
}

interface ShowMoreText2 {
	simpleText: string
}

interface ShowLessText2 {
	simpleText: string
}

interface ExpandableVideoDescriptionBodyRenderer {
	descriptionBodyText: DescriptionBodyText
	showMoreText: ShowMoreText2
	showLessText: ShowLessText2
}

interface Title13 {
	simpleText: string
}

interface TimeDescription2 {
	simpleText: string
}

interface Thumbnail21 {
	url: string
	width: number
	height: number
}

interface Thumbnail20 {
	thumbnails: Thumbnail21[]
}

interface WebCommandMetadata55 {
	url: string
	webPageType: string
	rootVe: number
}

interface CommandMetadata55 {
	webCommandMetadata: WebCommandMetadata55
}

interface CommonConfig9 {
	url: string
}

interface Html5PlaybackOnesieConfig9 {
	commonConfig: CommonConfig9
}

interface WatchEndpointSupportedOnesieConfig9 {
	html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig9
}

interface WatchEndpoint11 {
	videoId: string
	continuePlayback: boolean
	startTimeSeconds: number
	watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig9
}

interface OnTap3 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata55
	watchEndpoint: WatchEndpoint11
}

interface MacroMarkersListItemRenderer2 {
	title: Title13
	timeDescription: TimeDescription2
	thumbnail: Thumbnail20
	onTap: OnTap3
	trackingParams: string
	layout: string
	carouselType: string
}

interface Card {
	macroMarkersListItemRenderer: MacroMarkersListItemRenderer2
}

interface Title14 {
	simpleText: string
}

interface Text26 {
	simpleText: string
}

interface ChangeEngagementPanelVisibilityAction6 {
	targetId: string
	visibility: string
}

interface Icon18 {
	iconType: string
}

interface Accessibility34 {
	label: string
}

interface AccessibilityData52 {
	label: string
}

interface AccessibilityData51 {
	accessibilityData: AccessibilityData52
}

interface ChangeEngagementPanelVisibilityAction7 {
	targetId: string
	visibility: string
}

interface Command24 {
	clickTrackingParams: string
	changeEngagementPanelVisibilityAction: ChangeEngagementPanelVisibilityAction7
}

interface CommandExecutorCommand9 {
	commands: Command24[]
}

interface Command23 {
	clickTrackingParams: string
	commandExecutorCommand: CommandExecutorCommand9
}

interface ButtonRenderer19 {
	icon: Icon18
	accessibility: Accessibility34
	trackingParams: string
	accessibilityData: AccessibilityData51
	command: Command23
}

interface NavigationButton2 {
	buttonRenderer: ButtonRenderer19
}

interface EngagementPanelHeaderShowNavigationButtonCommand {
	targetId: string
	navigationButton: NavigationButton2
}

interface ScrollToEngagementPanelCommand3 {
	targetId: string
}

interface Command22 {
	clickTrackingParams: string
	changeEngagementPanelVisibilityAction: ChangeEngagementPanelVisibilityAction6
	engagementPanelHeaderShowNavigationButtonCommand: EngagementPanelHeaderShowNavigationButtonCommand
	scrollToEngagementPanelCommand: ScrollToEngagementPanelCommand3
}

interface CommandExecutorCommand8 {
	commands: Command22[]
}

interface Command21 {
	clickTrackingParams: string
	commandExecutorCommand: CommandExecutorCommand8
}

interface ButtonRenderer18 {
	style: string
	text: Text26
	trackingParams: string
	command: Command21
}

interface NavigationButton {
	buttonRenderer: ButtonRenderer18
}

interface RichListHeaderRenderer {
	title: Title14
	trackingParams: string
	navigationButton: NavigationButton
}

interface Header {
	richListHeaderRenderer: RichListHeaderRenderer
}

interface Style5 {
	type: string
}

interface HorizontalCardListRenderer {
	cards: Card[]
	trackingParams: string
	header: Header
	style: Style5
	centerItems: boolean
}

interface Run48 {
	text: string
}

interface SectionTitle {
	runs: Run48[]
}

interface Thumbnail23 {
	url: string
	width: number
	height: number
}

interface Thumbnail22 {
	thumbnails: Thumbnail23[]
}

interface Title15 {
	simpleText: string
}

interface ShortBylineText3 {
	simpleText: string
}

interface Run49 {
	text: string
}

interface VideoCountShortText2 {
	runs: Run49[]
}

interface WebCommandMetadata56 {
	url: string
	webPageType: string
	rootVe: number
	apiUrl: string
}

interface CommandMetadata56 {
	webCommandMetadata: WebCommandMetadata56
}

interface BrowseEndpoint9 {
	browseId: string
}

interface NavigationEndpoint19 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata56
	browseEndpoint: BrowseEndpoint9
}

interface StructuredDescriptionPlaylistLockupRenderer {
	thumbnail: Thumbnail22
	title: Title15
	shortBylineText: ShortBylineText3
	videoCountShortText: VideoCountShortText2
	navigationEndpoint: NavigationEndpoint19
	trackingParams: string
	thumbnailWidth: number
	aspectRatio: number
	maxLinesTitle: number
	maxLinesShortBylineText: number
	overlayPosition: string
}

interface MediaLockup {
	structuredDescriptionPlaylistLockupRenderer: StructuredDescriptionPlaylistLockupRenderer
}

interface VideoDescriptionCourseSectionRenderer {
	sectionTitle: SectionTitle
	mediaLockups: MediaLockup[]
}

interface Item9 {
	videoDescriptionHeaderRenderer: VideoDescriptionHeaderRenderer
	expandableVideoDescriptionBodyRenderer: ExpandableVideoDescriptionBodyRenderer
	horizontalCardListRenderer: HorizontalCardListRenderer
	videoDescriptionCourseSectionRenderer: VideoDescriptionCourseSectionRenderer
}

interface StructuredDescriptionContentRenderer {
	items: Item9[]
}

interface WebCommandMetadata57 {
	sendPost: boolean
	apiUrl: string
}

interface CommandMetadata57 {
	webCommandMetadata: WebCommandMetadata57
}

interface ContinuationCommand5 {
	token: string
	request: string
}

interface ContinuationEndpoint3 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata57
	continuationCommand: ContinuationCommand5
}

interface ContinuationItemRenderer3 {
	trigger: string
	continuationEndpoint: ContinuationEndpoint3
}

interface Content8 {
	continuationItemRenderer: ContinuationItemRenderer3
	playlistVideoListRenderer?: {
		contents?: [
			{
				playlistVideoRenderer: {
					videoId: string
					thumbnail: {
						thumbnails: Thumbnail[]
					}
					title: {
						runs: {
							text: string
						}[]
					}
					index: {
						simpleText: string
					}
					shortBylineText: {
						runs: {
							text: string
							navigationEndpoint: {
								browseEndpoint: {
									browseId: string
									canonicalBaseUrl: string
								}
							}
						}[]
					}
					navigationEndpoint: {
						watchEndpoint: {
							videoId: string
							playlistId: string
							index: number
							startTimeSeconds: number
						}
					}
					lengthSeconds: string
					isPlayable: boolean
					isWatched: boolean
				}
			}
		]
	}
}

interface ItemSectionRenderer3 {
	contents: Content8[]
	trackingParams: string
	sectionIdentifier: string
	targetId: string
}

interface Content7 {
	itemSectionRenderer: ItemSectionRenderer3
}

interface SectionListRenderer {
	contents: Content7[]
	trackingParams: string
}

interface WebCommandMetadata58 {
	sendPost: boolean
	apiUrl: string
}

interface CommandMetadata58 {
	webCommandMetadata: WebCommandMetadata58
}

interface GetTranscriptEndpoint {
	params: string
}

interface ContinuationEndpoint4 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata58
	getTranscriptEndpoint: GetTranscriptEndpoint
}

interface ContinuationItemRenderer4 {
	trigger: string
	continuationEndpoint: ContinuationEndpoint4
}

interface Content5 {
	adsEngagementPanelContentRenderer: AdsEngagementPanelContentRenderer
	macroMarkersListRenderer: MacroMarkersListRenderer
	structuredDescriptionContentRenderer: StructuredDescriptionContentRenderer
	sectionListRenderer: SectionListRenderer
	continuationItemRenderer: ContinuationItemRenderer4
}

interface Visibility2 {
	types: string
}

interface LoggingDirectives2 {
	trackingParams: string
	visibility: Visibility2
	enableDisplayloggerExperiment: boolean
}

interface Run50 {
	text: string
}

interface Title16 {
	runs: Run50[]
	simpleText: string
}

interface Icon19 {
	iconType: string
}

interface Accessibility35 {
	label: string
}

interface AccessibilityData54 {
	label: string
}

interface AccessibilityData53 {
	accessibilityData: AccessibilityData54
}

interface ChangeEngagementPanelVisibilityAction8 {
	targetId: string
	visibility: string
}

interface ChangeEngagementPanelVisibilityAction9 {
	targetId: string
	visibility: string
}

interface UpdateToggleButtonStateCommand3 {
	toggled: boolean
	buttonId: string
}

interface Command26 {
	clickTrackingParams: string
	changeEngagementPanelVisibilityAction: ChangeEngagementPanelVisibilityAction9
	updateToggleButtonStateCommand: UpdateToggleButtonStateCommand3
}

interface CommandExecutorCommand10 {
	commands: Command26[]
}

interface Command25 {
	clickTrackingParams: string
	changeEngagementPanelVisibilityAction: ChangeEngagementPanelVisibilityAction8
	commandExecutorCommand: CommandExecutorCommand10
}

interface ButtonRenderer20 {
	icon: Icon19
	accessibility: Accessibility35
	trackingParams: string
	accessibilityData: AccessibilityData53
	command: Command25
	style: string
	size: string
}

interface VisibilityButton {
	buttonRenderer: ButtonRenderer20
}

interface Run51 {
	text: string
}

interface ContextualInfo {
	runs: Run51[]
}

interface WebCommandMetadata59 {
	sendPost: boolean
	apiUrl: string
}

interface CommandMetadata59 {
	webCommandMetadata: WebCommandMetadata59
}

interface ShowReloadUiCommand2 {
	targetId: string
}

interface Command27 {
	clickTrackingParams: string
	showReloadUiCommand: ShowReloadUiCommand2
}

interface ContinuationCommand6 {
	token: string
	request: string
	command: Command27
}

interface ServiceEndpoint12 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata59
	continuationCommand: ContinuationCommand6
}

interface SubMenuItem {
	title: string
	selected: boolean
	serviceEndpoint: ServiceEndpoint12
	trackingParams: string
}

interface Icon20 {
	iconType: string
}

interface AccessibilityData55 {
	label: string
}

interface Accessibility36 {
	accessibilityData: AccessibilityData55
}

interface SortFilterSubMenuRenderer {
	subMenuItems: SubMenuItem[]
	icon: Icon20
	accessibility: Accessibility36
	trackingParams: string
}

interface Run52 {
	text: string
}

interface Text27 {
	runs: Run52[]
}

interface WebCommandMetadata60 {
	sendPost: boolean
}

interface CommandMetadata60 {
	webCommandMetadata: WebCommandMetadata60
}

interface SignalAction3 {
	signal: string
}

interface Action15 {
	clickTrackingParams: string
	signalAction: SignalAction3
}

interface SignalServiceEndpoint7 {
	signal: string
	actions: Action15[]
}

interface ServiceEndpoint13 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata60
	signalServiceEndpoint: SignalServiceEndpoint7
}

interface MenuServiceItemRenderer7 {
	text: Text27
	serviceEndpoint: ServiceEndpoint13
	trackingParams: string
}

interface Item10 {
	menuServiceItemRenderer: MenuServiceItemRenderer7
}

interface AccessibilityData56 {
	label: string
}

interface Accessibility37 {
	accessibilityData: AccessibilityData56
}

interface MenuRenderer6 {
	items: Item10[]
	trackingParams: string
	accessibility: Accessibility37
}

interface Menu4 {
	sortFilterSubMenuRenderer: SortFilterSubMenuRenderer
	menuRenderer: MenuRenderer6
}

interface EngagementPanelTitleHeaderRenderer {
	title: Title16
	visibilityButton: VisibilityButton
	trackingParams: string
	contextualInfo: ContextualInfo
	menu: Menu4
}

interface Header2 {
	engagementPanelTitleHeaderRenderer: EngagementPanelTitleHeaderRenderer
}

interface ScrollToEngagementPanelCommand4 {
	targetId: string
}

interface OnShowCommand {
	clickTrackingParams: string
	scrollToEngagementPanelCommand: ScrollToEngagementPanelCommand4
}

interface EngagementPanelSectionListRenderer {
	content: Content5
	targetId: string
	visibility: string
	loggingDirectives: LoggingDirectives2
	panelIdentifier: string
	header: Header2
	veType?: number
	onShowCommands: OnShowCommand[]
}

interface EngagementPanel {
	engagementPanelSectionListRenderer: EngagementPanelSectionListRenderer
}

interface IconImage {
	iconType: string
}

interface Run53 {
	text: string
}

interface TooltipText {
	runs: Run53[]
}

interface WebCommandMetadata61 {
	url: string
	webPageType: string
	rootVe: number
	apiUrl: string
}

interface CommandMetadata61 {
	webCommandMetadata: WebCommandMetadata61
}

interface BrowseEndpoint10 {
	browseId: string
}

interface Endpoint2 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata61
	browseEndpoint: BrowseEndpoint10
}

interface TopbarLogoRenderer {
	iconImage: IconImage
	tooltipText: TooltipText
	endpoint: Endpoint2
	trackingParams: string
	overrideEntityKey: string
}

interface Logo {
	topbarLogoRenderer: TopbarLogoRenderer
}

interface Icon21 {
	iconType: string
}

interface Run54 {
	text: string
}

interface PlaceholderText {
	runs: Run54[]
}

interface WebSearchboxConfig {
	requestLanguage: string
	requestDomain: string
	hasOnscreenKeyboard: boolean
	focusSearchbox: boolean
}

interface Config {
	webSearchboxConfig: WebSearchboxConfig
}

interface WebCommandMetadata62 {
	url: string
	webPageType: string
	rootVe: number
}

interface CommandMetadata62 {
	webCommandMetadata: WebCommandMetadata62
}

interface SearchEndpoint2 {
	query: string
}

interface SearchEndpoint {
	clickTrackingParams: string
	commandMetadata: CommandMetadata62
	searchEndpoint: SearchEndpoint2
}

interface Icon22 {
	iconType: string
}

interface AccessibilityData58 {
	label: string
}

interface AccessibilityData57 {
	accessibilityData: AccessibilityData58
}

interface ButtonRenderer21 {
	style: string
	size: string
	isDisabled: boolean
	icon: Icon22
	trackingParams: string
	accessibilityData: AccessibilityData57
}

interface ClearButton {
	buttonRenderer: ButtonRenderer21
}

interface FusionSearchboxRenderer {
	icon: Icon21
	placeholderText: PlaceholderText
	config: Config
	trackingParams: string
	searchEndpoint: SearchEndpoint
	clearButton: ClearButton
}

interface Searchbox {
	fusionSearchboxRenderer: FusionSearchboxRenderer
}

interface Icon23 {
	iconType: string
}

interface Icon24 {
	iconType: string
}

interface Run55 {
	text: string
}

interface Title17 {
	runs: Run55[]
}

interface WebCommandMetadata63 {
	url: string
	webPageType: string
	rootVe: number
	apiUrl: string
}

interface CommandMetadata63 {
	webCommandMetadata: WebCommandMetadata63
}

interface UploadEndpoint {
	hack: boolean
}

interface SignalNavigationEndpoint {
	signal: string
}

interface BrowseEndpoint11 {
	browseId: string
	params: string
}

interface NavigationEndpoint20 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata63
	uploadEndpoint: UploadEndpoint
	signalNavigationEndpoint: SignalNavigationEndpoint
	browseEndpoint: BrowseEndpoint11
}

interface CompactLinkRenderer {
	icon: Icon24
	title: Title17
	navigationEndpoint: NavigationEndpoint20
	trackingParams: string
	style: string
}

interface Item11 {
	compactLinkRenderer: CompactLinkRenderer
}

interface MultiPageMenuSectionRenderer {
	items: Item11[]
	trackingParams: string
}

interface Section {
	multiPageMenuSectionRenderer: MultiPageMenuSectionRenderer
}

interface MultiPageMenuRenderer {
	sections: Section[]
	trackingParams: string
	style: string
}

interface MenuRenderer7 {
	multiPageMenuRenderer: MultiPageMenuRenderer
}

interface AccessibilityData59 {
	label: string
}

interface Accessibility38 {
	accessibilityData: AccessibilityData59
}

interface Thumbnail24 {
	url: string
	width: number
	height: number
}

interface AccessibilityData60 {
	label: string
}

interface Accessibility39 {
	accessibilityData: AccessibilityData60
}

interface Avatar {
	thumbnails: Thumbnail24[]
	accessibility: Accessibility39
}

interface WebCommandMetadata64 {
	sendPost: boolean
	apiUrl: string
}

interface CommandMetadata64 {
	webCommandMetadata: WebCommandMetadata64
}

interface MultiPageMenuRenderer2 {
	trackingParams: string
	style: string
	showLoadingSpinner: boolean
}

interface Popup8 {
	multiPageMenuRenderer: MultiPageMenuRenderer2
}

interface OpenPopupAction8 {
	popup: Popup8
	popupType: string
	beReused: boolean
}

interface Action16 {
	clickTrackingParams: string
	openPopupAction: OpenPopupAction8
}

interface SignalServiceEndpoint8 {
	signal: string
	actions: Action16[]
}

interface MenuRequest {
	clickTrackingParams: string
	commandMetadata: CommandMetadata64
	signalServiceEndpoint: SignalServiceEndpoint8
}

interface TopbarMenuButtonRenderer {
	icon: Icon23
	menuRenderer: MenuRenderer7
	trackingParams: string
	accessibility: Accessibility38
	tooltip: string
	style: string
	avatar: Avatar
	menuRequest: MenuRequest
}

interface Icon25 {
	iconType: string
}

interface WebCommandMetadata65 {
	sendPost: boolean
	apiUrl: string
}

interface CommandMetadata65 {
	webCommandMetadata: WebCommandMetadata65
}

interface MultiPageMenuRenderer3 {
	trackingParams: string
	style: string
	showLoadingSpinner: boolean
}

interface Popup9 {
	multiPageMenuRenderer: MultiPageMenuRenderer3
}

interface OpenPopupAction9 {
	popup: Popup9
	popupType: string
	beReused: boolean
}

interface Action17 {
	clickTrackingParams: string
	openPopupAction: OpenPopupAction9
}

interface SignalServiceEndpoint9 {
	signal: string
	actions: Action17[]
}

interface MenuRequest2 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata65
	signalServiceEndpoint: SignalServiceEndpoint9
}

interface AccessibilityData61 {
	label: string
}

interface Accessibility40 {
	accessibilityData: AccessibilityData61
}

interface WebCommandMetadata66 {
	sendPost: boolean
	apiUrl: string
}

interface CommandMetadata66 {
	webCommandMetadata: WebCommandMetadata66
}

interface SignalServiceEndpoint10 {
	signal: string
}

interface UpdateUnseenCountEndpoint {
	clickTrackingParams: string
	commandMetadata: CommandMetadata66
	signalServiceEndpoint: SignalServiceEndpoint10
}

interface NotificationTopbarButtonRenderer {
	icon: Icon25
	menuRequest: MenuRequest2
	style: string
	trackingParams: string
	accessibility: Accessibility40
	tooltip: string
	updateUnseenCountEndpoint: UpdateUnseenCountEndpoint
	notificationCount: number
	handlerDatas: string[]
}

interface TopbarButton {
	topbarMenuButtonRenderer: TopbarMenuButtonRenderer
	notificationTopbarButtonRenderer: NotificationTopbarButtonRenderer
}

interface Run56 {
	text: string
}

interface Title18 {
	runs: Run56[]
}

interface Run57 {
	text: string
}

interface Title19 {
	runs: Run57[]
}

interface Run58 {
	text: string
}

interface Label3 {
	runs: Run58[]
}

interface AccessibilityData62 {
	label: string
}

interface HotkeyAccessibilityLabel {
	accessibilityData: AccessibilityData62
}

interface HotkeyDialogSectionOptionRenderer {
	label: Label3
	hotkey: string
	hotkeyAccessibilityLabel: HotkeyAccessibilityLabel
}

interface Option {
	hotkeyDialogSectionOptionRenderer: HotkeyDialogSectionOptionRenderer
}

interface HotkeyDialogSectionRenderer {
	title: Title19
	options: Option[]
}

interface Section2 {
	hotkeyDialogSectionRenderer: HotkeyDialogSectionRenderer
}

interface Run59 {
	text: string
}

interface Text28 {
	runs: Run59[]
}

interface ButtonRenderer22 {
	style: string
	size: string
	isDisabled: boolean
	text: Text28
	trackingParams: string
}

interface DismissButton {
	buttonRenderer: ButtonRenderer22
}

interface HotkeyDialogRenderer {
	title: Title18
	sections: Section2[]
	dismissButton: DismissButton
	trackingParams: string
}

interface HotkeyDialog {
	hotkeyDialogRenderer: HotkeyDialogRenderer
}

interface WebCommandMetadata67 {
	sendPost: boolean
}

interface CommandMetadata67 {
	webCommandMetadata: WebCommandMetadata67
}

interface SignalAction4 {
	signal: string
}

interface Action18 {
	clickTrackingParams: string
	signalAction: SignalAction4
}

interface SignalServiceEndpoint11 {
	signal: string
	actions: Action18[]
}

interface Command28 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata67
	signalServiceEndpoint: SignalServiceEndpoint11
}

interface ButtonRenderer23 {
	trackingParams: string
	command: Command28
}

interface BackButton {
	buttonRenderer: ButtonRenderer23
}

interface WebCommandMetadata68 {
	sendPost: boolean
}

interface CommandMetadata68 {
	webCommandMetadata: WebCommandMetadata68
}

interface SignalAction5 {
	signal: string
}

interface Action19 {
	clickTrackingParams: string
	signalAction: SignalAction5
}

interface SignalServiceEndpoint12 {
	signal: string
	actions: Action19[]
}

interface Command29 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata68
	signalServiceEndpoint: SignalServiceEndpoint12
}

interface ButtonRenderer24 {
	trackingParams: string
	command: Command29
}

interface ForwardButton {
	buttonRenderer: ButtonRenderer24
}

interface Run60 {
	text: string
}

interface Text29 {
	runs: Run60[]
}

interface WebCommandMetadata69 {
	sendPost: boolean
}

interface CommandMetadata69 {
	webCommandMetadata: WebCommandMetadata69
}

interface SignalAction6 {
	signal: string
}

interface Action20 {
	clickTrackingParams: string
	signalAction: SignalAction6
}

interface SignalServiceEndpoint13 {
	signal: string
	actions: Action20[]
}

interface Command30 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata69
	signalServiceEndpoint: SignalServiceEndpoint13
}

interface ButtonRenderer25 {
	style: string
	size: string
	isDisabled: boolean
	text: Text29
	trackingParams: string
	command: Command30
}

interface A11ySkipNavigationButton {
	buttonRenderer: ButtonRenderer25
}

interface WebCommandMetadata70 {
	sendPost: boolean
}

interface CommandMetadata70 {
	webCommandMetadata: WebCommandMetadata70
}

interface Run61 {
	text: string
}

interface PlaceholderHeader {
	runs: Run61[]
}

interface Run62 {
	text: string
}

interface PromptHeader {
	runs: Run62[]
}

interface Run63 {
	text: string
}

interface ExampleQuery1 {
	runs: Run63[]
}

interface Run64 {
	text: string
}

interface ExampleQuery2 {
	runs: Run64[]
}

interface Run65 {
	text: string
}

interface PromptMicrophoneLabel {
	runs: Run65[]
}

interface Run66 {
	text: string
}

interface LoadingHeader {
	runs: Run66[]
}

interface Run67 {
	text: string
}

interface ConnectionErrorHeader {
	runs: Run67[]
}

interface Run68 {
	text: string
}

interface ConnectionErrorMicrophoneLabel {
	runs: Run68[]
}

interface Run69 {
	text: string
}

interface PermissionsHeader {
	runs: Run69[]
}

interface Run70 {
	text: string
}

interface PermissionsSubtext {
	runs: Run70[]
}

interface Run71 {
	text: string
}

interface DisabledHeader {
	runs: Run71[]
}

interface Run72 {
	text: string
}

interface DisabledSubtext {
	runs: Run72[]
}

interface Run73 {
	text: string
}

interface MicrophoneButtonAriaLabel {
	runs: Run73[]
}

interface Icon26 {
	iconType: string
}

interface AccessibilityData64 {
	label: string
}

interface AccessibilityData63 {
	accessibilityData: AccessibilityData64
}

interface ButtonRenderer27 {
	style: string
	size: string
	isDisabled: boolean
	icon: Icon26
	trackingParams: string
	accessibilityData: AccessibilityData63
}

interface ExitButton {
	buttonRenderer: ButtonRenderer27
}

interface Run74 {
	text: string
}

interface MicrophoneOffPromptHeader {
	runs: Run74[]
}

interface VoiceSearchDialogRenderer {
	placeholderHeader: PlaceholderHeader
	promptHeader: PromptHeader
	exampleQuery1: ExampleQuery1
	exampleQuery2: ExampleQuery2
	promptMicrophoneLabel: PromptMicrophoneLabel
	loadingHeader: LoadingHeader
	connectionErrorHeader: ConnectionErrorHeader
	connectionErrorMicrophoneLabel: ConnectionErrorMicrophoneLabel
	permissionsHeader: PermissionsHeader
	permissionsSubtext: PermissionsSubtext
	disabledHeader: DisabledHeader
	disabledSubtext: DisabledSubtext
	microphoneButtonAriaLabel: MicrophoneButtonAriaLabel
	exitButton: ExitButton
	trackingParams: string
	microphoneOffPromptHeader: MicrophoneOffPromptHeader
}

interface Popup10 {
	voiceSearchDialogRenderer: VoiceSearchDialogRenderer
}

interface OpenPopupAction10 {
	popup: Popup10
	popupType: string
}

interface Action21 {
	clickTrackingParams: string
	openPopupAction: OpenPopupAction10
}

interface SignalServiceEndpoint14 {
	signal: string
	actions: Action21[]
}

interface ServiceEndpoint14 {
	clickTrackingParams: string
	commandMetadata: CommandMetadata70
	signalServiceEndpoint: SignalServiceEndpoint14
}

interface Icon27 {
	iconType: string
}

interface AccessibilityData66 {
	label: string
}

interface AccessibilityData65 {
	accessibilityData: AccessibilityData66
}

interface ButtonRenderer26 {
	style: string
	size: string
	isDisabled: boolean
	serviceEndpoint: ServiceEndpoint14
	icon: Icon27
	tooltip: string
	trackingParams: string
	accessibilityData: AccessibilityData65
}

interface VoiceSearchButton {
	buttonRenderer: ButtonRenderer26
}

interface DesktopTopbarRenderer {
	logo: Logo
	searchbox: Searchbox
	trackingParams: string
	topbarButtons: TopbarButton[]
	hotkeyDialog: HotkeyDialog
	backButton: BackButton
	forwardButton: ForwardButton
	a11ySkipNavigationButton: A11ySkipNavigationButton
	voiceSearchButton: VoiceSearchButton
}

interface Topbar {
	desktopTopbarRenderer: DesktopTopbarRenderer
}

interface GradientColorConfig {
	darkThemeColor: any
	startLocation: number
}

interface AnimationConfig {
	minImageUpdateIntervalMs: number
	crossfadeDurationMs: number
	crossfadeStartOffset: number
	maxFrameRate: number
}

interface Config2 {
	lightThemeBackgroundColor: number
	darkThemeBackgroundColor: number
	animationConfig: AnimationConfig
	colorSourceSizeMultiplier: number
	applyClientImageBlur: boolean
	bottomColorSourceHeightMultiplier: number
	maxBottomColorSourceHeight: number
	colorSourceWidthMultiplier: number
	colorSourceHeightMultiplier: number
	blurStrength: number
}

interface CinematicContainerRenderer {
	gradientColorConfig: GradientColorConfig[]
	presentationStyle: string
	config: Config2
}

interface PageVisualEffect {
	cinematicContainerRenderer: CinematicContainerRenderer
}

interface Options {
	persistenceOption: string
}

interface TranscriptTrackSelectionEntity {
	key: string
	selectedTrackIndex: number
	serializedParams: string
}

interface TranscriptSearchBoxStateEntity {
	key: string
	isHidden: boolean
}

interface SubscriptionStateEntity {
	key: string
	subscribed: boolean
}

interface Payload {
	transcriptTrackSelectionEntity: TranscriptTrackSelectionEntity
	transcriptSearchBoxStateEntity: TranscriptSearchBoxStateEntity
	subscriptionStateEntity: SubscriptionStateEntity
}

interface Mutation3 {
	entityKey: string
	type: string
	options: Options
	payload: Payload
}

interface Timestamp {
	seconds: string
	nanos: number
}

interface EntityBatchUpdate3 {
	mutations: Mutation3[]
	timestamp: Timestamp
}

interface TemplateUpdate {
	identifier: string
	serializedTemplateConfig: string
	dependencies: string[]
}

interface ResourceStatus {
	identifier: string
	status: string
}

interface ResourceStatusInResponseCheck {
	resourceStatuses: ResourceStatus[]
	serverBuildLabel: string
}

interface Update {
	templateUpdate: TemplateUpdate
	resourceStatusInResponseCheck: ResourceStatusInResponseCheck
}

interface ElementUpdate {
	updates: Update[]
}

interface FrameworkUpdates {
	entityBatchUpdate: EntityBatchUpdate3
	elementUpdate: ElementUpdate
}

export interface MetaData {
	playlistMetadataRenderer: {
		title: string
		description: string
		androidAppindexingLink: string
		iosAppindexingLink: string
	}
}

interface ConfigInfo {
	appInstallData: string
}

interface Client {
	hl: string
	gl: string
	remoteHost: string
	deviceMake: string
	deviceModel: string
	visitorData: string
	userAgent: string
	clientName: string
	clientVersion: string
	osVersion: string
	originalUrl: string
	platform: string
	clientFormFactor: string
	configInfo: ConfigInfo
	acceptHeader: string
	deviceExperimentId: string
}

interface User {
	lockedSafetyMode: boolean
}

interface Request {
	useSsl: boolean
}

interface ClickTracking {
	clickTrackingParams: string
}

export interface Context {
	client: Client
	user: User
	request: Request
	clickTracking: ClickTracking
}

export interface InitialData {
	responseContext: ResponseContext
	contents: Contents
	currentVideoEndpoint: CurrentVideoEndpoint
	trackingParams: string
	playerOverlays: PlayerOverlays
	onResponseReceivedEndpoints: OnResponseReceivedEndpoint[]
	engagementPanels: EngagementPanel[]
	topbar: Topbar
	pageVisualEffects: PageVisualEffect[]
	frameworkUpdates: FrameworkUpdates
	metadata: MetaData
}
