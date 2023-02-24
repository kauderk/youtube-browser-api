import { getMap_smart } from '../utils'
import type { InitialData, Context } from './types/initial-data'
import type { PlayerResponse } from './types/player-response'

export async function TryGetYouTubePage(url: string) {
	const html = await fetch(url).then(res => res.text())

	return {
		initialData: parse<InitialData>(
			html
				.split('var ytInitialData =')[1]
				?.split('</script>')[0]
				.slice(0, -1)
		),
		playerResponse: parse<PlayerResponse>(
			html
				.split('var ytInitialPlayerResponse =')[1]
				?.split('</script>')[0]
				.slice(0, -1)
		),
		apiToken: html
			.split('innertubeApiKey')[1]
			?.trim()
			.split(',')[0]
			.split('"')[2],
		context: parse<Context>(
			html.split('INNERTUBE_CONTEXT')[1]?.trim().slice(2, -2) ?? '{}'
		),
		transcriptMeta: {
			key: html.split('"INNERTUBE_API_KEY":"')[1]?.split('"')[0],
			params: html.split('"serializedShareEntity":"')[1]?.split('"')[0],
			visitorData: html.split('"VISITOR_DATA":"')[1]?.split('"')[0],
			sessionId: html.split('"sessionId":"')[1]?.split('"')[0],
			clickTrackingParams: html
				?.split('"clickTrackingParams":"')[1]
				?.split('"')[0],
		},
	}
}
function parse<T>(object?: string) {
	return JSON.parse(object ?? '{}') as T
}

type page = ReturnType<typeof TryGetYouTubePage>
const map = new Map<string, page>()

export const getYouTubePage = async (url: string) =>
	await getMap_smart(url, map, TryGetYouTubePage, url)

export type Page = Awaited<page>
