import Vue from 'vue'
import VueRouter from 'vue-router'
import ProfileList from './components/Home/ProfileList'

//Next you need to call Vue.use(Router) to make sure that Router is added as a middleware to our Vue project.
Vue.use(VueRouter)

export default new VueRouter({
    //The default mode for Vue Router is hash mode. 
    //It uses a URL hash to simulate a full URL so that the page won’t be reloaded when the URL changes.  
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
        path: '/',
        name: 'itinerary',  // url
        component: ProfileList,  //refer to ProfileList.vue
        },
        //  other routes
    ]
})

// #NOTE testig file only