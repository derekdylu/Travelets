<template>
    <div>
      <ProgressBar />
    </div>

    <div class="container">
      <SetTrip />
      <InviteFriend />
    </div>
  
</template>


<script>
import ProgressBar from '../components/General/ProgressBar.vue'
import SetTrip from '../components/Setup/SetTrip.vue'
import InviteFriend from '../components/Setup/Invite.vue'

export default {
  name: 'SetupView',
  components: {
    ProgressBar,
    SetTrip,
    InviteFriend
  }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 740px; 
  min-width: 300px;
  width: 95%;
  overflow: auto;
  box-shadow:2px 2px 10px -2px rgba(163, 163, 179, 0.5);
  border: 1px solid rgb(255, 255, 255);
  background-color: rgb(255, 255, 255);
  padding: 10px;
  border-radius: 20px;
  margin-top: 25px;
  margin-left: 10px;
  height: 20cm;
}

.container2 {
  max-width: 740px; 
  min-width: 300px;
  width: 95%;
  height: 6cm;
  overflow: auto;
  box-shadow:2px 2px 10px -2px rgba(163, 163, 179, 0.5);
  border: 1px solid rgb(253, 254, 255);
  background-color: rgb(255, 255, 255);
  padding: 80px;
  border-radius: 20px;
  margin-left: 10px;
  margin-top: 25px;
}

</style>

