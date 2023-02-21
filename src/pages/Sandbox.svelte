<!-- Sandbox -->
<script lang="ts">
  import Gallery from '$components/Gallery.svelte';
  import { content } from '$lib/store';
  import {
    getImageSeries,
    getItemField,
    getAssetSeries,
    getParsedImageSeriesData,
  } from '$lib/utilities';
  import HeroCarousel from '$components/HeroCarousel.svelte';
  import CardCarousel from '$components/CardCarousel.svelte';
  // import FlipForm from '$components/sandbox/FlipForm.svelte';

  const otherImages = [
    'Future Tense One Sheet for web',
    'helios-map-padded',
    'paradigm-hero',
  ];

  function filterParsedImageSeriesData(series: any, filterArray: string[]) {
    return series.filter((img: any) => filterArray.includes(img.title));
  }

  $: conData = $content.contentfulData;
  $: crisisPdfSeries = getAssetSeries('crisis pdfs', 'documents', conData);
  $: crisisRulesPdfUrl = crisisPdfSeries.map(
    (pdf) => 'https:' + pdf.fields.file.url,
  )[0];
  $: allImages = getParsedImageSeriesData('graphic design', conData);
  $: bsCards = getParsedImageSeriesData('battlespace cards', conData);
  $: cuCards = getParsedImageSeriesData('crisis cards', conData);
  $: cuMaps = getParsedImageSeriesData('crisis maps', conData);
  $: bbpPosters = getParsedImageSeriesData('bbp posters', conData);
  $: miscImgs = filterParsedImageSeriesData(allImages, otherImages);
  $: exCards = getParsedImageSeriesData('expedition carousel cards', conData);
  $: ftOneSheet = miscImgs[0];
  $: heliosMap = miscImgs[1];
  $: paradigmHero = miscImgs[2];
</script>

<!-- <div><FlipForm /></div> -->

<div class="page-wrapper full-width sandbox">
  <Gallery images={[ftOneSheet]} />
  <Gallery images={[heliosMap]} />
  <HeroCarousel images={bbpPosters} />
  <CardCarousel images={exCards} />
  <embed class="crisis-rules" src={crisisRulesPdfUrl} type="application/pdf" />
  <Gallery images={[paradigmHero]} />
  <Gallery images={cuMaps} />
  <CardCarousel images={bsCards} />
  <CardCarousel images={cuCards} />
</div>

<style lang="scss">
  div.sandbox {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }

  embed.crisis-rules {
    height: 1100px;
    width: 850px;
    margin-bottom: 2rem;
  }
</style>
