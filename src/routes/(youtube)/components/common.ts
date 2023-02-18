import type { Pre } from '../data/utils'

export let common: { [key: s]: [key: s, pre: Pre<s>] } = {
	playlistId: [
		'playlistId',
		{
			param: 'PLh0j6fxciWbLVMwgAGx6UprZZQGvD-cYG',
			shim: '?list=',
			intent: 'necessary',
		},
	],
	videoId: [
		'videoId',
		{ param: 'pOEyYwKtHJo', shim: 'watch?v=', intent: 'necessary' },
	],
}
