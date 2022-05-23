<template>
  <div>
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
    <TripsList />
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