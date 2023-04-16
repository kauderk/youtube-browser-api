import type { Prettify } from '../utility-types'

// https://stackoverflow.com/a/74804708/13914180
type OptionalArrayOr<T, Otherwise> = T extends T[] ? T[] | undefined : Otherwise
type OptionalUndefinedOr<T, Otherwise> = T extends undefined
	? undefined
	: Otherwise
type OptionalNullOr<T, Otherwise> = T extends null
	? null | undefined
	: Otherwise
type OptionalStringOr<T, Otherwise> = T extends string
	? T | undefined
	: Otherwise
type OptionalNumberOr<T, Otherwise> = T extends number
	? T | undefined
	: Otherwise
type OptionalBooleanOr<T, Otherwise> = T extends boolean
	? boolean | undefined
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
							? { [Key in keyof T]?: DeepPartial<T[Key]> }
							: undefined
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
	[P in keyof T]-?: Prettify<NonNullable<NonNullableNested<T[P]>>>
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

// import type{Page} from '$src/routes/data/parse';
const Page = {
	thumbnail: {
		//thumbnails: { '0': { url: '' } },
		thumbnails: [{ value: { a: '' } }],
	},
}
// type Page = typeof Page

// type P = Path<Page>
// //   ^?
// type A = PathValue<Page, 'thumbnail.thumbnails'>
// //   ^?
// type B = PathValue<Page, `thumbnail.thumbnails.0`>
// //   ^?
// type C = PathValue<Page, `thumbnail.thumbnails.0.value`>
// //   ^?
// type D = PathValue<Page, `thumbnail.thumbnails.0.value.a`>
// //   ^?
