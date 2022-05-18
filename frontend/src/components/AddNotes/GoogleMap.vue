<template>
  <div>
    <div>
      <h2 style = "margin-left: 40px; margin-top: 25px;">This is a map.</h2>
    </div>
    <br>
    <GmapMap
      :center='center'
      :zoom='12'
      style='max-width:390px;  max-height: 300px;'
    />
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
    }
  },
};
</script>