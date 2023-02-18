<script lang="ts">
</script>

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
			<!-- prettier-ignore -->
			<tbody>
				<tr>
					<td><code><a href="/content">CONTENT</a></code></td>
					<td>"?id="</td>
					<td>Extract all/some video data.</td>
				</tr>
				<tr>
					<td><code><a href="/data">DATA</a></code></td>
					<td>"keywords"</td>
					<td>Search for narrower data.</td>
				</tr>
				<tr>
					<td><code><a href="/transcript">TRANSCRIPT</a></code></td>
					<td>"video ids"</td>
					<td>Extract transcripts.</td>
				</tr>
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
