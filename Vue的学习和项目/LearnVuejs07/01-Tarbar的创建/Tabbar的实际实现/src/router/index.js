import Vue from 'vue'
import Router from 'vue-router'

//  安装插件
Vue.use(Router)

// 配置映射关系
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path:'/home',
    component: () => import('../views/home/Home')
  },
  {
    path: '/category',
    component: () => import('../views/category/Category')
  },
  {
    path: '/cart',
    component: () => import('../views/cart/Cart')
  },
  {
    path:'/profile',
    component: () =>import('../views/profile/Profile')
  }
]

// 创建路由对象

const router = new Router({
  routes,
  mode: 'history'
})

// 导出
export default router
