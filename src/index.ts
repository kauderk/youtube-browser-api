import type { Param } from './routes/utility-types'

import type { _get as _content } from './routes/content/+server'
import type { _get as _data } from './routes/data/[endpoint]/+server'
import type { _get as _transcript } from './routes/transcript/+server'

type Config<Q extends { query: any }> = { baseUrl?: string } & Q

function createFetch<
	T extends (...args: any) => any,
	config = Config<Param<T>>
>(parseUrlParameters: (config: config) => string) {
	return function (config: config) {
		// @ts-expect-error
		const base = config.baseUrl ?? 'https://youtube-browser-api.netlify.app'
		const params = parseUrlParameters(config)

		return fetch(base + params).then(res =>
			res.json()
		) as unknown as ReturnType<T>
	}
}

export const content = createFetch<_content>(params => {
	const query = params.query

	return `/content?id=${query.id}&params=` + query.params.join()
})
export const data = createFetch<_data>(params => {
	// @ts-expect-error exclude undefined
	const zero = Object.entries(params.query)[0]
	const endpoint = zero[0]

	return `/data/${endpoint}?` + new URLSearchParams(zero[1] as any).toString()
})
export const transcript = createFetch<_transcript>(params => {
	return `/transcript?` + new URLSearchParams(params.query).toString()
})
// content({
// 	query: {
// 		id: '',
// 		params: ['title'],
// 	},
// }).then(res => {
// 	res
// })
// data({
// 	query: {
// 		playlist: {
// 			limit: 0,
// 			playlistId: '',
// 		},
// 	},
// }).then(res => {
// 	res
// })
// transcript({
// 	query: {
// 		videoId: '',
// 	},
// }).then(res => {
// 	res
// })
