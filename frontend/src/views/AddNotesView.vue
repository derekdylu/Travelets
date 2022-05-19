<template>
    <div>
        <GoogleMap />
    </div>
    <div >
        <ScheduleCard />
    </div>
  
</template>


<script>
import GoogleMap from '../components/AddNotes/GoogleMap.vue'
import ScheduleCard from '../components/AddNotes/ScheduleCard.vue'

export default {
  name: 'AddNotesView2',
  components: {
    GoogleMap,
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

