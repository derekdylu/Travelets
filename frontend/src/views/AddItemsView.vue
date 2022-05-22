<template>
  <div>
    <ProgressBar />
    <BackMap :lat="lat" :lng="lng" />
    <!-- has to use : to v-bind -->
    <ItemsCard />
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