<script lang="ts">
  import type { PageId, Quote } from '$lib/types';
  import type { LayoutData } from './$types';
  import { page } from '$app/stores';
  import Header from '$components/Header.svelte';
  import Navbar from '$components/Navbar.svelte';
  import Footer from '$components/Footer.svelte';
  import { content, theme } from '$lib/store';
  import { version, dark } from '$lib/constants';
  import { sample, setInitialPageId, getItemField } from '$lib/utilities';
  import '$styles/variables.scss';
  import '$styles/mixins.scss';
  import '$styles/global.scss';

  export let data: LayoutData;

  let quotes: Quote[];
  let quote: Quote;
  let pageId: PageId = setInitialPageId($page?.route?.id);

  $: ({ contentfulData, themeCookie } = data);
  $: contentfulJSON = getItemField(
    'content master json',
    'webAllContent',
    contentfulData,
  );
  $: content.set({ contentfulData, ...contentfulJSON });
  $: theme.set(themeCookie || dark);
  $: quotes = contentfulJSON?.quotes?.quotes;
  $: quote = sample(quotes);
  $: socials = contentfulJSON?.socials;
</script>

<main class="main-wrapper" data-page={pageId} data-theme={$theme}>
  <div class="fixed-bg" />

  <Header />

  <Navbar bind:pageId bind:quote {quotes} />

  <div class="transition-grid-wrapper">
    <div class="transition-grid">
      <slot />
    </div>
  </div>

  <Footer {pageId} {quote} {version} {socials} />
</main>
