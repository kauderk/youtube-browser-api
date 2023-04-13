import { API, querySpread, err } from 'sveltekit-zero-api'
import { deepKeys, getProperty, setProperty } from 'dot-prop'
import { getContentPage } from '$src/routes/content/content'
import { Ok } from 'sveltekit-zero-api/http'
import type { DeepPartial, Path } from './utils'
import type constPage from '../data/const-page'

type path = Path<typeof constPage>
type query = {
	id: string
	schema: DeepPartial<typeof constPage>
	paths?: path | path[]
	flatten?: boolean
}

export async function GET<Q extends query>(event: API<{ query: Q }>) {
	const { id, paths, schema: preSchema, flatten } = querySpread(event)

	const errorResponse = err.handler(
		err.test(id?.length == 11, { id: 'Must be 11 characters' }),
		err.test(!!paths || !!preSchema, {
			query: 'paths or schema should be present and typed accordingly',
		})
	)

	if (errorResponse) {
		return errorResponse('BadRequest')
	}

	const page = await getContentPage(id)

	const schema = querySpread(event).schema ?? {}
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
			let value = getProperty(schema, path)
			if (!value) {
				value = undefined // erase unknown values
			}

			const apiValue = getProperty(page, path)

			const lastPath = flatten
				? path.split('.')?.splice(-2)?.join('.') || ''
				: path

			// modify by reference
			setProperty(outputSchema, lastPath, apiValue)
		} catch (error) {}
	}
	return Ok({ body: outputSchema })
}
