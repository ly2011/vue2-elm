<template>
  <div class="parent-container">
    <el-button @click="visible = true; show=!show">按钮</el-button>
    <!-- <el-dialog v-model="visible" title="Hello World">
          <p>欢迎使用 Element</p>
        </el-dialog> -->
    <div style="display: flex; margin-top: 20px; height: 100px">
      <transition name="el-fade-in-linear">
        <div v-show="show" class="transition-box">.el-fade-in-linear</div>
      </transition>
      <transition name="el-fade-in">
        <div v-show="show" class="transition-box">.el-fade-in</div>
      </transition>
    </div>

    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark"></div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple">

        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
    <div class="block">
      <i class="el-icon-edit"></i>
      <i class="el-icon-share"></i>
      <i class="el-icon-delete"></i>
      <el-button type="primary" icon="search">搜索</el-button>
      <el-button :plain="true" :disabled="true">默认按钮</el-button>
      <el-button type="primary" :disabled="true">主要按钮</el-button>
      <el-button type="text" :disabled="true">文字按钮</el-button>
    </div>
    <div class="block">
      <span class="demonstration">默认显示颜色</span>
      <span class="wrapper">
        <el-button type="success" icon="edit" native-type="submit" :autofocus="true">成功按钮</el-button>
        <el-button type="warning" icon="share">警告按钮</el-button>
        <el-button type="danger" icon="delete">危险按钮</el-button>
        <el-button type="primary">上传
          <i class="el-icon-upload el-icon--right"></i>
        </el-button>
      </span>

    </div>
    <div class="block">
      <el-button-group>
        <el-button type="primary" icon="arrow-left">上一页</el-button>
        <el-button type="primary">下一页
          <i class="el-icon-arrow-right el-icon--right"></i>
        </el-button>
      </el-button-group>
      <el-button-group>
        <el-button type="primary" icon="edit" :loading="true"></el-button>
        <el-button type="primary" icon="share"></el-button>
        <el-button type="primary" icon="delete"></el-button>
      </el-button-group>
    </div>
    <div class="block">
      <el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
      <el-radio class="radio" v-model="radio" label="2">备选项</el-radio>
    </div>
    <div class="block">
      <el-radio disabled v-model="radio1" label="禁用">备选项</el-radio>
      <el-radio disabled v-model="radio1" label="选中且禁用">备选项</el-radio>
    </div>
    <div class="block">
      <el-radio-group v-model="radio2" @change="changeRadio">
        <el-radio :label="3">备选项</el-radio>
        <el-radio :label="6">备选项</el-radio>
        <el-radio :label="9">备选项</el-radio>
      </el-radio-group>
    </div>

    <div class="block">
      <el-button-group v-model="radio3">
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="上海" :disabled="true"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-button-group>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import {
  Button,
  ButtonGroup,
  Dialog,
  Row,
  Col,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxGroup
} from 'element-ui'
Vue.use(Button)
Vue.use(Dialog)
Vue.use(Row)
Vue.use(Col)
Vue.use(ButtonGroup)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
export default {
  name: 'index',
  data() {
    return {
      visible: false,
      show: false,
      radio: '1',
      radio1: '选中且禁用',
      radio2: 3,
      radio3: '上海'
    }
  },
  mounted() {

  },
  computed: {
    ...mapGetters({
      banner: 'getBannerList',
      nowplay: 'getNowPlaying',
      coming: 'getComingSoon'
    })
  },
  methods: {
    ...mapActions({
      getBannerList: 'getBannerList',
      getNowPlaying: 'getNowPlaying',
      getComingSoon: 'getComingSoon'

    }),
    changeRadio (value) {
      console.log('change_radio: ', value)
    }
  }

}
</script>
<style lang="scss" scoped>
.parent-container {
  margin: 8px;
}
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #20A0FF;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

div.block {
  margin-bottom: 20px;
}
</style>


