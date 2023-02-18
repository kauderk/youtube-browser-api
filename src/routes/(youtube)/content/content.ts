import { getYouTubePage } from '../data/parse'
import { getNextResult } from './suggestion'

const youtubeEndpoint = `https://www.youtube.com`
const _locale_ = 'hl=en&gl=us'

async function getContent(videoId: s, index: n) {
	const page = await getContentPage(videoId)
	const content = getNextResult(page)
	return content.results.results.contents[index]
}

export async function getContentPage(videoId: string) {
	const endpoint = `${youtubeEndpoint}/watch?v=${videoId}&${_locale_}`
	return await getYouTubePage(endpoint)
}

export async function getPrimary(videoId: s) {
	const content = (await getContent(videoId, 0)).videoPrimaryInfoRenderer

	return {
		title: content.title.runs[0].text as s,
		isLive: content.viewCount.videoViewCountRenderer.hasOwnProperty(
			'isLive'
		)
			? (content.viewCount.videoViewCountRenderer.isLive as b)
			: false,
	}
}
export async function getSecondary(videoId: s) {
	const content = (await getContent(videoId, 1)).videoSecondaryInfoRenderer

	return {
		channel: content.owner.videoOwnerRenderer.title.runs[0].text as s,
		description:
			(content.description?.runs
				.map(x => x.text)
				.join()
				.toString() as s) ?? '',
	}
}
