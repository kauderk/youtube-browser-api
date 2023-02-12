import { getYouTubePage } from './parse'
import { VideoRender } from './query'
import type { ITEM } from '../types'
const youtubeEndpoint = `https://www.youtube.com`
const _locale_ = 'hl=en&gl=us'

export async function GetSuggestData(limit = 0) {
	const endpoint = `${youtubeEndpoint}?${_locale_}`

	const page = await getYouTubePage(endpoint)
	// @ts-expect-error
	const sectionListRenderer: any[] = await page.contents
		.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content
		.richGridRenderer.contents
	let items: ITEM[] = []
	let otherItems = []
	sectionListRenderer.forEach(item => {
		if (item.richItemRenderer && item.richItemRenderer.content) {
			let videoRender = item.richItemRenderer.content.videoRenderer
			if (videoRender && videoRender.videoId) {
				items.push(VideoRender(item.richItemRenderer.content))
			} else {
				otherItems.push(videoRender)
			}
		}
	})
	const itemsResult = limit != 0 ? items.slice(0, limit) : items

	return { items: itemsResult }
}
