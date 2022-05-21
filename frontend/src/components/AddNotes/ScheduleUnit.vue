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
                <v-timeline class = "time_line"
                    align="start"
                    justify="start"
                    dense
                    density="compact"
                    side="end"
                >
                    <v-timeline-item 
                        color = "primary"
                        small
                        left
                        class = "dot_place"
                    >
                        <p class = "place"> {{place}} </p>
                    </v-timeline-item>
                    <v-timeline-item
                        color = "danger"
                        small
                        left
                        class = "dot_time"
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
    color:rgb(0, 0, 0)
}
.time{
    font-size: 15px;
    color: rgb(116, 116, 116);
}

.edit_btn_popup{
    width: 70px;
    position: relative;
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
}

.time_line{
    position: relative;
    left: 0px;
    padding: 0px;
    /* border: solid 1px; */
    margin-left: 10px;
}

.dot_place{

}

.dot_time{

}

</style>