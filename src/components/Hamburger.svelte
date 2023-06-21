<script>
  import { fade } from "svelte/transition";
  let isNavOpen = false;
  function toggleNav() {
    isNavOpen = !isNavOpen;
  }
</script>

{#if isNavOpen}
  <nav
    class="p-8 left-0 right-0 bottom-0 top-0 fixed z-30 bg-zinc-900 w-full h-full"
    transition:fade={{ duration: 150 }}
  >
    <!-- Div to allow close on click anywhere -->
    <ul class="flex flex-col gap-8 items-end z-40">
      <li>
        <button
          on:click={toggleNav}
          class="bg-red-500 text-gray-50 w-8 h-8 rounded border-none text-3xl cursor-pointer font-bold flex justify-center items-center"
          >&times;</button
        >
      </li>
      <li>
        <a
          href="/"
          class="text-3xl text-zinc-50 font-stencil font-bold uppercase hover:text-red-600"
          >Home</a
        >
      </li>
      <li>
        <a
          href="/schedule"
          class="text-3xl text-zinc-50 font-stencil font-bold uppercase hover:text-red-600"
          >Schedule</a
        >
      </li>
      <li>
        <a
          href="/events"
          class="text-3xl text-zinc-50 font-stencil font-bold uppercase hover:text-red-600"
          >Upcoming Events</a
        >
      </li>
      <li>
        <a
          href="https://f3nation.com"
          class="text-3xl text-zinc-50 font-stencil font-bold uppercase hover:text-red-600"
          >F3 Nation</a
        >
      </li>
    </ul>
    <div on:click={toggleNav} class=" w-full h-full absolute z-0" />
  </nav>
{:else}
  <button on:click={toggleNav}
    ><img
      class="h-8 w-8 m-0 border-none"
      alt="menu-icon"
      src="/menu.svg"
    /></button
  >
{/if}
