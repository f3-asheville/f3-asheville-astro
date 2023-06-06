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
  function makeWideURL(sanityImage) {
    const wideURL = urlFor(sanityImage).width(1200).quality(80).url();
    return wideURL;
  }
  function makePhoneURL(sanityImage) {
    const phoneURL = urlFor(sanityImage).width(600).quality(80).url();
    return phoneURL;
  }

  // const srcset = `${wideURL} 1200w, ${phoneURL} 600w`;

  // export let allEvents: any;
  console.log({ events });
</script>

{#if events && events.length}
  {#each events as event}
    <div
      class=" p-6 mb-4 border-4 rounded shadow bg-zinc-300 border-zinc-900 max-w-xl"
    >
      {#if event.image}
        <div class="w-full">
          <img
            srcset={`${makeWideURL(event.image)} 1200w, ${makePhoneURL(
              event.image
            )} 600w`}
            src={makePhoneURL(event.image)}
            alt="F3 event"
            sizes="(max-width: 600px) 600px, 1200px"
            class=""
            width="1200px"
            height="1200px"
          />
        </div>
      {/if}
      <h2 class="mt-4 pb-4 text-3xl md:text-5xl">{event.name}</h2>
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
