<!-- image gallery -->
<script lang="ts">
  import type { ImageData } from '$lib/types';
  import { dev } from '$app/environment';
  import '$styles/components/gallery.scss';

  export let images: ImageData[] = [];
  export let cssClass: string = '';

  $: loadedImages = images.map((img) => ({ loaded: false, ...img }));

  $: setClassesFromMeta = (title: string, tags: string[] | undefined) => {
    const ttl = title.replaceAll(' ', '-') || '';
    if (!tags) return ttl;
    return `${ttl} ${tags.toString().replaceAll(',', ' ')}`;
  };

  const createLoadObserver = (handler: any) => {
    let waiting = 0;
    const onload = (el: any, url: string) => {
      waiting++;
      el.addEventListener('load', () => {
        waiting--;
        if (waiting === 0) {
          handler(url);
        }
      });
    };
    return onload;
  };

  const onLoad = createLoadObserver((URL: string) => {
    // console.log('loaded', URL);
    const loadedImg = loadedImages.find((img) => img.url === URL);
    if (loadedImg) loadedImg.loaded = true;
  });

  // $: console.log(loadedImages);

  // const preload = (src: string) => {
  //   console.log(src);
  //   return new Promise((resolve) => {
  //     let img = new Image();
  //     img.onload = resolve;
  //     img.src = src;
  //   });
  // };
</script>

<!-- <svelte:head>
  {#each images as { url }}
    <link rel="preload" as="image" href={url} />
  {/each}
</svelte:head> -->

{#if dev}
  <ul class={`${cssClass} img-gallery`}>
    {#each loadedImages as { loaded, url, title, alt, tags }}
      <li class={setClassesFromMeta(title, tags)}>
        {#if !loaded}
          <div>Loading...</div>
        {:else}
          <img use:onLoad={url} src={url} {title} {alt} />
        {/if}
        <!-- {#await preload(url) then _}
        <img src={url} {title} {alt} />
      {/await} -->
      </li>
    {/each}
  </ul>
{:else}
  <ul class={`${cssClass} img-gallery`}>
    {#each loadedImages as { url, title, alt, tags }}
      <li class={setClassesFromMeta(title, tags)}>
        <img src={url} {title} {alt} />
      </li>
    {/each}
  </ul>
{/if}
