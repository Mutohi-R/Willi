<template>
  <footer class="footer | text-clr-neutral-100">
    <div class="content-grid | bg-clr-purple-700">
      <section
        class="primary-footer | breakout | grid mx-auto justify-between gap-16 items-center"
      >
        <div class="logo">
          <LogoWhite />
        </div>
        <div class="extra | fle gap-14 ">
          <div class="product | flow">
            <h2 class="ff-accent fw-bold fs-600">Product</h2>
            <p class="fs-400">Willi for Apps</p>
            <p class="fs-400">Willi for Email</p>
            <p class="fs-400">Insights & Actions</p>
            <p class="fs-400">Conversational Feedback</p>
            <p class="fs-400">Integrations</p>
            <p class="fs-400">Pricing</p>
          </div>
          <div class="company | flow">
            <h2 class="ff-accent fw-bold fs-600">Company</h2>
            <p class="fs-400">About Us</p>
            <p class="fs-400">Contact Us</p>
            <p class="fs-400">Leadership</p>
            <p class="fs-400">Become a Partner</p>
            <p class="fs-400">Careers</p>
            <p class="fs-400">Customers</p>
            <p class="fs-400">Try for Free</p>
            <p class="fs-400">Explore Demo</p>
          </div>
          <div class="resources | flow">
            <h2 class="ff-accent fw-bold fs-600">Resources</h2>
            <p class="fs-400">Blog</p>
            <p class="fs-400">Testimonials</p>
            <p class="fs-400">Whitepapers</p>
            <p class="fs-400">Webinars & Events</p>
            <p class="fs-400">Podcast</p>
            <p class="fs-400">Knowledge Base</p>
            <p class="fs-400">Developer API</p>
            <p class="fs-400">Survey Templates</p>
            <p class="fs-400">Status</p>
          </div>
          <div class="support | flow">
            <h2 class="ff-accent fw-bold fs-600">Support</h2>
            <p class="fs-400">Help Center</p>
            <p class="fs-400">Terms of Use</p>
            <p class="fs-400">Privacy Policy</p>
            <p class="fs-400">Security</p>
            <p class="fs-400">Recruitment Privacy Notice</p>
            <p class="fs-400">Support Level Policy</p>
            <p class="fs-400">Service Level Policy</p>
          </div>
        </div>
      </section>
    </div>

    <div class="content-grid | bg-clr-yellow-100">
      <section class="secondary-footer | breakout | flex justify-between flex-wrap gap-4">
        <div class="flex flex-wrap justify-center mx-auto gap-6">
          <p class="fs-400 text-clr-purple-600 cursor-pointer">
            Terms & Conditions
          </p>
          <p class="fs-400 text-clr-purple-600 cursor-pointer">Policies</p>
          <p class="fs-400 text-clr-purple-600 cursor-pointer">Security</p>
        </div>
        <div class="flex items-center mx-auto gap-2 cursor-pointer">
          <Web />
          <p class="fs-400 text-clr-purple-600">Language</p>
        </div>
        <div class="footer__icons | flex items-center mx-auto gap-6">
          <!-- twitter -->
          <Twitter class="cursor-pointer" />
          <!-- facebook -->
          <Facebook class="cursor-pointer" />
          <!-- linkedIn -->
          <LinkedIn class="cursor-pointer" />
          <!-- youtube -->
          <Youtube class="cursor-pointer" />
          <!-- instagram -->
          <Instagram class="cursor-pointer" />
        </div>
      </section>
    </div>
  </footer>
</template>

<script setup>
import Twitter from "./icons/Twitter.vue";
import Facebook from "./icons/Facebook.vue";
import LinkedIn from "./icons/LinkedIn.vue";
import Youtube from "./icons/YouTube.vue";
import Instagram from "./icons/Instagram.vue";
import Web from "./icons/Web.vue";
import LogoWhite from "./icons/LogoWhite.vue";
</script>

<style scoped>
.primary-footer {
  padding-block: 3.375rem;
  flex-direction: column;
}

.secondary-footer {
  padding-block: 0.875rem;
  /* grid-auto-flow: column; */
  /* place-items: center; */
}

.extra {
  display: grid;
  grid-template-areas:
    "product support"
    "company resources";
}

@media screen and (min-width: 980px) {
  .primary-footer {
    grid-auto-flow: column;
    margin: 0;
  }
  .extra {
    grid-template-areas: "product support company resources";
  }
}

.product {
  grid-area: product;
}

.support {
  grid-area: support;
}

.company {
  grid-area: company;
}

.resources {
  grid-area: resources;
}
</style>
