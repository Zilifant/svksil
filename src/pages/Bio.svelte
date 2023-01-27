<!-- Bio -->
<script lang="ts">
  import type { BioContent } from '$lib/types';
  import { dev } from '$app/environment';
  import { content, theme } from '$lib/store';
  import { dark } from '$lib/constants';
  import '$styles/pages/bio.scss';

  let bio: BioContent;
  $: bio = $content?.bio;

  $: prefix = dev ? '-dev' : '';
  $: suffix = $theme === dark ? '-alt' : '';
</script>

<div class="page-wrapper bio">
  <div class="content content-left">
    <div class="headshot-wrapper">
      <img
        class="switchable-img"
        id="headshot"
        src={`src/assets/images/headshot${prefix}${suffix}.png`}
        title="Witness me!"
        alt="Headshot: Scott Silsbe, Cool Guy"
      />
    </div>
  </div>

  <section class="content content-right large-text">
    {@html bio.introHTML}
  </section>

  <section class="partner-logo-grid">
    {#each bio.partners as { id, alt }}
      <div class="partner-logo-wrapper">
        <img
          class="switchable-img"
          src={`src/assets/images/${id}${suffix}.png`}
          {id}
          {alt}
        />
      </div>
    {/each}
  </section>
</div>
