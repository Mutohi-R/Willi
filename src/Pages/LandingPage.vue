<template>
  <nav-bar @open-signup="openSignup" @open-login="openLogin"></nav-bar>
  <main class="">
    <dialog id="signup" class="register" @click="closeSignUp($event)">
      <SignUp @open-login="openLogin" @close-signup="buttonCloseSignUp" />
    </dialog>
    <dialog id="login" class="register" @click="closeLogin($event)">
      <LogIn @open-signup="openSignup" @click="buttonCloseLogin" />
    </dialog>
    <section class="hero | content-grid">
      <div class="breakout even-columns | gap-y-8 items-center">
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
          <div class="hero__button | flex flex-wrap gap-4">
            <button @click="openSignup" class="button" data-type="primary">
              Get Started
            </button>
            <button
              class="button"
              data-type="secondary"
            >
              Explore Demo
            </button>
          </div>
          <div class="hero__details | grid gap-y-4">
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

    <section id="about" class="about | content-grid | bg-clr-neutral-500">
      <div class="partial | grid gap-24">
        <div class="about__heading | content-grid flow | text-center">
          <h2 class="ff-accent fs-l fw-bold text-clr-purple-700">
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
            <p class="fs-300 cursor-pointer">
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
          <ul role="list" class="grid gap-5">
            <li class="even-columns gap-y-6">
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
            <li class="even-columns gap-y-6">
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
            <li class="even-columns gap-y-6">
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
            <li class="even-columns gap-y-6">
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

    <section class="reviews| | grid gap-12 bg-clr-neutral-200">
      <div class="content-grid">
        <h2
          class="reviews__heading | ff-accent fs-900 fw-bold text-clr-purple-500 text-center mx-auto"
        >
          Companies change for the better when they work in Willi.
        </h2>
      </div>
      <ReviewsSlide />
    </section>

    <section
      class="cta | grid justify-center items-center gap-6 bg-clr-neutral-500"
    >
      <p class="ff-accent fs-800 text-clr-grey-700 text-center">
        Join more than 70,000+ companies that manage projects together
      </p>
      <button
        @click="openSignup"
        class="button | mx-auto items-center gap-2"
        data-type="primary"
      >
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
const props = defineProps(["isRegister", "toggleIsRegister"]);

import NavBar from "@/components/NavBar.vue";
import Companies from "@/components/Companies.vue";
import ReviewsSlide from "@/components/ReviewsSlide.vue";
import SignUp from "@/components/SignUp.vue";
import LogIn from "@/components/LogIn.vue";
import Footer from "@/components/Footer.vue";

// const isRegister = ref(false);
const openSignup = () => {
  login.close();
  signup.showModal();
};

const openLogin = () => {
  signup.close();
  login.showModal();
};

const closeSignUp = (e) => {
  if (e.target.id === "signup") {
    signup.close();
  }
};

const buttonCloseSignUp = () => {
  signup.close();
}

const closeLogin = (e) => {
  if (e.target.id === "login") {
    login.close();
  }
};

const buttonCloseLogin = () => {
  login.close();
}
</script>

<style>
/* hero section */
.hero {
  padding-block: 8rem 4.6rem;
  background-image: linear-gradient(
      35deg,
      var(--clr-bg-yellow) 76%,
      var(--clr-purple-400) 24%
    );
}

@media screen and (min-width: 65em) {
  .hero {
    background-image: linear-gradient(
      45deg,
      var(--clr-bg-yellow) 62.9%,
      var(--clr-purple-400) 37.1%
    );
    
  }
}

.hero__heading {
  max-width: 17ch;
  line-height: 1.4;
  text-wrap: balance;
}

@media screen and (max-width: 350px) {
  .hero__button > * {
    width: 100%;
  }
}

@media screen and (min-width: 420px) {
  .hero__details {
    display: flex;
    gap: 2.5rem;
  }
}


/* about section */
.about {
  padding-block: 7.5rem;
}

.about__content p:nth-of-type(1) {
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px var(--clr-purple-400);
}

.about__img {
  border-radius: 8px;
  box-shadow: 0px 8px 16px 0px rgba(195, 196, 203, 0.4);
  overflow: hidden;
}

@media screen and (min-width: 65em) {
  .about__content > ul {
    gap: 7rem;
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

  .about__content p:nth-of-type(2) {
    max-width: 23.2ch;
  }

  .about__content p:nth-of-type(3) {
    max-width: 38ch;
  }
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

.register::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

.register::-webkit-scrollbar-thumb {
  background-color: var(--clr-purple-400);
  border-radius: 100vw;
}
</style>
