<template>
  <div>
    <v-container class="pa-0">
      <v-col align="center" class="pa-0">
        <v-card
            class = "pa-3 .bg-white rounded-xl flex-column flex-grow mt-1"
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
                    <p class = "name"> {{ post.creator_name }}</p>
                    <p class = "trip_name"> {{ post.trip_title }}</p>
                </v-col>
            </v-row>
            <TripCard 
                class = "mt-8"
                :tripProps="trip"
            />
            <p class = "intro">{{ post.foreword }}</p> 
            <PostPage
                class="my-2"
                :postProps="post"    
            />  
        </v-card>
        
        <BottomBar
            :author = "post.creator_name"
            date = "2023-08-19"
         />
      </v-col>
    </v-container>
    
  </div>
</template>

<script>
import TripCard from '@/components/Home/TripCard.vue'
import PostPage from '@/components/Post/PostPage.vue'
import BottomBar from '@/components/Post/BottomBar.vue'

export default {
  name: 'PostView',
  components: {
    TripCard,
    PostPage,
    BottomBar,
  },
  data() {
      return {
        trip: {
            id: 0,
            invited: false,
            picture: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
            title: "taipei trip",
            host: "derekdylu",
            status: "ongoing",
            startDate: "2023/08/12",
            endDate: "2023/08/15",
            area: "Taipei",
        },
        post: {
            id: 0,
            creator: 102, //random
            trip: 51022, //random
            content: [],
            creator_name: "derekdylu", 
            trip_title: "taipei trip",
            picture: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
            foreword: "This is the brief introduction of this travel post... post... post... . . . . post... post... post... post...",
            photos_src: [
                "https://www.treksplorer.com/wp-content/uploads/things-to-do-in-taipei-taiwan-1-1024x683.jpg",
                "https://www.treksplorer.com/wp-content/uploads/ximending-taipei-taiwan-night.jpg",
                "https://images.chinatimes.com/newsphoto/2022-01-19/1024/20220119001717.jpg",
            ],
            photos_title: [
                "xxx temple",
                "Ximending",
                "NTU Park",
            ],
            texts: [
                [
                    "123Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.",
                    "next Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.",
                ],
                [
                    "456Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.",
                    "next Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.",
                    "next Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.",
                    "next Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.",
                ],
                [
                    "789Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.",
                    "next Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, urna non sodales aliquam, est ex tempus nunc, a porttitor nisl erat congue mi.",
                ],
            ],
        },
      }
    },
};
</script>