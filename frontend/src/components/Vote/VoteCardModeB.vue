<template >
  <v-card v-for = "card in cards" :key = "card" class = "container">
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
            v-if = "!card.finish_adopt"
        ></v-progress-linear>
        <v-row 
            align="center"
            justify="space-between"
            no-gutters
            style="margin-top:5px"
            v-if = "!card.finish_adopt"
        >
            <span class="text-subtitle-2 font-weight-bold">{{card.voteItems[1]}}</span>
            <span class="text-subtitle-2 font-weight-bold">{{card.voteNumbers[1]}}</span>
        </v-row>
        <v-progress-linear
            v-model="card.voteProgress[1]"
            height="10"
            color="primary"
            rounded
            v-if = "!card.finish_adopt"
        ></v-progress-linear>
        <v-row 
            align="center"
            justify="space-between"
            no-gutters
            style="margin-top:10px; margin-bottom:10px"
            v-if = "!card.finish_adopt"
        >
            <span class="text-sm-body-2 ">ended</span>
            <span class="text-sm-body-2 ">{{card.voteTotal}}/10 people voted</span>
        </v-row>
        <v-row
          align="center"
          justify="end"
          no-gutters
          v-if = "!card.finish_adopt"
        >
          <PopupIgnore class= "bton_2" @delete = "DeleteCard(card)"/>
          <PopupAdopt class= "bton_2" @update = "close(card)" :disableBtn = "card.disable"/>
          
        </v-row>
    </v-card-text>

  </v-card>
</template>

<script>
  import PopupIgnore from "./PopupIgnore.vue"
  import PopupAdopt from "./PopupAdopt.vue"

  export default {
    name: "VoteCardModeB",
    components: {
      PopupIgnore,
      PopupAdopt
    },
    props: {
      votes: [],
    },
    data() {
      return {
        cards: [
          {
            voteItems: [],
            voteNumbers: [],
            voteProgress: [],
            voteTotal: 9,
            disable: false,
            finish_adopt: false
          },
          {
            voteItems: [],
            voteNumbers: [],
            voteProgress: [],
            voteTotal: 9,
            disable: false,
            finish_adopt: false
          },
        ],
      }
    },
    methods:{
      close(card) {
        card.finish_adopt = true;
        // console.log(this.cards.indexOf(card));
        this.CheckAllFinished();
      },
      CheckAllFinished(){
        let count = 0;
        for(var i = 0; i < this.cards.length; i++){
          if(!this.cards[i].finish_adopt){ //not yet finish
            count++;
          }
        }
        if(count == 0){
          this.$emit('FinishVote');
        }
      }, 
      DeleteCard(card){
        // let index = this.cards.indexOf(card)
        // if (index > -1) {
        //   this.cards.splice(index, 1);
        // }
        card.finish_adopt = true;
        this.CheckAllFinished();
      },
      updateCards() {
        let defaultAttractions = ["Taipei 101", "COMMUNE A7", "A Train", "Placebo"]
        for (let i = 0; i < this.$store.state.trip.attractions[0].length; i++) {
          defaultAttractions[i] = this.$store.state.trip.attractions[0][i].text
        }
        
        for (let i = 0; i < this.cards.length; i++){
          
          this.cards[i].voteNumbers.push(this.votes[i])
          this.cards[i].voteNumbers.push(10 - this.votes[i] - 1)

          this.cards[i].voteProgress.push((this.votes[i] * 10).toString())
          this.cards[i].voteProgress.push(((10 - this.votes[i] - 1) * 10).toString())

          this.cards[i].voteItems.push(defaultAttractions[0 + i*2])
          this.cards[i].voteItems.push(defaultAttractions[1 + i*2])
        }
        console.log(this.cards)
      }
    },
    mounted() {
      this.updateCards();
    }
  }
</script>

<style>
.container{
  
  overflow: auto;
  box-shadow:2px 2px 10px -2px rgba(163, 163, 179, 0.5);
  border: 1px solid rgb(255, 255, 255);
  background-color: rgb(255, 255, 255);
  min-width:300px;
  border-radius: 20px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 25px;
  
}
.bton_2{
  
  margin-left:5px;
  /* width:80px; */
  
}
</style>