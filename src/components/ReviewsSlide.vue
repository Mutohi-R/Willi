<template>
    <swiper-container
      class="mx-auto"
      :slides-per-view="3"
      :space-between="50"
      :pagination-clickable="true"
      :breakpoints="{
        0: {
          slidesPerView: 1,
        },
        800: {
        slidesPerView: 2,
        },
        1000: {
          slidesPerView: 3,
        },
    }"
    >
      <swiper-slide v-for="review in reviews" :key="review.id">
        <div class="reviews__card">
          <img :src="review.avatar" :alt="review.name" />
          <div>
            <h3 class="ff-accent fw-bold fs-600 text-center text-clr-grey-700">
              {{ review.name }}
            </h3>
            <p class="fs-400 text-center">{{ review.company }}</p>
          </div>
          <p class="text-clr-grey-700 text-center">{{ review.content }}</p>
        </div>
      </swiper-slide>
    </swiper-container>
</template>

<script setup>
import reviews from "../data/reviews.json";
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

swiper-container {
  max-width: 1100px;
}

@media screen and (max-width: 1100px) {
  swiper-container {
    width: 900px;
  }
}

@media screen and (max-width: 925px) {
  swiper-container {
    max-width: 800px;
  }
}

@media screen and (max-width: 830px) {
  swiper-container {
    max-width: 700px;
  }
}

@media screen and (max-width: 730px) {
  swiper-container {
    max-width: 600px;
  }
}

@media screen and (max-width: 610px) {
  swiper-container {
    max-width: 500px;
  }
}

@media screen and (max-width: 520px) {
  swiper-container {
    max-width: 400px;
  }
}

@media screen and (max-width: 420px) {
  swiper-container {
    max-width: 300px;
  }
}

@media screen and (max-width: 320px) {
  swiper-container {
    max-width: 250px;
  }
}

@media screen and (max-width: 250px) {
  swiper-container {
    max-width: 200px;
  }
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
