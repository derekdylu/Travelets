<template>
    <button @click = "onClick()" class = "ButtonAdd" > {{ text }} </button>
</template>

<script>
    export default{
        name: 'ButtonAddNotes',
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

.ButtonAdd {
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
  margin-top: 20px;
}
</style>