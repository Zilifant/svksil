<!-- hero carousel -->
<script lang="ts">
  import type { ImageData } from '$lib/types';
  import classNames from 'classnames';
  import StandardBtn from './StandardBtn.svelte';
  import '$styles/components/hero-carousel.scss';

  export let images: ImageData[];

  let currentIdx = 0;
  let prevIdx = -1;
  $: forwardDisabled = currentIdx === images.length - 1;
  $: backDisabled = currentIdx === 0;
  $: allDisabled = false;
  $: isLarge = false;

  $: setImgClass = (index: number) => {
    if (index === currentIdx) return 'current';
    if (index > currentIdx) return 'ahead';
    if (index < currentIdx) return 'behind';
  };

  function disableForAnimation() {
    allDisabled = true;
    setTimeout(() => (allDisabled = false), 500);
  }

  function forward() {
    disableForAnimation();
    prevIdx = currentIdx;
    currentIdx++;
  }

  function back() {
    disableForAnimation();
    prevIdx = currentIdx;
    currentIdx--;
  }

  const growOrShrink = () => (isLarge = !isLarge);

  $: wrapperClasses = classNames({
    'hero-carousel-wrapper': true,
    large: isLarge,
  });
</script>

<div class={wrapperClasses}>
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
      Back
    </StandardBtn>
    <StandardBtn onClick={growOrShrink}>
      {isLarge ? 'Shrink' : 'Grow'}
    </StandardBtn>
    <StandardBtn
      classes={`${allDisabled ? 'no-disabled-styling' : ''}`}
      onClick={forward}
      isDisabled={allDisabled || forwardDisabled}
    >
      Forward
    </StandardBtn>
  </div>
</div>
