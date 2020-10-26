/**
 * Route file
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from './views/dashboard.vue';

Vue.use(VueRouter);

// mode history => eleve le #/ dans l'url
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard
        }
    ]
})

export default router;