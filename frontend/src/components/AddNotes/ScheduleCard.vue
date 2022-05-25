<template>
    <v-card 
        v-for = "day in days" 
        :key = "day.id" 
        class="pa-3 .bg-white rounded-xl flex-column flex-grow mb-5"
        elevation="4"
        max-height="100%"
        max-width="750px"
        min-width="300px"
    >
        <v-card-header>     
            <div class="date_title">
                {{month}} {{day.date}} {{year}} (Day {{parseInt(day.id) + 1}})
            </div>
        </v-card-header>
        <v-card-text > 
            <v-row 
                v-for= "pair in day.pairs"
                :key= "pair.id"
                align="center"
                justify="start"
                no-gutters
                style="margin-top:5px;"
            >
                <ScheduleUnit 
                    :place= "pair.place"
                    :time= "pair.time"
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
import ScheduleUnit from '../AddNotes/ScheduleUnit.vue'

  export default {
      name: "ScheduleCard",
      components: {
        ScheduleUnit,
      },
      props: {
        year: String,
        month: String,
        days: [],

      },
      data() {
        return {
        
        }
      },
  }
</script>

<style>

.c1{
  height: fill;
  overflow: auto;
  box-shadow:2px 2px 10px -2px rgba(163, 163, 179, 0.5);
  border: 1px solid rgb(255, 255, 255);
  background-color: rgb(255, 255, 255);
  
  border-radius: 20px;
  /* margin-left: 40px;
  margin-right: 40px;
  margin-top: 25px; */
  
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