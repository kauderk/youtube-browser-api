<script lang="ts">
	import { SlideToggle, Step, Stepper } from '@skeletonlabs/skeleton'

	// Local
	let locked: boolean = true
	function onNextHandler(e: any): void {
		console.log('event:next', e.detail)
	}
	function onBackHandler(e: any): void {
		console.log('event:prev', e.detail)
	}
	function onCompleteHandler(e: any): void {
		console.log('event:complete', e.detail)
		alert('Complete!')
	}
</script>

<section class="card variant-glass p-4">
	<Stepper
		on:next={onNextHandler}
		on:back={onBackHandler}
		on:complete={onCompleteHandler}>
		<Step>
			<svelte:fragment slot="header">Get Started!</svelte:fragment>
			<p>
				This example Stepper will teach you how to use this component.
				Tap <u>next</u> to proceed to the next step.
			</p>
		</Step>
		<Step>
			<svelte:fragment slot="header">Going Back.</svelte:fragment>
			<p>
				The current step progress will be tracked at the top. Tap <u
					>back</u> to return to the previous step.
			</p>
		</Step>
		<Step {locked}>
			<svelte:fragment slot="header">A Locked Step.</svelte:fragment>
			<p>
				This Step component uses the <code>locked</code> property to prevent
				progress. This is ideal for multi-step forms, such as registration.
				For now we'll simulate a successful validation condition using the
				toggle below.
			</p>
			<div class="card !bg-transparent p-4 text-center">
				<SlideToggle name="locked-state" bind:checked={locked}
					>This step is <u>{locked ? 'Locked' : 'Unlocked'}</u
					></SlideToggle>
			</div>
		</Step>
		<Step>
			<svelte:fragment slot="header">Long Form Content.</svelte:fragment>
			<p>The steps will expand to fit content of any length.</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
				vel expedita porro vero, saepe dicta repellendus facilis ab
				accusamus unde, tempora ut nobis eum. Veniam, architecto
				corrupti. Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Itaque vel expedita porro vero, saepe dicta repellendus
				facilis ab accusamus unde, tempora ut nobis eum. Veniam,
				architecto corrupti. Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Itaque vel expedita porro vero, saepe dicta
				repellendus facilis ab accusamus unde, tempora ut nobis eum.
				Veniam, architecto corrupti. Lorem ipsum dolor sit amet
				consectetur adipisicing elit. Itaque vel expedita porro vero,
				saepe dicta repellendus facilis ab accusamus unde, tempora ut
				nobis eum. Veniam, architecto corrupti. Lorem ipsum dolor sit
				amet consectetur adipisicing elit. Itaque vel expedita porro
				vero, saepe dicta repellendus facilis ab accusamus unde, tempora
				ut nobis eum. Veniam, architecto corrupti.
			</p>
		</Step>
		<Step>
			<svelte:fragment slot="header">Almost Done.</svelte:fragment>
			<p>
				A Complete button will appear on the last step. When the step is
				unlocked and the button pressed, an <code>on:complete</code> event
				will be fired. You can use this trigger to submit form data to a
				server.
			</p>
		</Step>
	</Stepper>
</section>

<section class="space-y-4">
	<h2>How It Works</h2>
	<h3>Key Props</h3>
	<p>The following props are critical to how this operates.</p>
	<div class="table-container">
		<table class="table">
			<thead>
				<tr>
					<th>Property</th>
					<th>Example</th>
					<th>Description</th>
				</tr>
			</thead>
			<!-- prettier-ignore -->
			<tbody>
				<tr>
					<td><code>scrollParent</code></td>
					<td>"#page"</td>
					<td><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector" target="_blank" rel="noreferrer">Query selector</a> for the scrollable page element.</td>
				</tr>
				<tr>
					<td><code>target</code></td>
					<td>"#page"</td>
					<td><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector" target="_blank" rel="noreferrer">Query selector</a> for the element to scan for headings.</td>
				</tr>
				<tr>
					<td><code>allowedHeadings</code></td>
					<td>'h2, h3'</td>
					<td><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector" target="_blank" rel="noreferrer">Query selector</a> for the allowed headings. From H2-H6.</td>
				</tr>
			</tbody>
		</table>
	</div>
	<h3>Heading IDs</h3>
	<p>
		The component will scan the target region and query all matching
		headings. If a heading has an <code>ID</code> set, that will be used as the
		scroll target, otherwise an ID will be auto-generated and assigned.
	</p>
	<h3>Click to Scroll</h3>
	<p>
		When a link is clicked, the scrollable parent container will be scrolled
		using the JavaScript <code>scrollIntoView</code> method. This will smoothly
		scroll the container element to the heading with the matching ID.
	</p>
</section>
