import Vue from 'vue';
import Vuex from 'vuex';

import State from '@/store/state';

import Question from '@/models/question';

import { getQuestions } from '@/data/questions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: new State(),
  mutations: {
    SET_QUESTIONS(state, questions: Question[]) {
      state.questions = questions;
    },
    CHANGE_QUESTION(state, delta: number) {
      const newIndex = state.currentQuestionIndex + delta;
      if (newIndex < 0 || newIndex >= state.questions.length) {
        return;
      }

      state.currentQuestionIndex = newIndex;
    },
  },
  actions: {
    initializeQuestions({ commit }) {
      const questions = getQuestions();
      commit('SET_QUESTIONS', questions);
    },
    changeQuestion({ commit }, delta: number) {
      commit('CHANGE_QUESTION', delta);
    },
  },
  getters: {
    currentQuestion: (state) => {
      return state.questions[state.currentQuestionIndex];
    },
  },
});
