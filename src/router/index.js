import Vue from "vue";
import Router from "vue-router";

import Index from "../views/index";
import Login from "../views/login";
import My from "../views/index/my";
import songList from "../views/index/discover/songList";
import Recommend from "../views/index/discover/recommend";
import Discover from "../views/index/discover";

Vue.use(Router);

const router = new Router({
  mode: "hash",
  base: __dirname,
  scrollBehavior(to, from, savedPosition) {
    console.log('from: ', from);
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
      path: "",
      // name: 'index',
      redirect: '/index'
    },
    {
      path: "/index",
      name: "index",
      component: Index,
      children: [
        {
          path: "my",
          name: "my",
          component: My,
          meta: {
            keepAlive: true
          }
        },
        {
          path: "discover",
          redirect: "/index/discover/songList"
        },
        {
          path: "discover",
          name: "discover",
          component: Discover,
          children: [
            {
              path: "songList",
              name: "songList",
              component: songList
            },
            {
              path: "recommend",
              name: "recommend",
              component: Recommend
            }
          ]
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
});

router.afterEach((from, to) => {
  console.log(from.name);
});

export default router;
