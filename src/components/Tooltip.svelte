<!-- Tooltip -->
<script lang="ts">
  export let cls: string, side: string;
</script>

<div class={`ttip-parent ${cls}`}>
  <slot name="hoverContent" />
  <div class={`ttip ${side}`}>
    <slot name="tipContent" />
  </div>
</div>

<style lang="scss">
  @import '$styles/utility/tooltip.scss';
</style>
