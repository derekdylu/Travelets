<template >
    <v-card 
        v-for = "day in days" 
        :key = "day" 
        class = "c1"
        justify = "center"
        width = "100%"
    >
        <v-card-header>     
            <div class="date_title">
                {{month}} {{day.date}} {{year}} (Day {{parseInt(day.id) + 1}})
            </div>
        </v-card-header>
        <v-card-text > 
            <v-row 
                v-for="pair in day.pairs"
                :key="pair.id"
                align="center"
                justify="space-around"
                no-gutters
            >
                <ShowScheduleUnit 
                    :place= "pair.place"
                    :time= "pair.time"
                    :input_text = "pair.note"
                />
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
import ShowScheduleUnit from '../Result/ShowScheduleUnit.vue'

  export default {
      name: "ResultCard",
      components: {
        ShowScheduleUnit,
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
                        note: "123",
                    },
                    { 
                        place: "COMMUNE A7", 
                        time: "1 hour 35 minutes",
                        note: "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    },
                    { 
                        place: "Xinyi District", 
                        time: "24 minutes",
                        note: "eeeeeeeeee eeeeeeeeee eeeeeeeeee eeeeeeeeee eeeeeeeeee eeeeeeeeee eeeeeeeeee eeeeeeeeee eeeeeeeeee eeeeeeeeee",
                    },
                    { 
                        place: "NTU Park", 
                        time: "2 hour 44 minutes",
                        note: "...",
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
                        note: "d d d",
                    },
                    { 
                        place:"Starbucks", 
                        time: "35 minutes",
                        note: "444",
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
                        note: "asdadsas grgsfsgg yyyy",
                    },
                    { 
                        place:"DaAn District", 
                        time: "18 minutes",
                        note: "12/11 4:03",
                    },
                    { 
                        place:"Miss Energy", 
                        time: "1 hour 40 minutes",
                        note: "aaaaaaaaaaaaaaaaaaaaaaaaa",
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
  /* width: 390px; */
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