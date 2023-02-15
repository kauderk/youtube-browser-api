import type { OptionalKey } from '../utility-types'
import type Item from '../components/Item.svelte'

export type Pre<T> = OptionalKey<
	Item['$$prop_def'],
	'title' | 'placeholder'
> & {
	intent?: 'necessary' | 'optional'
} & { param?: T }
export function toProps<T = s>([key, value]: [
	key: string,
	value: Pre<T>
]): any {
	return {
		title: camelCaseToPhrase(key),
		...value,
		placeholder: value.placeholder ?? value.param!,
	}
}
function camelCaseToPhrase(str: string): string {
	return str
		.replace(/([a-z])([A-Z])/g, '$1 $2') // insert space before capital letters
		.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2') // insert space before sequences of capital letters followed by lowercase letters
		.toLowerCase() // convert to lowercase
		.toUpperCase()
}
