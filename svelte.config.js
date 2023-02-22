import netlify from '@sveltejs/adapter-netlify'
import auto from '@sveltejs/adapter-auto'
const adapter = process.env.npm_lifecycle_script?.includes('package')
	? auto
	: netlify
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		sourceMap: true,
		postcss: true,
	}),
	kit: {
		adapter: auto(),
	},
	vitePlugin: {
		experimental: {
			inspector: {
				holdMode: true,
			},
		},
	},
}

export default config
