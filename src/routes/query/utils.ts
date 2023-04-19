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
type N = null | undefined
type Clear<T> = NonNullable<Exclude<T, N>>
type JSON = Record<string | number, any>

// prettier-ignore

// https://twitter.com/diegohaz/status/1309489079378219009/photo/1
type PathImpl<T, K extends keyof T> = K extends string | number
    ? T[K] extends { end: true }
        ?  K// early return if T[K] extends { end: true }
        : T[K] extends JSON
            // clean
            ? T[K] extends ArrayLike<any>
                ? `${K}.${PathImpl<T[K], number>}`
                : K | `${K}.${PathImpl<T[K], keyof T[K]>}`
            // null coalesce
            : T[K] extends JSON | N
                ? T[K] extends ArrayLike<any> | N
                    ? `${K}?.${PathImpl<Clear<T[K]>, number>}`
                    : K | `${K}?.${PathImpl<Clear<T[K]>, keyof Clear<T[K]>>}` // JSON?.
                : K // end PathImpl
    : never;

export type NonNullableNested<T> = {
	[P in keyof T]-?: Prettify<
		Exclude<NonNullableNested<T[P]>, null | undefined>
	>
}

export type PathValue<
	T,
	P extends Path<T>
> = P extends `${infer NlC}.${infer Rest}`
	? NlC extends `${infer Key}?`
		? // FIXME: might be too recursive
		  // @ts-expect-error
		  PathValue<Clear<T[Key]>, Rest>
		: // @ts-expect-error
		  PathValue<T[NlC], Rest>
	: P extends `${infer Key}.${infer Rest}`
	? Key extends keyof T
		? Rest extends Path<T[Key]>
			? PathValue<T[Key], Rest>
			: T[Key] extends ArrayLike<any>
			? PathValue<T[Key], Key & number>
			: never
		: // @ts-expect-error
		  PathValue<T[Key], Rest>
	: P extends keyof T
	? T[P]
	: never

export type Path<T> = PathImpl<T, keyof T> | keyof T

export const pick = 'youtube-browser-api-schema-id' as any // a utility that the user uses to make js/ts happy

export class Deferred<T, E = unknown> {
	promise: Promise<T>
	resolve: (value: T | PromiseLike<T>) => void = () => null
	reject: (reason?: E) => void = () => null

	constructor() {
		this.promise = new Promise((res, rej) => {
			this.resolve = res
			this.reject = rej
		})
	}
}
