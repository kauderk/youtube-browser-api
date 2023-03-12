import type { ITEM } from '../types'
import { getEndpoint } from '../utils'
import { getYouTubePage } from './parse'
import { VideoRender } from './query'

export const GetPlaylistData = async (params: {
	playlistId: string
	limit: number
}) => {
	const endpoint = getEndpoint('/playlist', {
		list: params.playlistId,
	})

	const page = await getYouTubePage(endpoint)
	const sectionListRenderer = page.initialData

	if (!sectionListRenderer?.contents) {
		return
	}

	const videoItems =
		sectionListRenderer.contents.twoColumnBrowseResultsRenderer?.tabs[0]
			?.tabRenderer?.content?.sectionListRenderer?.contents[0]
			.itemSectionRenderer.contents[0]?.playlistVideoListRenderer
			?.contents ?? []
	let items: ITEM[] = []
	videoItems.forEach(item => {
		let videoRender = item.playlistVideoRenderer
		if (videoRender && videoRender.videoId) {
			items.push(VideoRender(item))
		}
	})
	const limit = params.limit
	return {
		items: !limit ? items : items.slice(0, limit),
		metadata: sectionListRenderer.metadata,
	}
}
