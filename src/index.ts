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
export type { Query } from '$src/routes/query/+server'
export const query: demo = async (query, ok) => {
	//                                    res should be typed
	return routes.query.GET({ query: query as any }).Ok(res => ok(res as any))
}

// const complexQuery = {
// 	// required 🔵
// 	id: 'ZwLekxsSY3Y',
// 	// optional/partial ⚫
// 	schema: {
// 		initialData: {
// 			playerOverlays: {
// 				playerOverlayRenderer: {
// 					decoratedPlayerBarRenderer: {
// 						decoratedPlayerBarRenderer: {
// 							playerBar: {
// 								multiMarkersPlayerBarRenderer: {
// 									markersMap: {
// 										0: {
// 											value: {
// 												chapters: {
// 													1: {
// 														chapterRenderer: {
// 															title: true,
// 														},
// 													},
// 												},
// 											},
// 										},
// 									},
// 								},
// 							},
// 						},
// 					},
// 				},
// 			},
// 		},
// 		playerResponse: {
// 			videoDetails: {
// 				title: true,
// 				shortDescription: true,
// 				thumbnail: {
// 					thumbnails: {
// 						2: {
// 							url: true,
// 							height: true,
// 							width: true,
// 						},
// 					},
// 				},
// 			},
// 		},
// 	},
// } satisfies import('$src/routes/query/+server').Query
// query(complexQuery, res => {
// 	// @ts-ignore
// 	res.body
// 	//  ^?
// })
