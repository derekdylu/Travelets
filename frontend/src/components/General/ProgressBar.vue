<template>
  <v-card class="pa-6 .bg-white rounded-b-xl">
    
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
      >
        NEXT
      </v-btn>
    </v-row>
  
  </v-card>
</template>

<script>
export default {
  name: 'ProgressBar',
  // data() {
  //     return {
  //         left_btn: "BACK",  
  //         right_btn: "NEXT",  
  //     }
  //   },
}
</script>

<style>
.bton{
  margin-left: 20px;
  margin-right: 20px;
}
</style>