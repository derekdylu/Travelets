<template>
  <div>
    <ProgressBar />
    <BackMap />
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
    }
  }
</script>

<style>

</style>