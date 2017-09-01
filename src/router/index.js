import Vue from 'vue'
import Router from 'vue-router'
import intro from '../pages/intro'
import jotangers from '../pages/jotangers'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/intro',
    name: 'intro',
    component: intro
  },
  {
    path: '/jotangers',
    name: 'jotangers',
    component: jotangers
  }]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0) // scroll to top
  next()
})

export default router
