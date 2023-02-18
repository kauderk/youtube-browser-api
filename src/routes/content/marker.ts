import { getContentPage } from './content'
import { getHeatMap } from 'youtube-heatmap'
import { getMap_smart } from '../utils'

export type Marker = 'chapters' | 'heatmap'
export async function getMarkers(videoId: s) {
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
		heatmap: relative.find(e => e.key == 'HEATSEEKER')?.value.heatmap
			.heatmapRenderer,
	}
}

type page = Promise<s>
const map = new Map<string, page>()
export const GetHeatMap = async (url: s) => {
	const freeze = async (url: s) => (await getHeatMap(url))[0].toString()
	return await getMap_smart(url, map, freeze, url)
}

export async function getHeatmapPath(videoId: s) {
	const youtubeEndpoint = `https://www.youtube.com`
	const _locale_ = 'hl=en&gl=us'
	const endpoint = `${youtubeEndpoint}/watch?v=${videoId}&${_locale_}`
	// FIXME: Fin a way to create an svg path using this method
	// https://github.com/LuanRT/YouTube.js/pull/263
	return await GetHeatMap(endpoint)
}
