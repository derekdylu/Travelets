<template >
    <!-- <p>123</p> -->
    <v-card-text> 
        <v-col>
            <v-timeline 
                class = "time_line"
                density="compact"
                side="end"
                align="start"
                truncate-line="start"
            >
                <TimeLineUnit 
                    v-for = "pair in pairs"
                    :place = "pair.place"
                    :time = "pair.time"
                    :key= "pair" 
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
        
      },
      components: {
          TimeLineUnit,
      },
      data() {
        return {
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
    border: solid 1px red;
    margin-left: 10px;
    min-height: 140px;
}
</style>