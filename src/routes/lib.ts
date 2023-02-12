export const lib = {
	map(value: n, inMin: n, inMax: n, outMin: n, outMax: n) {
		return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
	},
	range(start: n, end: n, tick: n) {
		const s = Math.round(start / tick) * tick
		return Array.from(
			{
				length: Math.floor((end - start) / tick),
			},
			(v, k) => {
				return k * tick + s
			}
		)
	},
}
