<template>

    <div>
        <ProgressBar class = "ProgressBar"/>
    </div>
    <div class = "text">Wait for participants to vote ...</div>
    <div >
        <VoteCard />
    </div>
    <div class = "text_2">You can also discard or adopt the poll to go next.</div>
  
</template>


<script>
import ProgressBar from '../components/General/ProgressBar.vue'
import VoteCard from '../components/Vote/VoteCard.vue'



export default {
  name: 'VoteView',
  components: {
    ProgressBar,
    VoteCard,
    
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
.text{
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
.container_2 {
  max-width: 390px;
  height: 4.5cm;
  overflow: auto;
  box-shadow:2px 2px 10px -2px rgba(163, 163, 179, 0.5);
  border: 1px solid rgb(253, 254, 255);
  background-color: rgb(255, 255, 255);
  padding: 80px;
  border-radius: 20px;
  margin-left: 40px;
  margin-top: 25px;
}




</style>

