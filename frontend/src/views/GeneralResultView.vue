<template>
    <div>
      <v-container class="pa-0">
        <v-col align="center" class="pa-0">
          <ProgressBar primaryButton="DONE" disabledSecondary/> 
        </v-col>
      </v-container>
      <v-container class="pa-0">
        <v-col align="center" class="pa-0">
          <p class = "title"><span class = "green">{{ retirevedTrip.tripname }}</span> trip</p>
        </v-col>
      </v-container>
      <v-container class="pa-0">
        <v-col align="center">
          <ResultCard 
            :year = "y"
            :howManyDays = "duration"
            :place = "retirevedTrip.attractions"
            :time = "retirevedTrip.travel_time"
            :text = "retirevedTrip.notes"
          />
          <!-- #CHECK here we should get all data from server and parse them onto the card, but we don't have time so let's just use vuex state :) -->
          <!-- #TODO we left travel time schema to do -->
        </v-col>
      </v-container>
    </div>
</template>

<script>
import axios from 'axios'
import ProgressBar from '../components/General/ProgressBar.vue'
import ResultCard from '../components/Result/ResultCard.vue'

export default {
  name: 'GeneralResultView',
  components: {
    ProgressBar,
    ResultCard,
  },
  data() {
    return {
      retirevedTrip: [],
      duration: 0,
      // DB
      itinerary_id: "2314",
      title: "Taipei Trip",
      area: "Taipei",
      start_date: "2023-05-12",
      end_date: "2023-05-14",
      vehicle: "Car",
      attractions: [
        ["Taipei 101", "COMMUNE A7", "NTU Park", "Xinyi District"],["Ximen", "Starbucks", "TPE Main Station"],
        ["H Hotel", "COMMUNE B6"]
      ],
      travel_time: [
        ["1 hour 03 minutes", "1 hour 35 minutes","2 hour 44 minutes"],["1 hour 53 minutes", "35 minutes"],
        ["3 hour 08 minutes"]
      ],
      notes: [
        ["123", "??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????", "", "....................sddafjsnjknkj#!@#!@#..............."],
        ["a a a a a ", "12 - 15", "e t d a f  j h g f d d s d f g h           44444444444444 ads;lklsldklskldklkl .......... eawewkoekowkeowakokok wewewokrokoawewo keweokwoekwoekowke"],
        ["", "Close on Mon."]
      ],
      host: "0012",
      participants: ["0034", "0055", "0100", "0003"],
      invitees: ["0014", "0033", "0076"],

      // tempt usage 
      y: 2023,
      m: [5, 5, 5],
      dateee: [12, 13, 14],
    }
  },
  props: {
    inputID: null,
  },
  async created() {
    let id = this.$store.state.trip.id
    console.log(id)

    await axios.get('http://127.0.0.1:8000/itinerary/' + id + '/')
      .then(response => {
        this.retirevedTrip = response.data
        console.log(this.retirevedTrip)
      })
      .catch(err => {
        console.log(err)
      })
    
    var date1 = new Date(this.retirevedTrip.startDate);
    var date2 = new Date(this.retirevedTrip.endDate);
    console.log(date1, date2)

    var Difference_In_Time = date2.getTime() - date1.getTime();
    var Difference_In_Day = Difference_In_Time / (1000 * 3600 * 24)
    console.log(Difference_In_Day)

    this.duration = Difference_In_Day + 1;
    console.log(this.duration)

    console.log("att", this.retirevedTrip.attractions)
    console.log("tt", this.retirevedTrip.travel_time)
    console.log("note", this.retirevedTrip.notes)
  }
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