import { createApp } from 'vue'
import App from './App.vue'

import Router from './router/index.js'
import store from './store/index.js'
// element plus 组件库
import ElementPlus from 'element-plus';

import 'element-plus/lib/theme-chalk/index.css';
import './index.css'

const app = createApp(App)
app.use(Router)
app.use(store)
app.use(ElementPlus)

app.mount('#app')