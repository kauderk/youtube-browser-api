import type { State } from '../components/CodeBlocks.svelte'

export const fetchQuery = (state: State, api: any, query: any) => {
	state.update($ => ({ ...$, isLoading: true }))
	return fetch(query)
		.then(res => res.json())
		.then((res: any) => {
			state.update($ => ({
				...$,
				error: null,
				data: res,
				isLoading: false,
			}))
		})
		.catch((error: any) =>
			state.update($ => ({ ...$, isLoading: false, error }))
		)
}
