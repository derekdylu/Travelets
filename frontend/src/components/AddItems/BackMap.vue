<template>
  <div>
    <GoogleMap
    api-key="AIzaSyANrwaZvz-cZ9uepOzw6w9anBZaSNqP96w"
    style="width: 100%; height: 200px"
    :center="center"
    :zoom="15"
    >
      <Marker :options="{ position: center }" />
    </GoogleMap>
  </div>
</template>

<script>
  import { defineComponent } from 'vue'
  import { GoogleMap, Marker } from 'vue3-google-map'

  export default defineComponent({
    components: { GoogleMap, Marker },
    setup() {
      const center = { lat: 25.023035, lng: 121.529572 }

      return { center }
    },
  })
</script>

<style>

</style>