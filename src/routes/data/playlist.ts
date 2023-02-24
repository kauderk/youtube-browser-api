import type { ITEM } from '../types'
import { getYouTubePage } from './parse'
import { VideoRender } from './query'
const youtubeEndpoint = `https://www.youtube.com`
const _locale_ = 'hl=en&gl=us'

export const GetPlaylistData = async (params: {
	playlistId: string
	limit: number
}) => {
	const endpoint = `${youtubeEndpoint}/playlist?list=${params.playlistId}&${_locale_}`

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
