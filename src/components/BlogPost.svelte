<!-- BlogPost -->
<script lang="ts">
  import type { BlogPost, CfItem, SubSectionData, ImageData } from '$lib/types';
  import type { Document, NodeData } from '@contentful/rich-text-types';
  import { BLOCKS } from '@contentful/rich-text-types';
  import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
  import { content } from '$lib/store';
  import {
    getParsedImageSeriesData,
    getItemById,
    getImage,
  } from '$lib/utilities';
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
        `EMBEDDED_ITEM&TYPE=ENTRY&ID=${node.data.target.sys.id}EMBEDDED_ITEM`,
      [BLOCKS.EMBEDDED_ASSET]: (node: NodeData) =>
        `EMBEDDED_ITEM&TYPE=ASSET&ID=${node.data.target.sys.id}EMBEDDED_ITEM`,
    },
  };

  function parseContentfulRichText(richtext: Document): SubSectionData[] {
    const conData = $content.contentfulData;

    const subSectionsString = documentToHtmlString(richtext, richTextOptions);
    const subSectionsArray = subSectionsString.split('EMBEDDED_ITEM');
    const subSectionDataArray: SubSectionData[] = subSectionsArray.map(
      (str) => {
        if (str.startsWith('&TYPE=')) {
          const blockType = str.slice(6, 11); // ASSET or ENTRY
          const id = str.slice(15); // node.data.target.sys.id

          if (blockType === 'ENTRY') {
            const entry: CfItem = getItemById(id, conData);
            const contentType: string = entry?.sys?.contentType?.sys?.id;

            if (contentType === 'imageSeries') {
              return {
                contentType,
                imageSeries: {
                  uiComponent: entry.fields.uiComponent,
                  data: getParsedImageSeriesData(entry.fields.fid, conData),
                },
              };
            }

            if (contentType === 'htmlCodeSnippet') {
              return { contentType, html: entry.fields.html };
            }
          }

          if (blockType === 'ASSET') {
            return {
              contentType: 'image',
              image: getImage(id, conData),
            };
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
      {:else if subsec?.contentType === 'image'}
        <div class="blog-subsection">
          <img
            src={subsec?.image?.url}
            alt={subsec?.image?.title}
            title={subsec?.image?.title}
          />
        </div>
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
