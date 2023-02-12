// "youtube-search-api": "^1.1.1"
import axios from 'axios'
import type { RootObject } from '../types'

let eneabledLog = false

export const setEnabledConsoleLog = (b: b) => (eneabledLog = b)

export async function TryGetYouTubePage(url: s) {
	let apiToken = null
	let context = null

	eneabledLog && console.log(encodeURI(url))
	const page = await axios.get(encodeURI(url))
	const ytInitData = await page.data.split('var ytInitialData =')
	if (!ytInitData.length) {
		return Promise.reject()
	}

	const data = await ytInitData[1].split('</script>')[0].slice(0, -1)

	if (page.data.split('innertubeApiKey').length > 0) {
		apiToken = await page.data
			.split('innertubeApiKey')[1]
			.trim()
			.split(',')[0]
			.split('"')[2]
	}

	if (page.data.split('INNERTUBE_CONTEXT').length > 0) {
		context = await JSON.parse(
			page.data.split('INNERTUBE_CONTEXT')[1].trim().slice(2, -2)
		)
	}

	return {
		initdata: (await JSON.parse(data)) as RootObject,
		apiToken,
		context,
	}
}

import { getMap_smart } from '../utils'

type page = ReturnType<typeof TryGetYouTubePage>
const map = new Map<string, page>()

export const getYouTubePage = async (url: s) =>
	await getMap_smart(url, map, TryGetYouTubePage, url)

export type Page = Awaited<page>
