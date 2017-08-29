import Vue from 'vue'
import Router from 'vue-router'
import intro from '../pages/Intro'
import hello from '../pages/Hello'
Vue.use(Router)

export default new Router({
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
