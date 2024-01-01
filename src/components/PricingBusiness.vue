<template>
  <div class="price__card | grid items-start">
    <div class="grid gap-5 |bg-clr-neutral-100">
      <h2 class="ff-accent fs-900 mx-auto">Business</h2>
      <p class="fs-300 text-center mx-auto">
        For individuals or teams just getting started with project management.
      </p>
      <p class="fs-2xl fw-semibold text-clr-purple-400 mx-auto">$25.6</p>
      <button class="button" data-type="secondary">Get Started</button>
      <h3 class="fs-300 fw-bold">Everything in Premium, plus:</h3>
      <ul class="grid gap-2">
        <li class="flex gap-4 items-center">
          <CheckMarkDark />
          <p class="fs-300">Portfolios</p>
        </li>
        <li class="flex gap-4 items-center">
          <CheckMarkDark />
          <p class="fs-300">Goals</p>
        </li>
        <li class="flex gap-4 items-center">
          <CheckMarkDark />
          <p class="fs-300">Workload</p>
        </li>
        <li class="flex gap-4 items-center">
          <CheckMarkDark />
          <p class="fs-300">Custom rules builder</p>
        </li>
        <li class="flex gap-4 items-center">
          <CheckMarkDark />
          <p class="fs-300">Forms branching & customization</p>
        </li>
        <li class="flex gap-4 items-center">
          <CheckMarkDark />
          <p class="fs-300">Approvals</p>
        </li>
        <li class="flex gap-4 items-center">
          <CheckMarkDark />
          <p class="fs-300">Proofing</p>
        </li>
        <li class="flex gap-4 items-center">
          <CheckMarkDark />
          <p class="fs-300">Lock custom fields</p>
        </li>
        <li class="flex gap-4 items-center">
          <CheckMarkDark />
          <p class="fs-300">Advanced integrations with Salesforce, Adobe Creative Cloud, Tableau, Power BI</p>
        </li>
      </ul>
    </div>
  
  <div class="flex gap-3 items-center self-end">
      <p class="fs-300 fw-bold text-clr-purple-600">Learn more about Business</p> 
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Outline/Interface/Arrow right">
          <path
            id="Icon"
            d="M13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.1893 12.75H6.5C6.08579 12.75 5.75 12.4142 5.75 12C5.75 11.5858 6.08579 11.25 6.5 11.25H16.1893L13.4697 8.53033Z"
            fill="#705772"
          />
        </g>
      </svg>
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
}</style>
