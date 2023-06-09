<!-- card carousel -->
<script lang="ts">
  import type { ExpeditionCard } from './cards';
  import { cards } from './cards';
  import Card from './Card.svelte';
  import CarouselBtn from './CarouselBtn.svelte';
  import MiniMapBtn from './MiniMapBtn.svelte';
  import './carousel.scss';

  type CardData = {
    title: string;
    alt: string;
    url: string;
  };

  export let cardsData: CardData[];
  let items: ExpeditionCard[] = cards;

  $: cardsData.forEach((cardData) => {
    const { title, url } = cardData;
    const card = items.find((itm) => itm.id === title);
    if (card) card.url = url;
  });

  let visIndexes: number[] = initVisIndexes();

  const numFlanking = 3;
  const startAt = 0;

  // Calculates size of array based on numFlanking, then adds indexes of starting items.
  // Note: while loop counts from a negative number (-2 if startAt is 0); i is then used to
  // get the index of the item relative to the startAt.
  function initVisIndexes() {
    const totalNumVis = numFlanking * 2 + 1;
    let arr = [];
    let i = 0 - numFlanking;
    while (i < totalNumVis - numFlanking) {
      arr.push(adjustWrappingIdx(startAt + i));
      i++;
    }
    return arr;
  }

  // Convert to the correct index when wrapping from start/end of the list.
  function adjustWrappingIdx(idx: number) {
    if (idx > items.length - 1) return idx - items.length;
    if (idx < 0) return idx + items.length;
    return idx;
  }

  // steps will be a positive int for forward, negative int for backward;
  function spinCarousel(steps: number) {
    const newIndexes = visIndexes.map((idx: number) =>
      adjustWrappingIdx(idx + steps),
    );
    visIndexes = newIndexes;
  }

  // Apply css classes. (These classes are not currently being used.)
  // function cssClass(idx: number) {
  //   let position = 'item-null';
  //   const currentItem = visIndexes.find((i: number) => i === idx);
  //   if (currentItem) position = `item-${visIndexes.indexOf(currentItem)}`;

  //   if (visIndexes[numFlanking] === idx) return `current ${position}`;
  //   return position;
  // }

  // Used by MiniMapBtn.
  const jumpToItem = (idx: number) =>
    spinCarousel(idx - visIndexes[numFlanking]);
</script>

<div class="carousel-container">
  <div class="carousel-main">
    <CarouselBtn {spinCarousel} forward={false} />
    <ul class="carousel-list">
      {#each visIndexes as idx}
        <li>
          <Card card={items[idx]} />
        </li>
      {/each}
    </ul>
    <CarouselBtn {spinCarousel} forward={true} />
  </div>
  <div class="carousel-minimap">
    {#each items as item, index}
      <MiniMapBtn
        idx={index}
        {item}
        {jumpToItem}
        disabled={index === visIndexes[numFlanking]}
      />
    {/each}
  </div>
</div>
