<template >
    <v-card-text> 
        <v-row 
            align="start"
            no-gutters
        >
            <v-col
                cols = "4"
            >
                <PopupEdit 
                    class= "edit_btn_popup"
                    @value-update = "getValFromChild"
                />
        
                <v-card
                    elevation = "2"
                    class = "note_card"
                >
                    {{input_text}}
                </v-card>

            </v-col>
            <v-col
                cols = "8"
                align="start"
                justify="start"
            >
                <v-timeline 
                    class = "time_line"
                    density="compact"
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
            </v-col>
        </v-row>
    </v-card-text>
</template>

<script>
import PopupEdit from "./PopupEdit.vue"

  export default {
      name: "ScheduleUnit",
      props: {
        place: String,
        time: String,
      },
      components: {
          PopupEdit,
      },
      data() {
        return {
            input_text: "No Memo.",
            // place: "Taipei 10101",
            // time: "100 hour 23 minutes",
            // text: "my note my note my note...my note "
        }
      },
      methods:{
        getValFromChild(val) {
          this.input_text = val;

          if(val == ""){
              this.input_text = "No Memo.";
          }
        }
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

.edit_btn_popup{
    width: 70px;
    position: relative;
    /* border: solid 1px red; */
}

.note_card{
    /* display: none; */
    padding: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-top: 10px;
    width: fill;
    min-height: 90px;
    height: auto;
    position: relative;
    /* border: solid 1px red; */
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