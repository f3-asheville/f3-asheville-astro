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
    const wideURL = urlFor(sanityImage)
      .width(520)
      .quality(80)
      .format("webp")
      .url();
    return wideURL;
  }
  function makePhoneURL(sanityImage) {
    const phoneURL = urlFor(sanityImage)
      .width(400)
      .quality(90)
      .format("webp")
      .url();
    return phoneURL;
  }
  function makeFallbackURL(sanityImage) {
    const fallbackURL = urlFor(sanityImage)
      .width(520)
      .quality(80)
      .format(".png")
      .url();
    return fallbackURL;
  }

  console.log({ events });
</script>

{#if events && events.length}
  {#each events as event}
    <div
      class=" p-6 mb-4 border-4 rounded shadow bg-zinc-300 border-zinc-900 max-w-xl"
    >
      {#if event.image}
        <div class="w-full">
          <picture>
            <source
              media="(max-width: 450px)"
              srcset={`${makePhoneURL(event.image)}`}
            />
            <source
              media="(min-width: 450px)"
              srcset={`${makeWideURL(event.image)}`}
            />
            <img
              src={makeFallbackURL(event.image)}
              alt="F3 event"
              sizes="(max-width: 450px) 400px, 520px"
              width="520px"
              height="520px"
            />
          </picture>
          <!-- <img
            srcset={`${makeWideURL(event.image)} 520w, ${makePhoneURL(
              event.image
            )} 400w`}
            src={makePhoneURL(event.image)}
            alt="F3 event"
            sizes="(max-width: 450px) 400px, 520px"
            width="520px"
            height="520px"
          /> -->
        </div>
      {/if}
      <h2 class="mt-8 pb-4 text-3xl md:text-5xl">{event.name}</h2>
      <div class="flex flex-col gap-2">
        <p class="text-xl">Event Date: {parseDate(event.date_time)}</p>
        <p class="text-xl">Start Time: {parseTime(event.date_time)}</p>
        <p class="text-xl">Location: {event.location}</p>
        <p class="text-xl">Organizer: {event.organizer}</p>
      </div>
    </div>
  {/each}
{:else}
  <p>No events scheduled.</p>
{/if}
