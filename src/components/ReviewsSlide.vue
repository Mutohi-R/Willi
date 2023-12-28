<template>
    <swiper-container class="partial" slides-per-view="3" space-between="50" pagination-clickable="true">
        <swiper-slide v-for="review in reviews" :key="review.id" >
          <div class="reviews__card">
            <img :src="review.avatar" :alt="review.name">
            <div>
              <h3 class="ff-accent fw-bold fs-600 text-center text-clr-grey-700">{{ review.name }}</h3>
              <p class="fs-400 text-center">{{ review.company }}</p>
            </div>
            <p class="text-clr-grey-700 text-center">{{ review.content }}</p>
        </div>
        </swiper-slide>
      </swiper-container>
</template>

<script setup>
  import reviews from '../data/reviews.json';
</script>

<style scoped>
.reviews__card {
  background-color: var(--clr-neutral-100);
  box-shadow: 0px 6px 12px 0px hsla(230, 7%, 78%, 0.3);
  padding: 2rem;
  border-radius: 0.5rem;

  display: grid;
  justify-items: center;
  gap: 1rem;
  height: 85%;
}

swiper-slide {
  display: grid;
}

.reviews__card img {
  max-width: 111px;
}

swiper-container::part(wrapper) {
  padding-block-end: 4.5rem;
}

swiper-container::part(bullet) {
  outline: 1px solid var(--clr-purple-600);
  background-color: transparent;
}

swiper-container::part(bullet-active) {
  background-color: var(--clr-purple-600);
}
</style>