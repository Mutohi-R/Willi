<template>
    <h1>
        Welcome to the Dashboard
    </h1>
    <button class="button" data-type="secondary" @click="authStore.logout">Sign Out</button>
</template>

<script setup>
import { useAuthStore } from '@/stores/AuthStore';

const authStore = useAuthStore();
</script>

<style scoped>

</style>