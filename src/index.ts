import { createZeroApi } from 'sveltekit-zero-api/api'
import type { GeneratedAPI } from './sveltekit-zero-api'

const routes = createZeroApi({
	baseUrl: 'https://youtube-browser-api.netlify.app',
	onError: async err => console.error('[youtube-browser-api]', err),
	prependCallbacks(method) {
		method.Error(err => {
			console.warn('Error', err)
		})
	},
}) as GeneratedAPI

export default routes
