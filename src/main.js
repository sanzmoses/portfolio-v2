import { createApp } from 'vue'
import App from './App.vue'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import { createPinia } from 'pinia'

loadFonts()

createApp(App)
  .use(router)
  .use(createPinia())
  .mount('#app')
