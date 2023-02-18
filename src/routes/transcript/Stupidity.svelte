<!-- describe the bug on line 22, the logic works with "size: 10", explain the bug -->
<script lang="ts">
	import { page } from '$app/stores'
	import { Paginator, Table } from '@skeletonlabs/skeleton'
	import { derived, writable } from 'svelte/store'
	import type { TranscriptResponse } from 'youtube-transcript'
	import CodeBlocks, { createState } from '../components/CodeBlocks.svelte'
	import Item from '../components/Item.svelte'
	import Legend from '../components/Legend.svelte'
	import { fetchQuery } from '../components/submit'
	import { toProps } from '../data/utils'

	export let entry: any

	const props = toProps<s>(entry)
	const endpoint = props.key

	const state = createState({ [endpoint]: [] as TranscriptResponse[] })
	const paginator = writable({
		offset: 0,
		limit: 5,
		size: 10,
		amounts: [1, 2, 5, 10],
	})
	// preserve it's previous state
	$: paginator.update($ => {
		const size = $state.data[endpoint]?.length || 1
		return {
			...$,
			size,
			amounts: [...Array(Math.ceil(size / 5))].map((_, i) => (i + 1) * 5),
		}
	})

	const fetchData = derived(props.param, value => {
		const query = {
			[props.key]: value,
		}
		const base = $page.url + `?`
		return {
			query: `const query = ${JSON.stringify(query, null, 2)};
const fetchUrl = "${base}" + new URLSearchParams(query).toString()`,
			url: base + new URLSearchParams(query).toString() + '&format=json',
		}
	})
</script>

<Legend title={endpoint.toUpperCase()} />

<div class="card p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
	<Item {...props} submit={() => fetchQuery(state, '', $fetchData.url)} />
</div>

<CodeBlocks {state} fetchData={$fetchData}>
	<Table
		source={{
			head: ['text', 'duration', 'offset'],
			body:
				$state.data[endpoint]
					?.slice(
						$paginator.offset * $paginator.limit,
						$paginator.offset * $paginator.limit + $paginator.limit
					)
					.map(o => Object.values(o)) ?? [],
		}} />
	<!-- WELCOME TO THE STUPIDITY -->
	<!-- Stores must be declared at the top level of the component (this may change in a future version of Svelte)svelte(contextual-store) -->
	<!-- Cannot bind to a variable declared with the let: directive svelte(invalid-binding) -->
	<Paginator bind:settings={$paginator} />
</CodeBlocks>
