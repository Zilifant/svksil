<!-- Bio -->
<script lang="ts">
  import type { BioContent } from '$lib/types';
  import { dev } from '$app/environment';
  import { content, theme } from '$lib/store';
  import { dark } from '$lib/constants';
  import '$styles/pages/bio.scss';

  let bio: BioContent;
  $: bio = $content?.bio;

  const summaryHTML = `<p>Hello, I'm Scott.</p><p>I design, produce, and run large-scale live gaming events. Or rather, I did. Then 2020 happened. &#x1F610;</p><p>While I continue to explore opportunities in the events space, my focus is now full-stack web development.</p>`;
  const partnersSectionTitle = " Who I've worked with...";

  $: suffix = $theme === dark ? '-alt' : '';
</script>

<div class="page-wrapper bio">
  <section class="intro-content-grid">
    <div class="intro-text-wrapper large-text">
      <!-- {@html bio.introHTML} -->
      {@html summaryHTML}
    </div>
    <div class="headshot-wrapper">
      <img
        class="switchable-img"
        id="headshot"
        src={`src/assets/images/headshot.png`}
        title="Witness me!"
        alt="Headshot: Scott Silsbe, Cool Guy"
      />
    </div>
  </section>

  <h2 class="partner-section-title large-text">{partnersSectionTitle}</h2>
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
