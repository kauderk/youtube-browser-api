import { createZeroApi } from 'sveltekit-zero-api/api'
import type { GeneratedAPI } from './sveltekit-zero-api'

const routes = createZeroApi({
	baseUrl: 'https://youtube-browser-api.netlify.app',
	onError: async err => console.error('[youtube-browser-api]', err),
	prependCallbacks(method) {
		method.Error(err => {
			console.warn('Error', err)
		})
	},
}) as GeneratedAPI

export { pick } from './routes/query/utils'
export default routes

// demo
import type { demo } from './routes/query/+server'
export const query: demo = async (query, ok) => {
	//                                    res should be typed
	return routes.query.GET({ query }).Ok(res => ok(res as any))
}

// query(
// 	{
// 		id: '3O05nyS6hwQ',
// 		schema: {
// 			playerResponse: {
// 				videoDetails: {
// 					author: true,
// 				},
// 			},
// 		},
// 	},
// 	res => {
// 		res.body
// 		//  ^?
// 	}
// )
