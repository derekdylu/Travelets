<template >
    <v-card 
        v-for = "day in days" 
        :key = "day" 
        class = "c1"
        justify = "center"
    >
        <v-card-header>     
            <div class="date_title">
                {{month}} {{day.date}} {{year}} (Day {{parseInt(day.id) + 1}})
            </div>
        </v-card-header>
        <v-card-text > 
            <v-row >
                <v-col cols = "4">
                    <v-row 
                        v-for= "pair in day.pairs"
                        :key= "pair"
                        align="center"
                        justify="space-around"
                        no-gutters
                    >
                        <MemoBlcUnit/>
                    </v-row>
                </v-col>
                <v-col cols = "8">
                    <TimeLine 
                        :schedules= "day.pairs"
                    />
                </v-col>
            </v-row>
            <v-row 
                align="center"
                justify="space-between"
                no-gutters
                style="margin-top:10px; margin-bottom:10px"
            >
                <span class="text_bottom">Schedule for day {{parseInt(day.id) + 1}}</span>
            </v-row>
        </v-card-text>
    </v-card>
</template>
<script>
import MemoBlcUnit from './MemoBlcUnit.vue'
import TimeLine from './TimeLine.vue'

  export default {
      name: "ScheCardNew",
      components: {
        MemoBlcUnit,
        TimeLine,
      },
      data() {
        return {
          month: "May",
          year: "2023",
          days: [
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
                        place: "Xinyi District", 
                        time: "24 minutes",
                        note: "",
                    },
                    { 
                        place: "NTU Park NTU Park NTU Park NTU Park NTU Park NTU Park NTU Park NTU Park NTU Park NTU Park NTU Park NTU Park NTU Park NTU Park", 
                        time: "2 hour 44 minutes",
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

.c1{
  width: 100%;
  height: fill;
  overflow: auto;
  box-shadow:2px 2px 10px -2px rgba(163, 163, 179, 0.5);
  border: 1px solid rgb(255, 255, 255);
  background-color: rgb(255, 255, 255);
  
  border-radius: 20px;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 25px;
  
}

.date_title{
    font-size: 20px;
    font-weight: 900;
}
.text_bottom{
    font-size: 15px;
    margin-left: 20px;
}

</style>