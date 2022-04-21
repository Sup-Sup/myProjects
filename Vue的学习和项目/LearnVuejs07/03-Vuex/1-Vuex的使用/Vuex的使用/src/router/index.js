import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const routes = [
  {
    path:'/test',
    component: () => import ('../components/Test')
  }]

new Router({
  routes,
  mode: history,
})

export default Router
