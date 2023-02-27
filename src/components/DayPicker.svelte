<script lang="ts">
	export let uniqueDays: string[];
	import { userPickedDay } from '$lib/stores.js';

	let pickedDay: string;

	userPickedDay.subscribe((value) => {
		pickedDay = value;
	});
</script>

<div>
	<p class="font-stencil text-2xl">Filter by Day</p>

	<div class="flex flex-wrap gap-1">
		<button
			class={`${
				'All' == pickedDay ? 'bg-red-600' : 'bg-zinc-700'
			} px-4 py-1 text-lg rounded  text-zinc-100 font-stencil shadow`}
			on:click={() => {
				userPickedDay.set('All');
			}}>All</button
		>
		{#each uniqueDays as day}
			<button
				on:click={() => {
					userPickedDay.set(day);
				}}
				class={`${
					day == pickedDay ? 'bg-red-600' : 'bg-zinc-700'
				} px-4 py-1 text-lg rounded  text-zinc-100 font-stencil`}>{day}</button
			>
		{/each}
	</div>
</div>
