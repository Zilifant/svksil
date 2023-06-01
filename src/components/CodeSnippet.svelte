<!-- CodeSnippet -->
<script lang="ts">
  export let snippetHTML: string = '';
  export let cssClass: string = '';
</script>

<div class={cssClass}>{@html snippetHTML}</div>
