<template>
  <v-img
    :src="picture"
    class="white--text align-end rounded-xl"
    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
    max-width = "650px"
    cover
  >
    <v-card-title style="color: white">{{attr_name}}</v-card-title>
  </v-img>

  <p 
    class = "content_text"
    v-for = "(t, i) in text"
    :key="i" 
  >
    {{t}}
  </p>
</template>

<script>
  export default {
    name: 'PostItem',
    components: {
        
    },
    data() {
      return {
      }
    },
    props: {
        picture: String,
        attr_name: String,
        text: [],
    },
    methods: {
      
    },
    mounted() {
      
    }
  }
</script>

<style>
.content_text{
    font-size: 16px;
    max-width: 600px;
    text-align: left;
    margin-top: 20px;
    margin-bottom: 20px;
    
}
</style>