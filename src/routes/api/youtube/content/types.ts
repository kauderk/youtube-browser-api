export type Return<T extends (...args: any) => any> = {
	[key in keyof Partial<Awaited<ReturnType<T>>>]?: b
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

const y = <flattenedModel>{}
// @ts-expect-error
y.yolo
