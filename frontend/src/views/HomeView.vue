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
              <v-list-item-title>Foo</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Bar</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Fizz</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Buzz</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
        <ProfileHeader @click-drawer="drawer = !drawer"/>
      </v-col>
    </v-container>
    <v-container class="pa-0">
      <v-col align="center" class="pa-0">
        <TripsList />
      </v-col>
    </v-container>
    
  </div>
</template>

<script>
import ProfileHeader from '@/components/Home/ProfileHeader.vue'
import TripsList from '@/components/Home/TripsList.vue'

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
    TripsList,
  }
};
</script>