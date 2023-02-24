import { fetchTranscript } from './transcript'
import { getDomainText, ParseUniqueIDs } from './fetch'
import { type API, querySpread } from 'sveltekit-zero-api'
import { Ok } from 'sveltekit-zero-api/http'
import { getMap_smart } from '../utils'
import type { Param, Prettify } from '../utility-types'

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
	const key = `https://www.youtube.com/playlist?list=${list}&g=1`
	return getMap_smart(key, pageIdsMap, parseIDs, key)
}

async function getPlaylistTranscripts(list: string) {
	const ids = await getPageIds(list)
	return await Promise.all(ids.map(async id => getTranscript(id)))
}

export const GET = async (event: API<{ query: Prettify<Params> }>) => {
	const { videoId, playlistId } = querySpread(event)

	const body = {
		videoId: videoId ? await getTranscript(videoId).catch() : undefined,
		playlistId: playlistId
			? await getPlaylistTranscripts(playlistId).catch()
			: undefined,
	}

	return Ok({ body })
}
