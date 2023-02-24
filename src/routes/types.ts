import type { Thumbnail13 } from './data/types/initial-data'

export type ITEM = {
	id?: string
	type?: string
	thumbnail?: Thumbnail13 | { thumbnails: { thumbnails: Thumbnail13[] } }

	title?: string
	length?: string
	videos?: any
	videoCount?: string
	isLive?: boolean
	channelTitle?: string
	shortBylineText?: string
}
