import { createZeroApi } from 'sveltekit-zero-api/api'
import type { GeneratedAPI } from './sveltekit-zero-api'

const routes = createZeroApi({
	baseUrl: 'https://youtube-browser-api.netlify.app',
	onError: async err => console.error('[youtube-browser-api]', err),
	prependCallbacks(method) {
		method.Error(err => {
			console.warn('Error', err)
		})
		// method.Ok(res => res.body)
	},
}) as GeneratedAPI

export { pick } from './routes/query/utils'
export default routes

// demo
import type { demo } from './routes/query/+server'
export type { Query } from './routes/query/+server'
import { Deferred } from './routes/query/utils'
export const query: demo = async query => {
	const promise = new Deferred<any, any>()
	routes.query
		.GET({ query: query as any })
		// res should be typed
		.Ok(res => promise.resolve(res as any))
	return promise as any
}
