<!-- Bio -->
<script lang="ts">
  export let bio: any, theme: string;
  $: suffix = theme === 'dark' ? '-alt' : '';
</script>

<div class={'page-wrapper bio'}>
  <div class="content content-30-left content-left-bio">
    <div class="headshot-wrapper">
      <img
        class="switchable-img"
        id="headshot"
        src={`src/assets/images/headshot${suffix}.png`}
        title="Witness me!"
        alt="Headshot: Scott Silsbe, Cool Guy"
      />
    </div>
  </div>

  <section class="content content-70-right content-right-bio large-text">
    {@html bio.introHTML}
  </section>

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

<style lang="scss">
  @import '$styles/pages/bio.scss';
</style>
