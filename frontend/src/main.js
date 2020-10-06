import './style/reset.css';
import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
import BaseLoading from '@/components/base/BaseLoading.vue';
import BaseButton from '@/components/base/BaseButton.vue';

Vue.config.productionTip = false;

Vue.component('BaseLoading', BaseLoading);
Vue.component('BaseButton', BaseButton);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
