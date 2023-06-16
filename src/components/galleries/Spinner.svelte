<!-- loading spinner -->
<script lang="ts">
  import RoundHexagon from '$components/svgs/RoundHexagon.svelte';
  // import { fade } from 'svelte/transition';

  export let showBackground: boolean = false;

  // const delayIn = 0;
  // const durationIn = 0;
  // const delayOut = 0;
  // const durationOut = 200;
  // in:fade={{ delay: delayIn, duration: durationIn }}
  // out:fade={{ delay: delayOut, duration: durationOut }}
</script>

<div class={`wrapper ${showBackground ? 'background' : ''}`}>
  <div class="spinner">
    <RoundHexagon fill={'var(--para4)'} />
  </div>
</div>

<style lang="scss">
  @keyframes rotate {
    0% {
      transform: rotate(0turn);
    }
    100% {
      transform: rotate(1turn);
    }
  }

  div.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    height: 100%;
    width: 100%;

    &.background {
      border-radius: var(--rad);
      background: var(--res-item-bg);
      box-shadow: var(--shadow);
    }
  }

  div.spinner {
    height: 50px;
    width: 50px;

    /* background-color: var(--para6); */
    opacity: 0.5;

    animation: rotate 2000ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
    animation-iteration-count: infinite;
  }
</style>
