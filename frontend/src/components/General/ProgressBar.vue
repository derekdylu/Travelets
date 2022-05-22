<template>
  <v-card class="pa-6 .bg-white rounded-b-xl" elevation="4">
    <v-row
      align="center"
      justify="space-between"
    >
      <v-btn 
        class = "bton"
        variant="text"
      >
        BACK
      </v-btn>
      <v-btn 
        class = "bton"
        color="primary"
        :disabled = "NextStatus"
      >
        {{ primaryButton ? primaryButton : "NEXT"}}
      </v-btn>
    </v-row>
  
  </v-card>
</template>

<script>
export default {
  name: 'ProgressBar',
  props:{
    'NextStatus':{
      type: Boolean,
      default: false
    },
    'primaryButton':{
      type: String
    }

  }
}

</script>

<style>
.bton{
  margin-left: 20px;
  margin-right: 20px;
}
</style>