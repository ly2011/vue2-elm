<template>
  <div>
    <el-form ref="form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="guangzhou"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>

      <el-form-item label="即时配送">
        <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import Vue from 'vue'
import {Form, FormItem,Input, Select,Option,Col,Row,DatePicker,TimePicker,Switch } from 'element-ui'
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Col)
Vue.use(Row)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(Switch)
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  }
}
</script>
