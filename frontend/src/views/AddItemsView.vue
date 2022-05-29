<template>
  <div>
    <!-- <span>{{ lat }}, {{ lng }}</span> -->
    <v-container class="pa-0">
      <v-col align="center" class="pa-0">
        <ProgressBar @next-page="sendAttractions" />
      </v-col>
    </v-container>
    <v-container class="pa-0">
      <v-col align="center" class="pa-0">
        <BackMap :lat="lat" :lng="lng" />
        <!-- has to use : to v-bind -->
      </v-col>
    </v-container>
    <v-container class="pa-0">
      <v-col align="center">
        <ItemsCard />
      </v-col>
    </v-container>
  </div>
</template>

<script>
  import ItemsCard from '@/components/AddItems/ItemsCard.vue'
  import BackMap from '@/components/AddItems/BackMap.vue'
  import ProgressBar from '@/components/General/ProgressBar.vue'
  import axios from 'axios'

  export default {
    name: 'AddItems',
    components: {
      ProgressBar,
      ItemsCard,
      BackMap
    },
    data() {
      return {
        // lat: 51.4934,
        // lng: 0,
        tripID: 10,
      }
    },
    methods: {
      async sendAttractions() {
        this.$store.dispatch('writeAttractions');
        this.$store.dispatch('createNoteSlots');
        this.$store.dispatch('createTravelTimeSlots');

        // axios patch attractions
        var formdata = new FormData();
        formdata.append("attractions", JSON.stringify(this.$store.state.trip.attractions));

        // plus something in url whatever
        await axios.patch('http://127.0.0.1:8000/itinerary/' + this.$store.state.trip.id + '/', formdata )
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    computed: {
      lat: {
        get() {
          return this.$store.state.curPos[0]
        }
      },
      lng: {
        get() {
          return this.$store.state.curPos[1]
        }
      }
    }
  }
</script>

<style>

</style>