<template >
    <v-card-text> 
        <v-row 
            align="start"
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
                    class = "note_card"
                    ref="nc"
                    min-height = "90px"
                    max-height = "fill"
                    width = "220px"
                >
                    <p style = "word-wrap: break-word;">{{text}}</p>
                </v-card>

            </v-col>
            <!-- <v-col
                cols = "8"
                align="left"
                justify="start"
                fluid
                class="fill-height"
            > -->
            <v-row class="fill-height">
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
                        dot-color = "#a9a9a9"
                        left
                        height="100%"
                    >
                        <p class = "place"> {{place}} </p>
                    </v-timeline-item>
                    <v-timeline-item
                        class = "t2"
                        size = "20px"
                        fill-dot
                        height="100%"
                        dot-color = "#d3d3d3"
                        left
                    >
                        <p class = "time"> {{time}} </p>
                    </v-timeline-item>
                </v-timeline>
            </v-row>
            <!-- </v-col> -->
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
            text: "No Memo.",
            blc_h: "",
            t1_h: "",
            t2_h: "",
        }
    },
    watch: {
        blc_h : function(){
            this.t1_h = 40 + parseInt((this.blc_h - 90)/2 + 10) + "px"
            // console.log("t1: ", this.t1_h);
            this.t2_h = 55 + parseInt((this.blc_h - 90)/2 + 10) + "px"
            // console.log("t2: ", this.t2_h);
        }
    },
    methods:{
        getValFromChild(val) {
            this.updateBlcHeight();
            // console.log("update");
            this.text = val;
            if(val == ""){
                this.text = "No Memo.";
                this.blc_h = 90;
            }
            this.updateBlcHeight();
        },
        updateBlcHeight(){
            this.blc_h = document.querySelector('.note_card').getBoundingClientRect().height;
            // this.blc_h = this.$refs.nc[0].style.height;
            console.log(this.blc_h);
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