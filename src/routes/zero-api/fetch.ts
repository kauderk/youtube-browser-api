import { json as _json } from '@sveltejs/kit'

// prettier-ignore
export class ClassErrPromise<TSuccess, TError> extends Promise<TSuccess> {
    constructor(executor: (resolve: (value: TSuccess | PromiseLike<TSuccess>) => void, reject: (reason: TError) => void) => void) {
        super(executor);
        //Object.setPrototypeOf(this, new.target.prototype);  // restore prototype chain
    }
}
// prettier-ignore
export interface ErrPromise<TSuccess, TError> {
    then<TResult1 = TSuccess, TResult2 = never>(onfulfilled?: ((value: TSuccess) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: TError) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;

    catch<TResult = never>(onrejected?: ((reason: TError) => TResult | PromiseLike<TResult>) | undefined | null): Promise<TSuccess | TResult>;
}

function f<T, E>(data: T, error: E) {
	const x = new ClassErrPromise<T, E>((resolve, reject) => {
		resolve(<T>{})
		reject(<E>{})
	}) as ErrPromise<T, E>
	return x
}
// async function w() {
// 	return f('',0)

// }
// const a = w()
// const x = f('',0)
// x.then(res=>false).catch(res=>res)
// x.catch(err=>err)

// const y = f('',0).then(res=>false)
// y.then(res=>res);
// y.catch(err=>err)

export function json<data = unknown>(params: data) {
	return _json(params) as Omit<ReturnType<typeof _json>, 'json'> & {
		json: () => Promise<data>
	}
}

type FetchQuery = Record<string, any>

type tsRequestFailure = (event: { route: { id: any } }) => any
export type Patch = {
	/**
	 * Get access to the Response Object
	 * ```
	 * endpoint({...}).then(res=>{
	 * 	if(!res.ok){
	 * 		// ...
	 * 	}
	 * 	return res.json()
	 * })
	 * ```
	 */
	manual?: boolean
}

export async function patchFetch<
	R extends object,
	P extends Patch,
	Promise extends object
>(params: { endpoint: Endpoint<R>; slug?: string; query: FetchQuery & Patch }) {
	const stringify = stringifyQuery(params.query)
	const urlParams =
		params.endpoint +
		(params.slug || '') +
		new URLSearchParams(stringify).toString()
	const url = 'https://youtube-browser-api.netlify.app' + urlParams
	return fetch(url).then(res => res.json()) as unknown as P extends {
		manual: true
	}
		? Awaited<Promise>
		: // @ts-ignore
		  Awaited<ReturnType<Awaited<Promise>['json']>>
}
function stringifyQuery(query: FetchQuery) {
	const copy = structuredClone(query)
	for (const key of Object.keys(copy)) {
		if (typeof copy[key] === 'object') copy[key] = JSON.stringify(copy[key])
	}
	return copy as Record<string, string>
}

export type Endpoint<R> =
	// @ts-expect-error
	Parameters<R>[0]['route']['id'] extends `/${infer endpoint}`
		? endpoint extends `${infer endpoint2}/${string}`
			? endpoint2
			: endpoint
		: never
