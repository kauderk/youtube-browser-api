import type { ITEM } from '../types'
import { getYouTubePage } from './parse'
import { youtubeEndpoint, _locale_, eneabledLog, VideoRender } from './query'

export async function GetListByKeyword({
	keyword,
	withPlaylist = false,
	limit = 0,
	option = '',
}: {
	keyword: s
	withPlaylist?: boolean
	limit?: n
	option?: 'video' | 'channel' | 'playlist' | 'movie' | ''
}) {
	let endpoint = `${youtubeEndpoint}/results?search_query=${keyword}&${_locale_}`
	if (option == 'video') endpoint = `${endpoint}&sp=EgIQAQ%3D%3D`
	else if (option == 'channel') endpoint = `${endpoint}&sp=EgIQAg%3D%3D`
	else if (option == 'playlist') endpoint = `${endpoint}&sp=EgIQAw%3D%3D`
	else if (option == 'movie') endpoint = `${endpoint}&sp=EgIQBA%3D%3D`

	eneabledLog && console.log(endpoint)
	const page = await getYouTubePage(endpoint)

	const contents: any[] = // @ts-expect-error
		page.initialData.contents.twoColumnSearchResultsRenderer.primaryContents
			.sectionListRenderer.contents

	let contToken = {}

	let items: ITEM[] = []

	contents.forEach(content => {
		if (content.continuationItemRenderer) {
			contToken =
				content.continuationItemRenderer.continuationEndpoint
					.continuationCommand.token
		} else if (content.itemSectionRenderer.contents) {
			// @ts-expect-error
			content.itemSectionRenderer.contents.forEach(item => {
				if (item.channelRenderer) {
					let channelRenderer = item.channelRenderer
					items.push({
						id: channelRenderer.channelId,
						type: 'channel',
						thumbnail: channelRenderer.thumbnail,
						title: channelRenderer.title.simpleText,
					})
				} else {
					let videoRender = item.videoRenderer
					let playListRender = item.playlistRenderer

					if (videoRender?.videoId) {
						items.push(VideoRender(item))
					}

					if (withPlaylist && playListRender?.playlistId) {
						items.push({
							id: playListRender.playlistId,
							type: 'playlist',
							thumbnail: playListRender.thumbnails,
							title: playListRender.title.simpleText,
							length: playListRender.videoCount,
							videos: playListRender.videos,
							videoCount: playListRender.videoCount,
							isLive: false,
						})
					}
				}
			})
		}
	})

	return {
		items: limit != 0 ? items.slice(0, limit) : items,
		nextPage: {
			nextPageToken: page.apiToken,
			nextPageContext: {
				context: page.context,
				continuation: contToken,
			},
		},
	}
}
