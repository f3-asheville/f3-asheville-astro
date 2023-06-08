<script lang="ts">
  export let uniqueDays: string[];
  import { userPickedDay } from "./stores.js";

  let pickedDay: string;
  const order = {
    Sunday: 1,
    Monday: 2,
    Tuesday: 3,
    Wednesday: 4,
    Thursday: 5,
    Friday: 6,
    Saturday: 7,
  };

  uniqueDays.sort(function (a, b) {
    return order[a] - order[b];
  });

  userPickedDay.subscribe((value) => {
    pickedDay = value;
  });
</script>

<div>
  <div class="flex flex-wrap bg-zinc-800 gap-1">
    <button
      class={`${
        "All" == pickedDay ? "bg-red-600" : "bg-zinc-700"
      } px-4 pb-1 pt-2 text-lg   text-zinc-100 font-stencil font-bold uppercase shadow grow`}
      on:click={() => {
        userPickedDay.set("All");
      }}>All</button
    >
    {#each uniqueDays as day}
      <button
        on:click={() => {
          userPickedDay.set(day);
        }}
        class={`${
          day == pickedDay ? "bg-red-600" : "bg-zinc-700"
        } px-4 py-1 text-lg text-zinc-100 font-stencil font-bold uppercase grow`}
        >{day}</button
      >
    {/each}
  </div>
</div>
