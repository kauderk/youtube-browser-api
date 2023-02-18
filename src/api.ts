import { createZeroApi } from 'sveltekit-zero-api/api'
import type { GeneratedAPI } from './sveltekit-zero-api'

const routes = createZeroApi({
	onError: async err => console.error('[API]', err),
	prependCallbacks(method) {
		method.Error(err => {
			console.warn('Error', err)
		})
	},
}) as GeneratedAPI

export const Api = routes.api
export default Api
