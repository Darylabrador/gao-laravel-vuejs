/**
 * Main file with all routes and components
 */
import Vue from 'vue';
import Vuetify from 'vuetify';
import Routes from './routes';
import Layout from './layouts/layout.vue';
import 'vuetify/dist/vuetify.min.css';
import _ from 'lodash';

Vue.use(Vuetify);

const main = new Vue({
    el: '#main',
    vuetify: new Vuetify({}),
    router: Routes,
    components: { Layout }
})

export default new Vuetify(main);