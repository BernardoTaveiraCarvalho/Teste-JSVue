import {createRouter,createWebHistory} from 'vue-router'


const routes = [
    {path: '/formContact',name: 'formContact', component: () => import('../components/FormContact.vue')},
    {path: '/contactList',name: 'contactList',component: () => import('../components/ContactList.vue')},
    {path: '/contactDetail/:id',name: 'contactDetail',component: () => import('../components/ContactDetail.vue')}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router