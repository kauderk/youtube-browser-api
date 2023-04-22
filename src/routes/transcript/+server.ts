import { fetchTranscript } from './transcript'
import { getDomainText, ParseUniqueIDs } from './fetch'
import { getEndpoint, getMap_smart } from '../utils'
import type { Prettify } from '../utility-types'
import type { RequestHandler } from './$types'
import { patchFetch, json } from '../zero-api/fetch'
import { querySpread } from '../zero-api/helper'

type Params = {
	playlistId?: string
	videoId?: string
}

const transcriptMap = new Map<string, ReturnType<typeof fetchTranscript>>()
const getTranscript = async (id: string) => {
	const freeze = async () => await fetchTranscript(id)
	return getMap_smart(id, transcriptMap, freeze)
}

const pageIdsMap = new Map<string, ReturnType<typeof parseIDs>>()
const parseIDs = async (key: string) => getDomainText(key).then(ParseUniqueIDs)
const getPageIds = async (list: string) => {
	const endpoint = getEndpoint('/playlist', {
		list: list,
		g: '1',
	})
	return getMap_smart(endpoint, pageIdsMap, parseIDs, endpoint)
}

async function getPlaylistTranscripts(list: string) {
	const ids = await getPageIds(list)
	return await Promise.all(ids.map(async id => getTranscript(id)))
}

export type Query = Prettify<Params>
export const GET = async <Q extends Query>(event: {}) => {
	const { videoId, playlistId } = querySpread(event)

	const body = {
		videoId: videoId ? await getTranscript(videoId).catch() : undefined,
		playlistId: playlistId
			? await getPlaylistTranscripts(playlistId).catch()
			: undefined,
	}

	return json(body as { [key in keyof Q]: (typeof body)[key & keyof Params] })
}

export const _GET = async <Q extends Query>(query: Q) => {
	return patchFetch<RequestHandler>({
		endpoint: 'transcript',
		query,
	}) as ReturnType<typeof GET<Q>>
}
