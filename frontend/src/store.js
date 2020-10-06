import Vue from 'vue';
import Vuex from 'vuex';
import * as ordersService from '@/api/ordersService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    orders: [],
  },
  getters: {
    ordersCollection: (state) => [...state.orders],
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
