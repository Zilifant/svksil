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
  // import FlipForm from '$components/sandbox/FlipForm.svelte';
  // import CardCarousel from '$components/CardCarousel.svelte';

  $: conData = $content.contentfulData;
  // $: console.log(conData);
  // $: imageSeries = getItemField('expedition carousel cards', 'images', conData);
  // $: imageSeriesData = getImageSeries(imageSeries, conData);
  // $: pdfSeries = getAssetSeries('bbp pdfs', 'documents', conData);
  // $: pdfUrls = pdfSeries.map((pdf) => 'https:' + pdf.fields.file.url);
  // $: console.log(pdfUrls);
  $: allImages = getParsedImageSeriesData('graphic design', conData);
  // $: console.log(allImages);
</script>

<!-- <div><FlipForm /></div> -->

<div class="page-wrapper full-width sandbox">
  <Gallery images={allImages} />
  <!-- <CardCarousel images={imageSeriesData} /> -->
  <!-- <embed class="bbp-puzzle" src={pdfUrls[0]} type="application/pdf" /> -->
</div>

<style lang="scss">
  div.sandbox-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    height: 100%;
    width: 100%;
  }

  /* embed.bbp-puzzle {
    height: 800px;
    width: 800px;
  } */
</style>
