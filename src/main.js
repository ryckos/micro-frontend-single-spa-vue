import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue';
import VueTouch from 'vue-touch';
import axios from 'axios';
import Toasted from 'vue-toasted';

import store from './store';

import layoutMixin from './mixins/layout';
import { AuthMixin } from './mixins/auth';
import config from './config';
import Widget from './components/Widget/Widget';


import './registerServiceWorker'
import router from './Routes'
import './single-spa-config'

axios.defaults.baseURL = config.baseURLApi;
axios.defaults.headers.common['Content-Type'] = "application/json";
const token = localStorage.getItem('token');
if (token) {
    axios.defaults.headers.common['Authorization'] = "Bearer " + token;
}

Vue.use(BootstrapVue);
Vue.use(VueTouch);
Vue.component('Widget', Widget);
Vue.mixin(layoutMixin);
Vue.mixin(AuthMixin);
Vue.use(Toasted, {duration: 10000});


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
