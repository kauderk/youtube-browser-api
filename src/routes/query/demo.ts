import type { Flatten, PartialPage } from './flatten'

// demo
const schema = {
	playerResponse: {
		videoDetails: {
			title: true,
			shortDescription: true,
			thumbnail: {
				// @ts-ignore
				thumbnails: {
					1: {
						url: true,
					},
				},
			},
		},
	},
	initialData: {
		playerOverlays: {
			playerOverlayRenderer: {
				decoratedPlayerBarRenderer: {
					decoratedPlayerBarRenderer: {
						playerBar: {
							multiMarkersPlayerBarRenderer: {
								// @ts-ignore
								markersMap: {
									0: {
										value: {
											chapters: {
												2: {
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
} satisfies PartialPage

type FlatResponse = Flatten<typeof schema>
//   ^?
