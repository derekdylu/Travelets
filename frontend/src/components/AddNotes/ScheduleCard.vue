<template >
    <v-card v-for = "day in days" :key = "day" class = "container_1">
        <v-card-header>     
            <div class="text-subtitle-2 font-weight-bold">
                May {{day.date}} 2023 (Day {{day.id}})
            </div>
        </v-card-header>
        <v-card-text > 
            <v-row 
                align="center"
                justify="start"
                no-gutters
                style="margin-top:10px;"
            >
                <ScheduleUnit 
                    v-for="pair in day.pairs"
                    :place="pair.place"
                    :time="pair.time"
                    :text="pair.note"
                    :key="pair.id"
                />
            </v-row>
            <v-row 
                align="center"
                justify="space-between"
                no-gutters
                style="margin-top:10px; margin-bottom:10px"
            >
                <span class="text-sm-body-2 ">Schedule for day {{day.id}}</span>
            </v-row>
        </v-card-text>
    </v-card>
</template>
<script>
// import PopupDiscard from "../Vote/PopupDiscard.vue"
import ScheduleUnit from '../AddNotes/ScheduleUnit.vue'



  export default {
      name: "VoteCard",
      components: {
        // PopupDiscard,
        ScheduleUnit,
      },
      data() {
        return {
          days: [
            {
                id: "1",
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
                        place: "Xinyi District", 
                        time: "24 minutes",
                        note: "moviemoviemoviemovie",
                    },
                    { 
                        place: "NTU Park", 
                        time: "2 hour 44 minutes",
                        note: "for free",
                    },
                ],
            },
            {
                id: "2",
                date: "13",
                pairs: [
                    { 
                        place:"Ximen", 
                        time: "1 hour 53 minutes",
                        note: "for Kareoke",
                    },
                    { 
                        place:"Starbucks", 
                        time: "35 minutes",
                        note: "buy 1 get 1",
                    },
                    { 
                        place:"TPE Main Station", 
                        time: "17 minutes",
                        note: "",
                    },
                ],
            },
            {
                id: "3",
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
                        note: "my favorite",
                    },
                ],
            },
          ],
          mode_B: false
        }
      },
  }
</script>

<style>
.container_1{
  max-width: 390px;
  overflow: auto;
  box-shadow:2px 2px 10px -2px rgba(163, 163, 179, 0.5);
  border: 1px solid rgb(255, 255, 255);
  background-color: rgb(255, 255, 255);
  
  border-radius: 20px;
  margin-left: 40px;
  margin-top: 25px;
  
}

.concon{
  max-width: 370px;
  overflow: auto;
  box-shadow:2px 2px 10px -2px rgba(163, 163, 179, 0.5);
  border: 1px solid rgb(255, 255, 255);
  background-color: rgba(255, 255, 255, 0.642);
  
  border-radius: 20px;
  margin-left: 0px;
  margin-top: 0px;
  
}

.bton_2{
  width:80px;
  margin-left:10px;
}

</style>