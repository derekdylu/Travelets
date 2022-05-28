import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import store from './store/index'
// import axios from 'axios'

var cors = require('cors');

createApp(App)
  .use(router)
  .use(vuetify)
  .use(store)
  .use(cors)
  .mount('#app')

loadFonts()