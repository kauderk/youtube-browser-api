import { getYouTubePage } from '../data/parse'
import { getEndpoint } from '../utils'

export async function GetChannelById(params: { channelId: string }) {
	const endpoint = getEndpoint(`/channel/${params.channelId}`)

	const page = await getYouTubePage(endpoint)
	const tabs = page.initialData.contents.twoColumnBrowseResultsRenderer.tabs

	return tabs
		.map(json => {
			if (json?.tabRenderer) {
				const tabRenderer = json.tabRenderer
				const title = tabRenderer.title
				const content = tabRenderer.content
				return { title, content }
			}
		})
		.filter(y => typeof y != 'undefined')
}
