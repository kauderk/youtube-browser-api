import { json, type Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.searchParams.get('format') === 'json') {
		return await json({ data: 'hello world' })
	}
	console.log('resolve')

	return await resolve(event)
}
