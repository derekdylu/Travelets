<template >
    <v-card-text class="pa-0 py-4"> 
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
                    max-width = '180px'
                >
                    <p style = "word-wrap: break-word;">{{show_text}}</p>
                    <v-row v-if = "tooLong" justify= "center">
                            <v-btn 
                                icon flat
                                @click= "onClick_open()"
                                size = "25px"
                                class="ma-1"
                            >
                                <v-icon 
                                    :icon = "open? 'expand_less' : 'expand_more'"
                                    size = "20px"
                                />
                            </v-btn>
                    </v-row>
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
                    line-thickness = "2.5"
                >
                    <v-timeline-item 
                        size = "25px"
                        fill-dot
                        dot-color = "#a9a9a9"
                        left
                        icon="place"
                        icon-color = "white"
                    >
                        <p class = "place"> {{place}} </p>
                    </v-timeline-item>
                    <v-timeline-item 
                        size = "25px"
                        fill-dot
                        dot-color = "#d3d3d3"
                        left
                        icon="schedule"
                        icon-color = "white"
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
                    line-thickness = "2.5"
                >
                    <v-timeline-item 
                        size = "25px"
                        fill-dot
                        dot-color = "#a9a9a9"
                        left
                        icon="place"
                        icon-color = "white"
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
            open: false,
            tooLong: false,
            show_text: "",
            
        }
      },
      watch: {
        open: {
            handler() {
                console.log('check');
                if(!this.open){
                    this.hideBlock();
                }
                else{
                    this.recoverText();
                }
            },
        },
      },
      methods:{
        onClick_open(){
            this.open = !this.open;
        },
        hideBlock(){
            this.show_text = this.text.substr(0,80) + '...';
        },
        recoverText(){
            this.show_text = this.text;
        },
        checkLength(){
            if(this.text && this.text.length > 80){
                this.tooLong = true;
                console.log("toolong")
            }
        }
      },
      mounted(){
          this.checkLength();
          this.show_text = this.text;
          if(this.tooLong){
              this.hideBlock();
            //   this.open = !this.open;
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
}

</style>