import { query } from '.'

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
	res
	//^?
})
