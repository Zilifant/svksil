<!-- Bio -->
<script lang="ts">
  import type { BioContent } from '$lib/types';
  import { images, type ImageIndex } from '$assets/images/index';
  import { parseMarkdown } from '$lib/utilities';
  import { content, theme } from '$lib/store';
  import { dark } from '$lib/constants';
  import Image from '$components/galleries/Image.svelte';
  import Spinner from '$components/galleries/Spinner.svelte';
  import '$styles/pages/bio.scss';

  const matchFID = (item: any) => item?.fields?.fid === 'bio page';

  const videoData = {
    header: 'A thing I did at PAX Unplugged a few years ago...',
    title: 'Megagames at PAX Unplugged 2017',
    src: 'https://www.youtube.com/embed/OTEtQvGU1h0',
  };

  $: bioData = $content?.contentfulData?.items?.find((item) => matchFID(item));
  $: introHTML = parseMarkdown(bioData?.fields?.introMd);
  $: partnersHeader = bioData?.fields?.partnersHeader;

  let bio: BioContent;
  $: bio = $content?.bio;

  $: suffix = $theme === dark ? '' : '';

  $: setImgSrc = (id: string) => {
    const imgKey = `${id}${suffix}`;
    return images[imgKey as keyof ImageIndex];
  };
</script>

<div class="page-wrapper bio">
  <section class="intro-content-grid">
    <div class="intro-text-wrapper large-text">
      {@html introHTML}
    </div>
    <div class="headshot-wrapper">
      <!-- <img
        class="switchable-img"
        id="headshot"
        src={setImgSrc('headshot')}
        title="Witness me!"
        alt="Headshot: Scott Silsbe, Cool Guy"
      /> -->
      <Image
        cssClass="switchable-img"
        dimensions={{ x: 198, y: 297 }}
        id="headshot"
        src={setImgSrc('headshot')}
        title="Witness me!"
        alt="Headshot: Scott Silsbe, Cool Guy"
      >
        <Spinner slot="loading" />
      </Image>
    </div>
  </section>

  <h2 class="section-title large-text">{partnersHeader}</h2>
  <section class="partner-logo-grid">
    {#each bio?.partners as { id, alt }}
      <div class="partner-logo-wrapper">
        <img class="switchable-img" src={setImgSrc(id)} {id} {alt} />
        <!-- <Image cssClass="switchable-img" src={setImgSrc(id)} {id} {alt} /> -->
      </div>
    {/each}
  </section>

  <h2 class="section-title large-text">{videoData.header}</h2>
  <section class="video">
    <iframe
      src={videoData.src}
      title={videoData.title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      frameBorder="0"
      allowFullScreen
    />
  </section>
</div>
