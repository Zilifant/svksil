<!-- Code -->
<script lang="ts">
  import type { CodeContent } from '$lib/types';
  import { content } from '$lib/store';
  import { dev } from '$app/environment';
  import { getItemField, getItemById, getImageSeries } from '$lib/utilities';
  import HeroCarousel from '$components/HeroCarousel.svelte';
  import Tooltip from '$components/Tooltip.svelte';
  import '$styles/pages/code.scss';

  let code: CodeContent;
  $: code = $content?.code;

  $: deception = getItemField('mhk', null, $content?.contentfulData);
  $: deceptionImgSeries = getItemById(
    deception?.imageSeries?.sys?.id,
    $content?.contentfulData,
  );
  $: deceptionImgData = getImageSeries(
    deceptionImgSeries?.fields?.images,
    $content?.contentfulData,
  );
</script>

<svelte:head>
  {#each deceptionImgData as { url }}
    <link rel="preload" as="image" href={url} />
  {/each}
</svelte:head>

<div class="page-wrapper code">
  <section>
    <p class="headline-text">{code.summary}</p>
  </section>

  {#each code.projects as project}
    <section class="code-project">
      {#if project.type === 'multi-section'}
        <HeroCarousel images={deceptionImgData} />
        <h3>{project.title}</h3>
        <div class="code-project-description">
          {#each project.description.split('\n') as line}
            <p>{line}</p>
          {/each}
        </div>

        {#each project.sections as section}
          <h3 class="code-project-sec-title">{section.title}</h3>

          <div class="code-project-description">
            {#each section.description.split('\n') as line}
              <p>{line}</p>
            {/each}
          </div>

          <div class="code-project-links">
            {#each section.links as { type, text, href, spec, displayUrl }}
              {#if spec}
                <Tooltip cls="gif" side="top">
                  <iframe
                    slot="tipContent"
                    src="https://giphy.com/embed/LycfkVG4L6x0Y"
                    width="480"
                    height="270"
                    frameBorder="0"
                    class="giphy-embed"
                    title="I don't know what I expected."
                    allowFullScreen
                  />
                  <div
                    slot="hoverContent"
                    class={`btn url-pseudo-btn spec ${type}-url`}
                  >
                    <span>{text}</span>
                    <span class="displayUrl">{displayUrl}</span>
                  </div>
                </Tooltip>
              {:else}
                <a
                  class={`btn url-pseudo-btn url ${type}-url`}
                  {href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{text}</span>
                  <span class="displayUrl">{displayUrl}</span>
                </a>
              {/if}
            {/each}
          </div>
        {/each}
      {:else}
        <h3>{project.title}</h3>
        <!-- <img
          class="hero-img"
          src={getHeroImageUrl(project.id, $content?.contentfulData)}
          alt={project.title}
        /> -->

        <div class="code-project-description">
          {#each project.description.split('\n') as line}
            <p>{line}</p>
          {/each}
        </div>

        <div class="code-project-links">
          {#each project.links as { type, text, href, spec, displayUrl }}
            {#if spec}
              <Tooltip cls="gif" side="top">
                <iframe
                  slot="tipContent"
                  src="https://giphy.com/embed/LycfkVG4L6x0Y"
                  width="480"
                  height="270"
                  frameBorder="0"
                  class="giphy-embed"
                  title="I don't know what I expected."
                  allowFullScreen
                />
                <div
                  slot="hoverContent"
                  class={`btn url-pseudo-btn spec ${type}-url`}
                >
                  <span>{text}</span>
                  <span class="displayUrl">{displayUrl}</span>
                </div>
              </Tooltip>
            {:else}
              <a
                class={`btn url-pseudo-btn url ${type}-url`}
                {href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{text}</span>
                <span class="displayUrl">{displayUrl}</span>
              </a>
            {/if}
          {/each}
        </div>
      {/if}
    </section>
  {/each}
</div>
