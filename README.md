Fully typed endpoints that parse HTML/JSON data from youtube.com from any environment.

# [YouTube Browser API](https://youtube-browser-api.netlify.app/)
<a href="https://youtube-browser-api.netlify.app/" target="_blank"><img src="https://img.shields.io/badge/youtube browser api-website-green"></a>

## Features
- Fully typed endpoints powered by [sveltekit-zero-api](https://github.com/Refzlund/sveltekit-zero-api)
- Get data on YouTube videos, channels, playlists, heatmap, chapters and more
- Get YouTube video transcripts
- Simple and user-friendly API wrapper
- Works from any environment

# Install <a href="https://www.npmjs.com/package/youtube-browser-api" target="_blank"><img src="https://img.shields.io/badge/npm-red"></a>
```bash
npm install youtube-browser-api
```
###### `REST API is also available`

## <a href="https://github.com/kauderk/youtube-browser-api/wiki" target="_blank"><img src="https://img.shields.io/badge/Documentaion-Wiki-yellow"></a>

---

## Endpoints


**[/query](https://youtube-browser-api.netlify.app/query/page)**: Extract data by passing schemas on `video ids`:
**You can make granular request as complex as the Javascript Object Notation lets you**. [Go to the playground](https://stackblitz.com/edit/youtube-browser-api-client-playground?file=index.ts)

<a href="https://youtube-browser-api.netlify.app/query?id=ZwLekxsSY3Y&schema=%7B%22playerResponse%22%3A%7B%22videoDetails%22%3A%7B%22title%22%3A%22youtube-browser-api-schema-id%22%2C%22shortDescription%22%3A%22youtube-browser-api-schema-id%22%2C%22thumbnail%22%3A%7B%22thumbnails%22%3A%7B%224%22%3A%7B%22url%22%3A%22youtube-browser-api-schema-id%22%7D%7D%7D%7D%7D%7D&paths=playerResponse.streamingData.formats.0.url" target="_blank"><img src="https://img.shields.io/badge/test endpoint-query-green"></a>

```ts
// typescript
import Api, { pick } from 'youtube-browser-api'

Api.query
    .GET({
        query: {
            id: 'ZwLekxsSY3Y',
            schema: {
                playerResponse: {
                    videoDetails: {
                        title: pick,
                        shortDescription: pick,
                        thumbnail: {
                            // typescript expects everything but
                            // nested properties are still typed
                            // @ts-ignore
                            thumbnails: {
                                4: {
                                    url: pick,
                                    height: pick,
                                    width: pick,
                                },
                            },
                        },
                    },
                },
            },
            // optional path|path[]
            paths: 'playerResponse.streamingData.formats',
        },
    })
    .Ok((res) => console.log(res.body))
```
```js
// javascript
const pick = true
const query = {
    id: 'ZwLekxsSY3Y',
    schema: {
        playerResponse: {
            videoDetails: {
                title: pick,
                shortDescription: pick,
                thumbnail: {
                    thumbnails: {
                        4: {
                            url: pick,
                            height: pick,
                            width: pick,
                        },
                    },
                },
            },
        },
    },
    paths: 'playerResponse.streamingData.formats.0.url',
};
const fetchUrl = 'https://youtube-browser-api.netlify.app/query?' + new URLSearchParams(query).toString()
// https://youtube-browser-api.netlify.app/query?id=ZwLekxsSY3Y&paths=playerResponse.streamingData.formats.0.url
fetch(fetchUrl)
    .then(res => res.json())
    .then(console.log)
```

**[/content](https://youtube-browser-api.netlify.app/content/page)**: Extract all or some video data by a video ID.

<a href="https://youtube-browser-api.netlify.app/content?id=pOEyYwKtHJo&params=title" target="_blank"><img src="https://img.shields.io/badge/test endpoint-params=title-green"></a>

```ts
// typescript
import Api from 'youtube-browser-api'

Api.content
    .GET({
        query: {
            id: 'pOEyYwKtHJo',
            params: ['title'],
        },
    })
    .Ok((res) => console.log(res.body))
```
```js
// javascript
const query = {
    id: 'pOEyYwKtHJo',
    params: ['title'], // ['title','suggestions','storyboard','heatmapPath','isLive','channel','description','initialData','playerResponse','apiToken','context','auto_chapters','chapters','heatmap']
}
const fetchUrl = `https://youtube-browser-api.netlify.app/content?id=${query.id}&params=` + query.params.join()
// https://youtube-browser-api.netlify.app/content?id=pOEyYwKtHJo&params=title
fetch(fetchUrl)
    .then(res => res.json())
    .then(console.log)
```

**[/data](https://youtube-browser-api.netlify.app/data/page)**: Search for narrower data by passing keywords in the query parameter. For example `search`:

<a href="https://youtube-browser-api.netlify.app/data/search?keyword=record&withPlaylist=false&limit=1&option=" target="_blank"><img src="https://img.shields.io/badge/test endpoint-keyword=record-green"></a>

```ts
// typescript
import Api from 'youtube-browser-api'

Api.data
    .endpoint$('search')
    .GET({
        query: {
            keyword: 'AI',
            withPlaylist: false,
            limit: 1,
            option: ''
        },
    })
    .Ok((res) => console.log(res.body))
```
```js
// javascript
const query = {
    keyword: 'AI',
    withPlaylist: false,
    limit: 1,
    option: ''
};
const fetchUrl = 'https://youtube-browser-api.netlify.app/data/search?' + new URLSearchParams(query).toString()
// https://youtube-browser-api.netlify.app/data/search?keyword=record&withPlaylist=false&limit=1&option=
fetch(fetchUrl)
    .then(res => res.json())
    .then(console.log)
```

**[/transcript](https://youtube-browser-api.netlify.app/transcript/page)**: Extract transcripts by passing video IDs in the query parameter. For example `video ids`:

<a href="https://youtube-browser-api.netlify.app/transcript?videoId=pOEyYwKtHJo" target="_blank"><img src="https://img.shields.io/badge/test endpoint-transcript-green"></a>

```ts
// typescript
import Api from 'youtube-browser-api'

Api.transcript
    .GET({
        query: {
            videoId: 'pOEyYwKtHJo',
        },
    })
    .Ok((res) => console.log(res.body))
```
```js
// javascript
const query = {
    videoId: 'pOEyYwKtHJo'
};
const fetchUrl = 'https://youtube-browser-api.netlify.app/transcript?' + new URLSearchParams(query).toString()
// https://youtube-browser-api.netlify.app/transcript?videoId=pOEyYwKtHJo
fetch(fetchUrl)
    .then(res => res.json())
    .then(console.log)
```


## Description
This YouTube API Wrapper website offers a simple and user-friendly interface to access YouTube's API. It is tailored to the needs of developers; it provides data through fully typed endpoints. Whether you need to extract video analytics, search for specific data, or extract transcripts, the API wrapper can help you do it quickly and easily.

### License
This project is licensed under the [MIT License](https://github.com/kauderk/youtube-browser-api/blob/main/LICENSE).

<a href="https://youtube-browser-api.netlify.app/" target="_blank"><img src="https://img.shields.io/badge/Try it out now!-youtube browser api-blue"></a>


<meta name="description" content="Access YouTube's videos, channels, playlists and more through our YouTube API Wrapper website. Our API wrapper offers content, data, and transcript endpoints with a simple interface tailored to your needs." />
<meta name="keywords" content="YouTube API, YouTube API Wrapper, video data, transcripts, channels, playlists, data endpoints, content endpoints, HTML data, simple interface, user-friendly." />