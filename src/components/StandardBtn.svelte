<!-- standard button -->
<script lang="ts">
  export let classes: string = '';
  export let onClick: Function;
  export let isDisabled: boolean = false;
</script>

<button
  class={classes || ''}
  on:click|preventDefault={(event) => onClick(event)}
  disabled={isDisabled}
>
  <slot />
</button>

<style lang="scss">
  @import '../styles/mixins.scss';
  /* prettier-ignore */
  button {
    flex-grow: 1;
    border-radius: 24px;
    min-width: max-content;
    /* margin: 0.25rem 0 0.25rem 0.5rem;
    padding: 0.5rem; */
    border: var(--bdr1) solid rgba(255, 255, 255, 0.222);
    background: var(--res-item-bg);
    box-shadow: var(--shadow-bold);

    $t: var(--time);
    transition:
      color $t,
      background-color $t,
      border-color $t,
      opacity $t,
      transform $t,
      padding $t;

    & > * {
      position: relative;
      @include font-adjust();
      @include colorfade();
    }

    &.highlight {
      background: var(--skill-bg-highlight);
      border-color: var(--skill-bg-highlight);
      & > * {
        color: var(--white);
      }
    }

    &:hover:not(.highlight):not(:disabled) {
      border-color: var(--accent-hover);
    }

    &:disabled:not(.no-disabled-styling) {
      opacity: 0.5;
      cursor: default;
    }
  }
</style>
