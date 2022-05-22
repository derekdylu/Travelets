<template>
    <div >
        <BackMap />
        <ScheCardNew />
    </div>
  
</template>


<script>
import BackMap from '@/components/AddItems/BackMap.vue'
import ScheCardNew from '@/components/Old/ScheCardNew.vue'

export default {
  name: 'NewTest',
  components: {
    BackMap,
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

/* * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
} */

body {
  font-family: 'Poppins', sans-serif;
}

</style>

