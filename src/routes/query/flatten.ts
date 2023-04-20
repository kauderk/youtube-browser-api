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
/**
 * PathsToOutput
 * Takes a Record<PathToNestedPartialValue> (aka Path), and Value>
 * Searches the LastKey recursively on the Path to reach the last property.name (aka Leaf)
 * Then acts on objects and arrays:
 * for objects -> {parent:{property: value}} | parent.property
 * for arrays -> {parent: {[index]: value}} | parent.index.property
 * For each, carries variables for the OriginalPath, LeafToValue, isVerboseOrFlatten
 * If it is an optional/NullCoalescing path, shift the uncertainty to the parent,
 * 		meaning grab the "?" and put it higher on the Path
 * If it isVerbose
 * 		infer the BranchPath and append the Leaf, else it's just the leaf.path
 */
type OR<T, E> = E extends never ? T : E
// prettier-ignore
type JoinPath<Original, Leaf, isVerbose, OGLeafArray=never> = isVerbose extends true
	? Original extends `${infer Verbose}${OR<Leaf,OGLeafArray>&string}`
		? `${Verbose}${Leaf&string}`
		: Original
	: Leaf
// prettier-ignore
type PackNullColl<Original, Leaf, isVerbose, _=never> =
	Original extends `${string}?${string}`
		? Leaf extends `${infer SecondToLastParent}.${infer Rest}`
			? JoinPath<Original, `${SecondToLastParent}?.${Rest}`, isVerbose,_>
			: JoinPath<Original, Leaf, isVerbose,_>
		: JoinPath<Original, Leaf, isVerbose,_>
type UnpackNullColl<Original> = Original extends `${infer Key}?`
	? Key
	: Original
type AssignNullColl<Original, Object> = Original extends `${infer Key}?`
	? Object | undefined
	: Object

// prettier-ignore
type LastKey<Path extends string, isVerbose, Original='', TrackJSON = '', TrackArrayLike = ''> =
	// Recursively call LastKey with the Tail as T,
	// T as NextPair, and Result as itself
	Path extends `${infer _}.${infer Rest}`
		? LastKey<Rest, isVerbose, Original extends ''?Path:Original, Path, TrackJSON>
		: TrackArrayLike extends `${infer key}.${infer K extends number & number}?.${infer Value}`
			? PackNullColl<Original, `${key}.${K}.${Value}`, isVerbose, TrackArrayLike>
			: PackNullColl<Original, TrackJSON, isVerbose>

type PathsToOutput<T extends Record<string, unknown>, isVerbose> = {
	[K in keyof T as LastKey<K & string, isVerbose>]: T[K]
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

type MergeUnion<U> = UnionMerge<U[keyof U]> extends infer O
	? { [K in keyof O]: O[K] }
	: never
//#endregion

import type { Page } from './../data/parse'
import type { DeepPartial } from './../query/utils'
// @ts-ignore
export type ClearPage = NonNullableNested<Page>
// @ts-ignore
export type PartialPage = DeepPartial<Page>

// how do you avoid type hell
// prettier-ignore
export type MapSchema<Schema extends PartialPage, isVerbose=false, tsAny=false> = tsAny extends true ? Record<string,any> : 
MergeUnion<
	MapFromPaths<
		CleanLeafs<
			PathsToOutput<
				OmitNever<CleanPick<PickPath<Schema, Page>>>,isVerbose
			>
		>
	>
>

type Schema = {
	playerResponse: {
		videoDetails: {
			title: true
			shortDescription: true
			thumbnail: {
				thumbnails: {
					2: {
						url: true
						height: true
						width: true
					}
				}
			}
		}
	}
}
