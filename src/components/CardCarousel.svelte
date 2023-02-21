<!-- card carousel -->
<script lang="ts">
  import type { ImageData } from '$lib/types';
  import StandardBtn from '$components/StandardBtn.svelte';
  import chevRight from '../assets/svgs/chevRight.svg';
  import chevLeft from '../assets/svgs/chevLeft.svg';
  import '$styles/components/card-carousel.scss';

  export let images: ImageData[];

  let currentIdx = 0;
  let prevIdx = -1;
  $: forwardDisabled = currentIdx === images.length - 1;
  $: backDisabled = currentIdx === 0;
  $: allDisabled = false;

  // prettier-ignore
  $: setImgClass = (index: number) => {
    if (index === currentIdx - 2) return 'two-behind';
    if (index === currentIdx - 1) return 'one-behind';
    if (index === currentIdx)     return 'current';
    if (index === currentIdx + 1) return 'one-ahead';
    if (index === currentIdx + 2) return 'two-ahead';
    if (index  <  currentIdx)     return 'far-behind';
    if (index  >  currentIdx)     return 'far-ahead';
  };

  // function disableForAnimation() {
  //   allDisabled = true;
  //   setTimeout(() => (allDisabled = false), 500);
  // }

  function forward() {
    // disableForAnimation();
    prevIdx = currentIdx;
    currentIdx++;
  }

  function back() {
    // disableForAnimation();
    prevIdx = currentIdx;
    currentIdx--;
  }
</script>

<div class="card-carousel-wrapper">
  <ul>
    {#each images as { url, title, alt }, index}
      <li class={setImgClass(index)}>
        <img src={url} {title} {alt} />
      </li>
    {/each}
  </ul>
  <div class="controls-wrapper">
    <StandardBtn
      classes={`${allDisabled ? 'no-disabled-styling' : ''}`}
      onClick={back}
      isDisabled={allDisabled || backDisabled}
    >
      <img class="chev prev" src={chevLeft} alt="previous" />
    </StandardBtn>
    <StandardBtn
      classes={`${allDisabled ? 'no-disabled-styling' : ''}`}
      onClick={forward}
      isDisabled={allDisabled || forwardDisabled}
    >
      <img class="chev next" src={chevRight} alt="next" />
    </StandardBtn>
  </div>
</div>
