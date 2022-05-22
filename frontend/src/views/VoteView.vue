<template>

    <div>
        <ProgressBar class = "ProgressBar" :NextStatus = "!allAdopted"/>
    </div>
    <v-btn 
      class = "text_up1"
      plain 
      elevation="0"
      @click = "clickButton"
      v-if = "!nextMode"
    >
      Wait for participants to vote ...
    </v-btn>
    <div class = "text_up2" v-if = "nextMode">Now they’re all ended!</div>
    
    
    <div v-if = "!nextMode">
        <VoteCard />
    </div>
    <div v-if = "nextMode">
        <VoteCardModeB @FinishVote = "allAdopted = true"/>
    </div>

    <div class = "text_2" v-if = "!nextMode">You can also discard or adopt the poll to go next.</div>
    <div class = "text_2" v-if = "nextMode">Adopt or ignore the results ...</div>
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
    }
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


.ProgressBar,.text{
    max-width: 390px;
    margin-left: 40px;
    
}
.text_up1{
    margin-top: 20px;
    max-width: 360px;
    margin-left: 45px;
    
}
.text_up2{
    margin-top: 25px;
    max-width: 360px;
    margin-left: 55px;
}
.text_2{
    margin-top: 25px;
    max-width: 360px;
    margin-left: 55px;
    font-size: 12px;
}





</style>

