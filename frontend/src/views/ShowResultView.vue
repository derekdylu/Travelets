<template>
    <div>
      <v-container class="pa-0">
        <v-col align="center" class="pa-0">
          <ProgressBar primaryButton = "SAVE" /> 
        </v-col>
      </v-container>
      <v-container class="pa-0">
        <v-col align="center" class="pa-0">
          <p class = "title"> Congrats! <span class = "green">{{trip_name}}</span> is ready now!</p>
        </v-col>
      </v-container>
      <v-container class="pa-0">
        <v-col align="center">
          <ResultCard />
        </v-col>
      </v-container>
    </div>
</template>

<script>
import ProgressBar from '../components/General/ProgressBar.vue'
import ResultCard from '../components/Result/ResultCard.vue'

export default {
  name: 'ShowResultView',
  components: {
    ProgressBar,
    ResultCard,
  },
  data() {
      return {
          trip_name: "Taepei Trip",  
      }
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

/* * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
} */

.title{
    margin-top: 20px;
    margin-bottom: 5px;
}

.green{
  color: rgb(19, 139, 13);
  font-weight: 500;
}

body {
  font-family: 'Poppins', sans-serif;
}

</style>