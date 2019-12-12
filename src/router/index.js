import Vue from 'vue'
import VueRouter from 'vue-router'
import Meniu from '../views/Meniu.vue'
import Burgers from '../components/Burgers';
import Crispy from '../components/Crispy'
import Salate from '../components/Salate'
import Combo from "../components/Combo";
import Bauturi from "../components/Bauturi";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'meniu',
    component: Meniu,
    children: [
      {path: 'burgers', component: Burgers},
      {path: 'crispy', component: Crispy},
      {path: 'salate', component: Salate},
      {path: 'combo', component: Combo},
      {path: 'bauturi', component: Bauturi}
    ]
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
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router
