import type { TranscriptResponse } from 'youtube-transcript'
export async function Script(transcript: TranscriptResponse[]) {
	// https://huggingface.co/spaces/jipenaflor/Youtube-Transcript-Summarizer/blob/main/app.py
	let script = ''

	for (const text of transcript) {
		let t = text['text']
		if (t != '[Music]') {
			script += t + ' '
		}
	}

	return script
}
