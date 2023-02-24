import type { OptionalKey } from '../utility-types'
import type Item from '../components/Item.svelte'
import { get, writable } from 'svelte/store'

export type Pre<T> = OptionalKey<
	Omit<Item['$$prop_def'], 'param'>,
	'title' | 'placeholder'
> & {
	intent?: 'necessary' | 'optional' | 'submit'
} & { param?: T }
export function toProps<T = string | number | boolean>([key, value]: [
	key: string,
	value: Pre<T>
]) {
	const pre = writable(value.param ?? '')
	return {
		title: camelCaseToPhrase(key),
		...value,
		param: { ...pre, get: () => get(pre) },
		key,
		placeholder:
			value.placeholder ?? (value.param as string)?.toString() ?? '',
	}
}
function camelCaseToPhrase(str: string): string {
	return str
		.replace(/([a-z])([A-Z])/g, '$1 $2') // insert space before capital letters
		.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2') // insert space before sequences of capital letters followed by lowercase letters
		.toLowerCase() // convert to lowercase
		.toUpperCase()
}
