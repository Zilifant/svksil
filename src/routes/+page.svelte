<!-- App -->
<script lang="ts">
  import type { Theme, PageId, Animation, Quote } from '$lib/types';
  import type { PageData } from './$types';
  import { browser } from '$app/environment';
  import Wrap from '$components/Wrap.svelte';
  import Header from '$components/Header.svelte';
  import Navbar from '$components/Navbar.svelte';
  import Footer from '$components/Footer.svelte';
  import Bio from '$pages/Bio.svelte';
  import Resume from '$pages/Resume.svelte';
  import Writing from '$pages/Writing.svelte';
  import Code from '$pages/Code.svelte';
  import { content } from '$lib/store';
  import { version, res, code, writ, dark } from '$lib/constants';
  import { sample, getInitialPageId } from '$lib/utilities';
  import '$styles/variables.scss';
  import '$styles/mixins.scss';
  import '$styles/global.scss';

  export let data: PageData;

  let quotes: Quote[];
  let quote: Quote;
  let page: PageId = getInitialPageId();
  let theme: Theme = browser ? localStorage.getItem('theme') : dark;
  let animation: Animation = 'fade';

  $: ({ record } = data);
  $: content.set(record);
  $: quotes = record.quotes.quotes;
  $: quote = sample(quotes);
  $: socials = record.socials;
</script>

<main class="main-wrapper" data-page={page} data-theme={theme}>
  <Header bind:theme />

  <Navbar bind:page bind:quote bind:animation {quotes} />

  <div class="content-wrapper">
    <div class="transition-grid">
      {#if page === res}
        <Wrap {animation}>
          <Resume />
        </Wrap>
      {:else if page === writ}
        <Wrap {animation}>
          <Writing />
        </Wrap>
      {:else if page === code}
        <Wrap {animation}>
          <Code />
        </Wrap>
      {:else}
        <Wrap {animation}>
          <Bio {theme} />
        </Wrap>
      {/if}
    </div>
  </div>

  <Footer {page} {quote} {version} {socials} />
</main>
