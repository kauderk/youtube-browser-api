import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'

import { watchAPI } from 'sveltekit-zero-api'
if (process.env.NODE_ENV !== 'production') {
	watchAPI()
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
	},
	preprocess: preprocess({
		sourceMap: true,
		postcss: true,
	}),
	vitePlugin: {
		experimental: {
			inspector: {
				holdMode: true,
			},
		},
	},
}

export default config
