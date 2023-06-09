<script lang="ts">
  export let schedules: iSchedules;
  import { userPickedDay, userPickedLocation } from "./stores.js";
  import type { iSchedules } from "../types";
  let pickedDay: string;
  let pickedLocation: string;

  userPickedDay.subscribe((value) => {
    pickedDay = value;
  });

  userPickedLocation.subscribe((value) => {
    pickedLocation = value;
  });

  let displayedSchedules = schedules;

  const order = {
    Sunday: 1,
    Monday: 2,
    Tuesday: 3,
    Wednesday: 4,
    Thursday: 5,
    Friday: 6,
    Saturday: 7,
  };

  displayedSchedules.sort(function (a, b) {
    return order[a.day[0]] - order[b.day[0]];
  });

  $: if (pickedDay == "All" && pickedLocation == "All") {
    displayedSchedules = schedules;
  } else if (pickedDay != "All" && pickedLocation != "All") {
    displayedSchedules = schedules
      .filter((schedule) => schedule.day.includes(pickedDay))
      .filter((schedule) => schedule.AO.neighborhood.includes(pickedLocation));
  } else if (pickedDay != "All") {
    displayedSchedules = schedules.filter((schedule) =>
      schedule.day.includes(pickedDay)
    );
  } else if (pickedLocation != "All") {
    displayedSchedules = schedules.filter((schedule) =>
      schedule.AO.neighborhood.includes(pickedLocation)
    );
  }
</script>

{#if displayedSchedules && displayedSchedules.length}
  {#each displayedSchedules as schedule}
    <div
      class="grid p-6 mb-4 border-4 rounded shadow bg-zinc-300 border-zinc-900 grow"
    >
      <h2 class="pb-2 text-4xl mb-2">AO: {schedule.AO.name}</h2>
      <div class="flex flex-col gap-2">
        <div class="flex">
          <p>Days:</p>
          {#each schedule.day as day}
            <span class="px-2 font-bold">{day}</span>
          {/each}
        </div>
        <p>Style: {schedule.style}</p>
        <p>Neighborhood: {schedule.AO.neighborhood}</p>
        <p>Start Time: {schedule.start_time}</p>
        <p>
          Location: <a
            href={schedule.AO.google_map}
            class="underline visited:bg-emerald-800 text-red-700 hover:decoration-2"
            >{schedule.AO.location_name}</a
          >
        </p>
      </div>
    </div>
  {/each}
{:else}
  <h2 class="text-red-600">No schedules match filter.</h2>
{/if}
