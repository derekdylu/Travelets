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
  import { defineComponent, ref } from 'vue'
  import { GoogleMap, Marker } from 'vue3-google-map'

  export default defineComponent({
    components: {
      GoogleMap,
      Marker 
    },
    setup(props) {
      let glat = ref(props.lat)
      let glng = ref(props.lng)
      console.log(glat.value, glng.value)
      
      const center = { lat: glat.value, lng: glng.value }

      return { center }
    },
    props: {
      lat: {
        type: Number,
        default: 25.015733
      },
      lng: {
        type: Number,
        default: 121.530448
      },
    },
  })
</script>

<style>

</style>