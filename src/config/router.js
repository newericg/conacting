import Vue from 'vue'
import Router from 'vue-router'


const routerOptions = [
  { path: '/home', component: 'Home', redirect: '/'},
  { path: '/lista', component: 'Lista', name: 'Lista'},
  { path: '/Confirmar', component: 'Confirmar', name:'Confirmar'},
  { path: '/Album', component: 'Album', name:'Album'},
  { path: '/Album2', component: 'Album2', name:'Album2'},
  { path: '/Album3', component: 'Album3', name:'Album3'},
  { path: '/', component: 'Home'},
  
  
  
  

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