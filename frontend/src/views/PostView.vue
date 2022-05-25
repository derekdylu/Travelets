<template>
  <div>
    <v-container class="pa-0">
      <v-col align="center" class="pa-0">
        <v-navigation-drawer
          v-model="drawer"
          absolute
          bottom
          temporary
        >
          <v-list
            nav
          >
            <v-list-item>
              <v-list-item-title>Feeds</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Explore</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Notifications</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </v-list> 
        </v-navigation-drawer>
        <ProfileHeader @click-drawer="drawer = !drawer"/>
      </v-col>
    </v-container>
    <v-container class="pa-0">
      <v-col align="center" class="pa-0">
        <PostCard 
            class="my-2"
            :tripProps="trip"    
        />
      </v-col>
    </v-container>
    
  </div>
</template>

<script>
import ProfileHeader from '@/components/Home/ProfileHeader.vue'
import PostCard from '@/components/Post/PostCard.vue'

export default {
  name: 'PostView',
  components: {
    ProfileHeader,
    PostCard,
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