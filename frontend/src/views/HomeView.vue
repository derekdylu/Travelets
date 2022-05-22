<template>
  <div>
    <ProfileHeader />
    <TripsList />
  </div>
</template>

<script>
import ProfileHeader from '@/components/Home/ProfileHeader.vue'
import TripsList from '@/components/Home/TripsList.vue'

export default {
  name: 'HomeView',
  components: {
    ProfileHeader,
    TripsList,
  }
};
</script>