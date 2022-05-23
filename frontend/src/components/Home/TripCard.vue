<template>
  <v-card class="rounded-xl" max-width="338px" elevation="2" :style="style">
    <v-img
      :src="tripProps.picture"
      class="white--text align-end rounded-t-xl"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      max-height="125px"
      cover
    >
      <v-card-title style="color: white">{{ tripProps.title }}</v-card-title>
    </v-img>

    <v-card-text style="font-size: 0.75em;">
      <v-conatiner>

        <v-row justify="space-between">
          <v-col cols="auto" align="start">
            created by {{ tripProps.host }}
          </v-col>
          <v-col cols="auto" align="right">
            <v-img
              :src="writeStatusSrc(tripProps.status)"
              height="20px"
              :width="statusWitdth"
            ></v-img>
          </v-col>
        </v-row>

        <v-row justify="space-between">
          <v-col cols="auto" align="start">
            {{ tripProps.startDate }} - {{ tripProps.endDate }}
          </v-col>
          <v-col cols="auto" align="center" class="mr-1">
            {{ tripProps.area }}
          </v-col>
        </v-row>

      </v-conatiner>
    </v-card-text>

    <v-card-actions v-if="tripProps.invited">
      <v-row justify="center">
        <v-btn>
          Ignore
        </v-btn>
        <v-btn color=primary>
          Accept
        </v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    data() {
      return {
        statusSrc: "",
        statusWitdth: "",
        style: "",
      }
    },
    props: {
      'tripProps': {
        type: Object,
        default(){
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
      }
    },
    methods: {
      writeStatusSrc(s) {
        if (s === "draft") {
          this.statusWitdth = "66px"
          return("status/Status=Draft.svg")
        } else if ( s === "ready") {
          this.statusWitdth = "66px"
          return("status/Status=Ready.svg")
        } else if ( s === "ongoing") {
          this.statusWitdth = "85px"
          return("status/Status=Ongoing.svg")
        } else if (s === "past") {
          this.statusWitdth = "56px"
          return("status/Status=Past.svg")
        } else {
          return("")
        }
      },
      writeStyle(){
        if (this.tripProps.status === "ongoing"){
          this.style = "border: 3px solid #76C450"
        }
      }
    },
    mounted() {
      this.writeStyle()
    }
  }
</script>

<style>

</style>