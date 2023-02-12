// https://realfiction.net/2019/02/03/typescript-type-shenanigans-2-specify-at-least-one-property
export type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<
	T,
	Exclude<keyof T, Keys>
> &
	{
		[K in Keys]-?: Required<Pick<T, K>> &
			Partial<Record<Exclude<Keys, K>, undefined>>
	}[Keys]

// https://stackoverflow.com/a/49725198/13914180
export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<
	T,
	Exclude<keyof T, Keys>
> &
	{
		[K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
	}[Keys]

export type DeepPartial<T> = T extends object
	? {
			[P in keyof T]?: DeepPartial<T[P]>
	  }
	: T

// https://github.com/Microsoft/TypeScript/issues/25760
type AllKeyOf<T> = T extends never ? never : keyof T

type Omit<T, K> = { [P in Exclude<keyof T, K>]: T[P] }

type Optional<T, K> = { [P in Extract<keyof T, K>]?: T[P] }

export type WithOptional<T, K extends AllKeyOf<T>> = T extends never
	? never
	: Omit<T, K> & Optional<T, K>

// https://stackoverflow.com/a/50924506
type TypeWithGeneric<T> = T[]
export type ExtractGeneric<Type> = Type extends TypeWithGeneric<infer X>
	? X
	: never

type extracted = ExtractGeneric<TypeWithGeneric<number>>

// https://stackoverflow.com/questions/73626102/make-type-deeply-writable
export type DeepWritable<T> =
	// check for things that are objects but don't need changing
	T extends ((...args: any[]) => any) | Date | RegExp
		? T
		: T extends ReadonlyMap<infer K, infer V> // maps
		? Map<DeepWritable<K>, DeepWritable<V>> // make key and values writable
		: T extends ReadonlySet<infer U> // sets
		? Set<DeepWritable<U>> // make elements writable
		: T extends ReadonlyArray<unknown> // is an array or tuple?
		? `${bigint}` extends `${keyof T & any}` // is tuple
			? { -readonly [K in keyof T]: DeepWritable<T[K]> }
			: DeepWritable<T[number]>[] // is regular array
		: T extends object // is regular object
		? { -readonly [K in keyof T]: DeepWritable<T[K]> }
		: // is primitive or literal value
		//: T extends string
		//? string
		T extends number
		? number
		: T extends boolean
		? boolean
		: T

// https://stackoverflow.com/a/56874389/13914180
export type KeysMatching<T extends o, V> = {
	[K in keyof T]-?: T[K] extends V ? K : never
}[keyof T]
