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

  computed: {},
  mounted() {

  },
  methods: {

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

