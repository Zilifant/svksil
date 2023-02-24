<!-- database -->
<script lang="ts">
  import type { PageData } from './$types';
  import Wrap from '$components/Wrap.svelte';
  import List from '$pages/List.svelte';
  import list from './MOCK_DATA.json';

  // export let data: PageData;
  // $: weatherData = data.weatherData;
</script>

<Wrap><List data={list} /></Wrap>
