<template>
  <div class = "screen">
    <div class = "c">
      <ProgressBar />
    </div>
    <div class = "c scroll">
      <ScheduleUnit />
      <ScheduleUnit />
      <ScheduleUnit />
      <ScheduleUnit />
      <ScheduleUnit />
    </div>
    <div class = "c">
      <ProgressBar />
    </div>
  </div>
</template>

<script>
import ProgressBar from '../components/General/ProgressBar.vue'
import ScheduleUnit from '../components/ScheduleUnit.vue'

export default {
  name: 'AddNotesView',
  components: {
    ProgressBar,
    ScheduleUnit,
  }
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
.screen{
    border: solid 2px rgb(0, 0, 0);
    width: 390px;
    height: 700px;
    border-radius: 10%;
    margin-top: 10px;
    margin-left: 50px;
    padding: 200px;
    padding-top: 25px;
    padding-bottom: 25px;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: space-between;
}
.c{
    border: solid 2px rgb(76, 0, 255);
    width: 390px;
    margin: 5px;
    /* height: fill; */
    /* flex: 1; */
}

.c.scroll{
    overflow: auto;
    /* flex: 5; */
}

</style>