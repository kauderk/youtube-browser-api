export type Return<T extends (...args: any) => any> = {
	[key in keyof Partial<Awaited<ReturnType<T>>>]?: boolean
}

// -----------------
type ValuesOf<T> = T[keyof T]
type ObjectValuesOf<T> = Exclude<Extract<ValuesOf<T>, object>, Array<any>>
type NonObjectKeysOf<T> = {
	[K in keyof T]: T[K] extends Array<any>
		? K
		: T[K] extends object
		? never
		: K
}[keyof T]
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
	k: infer I
) => void
	? I
	: never
export type Flatten<T> = Pick<T, NonObjectKeysOf<T>> &
	UnionToIntersection<ObjectValuesOf<T>>

export type DeepFlatten<T> = T extends any
	? Pick<T, NonObjectKeysOf<T>> &
			UnionToIntersection<DeepFlatten<ObjectValuesOf<T>>>
	: never
// https://flut1.medium.com/deep-flatten-typescript-types-with-finite-recursion-cb79233d93ca
export type FirstFlatten<T> = Omit<DeepFlatten<T>, keyof T>
type flattenedModel = FirstFlatten<{
	foo: 1
	bar: 'abc'
	qux: ['abc']
	yolo?: {
		quuz: 2
		corge: true
	}
	flob: 3
	doop: 'abcd'
}>

// @ts-expect-error
<flattenedModel>{}.yolo

// https://www.totaltypescript.com/tips/derive-a-union-type-from-an-object
export type Union<T> = {
	[K in keyof T]: {
		// instead of any, infer the type
		[K2 in K]: T[K2]
	}
}[keyof T]

// @ts-expect-error
<Union<Model>>{}.yolo
