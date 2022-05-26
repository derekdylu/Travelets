<template>
  <div>
    <v-container class="pa-0">
      <v-col align="center" class="pa-0">
        <PostPage 
            class="my-2"
            :tripProps="trip"    
        />
      </v-col>
    </v-container>
    
  </div>
</template>

<script>
import PostPage from '@/components/Post/PostPage.vue'

export default {
  name: 'PostView',
  components: {
    PostPage
  },
  data() {
      return {
        drawer: false,
        group: null,
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
      }
    },
};
</script>