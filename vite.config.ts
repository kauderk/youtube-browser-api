import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'
import { resolve } from 'path'
// @ts-ignore
import { zeroAPI } from 'sveltekit-zero-api'

export default defineConfig({
	plugins: [
		sveltekit(),
		zeroAPI({
			tempOutput: './src/sveltekit-zero-api.d.ts',
			// @ts-expect-error
			removeDirectoryName: true,
		}),
	],
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
