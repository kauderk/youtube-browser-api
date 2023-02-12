<script lang="ts">
	import { lib } from './lib'

	export let dataset: {
		name: string
		colors: {
			path: string
			circles: string
		}
		values: number[][]
	}
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

	type point = [n, n]

	function line(pointA: point, pointB: point) {
		const lengthX = pointB[0] - pointA[0]
		const lengthY = pointB[1] - pointA[1]
		return {
			length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
			angle: Math.atan2(lengthY, lengthX),
		}
	}
	function controlPoint(
		current: point,
		previous: point,
		next: point,
		reverse: point
	) {
		const p = previous || current
		const n = next || current
		const o = line(p, n)
		// work in progress…
		const flat = lib.map(
			Math.cos(o.angle) * options.line.flattening,
			0,
			1,
			1,
			0
		)
		const angle = o.angle * flat + (reverse ? Math.PI : 0)
		const length = o.length * options.line.smoothing
		const x = current[0] + Math.cos(angle) * length
		const y = current[1] + Math.sin(angle) * length
		return [x, y]
	}
	function bezierCommand(point: point, i: n, a: point[]) {
		// @ts-expect-error
		const cps = controlPoint(a[i - 1], a[i - 2], point)
		// @ts-expect-error
		const cpe = controlPoint(point, a[i - 1], a[i + 1], true)
		const close = i === a.length - 1 ? ' z' : ''
		return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}${close}`
	}

	$: pointsPositions = dataset.values.map(e => {
		const x = lib.map(e[0], options.xMin, options.xMax, 0, svg.w)
		const y = lib.map(e[1], options.yMin, options.yMax, svg.h, 0)
		return [x, y]
	})
</script>

<g>
	<path
		style:fill={dataset.colors.path}
		style:stroke={dataset.colors.path}
		style:strokeWidth={1.5}
		style:fillOpacity={0.15}
		style:strokeOpacity={0.8}
		d={pointsPositions.reduce((acc, e, i, a) => {
			if (i === 0) {
				return `
				M ${a[a.length - 1][0]},${svg.h} 
				L ${e[0]},${svg.h} 
				L ${e[0]},${e[1]}`
			} else {
				// @ts-expect-error
				return `${acc} ${bezierCommand(e, i, a)}`
			}
		}, '')} />
	{#each pointsPositions as [cx, cy]}
		<circle {cx} {cy} r="2.5" style:fill={dataset.colors.circles} />
	{/each}
</g>
