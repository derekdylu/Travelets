<template>
  <v-card class="pa-6 .bg-white rounded-b-xl flex-column flex-grow" elevation="4" max-width="750px" min-width="300px">
    
    <v-container class="pa-0">
      <v-row align="center" no-gutters style="height: 48px;">
        <v-col align="left" cols="8">
          <v-btn icon flat @click.stop="$emit('clickDrawer', 1)">
            <v-icon icon="menu" />
          </v-btn>
        </v-col>
        <v-col align="right" cols="4">
          <v-img
            src="Logo_wordmark.png"
            alt="Travelets"
            width="102px"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="pa-0">
      <v-row align="center">
        <v-col align="left" cols="4" class="pl-5">
          <v-avatar
            size="72"
          >
            <v-img
              src="https://lh3.googleusercontent.com/KS1sYInErw661ZGjoIeAgyVTkP1--vCHw7Hq4m1TLvVqtapqMudCSIB_1KttRMzOcBoDgJJC67L2UYNyG0X4J9owzSYuASWEUpDQzw=w600"
              alt="avatar"
            ></v-img>
          </v-avatar>
        </v-col>
        <v-col cols="8">
          <v-row justify="end" align="center" no-gutters>
            <v-col align="left" cols="9">
              <h4>{{ username }}</h4>
            </v-col>
            <v-col align="right">
              <v-btn icon flat>
                <v-icon icon="settings" />
              </v-btn>
            </v-col>
          </v-row>
          <v-row justify="space-between" no-gutters>
            <v-col align="left">
              <h4>{{ trips }} trips</h4>
            </v-col>
            <v-col align="right">
              <h4>{{ followers }} followers</h4>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "ProfileHeader",
  data() {
    return {
      trips: 12,
      followers: 999,
    }
  },
  watch: {
    group () {
      this.drawer = false
    },
  },
  computed: {
    username: {
      get(){
        return this.$store.state.user
      },
      set() {

      }
    }
  }
}
</script>

<style>

</style>