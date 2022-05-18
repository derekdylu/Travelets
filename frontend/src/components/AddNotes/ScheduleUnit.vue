<template >
    <v-card-text > 
        <v-row 
            align="center"
            justify = "space-around"
        >
            <v-col>
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
            <v-col>
                <v-timeline 
                    dense
                >
                    <v-timeline-item>
                        <p class = "place"> {{place}} </p>
                    </v-timeline-item>
                    <v-timeline-item>
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
}

.note_card{
    /* display: none; */
    padding: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-top: 10px;
    width: 100px;
    height: auto;
    overflow: 
}

</style>