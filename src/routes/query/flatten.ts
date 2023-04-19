import type { Prettify } from '../utility-types'
import type { Path, PathValue, NonNullableNested } from './utils'

//#region flatten paths
type CleanLeafs<picks> = {
	[key in keyof picks]: picks[key] extends { end: true } & infer Value
		? Value
		: picks[key]
}
type CleanPick<schema> = {
	[key in Path<schema>]: PathValue<schema, key> extends infer Value extends
		| object
		| undefined
		? Value extends undefined
			? never
			: Value extends { end: true }
			? Value
			: never
		: PathValue<schema, key>
}
type PickPath<Schema, /* Clear, */ Page /* keys extends any[] */> = Prettify<{
	[Key in keyof Schema]: Schema[Key] extends object
		? //#region reflect if the original is undefined
		  // FIXME: there is a bug, it should also return the array + it's parent, thus the mess on LastKey.TrackArrayLike
		  Page extends null | undefined
			?
					| PickPath<
							Schema[Key],
							// Clear[Key & keyof Clear],
							Page[Key & keyof Page]
							// [Key, ...keys]
					  >
					| undefined
			: //#endregion
			  PickPath<
					Schema[Key],
					// Clear[Key & keyof Clear],
					Page[Key & keyof Page]
					// [Key, ...keys]
			  >
		: Page[Key & keyof Page] extends infer Res extends object
		? Res & { end: true }
		: Page[Key & keyof Page]
}>
type OmitNever<T> = { [K in keyof T as T[K] extends never ? never : K]: T[K] }
//#endregion

//#region last leaf
type ArrayLike<P extends number> = `${string}.${P}.${string}`
type PackNullColl<Original, Leaf> = Original extends `${string}?${string}`
	? Leaf extends `${infer SecondToLastParent}.${infer Rest}`
		? `${SecondToLastParent}?.${Rest}`
		: Leaf
	: Leaf
type UnpackNullColl<Original> = Original extends `${infer Key}?`
	? Key
	: Original
type AssignNullColl<Original, Object> = Original extends `${infer Key}?`
	? Object | undefined
	: Object

// prettier-ignore
type LastKey<Path extends string, Original='', TrackJSON = '', TrackArrayLike = ''> =
	// Recursively call LastKey with the Tail as T,
	// T as NextPair, and Result as itself
	Path extends `${infer _}.${infer Rest}`
		? LastKey<Rest, Original extends ''?Path:Original, Path, TrackJSON>
		: TrackArrayLike extends `${infer key}.${infer K extends number & number}?.${infer Value}`
			? PackNullColl<Original, `${key}.${K}.${Value}`>
			: PackNullColl<Original, TrackJSON>

type PathsToOutput<T extends Record<string, unknown>> = {
	[K in keyof T as LastKey<K & string>]: T[K]
}
//#endregion

// #region merge
// https://stackoverflow.com/a/63542565/13914180
// prettier-ignore
type ObjectFromPaths<Path, V = true> = Path extends `${infer Key}.${infer Rest}`
	? { [P in UnpackNullColl<Key>]: AssignNullColl<Key,ObjectFromPaths<Rest, V>> }
	: { [P in UnpackNullColl<Path & string>]: AssignNullColl<UnpackNullColl<Path & string>,V> }
type MapFromPaths<T> = { [key in keyof T]: ObjectFromPaths<key, T[key]> }

type UnionMerge<U> = (U extends any ? (k: U) => void : never) extends (
	k: infer I
) => void
	? I
	: never

type MergeUnion<U> = UnionMerge<U> extends infer O
	? { [K in keyof O]: O[K] }
	: never
//#endregion

import type { Page } from '$src/routes/data/parse'
import type { DeepPartial } from '$src/routes/query/utils'
// @ts-ignore
export type ClearPage = NonNullableNested<Page>
// @ts-ignore
export type PartialPage = DeepPartial<Page>
function pipe<Schema, Verbose>() {
	type pick = PickPath<Schema, Page /*, Page, [] */>
	type paths = OmitNever<CleanPick<pick>>
	type flatten = CleanLeafs<PathsToOutput<paths>>
	type assemble = MapFromPaths<Verbose extends true ? paths : flatten>
	type union = assemble[keyof assemble]
	type merge = MergeUnion<union>
	return <Prettify<merge>>{}
}
export type MapSchema<Schema, Verbose> = ReturnType<
	typeof pipe<Schema, Verbose>
>
