<template>
  <PostItem 
        v-for="(item, i) in tripProps.photos_src.length"
        :key="i"
        :picture="tripProps.photos_src[i]"
        :attr_name="tripProps.photos_title[i]"
        :text="tripProps.texts[i]"
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
        //   items: [
        //       {
        //           pic: "https://www.treksplorer.com/wp-content/uploads/things-to-do-in-taipei-taiwan-1-1024x683.jpg",
        //           name: "xxx temple",
        //           text: [
        //               "123Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.",
        //               "next Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.",
        //           ]

        //       },
        //       {
        //           pic: "https://www.treksplorer.com/wp-content/uploads/ximending-taipei-taiwan-night.jpg",
        //           name: "Ximending",
        //           text: [
        //               "456Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.",
        //               "next Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.",
        //               "next Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.",
        //               "next Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.",
        //           ]

        //       },
        //       {
        //           pic: "https://images.chinatimes.com/newsphoto/2022-01-19/1024/20220119001717.jpg",
        //           name: "NTU Park",
        //           text: [
        //               "789Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.",
        //               "next Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.",
        //           ]
        //       },
        //   ],
      }
    },
    props: {
      'tripProps': {
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