<template>
  <PostItem 
        v-for="(item, i) in postProps.photos_src.length"
        :key="i"
        :picture="postProps.photos_src[i]"
        :attr_name="postProps.photos_title[i]"
        :text="postProps.texts[i]"
    />
</template>

<script>
import PostItem from './PostItem.vue'

  export default {
    name: 'PostPage',
    components: {
        PostItem,
    },
    data(){
        return {
      
      }
    },
    props: {
      'postProps': {
        type: Object,
        default(){
          return {
            
          }
        }
      }
    },
    methods: {
      
    },
    mounted() {
      
    }
  }
</script>

<style>
.name{
    font-weight: 900;
}
.trip_name{
    color: rgb(107, 107, 107);
    font-weight: 500;

}
.intro{
    max-width: 650px;
    margin-top: 30px; 
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: 500;
    text-align: left;
}
</style>