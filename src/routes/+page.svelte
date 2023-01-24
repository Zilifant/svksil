<!-- App -->
<script lang="ts">
  import type { Theme, PageId, Animation } from '$lib/types';
  import type { PageData } from './$types';
  import { browser } from '$app/environment';
  import Wrap from '$components/Wrap.svelte';
  import Loading from '$components/Loading.svelte';
  import Header from '$components/Header.svelte';
  import Navbar from '$components/Navbar.svelte';
  import Footer from '$components/Footer.svelte';
  import Bio from '$pages/Bio.svelte';
  import Resume from '$pages/Resume.svelte';
  import Writing from '$pages/Writing.svelte';
  import Code from '$pages/Code.svelte';
  import { version, bio, res, code, writ, dark } from '$lib/constants';
  import { randFrom, getInitialPageId, rmPreloadCls } from '$lib/utilities';
  import '$styles/global.css';
  import '$styles/variables.scss';
  import '$styles/mixins.scss';
  import '$styles/global.scss';

  export let data: PageData;

  rmPreloadCls({ firstLoad: true });

  $: pageData = (page: PageId | null) => (!!page ? page : bio);
  $: themeData = (theme: Theme) => (!!theme ? theme : dark);
  $: ({ content } = data);
  $: quotes = content.quotes.quotes;
  $: quote = randFrom(quotes);
  $: loaded = !!content ? true : false;

  let page: PageId = getInitialPageId();
  let theme: Theme = browser ? localStorage.getItem('theme') : dark;
  let animation: Animation = 'fade';
</script>

<main
  class="main-wrapper"
  data-page={pageData(page)}
  data-theme={themeData(theme)}
>
  <Header bind:theme />

  <Navbar bind:page bind:quote bind:animation {quotes} />

  <div class="content-wrapper">
    <div class="transition-grid">
      {#if !loaded}
        <Loading {loaded} />
      {:else if page === res}
        <Wrap {animation}>
          <Resume res={content.resume} />
        </Wrap>
      {:else if page === writ}
        <Wrap {animation}>
          <Writing writing={content.writing} />
        </Wrap>
      {:else if page === code}
        <Wrap {animation}>
          <Code code={content.code} />
        </Wrap>
      {:else}
        <Wrap {animation}>
          <Bio bio={content.bio} theme={themeData(theme)} />
        </Wrap>
      {/if}
    </div>
  </div>

  <Footer {page} {quote} {version} socials={content?.socials} />
</main>
