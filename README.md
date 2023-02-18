<meta name="description" content="Access YouTube's videos, channels, playlists and more through our YouTube API Wrapper website. Our API wrapper offers content, data, and transcript endpoints with a simple interface tailored to your needs." />
<meta name="keywords" content="YouTube API, YouTube API Wrapper, video data, transcripts, channels, playlists, data endpoints, content endpoints, HTML data, simple interface, user-friendly." />

# YouTube Browser API
Welcome to the YouTube API Wrapper for Developers! This website provides a simple and efficient way to access YouTube's videos, channels, playlists, and more. It is designed by a developer for developers, with a thin wrapper over the YouTube API that parses raw HTML data.

## How It Works
The API wrapper provides three endpoints - Content, Data, and Transcript - to extract video data, search for narrower data, and extract transcripts, respectively. Simply make requests to the API with the required parameters and get the desired data in JSON format.

## Endpoints

**CONTENT**: Extract all or some video data by passing the video ID in the query parameter.
```ts
const query = {
	id: "pOEyYwKtHJo",
	query: ["title"], // ["title","suggestions","storyboard","heatmapPath","isLive","channel","description","initialData","playerResponse","apiToken","context","auto_chapters","chapters","heatmap"]
}
const fetchUrl = "https://youtube-browser-api.netlify.app/content?id=pOEyYwKtHJo&query=" + selectedIds.join()
// https://youtube-browser-api.netlify.app/content?id=pOEyYwKtHJo&query=title&format=json
fetch(fetchUrl)
	.then(res => res.json())
	.then(console.log)
			
```

**DATA**: Search for narrower data by passing keywords in the query parameter. For example `search`:
```ts
const query = {
  "keyword": "",
  "withPlaylist": false,
  "limit": 1,
  "option": ""
};
const fetchUrl = "https://youtube-browser-api.netlify.app/data/search?" + new URLSearchParams(query).toString()
// https://youtube-browser-api.netlify.app/data/search?keyword=&withPlaylist=false&limit=1&option=&format=json
fetch(fetchUrl)
	.then(res => res.json())
	.then(console.log)
```

**TRANSCRIPT**: Extract transcripts by passing video IDs in the query parameter. For example `video ids`:
```ts
const query = {
  "videoId": "pOEyYwKtHJo"
};
const fetchUrl = "https://youtube-browser-api.netlify.app/transcript?" + new URLSearchParams(query).toString()
// https://youtube-browser-api.netlify.app/transcript?videoId=pOEyYwKtHJo&format=json
fetch(fetchUrl)
	.then(res => res.json())
	.then(console.log)
```
## Description
This YouTube API Wrapper website offers a simple and user-friendly interface to access YouTube's API. It is tailored to the needs of developers and provides HTML data through data endpoints and content endpoints. Whether you need to extract video analytics, search for specific data, or extract transcripts, the API wrapper can help you do it quickly and easily.
