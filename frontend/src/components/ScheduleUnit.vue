<template>
    <div class = "block">
        <ButtonAddNotes text = "add memo..." />
        <div class = "info_block">
            <p class = "name">Main</p>
            <p class = "time">Time</p>
        </div>
    </div>
</template>

<script>
import ButtonAddNotes from './ButtonAddNotes.vue'

export default {
  name: 'ScheduleUnit',
  components: {
    ButtonAddNotes
  }
}
</script>

<style>

.block {
  max-width: 390px;
  overflow: auto; 
  box-shadow:2px 2px 10px -2px rgba(146, 146, 156, 0.5);
  border: 1px solid rgb(0, 0, 0);
  background-color: rgb(255, 255, 255);
  padding: 5px;
  margin-top: 25px;
  margin-left: 40px;
}

.info_block {
  max-width: 220px;
  overflow: auto; 
  /* box-shadow:2px 2px 10px -2px rgba(146, 146, 156, 0.5); */
  border: 1px solid rgb(0, 0, 0);
  background-color: rgb(255, 255, 255);
  padding: 5px;
  margin-top: 25px;
  margin-left: 40px;
  right: 0px
}
</style>