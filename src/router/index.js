import Vue from 'vue'
import VueRouter from 'vue-router'
import Meniu from '../views/Meniu.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'meniu',
    component: Meniu
  },
  {
    path: '/casa',
    name: 'casa',
    component: () => import('../views/Casa.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../views/Checkout.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router
