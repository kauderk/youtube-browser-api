<script lang="ts">
	import {
		Accordion,
		AccordionItem,
		InputChip,
		Paginator,
		SlideToggle,
		Step,
		Stepper,
		Table
	} from '@skeletonlabs/skeleton';
	import type { PaginationSettings } from '@skeletonlabs/skeleton/components/Paginator/types';
	import Api from '../api';
	const config = <const>{
		query: {
			id: 'ZwLekxsSY3Y',
			sugestions: true,
			contentPage: true,
			title: true,
			isLive: true,
			channel: true,
			description: true,
			chapters: true,
			heatmap: true
		}
	};

	// Local

	let flavorsList = ['vanilla', 'chocolate', 'strawberry'];
	let flavorsWhitelist = ['vanilla', 'chocolate', 'strawberry', 'peach', 'rocky road'];

	// Local
	const sourceHeaders: string[] = ['Positions', 'Name', 'Weight', 'Symbol'];
	const sourceBody: any = [
		[1, 'Hydrogen', 1.0079, 'H'],
		[2, 'Helium', 4.0026, 'He'],
		[3, 'Lithium', 6.941, 'Li'],
		[4, 'Beryllium', 9.0122, 'Be'],
		[5, 'Boron', 10.811, 'B'],
		[6, 'Carbon', 12.0107, 'C'],
		[7, 'Nitrogen', 14.0067, 'N'],
		[8, 'Oxygen', 15.9994, 'O'],
		[9, 'Fluorine', 18.9984, 'F'],
		[10, 'Neon', 20.1797, 'Ne']
	];
	// Reactive
	let page = {
		offset: 0,
		limit: 5,
		size: sourceBody.length,
		amounts: [1, 2, 5, sourceBody.length]
	} as PaginationSettings;
	// Event Handlers
	function onPageChange(e: CustomEvent): void {
		console.log('Paginator - event:page', e.detail);
	}
	function onAmountChange(e: CustomEvent): void {
		console.log('Paginator - event:amount', e.detail);
	}
	// Reactive
	$: sourceBodySliced = sourceBody.slice(
		page.offset * page.limit,
		page.offset * page.limit + page.limit
	);

	// Local
	let locked: boolean = true;
	function onNextHandler(e: any): void {
		console.log('event:next', e.detail);
	}
	function onBackHandler(e: any): void {
		console.log('event:prev', e.detail);
	}
	function onCompleteHandler(e: any): void {
		console.log('event:complete', e.detail);
		alert('Complete!');
	}
</script>

<section class="card variant-glass p-4 space-y-4">
	<Accordion autocollapse>
		<AccordionItem open>
			<svelte:fragment slot="lead"
				><i class="fa-solid fa-book text-xl w-6 text-center" /></svelte:fragment
			>
			<svelte:fragment slot="summary"><p class="font-bold">Books</p></svelte:fragment>
			<svelte:fragment slot="content">
				<p>This is the content panel for the <strong>books</strong> item.</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eligendi quibusdam
					odit, temporibus ullam ab enim expedita eum officia ipsum, laboriosam, nobis quasi laborum
					aspernatur reiciendis dignissimos optio sunt distinctio.
				</p>
				<section class="space-y-4">
					<p class="text-center">
						Tap the <strong>View Page Source</strong> above to inspect each example shown below.
					</p>
					<div class="card">
						<!-- Card Body -->
						<div class="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
							<!-- Column 1 -->
							<div class="space-y-4">
								<label class="label">
									<span>Select</span>
									<select
										class="select"
										on:change={() => {
											Api.youtube.data
												.GET({ query: { search: { keyword: 'API' } } })
												.Ok((o) => console.log({ data: o.body }));

											Api.youtube.content.GET(config).Ok((o) => console.log({ content: o.body }));

											Api.youtube.transcript
												.GET(config)
												.Ok((o) => console.log({ transcript: o.body }));
										}}
									>
										<option value="1">Option 1</option>
										<option value="2">Option 2</option>
										<option value="3">Option 3</option>
										<option value="4">Option 4</option>
										<option value="5">Option 5</option>
									</select>
								</label>
								<label class="label">
									<span>Select (size)</span>
									<select class="select" size="4" value="1">
										<option value="1">Option 1</option>
										<option value="2">Option 2</option>
										<option value="3">Option 3</option>
										<option value="4">Option 4</option>
										<option value="5">Option 5</option>
									</select>
								</label>
								<label class="label">
									<span>Select (multiple)</span>
									<select class="select" multiple value={['1', '2']}>
										<option value="1">Option 1</option>
										<option value="2">Option 2</option>
										<option value="3">Option 3</option>
										<option value="4">Option 4</option>
										<option value="5">Option 5</option>
									</select>
								</label>
							</div>

							<!-- Column 2 -->
							<div class="space-y-4">
								<label class="label">
									<span>Textarea</span>
									<textarea class="textarea" rows="4" placeholder="Enter some long form content." />
								</label>
								<fieldset>
									<div class="label">
										<strong>Checkboxes</strong>
										<div class="space-y-2">
											<label class="flex items-center space-x-2">
												<input class="checkbox" type="checkbox" checked />
												<p>Option 1</p>
											</label>
											<label class="flex items-center space-x-2">
												<input class="checkbox" type="checkbox" />
												<p>Option 2</p>
											</label>
											<label class="flex items-center space-x-2">
												<input class="checkbox" type="checkbox" />
												<p>Option 3</p>
											</label>
										</div>
									</div>
								</fieldset>
								<fieldset>
									<div class="label">
										<strong>Radio Buttons</strong>
										<div class="space-y-2">
											<label class="flex items-center space-x-2">
												<input class="radio" type="radio" checked name="radio-direct" value="1" />
												<p>Option 1</p>
											</label>
											<label class="flex items-center space-x-2">
												<input class="radio" type="radio" name="radio-direct" value="2" />
												<p>Option 2</p>
											</label>
											<label class="flex items-center space-x-2">
												<input class="radio" type="radio" name="radio-direct" value="3" />
												<p>Option 3</p>
											</label>
										</div>
									</div>
								</fieldset>
								<label class="label">
									<span>Input (range)</span>
									<input type="range" value="75" max="100" />
								</label>
							</div>
						</div>
					</div>

					<div class="card p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
						<label class="label">
							<span>Website</span>
							<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
								<div class="input-group-shim">https://</div>
								<input type="text" placeholder="www.example.com" />
							</div>
						</label>
						<!-- --- -->
						<label class="label">
							<span>Amount</span>
							<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
								<div class="input-group-shim"><i class="fa-solid fa-dollar-sign" /></div>
								<input type="text" placeholder="Amount" />
								<select>
									<option>USD</option>
									<option>CAD</option>
									<option>EURO</option>
								</select>
							</div>
						</label>
						<!-- --- -->
						<label class="label">
							<span>Username</span>
							<div class="input-group input-group-divider grid-cols-[1fr_auto]">
								<input type="text" placeholder="Enter Username..." />
								<a href="/elements/forms" title="Username already in use.">
									<i class="fa-solid fa-circle-exclamation text-warning-500 animate-pulse" />
								</a>
							</div>
						</label>
						<!-- --- -->
						<label class="label">
							<span>Search</span>
							<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
								<div class="input-group-shim"><i class="fa-solid fa-search" /></div>
								<input type="search" placeholder="Search..." />
								<button class="variant-filled-secondary">Submit</button>
							</div>
						</label>
					</div>
				</section>
			</svelte:fragment>
		</AccordionItem>
		<AccordionItem>
			<svelte:fragment slot="lead"
				><i class="fa-solid fa-film text-xl w-6 text-center" /></svelte:fragment
			>
			<svelte:fragment slot="summary"><p class="font-bold">Movies</p></svelte:fragment>
			<svelte:fragment slot="content">
				<p>This is the content panel for the <strong>movies</strong> item.</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eligendi quibusdam
					odit, temporibus ullam ab enim expedita eum officia ipsum, laboriosam, nobis quasi laborum
					aspernatur reiciendis dignissimos optio sunt distinctio.
				</p>
			</svelte:fragment>
		</AccordionItem>
		<AccordionItem>
			<svelte:fragment slot="lead"
				><i class="fa-solid fa-tv text-xl w-6 text-center" /></svelte:fragment
			>
			<svelte:fragment slot="summary"><p class="font-bold">Television</p></svelte:fragment>
			<svelte:fragment slot="content">
				<p>This is the content panel for the <strong>television</strong> item.</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eligendi quibusdam
					odit, temporibus ullam ab enim expedita eum officia ipsum, laboriosam, nobis quasi laborum
					aspernatur reiciendis dignissimos optio sunt distinctio.
				</p>
			</svelte:fragment>
		</AccordionItem>
		<AccordionItem>
			<svelte:fragment slot="lead"
				><i class="fa-solid fa-gamepad text-xl w-6 text-center" /></svelte:fragment
			>
			<svelte:fragment slot="summary"><p class="font-bold">Games</p></svelte:fragment>
			<svelte:fragment slot="content">
				<p>This is the content panel for the <strong>games</strong> item.</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eligendi quibusdam
					odit, temporibus ullam ab enim expedita eum officia ipsum, laboriosam, nobis quasi laborum
					aspernatur reiciendis dignissimos optio sunt distinctio.
				</p>
			</svelte:fragment>
		</AccordionItem>
	</Accordion>
</section>
<!-- Flavors -->
<div class="card p-4 space-y-4">
	<label for="chips-example-flavors" class="label">
		<span>Flavors <em>(whitelists vanilla, chocolate, strawberry)</em></span>
		<InputChip
			name="chips-example-flavors"
			bind:value={flavorsList}
			placeholder="Enter flavors..."
			chips="variant-filled-primary"
			whitelist={flavorsWhitelist}
		/>
	</label>
	<code class="inline-block">{flavorsList.length ? flavorsList : 'No flavors set.'}</code>
</div>

<section class="card variant-glass p-4 space-y-4">
	<Table
		source={{
			head: sourceHeaders,
			body: sourceBodySliced
		}}
	/>
	<Paginator bind:settings={page} on:page={onPageChange} on:amount={onAmountChange} />
</section>

<section class="card variant-glass p-4">
	<Stepper on:next={onNextHandler} on:back={onBackHandler} on:complete={onCompleteHandler}>
		<Step>
			<svelte:fragment slot="header">Get Started!</svelte:fragment>
			<p>
				This example Stepper will teach you how to use this component. Tap <u>next</u> to proceed to
				the next step.
			</p>
		</Step>
		<Step>
			<svelte:fragment slot="header">Going Back.</svelte:fragment>
			<p>
				The current step progress will be tracked at the top. Tap <u>back</u> to return to the previous
				step.
			</p>
		</Step>
		<Step {locked}>
			<svelte:fragment slot="header">A Locked Step.</svelte:fragment>
			<p>
				This Step component uses the <code>locked</code> property to prevent progress. This is ideal
				for multi-step forms, such as registration. For now we'll simulate a successful validation condition
				using the toggle below.
			</p>
			<div class="card !bg-transparent p-4 text-center">
				<SlideToggle name="locked-state" bind:checked={locked}
					>This step is <u>{locked ? 'Locked' : 'Unlocked'}</u></SlideToggle
				>
			</div>
		</Step>
		<Step>
			<svelte:fragment slot="header">Long Form Content.</svelte:fragment>
			<p>The steps will expand to fit content of any length.</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel expedita porro vero,
				saepe dicta repellendus facilis ab accusamus unde, tempora ut nobis eum. Veniam, architecto
				corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel expedita porro
				vero, saepe dicta repellendus facilis ab accusamus unde, tempora ut nobis eum. Veniam,
				architecto corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel
				expedita porro vero, saepe dicta repellendus facilis ab accusamus unde, tempora ut nobis
				eum. Veniam, architecto corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Itaque vel expedita porro vero, saepe dicta repellendus facilis ab accusamus unde, tempora
				ut nobis eum. Veniam, architecto corrupti. Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Itaque vel expedita porro vero, saepe dicta repellendus facilis ab
				accusamus unde, tempora ut nobis eum. Veniam, architecto corrupti.
			</p>
		</Step>
		<Step>
			<svelte:fragment slot="header">Almost Done.</svelte:fragment>
			<p>
				A Complete button will appear on the last step. When the step is unlocked and the button
				pressed, an <code>on:complete</code> event will be fired. You can use this trigger to submit
				form data to a server.
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
		The component will scan the target region and query all matching headings. If a heading has an <code
			>ID</code
		> set, that will be used as the scroll target, otherwise an ID will be auto-generated and assigned.
	</p>
	<h3>Click to Scroll</h3>
	<p>
		When a link is clicked, the scrollable parent container will be scrolled using the JavaScript <code
			>scrollIntoView</code
		> method. This will smoothly scroll the container element to the heading with the matching ID.
	</p>
</section>
