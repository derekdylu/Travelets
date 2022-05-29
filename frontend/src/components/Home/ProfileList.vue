<template>

  <div>
    <v-tabs
      v-model="defaultTab"
      grow
      color="primary"
      class="mb-1"
      style="max-width: 750px"
    >
      <v-tab v-for="tab of tabs" :key="tab.index" :value="tab.name">{{ tab.name }}</v-tab>
    </v-tabs>

      <v-window v-model="defaultTab">
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
                v-for="trip in APIData"
                :key="trip.id"
                :tripProps="trip"
                @click-card="openCard"
              />
            </v-col>
          </v-container>
        </v-window-item>
      </v-window>

      <v-window v-model="defaultTab">
        <v-window-item value="post">
          <v-container fluid class="flex-column flex-grow" style="width: 750px">
            
            <v-col align="center">
              <PostCard
                class="my-2"
                v-for="post in posts"
                :key="post.id"
                :trip="post.trip"
                :text="post.text"
                :creator="post.creator"
                :likes="post.likes"
              />
            </v-col>
          </v-container>
        </v-window-item>
      </v-window>
  </div>
  
</template>

<script>
  import { getAPI } from '../../axios-api'
  import TripCard from './TripCard.vue'
  import PostCard from '../Post/PostCard.vue'

  export default {
    // name: 'itinerary',
    data () {
      return {
          defaultTab: 0,
          tabs: [
            { index: 0, name: 'trip' },
            { index: 1, name: 'post' },
            { index: 2, name: 'saved' }
          ],
          APIData: [] ,
          posts: [
            // {
            //   id: 0,
            //   text: "Lorem ipsum",
            //   creator: "derekdylu",
            //   trip: {
            //     id: 4,
            //     invited: false,
            //     picture: "https://a.cdn-hotels.com/gdcs/production5/d320/a0c5a994-d99a-4278-a1b1-8a3b652461ac.jpg",
            //     title: "長灘島之旅",
            //     host: "Allen Lin",
            //     status: "past",
            //     startDate: "2021/09/16",
            //     endDate: "2021/10/22",
            //     area: "Boracay",
            //   },
            //   likes: 12,
            //   link: "/post"
            // },
            // {
            //   id: 1,
            //   text: "Lorem ipsum lalaland",
            //   creator: "derekdylu",
            //   trip: {
            //     id: 5,
            //     invited: false,
            //     picture: "https://www.aljazeera.com/wp-content/uploads/2021/12/000_9AP79Q.jpg?resize=770%2C513",
            //     title: "香港之旅",
            //     host: "光復香港時代革命",
            //     status: "past",
            //     startDate: "2021/09/16",
            //     endDate: "2021/10/22",
            //     area: "HongKong, HK",
            //   },
            //   likes: 99,
            //   link: "/post"
            // }
          ]
        }
    },
    components: {
      TripCard,
      PostCard
    },
    created() {
      getAPI.get('/itinerary/',)
        .then(response => {
          this.APIData = response.data
          console.log(this.APIData)
        })
        .catch(err => {
          console.log(err)
        })
    },
    methods: {
      openCard() {
        console.log('click on card')
      }
    },
    // data() {
    //   return {
    //     tab: null,
    //     trips: [
    //       {
    //         id: 0,
    //         invited: false,
    //         picture: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
    //         title: "taipei trip",
    //         host: "derekdylu",
    //         status: "ongoing",
    //         startDate: "2023/08/12",
    //         endDate: "2023/08/15",
    //         area: "Taipei",
    //       },
    //       {
    //         id: 1,
    //         invited: false,
    //         picture: "https://hk.blog.kkday.com/wp-content/uploads/batch_shutterstock_260172746.jpg",
    //         title: "tainan trip",
    //         host: "timcook",
    //         status: "ready",
    //         startDate: "2023/08/16",
    //         endDate: "2023/08/22",
    //         area: "Tainan",
    //       },
    //       {
    //         id: 2,
    //         invited: true,
    //         picture: "https://pix10.agoda.net/geo/city/18343/1_18343_02.jpg?ca=6&ce=1&s=1920x822",
    //         title: "kenting trip",
    //         host: "zuckerburg",
    //         status: "ready",
    //         startDate: "2023/08/16",
    //         endDate: "2023/08/22",
    //         area: "Pintung",
    //       },
    //       {
    //         id: 3,
    //         invited: false,
    //         picture: "https://tenjo.tw/wp-content/uploads/20210220184733_68.jpg",
    //         title: "高雄發大財",
    //         host: "Han Fish",
    //         status: "draft",
    //         startDate: "2023/09/16",
    //         endDate: "2023/10/22",
    //         area: "Kaoshiung",
    //       },
    //       {
    //         id: 4,
    //         invited: false,
    //         picture: "https://a.cdn-hotels.com/gdcs/production5/d320/a0c5a994-d99a-4278-a1b1-8a3b652461ac.jpg",
    //         title: "長灘島之旅",
    //         host: "Allen Lin",
    //         status: "past",
    //         startDate: "2021/09/16",
    //         endDate: "2021/10/22",
    //         area: "Boracay",
    //       },
    //       {
    //         id: 5,
    //         invited: false,
    //         picture: "https://www.aljazeera.com/wp-content/uploads/2021/12/000_9AP79Q.jpg?resize=770%2C513",
    //         title: "香港之旅",
    //         host: "光復香港時代革命",
    //         status: "past",
    //         startDate: "2021/09/16",
    //         endDate: "2021/10/22",
    //         area: "HongKong, HK",
    //       },
    //     ],

    //   }
    // }
  }
</script>

<style>

</style>