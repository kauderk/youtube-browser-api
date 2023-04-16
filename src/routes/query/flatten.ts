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
type ClearPage = NonNullableNested<Page>
//#endregion
function GET<T>(params: { query: { schema: T } }) {
	type paths = OmitNever<CleanPick<schema>>
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
