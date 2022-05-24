<template>

    
    <v-container class="pa-0" style = "max-width:750px">
      <v-col align="center" class="pa-0">
        <ProgressBar :disabledPrimary = "!allAdopted"/>
      </v-col>
      <v-col align="start" class="pa-0">
        <v-btn 
          class = "text_up1"
          plain 
          elevation="0"
          @click = "clickButton"
          v-if = "!nextMode"
        >
          Wait for participants to vote ...
        </v-btn>
        <div class = "text_up2" v-if = "(nextMode) & (!allAdopted)">Now they’re all ended!</div>
        <div class = "text_up2" v-if = "allAdopted">You’re ready to go!</div>
      </v-col>
    </v-container>
    <v-container class="pa-0" style = "max-width:750px">
      <v-col align="center" class="pa-0">
          <div v-if = "!nextMode">
              <VoteCard />
          </div>
          <div v-if = "nextMode">
              <VoteCardModeB @FinishVote = "allAdopted = true"/>
          </div>
      </v-col>
      <v-col align="start" class="pa-0">
          <div class = "text_2" v-if = "!nextMode">You can also discard or adopt the poll to go next.</div>
          <div class = "text_2" v-if = "(nextMode) & (!allAdopted)">Adopt or ignore the results ...</div>
      </v-col>

    </v-container>
    
    

    
</template>


<script>
import ProgressBar from '../components/General/ProgressBar.vue'
import VoteCard from '../components/Vote/VoteCard.vue'
import VoteCardModeB from '../components/Vote/VoteCardModeB.vue'


export default {
  name: 'VoteView',
  components: {
    ProgressBar,
    VoteCard,
    VoteCardModeB
  },
  data() {
    return{
      nextMode: false,
      allAdopted: false
    }
  },
  methods:{
    clickButton (){
      this.nextMode = true;
    },


  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

}

body {
  font-family: 'Poppins', sans-serif;
}



.text_up1{
    margin-top: 20px;
    min-width: 350px;
    
    
}
.text_up2{
    margin-top: 25px;
    min-width: 350px;
    margin-left: 20px;
}
.text_2{
    margin-top: 25px;
    min-width: 350px;
    margin-left: 20px;
    font-size: 12px;
}





</style>

