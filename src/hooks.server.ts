import type { Handle } from '@sveltejs/kit'

const allowAnyOrigin = { 'Access-Control-Allow-Origin': '*' }
export const handle: Handle = async ({ event, resolve }) => {
	if (event.request.method === 'OPTIONS') {
		// Respond to preflight requests
		// I'm assuming that sveltekit internal fetch()/Requests
		// comply with these headers
		// but to allow sveltekit-zero-api's handler function to do it's job it must be explicit
		return new Response(null, {
			headers: {
				...allowAnyOrigin,
				'Access-Control-Allow-Methods': 'GET',
				'Access-Control-Allow-Headers':
					'Content-Type, cache-control, x-requested-with',
			},
		})
	}

	if (event.request.method === 'GET') {
		event.setHeaders(allowAnyOrigin)
	}

	return await resolve(event)
}
