import type { State } from '../components/CodeBlocks.svelte'

export const fetchQuery = (state: State, query: any, api?: any) => {
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
