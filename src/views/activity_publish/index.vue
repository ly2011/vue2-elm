<template>
  <div class="active_publish">
    <el-steps :space="200" :active="step" class="step">
      <el-step title="活动信息" description=""></el-step>
      <el-step title="报名签到" description=""></el-step>
      <el-step title="分享设置" description=""></el-step>
      <el-step title="个性设置" description=""></el-step>
    </el-steps>

    <transition name="router-fade" mode="out-in">
      <router-view v-if="$route.meta.keepAlive" class="view"></router-view>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive" class="view"></router-view>
    </transition>

    <div class="but-group">
      <el-button @click.native.prevent="handlePreview" v-show="preview">预览</el-button>
      <el-button @click.native.prevent="handlePreStep" v-show="preStep">上一步</el-button>
      <el-button @click.native.prevent="handleNextStep" v-show="nextStep" type="primary">下一步</el-button>
      <el-button @click.native.prevent="handlePublish" v-show="publish" type="primary">发布活动</el-button>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Steps, Step, Button } from 'element-ui'
Vue.use(Steps)
Vue.use(Step)
Vue.use(Button)
export default {
  name: 'activity_publish',
  data() {
    return {
      preview: true,
      preStep: false,
      nextStep: true,
      publish: false,
      step: 1
    }
  },
  methods: {
    handlePreview() {
      console.log('预览')
    },
    handlePreStep() {
      this.$router.go(-1)
      this.step--
      this.goStep(this.step)

    },
    handleNextStep() {
      this.$router.push(`/activity_publish/step${this.step+1}`)
      this.step++
      this.goStep(this.step)
    },
    handlePublish() {
      console.log('发布')
    },
    goStep(n) {
      switch(n) {
        case 1: {
          this.preview = true
          this.preStep = false
          this.nextStep = true
          this.publish = false
          break
        }
        case 2: {
          this.preview = false
          this.preStep = true
          this.nextStep = true
          this.publish = false
          break
        }
        case 3: {
          this.preview = false
          this.preStep = true
          this.nextStep = true
          this.publish = false
          break
        }
        case 4: {
          this.preview = false
          this.preStep = true
          this.nextStep = false
          this.publish = true
          break
        }
      }
    }
  }
}
</script>

