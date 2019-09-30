<template>
  <div id="app">
    <v-quiz />
  </div>
</template>

<script lang="ts">
import Quiz from '@/components/Quiz.vue';

import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  components: {
    'v-quiz': Quiz,
  },
  created() {
    this.$store.dispatch('initializeQuestions');
  },
});

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
