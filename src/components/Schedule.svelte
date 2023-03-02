<script lang="ts">
  import DayPicker from "@components/DayPicker.svelte";
  import DisplaySchedules from "@components/DisplaySchedules.svelte";
  import LocationPicker from "@components/LocationPicker.svelte";
  import { userPickedDay } from "@components/stores.js";

  // const {schedules} = Astro.props;

  export let schedules;

  let pickedDay: string;
  userPickedDay.subscribe((value) => {
    pickedDay = value;
  });
  const allDays = schedules.map((schedule) => schedule.day).flat();
  const uniqueDays = Array.from(new Set(allDays));
</script>

<!-- ToDo: Make map reactive. Only display selected locations. -->

<section class="grid gap-4 ">
  <div
    class="grid gap-4 md:grid-cols-2 bg-zinc-300 p-4 rounded border-zinc-900 border-4"
  >
    <LocationPicker {schedules} />
    <DayPicker {uniqueDays} />
  </div>
  <div class="flex flex-wrap gap-4 ">
    <DisplaySchedules {schedules} />
  </div>
</section>

<!-- <pre>
{JSON.stringify(schedules, null, 2)}
</pre> -->
