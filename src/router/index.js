import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('../views/index')
const Login = () => import('../views/login')
const Search = () => import('../views/search')
const Player = () => import('../views/player')

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  mode: 'hash',
  base: __dirname,
  scrollBehavior (to, from, savedPosition) {
    // 只在history模式下生效
    console.log('from: ', from)
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  },
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/player',
      name: 'player',
      component: Player
    }
  ]
})

router.afterEach((from, to) => {
  console.log(from.name)
})

export default router
