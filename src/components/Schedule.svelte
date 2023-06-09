<script lang="ts">
  import DayPicker from "@components/DayPicker.svelte";
  import DisplaySchedules from "@components/DisplaySchedules.svelte";
  import LocationPicker from "@components/LocationPicker.svelte";
  import { userPickedDay, userPickedLocation } from "@components/stores.js";
  import LocationMap from "@components/LocationMap.svelte";

  export let schedules;
  const allDays = schedules.map((schedule) => schedule.day).flat();
  const uniqueDays: string[] = Array.from(new Set(allDays));

  let pickedFilter: string = "location";

  function pickFilter(filter) {
    pickedFilter = filter;
    userPickedLocation.set("All");
    userPickedDay.set("All");
  }
</script>

<!-- ToDo: Make map reactive. Only display selected locations. -->

<section class="grid gap-4 sm:px-4">
  <LocationMap />
  <div class="grid bg-zinc-300 rounded border-zinc-800 border-4">
    <div class="grid grid-cols-2 border-b-zinc-800 border-b-4">
      <button
        class={`${
          pickedFilter == "location" ? "bg-red-600" : "bg-zinc-700"
        } font-stencil font-bold text-xl border-r-2 border-zinc-800 h-full py-2 text-zinc-50 uppercase hover:bg-red-700`}
        on:click={() => pickFilter("location")}
      >
        Filter by Location</button
      >
      <button
        class={`${
          pickedFilter == "day" ? "bg-red-600" : "bg-zinc-700"
        } font-stencil font-bold text-xl border-l-2 border-zinc-800 h-full py-2 text-zinc-50 uppercase hover:bg-red-700`}
        on:click={() => pickFilter("day")}
      >
        Filter by Day</button
      >
    </div>
    {#if pickedFilter == "location"}
      <LocationPicker {schedules} />
    {:else}
      <DayPicker {uniqueDays} />
    {/if}
  </div>
  <div class="flex flex-wrap gap-4">
    <DisplaySchedules {schedules} />
  </div>
</section>

<!-- <pre>
{JSON.stringify(schedules, null, 2)}
</pre> -->
