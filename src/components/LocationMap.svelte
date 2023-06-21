<script lang="ts">
  import { userPickedLocation } from "@components/stores.js";
  let pickedLocation: string;

  userPickedLocation.subscribe((value) => {
    pickedLocation = value;
  });
</script>

<div class="h-60 sm:h-96">
  {#if pickedLocation == "All"}
    <iframe
      title="all locations map"
      src="https://www.google.com/maps/d/embed?mid=1e711p6a2abr2rs0JD12bnThG6kobVB8&ehbc=2E312F"
      width="640"
      class="w-full h-full"
    />
  {:else if $userPickedLocation == "North Asheville"}
    <iframe
      title="Northbound Map"
      src="https://www.google.com/maps/d/embed?mid=1_RbBX_fHWEHjGSgfcfIsowp3IrODuXo&ehbc=2E312F"
      width="640"
      class="w-full h-full"
    />
  {:else if $userPickedLocation == "Black Mountain"}
    <iframe
      title="Black Mountain"
      src="https://www.google.com/maps/d/embed?mid=1KVPKT4rqRnEHP32Yly4qyIlmBKTplHU&ehbc=2E312F"
      width="640"
      class="w-full h-full"
    />
  {:else if $userPickedLocation == "Downtown Asheville"}
    <iframe
      title="Downtown"
      src="https://www.google.com/maps/d/embed?mid=18W43GG3ZfZfWuAq663x028qDPWDoc8o&ehbc=2E312F"
      width="640"
      class="w-full h-full"
    />
  {:else if $userPickedLocation == "South Asheville"}
    <iframe
      title="South"
      src="https://www.google.com/maps/d/embed?mid=1UB0IHc-FtjIe7MW8E92Jd6pG_0A5CsY&ehbc=2E312F"
      width="640"
      class="w-full h-full"
    />
  {:else}
    <iframe
      title="all locations map"
      src="https://www.google.com/maps/d/embed?mid=1e711p6a2abr2rs0JD12bnThG6kobVB8&ehbc=2E312F"
      width="640"
      class="w-full h-full"
    />
  {/if}
</div>
