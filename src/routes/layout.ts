export const layout = <const>{
	main: {
		link: { shim: ' fa-bars', title: 'YouTube Browser API' },
	},
	content: {
		link: { shim: ' fa-video', title: 'YouTube Video Browser API' },
		info: {
			name: 'CONTENT',
			required: '?id=',
			description: 'Extract all/some video data.',
			link: '/content/page',
		},
	},
	data: {
		link: { shim: 'fa-folder-tree', title: 'YouTube Data Browser API' },
		info: {
			name: 'DATA',
			required: 'keywords',
			description: 'Search for narrower data.',
			link: '/data/page',
		},
	},
	transcript: {
		link: {
			shim: 'fa-file-invoice',
			title: 'YouTube Transcript Browser API',
		},
		info: {
			name: 'TRANSCRIPT',
			required: 'video ids',
			description: 'Extract transcripts.',
			link: '/transcript/page',
		},
	},
	query: {
		link: {
			shim: 'fa-database',
			title: 'YouTube Query Browser API',
			badge: '🔥',
		},
		info: {
			name: 'QUERY',
			required: '?id=',
			description: 'Extract data using schemas.',
			link: '/query/page',
		},
	},
}
