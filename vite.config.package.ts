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
		outDir: 'package',
		minify: false,
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			formats: ['es'],
			fileName: 'index',
		},
		rollupOptions: {
			treeshake: 'safest',
		},
	},
	plugins: [
		dts({
			clearPureImport: false,
			insertTypesEntry: true,
			include: ['src/**/*.d.ts', 'src/**/*.js', 'src/**/*.ts'],
			copyDtsFiles: true,
			exclude: [
				'./src/app.d.ts',
				'./src/global.d.ts',
				'./src/vite-env.d.ts',
			],
		}),
	],
})
