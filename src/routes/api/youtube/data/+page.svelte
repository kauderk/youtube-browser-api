<script lang="ts">
	import Legend from '../components/Legend.svelte'
	import Item from '../components/Item.svelte'
	import type { Params } from './+server'
	import type { NonNullableNested } from '../utility-types'
	import { toProps, type Pre } from './utils'
	import { common } from '../components/common'

	//#region Types
	type Model = NonNullableNested<Params>
	type Multiple<M = Filter<Model>['objects']> = {
		[K in keyof M]?: {
			[key in keyof M[K]]: Pre<M[K][key]>
		}
	}
	type Single<M = Filter<Model>['symbols']> = {
		[K in keyof M]?: Pre<M[K]>
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
			intent: 'necessary',
			shim: '/',
			placeholder: 'ColdFusion',
		},
		suggestion: {
			param: 0,
		},
	} satisfies Single<Model>
	let Multiple = {
		playlist: {
			playlistId: common.playlistId[1],
			limit: {
				param: 10,
			},
		},
		search: {
			keyword: {
				placeholder: 'How to...',
				intent: 'necessary',
				shim: 'fa-search',
			},
			withPlaylist: { param: false },
			limit: { param: 10 },
			option: {
				placeholder: `'' | 'video' | 'channel' | 'playlist' | 'movie'`,
				shim: 'fa-photo-film-music',
			},
		},
	} satisfies Multiple<Model>

	$: log = Object.values(Multiple).reduce(
		(acc, sub) =>
			(acc += Object.values(sub).reduce(
				(a, b) => (a += b.param || ''),
				''
			)),
		''
	)
	$: console.log({ Multiple, Single })
</script>

<section class="space-y-4">
	<p class="text-center card p-4 card-header">
		<strong>Data Endpoint</strong>
	</p>
	{log}
	{#each ObjectKeys(Multiple) as title}
		<Legend {title} />
		<div class="card p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
			{#each Object.entries(Multiple[title]).map(toProps) as props}
				<Item {...props} />
			{/each}
		</div>
	{/each}
	{#each Object.entries(Single) as entry}
		<Legend title={entry[0]} />
		<div class="card p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
			<Item {...toProps(entry)} />
		</div>
	{/each}
</section>
