<template >
    <v-card-text> 
        <v-row 
            align="start"
            justify = "center"
            no-gutters
        >
            <v-col
                cols = "4"
            >
                <v-card
                    elevation = "2"
                    class = "note_card_result"
                >
                    {{input_text}}
                </v-card>

            </v-col>
            <v-col
                cols = "8"
            >
                <v-timeline class = "time_line"
                    align-top
                    dense
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

  export default {
      name: "ScheduleUnit",
      props: {
        place: String,
        time: String,
        input_text: String,
      },
      components: {

      },
      data() {
        return {
            // place: "Taipei 10101",
            // time: "100 hour 23 minutes",
            // input_text: "my note my note my note...my note "
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

.note_card_result{
    /* display: none; */
    padding: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-top: 10px;
    width: fill;
    min-height: 130px;
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