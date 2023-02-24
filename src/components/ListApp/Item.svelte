<!-- list item -->
<script lang="ts">
  export let item: any;
</script>

<li>
  <span>{item?.status}</span>
  <span>{item?.priority}</span>
  <span>{item?.name}</span>
  <span>{item?.tags}</span>
  <span>{item?.created}</span>
</li>
