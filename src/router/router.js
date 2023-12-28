import { createRouter, createWebHashHistory } from "vue-router";

import LandingPage from "../Pages/LandingPage.vue";
import PricingPageVue from "@/Pages/PricingPage.vue";

const routes = [
  {
    path: "/",
    name: "landing-page",
    component: LandingPage,
  },
  {
    path: "/pricing",
    name: "pricing-page",
    component: PricingPageVue,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
