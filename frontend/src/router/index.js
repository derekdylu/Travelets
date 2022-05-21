import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import SetupView from '../views/SetupView.vue'
import TestView from '../views/TestView.vue'
import ProgressBar from '../components/General/ProgressBar.vue'
import AddNotesViewOld from '../views/AddNotesViewOld.vue'
import AddNotesView from '../views/AddNotesView.vue'
import ShowResultView from '../views/ShowResultView.vue'
import VoteView from '../views/VoteView.vue'
import ScheduleUnit from '../components/AddNotes/ScheduleUnit.vue'
import ScheduleCard from '../components/AddNotes/ScheduleCard.vue'
import PopupEdit from '../components/AddNotes/PopupEdit.vue'
import MapTest from '../components/AddNotes/MapTest.vue'
import AddItemsView from '../views/AddItemsView.vue'
import NewTest from '../views/NewTest.vue'

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
    path: '/test',
    name: 'TestView',
    component: TestView
  },
  {
    path: '/progress',
    name: 'progress',
    component: ProgressBar
  },
  {
    
    path: '/old',
    name:'AddNotesViewOld',
    component: AddNotesViewOld
  },
  {
    path: '/addnotes',
    name: 'AddNotesView',
    component: AddNotesView
  },
  {
    
    path: '/result',
    name:'ShowResultView',
    component: ShowResultView
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
  {
    path: '/pop',
    name:'PopupEdit',
    component: PopupEdit
  },
  {
    path: '/t',
    name:'MapTest',
    component: MapTest
  },
  {
    path: '/additems',
    name: 'AddItems',
    component: AddItemsView
  },
  {
    path: '/new',
    name:'NewTest',
    component: NewTest
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
