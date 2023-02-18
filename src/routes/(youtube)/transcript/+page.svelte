<script lang="ts">
	import { common } from '../components/common'
	import Stupidity from './Stupidity.svelte'
</script>

<svelte:head>
	<meta
		name="description"
		content="Retrieve YouTube transcripts based on a video id or a playlist id and display the results with a table that displays the columns: Text, Duration, and Offset. Get a code snippet to carry your query with you." />
	<meta
		name="keywords"
		content="YouTube, transcripts, video id, playlist id, table, text, duration, offset, code snippet" />
</svelte:head>

{#each Object.values(common) as entry}
	<Stupidity {entry} />
{/each}
