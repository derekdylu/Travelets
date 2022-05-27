<template>
    <div>
      <v-continer class="pa-0">
        <v-col align="center" class="pa-0">
          <ProgressBar />
        </v-col>
      </v-continer>
      <v-container class="pa-0">
        <v-col align="center" class="pa-0">
          <v-card
            class="my-3 pa-3 .bg-white rounded-xl flex-column flex-grow"
            elevation="4"
            max-height="100%"
            max-width="750px"
            min-width="300px"
          >
            <SetTrip />
            <InviteFriend />
          </v-card>
        </v-col>
      </v-container>
      
      <v-btn @click.prevent="sendTrip()">jajajja</v-btn>
    </div>
</template>


<script>
import ProgressBar from '../components/General/ProgressBar.vue'
import SetTrip from '../components/Setup/SetTrip.vue'
import InviteFriend from '../components/Setup/Invite.vue'
import axios from 'axios'

export default {
  name: 'SetupView',
  components: {
    ProgressBar,
    SetTrip,
    InviteFriend
  },
  methods: {
    sendTrip() {
      // const tripData = { 
      //   tripname: this.tripname,
      //   startdate: this.startdate,
      //   enddate: this.enddate,
      //   location: this.location,
      //   value: this.value,
      //   options: this.options      
      // }
      axios
        .post()
    }
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

