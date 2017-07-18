<template>
  <div id="app" v-scroll="">
    <transition name="router-fade" mode="out-in">
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      go_top: false
    }
  },
  computed: {},
  mounted() {

  },
  methods: {
    // 显示返回顶部按钮
    showTop() {
      if (document.body.scrollTop > 200) {
        this.go_top = true
      } else {
        this.go_top = false
      }
    },
    // 返回顶部
    goTop() {
      let speed = 10
      const timer = setInterval(() => {
        if (window.body.scrollTop > 0) {
          document.body.scrollTop = document.body.scrollTop - speed > 0 ? document.body.scrollTop - speed : 0
          speed += 20
        } else {
          clearInterval(timer)
        }
      }, 16)
    }
  }
}
</script>
<style lang="scss">
@import 'assets/scss/base.scss';
@import 'assets/scss/mixin.scss';
@import 'assets/scss/variables.scss';
@import url('http://at.alicdn.com/t/font_wmjemf1ohe0cnmi.css');

.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity .3s;
}

.router-fader-enter,
.router-fade-to {
  opacity: 0;
}

.second-container {
  min-height: 100vh;
  min-width: 100vw;
}
</style>

