import type { ITEM } from '../types'
import { getYouTubePage } from './parse'
import { VideoRender } from './query'
const youtubeEndpoint = `https://www.youtube.com`
const _locale_ = 'hl=en&gl=us'

export const GetPlaylistData = async (playlistId: s, limit = 0) => {
	const endpoint = `${youtubeEndpoint}/playlist?list=${playlistId}&${_locale_}`

	const page = await getYouTubePage(endpoint)
	const sectionListRenderer = await page.initialData
	// @ts-expect-error
	const metadata = await sectionListRenderer.metadata
	if (!sectionListRenderer?.contents) {
		return
	}

	const videoItems: any[] = await //@ts-expect-error
	sectionListRenderer.contents.twoColumnBrowseResultsRenderer.tabs[0]
		.tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer
		.contents[0].playlistVideoListRenderer.contents
	let items: ITEM[] = []
	videoItems.forEach(item => {
		let videoRender = item.playlistVideoRenderer
		if (videoRender && videoRender.videoId) {
			items.push(VideoRender(item))
		}
	})
	const itemsResult = limit != 0 ? items.slice(0, limit) : items
	return {
		items: itemsResult,
		metadata: metadata,
	}
}
