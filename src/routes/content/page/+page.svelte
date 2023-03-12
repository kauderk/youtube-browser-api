<script lang="ts">
	import { page } from '$app/stores'
	import type { Params } from '../+server'
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton'
	import type { NonNullableNested } from '../../utility-types'
	import { toProps } from '../../data/utils'
	import Item from '../../components/Item.svelte'
	import { common } from '../../components/common'

	import Api from '$src/api'
	import CodeBlocks, { createState } from '../../components/CodeBlocks.svelte'
	import { fetchQuery } from '../../components/submit'

	type Model = NonNullableNested<Params>
	type Shape = {
		// @ts-expect-error
		[K in keyof Model]?: {
			name?: string
			selected: boolean
			title?: string
			shim?: string
		}
	}
	const ClientParams: Shape = {
		title: { selected: true, shim: 'fa-heading' },
		suggestions: { selected: false, shim: 'fa-lightbulb' },
		storyboard: { selected: false, shim: 'fa-film' },
		heatmapPath: { selected: false, shim: 'fa-map-marked-alt' },
		movingThumbnail: { selected: false, shim: 'fa-clapperboard' },
		isLive: { selected: false, shim: 'fa-tv' },
		channel: { selected: false, shim: 'fa-address-card' },
		description: { selected: false, shim: 'fa-file-alt' },
		initialData: { selected: false, shim: 'fa-database' },
		playerResponse: { selected: false, shim: 'fa-comment' },
		apiToken: { selected: false, shim: 'fa-key' },
		context: { selected: false, shim: 'fa-code-branch' },
		auto_chapters: { selected: false, shim: 'fa-list-ol' },
		macro_chapters: { selected: false, shim: 'fa-code' },
		chapters: { selected: false, shim: 'fa-book-open' },
		heatmap: { selected: false, shim: 'fa-fire' },
	}

	$: selectedIds = Object.keys(ClientParams).filter(
		// @ts-expect-error
		key => ClientParams[key].selected
	)

	const videoId = toProps(common.videoId)
	const state = createState()
	const param = videoId.param
	const base = $page.data.endpoint
	$: fetchData = {
		query: `const query = {
	id: "${$param}",
	params: [${selectedIds.map(el => `"${el}"`).join()}],
}
const fetchUrl = \`${base}?id=\${query.id}&params=\` + query.params.join()`,
		url: base + `?id=${$param}&params=` + selectedIds.join(),
	}
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta
		name="description"
		content="Get detailed analytics on any YouTube video with our tool. Retrieve suggestions, storyboard, heatmap path, and more with just the video ID." />
	<meta
		name="keywords"
		content="YouTube, video analytics, suggestions, storyboard, heatmap, json tree view" />
</svelte:head>

<div class="card p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
	<Item
		{...videoId}
		submit={() => {
			fetchQuery(state, fetchData.url)
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
						name: payload?.name ?? key,
						id: key,
						selected: payload?.selected,
						title: payload?.title ?? key.toUpperCase(),
						icon: payload?.shim ?? 'fa-book',
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
<CodeBlocks {state} {fetchData} />
