<script lang="ts">
	import type { Params } from './+server'
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton'
	import type { NonNullableNested } from '../utility-types'
	import { toProps } from '../data/utils'
	import Item from '../components/Item.svelte'
	import { common } from '../components/common'

	import type { Snapshot } from './$types'
	let formData = {
		firstName: '',
		lastName: '',
		address: '',
		city: '',
		state: '',
		phone: '',
	}
	export const snapshot: Snapshot<typeof formData> = {
		capture: () => formData,
		restore: value => (formData = value),
	}

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

	const list = Object.entries(ClientParams).map(([key, payload]) => ({
		name: payload.name ?? key,
		id: key,
		selected: payload.selected,
		title: payload.title ?? key.toUpperCase(),
		icon: payload.shim ?? 'fa-book',
	}))

	$: selectedIds = Object.keys(ClientParams).filter(
		// @ts-expect-error
		key => ClientParams[key].selected
	)
</script>

<section class="space-y-4">
	<p class="text-center card p-4 card-header">
		<strong>Content Endpoint</strong>
	</p>

	<div class="card p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
		<Item {...toProps(common.videoId)} />
	</div>
	<div class="space-y-2">
		<div class="card variant-glass p-4 space-y-4">
			<label for="" class="space-y-4">
				<span>Multiple Selection</span>
				<ListBox
					active="variant-filled-primary"
					hover="hover:variant-soft-primary"
					multiple>
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
		<p class="text-center">
			Selected: <code>{selectedIds.length ? selectedIds : 'None'}</code>
		</p>
	</div>
</section>
