<template>
  <div>
    <v-btn class="ma-5" @click="increment">{{ count }}</v-btn>
    <span>{{ countGreaterThan5 }}</span>
    <h1 v-if="countGreaterThan3">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
    <li v-for="item in items" :key="item.id">
      {{ item.message }}
    </li>
    <v-btn class="ma-5" color="danger" @click="filter">filter</v-btn>
    <v-text-field label="Main input" v-model="my_message" />
    <p>Message is: {{ my_message }}</p>
    <v-btn class="ma-5" color="primary" @click="greet">greet</v-btn>
    <v-text-field label="Main input" v-model="question" />
    <p ref="aaa">{{ answer }}</p>
    <v-btn class="ma-5" color="primary" @click="$emit('plzEnlarge')"> enlarge lah </v-btn>
    <p>{{ needle }}</p>
    <v-timeline light>
      <v-timeline-item size="15px" fill-dot dot-color="secondary">timeline item</v-timeline-item>
      <v-timeline-item>timeline item</v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count: 0,
        items: [{ message: 'Foo' }, { message: 'Bar' }],
        my_message: "",
        question: "",
        answer: "waiting"
      }
    },
    inject: ['needle']
    ,
    methods: {
      increment() {
        this.count++
      },
      filter() {
        this.items = this.items.filter((item) => item.message.match(/Foo/))
      },
      greet(event) {
        // `this` inside methods points to the current active instance
        alert(`Hello ${this.items[0].message}!`)
        // `event` is the native DOM event
        if (event) {
          alert(event.target.tagName)
          alert(this.my_message)
        }
      },
      async getAnswer() {
        this.answer = 'Thinking...'
        try {
          const res = await fetch('https://yesno.wtf/api')
          this.answer = (await res.json()).answer
        } catch (error) {
          this.answer = 'Error! Could not reach the API. ' + error
        }
      },
    },
    computed: {
      countGreaterThan5() {
        return this.count > 5 ? '大於五' : ''
      },
      countGreaterThan3() {
        return this.count > 3 ? true : false
      }
    },
    mounted() {
      // methods can be called in lifecycle hooks, or other methods!
      console.log(this.$refs.aaa) // to get tha whole element after mounted via refs
    },
    watch: {
      // whenever question changes, this function will run
      question: {
        handler(newQuestion) {
            if (newQuestion.indexOf('?') > -1) {
            this.getAnswer()
          }
        },
        // some modifier put here
      }
    },
  }
</script>

<style>

</style>