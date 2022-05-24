<template>
  <div>
    <v-btn
      variant = "text"
      
      @click.stop="dialog = true"
    >
      IGNORE
    </v-btn>

    <v-dialog
      v-model="dialog"
      persistent
      max-width="360"
    >
      <v-card class = "rounded-xl">
        <v-card-title class="text-subtitle-2 font-weight-bold">
          Ignore the result 
        </v-card-title>

        <v-card-text class="text-sm-body-2" style = "padding-top:0px">
          Ignore the result will delete the second option no matter wether it has the most votes and choose the first option.
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
              @click="ignore"
            >
              IGNORE
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
      ignore(){
        this.dialog = false;
        this.$emit('delete')
        
      }
    }
  }
</script>

<style>

</style>

