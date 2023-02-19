<!-- carousel card -->
<script lang="ts">
  import type { ExpeditionCard } from './cards';
  import './carousel.scss';

  export let card: ExpeditionCard;
</script>

<div class="carousel-card">
  <img
    class="carousel-card-img"
    id={card.id}
    src={card.url}
    title={card.title}
    alt={card.alt}
  />
</div>
