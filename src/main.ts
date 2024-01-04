import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

import 'virtual:uno.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import '@/assets/scss/index.scss'

const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
