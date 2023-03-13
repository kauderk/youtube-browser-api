import { API, querySpread } from 'sveltekit-zero-api'
import { deepKeys, getProperty, setProperty } from 'dot-prop'
import { getContentPage } from '$src/routes/content/content'
import { Ok } from 'sveltekit-zero-api/http'
import type { DeepPartial, Path } from './utils'
import { pick } from './utils'
import type { Page } from '$src/routes/data/parse'

type query = {
	id: string
	schema: DeepPartial<Page>
	paths?: Path<Page> | Path<Page>[]
}

export async function GET(event: API<{ query: query }>) {
	const { id, schema, paths } = querySpread(event)

	const page = await getContentPage(id)

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

	for (const path of flattenedPaths) {
		try {
			let value = getProperty(schema, path)
			if (value !== pick) {
				value = undefined // erase unknown values
			}

			const apiValue = getProperty(page, path)

			// modify by reference
			setProperty(schema, path, apiValue)
		} catch (error) {}
	}

	return Ok({ body: schema })
}
