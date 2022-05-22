import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

import ProgressBar from '../components/General/ProgressBar.vue'
import SetupView from '../views/SetupView.vue'
import AddItemsView from '../views/AddItemsView.vue'
import VoteView from '../views/VoteView.vue'
import AddNotesView from '../views/AddNotesView.vue'
import ShowResultView from '../views/ShowResultView.vue'

// <<< testing >>>
// import AddNotesViewOld from '../views/Old/AddNotesViewOld.vue'
// import ScheduleCard from '../components/AddNotes/ScheduleCard.vue'
// import PopupEdit from '../components/AddNotes/PopupEdit.vue'
import TestView from '../views/TestView.vue'
// import ScheduleUnit from '../components/AddNotes/ScheduleUnit.vue'
// import NewTest from '../views/Old/NewTest.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/setup',
    name: 'SetupView',
    component: SetupView,
    meta: {
      prev: 'Home',
      next: 'AddItemsView'
    }
  },
  {
    path: '/additems',
    name: 'AddItemsView',
    component: AddItemsView,
    meta: {
      prev: 'SetupView',
      next: 'VoteView'
    }
  },
  {
    path: '/votes',
    name:'VoteView',
    component: VoteView,
    meta: {
      prev: 'AddItemsView',
      next: 'AddNotesView'
    }
  },
  {
    path: '/addnotes',
    name: 'AddNotesView',
    component: AddNotesView,
    meta: {
      prev: 'VoteView',
      next: 'ShowResultView'
    }
  }, 
  {
    path: '/result',
    name:'ShowResultView',
    component: ShowResultView,
    meta: {
      prev: 'AddNotesView',
      next: 'Home'
    }
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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router