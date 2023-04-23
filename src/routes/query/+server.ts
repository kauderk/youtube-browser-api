import { deepKeys, getProperty, setProperty } from './dot-prop'
import type { MapSchema, PartialPage } from './flatten'
import { getContentPage } from '../content/content'
import { type Patch, json, patchFetch } from '../zero-api/fetch'
import type { RequestHandler } from './$types'
import { querySpread } from '../zero-api/helper'
import { err } from '../zero-api/error-handling'
import { json as _json } from '@sveltejs/kit'

export type Query = {
	/**
	 * YouTube videoID - eleven characters
	 */
	id: string
	/**
	 * Describe your request on `JavaScript Object Notation (JSON)` syntax
	 */
	schema: PartialPage
	/**
	 * Describe your request on dot.notaion style
	 */
	paths?: string | string[]
	/**
	 * By default will return closest leafs to the `picked` values
	 *
	 * Turn it on to receive the schema as you requested it
	 * @default false
	 */
	verbose?: boolean
	/**
	 * Enable to bypass typechecking.
	 *
	 * There are 4000+ base queries plus their combinations; recover your performance.
	 *
	 * Come help https://github.com/kauderk/youtube-browser-api/issues/1
	 */
	tsAny?: boolean
}
type _MapSchema<Q extends Query> = MapSchema<
	Q['schema'],
	Q['verbose'],
	Q['tsAny']
>

// Extracted to recycle the reasons, due to the `recursive inference limitation`
function handleBadInputs(id?: string, paths?: string, preSchema?: object) {
	const errorResponse = err.handler(
		err.test(id?.length == 11, { id: 'Must be 11 characters' }),
		err.test(!!paths || !!preSchema, {
			query: 'paths or schema should be present and typed accordingly',
		})
	)
	return errorResponse?.('BadRequest', {
		message:
			'Visualize the query process https://excalidraw.com/#json=0hDFTajVxa2oO7s34kMef,M_jPO1x4IoE_Eqz2RGvPVA',
	})
}

export const GET = async <const Q extends Query>(event: Q) => {
	const { id, paths, schema: preSchema, verbose } = querySpread(event)

	const badInputError = handleBadInputs(id, paths, preSchema)

	if (badInputError) {
		return badInputError
	}

	const page = await getContentPage(id)

	const schema = querySpread(event).schema ?? {}
	// @ts-ignore too much recursion
	const flattenedPaths = [deepKeys(schema), paths ?? []]
		.flat()
		.map(path =>
			path
				// .0. => [0]
				?.replace(/\.(\d+)\./gm, '[$1].')
				// .0 => [0] // end of the line
				?.replace(/\.(\d+$)/gm, '[$1]')
		)
		.filter(path => !!path)

	const outputSchema = {}
	for (const path of flattenedPaths) {
		try {
			let value = getProperty(schema, path, undefined)
			if (!value) {
				value = undefined // erase unknown values
			}

			const apiValue = getProperty(page, path, undefined)

			const lastPath = !verbose
				? path.split('.')?.splice(-2)?.join('.') || ''
				: path

			// modify by reference
			setProperty(outputSchema, lastPath, apiValue)
		} catch (error) {}
	}

	return json(outputSchema as _MapSchema<Q>)
}

// https://stackoverflow.com/a/75827278/13914180
// @ts-ignore
export const _GET = async <Q extends Query & Patch>(
	query: Q & Query & Patch
) => {
	const promise = patchFetch<RequestHandler, any, Promise<any>>({
		endpoint: 'query',
		query,
	})

	// special case... due to the nature of the excessive recursion
	// handling the inference through any Utility<T>
	// will cause headaches
	// https://github.com/kauderk/youtube-browser-api/issues/1
	return promise as any as { manual: Q['manual'] } extends {
		manual: true
	}
		?
				| ReturnType<typeof json<_MapSchema<Q>>>
				| NonNullable<ReturnType<typeof handleBadInputs>>
		: _MapSchema<Q>
}

/* uncomment me
_GET({
	id: '',
	schema: {
		apiToken: true,
	},
	//tsAny: true,
	manual: true,
}).then(async res => {
	if (!res?.ok) {
		res.body.errors.id
		//              ^?

		return
	}

	const data = await res.json()
	//    ^?
})
// */
