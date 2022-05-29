<template >
  <v-card v-for = "card in cards" :key = "card" class = "container_1">
    <v-card-header>     
      <div class="text-subtitle-2 font-weight-bold">
        [POLL] {{card.voteItems[0]}} / {{card.voteItems[1]}}
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
          <PopupDiscard class="bton_2"/>
          <PopupAdopt class="bton_2" :finish = "card" :disableBtn = "card.disable"/>
          
        </v-row>
    </v-card-text>

  </v-card>
</template>

<script>
  import PopupDiscard from "./PopupDiscard.vue"
  import PopupAdopt from "./PopupAdopt.vue"
  export default {
      name: "VoteCard",
      components: {
        PopupDiscard,
        PopupAdopt
      },
      data() {
        return {
          cards: [
            {
              voteItems: [],
              voteNumbers: [0, 0],
              voteProgress: ["0", "0"],
              voteTotal: 0,
              disable: true,
              finish_adopt: false
            },
            {
              voteItems: [],
              voteNumbers: [1, 0],
              voteProgress: ["10", "0"],
              voteTotal: 1,
              disable: true,
              finish_adopt: false
            },

          ],
          
        }
      },
      methods: {
        updateCards() {
          let defaultAttractions = ["Taipei 101", "COMMUNE A7", "A Train", "Placebo"]
          for (let i = 0; i < this.$store.state.trip.attractions[0].length; i++) {
            defaultAttractions[i] = this.$store.state.trip.attractions[0][i].text
          }
          
          for (let i = 0; i < this.cards.length; i++){
            this.cards[i].voteItems.push(defaultAttractions[0 + i*2])
            this.cards[i].voteItems.push(defaultAttractions[1 + i*2])
          }
          console.log(this.cards)
        }
      },
      mounted() {
        this.updateCards()
      }
  }
</script>

<style>
.container_1{
  
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