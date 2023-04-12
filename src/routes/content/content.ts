import { getYouTubePage } from '../data/parse'
import { getWatchEndpoint } from '../utils'
import { getNextResult } from './suggestion'

async function getContent(videoId: string, index: number) {
	const page = await getContentPage(videoId)
	const content = getNextResult(page)
	return content.results.results.contents[index]
}

export async function getContentPage(videoId: string) {
	const endpoint = getWatchEndpoint(videoId)
	return await getYouTubePage(endpoint)
}

export async function getDetails(videoId: string) {
	const primary = (await getContent(videoId, 0)).videoPrimaryInfoRenderer
	const secondary = (await getContent(videoId, 1)).videoSecondaryInfoRenderer

	return {
		title: primary.title.runs[0].text as string,
		isLive: primary.viewCount.videoViewCountRenderer.hasOwnProperty(
			'isLive'
		)
			? (primary.viewCount.videoViewCountRenderer.isLive as boolean)
			: false,
		// dumb
		channel: secondary.owner.videoOwnerRenderer.title.runs[0]
			.text as string,
		description:
			(secondary.description?.runs
				.map(x => x.text)
				.join()
				.toString() as string) ??
			// @ts-expect-error
			secondary.attributedDescription?.content ??
			'',
	}
}
