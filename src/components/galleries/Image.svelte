<!-- image -->
<script lang="ts">
  import type { ImageData } from '$lib/types';
  import { onMount } from 'svelte';

  type Dimensions = {
    x: string | number | null;
    y: string | number | null;
  };

  export let image: ImageData | null = null;
  export let cssClass: string = '';
  export let dimensions: Dimensions = { x: null, y: null };
  export let src: string = '';
  export let alt: string = '';
  export let title: string = '';
  export let id: string = '';

  let img: HTMLImageElement;
  let loading = false;
  let loaded = false;
  let failed = false;

  let hasMounted = false;
  onMount(() => (hasMounted = true));

  $: {
    if (hasMounted) {
      loaded = false;
      loading = true;

      img = new Image();
      img.src = imageData?.url;

      img.onload = () => {
        loaded = true;
        loading = false;
      };

      img.onerror = () => {
        loading = false;
        failed = true;
      };
    }
  }

  $: imageData = image ?? { url: src, alt, title, id };
  $: width =
    typeof dimensions.x === 'number' ? `${dimensions.x}px` : dimensions.x;
  $: height =
    typeof dimensions.y === 'number' ? `${dimensions.y}px` : dimensions.y;
</script>

{#if loaded}
  <img
    style:width
    style:height
    class={cssClass}
    src={imageData?.url}
    alt={imageData?.alt}
    title={imageData?.title}
  />
{:else if loading}
  <div style:width style:height class={`${cssClass} image-loading`}>
    <slot name="loading">
      <p>Loading...</p>
    </slot>
  </div>
{:else if failed}
  <div style:width style:height class={`${cssClass} image-failed`}>
    <slot name="failed"><div /></slot>
  </div>
{/if}

<style lang="scss">
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    color: var(--text);
  }
</style>
