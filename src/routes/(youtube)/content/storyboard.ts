// https://github.com/evanzummeren/yt-storyboard/blob/master/storyboard.js

import type { Storyboards } from '../data/types/player-response'

/**
 * @param {string} spec A string containing the playerStoryboardSpecRenderer.spec
 * @param {boolean} hq High quality true
 * @param {number} seconds Duration of the YouTube video
 */
export function getStoryboard(storyboards: Storyboards, hq: s | b, seconds: n) {
	const spec = storyboards.playerStoryboardSpecRenderer.spec
	let specParts = spec.split('|')
	let baseUrlHq = specParts[0].split('$')[0] + '2/'
	let baseUrlLq = specParts[0].split('$')[0] + '1/'
	let sgpPart = specParts[0].split('$N')[1]

	let sighPartHq
	let sighPartLq

	if (specParts.length === 3) {
		sighPartHq = specParts[2].split('M#')[1]
		sighPartLq = specParts[1].split('M#')[1]
	} else if (specParts.length === 2) {
		sighPartHq = specParts[1].split('t#')[1]
		// sighPartLq = specParts[0].split('M#')[1];
	} else {
		sighPartHq = specParts[3].split('M#')[1]
		sighPartLq = specParts[2].split('M#')[1]
	}

	let amountOfBoards = 0
	let division = 25

	let storyboardArray = []

	if (hq === false) {
		division = 100
	} /* More frames per image in the case of LQ */

	if (seconds < 250) {
		amountOfBoards = Math.ceil(seconds / 2 / division)
	} else if (seconds > 250 && seconds < 1000) {
		amountOfBoards = Math.ceil(seconds / 4 / division)
	} else if (seconds > 1000) {
		amountOfBoards = Math.ceil(seconds / 10 / division)
	}

	if (hq === true) {
		/* High quality storyboard */
		for (let i = 0; i < amountOfBoards; i++) {
			storyboardArray.push(
				baseUrlHq + 'M' + i + sgpPart + '&sigh=' + sighPartHq
			)
		}
	} else {
		/* Low quality storyboard */
		for (let i = 0; i < amountOfBoards; i++) {
			storyboardArray.push(
				baseUrlLq + 'M' + i + sgpPart + '&sigh=' + sighPartLq
			)
		}
	}

	return {
		url: storyboardArray,
		parts: {
			firstPart: `${baseUrlHq}M`,
			secondPart: `${sgpPart}&sigh=${sighPartHq}`,
		},
		keys: {
			sgp: sgpPart.slice(9),
			sigh: sighPartHq,
		},
	}
}
