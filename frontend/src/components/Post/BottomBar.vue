<template>
  <v-card
    class = "pa-3 .bg-white rounded-t-xl flex-column flex-grow mt-1"
    elevation = "4"
    max-height = "100%"
    max-width = "750px"
    min-width = "300px"
  >
    <v-row>
        <v-col 
            cols = "4"  
        >
            
        </v-col>
        <v-col 
            cols = "4"
            align-self = "center"
        >
            <p class = "bottom_text"> created by {{author}}</p>
        </v-col>
        <v-col cols = "4">
            <v-btn icon flat>
                <v-icon icon="favorite" />
            </v-btn>
            <v-btn icon flat>
                <v-icon icon="bookmark" />
              </v-btn>
        </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "BottomBar",
  props: {
      author: String,
  },
  data() {
    return {
      
    }
  },
  watch: {
    group () {
      this.drawer = false
    },
  },
}
</script>

<style>
.bottom_text{
    color: rgb(107, 107, 107);
    font-weight: 900;
    font-size: 14px;
}
</style>