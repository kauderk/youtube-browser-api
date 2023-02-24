<script>
	import Api from '$src/api'
	import { onMount } from 'svelte'
	import { content, data, transcript } from '..'

	const endpoints = [
		{
			name: 'CONTENT',
			required: '?id=',
			description: 'Extract all/some video data.',
			link: '/content',
		},
		{
			name: 'DATA',
			required: 'keywords',
			description: 'Search for narrower data.',
			link: '/data',
		},
		{
			name: 'TRANSCRIPT',
			required: 'video ids',
			description: 'Extract transcripts.',
			link: '/transcript',
		},
	]
	onMount(() => {
		Api.content
			.GET({
				query: {
					id: 'pOEyYwKtHJo',
					params: ['title'],
				},
			})
			.Ok(res => res.body)
	})
</script>

<svelte:head>
	<meta
		name="description"
		content="Easily access YouTube's videos, channels, playlists and more through our YouTube API Wrapper website. Our API wrapper offers content, data, and transcript endpoints with a simple interface tailored to your needs." />
	<meta
		name="keywords"
		content="YouTube API, YouTube API Wrapper, video data, transcripts, channels, playlists, data endpoints, content endpoints, HTML data, simple interface, user-friendly." />
</svelte:head>

<section class="space-y-4 p-10">
	<h2>How It Works</h2>
	<p>A thin wrapper over the YouTube API - By parsing raw HTML data.</p>
	<div class="table-container">
		<table class="table">
			<thead>
				<tr>
					<th>Endpoint</th>
					<th>Required</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				{#each endpoints as endpoint}
					<tr>
						<td>
							<code>
								<a href={endpoint.link}>{endpoint.name}</a>
							</code>
						</td>
						<td>{endpoint.required}</td>
						<td>{endpoint.description}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<h3>Description</h3>
	<p>
		This YouTube API Wrapper website offers content, data, and transcript
		endpoints to access YouTube's videos, channels, playlists and more. It
		has a simple interface and is tailored to user needs.
	</p>
</section>
