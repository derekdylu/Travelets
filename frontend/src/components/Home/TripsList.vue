<template>

  <div>
    <v-tabs
      v-model="tab"
      center-active
      grow
      color="primary"
      class="mb-1"
      style="max-width: 750px"
    >
      <v-tab value="trip">trip</v-tab>
      <v-tab value="post">post</v-tab>
      <v-tab value="saved">saved</v-tab>
    </v-tabs>

      <v-window v-model="tab">
        <v-window-item value="trip">
          <v-container fluid class="flex-column flex-grow" style="width: 750px">
            <v-row align="center" justify="space-between" class="mx-4">
              <v-btn-toggle>
                <v-icon icon="more_verti" color="secondary" class="my-3" />
              </v-btn-toggle>
              <v-btn variant="outlined" color="primary" @click="this.$router.push({ path: '/setup' })">
                new trip
              </v-btn>
            </v-row>
            <v-col align="center">
              <TripCard
                class="my-2"
                v-for="(trip, i) in trips"
                :key="i"
                :tripProps="trip"
              />
            </v-col>
          </v-container>
        </v-window-item>
      </v-window>

      <v-window v-model="tab">
        <v-window-item value="post">
          <v-container fluid class="flex-column flex-grow" style="width: 750px">
            <v-row align="center" justify="space-between" class="mx-4">
              <v-btn-toggle>
                <v-icon icon="more_verti" color="secondary" class="my-3" />
              </v-btn-toggle>
              <v-btn variant="outlined" color="primary" @click="this.$router.push({ path: '/setup' })">
                new trip
              </v-btn>
            </v-row>
            <v-col align="center">
              <PostCard
                class="my-2"
                v-for="(trip, i) in trips"
                :key="i"
                :tripProps="trip"
              />
            </v-col>
          </v-container>
        </v-window-item>
      </v-window>
  </div>
  
</template>

<script>
  import TripCard from './TripCard.vue'
  import PostCard from '../Post/PostCard.vue'

  export default {
    components: {
      TripCard,
      PostCard
    },
    data() {
      return {
        tab: null,
        trips: [
          {
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
          {
            id: 1,
            invited: false,
            picture: "https://hk.blog.kkday.com/wp-content/uploads/batch_shutterstock_260172746.jpg",
            title: "tainan trip",
            host: "timcook",
            status: "ready",
            startDate: "2023/08/16",
            endDate: "2023/08/22",
            area: "Tainan",
          },
          {
            id: 2,
            invited: true,
            picture: "https://pix10.agoda.net/geo/city/18343/1_18343_02.jpg?ca=6&ce=1&s=1920x822",
            title: "kenting trip",
            host: "zuckerburg",
            status: "ready",
            startDate: "2023/08/16",
            endDate: "2023/08/22",
            area: "Pintung",
          },
          {
            id: 3,
            invited: false,
            picture: "https://tenjo.tw/wp-content/uploads/20210220184733_68.jpg",
            title: "高雄發大財",
            host: "Han Fish",
            status: "draft",
            startDate: "2023/09/16",
            endDate: "2023/10/22",
            area: "Kaoshiung",
          },
        ]
      }
    }
  }
</script>

<style>

</style>