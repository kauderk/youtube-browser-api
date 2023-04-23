import { getStoryboard } from './storyboard'
import { getDetails as getDetails, getContentPage } from './content'
import { getHeatmapPath, getMarkers } from './marker'
import { getCompactVideoRenderer } from './suggestion'
import { getTimeline } from './timeline'
import type { Return, FirstFlatten } from './types'
import { getMovingThumbnail } from './thumbnail'
import { type Patch, json, patchFetch } from '../zero-api/fetch'
import type { RequestHandler } from './$types'
import { querySpread } from '../zero-api/helper'

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

export const GET = async <P extends params>(event: {
	query: id & { params: P }
}) => {
	const { id, params: Q } = querySpread(event)
	const params: params =
		// @ts-expect-error
		typeof Q == 'string' ? (Q as any).split(',') : Q.flat()

	const body = {
		...reduceKeys(await getDetails(id).catch(), params),
		...reduceKeys(await getMarkers(id).catch(), params),
		...reduceKeys(await getContentPage(id).catch(), params),
		suggestions: params.includes('suggestions')
			? await getCompactVideoRenderer(id).catch()
			: undefined,
		heatmapPath: params.includes('heatmapPath')
			? await getHeatmapPath(id).catch()
			: undefined,
		storyboard: params.includes('storyboard')
			? await getStoryboards(id).catch()
			: undefined,
		movingThumbnail: params.includes('movingThumbnail')
			? await getMovingThumbnail(id).catch()
			: undefined,
	}

	return json(
		body as {
			[key in P[number]]: (typeof body)[key & keyof typeof body]
		}
	)
}

async function getStoryboards(id: string) {
	const page = await getContentPage(id)

	if (!page?.playerResponse?.storyboards) {
		return
	}
	const storyboards = page.playerResponse.storyboards
	return {
		storyboard: getStoryboard(storyboards, true, 1002),
		timeline: getTimeline({ storyboards, quality: 'medium', quantity: 5 }),
	}
}
function reduceKeys<A extends object, B extends params>(A: A, B: B) {
	return Object.entries(A).reduce((acc, [key, val]) => {
		if (B?.find?.(k => key === k)) {
			return { ...acc, [key]: val }
		}
		return acc
	}, <Partial<typeof A>>{})
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
	id: '',
	params: ['title'],
	manual: true,
}).then(res => {
	res
	//^?
})
// */
