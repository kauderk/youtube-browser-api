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
	import { writable } from 'svelte/store'
	const endpoints = <const>{
		content: { shim: ' fa-video' },
		data: { shim: 'fa-file-alt' },
		transcript: { shim: 'fa-file-alt' },
	}
	const storeValue = writable<(keyof typeof endpoints | '')[n]>()
</script>

<div
	class="card !bg-surface-500/5 overflow-hidden h-screen grid grid-cols-[auto_1fr]">
	<AppRail selected={storeValue}>
		<!-- Lead -->
		<svelte:fragment slot="lead">
			<AppRailTile tag="a" href="/" value={''} title="Lead slot tile.">
				<i class="fa-solid fa-bars text-2xl" />
			</AppRailTile>
		</svelte:fragment>
		<!-- Default -->
		{#each Object.entries(endpoints) as [to, { shim }]}
			<AppRailTile
				tag="a"
				href="/api/youtube/{to}"
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
			<slot />
		</div>
	</div>
</div>
