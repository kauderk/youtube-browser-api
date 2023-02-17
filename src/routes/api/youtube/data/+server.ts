import { type API, querySpread } from 'sveltekit-zero-api'
import { Ok } from 'sveltekit-zero-api/http'
import { GetListByKeyword } from './keyword'
import { GetChannelById } from '../content/channel'
import { GetPlaylistData } from './playlist'
import { GetSuggestData } from './suggest'
import type { Prettify } from '../utility-types'

type Param<
	Func extends (...args: any) => any,
	I extends n = 0
> = Parameters<Func>[I]
export type Params = Prettify<{
	playlist?: Param<typeof GetPlaylistData>
	channel?: Param<typeof GetChannelById>
	suggestion?: Param<typeof GetSuggestData>
	search?: Param<typeof GetListByKeyword>
}>

export const GET = async (event: API<{ query?: Params }>) => {
	const { playlist, channel, suggestion, search } = querySpread(event) as any

	const body = {
		playlist: playlist ? await GetPlaylistData(playlist) : undefined,
		channel: channel ? await GetChannelById(channel) : undefined,
		suggestion: suggestion ? await GetSuggestData(suggestion) : undefined,
		search: search ? await GetListByKeyword(search) : undefined,
	}

	return Ok({ body })
}
