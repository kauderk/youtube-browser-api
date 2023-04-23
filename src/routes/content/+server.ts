import { getStoryboards } from './storyboard'
import { getDetails as getDetails, getContentPage } from './content'
import { getHeatmapPath, getMarkers } from './marker'
import { getCompactVideoRenderer } from './suggestion'
import type { FirstFlatten, Return, TupleUnion } from './types'
import { querySpread } from '../zero-api/helper'
import { err } from '../zero-api/error-handling'
import { type Patch, json, patchFetch } from '../zero-api/fetch'
import type { RequestHandler } from './$types'
import { getMovingThumbnail } from './thumbnail'
import { handleCatch } from '../utils'
import { idTest } from './../utils'

export type Single = {
	suggestions?: boolean
	storyboard?: boolean
	heatmapPath?: boolean
	movingThumbnail?: boolean
}
export type Multiple = {
	getDetails?: Return<typeof getDetails>
	getContentPage?: Return<typeof getContentPage>
	getMarkers?: Return<typeof getMarkers>
}
type id = { id: string }
export type Params = id & Single & FirstFlatten<Multiple>
type keys = Exclude<Exclude<keyof Params, undefined>, id>
type params = [keys, ...keys[]]

function handleBadInputs(id: string, params: string[]) {
	const errorResponse = err.handler(
		idTest(id),
		err.test(!!params, {
			query: 'Empty or undefined parameters',
		})
	)
	return errorResponse?.('BadRequest')
}

export const GET = async <P extends params>(event: {
	query: id & { params: P }
}) => {
	const { id, params: Q } = querySpread(event)
	const params: params =
		// @ts-expect-error
		typeof Q == 'string' ? (Q as any).split(',') : Q.flat()

	const badInput = handleBadInputs(id, params)
	if (badInput) {
		return badInput
	}

	//#region Filter
	async function filter<T, K = TupleUnion<keyof T & string>>(
		fn: (...args: any) => Promise<T>,
		keys: K
	) {
		// @ts-expect-error
		const userParams = keys.filter(e => params.includes(e))
		if (!userParams?.length) {
			return
		}
		return reduceKeys(
			// @ts-expect-error
			await fn(id).catch(handleCatch),
			userParams
		) as any as T
	}
	function reduceKeys(A: object, B: object) {
		return Object.entries(A).reduce(
			(acc, [key, val]) =>
				// @ts-expect-error
				B?.find?.(k => key === k) ? { ...acc, [key]: val } : acc,
			{}
		)
	}
	async function conditional<T, K extends keyof Single>(
		fn: (...args: any) => Promise<T>,
		key: K
	) {
		if (params.includes(key)) {
			return {
				[key]: await fn(id).catch(handleCatch),
			} as Record<K, T>
		}
	}
	//#endregion

	// how do you have access to the keys at runtime?
	const body = {
		...(await filter(getDetails, [
			'title',
			'isLive',
			'channel',
			'description',
		])),
		...(await filter(getMarkers, [
			'heatmap',
			'key_chapters',
			'macro_chapters',
			'chapters',
			'auto_chapters',
		])),
		...(await filter(getContentPage, [
			'initialData',
			'playerResponse',
			'apiToken',
			'context',
			'transcriptMeta',
		])),
		...(await conditional(getCompactVideoRenderer, 'suggestions')),
		...(await conditional(getHeatmapPath, 'heatmapPath')),
		...(await conditional(getStoryboards, 'storyboard')),
		...(await conditional(getMovingThumbnail, 'movingThumbnail')),
	}

	return json(
		body as {
			[key in P[number]]: (typeof body)[key & keyof typeof body]
		}
	)
}

export const _GET = async <R extends params, P extends Patch>(
	query: id & { params: R } & P & Patch
) => {
	return patchFetch<RequestHandler, P, ReturnType<typeof GET<R>>>({
		endpoint: 'content',
		query,
	})
}

/* uncomment me
_GET({
	id: '12345678911',
	params: ['title'],
	manual:true
}).then(response => {
	response
	//^?
})
// */
