import type { LayoutLoad } from './$types'
export const load: LayoutLoad = params => {
	return {
		// remove last "/page"
		endpoint: params.url.toString().replace(/\/page(?=[^\/]*$)/, ''),
	}
}
