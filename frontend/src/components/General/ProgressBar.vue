<template>
  <v-card class="pa-6 .bg-white rounded-b-xl flex-column flex-grow" elevation="4" max-width="750px" min-width="300px">
    <v-row
      align="center"
      justify="space-between"
    >
      <v-btn
        class = "bton"
        variant="text"
        :disabled = "disabledSecondary"
        @click="prevPage()"
      >
        BACK
      </v-btn>
      <v-btn 
        class = "bton"
        color="primary"
        :disabled = "disabledPrimary"
        @click="nextPage()"
      >
        {{ primaryButton }}
      </v-btn>
    </v-row>
  
  </v-card>
</template>

<script>
export default {
  name: 'ProgressBar',
  methods: {
    prevPage(){
     this.$router.push({ name: this.$router.currentRoute.value.meta.prev})
    },
    nextPage(){
      this.$emit('next-page')
      this.$router.push({ name: this.$router.currentRoute.value.meta.next })
    }
  },
  props:{
    'disabledPrimary': {
      type: Boolean,
      default: false
    },
    'primaryButton': {
      type: String,
      default: "NEXT"
    },
    'method': {
      type: Function
    },
    'disabledSecondary': {
      type: Boolean,
      default: false
    },
  }
}

</script>

<style>
.bton{
  margin-left: 20px;
  margin-right: 20px;
}
</style>