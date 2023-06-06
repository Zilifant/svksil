<!-- image grid -->
<script lang="ts">
  import type { ImageData } from '$lib/types';

  export let images: ImageData[] = [];
  export let cssClass: string = '';
  export let columns: number = 3;
  export let squareSize: number | null = null;
  export let columnSize: string | number = 'auto';
  export let rowSize: string | number = 'auto';
  export let gap: string | number = '10px';
  export let padding: string | number = '10px';
  export let background: string = 'black';

  let selectedId: string | null = null;

  const toggleSelection = (id?: string) => {
    if (!id) return;
    if (selectedId === id) {
      return (selectedId = null);
    }
    if (selectedId === null) {
      return (selectedId = id);
    }
    return;
  };

  const parseCSSValue = (val: string | number) =>
    typeof val === 'number' ? `${val.toString()}px` : val;

  $: columnSize = squareSize ? `${squareSize}px` : parseCSSValue(columnSize);
  $: rowSize = squareSize ? `${squareSize}px` : parseCSSValue(rowSize);
  $: gap = parseCSSValue(gap);
  $: padding = parseCSSValue(padding);
</script>

<ul
  class={cssClass}
  style:grid-template-columns={`repeat(${columns}, ${columnSize})`}
  style:gap
  style:padding
  style:background
>
  {#each images as { url, title, alt, id }}
    <li class={id === selectedId ? 'selected' : ''} {id} style:height={rowSize}>
      <button on:click={() => toggleSelection(id)}>
        <img src={url} {title} {alt} />
      </button>
    </li>
  {/each}
</ul>

<style lang="scss">
  ul {
    list-style: none;
    display: grid;

    & li {
      &.selected {
        & button {
          & img {
            width: max-content !important;
            height: max-content !important;
            /* z-index: 9; */
          }
        }
      }

      & button {
        background: var(--para9);
        display: block;
        width: 100%;
        height: 100%;

        & img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }
</style>
