<!-- Navbar -->
<script lang="ts">
  import type { PageId, Quote, Animation, DropNavState } from '$lib/types';
  import { pages } from '$lib/constants';
  import { setFlyDirection, sample } from '$lib/utilities';
  import '$styles/components/navbar.scss';

  export let page: PageId, quote: Quote, quotes: Quote[], animation: Animation;

  let prevPage: PageId;
  let dropNavState: DropNavState = 'hidden';

  $: isCurrentPage = (pg: PageId) => (pg === page ? 'current' : '');
  $: isPrevPage = (pg: PageId) => (pg === prevPage ? 'prev' : 'not-prev');

  function switchPage(newPage: any) {
    // If link to current page triggered, do nothing.
    if (newPage === page) return;

    // Update state.
    prevPage = page;
    page = newPage;
    animation = setFlyDirection(prevPage, page);
    quote = sample(quotes);

    // If viewing dropNav, minimize it.
    if (document.documentElement.clientWidth <= 600) toggleDropNav();
  }

  function toggleDropNav() {
    if (dropNavState === 'hidden') return (dropNavState = 'visible');
    dropNavState = 'hidden';
  }
</script>

<nav class="main-nav">
  {#each pages as { id }}
    <a
      class={`main-nav-item mni-${id} ${isPrevPage(id)} ${isCurrentPage(id)}`}
      href={`#${id}`}
      on:click={() => switchPage(id)}>{id}</a
    >
  {/each}
  <div class="drop-nav">
    <button class="drop-nav-btn" on:click|preventDefault={toggleDropNav}>
      <div class="drop-nav-btn-icon">
        <div class="drop-nav-btn-icon-bar" />
        <div class="drop-nav-btn-icon-bar" />
        <div class="drop-nav-btn-icon-bar" />
      </div>
      <div class="drop-nav-title">Scott Silsbe</div>
    </button>
    <div class={`drop-nav-items ${dropNavState}`}>
      {#each pages as { id }}
        <a
          class={`drop-nav-item ${isPrevPage(id)} ${isCurrentPage(id)}`}
          href={`#${id}`}
          on:click={() => switchPage(id)}><div>{id}</div></a
        >
      {/each}
    </div>
  </div>
</nav>
