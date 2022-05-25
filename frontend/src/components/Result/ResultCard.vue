<template >
    <v-card 
        v-for = "(item, n) in howManyDays" 
        :key = "n" 
        class = "pa-3 .bg-white rounded-xl flex-column flex-grow mb-5"
        elevation = "4"
        max-height = "100%"
        max-width = "750px"
        min-width = "300px"
    >
        <v-card-header>     
            <div class="date_title">
                {{month_str[n]}} {{date_str[n]}} {{year}} (Day {{n + 1}})
            </div>
        </v-card-header>
        <v-card-text > 
            <v-row 
                v-for= "(item, i) in place[n]"
                :key= "i"
                align="center"
                justify="start"
                no-gutters
                style="margin-top:5px;"
            >
                <ShowScheduleUnit 
                    :place= "place[n][i]"
                    :time= "time[n][i]"
                    :text = "text[n][i]"
                    :notLast = "typeof(time[n][i]) !== 'undefined'"
                />
            </v-row>
            <v-row 
                align="center"
                justify="space-between"
                no-gutters
                style="margin-top:10px; margin-bottom:10px"
            >
                <span class="text_bottom">Schedule for day {{n + 1}}</span>
            </v-row>
        </v-card-text>
    </v-card>
</template>
<script>
import ShowScheduleUnit from '../Result/ShowScheduleUnit.vue'

  export default {
      name: "ResultCard",
      components: {
        ShowScheduleUnit,
      },
      props: {
        howManyDays: Number,
        year: Number,
        month: [],
        date: [],
        place: [],
        time: [],
        text: [],
      },
      data() {
        return {
            month_str: [this.monthToString(5), this.monthToString(5), this.monthToString(5)],
            date_str: [12, 13, 14],
        }
      },
      methods:{
          monthToString(num){
            const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
            return monthNames[num - 1];

          },
      },
      created: function(){
        
      }
  }
</script>

<style>

.c1{
  /* width: 390px; */
  height: fill;
  overflow: auto;
  box-shadow:2px 2px 10px -2px rgba(163, 163, 179, 0.5);
  border: 1px solid rgb(255, 255, 255);
  background-color: rgb(255, 255, 255);
  
  border-radius: 20px;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 25px;
  
}

.date_title{
    font-size: 20px;
    font-weight: 900;
}
.text_bottom{
    font-size: 15px;
    margin-left: 20px;
}

</style>