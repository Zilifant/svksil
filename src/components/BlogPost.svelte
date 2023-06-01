<!-- BlogPost -->
<script lang="ts">
  import type { BlogPost, SubSectionData } from '$lib/types';
  import type { Document, NodeData } from '@contentful/rich-text-types';
  import { BLOCKS } from '@contentful/rich-text-types';
  import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
  import { content } from '$lib/store';
  import { getParsedImageSeriesData, getItemById } from '$lib/utilities';
  import CodeSnippet from '$components/CodeSnippet.svelte';
  import CardCarousel from '$components/CardCarousel.svelte';
  import HeroCarousel from '$components/HeroCarousel.svelte';
  import Gallery from '$components/Gallery.svelte';
  import '$styles/pages/blog.scss';

  export let post: BlogPost;
  let subsections: SubSectionData[];

  const richTextOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ENTRY]: (node: NodeData) =>
        `EMBEDDED_ENTRY_ID=${node.data.target.sys.id}EMBEDDED_ENTRY`,
    },
  };

  function parseContentfulRichText(richtext: Document): SubSectionData[] {
    const conData = $content.contentfulData;

    const subSectionsString = documentToHtmlString(richtext, richTextOptions);
    const subSectionsArray = subSectionsString.split('EMBEDDED_ENTRY');
    const subSectionDataArray: SubSectionData[] = subSectionsArray.map(
      (str) => {
        if (str.startsWith('_ID=')) {
          const id = str.slice(4);
          const embeddedEntry = getItemById(id, conData);
          const contentType: string = embeddedEntry?.sys?.contentType?.sys?.id;

          if (contentType === 'imageSeries') {
            return {
              contentType,
              imageSeries: {
                uiComponent: embeddedEntry.fields.uiComponent,
                data: getParsedImageSeriesData(
                  embeddedEntry.fields.fid,
                  conData,
                ),
              },
            };
          }

          if (contentType === 'htmlCodeSnippet') {
            return { contentType, html: embeddedEntry.fields.html };
          }
        }

        return { contentType: 'html', html: str };
      },
    );

    return subSectionDataArray;
  }

  $: subsections = parseContentfulRichText(post.content);
</script>

<section class="blog-post">
  <h3>{post.title}</h3>
  <ul class="tags">
    {#each post.tags as tag}
      <li>{tag}</li>
    {/each}
  </ul>

  <div class="content">
    {#each subsections as subsec}
      {#if subsec?.contentType === 'html'}
        <div class="blog-subsection">{@html subsec?.html}</div>
      {:else if subsec?.contentType === 'htmlCodeSnippet'}
        <CodeSnippet snippetHTML={subsec?.html} cssClass="blog-subsection" />
      {:else if subsec?.contentType === 'imageSeries'}
        {#if subsec?.imageSeries?.uiComponent === 'cardCarousel'}
          <CardCarousel
            images={subsec?.imageSeries?.data}
            cssClass="blog-subsection"
          />
        {:else if subsec?.imageSeries?.uiComponent === 'heroCarousel'}
          <HeroCarousel
            images={subsec?.imageSeries?.data}
            cssClass="blog-subsection"
          />
        {:else}
          <Gallery
            images={subsec?.imageSeries?.data}
            cssClass="blog-subsection"
          />
        {/if}
      {:else}
        {null}
      {/if}
    {/each}
  </div>
</section>
