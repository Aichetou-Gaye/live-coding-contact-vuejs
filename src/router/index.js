import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import ContactEdit from '../views/contact/ContactEdit.vue'
import ContactList from '../views/contact/ContactList.vue'
import ContactShow from '../views/contact/ContactShow.vue'
import ContactAdd from '../views/contact/ContactAdd.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactList,
    },
    {
        path: '/contact/:id',
        name: 'contact-show',
        component: ContactShow,
    },
    {
        path: '/contact/new',
        name: 'contact-add',
        component: ContactAdd,
    },
    {
        path: '/contact/edit/:id',
        name: 'contact-edit',
        component: ContactEdit,
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router