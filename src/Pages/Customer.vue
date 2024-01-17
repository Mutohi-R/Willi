<template>
  <nav-bar @open-signup="openSignup" @open-login="openLogin"></nav-bar>
  <main> 
    <dialog id="signup" class="register" @click="closeSignUp($event)">
      <SignUp @open-login="openLogin" />
    </dialog>
    <dialog id="login" class="register" @click="closeLogin($event)">
      <LogIn @open-signup="openSignup" />
    </dialog>
    <section class="contact__hero | content-grid | bg-clr-yellow-100">
      <div class="grid gap-10">
        <div class="grid gap-4">
          <h1 class="fs-l text-clr-purple-700 text-center">
            Contact Willi Support
          </h1>
          <p class="text-center">Have questions? We'd love to help :)</p>
        </div>
        <p class="text-clr-purple-600 text-center">
          We're always here to help you with any questions or issues you have
          about Willi. Submit the form below and we'll get back to you as soon
          as we can.
        </p>
        <form action="" class="contact__form">
          <div class="name | grid gap-2">
            <label class="form__label" data-type="important" for="name"
              >Your Name</label
            >
            <input
              class="input"
              type="text"
              name="name"
              id="name"
              placeholder="Henry Daniel"
            />
          </div>
          <div class="email | grid gap-2">
            <label class="form__label" data-type="important" for="email"
              >Your Email Address</label
            >
            <input
              class="input"
              type="email"
              name="email"
              id="email"
              placeholder="name@email.com"
            />
          </div>
          <div class="url | grid gap-2">
            <label class="form__label" for="url">Your Willi URL</label>
            <input
              class="input"
              type="url"
              name="url"
              id="url"
              placeholder="https://YourCompany.willi.com/"
            />
          </div>
          <div class="type | grid gap-2">
            <p class="form__label" data-type="important">Type</p>
            <div class="form__select | fw-semibold text-clr-grey-500">
              --Select--
            </div>
          </div>
          <div class="request | grid gap-2">
            <label class="form__label" data-type="important" for="request"
              >What can we help you with?</label
            >
            <textarea name="request" id="request" rows="4"></textarea>
          </div>
          <button class="contact__button | button" data-type="primary">
            Submit
          </button>
        </form>
      </div>
    </section>

    <section class="content-grid | bg-clr-neutral-500">
      <img
        class="map | full-width"
        src="@/assets/images/map.png"
        alt=""
      />
    </section>

    <section>
      <JoinComp />
    </section>

    <Footer />
  </main>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
import SignUp from "@/components/SignUp.vue";
import LogIn from "@/components/LogIn.vue";
import JoinComp from "@/components/JoinComp.vue";
import Footer from "@/components/Footer.vue";

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

<style scoped>
.contact__hero {
  padding-block: 5.5rem;
}

.contact__form {
  display: grid;
  gap: 1.5rem 1rem;
  grid-auto-columns: 1fr;
  grid-template-areas:
    "name"
    "email"
    "url"
    "type"
    "request"
    "button";
}

.form__select {
  border: 1px solid var(--clr-grey-200);
  background-color: var(--clr-neutral-100);
  border-radius: 4px;
  width: 100%;
  padding: 0.95rem 1rem;
}

@media screen and (min-width: 65em) {
  .contact__form {
    grid-template-areas:
      "name email"
      "url type"
      "request request"
      "button button";
  }
}

.form__label {
  color: var(--clr-grey-800);
  font-size: var(--fs-300);
  display: flex;
  gap: 0.3rem;

  &[data-type="important"]::after {
    content: "*";
    color: var(--clr-error-400);
  }
}

.name {
  grid-area: name;
}

.email {
  grid-area: email;
}

.url {
  grid-area: url;
}

.type {
  grid-area: type;
}

.request {
  grid-area: request;
}

.contact__button {
  grid-area: button;
}

</style>
