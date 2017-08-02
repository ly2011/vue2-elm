import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import App from './App.vue';
import router from './router';
import store from './stores/store';
import './config';

// import 'element-ui/lib/theme-default/index.css'
const env = process.env.NODE_ENV || 'development';

if (env !== 'development') {
  Vue.config.devtools = false;
  Vue.config.productionTip = false;
}

sync(store, router);

// 自定义滚动指令
Vue.directive('scroll', {
  bind(el, binding) {
    window.addEventListener('scroll', () => {
      const fnc = binding.value;
      fnc && fnc(el);
    });
  },
});

const app = new Vue({
  router,
  store,
  render: h => h(App),
});
export { app, router };
