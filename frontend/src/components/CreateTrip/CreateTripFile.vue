<template>
  <div>
    <img src="https://www.pcma.org/wp-content/uploads/2019/08/Travel-tips.png" height="150" style="margin: 15px 0px 15px 97px; border-radius: 60px">
  </div>
  <div class="container">
    <SetTrip/>
  </div>
  <div class="container2">
    <InviteFriend/>
  </div>
  <div class="tab">
    <ButtonNext text="Back" color="gray"/>
    <ButtonNext text="Next" color="green"/>
  </div>
</template>


<script>
import ButtonNext from './Button.vue'
import SetTrip from './SetTrip.vue'
import InviteFriend from './Invite.vue'

export default {
  name: 'CreateTripFile',
  components: {
    ButtonNext,
    SetTrip,
    InviteFriend
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

.container {
  max-width: 390px;
  overflow: auto;
  box-shadow:2px 2px 10px -2px rgba(163, 163, 179, 0.5);
  border: 1px solid rgb(228, 230, 231);
  background-color: rgb(255, 255, 255);
  padding: 10px;
  border-radius: 20px;
  margin-left: 40px;
  height: 8.5cm;
}

.container2 {
  max-width: 390px;
  height: 4.5cm;
  overflow: auto;
  box-shadow:2px 2px 10px -2px rgba(163, 163, 179, 0.5);
  border: 1px solid rgb(228, 230, 231);
  background-color: rgb(255, 255, 255);
  padding: 80px;
  border-radius: 20px;
  margin-left: 40px;
  margin-top: 25px;
}

.tab {
  max-width: 390px;
  height: 1.5cm;
  overflow: auto;
  box-shadow:2px 2px 10px -2px rgba(163, 163, 179, 0.5);
  border: 1px solid rgb(228, 230, 231);
  background-color: rgb(255, 255, 255);
  padding: 5px;
  border-radius: 30px 30px 0px 0px;
  margin-top: 25px;
  margin-left: 40px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 8px 15px;
  margin: 5px;
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: 14px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
</style>

