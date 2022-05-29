<template>
  <v-card class="rounded-xl" max-width="338px" :elevation="elevation" :style="style">
    <v-img
      :src="tripProps.picture ? tripProps.picture : defaultImgSrc"
      class="white--text align-end rounded-t-xl"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      max-height="125px"
      cover
    >
      <v-row justify="space-between">
        <v-card-title style="color: white" class="ml-3 mb-2">{{ tripProps.tripname }}</v-card-title>
        <v-icon class="mr-7 mt-2" icon="arrow_forward" color="white" @click="openCard"></v-icon>
      </v-row>
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
            {{ tripProps.location }}
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
        elevation: "",
        defaultImgSrc: "https://travel.home.sndimg.com/content/dam/images/travel/stock/2017/1/9/0/GettyImages-127046314_DOELANYann_Maldives.jpg.rend.hgtvcom.966.644.suffix/1491841349407.jpeg",
      }
    },
    props: {
      'tripProps': {
        type: Object,
        default(){
          return {
            invited: false,
            picture: "",
            tripname: "untitled trip",
            host: "unknown",
            status: "draft",
            startDate: "2022/08/12",
            endDate: "2022/08/14",
            location: "unknown"
          }
        }
      },
      'attachedPost': {
        type: Boolean,
        default: false
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
      },
      writeElevation(){
        if (this.attachedPost){
          this.elevation = "0"
          this.style = "border: 1px solid #ababab"
        } else {
          this.elevation = "2"
        }
      },
      openCard(){
        this.$emit('click-card')
      }
    },
    mounted() {
      this.writeStyle()
      this.writeElevation()
    }
  }
</script>

<style>

</style>