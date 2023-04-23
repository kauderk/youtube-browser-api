import { GetListByKeyword } from '../keyword'
import { GetChannelById } from '../../content/channel'
import { GetPlaylistData } from '../playlist'
import { GetSuggestData } from '../suggest'
import type { Param, Prettify } from '../../utility-types'
import { type Patch, json, patchFetch } from './../../zero-api/fetch'
import type { RequestHandler } from './$types'
import { querySpread } from './../../zero-api/helper'
import { handleCatch } from './../../utils'

export type Union<T> = {
	[K2 in keyof T]: T[K2]
}[keyof T]
export type Params = Prettify<{
	playlist?: Param<typeof GetPlaylistData>
	channel?: Param<typeof GetChannelById>
	suggestion?: Param<typeof GetSuggestData>
	search?: Param<typeof GetListByKeyword>
}>

function switchQuery<S extends Slug>(endpoint: S, query: any) {
	if (endpoint === 'playlist') {
		return GetPlaylistData(query)
	} else if (endpoint === 'channel') {
		return GetChannelById(query)
	} else if (endpoint === 'suggestion') {
		return GetSuggestData(query)
	} else {
		return GetListByKeyword(query)
	}
}

export type Slug = keyof Params
export type Query<S extends Slug> = Prettify<NonNullable<Params[S]>>

// prettier-ignore
export const GET = async <S extends Slug, Q extends Query<S>>(event: {params: {endpoint: S}, query: Q}) => {
	const endpoint = event.params.endpoint
	const query = querySpread(event) as any
	const body = await switchQuery(endpoint, query).catch(handleCatch)

	return json(body as any as NonNullable<Params[S & keyof Params]> )
}

export const _GET = async <S extends Slug, Q extends Query<S> & Patch>(
	slug: S,
	query: Q & Patch
) => {
	return patchFetch<RequestHandler, Q, ReturnType<typeof GET<S, Q>>>({
		endpoint: 'data',
		query,
		slug,
	})
}

/* uncomment me
_GET('channel', {
	channelId: '',
	manual: true,
}).then(res => {
	// @ts-ignore
	res.json()
	//^?
})
// */
