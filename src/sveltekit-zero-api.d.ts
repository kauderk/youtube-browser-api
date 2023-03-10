/* eslint-disable */
/* 
    -- Generated sveltekit-zero-api --
          Do not edit this file
*/
import type { Z } from 'sveltekit-zero-api/types/zeroapi'
import * as __routes_content__server from "./routes/content/+server";
import * as __routes_data__endpoint___server from "./routes/data/[endpoint]/+server";
import * as __routes_transcript__server from "./routes/transcript/+server";


type SN = string | number
type Slug<S = SN> = S extends SN ? S : SN

export type GeneratedAPI = {
  "content": {
    } & Z<typeof __routes_content__server> & {
  },
  "data": {
    endpoint$: (endpoint: Slug<__routes_data__endpoint___server.Slug>) => {
      } & Z<typeof __routes_data__endpoint___server> & {
    }
  },
  "transcript": {
    } & Z<typeof __routes_transcript__server> & {
  }
}