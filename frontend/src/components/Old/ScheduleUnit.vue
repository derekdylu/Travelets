<template>
    <div class = "cc">
        <!-- MemoBlc -->
        <div class = "blc_l">
            <div class = "blc_l2 btn_blc">
                <v-btn variant="text">
                    ADD MEMO
                </v-btn>
            </div>
            <div class = "blc_l2 type_blc">
                <input class = "input_box" type="text" v-model="text" name="text" placeholder="Type Memo..." />  
            </div>
        </div>
        <!-- AttractionAndTime -->
        <div class = "blc_r">
            <div class = "blc_r2 top">
            <div class = "blc_r3 left">
                <div class = "icon circle"></div>
                <div class = "icon line"></div>
            </div>
            <div class = "blc_r3 right">
                <div class = "titleText"> {{place}} </div>
            </div>
            </div>
            <div class = "blc_r2 bottom">
            <div class = "blc_r3 left">
                <div class = "icon circle hollow"></div>
                <div class = "icon line"></div>
            </div>
            <div class = "blc_r3 right">
                <div class = "titleText"> {{time}}</div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import MemoBlc from './MemoBlc.vue'
import AttractionAndTime from './AttractionAndTime.vue'

export default {
  name: 'ScheduleUnit',
  props: {
    place: String,
    time: String,
  },
  compenents: {
      MemoBlc,
      AttractionAndTime,
  },
}
</script>

<style>

.cc{
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  justify-content: space-around;
  /* border: solid 2px rgb(0, 0, 0); */
  margin-top: 5px;
}

</style>