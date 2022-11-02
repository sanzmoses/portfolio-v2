import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import { createPinia } from 'pinia'

import { Quasar } from 'quasar'
import { Dark } from 'quasar'

// import VueHighlightJS from 'vue-highlightjs'
// import VueHighlightJS from 'vue3-highlightjs'
// import 'highlight.js/styles/solarized-light.css'
import 'highlight.js/styles/stackoverflow-light.css'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import hljsVuePlugin from "@highlightjs/vue-plugin";
hljs.registerLanguage('javascript', javascript);

// import 'animate.css/animate.min.css'
import 'animate.css/animate.compat.css';

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

createApp(App)
  .use(router)
  .use(createPinia())
  .use(Quasar, {
    plugins: { }, 
  })
  .use(hljsVuePlugin)
  .mount('#app')

Dark.set(true)