import { createApp } from 'vue'
import App from './App.vue'

import { loadFonts } from './plugins/webfontloader'
import router from './router'
import { createPinia } from 'pinia'

import { Quasar } from 'quasar'
import { Dark } from 'quasar'

// import 'animate.css/animate.min.css'
import 'animate.css/animate.compat.css';

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

loadFonts()

createApp(App)
  .use(router)
  .use(createPinia())
  .use(Quasar, {
    plugins: { }, 
  })
  .mount('#app')

Dark.set(true)