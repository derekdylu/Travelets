<template>
  <v-img
    :src="tripProps.picture"
    class="white--text align-end"
    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
    max-height="250px"
    max-width = "750px"
    cover
  >
    <!-- <v-card-title style="color: white">{{ tripProps.title }}</v-card-title> -->
     <!-- <v-card-text style="color: white"> created by {{ tripProps.host }}</v-card-text> -->
  </v-img>
  <v-card
    class = "pa-3 .bg-white rounded-b-xl flex-column flex-grow mt-1"
    elevation = "4"
    max-height = "100%"
    max-width = "750px"
    min-width = "300px"
  >
    <v-row 
        class = "mt-3 ml-2"
        align = "center"
    >
        <v-avatar
            size="72"
        >
            <v-img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="avatar"
            ></v-img>
        </v-avatar>
        <v-col
            align = "start"
        >
            <p class = "name"> {{ tripProps.host }}</p>
            <p class = "trip_name"> {{ tripProps.title }}</p>
        </v-col>
    </v-row>
    <p class = "intro">{{foreword}}</p>
    <PostItem 
        v-for="(item, i) in items"
        :key="i"
        :picture="item.pic"
        :attr_name="item.name"
        :text="item.text"
    />
  </v-card>
  <BottomBar
        :author = "tripProps.host"
        date = "2023-08-19"
  />
</template>

<script>
import PostItem from './PostItem.vue'
import BottomBar from './BottomBar.vue'

  export default {
    name: 'PostCard',
    components: {
        PostItem,
        BottomBar
    },
    data(){
        return {
          foreword: "This is the brief introduction of this travel post... post... post... . . . . post... post... post... post...",
          items: [
              {
                  pic: "https://www.treksplorer.com/wp-content/uploads/things-to-do-in-taipei-taiwan-1-1024x683.jpg",
                  name: "xxx temple",
                  text: [
                      "123Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.",
                      "next Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.",
                  ]

              },
              {
                  pic: "https://www.treksplorer.com/wp-content/uploads/ximending-taipei-taiwan-night.jpg",
                  name: "Ximending",
                  text: [
                      "456Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.",
                      "next Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.",
                      "next Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.",
                      "next Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.",
                  ]

              },
              {
                  pic: "https://images.chinatimes.com/newsphoto/2022-01-19/1024/20220119001717.jpg",
                  name: "NTU Park",
                  text: [
                      "789Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.",
                      "next Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.",
                  ]
              },
          ],
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