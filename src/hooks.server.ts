import { json, type Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
	// intercept +server.ts to resolve json data
	if (event.url.searchParams.get('format') === 'json') {
		const url = new URL(event.request.url)
		url.searchParams.delete('format')
		const response = await event.fetch(url, {
			headers: {
				Accept: 'application/json',
			},
		})
		const body = await response.json()
		return json(body)
	}

	return await resolve(event)
}
