import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import SetupView from '../views/SetupView.vue'
import AddView from '../views/AddView.vue'
import ProgressBar from '../components/General/ProgressBar.vue'
import AddNotesView from '../views/AddNotesView.vue'
import AddNotesView2 from '../views/AddNotesView2.vue'
import ShowResultsView from '../views/ShowResultsView.vue'
import VoteView from '../views/VoteView.vue'
import ScheduleUnit from '../components/AddNotes/ScheduleUnit'
import ScheduleCard from '../components/AddNotes/ScheduleCard'

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
    
    path: '/addnotes',
    name:'AddNotesView',
    component: AddNotesView
  },
  {
    path: '/2',
    name: 'AddNotesView2',
    component: AddNotesView2
  },
  {
    
    path: '/results',
    name:'ShowResultsView',
    component: ShowResultsView
  },
  {
    path: '/Votes',
    name:'VoteView',
    component: VoteView
  },
  {
    path: '/unit',
    name:'ScheduleUnit',
    component: ScheduleUnit
  },
  {
    path: '/card',
    name:'ScheduleCard',
    component: ScheduleCard
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
