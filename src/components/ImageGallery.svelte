<!-- image grid -->
<script lang="ts">
  import type { ImageData } from '$lib/types';
  import '$styles/components/image-gallery.scss';

  type IndexedImgData = ImageData & { idx: number };

  export let images: ImageData[] = [];
  export let cssClass: string = '';

  const numOfImages: number = images.length;

  let currentImgIndex: number = 0;

  $: indexedImgs = images.map((img, i) => ({ ...img, idx: i }));

  const setCurrent = (val: number | 'next' | 'prev') => {
    if (typeof val === 'number') return (currentImgIndex = val);
    if (val === 'next') return currentImgIndex++;
    if (val === 'prev') return currentImgIndex--;
  };

  $: getVisibleImages = (usePlaceholders = false): IndexedImgData[] => {
    if (usePlaceholders) {
      const placeholderImgData: IndexedImgData = {
        id: 'placeholder',
        url: '',
        alt: '',
        title: '',
        idx: 0,
      };

      return [
        currentImgIndex - 3 < 0
          ? placeholderImgData
          : indexedImgs[currentImgIndex - 3],
        currentImgIndex - 2 < 0
          ? placeholderImgData
          : indexedImgs[currentImgIndex - 2],
        currentImgIndex - 1 < 0
          ? placeholderImgData
          : indexedImgs[currentImgIndex - 1],
        currentImgIndex + 1 > indexedImgs.length - 1
          ? placeholderImgData
          : indexedImgs[currentImgIndex + 1],
        currentImgIndex + 2 > indexedImgs.length - 1
          ? placeholderImgData
          : indexedImgs[currentImgIndex + 2],
        currentImgIndex + 3 > indexedImgs.length - 1
          ? placeholderImgData
          : indexedImgs[currentImgIndex + 3],
      ];
    }

    const firstIndex = currentImgIndex < 4 ? 0 : currentImgIndex - 3;
    const lastIndex = numOfImages - 1;
    const start = lastIndex - currentImgIndex >= 3 ? firstIndex : lastIndex - 6;
    const end = start + 7;
    return indexedImgs.slice(start, end);
  };

  $: visibleImgs = getVisibleImages();
</script>

<div class={`wrapper ${cssClass}`}>
  <div class="current-img-wrapper">
    <img
      class="current"
      src={images[currentImgIndex].url}
      title={images[currentImgIndex].title}
      alt={images[currentImgIndex].alt}
    />
    <p class="current-index-display">
      {`${currentImgIndex + 1} / ${numOfImages}`}
    </p>
  </div>
  <ul>
    <div class="nav-buttons-wrapper">
      <button
        on:click={() => setCurrent('prev')}
        disabled={currentImgIndex === 0}
      >
        {'Prev'}
      </button>
      <button on:click={() => setCurrent(0)} disabled={currentImgIndex === 0}>
        {'Start'}
      </button>
    </div>
    {#each visibleImgs as { url, title, alt, id, idx }}
      {#if id === 'placeholder'}
        <li class="placeholder" />
      {:else}
        <li {id}>
          <button
            on:click={() => setCurrent(idx)}
            disabled={currentImgIndex === idx}
          >
            <img src={url} {title} {alt} />
          </button>
        </li>
      {/if}
    {/each}
    <div class="nav-buttons-wrapper">
      <button
        on:click={() => setCurrent('next')}
        disabled={currentImgIndex === numOfImages - 1}
      >
        {'Next'}
      </button>
      <button
        on:click={() => setCurrent(numOfImages - 1)}
        disabled={currentImgIndex === numOfImages - 1}
      >
        {'End'}
      </button>
    </div>
  </ul>
</div>
