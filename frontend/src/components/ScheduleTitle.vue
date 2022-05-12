<template>
    <div class = "bar"> 
        <p>Taipei City, Taiwan</p>
    </div>
</template>

<script>
import MemoBlc from './MemoBlc.vue'
import AttractionAndTime from './AttractionAndTime.vue'

export default {
  name: 'ScheduleTitle',
  compenents: {
      MemoBlc,
      AttractionAndTime,
  }
}
</script>

<style>

.bar{
  height: 50px;
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  justify-content: space-around;
  box-shadow: 2px 2px 10px -2px rgba(163, 163, 179, 0.5);
  border: 1px solid rgb(255, 255, 255);
  background-color: rgb(255, 255, 255);
  margin-top: 5px;
  border-radius: 20px 20px 0px 0px;
  text-align: left;
  padding-left: 30px;
}

p{
    flex:1;
}


</style>