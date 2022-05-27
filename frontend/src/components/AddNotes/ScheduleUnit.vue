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
                <PopupEdit 
                    class= "edit_btn_popup"
                    :spot_name = "place"
                    @value-update = "getValFromChild"
                />
        
                <v-card
                    class = 'note_card'
                    min-height = '90px'
                    max-height = 'fill'
                    max-width = '180px'
                >
                    <p style = "word-wrap: break-word;white-space: pre-line;">{{text}}</p>
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
import PopupEdit from "./PopupEdit.vue"

export default {
    name: "ScheduleUnit",
    props: {
        place: String,
        time: String,
        notLast: Boolean,
    },
    components: {
        PopupEdit,
    },
    data() {
        return {
            text: "No Memo.",
            // notLast: true,
        }
    },
    watch: {
        
    },
    methods:{
        getValFromChild(val) {
            this.text = val;
            if(val == ""){
                this.text = "No Memo.";
            }

            console.log(this.time);
            
        },
    },
}
</script>

<style>

.place{
    font-weight: 500;
    color:rgb(0, 0, 0);
}
.time{
    color: #a9a9a9;
    font-weight: 700;
}

.edit_btn_popup{
    width: fill;
    position: relative;
    /* border: solid 1px red; */
}

.note_card{
    padding: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-top: 10px;
    /* position: relative; */
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

.t1{
    height: 100px;
}
</style>