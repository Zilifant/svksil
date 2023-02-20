<!-- image gallery -->
<script lang="ts">
  import type { ImageData } from '$lib/types';
  import '$styles/components/gallery.scss';

  export let images: ImageData[];

  $: setClassesFromMeta = (title: string, tags: string[] | undefined) => {
    const ttl = title.replaceAll(' ', '-') || '';
    if (!tags) return ttl;
    return `${ttl} ${tags.toString().replaceAll(',', ' ')}`;
  };
</script>

<ul class="img-gallery">
  {#each images as { url, title, alt, tags }}
    <li class={setClassesFromMeta(title, tags)}>
      <img src={url} {title} {alt} />
    </li>
  {/each}
</ul>
