<script>
	import '@skeletonlabs/skeleton/themes/theme-rocket.css'
	import '@skeletonlabs/skeleton/styles/all.css'
	import '../app.postcss'

	import { AppRail, AppRailTile, LightSwitch } from '@skeletonlabs/skeleton'
	import { writable } from 'svelte/store'
	const storeValue = writable(1)
</script>

<div
	class="card !bg-surface-500/5 overflow-hidden h-screen grid grid-cols-[auto_1fr]">
	<AppRail selected={storeValue}>
		<!-- Lead -->
		<svelte:fragment slot="lead">
			<AppRailTile
				tag="a"
				href="/components/app-rail"
				title="Lead slot tile.">
				<i class="fa-solid fa-bars text-2xl" />
			</AppRailTile>
		</svelte:fragment>
		<!-- Default -->
		<AppRailTile label="Tile 1" value={1}>
			<i class="fa-solid fa-image text-2xl" />
		</AppRailTile>
		<AppRailTile label="Tile 2" value={2}>
			<i class="fa-solid fa-image text-2xl" />
		</AppRailTile>
		<AppRailTile label="Tile 3" value={3}>
			<i class="fa-solid fa-image text-2xl" />
		</AppRailTile>
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
	<div class="grid place-content-center place-items-center">
		<slot />
	</div>
</div>
