<!-- Database -->
<script lang="ts">
  // import * as db from '$lib/database-utilities';
  import List from '$components/ListApp/List.svelte';
  import '$styles/pages/database.scss';

  export let data: any;

  const list = {
    uid: 'asdf',
    name: 'mock list',
    items: [],
  };

  $: list.items = data;
</script>

<div class="page-wrapper database">
  <List {list} />
</div>
