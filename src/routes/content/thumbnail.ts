import { getEndpoint, getMap_smart } from '../utils'

const searchByIdMap = new Map<string, Promise<string>>()

async function searchById(videoId: string) {
	const endpoint = getEndpoint('/results', {
		// sometimes the "videoId" matches actual youtube video titles/searches
		search_query: encodeURIComponent(`https://youtu.be/${videoId}`),
		// &sp=EgIQAQ%3D%3D makes a lightweight request https://github.com/timeforaninja/node-ytsr/blob/master/example/example_filters_output.txt
		sp: 'EgIQAQ%3D%3D',
	})

	const headers = {
		// allow for "movingThumbnail" https://github.com/tarekdj/yt-thmb/blob/main/index.js || https://github.com/timcole/thumb.yt/blob/26c04f969e76aaa302daa3a3d34c997d9ecde9eb/src/scrape.ts
		'User-agent':
			'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:84.0) Gecko/20100101 Firefox/84.0',
	}

	return getMap_smart(endpoint, searchByIdMap, () =>
		fetch(endpoint, { headers }).then(res => res.text())
	)
}

export async function getMovingThumbnail(videoId: string) {
	const html = await searchById(videoId)
	const pattern = `https:\/\/i\.ytimg\.com\/an_webp\/${videoId}\/mqdefault.+?"`
	const regex = new RegExp(pattern, 'gi')
	const [result] = html.match(regex) ?? []
	return result?.replace('"', '').replace(/\\u0026/g, '&')
}
