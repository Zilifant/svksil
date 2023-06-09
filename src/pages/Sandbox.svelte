<!-- Sandbox -->
<script lang="ts">
  import { content } from '$lib/store';
  import {
    getParsedImageSeriesData,
    filterParsedImageSeriesData,
  } from '$lib/utilities';

  // import ImageList from '$components/galleries/ImageList.svelte';
  import FullWidthImage from '$components/galleries/FullWidthImage.svelte';

  import Blackhole from '$components/svgs/Blackhole.svelte';
  import Circle1 from '$components/svgs/Circle1.svelte';
  import Circle2 from '$components/svgs/Circle2.svelte';
  import Circle3 from '$components/svgs/Circle3.svelte';
  import Circle4 from '$components/svgs/Circle4.svelte';
  import Circle5 from '$components/svgs/Circle5.svelte';
  import Circle6 from '$components/svgs/Circle6.svelte';
  import Circle7 from '$components/svgs/Circle7.svelte';
  import Ornate from '$components/svgs/Ornate.svelte';
  import Ornate2 from '$components/svgs/Ornate2.svelte';
  import Ornatehalf from '$components/svgs/Ornatehalf.svelte';
  import Scepter1 from '$components/svgs/Scepter1.svelte';
  import Scepter2 from '$components/svgs/Scepter2.svelte';
  import Twisties from '$components/svgs/Twisties.svelte';
  import Twistybar from '$components/svgs/Twistybar.svelte';
  import Wizardcat from '$components/svgs/Wizardcat.svelte';

  import '$styles/pages/sandbox.scss';

  const svgs = [
    'Blackhole',
    'Circle1',
    'Circle2',
    'Circle3',
    'Circle4',
    'Circle5',
    'Circle6',
    'Circle7',
    'Ornate',
    'Ornate2',
    'Ornatehalf',
    'Scepter1',
    'Scepter2',
    'Twisties',
    'Twistybar',
    'Wizardcat',
  ];

  $: conData = $content.contentfulData;
  $: allImages = getParsedImageSeriesData('graphic design', conData);
  $: cuMaps = getParsedImageSeriesData('crisis maps', conData);
  $: miscImgs = filterParsedImageSeriesData(allImages, [
    'helios-map-padded',
    'paradigm-hero',
  ]);
</script>

<div class="page-wrapper sandbox">
  <FullWidthImage image={miscImgs[0]} wrap={false} classes="paper" />
  <FullWidthImage image={miscImgs[1]} wrap={true} classes="full-width framed" />
  <ul>
    {#each cuMaps as map}
      <li style={'margin-bottom: 5px'}>
        <FullWidthImage image={map} wrap={true} classes="full-width" />
      </li>
    {/each}
  </ul>
  <div class="svg-grid">
    <Blackhole />
    <Circle1 />
    <Circle2 />
    <Circle3 />
    <Circle4 />
    <Circle5 />
    <Circle6 />
    <Circle7 />
    <Ornate />
    <Ornate2 />
    <Ornatehalf />
    <Scepter1 />
    <Scepter2 />
    <Twisties />
    <Twistybar />
    <Wizardcat />
  </div>
</div>
