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
            cols = "3"  
        >
            
        </v-col>
        <v-col 
            cols = "6"
            align-self = "center"
        >
            <p class = "bottom_text"> created by {{author}}. {{date}}.</p>
        </v-col>
        <v-col cols = "3">
            <v-btn 
                icon flat
                @click = "like = !like"
            >
                <v-icon 
                    icon="favorite" 
                    :color = "like ? 'red' : 'secondary'"
                />
            </v-btn>
            <v-btn 
                icon flat
                @click = "save = !save"
            >
                <v-icon 
                    icon="bookmark" 
                    :color = "save ? color_gold : 'secondary'"
                />
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
      date: String,
  },
  data() {
    return {
        like: false,
        save: false,
        color_gold: "rgb(255, 215, 0)",
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