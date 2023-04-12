import { type API, querySpread } from 'sveltekit-zero-api'
import { Ok } from 'sveltekit-zero-api/http'
import { getStoryboard } from './storyboard'
import { getDetails as getDetails, getContentPage } from './content'
import { getHeatmapPath, getMarkers } from './marker'
import { getCompactVideoRenderer } from './suggestion'
import { getTimeline } from './timeline'
import type { Return, FirstFlatten } from './types'
import { getMovingThumbnail } from './thumbnail'

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
type params = (keyof Params)[]

export const GET = async (event: API<{ query: id & { params: params } }>) => {
	const { id, params: Q } = querySpread(event)
	const params: params =
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

	return Ok({ body })
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
