import Vue from 'vue'
import App from './App'
// import 'muse-components/styles/base.less'
// import appBar from 'muse-components/appBar'
import router from './router'
import MuseUI from 'muse-ui'
import './assets/font-icons/style.css'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-carbon.css'

Vue.use(MuseUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

