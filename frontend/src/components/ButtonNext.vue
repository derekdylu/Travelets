<template>
    <button @click="onClick()" class="ButtonN"> {{ text }} </button>
</template>

<script>
    export default{
        name: 'ButtonNext',
        props: {
            text: String
        },
        methods: {
            onClick(){
                console.log('click')
            },
        },
    }
</script>

<style>

.ButtonN {
  display: inline-block;
  background: #5EA839;
  color: #fff;
  border: none;
  padding: 7px 25px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 14px;
  font-family: inherit;
  margin-left: 195px;
}
</style>