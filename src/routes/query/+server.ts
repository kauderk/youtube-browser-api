import { API, querySpread, err } from 'sveltekit-zero-api'
import { deepKeys, getProperty, setProperty } from './dot-prop'
import { getContentPage } from '$src/routes/content/content'
import { Ok } from 'sveltekit-zero-api/http'
import type { Path } from './utils'
import type { Flatten, PartialPage, ClearPage } from './flatten'

// @ts-ignore too much recursion
type path = Path<ClearPage>
export type query = {
	id: string
	schema: PartialPage
	paths?: path | path[]
	flatten?: boolean
}

export type demo = <const Q extends query>(
	query: Q,
	ok: (res: { body: Flatten<Q['schema']> }) => void
) => Promise<any>

export async function GET<const Q extends query>(event: API<{ query: Q }>) {
	const { id, paths, schema: preSchema, flatten } = querySpread(event)

	const errorResponse = err.handler(
		err.test(id?.length == 11, { id: 'Must be 11 characters' }),
		// @ts-ignore too much recursion
		err.test(!!paths || !!preSchema, {
			query: 'paths or schema should be present and typed accordingly',
		})
	)

	if (errorResponse) {
		return errorResponse('BadRequest')
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

			const lastPath = flatten
				? path.split('.')?.splice(-2)?.join('.') || ''
				: path

			// modify by reference
			setProperty(outputSchema, lastPath, apiValue)
		} catch (error) {}
	}
	return Ok({ body: outputSchema /* as Flatten<Q['schema']> */ })
}
