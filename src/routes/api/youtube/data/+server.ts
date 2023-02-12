import { type API, querySpread } from 'sveltekit-zero-api'
import { Ok } from 'sveltekit-zero-api/http'
import { GetListByKeyword, type ListOptions } from './keyword'
import { GetChannelById } from '../content/channel'
import { GetPlaylistData } from './playlist'
import { GetSuggestData } from './suggest'

interface Params {
	playlist?: string
	channel?: string
	suggestion?: number
	search?: ListOptions
}

export const GET = async (event: API<{ query?: Params }>) => {
	const { playlist, channel, suggestion, search } = querySpread(event)

	const body = {
		playlist: playlist ? await GetPlaylistData(playlist) : undefined,
		channel: channel ? await GetChannelById(channel) : undefined,
		suggestion: suggestion ? await GetSuggestData(suggestion) : undefined,
		search: search ? await GetListByKeyword(search as any) : undefined,
	}

	return Ok({ body })
}
