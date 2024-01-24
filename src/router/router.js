import { createRouter, createWebHashHistory } from "vue-router";
import { useAuthStore } from "@/stores/AuthStore";
import { ref } from "vue";

import LandingPage from "@/Pages/LandingPage.vue";
import PricingPage from "@/Pages/PricingPage.vue";
import Customer from "@/Pages/Customer.vue";

// const idToken = localStorage.getItem('idToken');

// const idToken = ref(localStorage.getItem('idToken'))


const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/Pages/Dashboard.vue"),
  },
  {
    path: "/",
    name: "landing-page",
    component: LandingPage,
  },
  {
    path: "/pricing",
    name: "pricing-page",
    component: PricingPage,
  },
  {
    path: "/contact",
    name: "contact-page",
    component: Customer,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from) => {
  const idToken = ref(localStorage.getItem('idToken'))
  console.log('Token', idToken.value)
  if (!idToken.value && to.name == 'dashboard') {
    return { name: 'landing-page' }
  }
})

export default router
