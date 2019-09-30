<template>
  <div class="container">
    <h2>{{ question.prompt }}</h2>
    <ul>
      <li v-for="(answer, index) in question.answers" :key="index">{{ answer.text }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Question from '@/models/question';

import Vue from 'vue';

export default Vue.extend({
  computed: {
    question() {
      return this.$store.getters.currentQuestion;
    },
  },
});

</script>

<style lang="scss" scoped>
.container {
  border: 1px solid black;
}

li {
  list-style-type: none;
  margin: 10px;
}

</style>