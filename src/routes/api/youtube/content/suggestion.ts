import { getYouTubePage, type Page } from '../data/parse'

const youtubeEndpoint = `https://www.youtube.com`
const _locale_ = 'hl=en&gl=us'

export async function getCompactVideoRenderer(videoId: s) {
	const endpoint = `${youtubeEndpoint}/watch?v=${videoId}&${_locale_}`
	const page = await getYouTubePage(endpoint)
	const next = getNextResult(page)

	return (
		next.secondaryResults.secondaryResults.results
			.filter(y => y.hasOwnProperty('compactVideoRenderer'))
			// @ts-expect-error
			.map(x => compactVideoRenderer(x.compactVideoRenderer))
	)
}

export function getNextResult(page: Page) {
	return page.initdata.contents.twoColumnWatchNextResults
}

function compactVideoRenderer(compactVideoRendererJson: any) {
	return {
		id: compactVideoRendererJson.videoId,
		type: 'video',
		thumbnail: compactVideoRendererJson.thumbnail.thumbnails,
		title: compactVideoRendererJson.title.simpleText,
		channelTitle: compactVideoRendererJson.shortBylineText.runs[0].text,
		shortBylineText: compactVideoRendererJson.shortBylineText.runs[0].text,
		length: compactVideoRendererJson.lengthText,
		isLive:
			compactVideoRendererJson.badges?.length &&
			compactVideoRendererJson.badges[0]?.metadataBadgeRenderer?.style ==
				'BADGE_STYLE_TYPE_LIVE_NOW',
	}
}
