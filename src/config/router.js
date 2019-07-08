import Vue from 'vue'
import Router from 'vue-router'


const routerOptions = [
  { path: '/home', component: 'Home', redirect: '/'},
  
  
  
  
  

]

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/components/${route.component}.vue`)
  }
})

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) { // eslint-disable-line
    return { x: 0, y: 0 }
  },
  routes
})