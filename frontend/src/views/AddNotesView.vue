<template>
    <div>
      <v-container class="pa-0">
        <v-col align="center" class="pa-0">
          <ProgressBar />
        </v-col>
      </v-container>
      <v-container class="pa-0">
        <v-col align="center" class="pa-0">
          <BackMap :lat="lat" :lng="lng" />
          <!-- has to use : to v-bind -->
        </v-col>
      </v-container>
      <v-container class="pa-0">
        <v-col align="center">
          <ScheduleCard />
        </v-col>
      </v-container>
    </div>
  
</template>


<script>
import ProgressBar from '@/components/General/ProgressBar.vue'
import BackMap from '@/components/AddItems/BackMap.vue'
import ScheduleCard from '../components/AddNotes/ScheduleCard.vue'

export default {
  name: 'AddNotesView2',
  components: {
    ProgressBar,
    BackMap,
    ScheduleCard,
  },
  data() {
      return {
        
      }
    },
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

</style>

