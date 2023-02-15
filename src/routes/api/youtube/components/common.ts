import type { Pre } from '../data/utils'

export let common: { [key: s]: [key: s, pre: Pre<s>] } = {
	playlistId: [
		'playlistId',
		{
			placeholder: 'PLh0j6fxciWbLVMwgAGx6UprZZQGvD-cYG',
			shim: '?list=',
			intent: 'necessary',
		},
	],
	videoId: [
		'videoId',
		{ placeholder: 'pOEyYwKtHJo', param: '', shim: 'watch?v=' },
	],
}
