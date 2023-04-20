import type { Query } from '$src/routes/query/+server'
import { query } from '.'
import routes from './api'
import { Deferred } from './routes/query/utils'
import type { Prettify } from './routes/utility-types'

// @ts-ignore
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
			// @ts-ignore
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
	id: 'ZwLekxsSY3Y',
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
			contents: {
				twoColumnWatchNextResults: {
					secondaryResults: {
						secondaryResults: {
							results: {
								13: {
									compactVideoRenderer: {
										menu: {
											menuRenderer: {
												items: true,
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

// @ts-ignore
routes.query
	.GET({
		query: {
			id: 'ZwLekxsSY3Y',
			schema: {
				playerResponse: {
					videoDetails: {
						title: true,
					},
				},
			},
		},
	})
	.Ok(res => {
		res.body
		//  ^?
	})
