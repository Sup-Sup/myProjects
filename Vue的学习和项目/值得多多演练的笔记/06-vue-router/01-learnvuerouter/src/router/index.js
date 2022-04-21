import vue from 'vue'
import vueRouter from 'vue-router'


vue.use(vueRouter)

const routes = [
  { path: '', redirect: '/abort' },
  {
    path: '/abort', component: () => import('../components/abort.vue'),
    children: [{ path: 'abortNews', component: () => import('../components/abortNews.vue')},
    { path: 'abortMessage', component: () => import('../components/abortMessage.vue')},
    {path: '', redirect: '/abort/abortNews'}]
  },
  { path: '/user/:userId', component: () => import('../components/user.vue') },
  { path: '/profile', component: () => import('../components/profile.vue') }
]

const router = new vueRouter({
  routes,
  mode: 'history'
})

export default router