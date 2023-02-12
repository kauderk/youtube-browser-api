import { getContentPage } from './content'
export type Marker = 'chapters' | 'heatmap'
export async function getMarkers(videoId: s) {
	const page = await getContentPage(videoId)

	const relative =
		page.initdata.playerOverlays.playerOverlayRenderer
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
