/**
 * Route file
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';

Vue.use(VueRouter);

// mode history => hide #/ in the URL
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        }
    ]
})

export default router;