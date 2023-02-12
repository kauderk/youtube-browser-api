// https://stackoverflow.com/a/74167855/13914180
// https://github.com/David-Else/simple-youtube-chapter-extractor
// https://blog.ndpsoftware.com/2022/10/strong-typing-regexp

/**
 * Map "matchAll" to a strong typed result
 * @param string
 * @param src Regex Pattern
 * @param flags Regex Flags
 * @returns ( {match: string;} & groups )[]
 */
export function matchAll<TKeys extends string | number | symbol>(
	string: s,
	src: RegExp,
	flags = 'gm'
) {
	const regex = new RegExp(src, flags)

	const match = [...string.matchAll(regex)].map(m => ({
		match: m[0],
		// https://stackoverflow.com/questions/39256682/how-to-define-an-interface-for-objects-with-dynamic-keys
		...((m.groups ?? {}) as Record<TKeys, string>),
	}))
	return match
}
