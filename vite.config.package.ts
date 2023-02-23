import { defineConfig } from 'vitest/config'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			$src: resolve('./src'),
		},
	},
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'MyLib',
			formats: ['es'],
			fileName: 'index',
		},
		rollupOptions: {
			treeshake: 'smallest',
		},
	},
	plugins: [
		dts({
			clearPureImport: false,
		}),
	],
})
