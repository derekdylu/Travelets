<template>
  <v-card class="rounded-xl" max-width="338px" :elevation="elevation" :style="style">
    <v-img
      :src="tripProps.picture ? tripProps.picture : defaultImgSrc[r]"
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
        r: 0,
        defaultImgSrc: ["https://travel.home.sndimg.com/content/dam/images/travel/stock/2017/1/9/0/GettyImages-127046314_DOELANYann_Maldives.jpg.rend.hgtvcom.966.644.suffix/1491841349407.jpeg",
                        "https://www.travelersjoy.com/blog/honeymoon_road_trip_1.jpg",
                        "https://media.cntraveler.com/photos/5e7c23955cd3cb0009ca95a1/16:9/w_2560%2Cc_limit/PodcastRoadtrips-2020-GettyImages-888361900.jpg",
                        "https://www.afea.gr/files/1/services/photo%20for%20website%20airplanes.jpg",
                        "https://media-exp1.licdn.com/dms/image/C4D1BAQGGdNo6IlDOCQ/company-background_10000/0/1519801807380?e=2147483647&v=beta&t=Em3WF5ozTqdYKFCUXIGWTWbGBIAakCGjyLechUBgRZU",
                        "https://www.latrobe.edu.au/about/novel-coronavirus/images/travel-advice/Travel-Advice.jpg/1680.jpg",
                        "https://static.stacker.com/s3fs-public/2021-05/Road%20Trip.png",
                        "https://media.self.com/photos/5f0885ffef7a10ffa6640daa/4:3/w_2560%2Cc_limit/travel_plane_corona.jpeg",
                        "https://www.taiwanyello.com/img/site/holidays.jpg?v=5",
                        "https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/4/2017/02/Lead-for-Travel-Japan-Adv-1024x683.jpg",
                        "https://static.onecms.io/wp-content/uploads/sites/28/2021/02/19/new-york-city-evening-NYCTG0221.jpg",
                        "https://media.cntraveler.com/photos/5f3484e301aedaf2771c644b/16:9/w_4239,h_2384,c_limit/RoadtripPlaylist-GettyImages-1192260535.jpg",
                        "https://images.pexels.com/photos/258109/pexels-photo-258109.jpeg?cs=srgb&dl=pexels-pixabay-258109.jpg&fm=jpg",
                        "https://d3vp2rl7047vsp.cloudfront.net/articles/article_images/000/000/020/large/Kerala-Road-Trip.png?1602145327",
                        "https://i.guim.co.uk/img/media/44a3be7c740d5e1a87b23dee037c0ead76e1252b/340_192_2112_1268/master/2112.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=1d189d6183244ef05564272ab2e5d3a3",
                        "https://cdn.tatlerasia.com/asiatatler/i/hk/2020/08/12125432-travel-experiences-close-to-home-luxury-travel-experts_cover_2000x1014.jpg",
                        "http://cdn.cnn.com/cnnnext/dam/assets/220310214243-01-virgin-voyages-valiant-lady-launch.jpg",
                        "https://ychef.files.bbci.co.uk/976x549/p0br47qn.jpg",
                        "https://assets.simpleviewcms.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/lasvegas/strip_b86ddbea-3add-4995-b449-ac85d700b027.jpg",
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
                        "https://media.timeout.com/images/105211701/750/422/image.jpg",
                        "https://i.natgeofe.com/k/679e983c-4461-4398-bb6d-9b508fe3e4de/norway-northern-lights_4x3.jpg",
                        "https://www.bern.com/assets/images/7/altstadt2-884b8f17.jpg",
                        "https://cloud.mysteryscience.com/image/fetch/f_auto,q_auto/https://www.dropbox.com/s/6mlhvbi7hba40it/Thumbnail-Mini-Lesson-Wow_Deep-Ocean_shutterstock_1044142510.jpg%3Fdl%3D1",
                        "http://cdn.cnn.com/cnnnext/dam/assets/210701131326-worlds-largest-yacht--credit--winch-design-3.jpg",
        ],
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
      },
      random(){
        this.r = Math.floor(Math.random() * 25)
      }
    },
    mounted() {
      this.writeStyle()
      this.writeElevation()
      this.random()
    }
  }
</script>

<style>

</style>