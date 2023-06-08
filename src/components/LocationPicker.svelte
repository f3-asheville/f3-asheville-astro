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
  <div class="flex flex-wrap gap-1 bg-zinc-800">
    <button
      class={`${
        "All" == pickedLocation ? "bg-red-600" : "bg-zinc-700"
      } px-4 pb-1 pt-2 text-lg   text-zinc-100 font-stencil uppercase font-bold shadow w-full`}
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
        } px-4 py-1 text-md  text-zinc-100 font-stencil uppercase font-bold w-full`}
        >{day}</button
      >
    {/each}
  </div>
</div>
