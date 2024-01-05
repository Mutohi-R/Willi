<template>
  <nav-bar @toggle-register="toggleIsRegister"></nav-bar>
  <main class="">
    <dialog id="dialog" class="register" @click="closeRegister($event)">
      <form
        @submit.prevent="onSubmit"
        class="signup__modal | grid bg-clr-neutral-100"
      >
        <div>
          <div class="signup__content | grid gap-3">
            <h2 class="fw-bold fs-800 text-clr-purple-700">Welcome to Willi</h2>
            <p class="fs-300">
              Get started - It's free. No credit card needed.
            </p>
            <div class="grid gap-2">
              <p class="fs-200 text-clr-grey-700">
                <label for="">Email Address</label>
              </p>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="name@company.com"
              />
            </div>
            <div class="grid gap-2">
              <p class="fs-200 text-clr-grey-700">
                <label for="">Password</label>
              </p>
              <input type="password" name="password" id="password" />
            </div>
            <button
              class="continue__button button | fs-300"
              data-type="primary"
            >
              Continue
            </button>
            <p class="text0clr-grey-400 fs-200">
              By clicking "Continue" you agree to the Willi's
              <button class="button | fs-200" data-type="tertiary">
                Terms Of Service
              </button>
              and
              <button class="button | fs-200" data-type="tertiary">
                Privacy Policy.
              </button>
            </p>
            <p
              class="or | flex justify-center items-center gap-2 text-clr-grey-700 fs-300"
            >
              OR
            </p>
            <button class="button | items-center gap-2" data-type="secondary">
              <img src="../assets/images/google.svg" alt="" />
              Continue with Google
            </button>
            <p class="fs-300 text-center text-clr-grey-700">
              Already have an account? <router-link to=""><button class="button" data-type="tertiary">Log in</button></router-link>
            </p>
          </div>
        </div>
        <div class="signup__sidebar | grid items-end">
          <p class="fs-400">
            Join 70,000+ teams & businesses worldwide to use Willi to
            collaborate and manage your projects every day.
          </p>
        </div>
      </form>
    </dialog>
    <!-- <section class="register | grid">
      <Register v-if="isRegister" :isRegister="isRegister" :toggleIsRegister="toggleIsRegister"/>
    </section> -->
    <section class="hero | content-grid">
      <div class="breakout even-columns | items-center">
        <div class="hero__content | grid gap-10">
          <h1
            class="hero__heading | ff-accent fs-l fw-bold text-clr-purple-700"
          >
            Skyrocket Your Project Performance
          </h1>
          <p class="hero__text">
            Set your business up for success with an end-to-end solution to
            manage your sales and customers, plan your team’s time and projects,
            and keep track of your business results.
          </p>
          <div class="hero__button | flex gap-4">
            <button class="button" data-type="primary">Get Started</button>
            <button
              class="button"
              data-type="secondary"
              style="background: transparent"
            >
              Explore Demo
            </button>
          </div>
          <div class="hero__details | flex gap-12">
            <div>
              <p class="fs-800 text-clr-grey-500">2.5M+</p>
              <p>Users</p>
            </div>
            <div>
              <p class="fs-800 text-clr-grey-500">900k+</p>
              <p>Executed Projects</p>
            </div>
            <div>
              <p class="fs-800 text-clr-grey-500">70k+</p>
              <p>Brands</p>
            </div>
          </div>
        </div>
        <div class="hero__img content-grid">
          <img
            src="../assets/images/hero-img.svg"
            alt=""
            width="784"
            height="803"
          />
        </div>
      </div>
    </section>

    <section class="content-grid">
      <Companies />
    </section>

    <section class="about | content-grid | bg-clr-neutral-500">
      <div class="partial | grid gap-24">
        <div class="about__heading | content-grid flow | text-center">
          <h2 class="ff-accent fs-xl fw-bold text-clr-purple-700">
            Why Willi?
          </h2>
          <p class="fs-600">
            We all know time is money. So, why not track it as carefully as your
            finances? Unlike other solutions, Willi’s work management software
            doesn’t just show you what your team is spending their time on – it
            also shows you what that time is worth.
          </p>
          <div
            class="flex gap-3 justify-center items-center fw-bold text-clr-purple-600"
          >
            <p class="fs-300">
              Discover 100+ ways Willi helps empower your team
            </p>
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
        <div class="about__content">
          <ul role="list" class="grid gap-28">
            <li class="even-columns">
              <div class="list__content | grid content-start gap-2">
                <p class="fs-2xl fw-semibold">1.</p>
                <p class="ff-accent fs-800 fw-bold text-clr-purple-500">
                  Plan, execute, and track projects of any size
                </p>
                <p>
                  Easily assign tasks and prioritize what's most important to
                  your team. Set project timeline, milestones and dependencies,
                  and manage your team’s entire workload all in one place.
                </p>
              </div>
              <div class="about__img">
                <img src="@/assets/images/team-task.png" alt="" />
              </div>
            </li>
            <li class="even-columns">
              <div class="list__content | grid content-start gap-2">
                <p class="fs-2xl fw-semibold">2.</p>
                <p class="ff-accent fs-800 fw-bold text-clr-purple-500">
                  The platform your team will actually love to use
                </p>
                <p>
                  Collaborate seamlessly across teams and departments to gain
                  visibility into the progress of your work. Keep everyone
                  aligned with a platform they will enjoy using to ensure a
                  smoother execution.
                </p>
              </div>
              <div class="about__img">
                <img src="@/assets/images/team-task.png" alt="" />
              </div>
            </li>
            <li class="even-columns">
              <div class="list__content | grid content-start gap-2">
                <p class="fs-2xl fw-semibold">3.</p>
                <p class="ff-accent fs-800 fw-bold text-clr-purple-500">
                  100% customizable and flexible to fit any workflow
                </p>
                <p>
                  There are many ways to manage a single project. Shape your
                  workflow the way that works for your team - for any project,
                  process, department, or customer.
                </p>
              </div>
              <div class="about__img">
                <img src="@/assets/images/team-task.png" alt="" />
              </div>
            </li>
            <li class="even-columns">
              <div class="list__content | grid content-start gap-2">
                <p class="fs-2xl fw-semibold">4.</p>
                <p class="ff-accent fs-800 fw-bold text-clr-purple-500">
                  Plan, execute, and track projects of any size
                </p>
                <p>
                  Easily assign tasks and prioritize what's most important to
                  your team. Set project timeline, milestones and dependencies,
                  and manage your team’s entire workload all in one place.
                </p>
              </div>
              <div class="about__img">
                <img src="@/assets/images/team-task.png" alt="" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="reviews | content-grid | grid gap-12 bg-clr-neutral-200">
      <h2
        class="reviews__heading | ff-accent fs-900 fw-bold text-clr-purple-500 text-center mx-auto"
      >
        Companies change for the better when they work in Willi.
      </h2>
      <ReviewsSlide />
    </section>

    <section
      class="cta | grid justify-center items-center gap-6 bg-clr-neutral-500"
    >
      <p class="ff-accent fs-800 text-clr-grey-700 text-center">
        Join more than 70,000+ companies that manage projects together
      </p>
      <button class="button | mx-auto items-center gap-2" data-type="primary">
        Get Started
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Outline/Interface/Arrow right">
            <path
              id="Icon"
              d="M13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.1893 12.75H6.5C6.08579 12.75 5.75 12.4142 5.75 12C5.75 11.5858 6.08579 11.25 6.5 11.25H16.1893L13.4697 8.53033Z"
              fill="#fff"
            />
          </g>
        </svg>
      </button>
    </section>
  </main>
  <Footer />
</template>

<script setup>
import { ref, defineProps } from "vue";
const props = defineProps(["isRegister", "toggleIsRegister"]);

import NavBar from "@/components/NavBar.vue";
import Companies from "@/components/Companies.vue";
import ReviewsSlide from "@/components/ReviewsSlide.vue";
import Register from "@/components/Register.vue";
import Footer from "@/components/Footer.vue";

const isRegister = ref(false);
const toggleIsRegister = () => {
  dialog.showModal();
};

const closeRegister = (e) => {
  if (e.target.id === "dialog") {
    dialog.close();
  }
};
</script>

<style>
/* hero section */
.hero {
  padding-block: 4.6rem;
  background-image: linear-gradient(
    45deg,
    var(--clr-bg-yellow) 62.9%,
    var(--clr-purple-400) 37.1%
  );
}

.hero__heading {
  max-width: 17ch;
  line-height: 1.4;
}

/* about section */
.about {
  padding-block: 7.5rem;
}

.about__content li:nth-of-type(2n) {
  direction: rtl;
  justify-items: start;
}

.about__content li:nth-of-type(2n) .list__content {
  justify-items: end;
}

.about__content li:nth-of-type(2n) p {
  direction: ltr;
}

.about__content p:nth-of-type(1) {
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px var(--clr-purple-400);
}

.about__content p:nth-of-type(2) {
  max-width: 23.2ch;
}

.about__content p:nth-of-type(3) {
  max-width: 38ch;
}

.about__img {
  border-radius: 8px;
  box-shadow: 0px 8px 16px 0px rgba(195, 196, 203, 0.4);
  overflow: hidden;
}

/* reviews section */
.reviews {
  padding-block: 3.125rem;
}
.reviews__heading {
  max-width: 28ch;
  line-height: 1.5;
}

/* cta */
.cta {
  padding-block: 4.5rem;
}
.cta p {
  max-width: 27ch;
}

.register {
  margin-block: auto;
  margin-inline: auto;
  width: min(1000px, 90%);
  border-radius: 6px;
}

.signup__modal {
  grid-template-columns: 1fr 40%;
  min-width: 62.5rem;
}

.signup__content {
  width: 74%;
  margin-inline: auto;
  padding-block: 1rem;
}

.signup__content input {
  border: 1px solid var(--clr-grey-200);
  border-radius: 4px;
  width: 100%;
  padding: 0.75rem 1rem;
}

.continue__button {
  padding: 1rem;
}

.signup__sidebar {
  background-image: url("../assets/images/form-bg.png");
  background-size: cover;
  padding: 1.5rem;
}

.signup__sidebar p {
  max-width: 32ch;
}

.or::before,
.or::after {
  content: "";
  height: 1px;
  width: 35%;
  background-color: var(--clr-purple-400);
  display: block;
}
</style>
