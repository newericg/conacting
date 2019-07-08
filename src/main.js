import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import router     from  '@/config/router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueAnalytics from 'vue-analytics'
import 'bootstrap/dist/css/bootstrap.css'
import vueSmoothScroll from 'vue-smooth-scroll'




library.add(faCoffee)

Vue.use(vueSmoothScroll)

Vue.use(Vuetify)

Vue.use(Vuex)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'UA-129156447-1',
  router: router
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
