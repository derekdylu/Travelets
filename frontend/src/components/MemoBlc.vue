<template>
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
</template>

<script>

export default {
  name: 'MemoBlc',
  props: {
    
  },
  compenents: {

  },
  computed: {
    
  },
}
</script>

<style >

.blc_l{
  width: 120px;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: space-between;
  /* border: solid 2px rgb(249, 2, 2); */
  margin: 0px;
  left: 0px
}

.blc_l2{
  display: inline-block;
  width: 120px;
  /* border: solid 2px rgb(76, 0, 255); */
  text-align: center;
}
.type_blc{
  width: fill;
  height: auto;
}

.input_box{
    /* border: solid 2px rgb(0, 255, 136); */
    padding: 5px;
    width: fill;
    min-height: 65px;
    overflow: auto;
/* height: auto; */
}

::placeholder{
  font-size: 10px;
  text-align: center;
}

</style>