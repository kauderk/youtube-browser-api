export function buildQueryString(
	url: string,
	urlParams?: { [key: string]: string }
) {
	// https://codepen.io/ahsan01/pen/RJWOpx
	function concat(params: any) {
		return Object.entries(params)
			.map(d => `${d[0]}=${d[1]}`)
			.join('&')
	}

	const qs = urlParams ? '?' + concat(urlParams) : ''
	return `${url}${qs}`
}
export async function getDomainText(url: string) {
	return fetch(url).then(res => res.text())
}
export function ParseUniqueIDs(htmlContent: string) {
	// https://cable.ayra.ch/ytdl/playlist.php
	const matches = [
		...htmlContent.matchAll(/https?:\/\/youtu\.be\/([\w\W]{11})/gm),
		...htmlContent.matchAll(/watch?\?v\=([\w\W]{11})/gm),
	]
		.map(m => m[1])
		.filter(Boolean)
	return [...new Set(matches as string[])]
}
