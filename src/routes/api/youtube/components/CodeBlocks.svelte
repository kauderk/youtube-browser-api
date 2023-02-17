<script context="module" lang="ts">
	export const createState = () =>
		writable({
			isLoading: false,
			data: {},
			error: null as o | null,
		})
	export type State = ReturnType<typeof createState>
</script>

<script lang="ts">
	import { CodeBlock, ProgressRadial } from '@skeletonlabs/skeleton'
	import JsonTree from '../components/JsonTree.svelte'
	import { Subscribe } from 'svelte-subscribe'
	import { writable } from 'svelte/store'
	export let state: State
	export let fetchUrl = ''
</script>

<section class="card p-4 grid grid-cols-1 gap-4">
	<CodeBlock
		language="ts"
		code={`fetch("${fetchUrl}")
			.then(res => res.json())
			.then(console.log)`} />
	<Subscribe {state} let:state>
		{#if state.isLoading}
			<div class="p-4 space-y-2 w-20">
				<ProgressRadial
					stroke={40}
					meter="stroke-primary-500"
					track="stroke-primary-500/30" />
				<p>Fetching...</p>
			</div>
		{:else if state.error}
			<div class="p-4 space-y-2 w-20">
				Error: {JSON.stringify(state.error)}
			</div>
		{:else}
			<JsonTree data={state.data} />
		{/if}
	</Subscribe>
</section>
