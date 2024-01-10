<template>
    <section class="content-grid">
        <h2 class="ff-accent fs-900 fw-bold text-center text-clr-purple-700">Frequently Asked Questions</h2>
        <div class="faqs | partial">
            <div v-for="(faq, index) in faqs" :key="faq.id">
                <div class="flex items-center justify-between" @click="toggleFaqAnswer(faq.id)">
                    <p class="fs-600 text-clr-purple-600">{{ faq.question }}</p>
                    <ArrowDown />
                </div>
                <p v-if="faq.isOpen">{{ faq.isOpen }}</p>
            </div>
        </div>
    </section>    
</template>

<script setup>
import { watch } from "vue";
import faqs from "@/data/faqs.json";
import ArrowDown from "./icons/ArrowDown.vue";

watch(() => faqs, () => {
    console.log('I have no idea what is going on')
})

const toggleFaqAnswer = (index) => {
    const faqQuestion = faqs.filter((faq, i) => {
        return faq.id == index;
    })
    const clickedFaq = faqQuestion[0]
    clickedFaq.isOpen = !clickedFaq.isOpen
    console.log(`${clickedFaq.id} : ${clickedFaq.isOpen}`)
}

watch(() => faqs.forEach(faq => faq.isOpen), () => {
    console.log('I have no idea what is going on')
})
</script>

<style scoped>

</style>