import fetchTranscript, { type TranscriptResponse } from 'youtube-transcript'
import { getDomainText, ParseUniqueIDs } from './fetch'
import { type API, querySpread } from 'sveltekit-zero-api'
import { Ok } from 'sveltekit-zero-api/http'
import { getMap_smart } from '../utils'
import type { Prettify } from '../utility-types'

type Params = {
	playlistId?: string
	videoId?: string
}

const transcriptMap = new Map<string, Promise<TranscriptResponse[]>>()
const getYouTubeTranscript = async (url: s) => {
	const freeze = async () => await fetchTranscript.fetchTranscript(url)
	return getMap_smart(url, transcriptMap, freeze)
}

const pageIdsMap = new Map<string, ReturnType<typeof parseIDs>>()
const parseIDs = async (key: s) => getDomainText(key).then(ParseUniqueIDs)
const getPageIds = async (list: s) => {
	const key = `https://www.youtube.com/playlist?list=${list}&g=1`
	return getMap_smart(key, pageIdsMap, parseIDs, key)
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

async function getTranscript(id: s) {
	return await getYouTubeTranscript(id).catch()
}
async function getPlaylistTranscripts(list: s) {
	const ids = await getPageIds(list)
	return await Promise.all(ids.map(async id => getTranscript(id)))
}
