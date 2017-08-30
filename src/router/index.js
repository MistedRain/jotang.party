import Vue from 'vue'
import Router from 'vue-router'
import intro from '../pages/Intro'
import hello from '../pages/Hello'
Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    component: hello
  },
  {
    path: '/intro',
    name: 'intro',
    component: intro
  }]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0) // scroll to top
  next()
})

export default router
