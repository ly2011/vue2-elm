<template>
  <div id="app" v-scroll>
    <div class="block">
      <router-link to="/">首页</router-link>
      <router-link to="/login">登录</router-link>
      <router-link to="/search">搜索</router-link>
      <router-link to="/player">播放器</router-link>
    </div>
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
  computed: {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss">
@import 'assets/scss/base.scss';
@import 'assets/scss/mixin.scss';
@import 'assets/scss/variables.scss';

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
div.block {
  margin-bottom: 20px;
}
</style>

