import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
require('./styles/index.css')
createApp(App).use(store).mount('#app')
