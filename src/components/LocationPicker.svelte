<script lang="ts">
  import { userPickedLocation } from "./stores.js";
  import type { iSchedules } from "../types";

  export let schedules: iSchedules;
  const allLocations = schedules.map((schedule) => schedule.AO.neighborhood);
  const uniqueLocations = Array.from(new Set(allLocations));

  let pickedLocation: string;

  userPickedLocation.subscribe((value) => {
    pickedLocation = value;
  });
</script>

<div>
  <p class="font-stencil text-3xl">Filter by Location</p>
  <div class="flex flex-wrap gap-1">
    <button
      class={`${
        "All" == pickedLocation ? "bg-red-600" : "bg-zinc-700"
      } px-4 py-1 text-lg rounded  text-zinc-100 font-stencil shadow`}
      on:click={() => {
        userPickedLocation.set("All");
      }}>All</button
    >
    {#each uniqueLocations as day}
      <button
        on:click={() => {
          userPickedLocation.set(day);
        }}
        class={`${
          day == pickedLocation ? "bg-red-600" : "bg-zinc-700"
        } px-4 py-1 text-lg rounded  text-zinc-100 font-stencil`}>{day}</button
      >
    {/each}
  </div>
</div>
