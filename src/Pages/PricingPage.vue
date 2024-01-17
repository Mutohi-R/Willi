<template>
  <nav-bar @open-signup="openSignup" @open-login="openLogin"></nav-bar>
  <main>
    <dialog id="signup" class="register" @click="closeSignUp($event)">
      <SignUp @open-login="openLogin" />
    </dialog>
    <dialog id="login" class="register" @click="closeLogin($event)">
      <LogIn @open-signup="openSignup" />
    </dialog>
    <section
      class="pricing__hero | content-grid | grid gap-2 justify-center bg-clr-yellow-100"
    >
      <p class="fs-300 fw-bold text-clr-purple-600 text-center">PRICING</p>
      <h1 class="ff-accent fw-bold fs-2xl text-clr-purple-700 text-center">
        Easily Organize Your work. Start free.
      </h1>
      <p class="hero__text text-center mx-auto">
        Choose the best plan to fit your team’s needs. Get started for free. No
        credit card required.
      </p>
    </section>

    <section class="plans | content-grid | bg-clr-neutral-500">
      <div class="price | card__container | breakout even-columns | gap-2">
        <PricingBasic />
        <PricingPremium />
        <PricingBusiness />
      </div>

      <div class="features | breakout | grid gap-10">
        <div class="features__select | flex justify-between items-center">
          <p class="fs-600 text-clr-purple-600">Compare all features</p>
          <svg
            width="16"
            height="10"
            viewBox="0 0 16 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.5505 0.949491C16.0386 1.43765 16.0386 2.2291 15.5505 2.71726L8.8838 9.38392C8.39565 9.87208 7.60419 9.87208 7.11603 9.38392L0.449369 2.71726C-0.0387869 2.2291 -0.0387869 1.43765 0.449368 0.949491C0.937524 0.461336 1.72898 0.461336 2.21714 0.949491L7.99992 6.73227L13.7827 0.949491C14.2709 0.461335 15.0623 0.461335 15.5505 0.949491Z"
              fill="#705772"
            />
          </svg>
        </div>

        <div>
          <p class="fs-400 text-center">
            Not sure which plan is right for you?
          </p>
          <p class="connect | fs-400 text-center mx-auto">
            <button class="button" data-type="tertiary">Get in touch</button>
            with our team for more information or take a look at our
            <button class="button" data-type="tertiary">
              Walkthrough video
            </button>
            for an overview of the most common workflow
          </p>
        </div>
      </div>
      <article
        class="join__card | breakout even-columns items-center | gap-x-36 | bg-clr-purple-100"
      >
        <img src="../assets/images/pana.png" alt="" />
        <div class="flow">
          <h2 class="fs-2xl text-clr-purple-700">Willi Enterprise</h2>
          <p>
            For organizations that need centralized visibility, control, and
            support. Get Willi's powerful, intuitive work management platform
            with advanced admin features and security at scale.
          </p>
          <div class="flex gap-4">
            <button
              @click="$router.push('/contact')"
              class="button"
              data-type="primary"
            >
              Contact Us
            </button>
            <button class="button" data-type="secondary">Learn More</button>
          </div>
        </div>
      </article>
    </section>

    <Faq />

    <JoinComp />
  </main>
  <Footer />
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import JoinComp from "@/components/JoinComp.vue";
import PricingBasic from "@/components/PricingBasic.vue";
import PricingPremium from "@/components/PricingPremium.vue";
import PricingBusiness from "@/components/PricingBusiness.vue";
import Faq from "@/components/Faq.vue";
import SignUp from "@/components/SignUp.vue";
import LogIn from "@/components/LogIn.vue";

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

const closeLogin = (e) => {
  if (e.target.id === "login") {
    login.close();
  }
};
</script>

<style>
.pricing__hero {
  padding-block: 9.8rem;
  background-image: url("../assets/images/vector-1.png"),
    url("../assets/images/vector-2.png"), url("../assets/images/vector-3.png");
  background-repeat: no-repeat;
  background-position: bottom -230px right -230px, bottom -300px left 10px,
    top -180px left -200px;
}

.hero__text {
  max-width: 45ch;
}

.plans {
  padding-block: 6rem;
}

.features {
  padding-block: 3rem;
}

.features__select {
  border: 1px solid var(--clr-purple-600);
  border-radius: 0.25rem;
  padding: 1.5rem 2rem;
}

.connect {
  max-width: 60ch;
}

.join__card {
  padding-block: 1.5rem;
  padding-inline: 2.5rem;
}
</style>