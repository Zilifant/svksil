<!-- root route -->
<script lang="ts">
  import type { PageData } from './$types';
  import Wrap from '$components/Wrap.svelte';
  import Bio from '$pages/Bio.svelte';

  export let data: PageData;
  $: ({ contentfulData } = data);
</script>

<Wrap><Bio {contentfulData} /></Wrap>
