<template>
  <v-card class="rounded-xl" max-width="338px">
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
      class="white--text align-end rounded-t-xl"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      max-height="125px"
      cover
    >
      <v-card-title style="color: white">{{ title }}</v-card-title>
    </v-img>

    <v-card-text>
      <v-conatiner>

        <v-row>
          <v-col>
            created by {{ host }}
          </v-col>
          <v-col>
            <v-img
              src="status/Status=Ongoing.svg"
              height="20px"
            ></v-img>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            {{ startDate }} - {{ endDate }}
          </v-col>
          <v-col>
            {{ area }}
          </v-col>
        </v-row>

      </v-conatiner>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn >
        Ignore
      </v-btn>

      <v-btn color=primary>
        Accept
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    data() {
      return {
        title: "tokyo trip",
        host: "elonma",
        status: "ongoing",
        startDate: "May 1 2021",
        endDate: "May 3 2021",
        area: "Tokyo"
      }
    }
  }
</script>

<style>

</style>