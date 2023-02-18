export async function getMap_smart<
	M extends Map<s, any>,
	C extends (...args: any) => V,
	V = M extends Map<any, infer I> ? I : never
>(key: s, map: M, callback: C, ...setMapCb_params: Parameters<C>) {
	if (!key) {
		throw new Error('invalid uid|key while trying to call getComponentMap')
	}
	if (!map.has(key)) {
		// @ts-expect-error
		map.set(key, await callback(...setMapCb_params))
	}
	return map.get(key) as Awaited<V>
}
export function createCache<C extends (...args: any) => any>(callback: C) {
	const map = new Map<string, Awaited<ReturnType<C>>>()
	return async (key: s, ...args: Parameters<C>) =>
		await getMap_smart(key, map, callback, ...args)
}

// function Foo(bar:'Bar'){}
// const map = new Map<string, ReturnType<typeof Foo>>()
// getMap_smart('', map, Foo, 'Bar')
