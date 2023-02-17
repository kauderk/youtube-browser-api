<script lang="ts">
	import { Subscribe } from 'svelte-subscribe'
	import Legend from '../components/Legend.svelte'
	import Item from '../components/Item.svelte'
	import type { Params } from './+server'
	import type { NonNullableNested } from '../utility-types'
	import { toProps, type Pre } from './utils'
	import { common } from '../components/common'

	import Api from '../../../../api'
	import CodeBlocks, { createState } from '../components/CodeBlocks.svelte'
	import { fetchQuery } from '../components/submit'
	import { error } from '@sveltejs/kit'
	import { derived, writable } from 'svelte/store'

	//#region Types
	type Model = NonNullableNested<Params>
	type Multiple<M = Model> = {
		[K in keyof M]?: {
			[key in keyof M[K]]: Pre<M[K][key]> & { submit?: () => void }
		}
	}
	export const ObjectKeys = <obj extends o>(o: obj) =>
		Object.keys(o) as (keyof typeof o)[]
	//#endregion

	//#region Lookups
	const Multiple = {
		channel: {
			channelId: {
				shim: '/',
				placeholder: 'ColdFusion',
				intent: 'submit',
			},
		},
		suggestion: {
			limit: { param: 1, intent: 'submit' },
		},
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
	//#endregion

	const fetchParamsList = ObjectKeys(Multiple)
		.reverse()
		.map(title => {
			const propList = Object.entries(Multiple[title]).map(toProps)
			return {
				title,
				propList,
				state: createState(),
				fetchUrl: derived(
					propList.map(_ => _.param),
					_ => {
						const query = {
							[title]: JSON.stringify(
								Object.values(propList)
									// @ts-expect-error
									.filter(x => x != '' && x != undefined)
									.reduce(
										(acc, curr) => ({
											...acc,
											[curr.key]: curr.param,
										}),
										{}
									)
							),
						}
						return `${
							//@ts-expect-error
							Api.youtube.data.path
						}?${new URLSearchParams(query).toString()}&format=json`
					}
				),
			}
		})
</script>

<section class="space-y-4">
	<p class="text-center card p-4 card-header">
		<strong>Data Endpoint</strong>
	</p>

	{#each fetchParamsList as { propList, state, title, fetchUrl }}
		<Subscribe {fetchUrl} let:fetchUrl>
			<Legend title={title.toUpperCase()} />
			<div class="card p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
				{#each propList as props}
					{@const submit = async () => {
						fetchQuery(state, Api.youtube.data, fetchUrl)
					}}
					<Item
						{...props}
						submit={props.intent == 'submit'
							? submit
							: undefined} />
				{/each}
			</div>
			<CodeBlocks {state} {fetchUrl} />
		</Subscribe>
	{/each}
</section>
