import { createRouter, createWebHistory } from 'vue-router' 

import Home from '../views/Home.vue'
import About from '../views/About/index.vue'
import Components from '../views/Components/index.vue'
import Contact from '../views/Contact/index.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/components', name: 'Components', component: Components },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router