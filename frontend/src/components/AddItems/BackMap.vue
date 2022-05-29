<template>
  <div>
    <GoogleMap
    api-key="AIzaSyANrwaZvz-cZ9uepOzw6w9anBZaSNqP96w"
    style="max-width: 750px; height: 200px"
    :center="center"
    :zoom="15"
    >
      <Marker :options="{ position: center }" />
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
    setup() {
      const center = { lat: 25.026844, lng: 121.524053 }

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
      async trysearch(){
        
      }
    }
  }
</script>

<style>

</style>