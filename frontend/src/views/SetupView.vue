<template>
    <div>
      <v-col align="center">
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
      </v-col>
      
      <v-btn @click.prevent="sendTrip()">jajaja</v-btn>
    </div>
</template>


<script>
import ProgressBar from '../components/General/ProgressBar.vue'
import SetTrip from '../components/Setup/SetTrip.vue'
import InviteFriend from '../components/Setup/Invite.vue'
import axios from 'axios'
// import getAPI from '../axios-api'

export default {
  name: 'SetupView',
  components: {
    ProgressBar,
    SetTrip,
    InviteFriend
  },
  data() {
    return {
      
    }
  },
  methods: {
    async sendTrip() {
      const tripData = { 
        tripname: this.$store.state.trip.tripname,
        startdate: this.$store.state.trip.startDate,
        enddate: this.$store.state.trip.endDate,
        location: this.$store.state.trip.location,
        vehicle: this.$store.state.trip.vehicle,     
      }
      console.log("check payload before sending", tripData)
      await axios.post('http://127.0.0.1:8000/itinerary/', tripData)
        // .then(response => {
        //   this.$store.dispatch('updateID', response.data["id"]) // #BUG api not sending correctly
        // })
        .catch(error => {
          console.log(error)
        })
    },
  },
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

