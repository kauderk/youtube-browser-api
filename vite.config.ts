import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'
import { resolve } from 'path'
// @ts-ignore
import { zeroAPI } from 'sveltekit-zero-api'

export default defineConfig({
	plugins: [sveltekit(), zeroAPI()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
	},
	build: {
		sourcemap: true,
	},
	resolve: {
		alias: {
			$src: resolve('./src'),
		},
	},
})
