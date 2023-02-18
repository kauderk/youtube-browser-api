<script lang="ts">
	import { common } from '../components/common'
	import Stupidity from './Stupidity.svelte'
</script>

<section class="card variant-glass p-4 space-y-4">
	<p class="text-center card p-4 card-header">
		<strong>Transcript Endpoint</strong>
	</p>

	{#each Object.values(common) as entry}
		<Stupidity {entry} />
	{/each}
</section>
