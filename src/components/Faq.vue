<template>
  <section class="content-grid">
    <h2 class="ff-accent fs-900 fw-bold text-center text-clr-purple-700">
      Frequently Asked Questions
    </h2>
    <div class="faqs | partial">
      <div v-for="(question, index) in questions" :key="question.id">
        <div
          class="flex items-center justify-between"
          @click="toggleFaqAnswer(question.id)"
        >
          <p class="fs-600 text-clr-purple-600">{{ question.question }}</p>
          <ArrowDown />
        </div>
        <p v-if="question.isOpen">{{ question.answer }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import faqs from "@/data/faqs.json";
import ArrowDown from "./icons/ArrowDown.vue";

const questions = ref(faqs)

const toggleFaqAnswer = (index) => {
  const faqQuestion = questions.value.filter((question, i) => {
    return question.id == index;
  });
  const clickedFaq = faqQuestion[0];
  clickedFaq.isOpen = !clickedFaq.isOpen;
  // console.log(`${clickedFaq.id} : ${clickedFaq.isOpen}`);
};

</script>

<style scoped></style>
