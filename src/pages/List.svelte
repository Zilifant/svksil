<!-- List -->
<script lang="ts">
  // import * as db from '$lib/list-utilities';
  import List from '$components/ListApp/List.svelte';
  import '$styles/pages/list.scss';

  export let data: any;

  const list = {
    uid: 'asdf',
    name: 'mock list',
    items: [],
  };

  $: list.items = data;
</script>

<div class="page-wrapper list">
  <List {list} />
</div>
