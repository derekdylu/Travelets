<template>
    <div>
      <span>{{ $store.state.trip.notes }}</span>
      <v-container class="pa-0">
        <v-col align="center" class="pa-0">
          <ProgressBar @next-page="sendNotes" />
        </v-col>
      </v-container>
      <!-- <v-container class="pa-0">
        <v-col align="center" class="pa-0">
          <BackMap :lat="lat" :lng="lng" />
        </v-col>
      </v-container> -->
      <v-container class="pa-0">
        <v-col align="center">
          <ScheduleCard 
            :year = "y"
            :howManyDays = "$store.state.trip.duration"
            :place = "$store.state.trip.attractions"
            :time = "$store.state.trip.travelTimes"
          />
          <!-- #TODO duration $store.state.trip.duration place and time -->
        </v-col>
      </v-container>
    </div>
  
</template>

<script>
import ProgressBar from '@/components/General/ProgressBar.vue'
// import BackMap from '@/components/AddItems/BackMap.vue'
import ScheduleCard from '../components/AddNotes/ScheduleCard.vue'
import axios from 'axios'

export default {
  name: 'AddNotesView2',
  components: {
    ProgressBar,
    // BackMap,
    ScheduleCard,
  },
  mounted() {
    
  },
  methods :{
    async sendNotes() {
      var formdata = new FormData();
      formdata.append("notes", JSON.stringify(this.$store.state.notes))

      // #TODO plus something in url whatever
      await axios.patch('http://127.0.0.1:8000/itinerary/' + this.$store.state.trip.id, formdata)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },
  },
  data() {
      return {
        // DB
        itinerary_id: "2314",
        title: "Taipei Trip",
        area: "Taipei",
        start_date: "2023-05-12",
        end_date: "2023-05-14",
        duration: 3,
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
          ["", "", "", ""],
          ["", "", ""],
          ["", ""]
        ],
        host: "0012",
        participants: ["0034", "0055", "0100", "0003"],
        invitees: ["0014", "0033", "0076"],

        // tempt usage 
        y: 2023,
        m: [5, 5, 5],
        dateee: [12, 13, 14],
        
        // old
        d: [
            {
                id: "0",
                date: "12",
                pairs: [
                    { 
                        place: "Taipei 101", 
                        time: "1 hour 03 minutes",
                        note: "",
                    },
                    { 
                        place: "COMMUNE A7", 
                        time: "1 hour 35 minutes",
                        note: "",

                    },
                    { 
                        place: "NTU Park NTU Park NTU Park NTU Park NTU Park NTU Park NTU Park NTU Park NTU Park NTU Park NTU Park NTU Park NTU Park NTU Park NTU Park NTU Park NTU Park NTU Park NTU Park NTU Park NTU Park NTU Park NTU Park NTU Park NTU Park NTU Park NTU Park NTU Park", 
                        time: "2 hour 44 minutes",
                        note: "",
                    },
                    { 
                        place: "Xinyi District", 
                        time: "24 minutes",
                        note: "",
                    },
                ],
            },
            {
                id: "1",
                date: "13",
                pairs: [
                    { 
                        place:"Ximending", 
                        time: "1 hour 53 minutes",
                        note: "",
                    },
                    { 
                        place:"Starbucks", 
                        time: "35 minutes",
                        note: "",
                    },
                    { 
                        place:"TPE Main Station", 
                        time: "17 minutes",
                        note: "",
                    },
                ],
            },
            {
                id: "2",
                date: "14",
                pairs: [
                    { 
                        place:"H Hotel", 
                        time: "3 hour 08 minutes",
                        note: "",
                    },
                    { 
                        place:"COMMUNE B6", 
                        time: "1 hour 05 minutes",
                        note: "",
                    },
                    { 
                        place:"DaAn District", 
                        time: "18 minutes",
                        note: "",
                    },
                    { 
                        place:"Miss Energy", 
                        time: "1 hour 40 minutes",
                        note: "",
                    },
                ],
            },
          ],
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

