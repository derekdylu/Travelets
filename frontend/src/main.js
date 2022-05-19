import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import * as VueGoogleMaps from 'vue2-google-maps'

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')

App.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCqVGxqlS37WSiSSgsTDZX9P3OrQhLVspg',
    // key: "AIzaSyDp3Ud3SixagW8bJOwtosy5bBMB5JRNS_k",
    libraries: 'places',
  }
})

loadFonts()



