<template>
  <v-row justify="center">
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
      <v-card>
        <v-card-title class="text-subtitle-2">
          Discard this poll
        </v-card-title>

        <v-card-text>
          Discard this poll delete the second option and choose the first option.
        </v-card-text>

        <v-card-actions>
          

          <v-btn
            
            text
            @click="dialog = false"
          >
            CANCEL
          </v-btn>

          <v-btn
            color="danger"
            
            @click="dialog = false"
          >
            DISCARD
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
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