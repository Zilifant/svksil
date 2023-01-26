<!-- root layout -->
<script lang="ts">
  import type { Theme, PageId, Quote } from '$lib/types';
  import type { LayoutData } from './$types';
  import { page } from '$app/stores';
  import Header from '$components/Header.svelte';
  import Navbar from '$components/Navbar.svelte';
  import Footer from '$components/Footer.svelte';
  import { content, isDarkMode } from '$lib/store';
  import { version, dark } from '$lib/constants';
  import { sample, setTheme, setInitialPageId } from '$lib/utilities';
  import '$styles/variables.scss';
  import '$styles/mixins.scss';
  import '$styles/global.scss';

  export let data: LayoutData;

  let quotes: Quote[];
  let quote: Quote;
  let pageId: PageId = setInitialPageId($page?.route?.id);
  let theme: Theme = setTheme();

  $: ({ record } = data);
  $: content.set(record);
  $: isDarkMode.set(theme === dark);
  $: quotes = record.quotes.quotes;
  $: quote = sample(quotes);
  $: socials = record.socials;
</script>

<main class="main-wrapper" data-page={pageId} data-theme={theme}>
  <Header bind:theme />

  <Navbar bind:pageId bind:quote {quotes} />

  <div class="content-wrapper">
    <div class="transition-grid">
      <slot />
    </div>
  </div>

  <Footer {pageId} {quote} {version} {socials} />
</main>
