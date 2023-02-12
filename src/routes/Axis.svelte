<script lang="ts">
	import { lib } from './lib'
	export let options: {
		xMin: number
		xMax: number
		yMin: number
		yMax: number
		line: {
			smoothing: number
			flattening: number
		}
	}
	export let svg: {
		w: number
		h: number
	}

	$: y = lib.map(0, options.yMin, options.yMax, svg.h, 0)

	$: x = lib.map(0, options.xMin, options.xMax, 0, svg.w)

	$: tickXs = lib
		.range(options.xMin, options.xMax, 10)
		.map(tick => lib.map(tick, options.xMin, options.xMax, 0, svg.w))

	$: tickYs = lib
		.range(options.yMin, options.yMax, 10)
		.map(tick => lib.map(tick, options.yMin, options.yMax, svg.h, 0))
</script>

<g>
	<line x1="0" y1={y} x2={svg.w} y2={y} stroke-width="1" stroke="silver" />
	<line x1={x} y1="0" x2={x} y2={svg.h} stroke-width="1" stroke="silver" />
	{#each tickXs as X}
		<line
			x1={X}
			y1={y}
			x2={X}
			y2={y + 5}
			stroke-width="1"
			stroke="silver" />
	{/each}
	{#each tickYs as Y}
		<line
			x1={x - 5}
			y1={Y}
			x2={x}
			y2={Y}
			stroke-width="1"
			stroke="silver" />
	{/each}
</g>
