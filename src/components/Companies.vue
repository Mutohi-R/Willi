<template>
  <div class="company__icons | flex gap-5 justify-between items-center">
    <IBM />
    <Apple />
    <DB />
    <DVC />
    <Intel />
    <PPC />
  </div>
</template>

<script setup>
    import Apple from "@/components/icons/Apple.vue";
    import DB from "@/components/icons/DB.vue";
    import DVC from "@/components/icons/DVC.vue";
    import IBM from "@/components/icons/IBM.vue";
    import Intel from "@/components/icons/Intel.vue";
    import PPC from "@/components/icons/PPC.vue";
</script>

<style scoped>
    .company__icons {
        padding-block: 2.5rem;
    }
</style>
