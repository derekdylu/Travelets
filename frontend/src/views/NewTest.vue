<template>
    <div>
        <GoogleMap />
    </div>
    <div >
        <ScheCardNew />
    </div>
  
</template>


<script>
import GoogleMap from '../components/AddNotes/GoogleMap.vue'
import ScheCardNew from '../components/AddNotes/ScheCardNew.vue'

export default {
  name: 'NewTest',
  components: {
    GoogleMap,
    ScheCardNew,
  },
  data() {
      return {
        
      }
    },
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

</style>

