<template>
  <form
    @submit.prevent="SubmitForm"
    class="signup__modal | relative bg-clr-neutral-100 text-clr-grey-400"
  >
    <Cross class="cross" @click="emit('closeSignup')" />
    <div class="scroll">
      <div class="signup__content | grid gap-3">
        <h2 class="fw-bold fs-800 text-clr-purple-700">Welcome to Willi</h2>
        <p class="fs-300">Get started - It's free. No credit card needed.</p>
        <div class="grid gap-2">
          <p class="fs-200 text-clr-grey-700">
            <label for="">Email Address</label>
          </p>
          <p
            v-if="invalidEmail"
            class="flex items-center gap-2 fs-200 text-clr-error-400"
          >
            <Error />
            Invalid email address
          </p>
          <input
            @input="validateInput"
            v-model="email"
            required
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
          <p v-if="invalidPassword" class="fs-200 text-clr-info-400">
            Password must be at least 8 characters long and must contain at
            least one number.
          </p>
          <input
            @input="validateInput"
            v-model="password"
            required
            type="password"
            name="password"
            id="password"
            class="input"
          />
          <!-- <p v-if="invalidPassword" class="fs-200 text-clr-error-400"></p> -->
        </div>
        <button
          :disabled="!formValid"
          class="continue__button button | fs-300"
          data-type="primary"
        >
          Continue
        </button>
        <p class="text-clr-grey-400 fs-200">
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
          Already have an account?
          <button
            class="button"
            data-type="tertiary"
            @click="emit('openLogin')"
          >
            Log in
          </button>
        </p>
      </div>
    </div>
    <div class="signup__sidebar | hidden items-end">
      <p class="fs-400">
        Join 70,000+ teams & businesses worldwide to use Willi to collaborate
        and manage your projects every day.
      </p>
    </div>
  </form>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import Error from "./icons/Error.vue";
import Cross from "./icons/Cross.vue";

const emit = defineEmits(["openLogin", "closeSignup"]);

const email = ref("");
const password = ref("");
const invalidEmail = ref("");
const invalidPassword = ref("");
const formValid = ref("");

const validateInput = (e) => {
  const input = e.target;

  const validateEmail = () => {
    if (input.hasAttribute("type") && input.getAttribute("type") === "email") {
      const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/g;

      if (input.value.length === 0) {
        input.removeAttribute("data-type");
        invalidEmail.value = "";
      } else if (!regex.test(input.value)) {
        input.setAttribute("data-type", "invalid");
        invalidEmail.value = true;
      } else {
        // console.log(input.value);
        input.setAttribute("data-type", "valid");
        invalidEmail.value = false;
      }
    }
  };

  const validatePassword = () => {
    if (
      input.hasAttribute("type") &&
      input.getAttribute("type") === "password"
    ) {
      const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g;
      if (input.value.length === 0) {
        input.removeAttribute("data-type");
        invalidPassword.value = "";
      } else if (!regex.test(input.value)) {
        input.setAttribute("data-type", "invalid");
        invalidPassword.value = true;
      } else {
        input.setAttribute("data-type", "valid");
        invalidPassword.value = false;
      }
    }
  };
  validateEmail();
  validatePassword();

  formValid.value =
    input.value.length !== 0 &&
    !invalidEmail.value &&
    !invalidPassword.value &&
    email.value.length !== 0 &&
    password.value.length !== 0
      ? true
      : false;

  console.log("email", invalidEmail.value);
  console.log("password", invalidPassword.value);
};
</script>

<style scoped>
.signup__modal {
  grid-template-columns: 1fr 40%;
}

@media screen and (min-width: 600px) {
  .signup__modal {
    display: grid;
  }

  .signup__sidebar {
    display: grid;
  }
}

.signup__content {
  width: 80%;
  margin-inline: auto;
  padding-block: 1rem;
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

.cross {
  position: absolute;
  inset: 0.5rem 0 0 auto;
}

@media screen and (min-width: 600px) {
  .cross {
    display: none;
  }
}
</style>
