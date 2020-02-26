/* eslint-disable no-plusplus */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    number: 0
  },
  mutations: {
    set(state, number) {
      state.number = number;
    }
  },
  actions: {
    changed(context, number) {
      context.commit("set", number);
    }
  },
  modules: {}
});
