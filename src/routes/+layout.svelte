<!-- layout -->
<script lang="ts">
  import Header from '$components/Header.svelte';
  import Nav from '$components/Nav.svelte';
  import Footer from '$components/Footer.svelte';
  import '$styles/colors.css';
  import '$styles/reset.css';
</script>

<Header />
<Nav />
<main>
  <slot />
</main>
<Footer />
