import Vue from 'vue';
import Vuex from 'vuex';

import Question from '@/models/question';

import { getQuestions } from '@/data/questions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questions: [] as Question[],
    currentQuestionIndex: 0 as number,
  },
  mutations: {
    SET_QUESTIONS(state, questions: Question[]) {
      state.questions = questions;
    },
    CHANGE_QUESTION(state, delta: number) {
      // We have to add the length again because javascript handles modulo oddly with negative numbers
      state.currentQuestionIndex = (state.currentQuestionIndex + delta + state.questions.length)
        % state.questions.length;
    },
  },
  actions: {
    initializeQuestions({ commit }) {
      const questions = getQuestions(2);
      commit('SET_QUESTIONS', questions);
    },
    changeQuestion({ commit }, delta: number) {
      commit('CHANGE_QUESTION', delta);
    }
  },
  getters: {
    currentQuestion: (state) => {
      return state.questions[state.currentQuestionIndex];
    },
  },
});
