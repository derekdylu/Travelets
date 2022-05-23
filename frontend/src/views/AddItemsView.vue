<template>
  <div>
    <v-container class="pa-0">
      <v-col align="center" class="pa-0">
    <ProgressBar />
      </v-col>
    </v-container>
    <v-container>
      <v-col align="center">
    <BackMap :lat="lat" :lng="lng" />
      </v-col>
    </v-container>
    <!-- has to use : to v-bind -->
    <v-container>
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

  export default {
    name: 'AddItems',
    components: {
      ProgressBar,
      ItemsCard,
      BackMap
    },
    data() {
      return {
        lat: 51.4934,
        lng: 0,
      }
    },
  }
</script>

<style>

</style>