<!-- Database -->
<script lang="ts">
  import { content } from '$lib/store';
  import * as db from '$lib/database-utilities';
  import '$styles/pages/database.scss';

  db.run();

  $: conData = $content.contentfulData;
  $: console.log(db, conData);
</script>

<div class="page-wrapper database">database</div>
