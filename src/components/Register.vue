<template>
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
</template>

<script setup>

</script>

<style scoped>
.signup__modal {
  grid-template-columns: 1fr 40%;
  min-width: 62.5rem;
}

.signup__content {
  width: 80%;
  margin-inline: auto;
  padding-block: 1.8rem;
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