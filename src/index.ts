export {
	_GET as query,
	type Query as QueryParams,
} from './routes/query/+server'

export {
	_GET as transcript,
	type Query as TranscriptParams,
} from './routes/transcript/+server'

export {
	_GET as content,
	type Params as ContentParams,
} from './routes/content/+server'

export {
	_GET as data,
	type Query as DataParams,
	type Slug as DataSlug,
} from './routes/data/[endpoint]/+server'

import { _GET as query } from './routes/query/+server'

import { _GET as transcript } from './routes/transcript/+server'

import { _GET as content } from './routes/content/+server'

import { _GET as data } from './routes/data/[endpoint]/+server'

import { config } from './routes/zero-api/fetch'
config.baseUrl = 'https://youtube-browser-api.netlify.app'

export default {
	query,
	transcript,
	content,
	data,
}
