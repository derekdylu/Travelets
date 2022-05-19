<template>
  <!-- AttractionAndTime -->
  <div class = "blc_r">
    <div class = "blc_r2 top">
      <div class = "blc_r3 left">
        <div class = "icon circle"></div>
        <div class = "icon line"></div>
      </div>
      <div class = "blc_r3 right">
        <div class = "titleText"> Taipei 101</div>
      </div>
    </div>
    <div class = "blc_r2 bottom">
      <div class = "blc_r3 left">
        <div class = "icon circle hollow"></div>
        <div class = "icon line"></div>
      </div>
      <div class = "blc_r3 right">
        <div class = "titleText"> 1hr 23min</div>
      </div>
    </div>
  </div>
</template>

<script scope>
export default {
  name: 'AttractionAndTime',
  compenents: {

  }
}
</script>

<style>
* {
  position: relative;
  margin: 0px;
  padding: 0px;
}

.blc_r{
  width: 225px;
  display: flex;
  flex-direction:column;
  position: relative;
  align-items: center;
  justify-content: space-between;
  /* border: solid 2px rgb(255, 0, 0); */
}

.blc_r2{
  width: 225px;
  display: flex;
  flex-direction:row;
  position: relative;
  align-items: center;
  justify-content: space-between;
  /* border: solid 2px rgb(0, 229, 255); */
  left: 0px;
  margin: 0px;
}

.blc_r2.bottom{
  margin-top: 5px;
  color: rgb(130, 128, 128);
}

.blc_r3{
  height: fill;
  /* border: solid 1px rgb(0, 8, 255); */
  margin-left: 5px; 
}
.blc_r3.left{
  width: 12px;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: space-between;
}
.blc_r3.right{
  width: fill;
  margin-right: 5px;
}

.icon{
  width: fill;
  background-color: rgb(130, 128, 128);
  display: inline-block;
  margin-bottom: 3px;
}

.icon.circle{
  border-radius: 100%;
  height: 10px;
}

.icon.circle.hollow{
  background-color: rgb(255, 255, 255);
  border: solid 1px rgb(130, 128, 128);
}

.icon.line{
  width: 2px;
  height: 30px;
}

.titleText{
  font-size: 15px;
  font-weight: 500;
  text-align: left;
}
</style>