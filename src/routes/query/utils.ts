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
			? K | `${K}.${PathImpl<T[K], Exclude<keyof T[K], keyof any[]>>}`
			: K | `${K}.${PathImpl<T[K], keyof T[K]>}`
		: K
	: never

export type Path<T> = PathImpl<T, keyof T> | keyof T

export const pick = 'youtube-browser-api-schema-id' as any // a utility that the user uses to make js/ts happy
