<template>
  <div>
    <v-btn
      variant = "text"
      
      @click.stop="dialog = true"
    >
      DISCARD
    </v-btn>

    <v-dialog
      v-model="dialog"
      persistent
      max-width="360"
    >
      <v-card class = "rounded-xl">
        <v-card-title class="text-subtitle-2 font-weight-bold">
          Discard this poll
        </v-card-title>

        <v-card-text class="text-sm-body-2" style = "padding-top:0px">
          Discard this poll delete the second option and choose the first option.
        </v-card-text>

        <v-card-actions >
          
          <v-row 
            justify="end" 
            no-gutters
          >
            <v-btn
              style = "width: 80px;margin-right:5px"
              text
              @click="dialog = false"
            >
              CANCEL
            </v-btn>

            <v-btn
              style = "width: 80px;margin-right:5px"
              variant="contained"
              color="danger"
              @click="Discard"
            >
              DISCARD
            </v-btn>
          </v-row>
          
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
    methods:{
      Discard(){
        this.dialog = false;
        this.$emit('discard')
    
       }
    }
  }
</script>

<style>

</style>

