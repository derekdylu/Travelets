<template>
  <div>
    <v-dialog
      v-model = "dialog"
      persistent
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          @click.stop= "dialog = true"
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon dark>
            mdi-pencil
          </v-icon>
          EDIT
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <span class="memoblc_title">Add Memo for this spot</span>
        </v-card-title>
        <v-card-text >
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                    class = "input_memo"
                    label="Memo..."
                    required
                    v-model = "memo_text"
                >
                </v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <!-- <p> {{memo_text}} </p> -->
          <p class = "text_bottom">Automatically saved before closing</p>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click= "onClick(memo_text)"
          >
            Close 
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    name: "PopupEdit",

    props: {
        // memo_text: String,
    },

    components: {

    },

    data () {
      return {
        dialog: false,
        memo_text: "",
      }
    },

    // computed: {
    //   input: {
    //     get(){
    //         return this.value;
    //     },
    //     set(newVal){
    //         this.value = newVal;
    //     }
    //   }
    // },

    methods:{
      onClick(m){
          this.dialog = false;
          this.memo_text = m;
          console.log(this.memo_text);
      },
      
    },
  }

  
</script>

<style>
.memoblc_title{
    font-size: 20px;
    margin: 10px;
    margin-top: 20px;
    margin-bottom: 0px;
}

.text_bottom{
    font-size: 12px;
    color: rgb(126, 126, 126);
    font-weight: 500;
    margin-top: 0px;
}

.input_memo{
    /* border: solid 1px; */
    padding: 0px;
    height: fill;
}
</style>

