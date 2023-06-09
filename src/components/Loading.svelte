<!--
Displayed in main content section while waiting for page data to load from content server.
-->
<script lang="ts">
  import { fade } from 'svelte/transition';

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

<style lang="scss">
  @keyframes loading-grid {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  .loading-grid.loaded {
    display: none;
  }

  .loading-grid {
    display: flex;
    position: relative;
    width: 80px;
    height: 80px;

    & div {
      position: absolute;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: var(--text);
      animation: loading-grid 1.2s linear infinite;

      &:nth-child(1) {
        top: 8px;
        left: 8px;
        animation-delay: 0s;
      }
      &:nth-child(2) {
        top: 8px;
        left: 32px;
        animation-delay: -0.4s;
      }
      &:nth-child(3) {
        top: 8px;
        left: 56px;
        animation-delay: -0.8s;
      }
      &:nth-child(4) {
        top: 32px;
        left: 8px;
        animation-delay: -0.4s;
      }
      &:nth-child(5) {
        top: 32px;
        left: 32px;
        animation-delay: -0.8s;
      }
      &:nth-child(6) {
        top: 32px;
        left: 56px;
        animation-delay: -1.2s;
      }
      &:nth-child(7) {
        top: 56px;
        left: 8px;
        animation-delay: -0.8s;
      }
      &:nth-child(8) {
        top: 56px;
        left: 32px;
        animation-delay: -1.2s;
      }
      &:nth-child(9) {
        top: 56px;
        left: 56px;
        animation-delay: -1.6s;
      }
    }
  }
</style>
