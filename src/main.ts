import './assets/main.css'

import {createApp, Plugin} from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { i18n } from './plagins/i18nPlugin';

const app = createApp(App)

app.use(createPinia()).use(i18n as Plugin)

app.mount('#app')
