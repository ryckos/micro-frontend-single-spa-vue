import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';
import Login from '@/pages/Login/Login';
import Register from '@/pages/Register/Register';



import { isAuthenticated } from './mixins/auth';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      beforeEnter: (to, from, next) => {
        let token = localStorage.getItem('token');
        isAuthenticated(token) ? next() : next({path: '/login'});
      },
    },
  ],
});
