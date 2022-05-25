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
          <ScheduleCard 
            :month = "m"
            :year = "y"
            :days = "d"
          
          />
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
        // DB
        itinerary_id: "2314",
        title: "Taipei Trip",
        area: "Taipei",
        start_date: "2023-05-12",
        end_date: "2023-05-14",
        duration: 3,
        vehicle: "Car",
        attractions: [["Taipei 101", "COMMUNE A7", "NTU Park"],["Ximen", "Starbucks"],["H Hotel", "COMMUNE B6"]],
        travel_time: [["1 hour 03 minutes", "1 hour 35 minutes"],["1 hour 53 minutes"],["3 hour 08 minutes"]],
        notes: [["", "", ""],["", ""],["", ""]],
        host: "0012",
        participants: ["0034", "0055", "0100", "0003"],
        invitees: ["0014", "0033", "0076"],

        // tempt usage 
        m: "May",
        y: "2023",
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
                        place:"Ximen", 
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

