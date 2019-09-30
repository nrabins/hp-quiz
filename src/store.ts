import Vue from 'vue';
import Vuex from 'vuex';

import Questions from '@/data/questions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questions: Questions,
  },
  mutations: {

  },
  actions: {

  },
});
