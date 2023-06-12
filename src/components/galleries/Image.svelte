<!-- image -->
<script lang="ts">
  import type { ImageData } from '$lib/types';
  import { onMount } from 'svelte';

  export let image: ImageData | null = null;
  export let cssClass: string = '';
  export let dimensions: string[] = ['100%', '100%'];
  export let src: string = '';
  export let alt: string = '';
  export let title: string = '';
  export let id: string = '';

  let loading = false;
  let loaded = false;
  let failed = false;

  $: imageData = image ?? { url: src, alt, title, id };

  onMount(() => {
    const img = new Image();
    img.src = imageData.url;
    loading = true;

    img.onload = () => {
      loading = false;
      loaded = true;
    };

    img.onerror = () => {
      loading = false;
      failed = true;
    };
  });
</script>

{#if loaded}
  <img
    style:width={dimensions[0]}
    style:height={dimensions[1]}
    class={cssClass}
    src={imageData?.url}
    alt={imageData?.alt}
    title={imageData?.title}
  />
{:else if loading}
  <div
    style:width={dimensions[0]}
    style:height={dimensions[1]}
    class={`${cssClass} image-loading`}
  >
    <slot name="loading"><p>Loading...</p></slot>
  </div>
{:else if failed}
  <div
    style:width={dimensions[0]}
    style:height={dimensions[1]}
    class={`${cssClass} image-failed`}
  >
    <slot name="failed"><p>Failed</p></slot>
  </div>
{/if}

<style lang="scss">
  img {
    object-fit: contain;
    /* background-color: var(--chlg9); */
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    color: var(--text);
    /* background-color: var(--chlg7); */
  }
</style>
