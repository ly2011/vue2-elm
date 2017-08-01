<template>
  <div class="goods">
    <div id="menu-wrapper" ref="menu_wrapper">
      <ul>
        <li class="menu-item">
          <span class="text">单人精彩菜单</span>
        </li>
        <li class="menu-item">
          <span class="text">单人精彩菜单</span>
        </li>
        <li class="menu-item">
          <span class="text">单人精彩菜单</span>
        </li>
        <li class="menu-item">
          <span class="text">单人精彩菜单</span>
        </li>
        <li class="menu-item">
          <span class="text">单人精彩菜单</span>
        </li>
        <li class="menu-item">
          <span class="text">单人精彩菜单</span>
        </li>
        <li class="menu-item">
          <span class="text">单人精彩菜单</span>
        </li>
        <li class="menu-item">
          <span class="text">单人精彩菜单</span>
        </li>
        <li class="menu-item">
          <span class="text">单人精彩菜单</span>
        </li>
        <li class="menu-item">
          <span class="text">单人精彩菜单</span>
        </li>
        <li class="menu-item">
          <span class="text">单人精彩菜单</span>
        </li>
        <li class="menu-item">
          <span class="text">单人精彩菜单</span>
        </li>
        <li class="menu-item">
          <span class="text">单人精彩菜单</span>
        </li>
        <li class="menu-item">
          <span class="text">单人精彩菜单</span>
        </li>
        <li class="menu-item">
          <span class="text">单人精彩菜单</span>
        </li>
        <li class="menu-item">
          <span class="text">单人精彩菜单</span>
        </li>
        <li class="menu-item">
          <span class="text">单人精彩菜单</span>
        </li>
        <li class="menu-item">
          <span class="text">单人精彩菜单</span>
        </li>
        <li class="menu-item">
          <span class="text">单人精彩菜单</span>
        </li>
        <li class="menu-item">
          <span class="text">单人精彩菜单</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'login',
  data() {
    return {
      goods: []
    }
  },
  created() {
    axios.get('static/data.json').then((res) => {
      this.goods = res.data.goods
      this.$nextTick(() => {
        this._initScroll(); // 初始化scroll
        // this._calculateHeight(); // 初始化列表高度列表
      })
    });
  },
  methods: {
    _initScroll() {
      this.menuWrapper = new BScroll(this.$refs.menu_wrapper, {
        click: true
      })
    },
    menuClick(index, event) {
      if (!event._constructed) {
        return
      }

    }
  }
}
</script>

<style lang="scss" scoped>
.goods {
  display: flex;
  position: absolute;
  top: 88px;
  bottom: 88px;
  width: 100%;
  overflow: hidden;

  #menu-wrapper {
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;
    ul {
      list-style: none;
      .menu-item {
        position: relative;
        display: flex;
        align-items: center;
        height: 54px;
        line-height: 14px;
        list-style: none;
        padding: 0 12px;
        &:last-child::after {
          content: none;
        }
        &::after {
          position: absolute;
          content: '';
          left: 12px;
          width: 56px;
          bottom: 0;
          border-bottom: 1px solid rgba(7, 17, 27, .1);
        }
        .text {
          font-size: 12px;
          font-weight: 200;
          white-space: normal;
          line-height: 14px;
        }
      }
    }
  }
}
</style>
