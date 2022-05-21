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
import PopupEdit from "./PopupEdit.vue"

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

.edit_btn_popup2{
    width: 70px;
    position: relative;
    /* border: solid 1px red; */
}

.note_card2{
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
</style>