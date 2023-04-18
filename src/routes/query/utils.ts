import type { Prettify } from '../utility-types'

// https://stackoverflow.com/a/74804708/13914180
type Partial = undefined | true
type OptionalArrayOr<T, Otherwise> = T extends ArrayLike<any>
	? { [index: number]: DeepPartial<T[number]> | Partial } | Partial
	: Otherwise
type OptionalUndefinedOr<T, Otherwise> = T extends Partial ? Partial : Otherwise
type OptionalNullOr<T, Otherwise> = T extends null ? null | Partial : Otherwise
type OptionalStringOr<T, Otherwise> = T extends string ? T | Partial : Otherwise
type OptionalNumberOr<T, Otherwise> = T extends number ? T | Partial : Otherwise
type OptionalBooleanOr<T, Otherwise> = T extends boolean
	? boolean | Partial
	: Otherwise

export type DeepPartial<T> = OptionalStringOr<
	T,
	OptionalNumberOr<
		T,
		OptionalBooleanOr<
			T,
			OptionalNullOr<
				T,
				OptionalUndefinedOr<
					T,
					OptionalArrayOr<
						T,
						T extends object
							? {
									[Key in keyof T]?:
										| DeepPartial<T[Key]>
										| Partial
							  }
							: Partial
					>
				>
			>
		>
	>
>

// https://twitter.com/diegohaz/status/1309489079378219009/photo/1
type PathImpl<T, K extends keyof T> = K extends string | number
	? T[K] extends Record<string | number, any>
		? T[K] extends ArrayLike<any>
			? K | `${K}.${PathImpl<T[K], number>}`
			: K | `${K}.${PathImpl<T[K], keyof T[K]>}`
		: K
	: never

export type NonNullableNested<T> = {
	[P in keyof T]-?: Prettify<
		Exclude<NonNullableNested<T[P]>, null | undefined>
	>
}

export type PathValue<
	T,
	P extends Path<T>
> = P extends `${infer Key}.${infer Rest}`
	? Key extends keyof T
		? Rest extends Path<T[Key]>
			? PathValue<T[Key], Rest>
			: T[Key] extends ArrayLike<any>
			? PathValue<T[Key], number>
			: never
		: // @ts-expect-error
		  PathValue<T[Key], Rest>
	: P extends keyof T
	? T[P]
	: never

export type Path<T> = PathImpl<T, keyof T> | keyof T

export const pick = 'youtube-browser-api-schema-id' as any // a utility that the user uses to make js/ts happy
