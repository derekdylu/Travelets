<template>
    <!-- <p>test</p> -->
    <v-timeline-item 
        size = "20px"
        fill-dot
        height= "95px"
        dot-color = "#a9a9a9"
        left
    >
        <p class = "place"> {{place}} </p>
    </v-timeline-item>
    <v-timeline-item
        size = "20px"
        fill-dot
        height = "50px"
        dot-color = "#d3d3d3"
        left
    >
        <p class = "time"> {{time}} </p>
    </v-timeline-item>
</template>

<script>
  export default {
      name: "TimeLineUnit",
      props: {
          place: String,
          time: String,
      },
      components: {

      },
      data() {
        return {
            
        }
      },
      methods:{

      },
  }
</script>

<style>
.place{
    font-size: 15px;
    font-weight: 500;
    color:rgb(0, 0, 0);
}
.time{
    font-size: 15px;
    color: #a9a9a9;
    font-weight: 700;
}

</style>