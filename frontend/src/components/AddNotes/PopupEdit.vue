<template>
  <div>
    <v-dialog
      v-model = "dialog"
      persistent
    >
      <!-- <template v-slot:activator="{ on, attrs }">
        <v-btn
          color = "secondary"
          height="36"
          @click.stop= "dialog = true"
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon icon="edit" size="24"/>
        </v-btn>
      </template> -->

      <v-card
        width = "339px"
      >
        <v-card-title>
          <span class="memoblc_title">Add memo for {{spot_name}}</span>
        </v-card-title>
        <v-card-text >
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-textarea
                    class = "input_memo"
                    v-model = "input_text"
                    @input="send_back"
                >
                </v-textarea>
              </v-col>
            </v-row>
          </v-container>
          <p class = "text_bottom">Automatically saved.</p>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click= "onClick_clear()"
          >
            Clear 
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click= "onClick_close()"
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
      spot_name: String,
      inDay: Number,
      inOrder: Number,
    },
    components: {
    },
    data () {
      return {
        dialog: false,
        // input_text: "",
      }
    },
    methods:{
      onClick_clear(){
          this.input_text = "";
          this.send_back();
      },
      onClick_close(){
          console.log(this.input_text);
          this.dialog = false;
      },
      send_back(){
        this.$emit("value-update", this.input_text)
      },
      parentOpen(){
        this.dialog = true
      }
    },
    computed: {
      input_text: {
        get() {
          return this.$store.state.trip.notes[this.inDay][this.inOrder]
        },
        set(newNote) {
          this.$store.dispatch('updateNote', {newNote: newNote, d: this.inDay, i: this.inOrder})
        }
      }
    }
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

