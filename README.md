<meta name="description" content="Access YouTube's videos, channels, playlists and more through our YouTube API Wrapper website. Our API wrapper offers content, data, and transcript endpoints with a simple interface tailored to your needs." />
<meta name="keywords" content="YouTube API, YouTube API Wrapper, video data, transcripts, channels, playlists, data endpoints, content endpoints, HTML data, simple interface, user-friendly." />

# [YouTube Browser API](https://youtube-browser-api.netlify.app/)
<a href="https://youtube-browser-api.netlify.app/" target="_blank"><img src="https://img.shields.io/badge/youtube browser api-website-green"></a>

## Features
- Fully typed endpoints
- Get data on YouTube videos, channels, playlists, heatmap, chapters and more
- Get YouTube video transcripts
- Simple and user-friendly API wrapper

# Installation
```bash
npm install youtube-browser-api
```
###### `REST API is also available`

---

## How It Works
A thin wrapper over the YouTube API that parses raw HTML/JSON data.

## <a href="https://github.com/kauderk/youtube-browser-api/wiki" target="_blank"><img src="https://img.shields.io/badge/Documentaion-Wiki-yellow"></a>
---

## Endpoints

**CONTENT**: Extract all or some video data by passing the video ID in the query parameter.

<a href="https://youtube-browser-api.netlify.app/content?id=pOEyYwKtHJo&query=title" target="_blank"><img src="https://img.shields.io/badge/test endpoint-&query=title"></a>

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
    id: "pOEyYwKtHJo",
    params: ["title"], // ["title","suggestions","storyboard","heatmapPath","isLive","channel","description","initialData","playerResponse","apiToken","context","auto_chapters","chapters","heatmap"]
}
const fetchUrl = `https://youtube-browser-api.netlify.app/content?id=${query.id}&query=` + query.params.join()
// https://youtube-browser-api.netlify.app/content?id=pOEyYwKtHJo&query=title
fetch(fetchUrl)
    .then(res => res.json())
    .then(console.log)
```

**DATA**: Search for narrower data by passing keywords in the query parameter. For example `search`:

<a href="https://youtube-browser-api.netlify.app/data/search?keyword=record&withPlaylist=false&limit=1&option=" target="_blank"><img src="https://img.shields.io/badge/test endpoint-search?keyword=record"></a>

```ts
// typescript
import Api from 'youtube-browser-api'

Api.data
    .endpoint$('search')
    .GET({
        query: {
            keyword: "AI",
            withPlaylist: false,
            limit: 1,
            option: ""
        },
    })
    .Ok((res) => console.log(res.body))
```
```js
// javascript
const query = {
    keyword: "AI",
    withPlaylist: false,
    limit: 1,
    option: ""
};
const fetchUrl = "https://youtube-browser-api.netlify.app/data/search?" + new URLSearchParams(query).toString()
// https://youtube-browser-api.netlify.app/data/search?keyword=record&withPlaylist=false&limit=1&option=
fetch(fetchUrl)
    .then(res => res.json())
    .then(console.log)
```

**TRANSCRIPT**: Extract transcripts by passing video IDs in the query parameter. For example `video ids`:

<a href="https://youtube-browser-api.netlify.app/transcript?videoId=pOEyYwKtHJo" target="_blank"><img src="https://img.shields.io/badge/test endpoint-transcript?videoId=pOEyYwKtHJo"></a>

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
    videoId: "pOEyYwKtHJo"
};
const fetchUrl = "https://youtube-browser-api.netlify.app/transcript?" + new URLSearchParams(query).toString()
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
