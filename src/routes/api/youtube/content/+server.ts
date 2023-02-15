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
export type Params = { id: string } & Single & FirstFlatten<Multiple>

export const GET = async (event: API<{ query: Prettify<Params> }>) => {
	const { id } = querySpread(event)
	const params = querySpread(event)

	const body = {
		...reduceKeys(await getPrimary(id), params),
		...reduceKeys(await getSecondary(id), params),
		...reduceKeys(await getMarkers(id), params),
		...reduceKeys(await getContentPage(id), params),
		suggestions: params.suggestions
			? await getCompactVideoRenderer(id)
			: undefined,
		heatmapPath: params.heatmapPath ? await getHeatmapPath(id) : undefined,
		storyboard: params.storyboard
			? await getStoryboards(id, params)
			: undefined,
	}

	return Ok({ body })
}
async function getStoryboards(id: s, params: { storyboard?: b }) {
	const page = await getContentPage(id)

	if (!params.storyboard || !page?.playerResponse?.storyboards) {
		return
	}
	const storyboards = page.playerResponse.storyboards
	return {
		storyboard: getStoryboard(storyboards, true, 1002),
		timeline: getTimeline({ storyboards, quality: 'medium', quantity: 5 }),
	}
}
function reduceKeys<A extends object, B extends object>(A: A, B: B) {
	return Object.entries(A).reduce((acc, [key, val]) => {
		if (Object.hasOwn(B, key)) {
			return { ...acc, [key]: val }
		}
		return acc
	}, <Partial<typeof A>>{})
}
