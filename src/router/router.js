import { createRouter, createWebHashHistory } from "vue-router";

import LandingPage from "@/Pages/LandingPage.vue";
import PricingPage from "@/Pages/PricingPage.vue";
import Customer from "@/Pages/Customer.vue";

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

export default router
