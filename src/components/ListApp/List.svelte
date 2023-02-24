<!-- list -->
<script lang="ts">
  import Item from './Item.svelte';
  export let list: any;

  // $: name = list?.name;
  $: items = list?.items;
</script>

<ul>
  {#each items as item}
    <Item {item} />
  {/each}
</ul>
