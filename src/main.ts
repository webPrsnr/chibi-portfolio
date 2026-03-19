import { createApp } from 'vue'
import i18n from './App/config/i18n'
import App from './App/index.vue'
import '../public/assets/fonts/fonts.css'
import 'reset-css'
import '@csstools/normalize.css'
import './App/config/variables.css'

createApp(App).use(i18n).mount('#app')
