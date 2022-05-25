<template >
    <v-card-text> 
        <v-row 
            align="stretch"
            no-gutters
        >
            <v-col
                cols = "4"
                max-width = "fill"
                align = "left"
            >
                <v-card
                    class = "note_card_result"
                    min-height = "130px"
                    max-height = 'fill'
                    width = '180px'
                >
                    <p style = "word-wrap: break-word;">{{text}}</p>
                </v-card>
            </v-col>
            <v-col
                cols = "8"
                align="left"
                justify="start"
            >
                <v-timeline v-if = "notLast"
                    class = "time_line"
                    density="comfortable"
                    side="end"
                    align="start"
                    truncate-line="start"
                >
                    <v-timeline-item 
                        size = "20px"
                        fill-dot
                        dot-color = "#a9a9a9"
                        left
                    >
                        <p class = "place"> {{place}} </p>
                    </v-timeline-item>
                    <v-timeline-item 
                        size = "20px"
                        fill-dot
                        dot-color = "#d3d3d3"
                        left
                    >
                        <p class = "time"> {{time}} </p>
                    </v-timeline-item>
                </v-timeline>
                <v-timeline v-else
                    class = "time_line"
                    density="comfortable"
                    side="end"
                    align="start"
                    truncate-line="end"
                >
                    <v-timeline-item 
                        size = "20px"
                        fill-dot
                        dot-color = "#a9a9a9"
                        left
                    >
                        <p class = "place"> {{place}} </p>
                    </v-timeline-item>
                </v-timeline>
            </v-col>
        </v-row>
    </v-card-text>
</template>

<script>

  export default {
      name: "ShowScheduleUnit",
      props: {
        place: String,
        time: String,
        text: String,
        notLast: Boolean,
      },
      components: {

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

.note_card_result{
    padding: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
    position: relative;
}

.time_line_show{
    position: relative;
    left: 0px;
    padding: 0px;
    /* border: solid 1px; */
    margin-left: 10px;
}https://meet.google.com/rbg-ocwo-mpz

</style>