<!-- carousel button -->
<script lang="ts">
  export let forward: boolean;
  export let spinCarousel: Function;

  import './carousel.scss';
</script>

<button
  class={`carousel-btn ${forward ? 'forward' : 'back'}`}
  on:click={() => spinCarousel(forward ? 1 : -1)}
>
  <!-- <SVGIcon icon={'chevronRight'} /> -->
  #
</button>
