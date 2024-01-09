import { createRouter, createWebHashHistory } from "vue-router";

import LandingPage from "@/Pages/LandingPage.vue";
import PricingPage from "@/Pages/PricingPage.vue";
import Customer from "@/Pages/Customer.vue";

const routes = [
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
    path: "/customer",
    name: "customer-page",
    component: Customer,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
