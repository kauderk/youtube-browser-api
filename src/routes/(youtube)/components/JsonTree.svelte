<!-- https://www.jsdelivr.com/package/npm/svelte-tree-view -->
<script lang="ts">
	import TreeView from 'svelte-tree-view'
	export let wrap = false
	export let data: any
</script>

<div
	class="code-block overflow-hidden shadow bg-[#141517] text-sm text-white rounded-container-token p-3"
	class:wrap>
	<button
		class="btn btn-sm variant-soft-primary"
		on:click={() => (wrap = !wrap)}>Wrap</button>
	<TreeView
		{data}
		theme={{
			scheme: 'monokai',
			base00: 'transparent', //'#363755', // main blue bg
			base01: '#604D49',
			base02: '#6D5A55',
			base03: '#D1929B', // red text
			base04: '#B79F8D',
			base05: '#F9F8F2',
			base06: '#F7F4F1',
			base07: '#FAF8F5',
			base08: '#FA3E7E', // purple (null, undefined)
			base09: '#FD993C', // orange (number, boolean)
			base0A: '#F6BF81',
			base0B: '#B8E248', // main green text
			base0C: '#B4EFE4',
			base0D: '#85D9EF', // main blue text
			base0E: '#BE87FF',
			base0F: '#D6724C',
		}}
		showLogButton
		showCopyButton
		recursionOpts={{
			maxDepth: 16,
			shouldExpandNode: () => true,
		}} />
</div>

<style>
	.wrap :global(ul.svelte-tree-view) {
		width: initial;
	}
</style>
