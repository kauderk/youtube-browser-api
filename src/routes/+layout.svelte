<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-rocket.css'
	import '@skeletonlabs/skeleton/styles/all.css'
	import '../app.postcss'

	//#region Skeleton/CodeBlack + highlight.js
	import hljs from 'highlight.js'
	import 'highlight.js/styles/github-dark.css'
	import { storeHighlightJs } from '@skeletonlabs/skeleton'
	storeHighlightJs.set(hljs)
	//#endregion

	import { AppRail, AppRailTile, LightSwitch } from '@skeletonlabs/skeleton'
	import { page } from '$app/stores'
	import { writable } from 'svelte/store'

	const endpoints = <const>{
		main: { shim: ' fa-bars', title: 'YouTube Browser API' },
		content: { shim: ' fa-video', title: 'YouTube Video Browser API' },
		data: { shim: 'fa-file-alt', title: 'YouTube Data Browser API' },
		transcript: {
			shim: 'fa-file-alt',
			title: 'YouTube Transcript Browser API',
		},
	}
	const { main, ...rest } = endpoints
	const storeValue = writable<keyof typeof endpoints>('main')
</script>

<svelte:head>
	<title>{endpoints[$storeValue].title}</title>
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
				<i class="fa-solid {main.shim} text-2xl" />
			</AppRailTile>
		</svelte:fragment>
		<!-- Default -->
		{#each Object.entries(rest) as [to, { shim }]}
			<AppRailTile
				tag="a"
				href="/{to}"
				label={to.toUpperCase()}
				value={to}>
				<i class="fa-solid {shim} text-2xl" />
			</AppRailTile>
		{/each}
		<!-- Trail -->
		<svelte:fragment slot="trail">
			<section class="card flex justify-center items-center">
				<LightSwitch />
			</section>
			<AppRailTile
				tag="a"
				href="https://github.com/"
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
					<strong>{endpoints[$storeValue].title}</strong>
				</p>
				<slot />
			</section>
		</div>
	</div>
</div>
