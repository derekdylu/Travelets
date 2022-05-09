<template>
    <div class="tab">
        <ButtonBack text="Back" />
        <ButtonNext text="Next" />
    </div>
</template>

<script>
import ButtonBack from './ButtonBack.vue'
import ButtonNext from './ButtonNext.vue'

export default {
  name: 'ProgressBar',
  components: {
    ButtonBack,
    ButtonNext
  }
}
</script>

<style>

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
</style>