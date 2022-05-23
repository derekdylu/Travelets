<template >
    <v-card-text> 
        <v-row 
            align="start"
            no-gutters
        >
            <v-col
                cols = "4"
                max-width = "fill"
            >
                <PopupEdit 
                    class= "edit_btn_popup"
                    :spot_name = "place"
                    @value-update = "getValFromChild"
                />
        
                <v-card
                    class = "note_card"
                    min-height = "90px"
                    max-width = "fill"
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
                    class = "time_line"
                    density="comfortable"
                    side="end"
                    align="start"
                    truncate-line="start"
                >
                    <v-timeline-item 
                        class = "t1"
                        size = "20px"
                        fill-dot
                        min-height = "30px"
                        dot-color = "#a9a9a9"
                        left
                    >
                        <p class = "place"> {{place}} </p>
                    </v-timeline-item>
                    <v-timeline-item
                        class = "t2"
                        size = "20px"
                        fill-dot
                        min-height = "50px"
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
            blc_h: "",
        }
    },
    methods:{
        getValFromChild(val) {
            this.input_text = val;
            if(val == ""){
                this.input_text = "No Memo.";
            }
            this.blc_h = document.querySelector('.note_card').getBoundingClientRect().height + "px";
            console.log(this.blc_h)
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