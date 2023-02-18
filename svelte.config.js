import adapter from '@sveltejs/adapter-netlify'
import preprocess from 'svelte-preprocess'

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
