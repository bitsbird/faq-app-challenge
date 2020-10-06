import './style/reset.css';
import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';

Vue.config.productionTip = false;
import BaseLoading from '@/components/base/BaseLoading.vue';
Vue.component('BaseLoading', BaseLoading);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
