<!-- Blog -->
<script lang="ts">
  import type { BlogPost } from '$lib/types';
  import { dev } from '$app/environment';
  import { content } from '$lib/store';
  import { parseBlogPosts } from '$lib/utilities';
  import Post from '$components/BlogPost.svelte';
  import '$styles/pages/blog.scss';

  let posts: BlogPost[];
  $: posts = parseBlogPosts($content?.contentfulData);
</script>

<div class="page-wrapper blog">
  {#if !dev}
    <section class="headline">
      <p class="headline-text">Page Failed Successfully!</p>
      <br />
      <p class="headline-text">
        I'm currently updating and redesigning the blog.<br />It'll be back
        soon.
      </p>
    </section>
  {:else}
    <section class="headline">
      <h1>Not for Production</h1>
      <h6>a blog or something</h6>
    </section>

    {#each posts as post}
      <Post {post} />
    {/each}
  {/if}
</div>
