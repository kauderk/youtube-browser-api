import type { Prettify } from '../utility-types'
import type { Path, PathValue, NonNullableNested } from './utils'

//#region flatten paths
type CleanPick<schema> = {
	[key in Path<schema>]: PathValue<schema, key> extends object
		? never
		: // @ts-ignore
		  PathValue<ClearPage, key>
}
type OmitNever<T> = { [K in keyof T as T[K] extends never ? never : K]: T[K] }
//#endregion

//#region last leaf
type ArrayLike<P extends number> = `${string}.${P}.${string}`

type LastKey<T extends string, NextPair = '', Result = ''> =
	// Recursively call LastKey with the Tail as T,
	// T as NextPair, and Result as itself
	T extends `${infer _}.${infer Tail}`
		? LastKey<Tail, T, NextPair>
		: // prettier-ignore
		Result extends ArrayLike<infer _ extends number> ? Result : NextPair

type PathsToOutput<T extends Record<string, unknown>> = {
	[K in keyof T as LastKey<K & string>]: T[K]
}
//#endregion

// #region merge
// https://stackoverflow.com/a/63542565/13914180
type ObjectFromPaths<Path, V = true> = Path extends `${infer K}.${infer R}`
	? { [P in K]: ObjectFromPaths<R, V> }
	: // @ts-expect-error
	  { [P in Path]: V }
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
export type PartialPage = DeepPartial<Page>
function pipe<Schema, Verbose>() {
	type paths = OmitNever<CleanPick<Schema>>
	type flatten = PathsToOutput<paths>
	type assemble = MapFromPaths<Verbose extends true ? paths : flatten>
	type union = assemble[keyof assemble]
	type merge = MergeUnion<union>
	return <Prettify<merge>>{}
}
export type MapSchema<Schema, Verbose> = ReturnType<
	typeof pipe<Schema, Verbose>
>
