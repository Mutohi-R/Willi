import { defineStore } from "pinia";
import router from "@/router/router";
import { useRouter } from "vue-router";
import { auth } from "@/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    userProfile: {
      email: "",
    },
    userToken: null,
    isLoggedIn: false,
  }),
  actions: {
    async signup(email, password) {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            router.push({ name: "dashboard" });
        } catch (err) {
            console.log(err)
        }
    },
    async login(email, password) {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            this.userProfile.email = auth.currentUser.email;
            this.isLoggedIn = true;
            router.push({ name: "dashboard" });
        } catch (err) {
            console.log(err)
        }
    },
    async logout() {
        await signOut(auth);
        this.userProfile.email = "";
        router.push({ name: "landing-page" });
        console.log(this.userProfile)
    }
  }
})

