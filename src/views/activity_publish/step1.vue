<template>
  <div class="step1">
    <el-form :model="step1Form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="step1Form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动分类">
        <el-radio-group v-model="step1Form.cate">
          <el-radio v-for="item in step1Form.cate_list" :key="item.name" :label="item.name"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="活动标签">
        <el-tag
          v-for="tag in step1Form.tags"
          :key="tag"
          :closable="true"
          :close-transition="true"
          type="primary"
          @close="handleCloseTag(tag)"
        >
        {{tag}}
        </el-tag>
        <el-input
          class="input-new-tag"
          v-if="step1Form.inputNewTagVisible"
          v-model="step1Form.inputNewTagValue"
          ref="saveTagInput"
          size="mini"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm"
        >
        </el-input>
        <el-button
          v-else
          class="button-new-tag"
          @click="showInputTag"
          size="small"
          icon="plus"
        ></el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { Form, FormItem, Input, Select, Option, DatePicker,TimePicker,Switch, Checkbox, CheckboxGroup, Radio, RadioGroup, Button, RadioButton, Tag } from 'element-ui'
  Vue.use(Form)
  Vue.use(FormItem)
  Vue.use(Input)
  Vue.use(Select)
  Vue.use(Option)
  Vue.use(DatePicker)
  Vue.use(TimePicker)
  Vue.use(Switch)
  Vue.use(Checkbox)
  Vue.use(CheckboxGroup)
  Vue.use(Radio)
  Vue.use(RadioGroup)
  Vue.use(Button)
  Vue.use(RadioButton)
  Vue.use(Tag)
  export default {
    name: 'step1',
    data() {
      return {
        step1Form: {
          name: '',
          cate_list: [
            { name: '未发布' },
            { name: '测试活动' },
            { name: '精彩活动' }
          ],
          cate: '',
          tags: [],
          inputNewTagVisible: false,
          inputNewTagValue: ''
        }
      }
    },
    methods: {
      handleCloseTag(tag) {
        this.step1Form.tags.splice(this.step1Form.tags.indexOf(tag), 1)
      },
      showInputTag() {
        this.step1Form.inputNewTagVisible = true
        this.$nextTick(() => {
          this.$refs.saveTagInput.$refs.input.focus()
        })
      },
      handleInputConfirm () {
        const inputNewTagValue = this.step1Form.inputNewTagValue
        if (!!inputNewTagValue) {
          if (!this.step1Form.tags.includes(inputNewTagValue)) {
            this.step1Form.tags.push(inputNewTagValue)
          } else {
            alert('不能重复添加标签')
          }
        }
        this.step1Form.inputNewTagVisible = false
        this.step1Form.inputNewTagValue = ''
      }
    }
  }
</script>
