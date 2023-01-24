<!--
Displayed in main content section while waiting for page data to load from content server.
-->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import '$styles/components/loading.scss';

  export let loaded: boolean;

  const delayIn = 0;
  const durationIn = 0;
  const delayOut = 0;
  const durationOut = 200;
</script>

<!-- Loading Overlay -->

<div
  class="transition-wrapper"
  in:fade={{ delay: delayIn, duration: durationIn }}
  out:fade={{ delay: delayOut, duration: durationOut }}
>
  <div class={`page-wrapper loading-grid ${loaded ? 'loaded' : ''}`}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
</div>
