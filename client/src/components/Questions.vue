<template lang="html">
  <div class="">
    <div class="question-container">
      <p v-html="randomQuestion.question" class="question">{{randomQuestion.question}}</p>
      <answer class='list' v-for="(option, index) in shuffle(randomQuestion.options)" :key='index' :option="option"></answer>
    </div>
  </div>
</template>

<script>
  import {eventBus} from '../main.js'
  import Option from './Option.vue'

  export default {
    name: 'Question',
    props: ['randomQuestion'],
    components: {
      'answer': Option
    },
    methods: {
      //refac
      shuffle(arra1) {
        let ctr = arra1.length
        let temp
        let index
        while (ctr > 0) {
          index = Math.floor(Math.random() * ctr);
          ctr--;
          temp = arra1[ctr];
          arra1[ctr] = arra1[index];
          arra1[index] = temp;
        }
        return arra1;
      }
    }
  }
</script>

<style lang="css" scoped>
.question-container {
  border-style: solid;
  -webkit-animation: fadeIn 2s;
}

@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.question {
  font-size: 25px;
  text-shadow: 2px 2px 2px #000000
}

p {
  margin: 4;
  padding: 0;
}
</style>
