import type { ITEM } from '../types'
export const youtubeEndpoint = `https://www.youtube.com`
export const _locale_ = 'hl=en&gl=us'
export let eneabledLog = false
export const setEnabledConsoleLog = (b: b) => (eneabledLog = b)

export function VideoRender(json: {
	videoRenderer?: any
	playlistVideoRenderer?: any
}): ITEM {
	if (!(json && (json.videoRenderer || json.playlistVideoRenderer))) {
		return {}
	}

	let videoRenderer = null
	if (json.videoRenderer) {
		videoRenderer = json.videoRenderer
	} else if (json.playlistVideoRenderer) {
		videoRenderer = json.playlistVideoRenderer
	}

	let isLive =
		videoRenderer.badges?.length &&
		videoRenderer.badges[0].metadataBadgeRenderer?.style ==
			'BADGE_STYLE_TYPE_LIVE_NOW'

	// @ts-expect-error
	videoRenderer.thumbnailOverlays?.forEach(item => {
		if (
			item.thumbnailOverlayTimeStatusRenderer &&
			item.thumbnailOverlayTimeStatusRenderer?.style == 'LIVE'
		) {
			isLive = true
		}
	})

	const id = videoRenderer.videoId
	const thumbnail = videoRenderer.thumbnail
	const title = videoRenderer.title.runs[0].text
	const shortBylineText = videoRenderer.shortBylineText || ''
	const lengthText = videoRenderer.lengthText ? videoRenderer.lengthText : ''
	const channelTitle = videoRenderer.ownerText?.runs?.[0].text || ''

	return {
		id,
		type: 'video',
		thumbnail,
		title,
		channelTitle,
		shortBylineText,
		length: lengthText,
		isLive,
	}
}
