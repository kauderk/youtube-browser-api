// https://github.com/vgranado/youtube-timeline/blob/3d643f93b9d3ef6ec3cc9f4f617c85f341884721/src/index.ts#L27
// ytdl-core/lib/info-extras.getStoryboards()

import type { Storyboards } from '../data/types/player-response'

function getStoryboards(storyboards?: Storyboards) {
	const parts = storyboards?.playerStoryboardSpecRenderer?.spec?.split('|')
	if (!parts) return []

	const url = new URL(parts.shift() ?? '')

	return parts.map((part, i) => {
		const [
			thumbnailWidth,
			thumbnailHeight,
			thumbnailCount_s,
			columns_s,
			rows_s,
			interval,
			nameReplacement,
			sigh,
		] = part.split('#')

		url.searchParams.set('sigh', sigh)

		const thumbnailCount = parseInt(thumbnailCount_s, 10)
		const columns = parseInt(columns_s, 10)
		const rows = parseInt(rows_s, 10)

		const storyboardCount = Math.ceil(thumbnailCount / (columns * rows))

		return {
			templateUrl: url
				.toString()
				.replace('$L', i.toString())
				.replace('$N', nameReplacement),
			url: url.toJSON(),
			thumbnailWidth: parseInt(thumbnailWidth, 10),
			thumbnailHeight: parseInt(thumbnailHeight, 10),
			thumbnailCount,
			interval: parseInt(interval, 10),
			columns,
			rows,
			storyboardCount,
		}
	})
}

type StoryboardQuality = keyof typeof qualityEnum

const qualityEnum = <const>{
	low: 0,
	medium: 1,
	high: 2,
}

const evenlyDistributedElements = <T>(array: T[], quantity: number) => {
	if (quantity === 0) return []
	if (quantity >= array.length) return [...array]

	const interval = array.length / quantity
	return Array.from(
		{ length: quantity },
		(_, i) => array[Math.floor(i * interval + interval / 2)]
	)
}

const getFramesDetails = (
	quantity: number,
	slot: ReturnType<typeof getStoryboards>[number]
) => {
	const COUNT = 5
	const MAX_COUNT = 25

	const selectedFrames = evenlyDistributedElements(
		Array.from({ length: slot.thumbnailCount }).map((_, i) => i),
		quantity
	)

	return {
		slot,
		frames: selectedFrames.map((frameIndex, i) => {
			const storyboardIndex = Math.floor(frameIndex / MAX_COUNT)
			const url = slot.templateUrl.replace('$M', String(storyboardIndex))

			const maxCount = MAX_COUNT * (i + 1)
			const lookupCount =
				maxCount > slot.thumbnailCount
					? slot.thumbnailCount - MAX_COUNT * i
					: MAX_COUNT
			const cords = getMaxRowsAndCols(lookupCount, COUNT)

			return {
				url,
				thumbnailCount: lookupCount,
				width: slot.thumbnailWidth * slot.columns,
				height: slot.thumbnailHeight * cords.rows,
				...cords,
			}
		}),
	}
}
function getMaxRowsAndCols(totalCells: number, cellsPerRow: number) {
	const filledRows = Math.floor(totalCells / cellsPerRow)
	const maxRows = totalCells % cellsPerRow > 0 ? filledRows + 1 : filledRows
	return { rows: maxRows, columns: Math.floor(totalCells / maxRows) }
}

export const getTimeline = (params: {
	storyboards: Storyboards
	quality: StoryboardQuality
	quantity?: number
}) => {
	params.quantity = params.quantity || 5

	const storyboardArray = getStoryboards(params.storyboards)

	return Object.entries(qualityEnum).reduce((acc, [key, value]) => {
		return {
			...acc,
			// @ts-expect-error
			[key]: getFramesDetails(params.quantity, storyboardArray[value]),
		}
	}, {} as Record<StoryboardQuality, ReturnType<typeof getFramesDetails>>)
}
