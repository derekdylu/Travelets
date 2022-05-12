<template>
    <div class = "bar_show"> 
        <p>Congrats! <span class = "green">{{trip_name}}</span> is ready now!</p>
    </div>
</template>

<script>
import MemoBlc from './MemoBlc.vue'
import AttractionAndTime from './AttractionAndTime.vue'

export default {
  name: 'CongratsTitle',
  compenents: {
      MemoBlc,
      AttractionAndTime,
  },
  data() {
      return {
        trip_name: "Taepei Trip",
      }
    },
}
</script>

<style>

.bar_show{
  height: 50px;
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  justify-content: space-left;
  margin-top: 5px;
  padding-left: 15px;
  /* border: solid 1px red; */
}

p{
    flex:1;
}

.green{
  color: rgb(19, 139, 13);
  font-weight: 500;
}

</style>