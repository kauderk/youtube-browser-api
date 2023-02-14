// https://github.com/vgranado/youtube-timeline/blob/3d643f93b9d3ef6ec3cc9f4f617c85f341884721/src/index.ts#L27
// ytdl-core/lib/info-extras.getStoryboards()

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

import type { Storyboards } from '../data/types/player-response'

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
	const COLUMNS = 5
	const ROWS = 5

	const selectedFrames = evenlyDistributedElements(
		Array.from({ length: slot.thumbnailCount }).map((_, i) => i),
		quantity
	)

	return selectedFrames.map(frameIndex => {
		const storyboardIndex = Math.floor(frameIndex / (COLUMNS * ROWS))
		const url = slot.templateUrl.replace('$M', String(storyboardIndex))

		const thumbnailIndex = frameIndex - storyboardIndex * (COLUMNS * ROWS)
		const x = (thumbnailIndex % COLUMNS) * slot.thumbnailWidth
		const y = Math.floor(thumbnailIndex / ROWS) * slot.thumbnailHeight

		return { url, x, y }
	})
}

export const getTimeline = (params: {
	storyboards: Storyboards
	quality: StoryboardQuality
	quantity: number
}) => {
	if (params.quantity <= 0) {
		return
	}

	const storyboardArray = getStoryboards(params.storyboards)
	// return getFramesDetails(
	// 	params.quantity,
	// 	storyboardArray[qualityEnum[params.quality]]
	// )
	return Object.entries(qualityEnum).map(([key, value]) => {
		return {
			[key]: getFramesDetails(params.quantity, storyboardArray[value]),
		}
	})
}
