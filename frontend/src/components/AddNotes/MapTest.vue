<template>
  <div id="app">
    <div class="row">
       <h1 style="text-align: center;">Google Map</h1>
       <GoogleMap 
            :latitude= 13.7013266 
            :longitude= -89.226622 
            :title="'Titulo Marcador'" />
    </div>
  </div>
</template>

<script>
import GoogleMap from "./GoogleMap";

export default {
  name: 'MapTest',
  components: {
    GoogleMap
  }
}
</script>