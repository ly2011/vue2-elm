<template>
  <div id="app" v-scroll>
    <!-- 头部导航 -->
    <header class="header" :class="{'header-fixed': headerFixed}">
      <el-row>
        <el-col :span="24">
          <el-menu default-active="5" class="el-menu-top-nav" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">高级插件</el-menu-item>
            <el-menu-item index="2">在线商城</el-menu-item>
            <el-menu-item index="3">客户管理</el-menu-item>
            <el-menu-item index="4">系统设置</el-menu-item>
            <el-menu-item index="5">活动发布</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </header>

    <div v-show="headerFixed" style="position: relative; height: 60px; width: 100%;"></div>

    <main class="main">
      <!-- 左侧导航 -->
      <div class="main-left">
        <el-menu default-active="/activity_publish" class="el-menu-left-nav" :router="true">
          <el-menu-item index="/activity_publish" :class="{'isActive': active}">活动发布</el-menu-item>
          <el-menu-item index="/player" :class="{'isActive': !active}">活动管理</el-menu-item>
        </el-menu>
      </div>

      <!-- 右侧主内容区 -->
      <div class="main-right">
        <transition name="router-fade" mode="out-in">
          <router-view v-if="$route.meta.keepAlive" class="view"></router-view>
        </transition>
        <transition name="router-fade" mode="out-in">
          <router-view v-if="!$route.meta.keepAlive" class="view"></router-view>
        </transition>
      </div>
    </main>

  </div>
</template>
<script>
import Vue from 'vue'
import {Row, Col,Menu, Submenu, MenuItem, MenuItemGroup} from 'element-ui'
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)

export default {
  name: 'app',
  data() {
    return {
      headerFixed: true,
      active: true
    }
  },
  computed: {},
  mounted() {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  },
  watch: {
    '$route': function (to, from) {
      if (to.path === '/activity_publish') {
        this.active = true
      } else if (to.path === '/player') {
        this.active = true
      }
    }
  }
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

#app {
  min-width: 1200px;
  margin: 0 auto;
  font-family: "Helvetica Neue","PingFang SC",Arial,sans-serif;
}

/* 头部导航 */
.header {
  z-index: 1000;
  min-width: 1200px;
  border-top: 4px solid #3091F2;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12),
  0 0 6px 0 rgba(0, 0, 0, .04);
  transition: all .5s ease;

  &.header-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  .el-menu-top-nav {
    padding-left: 300px!important;
  }
}

/* 主内容区 */
.main {
  display: flex;
  min-height: 800px;
  border: 40px solid #e9ecf1;
  background-color: #fcfcfc;
  .el-menu {
    background-color: transparent!important;
  }
  .main-left {
    text-align: center;
    flex: 0 0 200px;
  }
  .main-right {
    flex: 1;
    background-color: #fff;
    padding: 50px 70px;
  }
}

/* 导航栏菜单选中效果 */
.isActive {
  color: #20a0ff!important;
}
</style>

