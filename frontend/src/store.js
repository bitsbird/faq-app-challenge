import Vue from 'vue';
import Vuex from 'vuex';
import * as ordersService from '@/api/ordersService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    orders: [],
  },
  getters: {
    getOrderByReference: (state) => (reference) => {
      return state.orders.find((o) => o.reference === reference);
    },
  },
  mutations: {
    SET_ORDERS(state, orders) {
      state.orders = orders;
    },
  },
  actions: {
    async fetchOrders({ commit }) {
      const orders = await ordersService.fetch();
      commit('SET_ORDERS', orders);
    },
  },
});
