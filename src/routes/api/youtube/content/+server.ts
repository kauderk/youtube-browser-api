import { type API, querySpread } from 'sveltekit-zero-api'
import { Ok } from 'sveltekit-zero-api/http'
import { getStoryboard } from './storyboard'
import { getPrimary, getSecondary, getContentPage } from './content'
import { getHeatmapPath, getMarkers } from './marker'
import { getCompactVideoRenderer } from './suggestion'
import { getTimeline } from './timeline'
import { json } from '@sveltejs/kit'

type Return<T extends (...args: any) => any> = {
	[key in keyof Partial<Awaited<ReturnType<T>>>]?: b
}
type Params = { id: string } & {
	suggestions?: b
	storyboard?: b
	heatmapPath?: b
} & Return<typeof getPrimary> &
	Return<typeof getSecondary> &
	Return<typeof getContentPage> &
	Return<typeof getMarkers>
type Prettify<T> = { [K in keyof T]: T[K] } & {}

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

	console.log('content')

	return {
		body: JSON.stringify(body),
		type: 'json',
		headers: {
			'Content-Type': 'application/json',
		},
	}
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
