import type { Page } from '$src/routes/data/parse'
import type { Prettify } from '../utility-types'
// import type Page from './const-page'
import type { Path, PathValue, NonNullableNested } from './utils'

const pick = ''

//#region schemas
const simpleSchema = <const>{
	playerResponse: {
		videoDetails: {
			title: '',
			shortDescription: '',
			thumbnail: {
				thumbnails: {
					'0': {
						url: '',
					},
				},
			},
		},
	},
}
type SimpleOutput = {
	videoDetails: {
		title: string
		shortDescription: string
	}
	thumbnails: [
		{
			url: string
		}
	]
}
// prettier-ignore
const complexSchema = <const>{initialData:{ playerOverlays: { playerOverlayRenderer: { decoratedPlayerBarRenderer: { decoratedPlayerBarRenderer: { playerBar: { multiMarkersPlayerBarRenderer: { markersMap: { '0': { value: { chapters: {'0': { chapterRenderer: { title: pick, }, },}, }, }, }, }, }, }, }, }, }, }}
type complexOutput = {
	chapterRenderer: {
		title: {
			simpleText: string
		}
	}
}

const objectSchema = {
	playerResponse: {
		videoDetails: {
			thumbnail: '',
		},
	},
}

const testSchema = complexSchema //complexSchema
type testOutput = SimpleOutput //complexOutput
type schema = typeof testSchema
type keys = Path<schema>
//#endregion

//#region flatten paths
type CleanPick<schema> = {
	[key in Path<schema>]: PathValue<schema, key> extends object
		? never
		: // @ts-ignore
		PathValue<ClearPage, key> extends never
		? unknown
		: // @ts-ignore
		  PathValue<ClearPage, key>
}
type OmitNever<T> = { [K in keyof T as T[K] extends never ? never : K]: T[K] }
type paths = OmitNever<CleanPick<schema>>
const C = <Page>{}
C.playerResponse.videoDetails.thumbnail.thumbnails
type ClearPage = NonNullableNested<Page>
// @ts-ignore
type A = PathValue<
	ClearPage,
	'playerResponse.videoDetails.thumbnail.thumbnails'
>
//   ^?

const f = ((<ClearPage>{}) as ClearPage).initialData.engagementPanels[1]
	.engagementPanelSectionListRenderer.content.macroMarkersListRenderer
	.contents[0].macroMarkersListItemRenderer
const a = ((<Page>{}) as Page)?.initialData?.engagementPanels?.[1]
	?.engagementPanelSectionListRenderer?.content?.macroMarkersListRenderer
	?.contents

type B = PathValue<
	//   ^?
	ClearPage,
	'initialData.engagementPanels.1.engagementPanelSectionListRenderer.content.macroMarkersListRenderer.contents.0.macroMarkersListItemRenderer.repeatButton.toggleButtonRenderer.defaultServiceEndpoint.repeatChapterCommand'
>
// type Pre =
// 	ClearPage['initialData']['playerOverlays']['playerOverlayRenderer']['decoratedPlayerBarRenderer']['decoratedPlayerBarRenderer']
// type BC = PathValue<
// 	//   ^?
// 	Pre,
// 	'playerBar.multiMarkersPlayerBarRenderer.markersMap.0.value.chapters'
// >
//"initialData.playerOverlays.playerOverlayRenderer.decoratedPlayerBarRenderer.decoratedPlayerBarRenderer.playerBar.multiMarkersPlayerBarRenderer.markersMap.0.value.chapters.0.chapterRenderer.title"

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

//#region tests
type Result = PathsToOutput<paths>
//   ^?
// @ts-expect-error
const test = (<Result>{}) satisfies testOutput
//#endregion

function GET<T>(params: { query: { schema: T } }) {
	type paths = OmitNever<CleanPick<schema>>
	type flatten = PathsToOutput<paths>
	type assemble = MapFromPaths<flatten>
	type union = assemble[keyof assemble]
	type merge = MergeUnion<union>
	return <Prettify<merge>>{}
}

const response = GET({
	query: {
		//schema: complexSchema,
		//schema: simpleSchema,
		schema: { ...complexSchema, ...simpleSchema },
	},
})

// https://stackblitz.com/edit/youtube-browser-api-client-playground?file=index.ts
type ServerResponse = {
	chapterRenderer: {
		title: {
			simpleText: string
		}
	}
	videoDetails: {
		title: string
		shortDescription: string
	}
	thumbnails: [
		null,
		null,
		null,
		null,
		{
			url: string
		}
	]
}
