<template >
    <v-card-text> 
        <v-col >
            <PopupEdit 
                class= "edit_btn_popup2"
                @value-update = "getValFromChild"
            />
        
            <v-card
                elevation = "2"
                class = "note_card2"
            >
                {{input_text}}
            </v-card>
        </v-col>
    </v-card-text>
</template>

<script>
import PopupEdit from "../AddNotes/PopupEdit.vue"

  export default {
      name: "MemoBlcUnit",
      props: {
        
      },
      components: {
          PopupEdit,
      },
      data() {
        return {
            input_text: "No Memo.",
            curr_h: "0px",
        }
      },
      methods:{
        getValFromChild(val) {
          this.input_text = val;

          if(val == ""){
              this.input_text = "No Memo.";
          }

          this.curr_h = document.querySelector('.note_card2').getBoundingClientRect().height + "px";          
          //   console.log(this.curr_h);
        },
      },
  }
</script>

<style>

.edit_btn_popup2{
    width: 70px;
    position: relative;
    /* border: solid 1px red; */
}

.note_card2{
    padding: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-top: 10px;
    min-width: 90px;
    width: fill;
    min-height: 90px;
    height: auto;
    /* position: relative; */
    /* border: solid 1px red; */
}
</style>