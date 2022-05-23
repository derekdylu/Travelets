<template>
    <div>
      <ProgressBar primaryButton = "SAVE" /> 
      <p class = "title"> Congrats! <span class = "green">{{trip_name}}</span> is ready now!</p>
      <ResultCard />
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
    margin: 20px;
    margin-left: 60px;
}

.green{
  color: rgb(19, 139, 13);
  font-weight: 500;
}

body {
  font-family: 'Poppins', sans-serif;
}

</style>