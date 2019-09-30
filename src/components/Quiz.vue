<template>
  <div>
    <v-controls/>
    <v-question />
  </div>
</template>

<script lang="ts">
import { IQuestion } from '@/models/question';

import Question from '@/components/Question.vue';
import Controls from '@/components/Controls.vue';

import Vue from 'vue';

export default Vue.extend({
  components: {
    'v-question': Question,
    'v-controls': Controls,
  },
  computed: {
    questions(): IQuestion[] {
      return this.$store.state.questions as IQuestion[];
    },
  },
});
</script>