import type { Query } from '$src/routes/query/+server'
import { query } from '.'
import routes from './api'
import { Deferred } from './routes/query/utils'
import type { Prettify } from './routes/utility-types'

const x = {
	promise: new Deferred<Query, any>(),
	_query: {} as Query<true>,
	GET(query: Query<true>) {
		// reset
		this._query = query
		this.promise = new Deferred<any, any>()

		return this as Prettify<Pick<typeof this, 'OK'>>
	},
	async OK(res?: { body: any }) {
		routes.query
			.GET({ query: this._query })
			// hmmm
			// @ts-expect-error
			.Ok(res => this.promise.resolve(res.body))
			.catch(res => this.promise.reject(res))
		return this.promise
	},
}
const y = x as Prettify<Pick<typeof x, 'GET'>>
y.GET({
	id: '',
	schema: {
		playerResponse: {
			videoDetails: {
				title: true,
			},
		},
	},
} satisfies Query).OK()

query({
	// required 🔵
	id: 'ZwLekxsSY3Y',
	// optional/partial ⚫
	schema: {
		initialData: {
			playerOverlays: {
				playerOverlayRenderer: {
					decoratedPlayerBarRenderer: {
						decoratedPlayerBarRenderer: {
							playerBar: {
								multiMarkersPlayerBarRenderer: {
									markersMap: {
										0: {
											value: {
												chapters: {
													1: {
														chapterRenderer: {
															title: true,
														},
													},
												},
											},
										},
									},
								},
							},
						},
					},
				},
			},
		},
		playerResponse: {
			videoDetails: {
				title: true,
				shortDescription: true,
				thumbnail: {
					thumbnails: {
						2: {
							url: true,
							height: true,
							width: true,
						},
					},
				},
			},
		},
	},
}).then(res => {
	res.body
	//  ^?
})
