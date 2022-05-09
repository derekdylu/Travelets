<template>
  <div class="tab">
    <ButtonBack text="Back" />
    <ButtonNext text="Next" />
  </div>
  <div class="container">
    <SetTrip/>
  </div>
  <div class="container2">
    <InviteFriend/>
  </div>
  
</template>


<script>
import ButtonNext from './ButtonNext.vue'
import ButtonBack from './ButtonBack.vue'
import SetTrip from './SetTrip.vue'
import InviteFriend from './Invite.vue'

export default {
  name: 'CreateTripFile',
  components: {
    ButtonNext,
    ButtonBack,
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
  border: 1px solid rgb(255, 255, 255);
  background-color: rgb(255, 255, 255);
  padding: 10px;
  border-radius: 20px;
  margin-left: 40px;
  margin-top: 20px;
  height: 10.3cm;
}

.container2 {
  max-width: 390px;
  height: 4.5cm;
  overflow: auto;
  box-shadow:2px 2px 10px -2px rgba(163, 163, 179, 0.5);
  border: 1px solid rgb(253, 254, 255);
  background-color: rgb(255, 255, 255);
  padding: 80px;
  border-radius: 20px;
  margin-left: 40px;
  margin-top: 25px;
}


.tab {
  max-width: 390px;
  height: 2.3cm;
  overflow: auto;
  box-shadow:2px 2px 10px -2px rgba(146, 146, 156, 0.5);
  border: 1px solid rgb(252, 252, 252);
  background-color: rgb(255, 255, 255);
  padding: 5px;
  border-radius: 0px 0px 30px 30px;
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

