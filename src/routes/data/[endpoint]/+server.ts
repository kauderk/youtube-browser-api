import { querySpread } from 'sveltekit-zero-api'
// @ts-ignore
import type { API } from './$types'
import { Ok } from 'sveltekit-zero-api/http'
import { GetListByKeyword } from '../keyword'
import { GetChannelById } from '../../content/channel'
import { GetPlaylistData } from '../playlist'
import { GetSuggestData } from '../suggest'
import type { Param, Prettify } from '../../utility-types'
import type { Union } from '../../content/types'

export type Params = Prettify<{
	playlist?: Param<typeof GetPlaylistData>
	channel?: Param<typeof GetChannelById>
	suggestion?: Param<typeof GetSuggestData>
	search?: Param<typeof GetListByKeyword>
}>

const get = async (event: { query?: Union<Params> }) => {
	const endpoint: keyof Params =
		// @ts-expect-error
		event.params.endpoint

	const query = querySpread(event)
	type _<E extends keyof Params> = Exclude<Params[E], undefined>

	if (endpoint == 'playlist') {
		return await GetPlaylistData(query as _<typeof endpoint>).catch()
	} else if (endpoint == 'channel') {
		return await GetChannelById(query as _<typeof endpoint>).catch()
	} else if (endpoint == 'suggestion') {
		return await GetSuggestData(query as _<typeof endpoint>).catch()
	} //if(endpoint == 'search')
	else {
		return await GetListByKeyword(query as _<typeof endpoint>).catch()
	}
}
// this is discussing
export type _get = typeof get
export const GET = async (e: API<Param<typeof get>>) =>
	Ok({ body: await get(e as any) })
