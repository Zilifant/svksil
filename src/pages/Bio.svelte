<!-- Bio -->
<script lang="ts">
  import type { BioContent, ContentfulData } from '$lib/types';
  import { parseMarkdown } from '$lib/utilities';
  import { content, theme } from '$lib/store';
  import { dark } from '$lib/constants';
  import '$styles/pages/bio.scss';

  export let contentfulData: ContentfulData;
  $: introHTML = parseMarkdown(contentfulData?.items[0]?.fields?.introHtml);

  let bio: BioContent;
  $: bio = $content?.bio;

  const partnersSectionTitle = "Who I've worked with...";

  $: suffix = $theme === dark ? '-alt' : '';
</script>

<div class="page-wrapper bio">
  <section class="intro-content-grid">
    <div class="intro-text-wrapper large-text">
      {@html introHTML}
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
