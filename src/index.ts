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
export const query: demo = async query => {
	return new Promise((resolve, reject) => {
		routes.query
			.GET({ query })
			.Ok(res => resolve(res as never))
			.catch(res => reject(res))
	})
}
