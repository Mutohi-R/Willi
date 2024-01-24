import './assets/main.css'
import './assets/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { register } from 'swiper/element/bundle'
import router from './router/router'
import App from './App.vue'

register()
const pinia = createPinia()
createApp(App).use(pinia).use(router).mount('#app')
