import { type API, querySpread } from 'sveltekit-zero-api'
import { Ok } from 'sveltekit-zero-api/http'
import { getHeatMap } from 'youtube-heatmap'
import { getPrimary, getSecondary, getContentPage } from './content'
import { getHeatmapPath, getMarkers } from './marker'
import { getCompactVideoRenderer } from './suggestion'

type Return<T extends (...args: any) => any> = {
	[key in keyof Partial<Awaited<ReturnType<T>>>]?: b
}
type Params = { id: string } & {
	sugestions?: b
	contentPage?: b
	heatmapPath?: b
} & Return<typeof getPrimary> &
	Return<typeof getSecondary> &
	Return<typeof getMarkers>
type Prettify<T> = { [K in keyof T]: T[K] } & {}

export const GET = async (event: API<{ query: Prettify<Params> }>) => {
	const { id } = querySpread(event)
	const params = querySpread(event)

	const body = {
		...reduceKeys(await getPrimary(id), params),
		...reduceKeys(await getSecondary(id), params),
		...reduceKeys(await getMarkers(id), params),
		sugestions: params.sugestions
			? await getCompactVideoRenderer(id)
			: undefined,
		contentPage: params.contentPage ? await getContentPage(id) : undefined,
		heatmapPath: params.heatmapPath ? await getHeatmapPath(id) : undefined,
	}

	return Ok({ body })
}
function reduceKeys<A extends object, B extends object>(A: A, B: B) {
	return Object.entries(A).reduce((acc, [key, val]) => {
		if (Object.hasOwn(B, key)) {
			return { ...acc, [key]: val }
		}
		return acc
	}, <Partial<typeof A>>{})
}
