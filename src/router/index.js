import Vue from 'vue'
import Router from 'vue-router'
import intro from '../pages/intro'
import jotangers from '../pages/jotangers'
import timeshaft from '../pages/timeshaft'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    name: 'intro',
    component: intro
  },
  {
    path: '/jotangers',
    name: 'jotangers',
    component: jotangers
  },
  {
    path: '/timeshaft',
    name: 'timeshaft',
    component: timeshaft
  }]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0) // scroll to top
  next()
})

export default router
