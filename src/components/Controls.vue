<template>
  <div>
    <button @click="changeQuestion(-1)" :disabled="disablePrevious">Previous</button>
    <span class="progress-text">
      <span>Question </span>
      <span class="current">{{currentQuestionNumber}}</span>/<span>{{questionCount}}</span>
    </span>
    <button @click="changeQuestion(1)" :disabled="disableNext">Next</button>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';

export default Vue.extend({
  computed: {
    currentQuestionNumber() {
      return this.$store.state.currentQuestionIndex + 1;
    },
    questionCount() {
      return this.$store.state.questions.length;
    },
    disablePrevious() {
      return this.$store.state.currentQuestionIndex === 0;
    },
    disableNext() {
      return this.$store.state.currentQuestionIndex + 1 === this.$store.state.questions.length;
    },
  },
  methods: {
    changeQuestion(delta: number) {
      this.$store.dispatch('changeQuestion', delta);
    },
  },
});
</script>

<style lang="scss" scoped>
.progress-text {
  margin: 0px 20px;
}

.current {
  font-weight: bold;
}
</style>