<script lang="ts">
	import { writable, type Writable } from 'svelte/store'
	import { RangeSlider, SlideToggle } from '@skeletonlabs/skeleton'
	import Shim from './Shim.svelte'
	export let title: s
	export let placeholder: s
	export let shim = ''
	export let submit: (() => void) | undefined = undefined
	export let param: Writable<s | b | n> = writable('')
</script>

<label class="label">
	<span>{title}</span>
	{#if typeof $param == 'string'}
		<div
			class="input-group input-group-divider grid grid-cols-[auto_1fr_auto]">
			<Shim {shim} {submit} value={$param}>
				<input type="text" bind:value={$param} {placeholder} />
			</Shim>
		</div>
	{:else if typeof $param == 'number'}
		<div
			class="input-group input-group-divider grid grid-cols-[1fr_auto] gap-4 p-2 justify-center items-center">
			<Shim {shim} {submit} value={$param}>
				<RangeSlider
					name="range-slider"
					bind:value={$param}
					max={30}
					step={1}
					ticked />
				<code class="w-[40px] text-center self-center">{$param}</code>
			</Shim>
		</div>
	{:else if typeof $param == 'boolean'}
		<div class="card input-group flex p-2 justify-center items-center">
			<Shim {shim} {submit} value={$param}>
				<SlideToggle
					name="slider-value"
					bind:checked={$param}
					size="sm">
					<code class="inline-block w-[40px] text-center self-center"
						>{$param ? 'On' : 'Off'}</code>
				</SlideToggle>
			</Shim>
		</div>
	{/if}
</label>
