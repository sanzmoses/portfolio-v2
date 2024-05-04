import { createRouter, createWebHistory } from 'vue-router' 

import Projects from '../views/Projects.vue'
import About from '../views/About/index.vue'
import Components from '../views/Components/index.vue'
import Contact from '../views/Contact/index.vue'
import Initial from '../views/Initial.vue'

const routes = [
    { path: '/', name: 'Projects', component: Projects },
    { path: '/about', name: 'About', component: About },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/components', name: 'Components', component: Components },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router