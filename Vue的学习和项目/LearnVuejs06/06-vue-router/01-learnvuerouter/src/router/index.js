// 配置路由相关的信息
import VueRouter from 'vue-router'
import Vue from 'vue'
 
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User'

//  采用路由懒加载的方式,统一管理，也可以直接放在下面
const Home = () => import('../components/Home');
const About = () => import('../components/About');

// 1.通过vue.use（插件），安装插件
Vue.use(VueRouter)

const routes = [
  {
    // 这一个路径的配置是为了初始进入网站时，进入的是首页的位置
    path: '',
    // redirect 重定向 -- 重新定义方向
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title:'首页'
    },
    children: [
      // {
      //   path: '',
      //   redirect: 'news'
      // },
      {
        path:'news', //这后边不能加符号 '/'
        component: () =>import('../components/HomeNews')
      },
      {
        path: 'message',
        component: () =>import('../components/HomeMessage')
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta:{
      title: '关于'
    }
  },
  {
    path: '/user/:userId',  //动态路由  要想在路径上拼接东西，必须这样写加 ：后边的userId相当于一个属性
    component: () => import('../components/User'),
    meta:{
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: () => import('../components/Profile'),
    meta: {
      title: '档案'
    }
    
  }
]

// 2.创建vue-loader实例对象
const router = new VueRouter({
  // 配置路由和组件之间的应用(映射)关系
  //放到外边，逻辑更清晰
  routes,
  // 改变路径的方式
  mode: 'history',
  // 对处于活跃的路由统一进行控制
  linkActiveClass:'active' 

  
})

router.beforeEach((to,from,next) =>{
  document.title = to.matched[0].meta.title
  // console.log(to);
  next(); 
  // 从from到to
})

router.afterEach((to,from) =>{
  // console.log("--------test");
})
// 3.将router对象传入到vue实例中
export default router