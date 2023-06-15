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
      src="https://www.google.com/maps/d/u/0/embed?mid=1vu_HRJFd93InZVySmqwyPe3wbZ72czA&ehbc=2E312F"
      width="640"
      class="w-full h-full"
    />
  {:else if $userPickedLocation == "North Asheville"}
    <iframe
      title="Northbound Map"
      src="https://www.google.com/maps/d/u/0/embed?mid=1oFXgJhnTG1X4N6YFDzocLJf7Aj_PueY&ehbc=2E312F"
      width="640"
      class="w-full h-full"
    />
  {:else if $userPickedLocation == "Black Mountain"}
    <iframe
      title="Black Mountain"
      src="https://www.google.com/maps/d/u/0/embed?mid=1C2j2sRGt3_c_9jVl6dTUCjavqiEBQew&ehbc=2E312F"
      width="640"
      class="w-full h-full"
    />
  {:else if $userPickedLocation == "Downtown Asheville"}
    <iframe
      title="Downtown"
      src="https://www.google.com/maps/d/u/0/embed?mid=1KK6_jER9onG9JgvscIgPlghYuqwS8vc&ehbc=2E312F"
      width="640"
      class="w-full h-full"
    />
  {:else if $userPickedLocation == "South Asheville"}
    <iframe
      title="South"
      src="https://www.google.com/maps/d/u/0/embed?mid=1HBkrrzrfBAMtnyPiPRHclt8vNgZj4_c&ehbc=2E312F"
      width="640"
      class="w-full h-full"
    />
  {:else}
    <iframe
      title="all locations map"
      src="https://www.google.com/maps/d/u/0/embed?mid=1vu_HRJFd93InZVySmqwyPe3wbZ72czA&ehbc=2E312F"
      width="640"
      class="w-full h-full"
    />
  {/if}
</div>
