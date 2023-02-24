import { querySpread } from 'sveltekit-zero-api'
// @ts-ignore
import type { API } from 'sveltekit-zero-api'

import { Ok } from 'sveltekit-zero-api/http'
import { GetListByKeyword } from '../keyword'
import { GetChannelById } from '../../content/channel'
import { GetPlaylistData } from '../playlist'
import { GetSuggestData } from '../suggest'
import type { Param, Prettify } from '../../utility-types'

export type Union<T> = {
	[K2 in keyof T]: T[K2]
}[keyof T]
export type Params = Prettify<{
	playlist?: Param<typeof GetPlaylistData>
	channel?: Param<typeof GetChannelById>
	suggestion?: Param<typeof GetSuggestData>
	search?: Param<typeof GetListByKeyword>
}>

export type Slug = keyof Params

const get = async (event: { query?: Prettify<Union<Params>> }) => {
	const endpoint: Slug =
		// @ts-expect-error
		event.params.endpoint

	const query = querySpread(event)
	type _<E extends Slug> = Exclude<Params[E], undefined>

	switch (endpoint) {
		case 'playlist':
			return await GetPlaylistData(query as _<typeof endpoint>).catch()

		case 'channel':
			return await GetChannelById(query as _<typeof endpoint>).catch()

		case 'suggestion':
			return await GetSuggestData(query as _<typeof endpoint>).catch()

		case 'search':
			return await GetListByKeyword(query as _<typeof endpoint>).catch()
	}
}
export const GET = async (e: API<Param<typeof get>>) =>
	Ok({ body: await get(e as any) })
