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
        <ProfileList />
      </v-col>
    </v-container>
    
  </div>
</template>

<script>
import ProfileHeader from '@/components/Home/ProfileHeader.vue'
import ProfileList from '@/components/Home/ProfileList.vue'

export default {
  name: 'HomeView',
  data() {
    return {
      drawer: false,
      group: null,
    }
  },
  components: {
    ProfileHeader,
    ProfileList,
  }
};
</script>