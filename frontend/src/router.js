import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '@/views/Main.vue';
import ContactForm from '@/views/ContactForm.vue';
import Orders from '@/views/Orders.vue';
import OrderDetail from '@/views/OrderDetail.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/main',
    name: 'main',
    component: Main,
  },
  {
    path: '/orders',
    name: 'orders',
    component: Orders,
    children: [
      {
        path: ':reference',
        name: 'orderDetail',
        component: OrderDetail,
      },
    ],
  },
  {
    path: '/contact-form',
    name: 'contactForm',
    component: ContactForm,
  },
  {
    path: '*',
    redirect: { name: 'main' },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// @todo: track page
/*
router.beforeEach((to, from, next) => {

});
*/

export default router;
