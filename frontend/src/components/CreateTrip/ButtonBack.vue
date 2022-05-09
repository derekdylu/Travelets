<template>
    <button @click="onClick()" class="ButtonB"> {{ text }} </button>
</template>

<script>
    export default{
        name: 'ButtonBack',
        props: {
            text: String,
            color: String,
        },
        methods: {
            onClick(){
                console.log('click')
            },
        },
    }
</script>

<style>

.ButtonB {
  display: inline-block;
  background: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  border: none;
  padding: 8px 15px;
  margin: 5px;
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: 14px;
  font-family: inherit;
  margin-left: 10px;
  margin-top: 30px;
}
</style>