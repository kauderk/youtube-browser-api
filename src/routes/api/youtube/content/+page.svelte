<script lang="ts">
	import type { Params } from './+server'
	import {
		CodeBlock,
		ListBox,
		ListBoxItem,
		ProgressRadial,
	} from '@skeletonlabs/skeleton'
	import type { NonNullableNested } from '../utility-types'
	import { toProps } from '../data/utils'
	import Item from '../components/Item.svelte'
	import { common } from '../components/common'

	import Api from '../../../../api'
	import { writable } from 'svelte/store'
	import JsonTree from '../components/JsonTree.svelte'

	type Model = NonNullableNested<Params>
	type Shape = {
		// @ts-expect-error
		[K in keyof Model]?: {
			name?: s
			selected: b
			title?: s
			shim?: s
		}
	}
	const ClientParams: Shape = {
		title: { selected: true, shim: 'fa-heading' },
		suggestions: { selected: false, shim: 'fa-lightbulb' },
		storyboard: { selected: false, shim: 'fa-film' },
		heatmapPath: { selected: false, shim: 'fa-map-marked-alt' },
		isLive: { selected: false, shim: 'fa-tv' },
		channel: { selected: false, shim: 'fa-tv-retro' },
		description: { selected: false, shim: 'fa-file-alt' },
		initialData: { selected: false, shim: 'fa-database' },
		playerResponse: { selected: false, shim: 'fa-comment' },
		apiToken: { selected: false, shim: 'fa-key' },
		context: { selected: false, shim: 'fa-code-branch' },
		auto_chapters: { selected: false, shim: 'fa-list-ol' },
		chapters: { selected: false, shim: 'fa-book-open' },
		heatmap: { selected: false, shim: 'fa-fire' },
	}

	$: selectedIds = Object.keys(ClientParams).filter(
		// @ts-expect-error
		key => ClientParams[key].selected
	)

	const videoId = toProps(common.videoId)
	const state = writable({ isLoading: false, data: {} })
</script>

<section class="space-y-4">
	<p class="text-center card p-4 card-header">
		<strong>Content Endpoint</strong>
	</p>
	<section class="card p-4 grid grid-cols-1 gap-4">
		<CodeBlock
			language="ts"
			code={`fetch("api/youtube/content?id=${videoId.param}&${selectedIds
				?.reduce((acc, id) => {
					acc.append(id, '1')
					return acc
				}, new URLSearchParams())
				.toString()}")
			.then(res => res.json())
			.then(console.log)`} />
		{#if $state.isLoading}
			<div class="p-4 space-y-2 w-20">
				<ProgressRadial
					stroke={40}
					meter="stroke-primary-500"
					track="stroke-primary-500/30" />
				<p>Fetching...</p>
			</div>
		{:else}
			<JsonTree data={$state.data} />
		{/if}
	</section>
	<div class="card p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
		<Item
			{...videoId}
			bind:param={videoId.param}
			submit={() => {
				$state.isLoading = true
				const query = selectedIds.reduce(
					(acc, param) => ({ ...acc, [param]: true }),
					{ id: videoId.param }
				)
				Api.youtube.content.GET({ query }).Ok(res => {
					$state.data = res.body
					$state.isLoading = false
				})
			}} />
	</div>
	<div class="space-y-2">
		<div class="card variant-glass p-4 space-y-4">
			<label for="" class="space-y-4">
				<span class="flex items-center gap-4 flex-wrap"
					>Multiple Selection
					<div>
						<div class="btn-group variant-ghost-secondary">
							{#each Object.entries({ clear() {
									selectedIds = []
								}, all() {
									selectedIds = Object.keys(ClientParams)
								}, random() {
									const arr = Object.keys(ClientParams)
									const minSize = Math.ceil(arr.length * 0.3)
									const size = Math.floor(Math.random() * (arr.length - minSize + 1)) + minSize
									const shuffled = arr.sort(() => Math.random() - 0.5)
									const random = shuffled.slice(0, size)
									selectedIds = random
								} }) as [item, click]}
								<button
									class="btn btn-sm variant-soft-primary"
									on:click={click}>{item}</button>
							{/each}
						</div>
					</div>
				</span>
				<code style="overflow-wrap: anywhere; white-space: normal;"
					>{selectedIds.length ? selectedIds : 'None'}</code>
				<ListBox
					active="variant-filled-primary"
					hover="hover:variant-soft-primary"
					multiple>
					{@const list = Object.entries(ClientParams).map(
						([key, payload]) => ({
							name: payload.name ?? key,
							id: key,
							selected: payload.selected,
							title: payload.title ?? key.toUpperCase(),
							icon: payload.shim ?? 'fa-book',
						})
					)}
					{#each list as item}
						<ListBoxItem
							bind:group={selectedIds}
							name={item.name}
							value={item.id}>
							<svelte:fragment slot="lead">
								<i
									class="fa-solid {item.icon} w-6 text-center" /></svelte:fragment>
							{item.title}
						</ListBoxItem>
					{/each}
				</ListBox>
			</label>
		</div>
	</div>
</section>
