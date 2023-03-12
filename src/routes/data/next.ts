import axios from 'axios'
import type { ITEM } from '../types'
import { VideoRender } from './query'
import type { GetListByKeyword } from './keyword'
import { GetPlaylistData } from './playlist'
import { getEndpoint } from '../utils'

export const nextPage = async (
	nextPage: Awaited<ReturnType<typeof GetListByKeyword>>['nextPage'],
	withPlaylist = false,
	limit = 0
) => {
	const endpoint = getEndpoint('/youtubei/v1/search', {
		key: nextPage.nextPageToken,
	})

	const page = await axios.post(encodeURI(endpoint), nextPage.nextPageContext)
	const continuationItems: any[] =
		page.data.onResponseReceivedCommands[0].appendContinuationItemsAction
			.continuationItems
	let items: ITEM[] = []
	continuationItems.forEach(conitem => {
		if (conitem.itemSectionRenderer) {
			// @ts-expect-error
			conitem.itemSectionRenderer.contents.forEach((item, index) => {
				let videoRender = item.videoRenderer
				let playListRender = item.playlistRenderer
				if (videoRender && videoRender.videoId) {
					items.push(VideoRender(item))
				}
				if (withPlaylist) {
					if (playListRender && playListRender.playlistId) {
						items.push({
							id: playListRender.playlistId,
							type: 'playlist',
							thumbnail: playListRender.thumbnails,
							title: playListRender.title.simpleText,
							length: playListRender.videoCount,
							videos: GetPlaylistData(playListRender.playlistId),
						})
					}
				}
			})
		} else if (conitem.continuationItemRenderer) {
			nextPage.nextPageContext.continuation =
				conitem.continuationItemRenderer.continuationEndpoint.continuationCommand.token
		}
	})
	const itemsResult = limit != 0 ? items.slice(0, limit) : items
	return { items: itemsResult, nextPage: nextPage }
}
