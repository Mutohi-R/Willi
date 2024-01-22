import { defineStore } from "pinia";
import router from "@/router/router";
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
      
    },
    isUserLoggedIn: false,
  }),
  actions: {
    init() {
      onAuthStateChanged(auth, (user) => {
        if(user) {
          this.userProfile.email = user.email;
          this.isUserLoggedIn = true;
          (async () => {
            try {
              const idToken = await user.getIdToken();
              this.userProfile.idToken = idToken
            } catch (err) {
              console.log(err)
            }
          })()
          router.push({ name: 'dashboard' })
        } else {
          this.userProfile = {}
        }
      })
    },
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
            // this.userProfile.email = auth.currentUser.email;
            this.isUserLoggedIn = true;
            router.push({ name: "dashboard" });
        } catch (err) {
            console.log(err)
        }
    },
    async logout() {
        await signOut(auth);
        // this.userProfile.email = "";
        router.push({ name: "landing-page" });
        this.isUserLoggedIn = false;
        // console.log(this.userProfile)
    }
  }
})

