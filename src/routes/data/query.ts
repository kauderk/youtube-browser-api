import type { ITEM } from '../types'

export let eneabledLog = false
export const setEnabledConsoleLog = (b: boolean) => (eneabledLog = b)

export function VideoRender(json: {
	videoRenderer?: any
	playlistVideoRenderer?: any
}): ITEM {
	const videoRenderer = json?.videoRenderer || json?.playlistVideoRenderer
	if (!videoRenderer) {
		return {}
	}

	return {
		id: videoRenderer.videoId,
		type: 'video',
		thumbnail: videoRenderer.thumbnail,
		title: videoRenderer.title.runs[0].text,
		channelTitle: videoRenderer.ownerText?.runs?.[0].text || '',
		shortBylineText: videoRenderer.shortBylineText || '',
		length: videoRenderer.lengthText ? videoRenderer.lengthText : '',
		isLive:
			videoRenderer.badges?.[0]?.metadataBadgeRenderer?.style ==
				'BADGE_STYLE_TYPE_LIVE_NOW' ||
			videoRenderer.thumbnailOverlays?.some?.(
				// @ts-expect-error
				item => item.thumbnailOverlayTimeStatusRenderer?.style == 'LIVE'
			),
	}
}
