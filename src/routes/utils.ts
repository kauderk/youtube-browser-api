import { page } from '$app/stores'
import { derived } from 'svelte/store'

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
