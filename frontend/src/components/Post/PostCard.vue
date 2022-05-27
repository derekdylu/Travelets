<template>
  <div>
    <v-card class="rounded.lg pt-2" max-width="370px">
      <v-card-text align="left" class="">
        <v-container class="ma-0 pa-0">
          <v-col class="ma-0 pa-0">
            <v-row class="ma-0 pa-0 mb-3" align="center">
              <v-avatar
                size="36px"
                class="mr-1"
              >
                <v-img
                  alt="Avatar"
                  src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                ></v-img>
              </v-avatar>
              <span>
                &nbsp;{{ creator }}
              </span>
            </v-row>
            <TripCard :tripProps="trip" attachedPost/>
            <v-row class="ma-0 pa-0 mt-3">
              {{ text }}
            </v-row>
          </v-col>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
          <v-btn icon flat>
            <v-icon color="secondary" icon="favorite" />
          </v-btn>
          <p>{{ likes }}</p>
          <v-btn icon flat>
            <v-icon color="secondary" icon="more_horiz" />
          </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
  import TripCard from '../Home/TripCard.vue'

  export default {
    name: 'PostCard',
    components: {
      TripCard,
    },
    data() {

    },
    props: {
      text: {
        type: String
      },
      creator: {
        type: String
      },
      trip: {
        type: Object,
        default() {
          return {
            invited: false,
            picture: "",
            title: "untitled trip",
            host: "unknown",
            status: "draft",
            startDate: "2022/08/12",
            endDate: "2022/08/14",
            area: "unknown"
          }
        }
      },
      likes: {
        type: Number
      },
      link: {
        type: String
      }
    },
    mounted() {
      console.log(this.trip)
    }
  }
</script>

<style lang="scss" scoped>

</style>