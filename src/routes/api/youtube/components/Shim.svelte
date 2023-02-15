<script lang="ts">
	export let shim: s
</script>

<!-- RIDICULOUS -->
{#if shim}
	<div class="input-group-shim">
		{#if shim.startsWith('fa')}
			<i class="fa-solid {shim}" />
		{:else}
			{shim}
		{/if}
	</div>
{/if}
