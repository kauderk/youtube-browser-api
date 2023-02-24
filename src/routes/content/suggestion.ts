import { getYouTubePage, type Page } from '../data/parse'

const youtubeEndpoint = `https://www.youtube.com`
const _locale_ = 'hl=en&gl=us'

export async function getCompactVideoRenderer(videoId: string) {
	const endpoint = `${youtubeEndpoint}/watch?v=${videoId}&${_locale_}`
	const page = await getYouTubePage(endpoint)
	const next = getNextResult(page)

	return next.secondaryResults.secondaryResults.results
		.filter(y => y.hasOwnProperty('compactVideoRenderer'))

		.map(({ compactVideoRenderer }) => ({
			id: compactVideoRenderer.videoId,
			type: 'video',
			thumbnail: compactVideoRenderer.thumbnail.thumbnails,
			title: compactVideoRenderer.title.simpleText,
			channelTitle: compactVideoRenderer.shortBylineText.runs[0].text,
			shortBylineText: compactVideoRenderer.shortBylineText.runs[0].text,
			length: compactVideoRenderer.lengthText,
			isLive:
				compactVideoRenderer.badges?.[0]?.metadataBadgeRenderer
					?.style == 'BADGE_STYLE_TYPE_LIVE_NOW',
		}))
}

export function getNextResult(page: Page) {
	return page.initialData.contents.twoColumnWatchNextResults
}
