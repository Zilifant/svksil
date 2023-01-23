<!-- layout -->
<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '$styles/colors.css';
  import '$styles/reset.css';
</script>

<Header />
<Nav />
<main>
  <slot />
</main>
<Footer />
