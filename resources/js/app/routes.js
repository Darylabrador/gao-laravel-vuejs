/**
 * Route file
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';

Vue.use(VueRouter);

// mode history => hide #/ in the URL
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            beforeEnter(to, from, next) {
                const loggedIn = localStorage.getItem('token');
                if(!loggedIn) {
                    return next('/login')
                }
                next()
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            beforeEnter(to, from, next) {
                const loggedIn = localStorage.getItem('token');
                if (loggedIn != null) {
                    return location.href = '/';
                }
                next()
            }
        }
    ]
});

export default router;