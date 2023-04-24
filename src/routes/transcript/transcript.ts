/**
 * https://github.com/Kakulukian/youtube-transcript/blob/master/src/index.tshttps://github.com/Kakulukian/youtube-transcript/blob/master/src/index.ts
 * "import { getHeatMap } from 'youtube-heatmap'" nukes down netlify endpoints
 * because it "import { WaitForSelectorOptions } from "puppeteer""
 */

import type { Page } from './../data/parse'
import { getContentPage } from './../content/content'
import { getEndpoint } from '../utils'

const RE_YOUTUBE =
	/^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/im

export class YoutubeTranscriptError extends Error {
	constructor(message: any) {
		super(`[YoutubeTranscript] 🚨 ${message}`)
	}
}

export interface TranscriptConfig {
	lang?: string
	country?: string
}
export interface TranscriptResponse {
	text: string
	duration: number
	offset: number
}

/**
 * Fetch transcript from YTB Video
 * @param videoId Video url or video identifier
 * @param config Get transcript in another country and language ISO
 */
export async function fetchTranscript(
	videoId: string,
	config?: TranscriptConfig
) {
	const page = await getContentPage(videoId)
	const key = page.transcriptMeta.key
	if (!key?.length) return

	const data = generateRequest(page.transcriptMeta, config)
	const endpoint = getEndpoint('/youtubei/v1/get_transcript', {
		key,
	})
	const body = await fetch(endpoint, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	}).then(res => res.json()).catch()

	if (!body?.responseContext) {
		return
	}

	if (!body.actions) {
		throw new Error('Transcript is disabled on this video')
	}

	const transcripts =
		body.actions[0].updateEngagementPanelAction.content.transcriptRenderer
			.body.transcriptBodyRenderer.cueGroups

	return transcripts.map((cue: any) => {
		const row = cue.transcriptCueGroupRenderer.cues[0].transcriptCueRenderer

		return {
			text: row.cue.simpleText,
			duration: parseInt(row.durationMs),
			offset: parseInt(row.startOffsetMs),
		}
	}) as TranscriptResponse[]
}

/**
 * Generate tracking params for YTB API
 * @param page
 * @param config
 */
function generateRequest(
	meta: Page['transcriptMeta'],
	config?: TranscriptConfig
) {
	return {
		context: {
			client: {
				hl: config?.lang || 'fr',
				gl: config?.country || 'FR',
				visitorData: meta.visitorData,
				userAgent:
					'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36,gzip(gfe)',
				clientName: 'WEB',
				clientVersion: '2.20200925.01.00',
				osName: 'Macintosh',
				osVersion: '10_15_4',
				browserName: 'Chrome',
				browserVersion: '85.0f.4183.83',
				screenWidthPoints: 1440,
				screenHeightPoints: 770,
				screenPixelDensity: 2,
				utcOffsetMinutes: 120,
				userInterfaceTheme: 'USER_INTERFACE_THEME_LIGHT',
				connectionType: 'CONN_CELLULAR_3G',
			},
			request: {
				sessionId: meta.sessionId,
				internalExperimentFlags: [],
				consistencyTokenJars: [],
			},
			user: {},
			clientScreenNonce: generateNonce(),
			clickTracking: {
				clickTrackingParams: meta.clickTrackingParams,
			},
		},
		params: meta.params,
	}
}

/**
 *  'base.js' function
 */
function generateNonce() {
	const rnd = Math.random().toString()
	const alphabet =
		'ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghjijklmnopqrstuvwxyz0123456789'
	const jda = [
		alphabet + '+/=',
		alphabet + '+/',
		alphabet + '-_=',
		alphabet + '-_.',
		alphabet + '-_',
	]
	const b = jda[3]
	const a = []
	for (let i = 0; i < rnd.length - 1; i++) {
		a.push(rnd[i].charCodeAt(i))
	}
	let c = ''
	let d = 0
	let m, n, q, r, f, g
	while (d < a.length) {
		f = a[d]
		g = d + 1 < a.length

		if (g) {
			m = a[d + 1]
		} else {
			m = 0
		}
		n = d + 2 < a.length
		if (n) {
			q = a[d + 2]
		} else {
			q = 0
		}
		r = f >> 2
		f = ((f & 3) << 4) | (m >> 4)
		m = ((m & 15) << 2) | (q >> 6)
		q &= 63
		if (!n) {
			q = 64
			if (!q) {
				m = 64
			}
		}
		c += b[r] + b[f] + b[m] + b[q]
		d += 3
	}
	return c
}

/**
 * Retrieve video id from url or string
 * @param videoId video url or video id
 */
function retrieveVideoId(videoId: string) {
	if (videoId.length === 11) {
		return videoId
	}
	const matchId = RE_YOUTUBE.exec(videoId)
	if (matchId && matchId.length) {
		return matchId[1]
	}
	throw new YoutubeTranscriptError('Impossible to retrieve Youtube video ID.')
}
