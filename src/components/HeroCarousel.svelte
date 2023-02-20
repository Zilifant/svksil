<!-- hero carousel -->
<script lang="ts">
  import type { ImageData } from '$lib/types';
  import classNames from 'classnames';
  import StandardBtn from './StandardBtn.svelte';
  import '$styles/components/hero-carousel.scss';

  import plus from '../assets/svgs/plus.svg';
  import minus from '../assets/svgs/minus.svg';
  import chevRight from '../assets/svgs/chevRight.svg';
  import chevLeft from '../assets/svgs/chevLeft.svg';
  import doubleChevUp from '../assets/svgs/doubleChevUp.svg';

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

  function backToStart() {
    currentIdx = 0;
    prevIdx = -1;
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
      onClick={backToStart}
      isDisabled={allDisabled || backDisabled}
    >
      <img src={doubleChevUp} alt="back to top" />
    </StandardBtn>

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

    <StandardBtn onClick={growOrShrink}>
      <img src={isLarge ? minus : plus} alt={isLarge ? 'shrink' : 'grow'} />
    </StandardBtn>
  </div>
</div>
