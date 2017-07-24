<template>
  <div class="parent-container">
    <music-header></music-header>
    <section class="second-container has-footbar">
      <transition name="router-slide" mode="out-in">
        <router-view></router-view>
      </transition>
      <div v-for="item in banner">
        <a :href="item.url">
          <img :src="item.imageUrl" alt="">
        </a>
      </div>
    </section>
    <keep-alive>
      <music-footer></music-footer>
    </keep-alive>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import musicHeader from 'SRC/components/music-header'
import musicFooter from 'SRC/components/music-footer'
export default {
  name: 'index',
  data() {
    return {}
  },
  components: {
    musicHeader,
    musicFooter
  },
  mounted() {
    this.$store.dispatch('comConf', {
      title: '吃饭啦'
    })
    if (this.banner.length === 0) {
      this.$store.dispatch('getBannerList')
    }
    if (this.nowplay.length === 0) {
      this.$store.dispatch('getNowPlaying')
    }
    if (this.coming.length === 0) {
      this.$store.dispatch('getComingSoon')
    }
    this.$nextTick(function() {
    });
  },
  computed: mapGetters({
    banner: 'getBannerList',
    nowplay: 'getNowPlaying',
    coming: 'getComingSoon'
  })

}
</script>


