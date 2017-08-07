import Vue from 'vue';
import Router from 'vue-router';

const Index = () => import('../views/index');
const Login = () => import('../views/login');
const Search = () => import('../views/search');
const Player = () => import('../views/player');
const activity_publish = () => import('../views/activity_publish/index');
const step1 = () => import('../views/activity_publish/step1');

Vue.use(Router);

const router = new Router({
  // mode: 'history',
  mode: 'hash',
  base: __dirname,
  scrollBehavior(to, from, savedPosition) {
    // 只在history模式下生效
    if (savedPosition) {
      return savedPosition;
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop;
      }
      return { x: 0, y: to.meta.savedPosition || 0 };
    }
  },
  routes: [
    {
      path: '/',
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
    },
    {
      path: '/activity_publish',
      name: 'activity_publish',
      component: activity_publish,
      children: [
        {
          path: '',
          component: step1
        }
      ]
    }
  ]
});

router.afterEach((from, to) => {});

export default router;
