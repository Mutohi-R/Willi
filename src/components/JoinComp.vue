<template>
    <section class="companies | content-grid | bg-clr-neutral-500">
        <p class="ff-accent fs-800 text-clr-grey-700 text-center mx-auto">Join more than 70,000+ companies that manage projects together</p>
        <Companies />
    </section>
</template>

<script setup>
import Companies from './Companies.vue';

</script>

<style scoped>
.companies {
    padding-block: 3rem;
}

.companies p{
    max-width: 33ch;
}
</style>