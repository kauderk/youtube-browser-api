// @ts-expect-error
import { fetchTranscript } from 'youtube-transcript'
import { getDomainText, ParseUniqueIDs } from './fetch'
import { type API, querySpread } from 'sveltekit-zero-api'
import { Ok } from 'sveltekit-zero-api/http'
import type { RequireAtLeastOne } from '$lib/types/utilities'
import { getMap_smart } from '../utils'

type TQuery = { sum?: boolean } & RequireAtLeastOne<{
	list: string
	id: string
}>

const transcriptMap = new Map<string, ReturnType<typeof fetchTranscript>>()
const getYouTubeTranscript = async (url: s) => {
	const freeze = async () => await fetchTranscript(url)
	return getMap_smart(url, transcriptMap, freeze)
}

const pageIdsMap = new Map<string, ReturnType<typeof parseIDs>>()
const parseIDs = async (key: s) => getDomainText(key).then(ParseUniqueIDs)
const getPageIds = async (params: TQuery) => {
	const key = `https://www.youtube.com/playlist?list=${params.list}&g=1`
	return getMap_smart(key, pageIdsMap, parseIDs, key)
}

export const GET = async (event: API<{ query: TQuery }>) => {
	const params = querySpread(event)

	const body = {
		id: params.id ? await getTranscript(params) : undefined,
		list: params.list ? await getPlaylistTranscripts(params) : undefined,
	}

	return Ok({ body })
}

async function getTranscript(params: TQuery, id?: s) {
	const transcript = await getYouTubeTranscript(params.id ?? id!).catch()
	return {
		transcript: !params.sum ? transcript : null,
		transcript_summary: params.sum ? undefined : null,
	}
}
async function getPlaylistTranscripts(params: TQuery) {
	const ids = await getPageIds(params)

	return await Promise.all(
		ids.map(async id => ({ id, ...(await getTranscript(params, id)) }))
	)
}
