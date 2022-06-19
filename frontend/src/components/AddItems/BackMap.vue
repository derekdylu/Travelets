<template>
  <div>
    <GoogleMap
    api-key=""
    style="max-width: 750px; height: 200px"
    :center="{ lat: lat, lng: lng }"
    :zoom="15"
    >
      <Marker :options="{ position: { lat: lat, lng: lng } }" />
    </GoogleMap>
  </div>
</template>

<script>
  // import { ref } from 'vue'
  import { GoogleMap, Marker } from 'vue3-google-map'
  // import { Loader } from "@googlemaps/js-api-loader"
  // import axios from 'axios'

  export default {
    data() {
      return {
        
      }
    },
    components: {
      GoogleMap,
      Marker 
    },
    setup(props) {
      const center = { lat: props.lat, lng: props.lng }
      return { center }
    },
    props: {
      lat: {
        type: Number,
        default: 25.026844
      },
      lng: {
        type: Number,
        default: 121.524053
      },
    },
    methods: {

    }
  }
</script>

<style>

</style>