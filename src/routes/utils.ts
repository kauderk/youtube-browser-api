export async function getMap_smart<
	M extends Map<string, any>,
	C extends (...args: any) => V,
	V = M extends Map<any, infer I> ? I : never
>(key: string, map: M, callback: C, ...setMapCb_params: Parameters<C>) {
	if (!key) {
		throw new Error('invalid uid|key while trying to call getComponentMap')
	}
	if (!map.has(key)) {
		// @ts-expect-error
		map.set(key, await callback(...setMapCb_params))
	}
	return map.get(key) as Awaited<V>
}

export const youtubeEndpoint = `https://www.youtube.com`
export const youtubeLocale = <const>{
	hl: 'en',
	gl: 'us',
}

export function getEndpoint(path: string, params?: Record<string, string>) {
	const keys = {
		...youtubeLocale,
		...params,
	}

	const paramKeys = Object.entries(keys)
		.map(([key, value]) => `${key}=${value}`, '')
		.join('&')
	const union = '?'
	return youtubeEndpoint + path + union + paramKeys
}

export function getWatchEndpoint(videoId: string) {
	return getEndpoint('/watch', {
		v: videoId,
	})
}

export function handleCatch(e?: Error) {
	return
}

import { err } from '$src/routes/zero-api/error-handling'
export const idTest = (id: string) =>
	err.test(id?.length == 11, { id: 'Must be 11 characters' })
