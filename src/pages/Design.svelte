<!-- Design -->
<script lang="ts">
  import { content } from '$lib/store';
  import {
    getAssetSeries,
    getParsedImageSeriesData,
    filterParsedImageSeriesData,
  } from '$lib/utilities';

  import HeroCarousel from '$components/HeroCarousel.svelte';
  import CardCarousel from '$components/CardCarousel.svelte';
  import Gallery from '$components/Gallery.svelte';

  import '$styles/pages/design.scss';

  const otherImages = [
    'Future Tense One Sheet for web',
    'helios-map-padded',
    'paradigm-hero',
  ];

  $: conData = $content.contentfulData;
  $: allImages = getParsedImageSeriesData('graphic design', conData);
  $: bsCards = getParsedImageSeriesData('battlespace cards', conData);
  $: cuCards = getParsedImageSeriesData('crisis cards', conData);
  $: cuMaps = getParsedImageSeriesData('crisis maps', conData);
  $: exCards = getParsedImageSeriesData('expedition carousel cards', conData);
  $: bbpPosters = getParsedImageSeriesData('bbp posters', conData);
  $: miscImgs = filterParsedImageSeriesData(allImages, otherImages);
  $: crisisPdfs = getAssetSeries('crisis pdfs', 'documents', conData);
  $: crisisPdfUrl = crisisPdfs.map((pdf) => 'https:' + pdf.fields.file.url)[0];
  $: ftOneSheet = miscImgs[0];
  $: heliosMap = miscImgs[1];
  $: paradigmHero = miscImgs[2];
</script>

<div class="page-wrapper design">
  <Gallery images={[ftOneSheet]} />
  <Gallery images={[heliosMap]} />
  <HeroCarousel images={bbpPosters} wrap={true} />
  <CardCarousel images={exCards} />
  <embed class="crisis-rules" src={crisisPdfUrl} type="application/pdf" />
  <Gallery images={[paradigmHero]} />
  <Gallery images={cuMaps} />
  <CardCarousel images={bsCards} />
  <CardCarousel images={cuCards} />
</div>
