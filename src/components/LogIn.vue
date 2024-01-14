<template>
  <form
    @submit.prevent="onSubmit"
    class="login__modal | grid bg-clr-neutral-100 text-clr-grey-400"
  >
    <div>
      <div class="login__content | grid gap-3">
        <h2 class="fw-bold fs-800 text-clr-purple-700">Continue to Willi</h2>
        <p class="fs-300">Keep tracking your projects</p>
        <div class="grid gap-2">
          <p class="fs-200 text-clr-grey-700">
            <label for="">Email Address</label>
          </p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@company.com"
            class="input"
          />
        </div>
        <div class="grid gap-2">
          <p class="fs-200 text-clr-grey-700">
            <label for="">Password</label>
          </p>
          <input
            type="password"
            name="password"
            id="password"
            class="input"
          />
        </div>
        <button class="continue__button button | fs-300" data-type="primary">
          Continue
        </button>
        <p>
          <button class="button | fs-200" data-type="tertiary">
            Forgot Password?
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
          Don't have an account?
          <button
            @click="emit('openSignup')"
            class="button"
            data-type="tertiary"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
    <div class="login__sidebar | grid items-end">
      <p class="fs-400">
        Join 70,000+ teams & businesses worldwide to use Willi to collaborate
        and manage your projects every day.
      </p>
    </div>
  </form>
</template>

<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["openSignup"]);
</script>

<style scoped>
.login__modal {
  grid-template-columns: 1fr 40%;
  min-width: 62.5rem;
}

.login__content {
  width: 80%;
  margin-inline: auto;
  padding-block: 1.1rem;
}

.continue__button {
  padding: 1rem;
}

.login__sidebar {
  background-image: url("../assets/images/form-bg.png");
  background-size: cover;
  padding: 1.5rem;
}

.login__sidebar p {
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
