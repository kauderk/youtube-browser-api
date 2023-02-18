import { type API, querySpread } from 'sveltekit-zero-api'
import { Ok } from 'sveltekit-zero-api/http'
import { getStoryboard } from './storyboard'
import { getPrimary, getSecondary, getContentPage } from './content'
import { getHeatmapPath, getMarkers } from './marker'
import { getCompactVideoRenderer } from './suggestion'
import { getTimeline } from './timeline'
import type { Return, FirstFlatten } from './types'
import type { Prettify } from '../utility-types'

export type Single = {
	suggestions?: b
	storyboard?: b
	heatmapPath?: b
}
export type Multiple = {
	getPrimary?: Return<typeof getPrimary>
	getSecondary?: Return<typeof getSecondary>
	getContentPage?: Return<typeof getContentPage>
	getMarkers?: Return<typeof getMarkers>
}
type id = { id: string }
export type Params = id & Single & FirstFlatten<Multiple>
type query = (keyof Params)[]

export const GET = async (event: API<{ query: id & { query: query } }>) => {
	const { id, query: Q } = querySpread(event)
	// @ts-expect-error
	const query: query = typeof Q == 'string' ? Q.split(',') : Q.flat()

	const body = {
		...reduceKeys(await getPrimary(id).catch(), query),
		...reduceKeys(await getSecondary(id).catch(), query),
		...reduceKeys(await getMarkers(id).catch(), query),
		...reduceKeys(await getContentPage(id).catch(), query),
		suggestions: query.includes('suggestions')
			? await getCompactVideoRenderer(id).catch()
			: undefined,
		heatmapPath: query.includes('heatmapPath')
			? await getHeatmapPath(id).catch()
			: undefined,
		storyboard: query.includes('storyboard')
			? await getStoryboards(id).catch()
			: undefined,
	}

	return Ok({ body })
}
async function getStoryboards(id: s) {
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
function reduceKeys<A extends object, B extends query>(A: A, B: B) {
	return Object.entries(A).reduce((acc, [key, val]) => {
		if (B?.find?.(k => key === k)) {
			return { ...acc, [key]: val }
		}
		return acc
	}, <Partial<typeof A>>{})
}
