import { querySpread } from 'sveltekit-zero-api'
// @ts-ignore
import type { API } from './$types'
import { Ok } from 'sveltekit-zero-api/http'
import { GetListByKeyword } from '../keyword'
import { GetChannelById } from '../../content/channel'
import { GetPlaylistData } from '../playlist'
import { GetSuggestData } from '../suggest'
import type { Prettify } from '../../utility-types'
import type { Union } from '../../content/types'

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

export const GET = async (event: API<{ query?: Prettify<Union<Params>> }>) => {
	let body = <any>{}
	const query = querySpread(event) as any

	switch (event.params.endpoint) {
		case 'playlist':
			body = await GetPlaylistData(query).catch()
			break
		case 'channel':
			body = await GetChannelById(query).catch()
			break
		case 'suggestion':
			body = await GetSuggestData(query).catch()
			break
		case 'search':
			body = await GetListByKeyword(query).catch()
			break
		default:
			break
	}

	return Ok({ body })
}
