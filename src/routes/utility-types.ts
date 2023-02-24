export type NonNullableNested<T> = Required<{
	[P in keyof T]: Prettify<Required<T[P]>>
}>
export type OptionalKey<T, K extends keyof T> = Prettify<
	Omit<T, K> & Partial<Pick<T, K>>
>
export type Prettify<T> = { [K in keyof T]: T[K] } & {}

export type Param<
	Func extends (...args: any) => any,
	I extends number = 0
> = Parameters<Func>[I]
