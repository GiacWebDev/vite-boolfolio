import './assets/main.scss'

import { createApp } from 'vue'
import { router } from './router'
import App from './_App.vue'

createApp(App).use(router).mount('#app')
