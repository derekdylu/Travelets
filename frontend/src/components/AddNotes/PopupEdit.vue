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
                    v-model = "input"
                >
                </v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <!-- <p> {{input}} </p> -->
          <p class = "text_bottom">Automatically saved before closing</p>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click= "dialog = false"
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
        
    },
    components: {

    },
    data () {
      return {
        dialog: false,
        input: "",
      }
    },
    methods: {
      
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

