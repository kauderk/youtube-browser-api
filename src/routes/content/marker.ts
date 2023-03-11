/**
 * "import p from 'phin'" nukes down netlify endpoints
 */

import { getContentPage } from './content'
import { getMap_smart } from '../utils'

export type Marker = 'chapters' | 'heatmap'
export async function getMarkers(videoId: string) {
	const page = await getContentPage(videoId)

	const relative =
		page.initialData.playerOverlays.playerOverlayRenderer
			.decoratedPlayerBarRenderer.decoratedPlayerBarRenderer.playerBar
			.multiMarkersPlayerBarRenderer.markersMap

	return {
		auto_chapters: relative.find(e => e.key == 'AUTO_CHAPTERS')?.value
			.chapters,
		chapters: relative.find(e => e.key == 'DESCRIPTION_CHAPTERS')?.value
			.chapters,
		macro_chapters:
			page.initialData.engagementPanels?.[1]?.engagementPanelSectionListRenderer.content.macroMarkersListRenderer.contents
				?.map(renderer => {
					const macro = renderer.macroMarkersListItemRenderer!
					if (!macro) return undefined as typeof macro // JA!
					return {
						chapter:
							macro.repeatButton.toggleButtonRenderer
								.defaultServiceEndpoint.repeatChapterCommand,
						thumbnails: macro.thumbnail.thumbnails,
						title: macro.title,
						description: macro.timeDescription,
					}
				})
				.filter(val => val !== undefined) ?? [], // typescript returns the union type on filter ?!
		heatmap: relative.find(e => e.key == 'HEATSEEKER')?.value.heatmap
			.heatmapRenderer,
	}
}

type page = Promise<string>
const map = new Map<string, page>()
export const GetHeatMap = async (url: string) => {
	const freeze = async (url: string) =>
		`(await getHeatMap(url))[0].toString()`
	return await getMap_smart(url, map, freeze, url)
}

export async function getHeatmapPath(videoId: string) {
	const youtubeEndpoint = `https://www.youtube.com`
	const _locale_ = 'hl=en&gl=us'
	const endpoint = `${youtubeEndpoint}/watch?v=${videoId}&${_locale_}`
	// FIXME: Fin a way to create an svg path using this method
	// https://github.com/LuanRT/YouTube.js/pull/263
	return await GetHeatMap(endpoint)
}
