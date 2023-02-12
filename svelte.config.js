import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

import { watchAPI } from 'sveltekit-zero-api';
if (process.env.NODE_ENV !== 'production') {
	watchAPI();
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: [
		vitePreprocess({
			postcss: true
		})
	],
	vitePlugin: {
		experimental: {
			inspector: {
				holdMode: true
			}
		}
	}
};

export default config;
