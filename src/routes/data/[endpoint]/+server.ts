import { GetListByKeyword } from '../keyword'
import { GetChannelById } from '../../content/channel'
import { GetPlaylistData } from '../playlist'
import { GetSuggestData } from '../suggest'
import type { Param, Prettify } from '../../utility-types'
import { type Patch, json, patchFetch } from './../../zero-api/fetch'
import type { RequestHandler } from './$types'
import { querySpread } from './../../zero-api/helper'
import { handleCatch } from './../../utils'
import { err } from './../../zero-api/error-handling'

const switchData = {
	playlist: GetPlaylistData,
	channel: GetChannelById,
	suggestion: GetSuggestData,
	search: GetListByKeyword,
} as const
type SwitchData = typeof switchData
export type Params = Prettify<{
	[key in keyof SwitchData]?: Param<SwitchData[key]>
}>
export type Slug = keyof Params
export type Query<S extends Slug> = Prettify<NonNullable<Params[S]>>

function handleBadInputs(slug: string) {
	const errorResponse = err.handler(
		err.test(Object.keys(switchData).includes(slug), {
			query: `Invalid slug, should be either: playlist, channel, suggestion or search`,
		})
	)
	return errorResponse?.('BadRequest')
}

// prettier-ignore
export const GET = async <S extends Slug, Q extends Query<S>>(event: {params: {endpoint: S}, query: Q}) => {
	const slug = event.params.endpoint

	const badInput = handleBadInputs(slug)
	if(badInput){
		return badInput
	}

	const query = querySpread(event) as any
	const body = await switchData[slug](query).catch(handleCatch)

	return json(body as any as ReturnType<SwitchData[S]> )
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
_GET('playlist', {
	limit: 0,
	playlistId: '',
	manual: true,
}).then(res => {
	// @ts-ignore
	if (!res.ok) {
		res.body.errors.query
	}
	//^?
})
// */
