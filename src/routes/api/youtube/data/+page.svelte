<script lang="ts">
	import Legend from '../components/Legend.svelte'
	import Item from '../components/Item.svelte'
	import type { Params } from './+server'
	import type { NonNullableNested } from '../utility-types'
	import { toProps, type Pre } from './utils'
	import { common } from '../components/common'
	import { CodeBlock, ProgressRadial } from '@skeletonlabs/skeleton'
	import JsonTree from '../components/JsonTree.svelte'
	import { writable, type Writable } from 'svelte/store'

	//#region Types
	type Model = NonNullableNested<Params>
	type Multiple<M = Filter<Model>['objects']> = {
		[K in keyof M]?: {
			[key in keyof M[K]]: Pre<M[K][key]> & { submit?: () => void }
		}
	}
	type Single<M = Filter<Model>['symbols']> = {
		[K in keyof M]?: Pre<M[K]> & { submit?: () => void }
	}
	type Filter<T> = {
		symbols: Pick<
			T,
			{ [K in keyof T]: T[K] extends string ? K : never }[keyof T]
		>
		objects: Pick<
			T,
			{ [K in keyof T]: T[K] extends object ? K : never }[keyof T]
		>
	}
	export const ObjectKeys = <obj extends o>(o: obj) =>
		Object.keys(o) as (keyof typeof o)[]
	//#endregion

	const Single = {
		channel: {
			intent: 'submit',
			shim: '/',
			placeholder: 'ColdFusion',
		},
		suggestion: {
			param: 0,
		},
	} satisfies Single<Model>
	let Multiple = {
		playlist: {
			playlistId: { ...common.playlistId[1], intent: 'submit' },
			limit: {
				param: 1,
			},
		},
		search: {
			keyword: {
				placeholder: 'How to...',
				intent: 'submit',
				shim: 'fa-search',
			},
			withPlaylist: { param: false },
			limit: { param: 1 },
			option: {
				placeholder: `'' | 'video' | 'channel' | 'playlist' | 'movie'`,
				shim: 'fa-photo-film-music',
			},
		},
	} satisfies Multiple<Model>

	const lists = ObjectKeys(Multiple).map(title => ({
		title,
		list: Object.entries(Multiple[title]).map(toProps),
		state: writable({
			isLoading: false,
			data: {},
			error: null as o | null,
		}),
	}))
	import { Subscribe } from 'svelte-subscribe'
	import Api from '../../../../api'
</script>

<section class="space-y-4">
	<p class="text-center card p-4 card-header">
		<strong>Data Endpoint</strong>
	</p>

	{#each lists as { list, state, title }}
		<Legend title={title.toUpperCase()} />
		<div class="card p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
			{#each list as props}
				{@const submit = () =>
					Api.youtube.data
						.GET({
							query: {
								[title]: Object.values(list)
									.filter(x => x != '' && x != undefined)
									.reduce(
										(acc, curr) => ({
											...acc,
											[curr.key]: curr.param,
										}),
										{}
									),
							},
						})
						.Ok(res => {
							state.update($ => ({
								...$,
								error: null,
								data: res.body,
							}))
						})
						.catch(error => state.update($ => ({ ...$, error })))}
				<Item
					{...props}
					bind:param={props.param}
					submit={props.intent == 'submit' ? submit : undefined} />
			{/each}
		</div>
		<CodeBlock
			language="ts"
			code={`fetch("api/youtube/content?${Object.values(list)
				.map(v => (v.param == undefined ? '' : `${v.key}=${v.param}`))
				.filter(v => !!v)
				.join('&')}")
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
	{/each}
	{#each Object.entries(Single) as entry}
		<Legend title={entry[0]} />
		<div class="card p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
			<Item {...toProps(entry)} />
		</div>
	{/each}
</section>
