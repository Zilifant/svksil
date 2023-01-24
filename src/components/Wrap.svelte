<!--
When switching pages, previous page's content fades out while new page's content flys in
from right or left, depending on the pages' relative positions in the navbar.
-->
<script lang="ts">
  import { fly, fade } from 'svelte/transition';
  import '$styles/components/wrap.scss';

  export let animation: string;

  const flyDistance = 3000;
  const flyVector = animation === 'flyLeft' ? flyDistance : -flyDistance;
  const flyInDelay = 0;
  const flyInDuration = 500;

  const fadeInDelay = 200;
  const fadeInDuration = 200;
  const fadeOutDuration = 200;
</script>

<!-- Wrapper -->

{#if animation === 'fade'}
  <div
    class="transition-wrapper"
    in:fade={{ delay: fadeInDelay, duration: fadeInDuration }}
    out:fade={{ duration: fadeOutDuration }}
  >
    <slot />
  </div>
{:else}
  <div
    class="transition-wrapper"
    in:fly={{ x: flyVector, delay: flyInDelay, duration: flyInDuration }}
    out:fade={{ duration: fadeOutDuration }}
  >
    <slot />
  </div>
{/if}
