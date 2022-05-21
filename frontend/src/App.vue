<template>
  <v-theme-provider>
    <v-app>
        <v-main>
          <router-view/>
        </v-main>
    </v-app>
  </v-theme-provider>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
}
</script>
