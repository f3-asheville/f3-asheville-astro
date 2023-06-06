<script lang="ts">
  import type { iEvents } from "$lib/types";
  export let events: iEvents;
  export let urlFor;

  function parseTime(ISOString: string) {
    const eventDateObject = new Date(Date.parse(ISOString));
    return eventDateObject.toLocaleTimeString();
  }
  function parseDate(ISOString: string) {
    const eventDateObject = new Date(Date.parse(ISOString));
    return eventDateObject.toLocaleDateString();
  }

  // const wideURL = urlFor(events[0].image)
  //   .width(1200)
  //   .height(801)
  //   .quality(80)
  //   .saturation(-100)
  //   .url();
  // const phoneURL = urlFor(heroImage[0].image)
  //   .width(500)
  //   .quality(80)
  //   .saturation(-100)
  //   .url();
  // const srcset = `${wideURL} 1200w, ${phoneURL} 600w`;
  // export let allEvents: any;
</script>

{#if events && events.length}
  {#each events as event}
    <div
      class="grid grid-rows-[auto,_1fr] items-start p-6 mb-4 border-4 rounded shadow bg-zinc-300 border-zinc-900 max-w-md"
    >
      <h2 class="pb-4 text-4xl">{event.name}</h2>
      <div class="flex flex-col gap-2">
        <p>Event Date: {parseDate(event.date_time)}</p>
        <p>Start Time: {parseTime(event.date_time)}</p>
        <p>Location: {event.location}</p>
        <p>Organizer: {event.organizer}</p>
      </div>
    </div>
  {/each}
{:else}
  <p>No events scheduled.</p>
{/if}
