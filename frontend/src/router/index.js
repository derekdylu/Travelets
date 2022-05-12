import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import SetupView from '../views/SetupView.vue'
import AddView from '../views/AddView.vue'
import ProgressBar from '../components/General/ProgressBar.vue'
import AddNotesView from '../views/AddNotesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/setup',
    name: 'SetupView',
    component: SetupView
  },
  {
    path: '/add',
    name: 'AddView',
    component: AddView
  },
  {
    // for testing only
    path: '/progress',
    name: 'progress',
    component: ProgressBar},
  {
    // to check component
    path: '/addnotes',
    name:'AddNotesView',
    component: AddNotesView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
