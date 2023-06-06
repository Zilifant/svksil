<!-- Design -->
<script lang="ts">
  import { content } from '$lib/store';
  import { dev } from '$app/environment';
  import {
    getAssetSeries,
    getParsedImageSeriesData,
    filterParsedImageSeriesData,
  } from '$lib/utilities';

  import HeroCarousel from '$components/HeroCarousel.svelte';
  import CardCarousel from '$components/CardCarousel.svelte';
  import Gallery from '$components/Gallery.svelte';
  import ImageGrid from '$components/ImageGrid.svelte';
  import ImageGallery from '$components/ImageGallery.svelte';
  import BigImg from '$components/BigImg.svelte';

  import '$styles/pages/design.scss';

  const otherImages = ['Future Tense One Sheet for web', 'helios-map-padded'];
  const placeholderText =
    '<p class="headline-text">Some my past graphic design work.</p><p class="headline-text">This page is a work in progress.</p>';

  $: conData = $content.contentfulData;

  $: crisisPdfs = getAssetSeries('crisis pdfs', 'documents', conData);
  $: crisisPdfUrl = crisisPdfs.map((pdf) => 'https:' + pdf.fields.file.url)[0];

  $: allImages = getParsedImageSeriesData('graphic design', conData);
  $: bsCards = getParsedImageSeriesData('battlespace cards', conData);
  $: cuCards = getParsedImageSeriesData('crisis cards', conData);
  $: cuMaps = getParsedImageSeriesData('crisis maps', conData);
  $: exCards = getParsedImageSeriesData('expedition carousel cards', conData);
  $: bbpPosters = getParsedImageSeriesData('bbp posters', conData);
  $: miscImgs = filterParsedImageSeriesData(allImages, otherImages);
  $: ftOneSheet = miscImgs[0];
  $: heliosMap = miscImgs[1];
</script>

<div class="page-wrapper design">
  {#if dev}
    <ImageGallery images={allImages} />
  {/if}
  <section class="content">
    {@html placeholderText}
  </section>
  <Gallery images={[ftOneSheet]} />
  <BigImg image={heliosMap} wrap={false} classes="full-width" />
  <HeroCarousel images={bbpPosters} wrap={true} />
  <div class="embed-wrapper">
    <embed class="crisis-rules" src={crisisPdfUrl} type="application/pdf" />
  </div>
  <ul>
    {#each cuMaps as map}
      <li style={'margin-bottom: 5px'}>
        <BigImg image={map} wrap={true} classes="full-width" />
      </li>
    {/each}
  </ul>
  <CardCarousel images={exCards} />
  <CardCarousel images={bsCards} />
  <CardCarousel images={cuCards} />
</div>
