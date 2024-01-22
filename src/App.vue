<template>
  <router-view></router-view>
</template>

<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from './stores/AuthStore';

const authStore = useAuthStore()

onMounted(() => {
  authStore.init()
})
</script>

<style scoped></style>
