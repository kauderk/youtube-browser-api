import { deepKeys, getProperty, setProperty } from './dot-prop'
import type { MapSchema, PartialPage } from './flatten'
import { getContentPage } from '../content/content'
import { json, patchFetch } from '../zero-api/fetch'
import type { RequestHandler } from './$types'
import { querySpread } from '../zero-api/helper'
import { err } from '../zero-api/error-handling'

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

export const GET = async <const Q extends Query>(event: Q) => {
	const { id, paths, schema: preSchema, verbose } = querySpread(event)

	const errorResponse = err.handler(
		err.test(id?.length == 11, { id: 'Must be 11 characters' }),
		// @ts-ignore too much recursion
		err.test(!!paths || !!preSchema, {
			query: 'paths or schema should be present and typed accordingly',
		})
	)

	if (errorResponse) {
		// type y = Awaited<ReturnType<typeof errorResponse<'BadRequest'>>>
		// type f = keyof y // why is this never from `import { err } from 'sveltekit-zero-api'`

		// improve readability on IDEs
		interface BadRequest
			extends ReturnType<typeof errorResponse<'BadRequest'>> {}
		return errorResponse('BadRequest') as BadRequest
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

	return json(
		outputSchema as MapSchema<Q['schema'], Q['verbose'], Q['tsAny']>
	)
}

export const _GET = async <Q extends Query>(query: Q) => {
	return (await patchFetch<RequestHandler>({
		endpoint: 'query',
		query,
		// special case... due to the nature of the excessive recursion
		// handling the inference through any Utility<T>
		// will cause headaches
	})) as MapSchema<Q['schema'], Q['verbose'], Q['tsAny']>
}
