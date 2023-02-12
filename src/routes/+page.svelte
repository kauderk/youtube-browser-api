<script lang="ts">
	import {
		Accordion,
		AccordionItem,
		InputChip,
		Paginator,
		SlideToggle,
		Step,
		Stepper,
		Table,
	} from '@skeletonlabs/skeleton'
	import type { PaginationSettings } from '@skeletonlabs/skeleton/components/Paginator/types'
	import Api from '../api'
	import Chart from './Chart.svelte'
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
			heatmap: true,
			heatmapPath: true,
		},
	}

	// Local

	let flavorsList = ['vanilla', 'chocolate', 'strawberry']
	let flavorsWhitelist = [
		'vanilla',
		'chocolate',
		'strawberry',
		'peach',
		'rocky road',
	]

	// Local
	const sourceHeaders: string[] = ['Positions', 'Name', 'Weight', 'Symbol']
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
		[10, 'Neon', 20.1797, 'Ne'],
	]
	// Reactive
	let page = {
		offset: 0,
		limit: 5,
		size: sourceBody.length,
		amounts: [1, 2, 5, sourceBody.length],
	} as PaginationSettings
	// Event Handlers
	function onPageChange(e: CustomEvent): void {
		console.log('Paginator - event:page', e.detail)
	}
	function onAmountChange(e: CustomEvent): void {
		console.log('Paginator - event:amount', e.detail)
	}
	// Reactive
	$: sourceBodySliced = sourceBody.slice(
		page.offset * page.limit,
		page.offset * page.limit + page.limit
	)

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

<section class="card variant-glass p-4 space-y-4">
	<Accordion autocollapse>
		<AccordionItem open>
			<svelte:fragment slot="lead"
				><i
					class="fa-solid fa-book text-xl w-6 text-center" /></svelte:fragment>
			<svelte:fragment slot="summary"
				><p class="font-bold">Books</p></svelte:fragment>
			<svelte:fragment slot="content">
				<p>
					This is the content panel for the <strong>books</strong> item.
				</p>
				<svg
					class="ytp-heat-map-svg"
					height="100%"
					preserveAspectRatio="none"
					version="1.1"
					viewBox="0 0 1000 100"
					width="100%"
					style="height: 40px;">
					<defs>
						<clipPath id="hm_1_0">
							<path
								class="ytp-heat-map-path"
								d="M 0.0,100.0 C 1.0,80.0 2.0,5.6 5.0,0.0 C 8.0,-5.6 11.0,57.4 15.0,71.8 C 19.0,86.1 21.0,71.3 25.0,71.8 C 29.0,72.2 31.0,73.0 35.0,74.0 C 39.0,75.1 41.0,76.3 45.0,77.0 C 49.0,77.7 51.0,77.0 55.0,77.5 C 59.0,78.0 61.0,79.0 65.0,79.7 C 69.0,80.4 71.0,80.9 75.0,81.0 C 79.0,81.1 81.0,80.3 85.0,80.2 C 89.0,80.1 91.0,80.3 95.0,80.7 C 99.0,81.0 101.0,81.5 105.0,81.8 C 109.0,82.2 111.0,82.1 115.0,82.4 C 119.0,82.6 121.0,82.7 125.0,82.9 C 129.0,83.1 131.0,83.5 135.0,83.4 C 139.0,83.4 141.0,82.7 145.0,82.4 C 149.0,82.2 151.0,82.3 155.0,82.3 C 159.0,82.2 161.0,82.7 165.0,82.1 C 169.0,81.4 171.0,79.3 175.0,78.9 C 179.0,78.6 181.0,80.2 185.0,80.4 C 189.0,80.5 191.0,79.7 195.0,79.7 C 199.0,79.6 201.0,80.4 205.0,80.1 C 209.0,79.8 211.0,78.5 215.0,78.2 C 219.0,77.9 221.0,78.5 225.0,78.8 C 229.0,79.0 231.0,79.6 235.0,79.6 C 239.0,79.6 241.0,78.6 245.0,78.7 C 249.0,78.8 251.0,79.8 255.0,80.0 C 259.0,80.2 261.0,79.8 265.0,79.8 C 269.0,79.8 271.0,79.9 275.0,80.1 C 279.0,80.2 281.0,80.7 285.0,80.6 C 289.0,80.5 291.0,79.7 295.0,79.5 C 299.0,79.3 301.0,79.9 305.0,79.8 C 309.0,79.7 311.0,78.9 315.0,78.8 C 319.0,78.8 321.0,79.2 325.0,79.5 C 329.0,79.8 331.0,80.2 335.0,80.2 C 339.0,80.3 341.0,80.0 345.0,79.8 C 349.0,79.6 351.0,79.4 355.0,79.3 C 359.0,79.2 361.0,79.3 365.0,79.2 C 369.0,79.2 371.0,79.1 375.0,79.0 C 379.0,79.0 381.0,79.1 385.0,79.1 C 389.0,79.1 391.0,79.3 395.0,79.0 C 399.0,78.7 401.0,78.0 405.0,77.7 C 409.0,77.5 411.0,77.7 415.0,77.8 C 419.0,77.9 421.0,78.3 425.0,78.3 C 429.0,78.3 431.0,78.1 435.0,77.9 C 439.0,77.6 441.0,77.3 445.0,77.1 C 449.0,76.8 451.0,77.0 455.0,76.7 C 459.0,76.4 461.0,75.7 465.0,75.5 C 469.0,75.4 471.0,76.3 475.0,76.1 C 479.0,75.9 481.0,74.9 485.0,74.4 C 489.0,73.8 491.0,73.6 495.0,73.3 C 499.0,73.0 501.0,72.8 505.0,72.6 C 509.0,72.5 511.0,72.8 515.0,72.5 C 519.0,72.1 521.0,71.2 525.0,70.9 C 529.0,70.6 531.0,70.7 535.0,70.8 C 539.0,70.9 541.0,71.3 545.0,71.2 C 549.0,71.1 551.0,70.2 555.0,70.3 C 559.0,70.3 561.0,71.3 565.0,71.6 C 569.0,71.8 571.0,71.5 575.0,71.5 C 579.0,71.6 581.0,71.7 585.0,71.8 C 589.0,71.9 591.0,72.0 595.0,71.9 C 599.0,71.8 601.0,71.2 605.0,71.1 C 609.0,70.9 611.0,71.0 615.0,71.1 C 619.0,71.1 621.0,71.3 625.0,71.4 C 629.0,71.5 631.0,71.7 635.0,71.7 C 639.0,71.7 641.0,71.6 645.0,71.4 C 649.0,71.3 651.0,71.1 655.0,71.1 C 659.0,71.1 661.0,71.2 665.0,71.4 C 669.0,71.6 671.0,72.1 675.0,72.0 C 679.0,71.9 681.0,71.1 685.0,70.9 C 689.0,70.7 691.0,71.2 695.0,71.0 C 699.0,70.9 701.0,70.4 705.0,70.2 C 709.0,70.0 711.0,70.1 715.0,70.0 C 719.0,70.0 721.0,70.1 725.0,70.0 C 729.0,69.9 731.0,69.6 735.0,69.7 C 739.0,69.7 741.0,70.2 745.0,70.5 C 749.0,70.8 751.0,71.0 755.0,71.0 C 759.0,71.0 761.0,70.5 765.0,70.6 C 769.0,70.7 771.0,71.4 775.0,71.6 C 779.0,71.7 781.0,71.3 785.0,71.4 C 789.0,71.4 791.0,71.6 795.0,71.9 C 799.0,72.1 801.0,72.7 805.0,72.8 C 809.0,73.0 811.0,72.7 815.0,72.8 C 819.0,72.8 821.0,72.7 825.0,73.1 C 829.0,73.5 831.0,74.0 835.0,74.8 C 839.0,75.7 841.0,76.5 845.0,77.1 C 849.0,77.8 851.0,77.7 855.0,78.1 C 859.0,78.5 861.0,78.7 865.0,79.0 C 869.0,79.4 871.0,79.6 875.0,79.8 C 879.0,80.0 881.0,80.0 885.0,80.2 C 889.0,80.3 891.0,80.2 895.0,80.5 C 899.0,80.9 901.0,81.1 905.0,81.8 C 909.0,82.5 911.0,83.1 915.0,84.1 C 919.0,85.1 921.0,85.9 925.0,87.1 C 929.0,88.2 931.0,89.4 935.0,90.0 C 939.0,90.6 941.0,90.0 945.0,90.0 C 949.0,90.0 951.0,90.0 955.0,90.0 C 959.0,90.0 961.0,90.0 965.0,90.0 C 969.0,90.0 971.0,90.0 975.0,90.0 C 979.0,90.0 981.0,90.0 985.0,90.0 C 989.0,90.0 992.0,90.0 995.0,90.0 C 998.0,90.0 999.0,88.0 1000.0,90.0 C 1001.0,92.0 1000.0,98.0 1000.0,100.0"
								fill="white"
								fill-opacity="0.6" />
						</clipPath>
					</defs>
					<rect
						class="ytp-heat-map-graph"
						clip-path="url(#hm_1_0)"
						fill="white"
						fill-opacity="0.2"
						height="100%"
						width="100%"
						x="0"
						y="0" />
					<rect
						class="ytp-heat-map-hover"
						clip-path="url(#hm_1_0)"
						height="100%"
						x="0"
						y="0" />
					<rect
						class="ytp-heat-map-play"
						clip-path="url(#hm_1_0)"
						height="100%"
						x="0"
						y="0" />
				</svg>
				<Chart />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Voluptatum eligendi quibusdam odit, temporibus ullam ab enim
					expedita eum officia ipsum, laboriosam, nobis quasi laborum
					aspernatur reiciendis dignissimos optio sunt distinctio.
				</p>
				<section class="space-y-4">
					<p class="text-center">
						Tap the <strong>View Page Source</strong> above to inspect
						each example shown below.
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
												.GET({
													query: {
														search: {
															keyword: 'API',
														},
													},
												})
												.Ok(
													o =>
														// @ts-expect-error
														(window._data = o.body)
												)

											Api.youtube.content.GET(config).Ok(
												o =>
													// @ts-expect-error
													(window._content = o.body)
											)

											Api.youtube.transcript
												.GET(config)
												.Ok(
													o =>
														// @ts-expect-error
														(window._transcript =
															o.body)
												)
										}}>
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
									<select
										class="select"
										multiple
										value={['1', '2']}>
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
									<textarea
										class="textarea"
										rows="4"
										placeholder="Enter some long form content." />
								</label>
								<fieldset>
									<div class="label">
										<strong>Checkboxes</strong>
										<div class="space-y-2">
											<label
												class="flex items-center space-x-2">
												<input
													class="checkbox"
													type="checkbox"
													checked />
												<p>Option 1</p>
											</label>
											<label
												class="flex items-center space-x-2">
												<input
													class="checkbox"
													type="checkbox" />
												<p>Option 2</p>
											</label>
											<label
												class="flex items-center space-x-2">
												<input
													class="checkbox"
													type="checkbox" />
												<p>Option 3</p>
											</label>
										</div>
									</div>
								</fieldset>
								<fieldset>
									<div class="label">
										<strong>Radio Buttons</strong>
										<div class="space-y-2">
											<label
												class="flex items-center space-x-2">
												<input
													class="radio"
													type="radio"
													checked
													name="radio-direct"
													value="1" />
												<p>Option 1</p>
											</label>
											<label
												class="flex items-center space-x-2">
												<input
													class="radio"
													type="radio"
													name="radio-direct"
													value="2" />
												<p>Option 2</p>
											</label>
											<label
												class="flex items-center space-x-2">
												<input
													class="radio"
													type="radio"
													name="radio-direct"
													value="3" />
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
							<div
								class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
								<div class="input-group-shim">https://</div>
								<input
									type="text"
									placeholder="www.example.com" />
							</div>
						</label>
						<!-- --- -->
						<label class="label">
							<span>Amount</span>
							<div
								class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
								<div class="input-group-shim">
									<i class="fa-solid fa-dollar-sign" />
								</div>
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
							<div
								class="input-group input-group-divider grid-cols-[1fr_auto]">
								<input
									type="text"
									placeholder="Enter Username..." />
								<a
									href="/elements/forms"
									title="Username already in use.">
									<i
										class="fa-solid fa-circle-exclamation text-warning-500 animate-pulse" />
								</a>
							</div>
						</label>
						<!-- --- -->
						<label class="label">
							<span>Search</span>
							<div
								class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
								<div class="input-group-shim">
									<i class="fa-solid fa-search" />
								</div>
								<input type="search" placeholder="Search..." />
								<button class="variant-filled-secondary"
									>Submit</button>
							</div>
						</label>
					</div>
				</section>
			</svelte:fragment>
		</AccordionItem>
		<AccordionItem>
			<svelte:fragment slot="lead"
				><i
					class="fa-solid fa-film text-xl w-6 text-center" /></svelte:fragment>
			<svelte:fragment slot="summary"
				><p class="font-bold">Movies</p></svelte:fragment>
			<svelte:fragment slot="content">
				<p>
					This is the content panel for the <strong>movies</strong> item.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Voluptatum eligendi quibusdam odit, temporibus ullam ab enim
					expedita eum officia ipsum, laboriosam, nobis quasi laborum
					aspernatur reiciendis dignissimos optio sunt distinctio.
				</p>
			</svelte:fragment>
		</AccordionItem>
		<AccordionItem>
			<svelte:fragment slot="lead"
				><i
					class="fa-solid fa-tv text-xl w-6 text-center" /></svelte:fragment>
			<svelte:fragment slot="summary"
				><p class="font-bold">Television</p></svelte:fragment>
			<svelte:fragment slot="content">
				<p>
					This is the content panel for the <strong
						>television</strong> item.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Voluptatum eligendi quibusdam odit, temporibus ullam ab enim
					expedita eum officia ipsum, laboriosam, nobis quasi laborum
					aspernatur reiciendis dignissimos optio sunt distinctio.
				</p>
			</svelte:fragment>
		</AccordionItem>
		<AccordionItem>
			<svelte:fragment slot="lead"
				><i
					class="fa-solid fa-gamepad text-xl w-6 text-center" /></svelte:fragment>
			<svelte:fragment slot="summary"
				><p class="font-bold">Games</p></svelte:fragment>
			<svelte:fragment slot="content">
				<p>
					This is the content panel for the <strong>games</strong> item.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Voluptatum eligendi quibusdam odit, temporibus ullam ab enim
					expedita eum officia ipsum, laboriosam, nobis quasi laborum
					aspernatur reiciendis dignissimos optio sunt distinctio.
				</p>
			</svelte:fragment>
		</AccordionItem>
	</Accordion>
</section>
<!-- Flavors -->
<div class="card p-4 space-y-4">
	<label for="chips-example-flavors" class="label">
		<span
			>Flavors <em>(whitelists vanilla, chocolate, strawberry)</em></span>
		<InputChip
			name="chips-example-flavors"
			bind:value={flavorsList}
			placeholder="Enter flavors..."
			chips="variant-filled-primary"
			whitelist={flavorsWhitelist} />
	</label>
	<code class="inline-block"
		>{flavorsList.length ? flavorsList : 'No flavors set.'}</code>
</div>

<section class="card variant-glass p-4 space-y-4">
	<Table
		source={{
			head: sourceHeaders,
			body: sourceBodySliced,
		}} />
	<Paginator
		bind:settings={page}
		on:page={onPageChange}
		on:amount={onAmountChange} />
</section>

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
