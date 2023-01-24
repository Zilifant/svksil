<!-- Tooltip -->
<script lang="ts">
  import '$styles/components/tooltip.scss';
  export let cls: string, side: string;
</script>

<div class={`ttip-parent ${cls}`}>
  <slot name="hoverContent" />
  <div class={`ttip ${side}`}>
    <slot name="tipContent" />
  </div>
</div>
