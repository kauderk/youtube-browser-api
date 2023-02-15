<script lang="ts">
	import { Paginator, Table } from '@skeletonlabs/skeleton'
	import type { PaginationSettings } from '@skeletonlabs/skeleton/components/Paginator/types'
	import { common } from '../components/common'
	import Item from '../components/Item.svelte'
	import { toProps } from '../data/utils'

	// Local
	const head =
		// prettier-ignore
		['Text', 'Duration', 'Offset']
	const sourceBody = [
		['Hydrogen', 1.0079, 'H'],
		['Helium', 4.0026, 'He'],
		['Lithium', 6.941, 'Li'],
		['Beryllium', 9.0122, 'Be'],
		['Boron', 10.811, 'B'],
		['Carbon', 12.0107, 'C'],
		['Nitrogen', 14.0067, 'N'],
		['Oxygen', 15.9994, 'O'],
		['Fluorine', 18.9984, 'F'],
		['Neon', 20.1797, 'Ne'],
	] as s[][]
	// Reactive
	let page = {
		offset: 0,
		limit: 5,
		size: sourceBody.length,
		amounts: [1, 2, 5, sourceBody.length],
	} as PaginationSettings
	// Event Handlers
	function onPageChange(e: CustomEvent): void {
		console.log('Paginator - event:page', e.detail)
	}
	function onAmountChange(e: CustomEvent): void {
		console.log('Paginator - event:amount', e.detail)
	}
</script>

<section class="card variant-glass p-4 space-y-4">
	<p class="text-center card p-4 card-header">
		<strong>Transcript Endpoint</strong>
	</p>

	{#each Object.values(common) as entry}
		<div class="card p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
			<Item {...toProps(entry)} />
		</div>
	{/each}
	<Table
		source={{
			head,
			body: sourceBody.slice(
				page.offset * page.limit,
				page.offset * page.limit + page.limit
			),
		}} />
	<Paginator
		bind:settings={page}
		on:page={onPageChange}
		on:amount={onAmountChange} />
</section>
