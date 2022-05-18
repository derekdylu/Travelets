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
    
  }
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

/* .container_2 {
  max-width: 390px;
  height: 4.5cm;
  overflow: auto;
  box-shadow:2px 2px 10px -2px rgba(163, 163, 179, 0.5);
  border: 1px solid rgb(253, 254, 255);
  background-color: rgb(255, 255, 255);
  padding: 80px;
  border-radius: 20px;
  margin-left: 40px;
  margin-top: 25px;
} */

</style>

