<script lang="ts">
	export let shim: s
	export let submit: (() => void) | undefined = undefined
	export let value: s | b | n
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
<slot />
{#if submit}
	<button class="variant-filled-secondary" disabled={!value} on:click={submit}
		>Fetch</button>
{/if}
