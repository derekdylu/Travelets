<template >
    <!-- <p>123</p> -->
    <v-card-text> 
        <v-col>
            <v-timeline 
                class = "time_line"
                density="comfortable"
                side="end"
                align="start"
                truncate-line="start"
            >
                <TimeLineUnit 
                    v-for = "schedule in schedules"
                    :place = "schedule.place"
                    :time = "schedule.time"
                    :key= "schedule" 
                />
            </v-timeline>
        </v-col>
    </v-card-text>
</template>

<script>
import TimeLineUnit from "./TimeLineUnit.vue"

  export default {
      name: "TimeLine",
      props: {
          schedules: [],
      },
      components: {
          TimeLineUnit,
      },
      data() {
        return {
       
        }
      },
      methods:{

      },
  }
</script>

<style>
.place{
    font-size: 15px;
    font-weight: 500;
    color:rgb(0, 0, 0);
}
.time{
    font-size: 15px;
    color: #a9a9a9;
    font-weight: 700;
}

.time_line{
    position: relative;
    left: 0px;
    padding: 0px;
    /* border: solid 1px red; */
    margin-left: 10px;
    min-height: 140px;
}
</style>