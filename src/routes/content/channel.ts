import { getYouTubePage } from '../data/parse'
const youtubeEndpoint = `https://www.youtube.com`
const _locale_ = 'hl=en&gl=us'

export async function GetChannelById(params: { channelId: string }) {
	const endpoint = `${youtubeEndpoint}/channel/${params.channelId}&${_locale_}`

	const page = await getYouTubePage(endpoint)
	const tabs: any[] =
		// @ts-expect-error
		page.initialData.contents.twoColumnBrowseResultsRenderer.tabs

	return tabs
		.map(json => {
			if (json && json.tabRenderer) {
				const tabRenderer = json.tabRenderer
				const title = tabRenderer.title
				const content = tabRenderer.content
				return { title, content }
			}
		})
		.filter(y => typeof y != 'undefined')
}
