<template>
      <nav
        id="primaryNav"
        class="primary__nav | flex justify-end items-center grow"
      >
        <ul role="list" class="nav__actions | flex items-center gap-6">
          <Settings />
          <Notification />
          <div class="user | flex gap-4 items-center">
            <img
              class="user__img"
              src="@/assets/images/hadizah.png"
              alt="user image"
            />
            <p>James Brown</p>
            <Dropdown />
          </div>
        </ul>
      </nav>
</template>

<script setup>
import { ref, defineEmits } from "vue";

import Settings from "./icons/Settings.vue";
import Notification from "./icons/Notification.vue";
import Dropdown from "./icons/Dropdown.vue";

const emit = defineEmits(["openSignup", "openLogin"]);
const isMenuOpen = ref(true);

const emitOpenSignup = () => {
  emit("openSignup");
};

const emitOpenLogin = () => {
  emit("openLogin");
};

const toggleNav = () => {
  isMenuOpen.value = !isMenuOpen.value;
  primaryNav.toggleAttribute("data-visible");
};
</script>

<style scoped>
.primary__nav {
  padding: 1rem 2rem;
  box-shadow: 0px 6px 12px 0px hsla(230, 7%, 78%, 0.3);

  /* position: fixed; */
  top: 0;
  /* z-index: 10; */
  background-color: var(--clr-neutral-100);
  width: 100%;
}

.user__img {
  width: 40px;
}

@media screen and (max-width: 960px) {
  .hamburger {
    display: block;
    position: absolute;
    inset: auto 1rem auto auto;
    z-index: 10;

    &:hover {
      cursor: pointer;
    }
  }

  .cross {
    transform: scale(1.6);
    position: absolute;
    inset: auto 1rem auto auto;
    z-index: 10;

    &:hover {
      cursor: pointer;
    }
  }

  @keyframes slideIn {
    0% {
      transform: translateX(100%);
    }

    100% {
      transform: translateX(0);
    }
  }

  @supports (backdrop-filter: blur(0.4em)) {
    .primary__nav[data-visible] {
      backdrop-filter: blur(0.3em);
    }
  }
}
</style>
