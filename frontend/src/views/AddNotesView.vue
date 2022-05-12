<template>
  <div class = "screen">
    <div class = "c">
      <!-- <ProgressBar /> -->
      <!-- <vue-larger-image
        width="auto"
        bgColor = #eee
        height="auto"
        alt="hello"
        src="../assets/fake_map.jpg">
      </vue-larger-image> -->
      <img src="https://media.nownews.com/nn_media/thumbnail/2019/05/1556754432-f753c3a75140ef4445b7e6826161c842-696x532.png">
    </div>
    <div class = "c scroll">
      <div class = "title">
        <ScheduleTitle />
      </div>
      <div class = "Day"> 
        <div class = "date_title">
          <p class = "date"> May 12 2023 (Day1)</p>
        </div>
        <div class = "one_day_plan">
          <ScheduleUnit 
            v-for="attr in attrs"
            :place="attr.place"
            :time="attr.time"
            :key="attr.id"
          />
        </div>
      </div>
      <div class = "Day"> 
        <div class = "date_title">
          <p class = "date"> May 13 2023 (Day2)</p>
        </div>
        <div class = "one_day_plan">
          <ScheduleUnit 
            v-for="attr in attrs"
            :place="attr.place"
            :time="attr.time"
            :key="attr.id"
          />
        </div>
      </div>
      <div class = "Day"> 
        <div class = "date_title">
          <p class = "date"> May 14 2023 (Day3)</p>
        </div>
        <div class = "one_day_plan">
          <ScheduleUnit 
            v-for="attr in attrs"
            :place="attr.place"
            :time="attr.time"
            :key="attr.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import ProgressBar from '../components/General/ProgressBar.vue'
import ScheduleUnit from '../components/ScheduleUnit.vue'
import ScheduleTitle from '../components/ScheduleTitle.vue'

export default {
  name: 'AddNotesView',
  components: {
    // ProgressBar,
    ScheduleUnit,
    ScheduleTitle
  },
  data() {
      return {
        attrs: [
          {id: 0, place: 'Taipei 101', time:  '1 hour 20 minutes'},
          {id: 1, place: 'Ximen', time:  '2 hour 04 minutes'},
          {id: 2, place: 'Yangmingshan', time:  '42 minutes'},
          {id: 3, place: 'Xinyi District', time:  '1 hour 54 minutes'},
          {id: 4, place: 'NTU Park', time:  '20 minutes'},
        ],
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
.screen{
    border: solid 2px rgb(0, 0, 0);
    width: 390px;
    height: 767px;
    border-radius: 50px;
    margin-top: 10px;
    margin-left: 50px;
    padding: 200px;
    padding-top: 25px;
    padding-bottom: 25px;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: top;
}
.c{
    /* border: solid 2px rgb(76, 0, 255); */
    width: 370px;
    height: 300px;
    margin: 5px;
    overflow: auto;
    /* height: fill; */
    /* flex: 1; */
    /* cursor: grab; */
}
.c.scroll{
    overflow: auto;
    height: fill;
    margin-bottom: 30px;
    /* flex: 5; */
}
.Day{
  margin-top: 10px;
}
.date_title{
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  justify-content: flex-start;
}

.date{
  /* flex: 1; */
  display: inline-block;
  font-weight: 900;
  /* border: solid 2px rgb(255, 0, 0); */
}

</style>