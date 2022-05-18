<template>
  <div>
    <v-btn
      color="primary"
      
      @click.stop="dialog = true"
    >
      ADOPT
    </v-btn>

    <v-dialog
      v-model="dialog"
      persistent
      max-width="360"
    >
      <v-card class = "rounded-xl">
        <v-card-title class="text-subtitle-2 font-weight-bold">
          Adopt before ended
        </v-card-title>

        <v-card-text class="text-sm-body-2" style = "padding-top:0px">
          Adopt the poll result before ended will directly choose the option with the most votes.
        </v-card-text>

        <v-card-actions >
          
          <v-row 
            justify="end" 
            no-gutters
          >
            <v-btn
              
              text
              @click="dialog = false"
            >
              CANCEL
            </v-btn>

            <v-btn
              color="primary"
              @click="dialog = false"
            >
              ADOPT
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
  }
</script>

<style>

</style>

