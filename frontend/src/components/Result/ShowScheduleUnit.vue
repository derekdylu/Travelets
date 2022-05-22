<template >
    <v-card-text> 
        <v-row 
            align="start"
            no-gutters
        >
            <v-col
                cols = "4"
                sm = "4"
                md = "4"
                lg = "4"
            >
                <v-card
                    elevation = "2"
                    class = "note_card_result"
                >
                    <p style = "word-wrap: break-word;">{{input_text}}</p>
                </v-card>
            </v-col>
            <v-col
                cols = "8"
                sm = "8"
                md = "8"
                lg = "8"
                align="start"
                justify="start"
            >
                <v-timeline 
                    class = "time_line_show"
                    density="comfortable"
                    side="end"
                    align="start"
                    truncate-line="start"
                >
                    <v-timeline-item 
                        size = "20px"
                        fill-dot
                        height = "fill"
                        dot-color = "#a9a9a9"
                        left
                    >
                        <p class = "place"> {{place}} </p>
                    </v-timeline-item>
                    <v-timeline-item
                        size = "20px"
                        fill-dot
                        height = "fill"
                        dot-color = "#d3d3d3"
                        left
                    >
                        <p class = "time"> {{time}} </p>
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
        input_text: String,
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
    margin-top: 10px;
    width: fill;
    min-height: 130px;
    height: auto;
    position: relative;
}

.time_line_show{
    position: relative;
    left: 0px;
    padding: 0px;
    /* border: solid 1px; */
    margin-left: 10px;
}

</style>