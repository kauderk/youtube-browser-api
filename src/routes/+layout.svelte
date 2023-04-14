<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-rocket.css'
	import '@skeletonlabs/skeleton/styles/all.css'
	import '../app.postcss'

	//#region Skeleton/CodeBlack + highlight.js
	import 'highlight.js/styles/github-dark.css'
	import { storeHighlightJs } from '@skeletonlabs/skeleton'
	import { onMount } from 'svelte'
	//#endregion

	onMount(() => {
		// otherwise it will nuke down the entire site
		import('highlight.js').then(hljs => storeHighlightJs.set(hljs.default))
	})

	import { AppRail, AppRailTile, LightSwitch } from '@skeletonlabs/skeleton'
	import { page } from '$app/stores'
	import { writable } from 'svelte/store'
	import { layout } from './layout'

	const tsAny = (t: any) => t
	const { main, ...rest } = layout
	// set to the current url
	const initialKey: any =
		Object.keys(layout).find(key => $page.url.toString().includes(key)) ||
		'main'
	const storeValue = writable<keyof typeof layout>(initialKey)
</script>

<svelte:head>
	<title>{layout[$storeValue].link.title}</title>
	<title>YouTube Browser API</title>
	<meta name="author" content="KauDerK" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="canonical" href={$page.url.toString()} />
</svelte:head>

<div
	class="card !bg-surface-500/5 overflow-hidden h-screen grid grid-cols-[auto_1fr]">
	<AppRail selected={storeValue}>
		<!-- Lead -->
		<svelte:fragment slot="lead">
			<AppRailTile
				tag="a"
				href="/"
				value={'main'}
				title="Lead slot tile.">
				<i class="fa-solid {layout.main.link.shim} text-2xl" />
			</AppRailTile>
		</svelte:fragment>
		<!-- Default -->
		{#each Object.entries(rest) as [to, { link }]}
			<AppRailTile
				tag="a"
				href="/{to}/page"
				label={to.toUpperCase()}
				value={to}>
				<div class="relative inline-block">
					{#if tsAny(link).badge}
						<span
							class="badge-icon variant-glass absolute -top-0 -right-4 z-10"
							>{tsAny(link).badge}</span>
					{/if}
					<i class="fa-solid {link.shim} text-2xl" />
				</div>
			</AppRailTile>
		{/each}
		<!-- Trail -->
		<svelte:fragment slot="trail">
			<section class="card flex justify-center items-center">
				<LightSwitch />
			</section>
			<AppRailTile
				tag="a"
				href="https://github.com/kauderk/youtube-browser-api"
				target="_blank"
				title="Trail slot tile.">
				<i class="fa-brands fa-github text-2xl" />
			</AppRailTile>
		</svelte:fragment>
	</AppRail>
	<div
		class="!bg-surface-500/5 card grid max-w-[800px] overflow-hidden justify-self-center">
		<div class="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
			<section class="card variant-glass p-4 space-y-4">
				<p class="text-center card p-4 card-header">
					<strong>{layout[$storeValue].link.title}</strong>
				</p>
				<slot />
			</section>
		</div>
	</div>
</div>
