/* eslint-disable */
/* 
    -- Generated sveltekit-zero-api --
          Do not edit this file
*/
import type { Z } from 'sveltekit-zero-api/z'
import * as __routes_content__server from "./routes/content/+server"
import * as __routes_data__endpoint___server from "./routes/data/[endpoint]/+server"
import * as __routes_query__server from "./routes/query/+server"
import * as __routes_transcript__server from "./routes/transcript/+server"


type Slug<Module> = Module extends { Slug: infer S } ? S : string | number

export type GeneratedAPI = {
  "content": {
    } & Z<typeof __routes_content__server> & {
  },
  "data": {
    endpoint$: (endpoint: Slug<typeof __routes_data__endpoint___server>) => {
      } & Z<typeof __routes_data__endpoint___server> & {
    }
  },
  "query": {
    } & Z<typeof __routes_query__server> & {
  },
  "transcript": {
    } & Z<typeof __routes_transcript__server> & {
  }
}