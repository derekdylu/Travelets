<template >
    <v-card-text> 
        <v-row 
            align="center"
            justify = "start"
            no-gutters
        >
            <v-col
                cols = "4"
            >
                <v-btn
                    class = "edit_btn"
                    color="primary"
                    fab
                    dark
                    small
                >   
                    <v-icon dark>
                        mdi-pencil
                    </v-icon>
                    EDIT
                </v-btn>
        
                <v-card
                    elevation = "2"
                    class = "note_card"
                >
                    {{text}}
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
                    >
                        <p class = "place"> {{place}} </p>
                    </v-timeline-item>
                    <v-timeline-item
                        color = "danger"
                        small
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
        text: String,
      },
      components: {
        
      },
      data() {
        return {
            // place: "Taipei 10101",
            // time: "100 hour 23 minutes",
            // text: "my note my note my note...my note my note my note...my note my note my note..."
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

.edit_btn{
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
    height: auto;
    position: relative;
}

.time_line{
    position: relative;
    left: 0px;
    padding: 0px;
    border: solid 1px;
}

</style>