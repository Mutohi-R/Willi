<template>
  <section class="faqs | content-grid gap-y-20">
    <h2 class="ff-accent fs-900 fw-bold text-center text-clr-purple-700">
      Frequently Asked Questions
    </h2>
    <div class=" | partial">
      <div
      @click="toggleFaqAnswer(question.id)"
      v-for="(question, index) in questions"
      :key="question.id"
      class="questions"
      >
        <div class="question | flex items-center justify-between gap-2">
          <p class="fs-600 text-clr-purple-600">{{ question.question }}</p>
          <ArrowUp v-if="question.isOpen" />
          <ArrowDown v-else />
        </div>
          <p class="answer" v-if="question.isOpen">{{ question.answer }}</p>
        </div>
      </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

import faqs from "@/data/faqs.json";
import ArrowDown from "./icons/ArrowDown.vue";
import ArrowUp from "./icons/ArrowUp.vue";

const questions = ref(faqs);

const toggleFaqAnswer = (index) => {
  const faqQuestion = questions.value.filter((question, i) => {
    return question.id == index;
  });
  const clickedFaq = faqQuestion[0];
  clickedFaq.isOpen = !clickedFaq.isOpen;
  // console.log(`${clickedFaq.id} : ${clickedFaq.isOpen}`);
};
</script>

<style scoped>
.faqs {
  padding-block: 5rem;
}

.questions {
  position: relative;

  &:hover {
    cursor: pointer;
  }

  &::before {
    content: "";
    background-color: var(--clr-purple-600);
    position: absolute;
    top: 0;
    height: 2px;
    width: 100%;
  }

  &:last-child::after {
    content: "";
    background-color: var(--clr-purple-600);
    position: absolute;
    bottom: 0;
    height: 2px;
    width: 100%;
  }



  .question {
    padding-block: 1.5rem;
    padding-inline: 2rem;
  }

  .answer {
    padding-inline: 2rem;
  }
}
</style>
