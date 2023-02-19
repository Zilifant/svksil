<!-- minimap button -->
<script lang="ts">
  import type { ExpeditionCard } from './cards';

  export let item: ExpeditionCard;
  export let idx: string | number;
  export let jumpToItem: Function;
  export let disabled: boolean;

  import './carousel.scss';

  $: id = idx.toString();
</script>

<button
  {id}
  class={`carousel-minimap-btn ${item.type}`}
  on:click={() => jumpToItem(idx)}
  {disabled}
>
  {item.title}
</button>
