// Reexport your entry components here

import type { Param } from '$src/routes/utility-types'
import type { get } from '$src/routes/content/+server'
import type { Return } from '$src/routes/content/types'

type Config<Q extends { query: any }> = { url: string } & Q

function assertConfig<Q extends { query: any }>(
	params: Config<Q>
): asserts params is Config<Q> & { url: s } {
	params.url ??= 'https://youtube-browser-api.netlify.app'
}

export function content(config: Config<Param<get>>) {
	assertConfig(config)

	const query = config.query
	const url =
		`${config.url}/content?id=${query.id}&params=` + query.params.join()

	return fetch(url).then(res => res.json()) as Return<get>
}
