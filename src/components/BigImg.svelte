<!-- big image -->
<script lang="ts">
  import type { ImageData } from '$lib/types';
  export let image: ImageData;
  export let wrap: boolean = false;
  export let classes: string = '';

  $: classNames = `${image?.title} ${classes}`;
</script>

{#if wrap}
  <div class={`big-img-wrapper ${classNames}`}>
    <img src={image?.url} alt={image?.title} title={image?.title} />
  </div>
{:else}
  <img
    class={`big-img ${classNames}`}
    src={image?.url}
    alt={image?.title}
    title={image?.title}
  />
{/if}

<style lang="scss">
  @import '../styles/mixins.scss';

  $frameBg: var(--res-item-bg);

  img {
    display: block;
  }

  img.paper {
    @include paperShadow();
  }

  div.big-img-wrapper {
    &.full-width {
      width: 100vw;

      & > img {
        width: 100vw;
      }

      &.framed {
        padding: 2vw;
        background: $frameBg;

        & > img {
          width: 96vw;
          box-shadow: var(--boxShadowBold);
          border-radius: var(--rad3);
        }
      }
    }

    & > img {
      width: 100%;
    }
  }

  img.big-img {
    width: 100%;

    &.full-width {
      width: 100vw;

      &.framed {
        padding: 2vw;
        background: $frameBg;
        box-shadow: var(--boxShadowBold);
      }
    }
  }
</style>
