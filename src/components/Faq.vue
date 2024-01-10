<template>
    <section class="content-grid">
        <h2 class="ff-accent fs-900 fw-bold text-center text-clr-purple-700">Frequently Asked Questions</h2>
        <div class="faqs | partial">
            <div v-for="(faq, index) in faqs" :key="faq.id">
                <div class="flex items-center justify-between" @click="toggleFaqAnswer">
                    <p class="fs-600 text-clr-purple-600">{{ faq.question }}</p>
                    <ArrowDown />
                </div>
                <p v-if="faq.isOpen">{{ faq.answer }}</p>
            </div>
        </div>
    </section>    
</template>

<script setup>
import faqs from "@/data/faqs.json";
import ArrowDown from "./icons/ArrowDown.vue";

const toggleFaqAnswer = (event) => {
    
}
</script>

<style scoped>

</style>