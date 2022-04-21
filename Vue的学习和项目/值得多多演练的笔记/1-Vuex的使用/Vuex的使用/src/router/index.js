import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const routes = [
  {path: '', redirect: '/TestData'},
  {path: '/TestData', component: () => import ('../components/TestData.vue')},
  {
    path:'/Test',
    component: () => import ('../components/Test')
  }]

const router = new Router({
  routes,
  mode: 'history',
})

export default router
