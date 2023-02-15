<script lang="ts">
	import Api from '../api'
	const config = <const>{
		query: {
			id: '3sWTzMsmdx8',
			sugestions: true,
			contentPage: true,
			title: true,
			isLive: true,
			channel: true,
			description: true,
			chapters: true,
			auto_chapters: true,
			heatmap: true,
			heatmapPath: true,
		},
	}
</script>

<section class="space-y-4">
	<p class="text-center">
		<strong>Data Endpoint</strong>
	</p>

	<div class="card p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
		<label class="label">
			<span>Playlist</span>
			<div
				class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">?list=</div>
				<input
					type="text"
					placeholder="PLh0j6fxciWbLVMwgAGx6UprZZQGvD-cYG" />
			</div>
		</label>
		<!-- --- -->
		<label class="label">
			<span>Channel</span>
			<div
				class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">/</div>
				<input type="text" placeholder="ColdFusion" />
			</div>
		</label>
		<!-- --- -->
		<label class="label">
			<span>Suggestion</span>
			<div
				class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<input type="text" placeholder="How to..." />
			</div>
		</label>
		<!-- --- -->
		<label class="label">
			<span>Search</span>
			<div
				class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">
					<i class="fa-solid fa-search" />
				</div>
				<input type="search" placeholder="YMH" />
				<button class="variant-filled-secondary">Submit</button>
			</div>
		</label>
	</div>
</section>
