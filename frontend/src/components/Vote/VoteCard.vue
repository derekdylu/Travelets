<template >
  <v-card v-for = "card in cards" :key = "card" class = "container_1">
    <v-card-header>     
        <div class="text-subtitle-2 font-weight-bold">
          Poll: {{card.voteItems[0]}}/{{card.voteItems[1]}}
        </div>
    </v-card-header>
    <v-card-text > 
        <v-row 
            align="center"
            justify="space-between"
            no-gutters
        >
            <span class="text-subtitle-2 font-weight-bold">{{card.voteItems[0]}}</span>
            <span class="text-subtitle-2 font-weight-bold">{{card.voteNumbers[0]}}</span>
        </v-row>
        <v-progress-linear
            v-model="card.voteProgress[0]"
            height="10"
            color="primary"
            rounded
        ></v-progress-linear>
        <v-row 
            align="center"
            justify="space-between"
            no-gutters
            style="margin-top:5px"
        >
            <span class="text-subtitle-2 font-weight-bold">{{card.voteItems[1]}}</span>
            <span class="text-subtitle-2 font-weight-bold">{{card.voteNumbers[1]}}</span>
        </v-row>
        <v-progress-linear
            v-model="card.voteProgress[1]"
            height="10"
            color="primary"
            rounded
        ></v-progress-linear>
        <v-row 
            align="center"
            justify="space-between"
            no-gutters
            style="margin-top:10px; margin-bottom:10px"
        >
            <span class="text-sm-body-2 ">ends in 24 hours</span>
            <span class="text-sm-body-2 ">{{card.voteTotal}}/10 people voted</span>
        </v-row>
        <v-row
          align="center"
          justify="end"
          no-gutters
        >
          <v-btn 
            class= "bton_2"
            variant="text"
          >
            DISCARD
          </v-btn>
          <v-btn 
            
            color = "primary"
            class= "bton_2"
          >
            ADOPT
          </v-btn>
        </v-row>
    </v-card-text>

    
    
    
  </v-card>
</template>

<script>
  

  export default {
      name: "VoteCard",
      data() {
        return {
          cards: [
            {
              voteItems: ["Taipei 101", "COMMUNE A7"],
              voteNumbers: [0, 0],
              voteProgress: ["0", "0"],
              voteTotal:0
            },
            {
              voteItems: ["A Train", "Placebo"],
              voteNumbers: [1, 0],
              voteProgress: ["10", "0"],
              voteTotal:1
            },

          ],
          mode_B: false
        }
      },
      // computed: {
      //   totals: function(){
      //     var sum = [0,0];
      //     for (var i = 0; i < this.cards.length; i++) {
      //       for (var j = 0; j < this.cards[i].voteNumbers.length; j++){
      //         sum[i] += this.cards[i].voteNumbers[j];
      //       }
      //     }
      //     return sum;
      //   }
      // }
  }
</script>

<style>
.container_1{
  max-width: 360px;
  overflow: auto;
  box-shadow:2px 2px 10px -2px rgba(163, 163, 179, 0.5);
  border: 1px solid rgb(255, 255, 255);
  background-color: rgb(255, 255, 255);
  
  border-radius: 20px;
  margin-left: 55px;
  margin-top: 25px;
  
}
.bton_2{
  width:80px;
  margin-left:10px;
}



</style>