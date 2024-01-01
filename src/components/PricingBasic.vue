<template>
  <div class="price__card | grid items-start">
    <div class="grid gap-5 items-start |bg-clr-neutral-100">
      <h2 class="ff-accent fs-900 mx-auto">Basic</h2>
      <p class="fs-300 text-center mx-auto">
        For individuals or teams just getting started with project management.
      </p>
      <p class="fs-2xl fw-semibold text-clr-purple-400 mx-auto">$0</p>
      <button class="button" data-type="secondary">Get Started</button>
      <h3 class="fs-300 fw-bold">Manage tasks and personal to-dos:</h3>
      <ul class="grid gap-2">
        <li class="flex gap-4 items-center">
          <CheckMarkDark />
          <p class="fs-300">Unlimited tasks</p>
        </li>
        <li class="flex gap-4 items-center">
          <CheckMarkDark />
          <p class="fs-300">Unlimited Projects</p>
        </li>
        <li class="flex gap-4 items-center">
          <CheckMarkDark />
          <p class="fs-300">Unlimited activity log</p>
        </li>
        <li class="flex gap-4 items-center">
          <CheckMarkDark />
          <p class="fs-300">Unlimited file storage (100MB per file)</p>
        </li>
        <li class="flex gap-4 items-center">
          <CheckMarkDark />
          <p class="fs-300">Collaborate with up to 15 teammates</p>
        </li>
        <li class="flex gap-4 items-center">
          <CheckMarkDark />
          <p class="fs-300">List view projects</p>
        </li>
        <li class="flex gap-4 items-center">
          <CheckMarkDark />
          <p class="fs-300">Board view projects</p>
        </li>
        <li class="flex gap-4 items-center">
          <CheckMarkDark />
          <p class="fs-300">Calendar view</p>
        </li>
        <li class="flex gap-4 items-center">
          <CheckMarkDark />
          <p class="fs-300">Assignee and due dates</p>
        </li>
        <li class="flex gap-4 items-center">
          <CheckMarkDark />
          <p class="fs-300">Project Overview</p>
        </li>
        <li class="flex gap-4 items-center">
          <CheckMarkDark />
          <p class="fs-300">Project Brief</p>
        </li>
        <li class="flex gap-4 items-center">
          <CheckMarkDark />
          <p class="fs-300">iOS and Android mobile apps</p>
        </li>
        <li class="flex gap-4 items-center">
          <CheckMarkDark class="cc" />
          <p class="fs-300">Time tracking with integrations - See time tracking apps</p>
        </li>
        <li class="flex gap-4 items-center">
          <CheckMarkDark />
          <p class="fs-300">100+ free integrations with your favorite apps - Learn more</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import CheckMarkDark from '@/components/icons/CheckMarkDark.vue';
</script>

<style scoped>
.price__card {
    border: 1px solid var(--clr-purple-100);
    border-radius: 0.5rem;
    padding: 2rem;
}
</style>
