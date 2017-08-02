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
      <el-radio-group v-model="radio3" size="small">
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="上海" :disabled="true"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </div>

    <div class="block">

      <el-checkbox v-model="checked" disabled>备选项</el-checkbox>
      <el-checkbox v-model="checked2" disabled>备选项</el-checkbox>
    </div>

    <div class="block">
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="复选框 A"></el-checkbox>
        <el-checkbox label="复选框 B"></el-checkbox>
        <el-checkbox label="复选框 C"></el-checkbox>
        <el-checkbox label="禁用" disabled></el-checkbox>
        <el-checkbox label="选中且禁用" disabled></el-checkbox>
      </el-checkbox-group>
    </div>

    <div class="block">
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <div style="margin: 15px 0;"></div>
      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange" :min="1" :max="3">
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
      </el-checkbox-group>
    </div>

    <div class="block">
      <el-input v-model="input" placeholder="请输入内容" :disabled="false" icon="search" :on-icon-click="handleIconClick"></el-input>
    </div>

    <div class="block">
      <el-input type="textarea" :row="2" placeholder="请输入内容" v-model="textarea"></el-input>
      <div style="margin: 20px 0;"></div>
      <el-input type="textarea" autosize placeholder="请输入内容" v-model="textarea2"></el-input>
      <div style="margin: 20px 0;"></div>
      <el-input type="textarea" auto-size="{minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="textarea3"></el-input>
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
  CheckboxGroup,
  Input,
  InputNumber
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
Vue.use(Input)
Vue.use(InputNumber)

const cityOptions = ['上海', '北京', '广州', '深圳']
export default {
  name: 'index',
  data() {
    return {
      visible: false,
      show: false,
      radio: '1',
      radio1: '选中且禁用',
      radio2: 3,
      radio3: '上海',
      checked: true,
      checked2: false,
      checkList: ['选中且禁用', '复选框 A'],
      checkAll: true,
      checkedCities: ['广州', '深圳'],
      cities: cityOptions,
      isIndeterminate: true,
      input: '',
      textarea: '',
      textarea2: '',
      textarea3: ''
    }
  },
  mounted() {
    if (!this.banner.length) {
      this.getBannerList()
    }
    this.comConf({ title: '战狼-2' })
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
      getComingSoon: 'getComingSoon',
      comConf: 'comConf'

    }),
    changeRadio(value) {
      console.log('change_radio: ', value)
    },
    handleCheckAllChange(event) {
      this.checkedCities = event.target.checked ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    },
    handleIconClick(event) {
      console.log(event)
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


