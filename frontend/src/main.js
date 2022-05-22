import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')

loadFonts()