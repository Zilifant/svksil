<!-- image gallery -->
<script lang="ts">
  import type { ImageData } from '$lib/types';
  import '$styles/components/gallery.scss';

  export let images: ImageData[];

  $: setClassesFromTags = (tags: string[] | undefined) => {
    if (!tags) return '';
    return tags.toString().replaceAll(',', ' ');
  };
</script>

<ul class="img-gallery">
  {#each images as { url, title, alt, tags }}
    <li class={setClassesFromTags(tags)}>
      <img src={url} {title} {alt} />
    </li>
  {/each}
</ul>
