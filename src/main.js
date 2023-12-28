import './assets/main.css'
import './assets/tailwind.css'

import { createApp } from 'vue'
import { register } from 'swiper/element/bundle'
import router from './router/router'
import App from './App.vue'

register()
createApp(App).use(router).mount('#app')
