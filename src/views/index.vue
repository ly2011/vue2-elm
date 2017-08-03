<template>
  <div class="parent-container">
    <el-button @click="show=!show">按钮</el-button>
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

    <div class="block">
      <div>
        <el-input placeholder="请输入内容" v-model="input3">
          <template slot="prepend">Http://</template>
        </el-input>
      </div>
      <div style="margin-top: 15px;">
        <el-input placeholder="请输入内容" v-model="input4">
          <template slot="append">.com</template>
        </el-input>
      </div>
      <div style="margin-top: 15px;">
        <el-input placeholder="请输入内容" v-model="input5">
          <el-select v-model="select" slot="prepend" placeholder="请输入内容">
            <el-option label="餐厅名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="search"></el-button>
        </el-input>
      </div>
    </div>

    <div class="block">
      <el-row>
        <el-col :span="12">
          <div class="sub-title">激活即列出输入建议</div>
          <el-autocomplete
          class="inline-input"
          v-model="state1"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
          @select="handleSelect"
          >
          </el-autocomplete>
        </el-col>
        <el-col :span="12">
          <div class="sub-title">请输入后匹配输入建议</div>
          <el-autocomplete
          class="inlie-input"
          v-model="state2"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
          :trigger-on-focus="false"
          @select="handleSelect"
          ></el-autocomplete>
        </el-col>
      </el-row>
    </div>

    <div class="block">
      <el-autocomplete
      popper-class="my-autocomplete"
      v-model="state3"
      :fetch-suggestions="querySearch"
      custom-item="my-item-zh"
      placeholder="请输入内容"
      :trigger-on-focus="true"
      @select="handleSelect"
      icon="edit"
      :on-icon-click="handleIconClick"
      ></el-autocomplete>
    </div>

    <div class="block">
      <el-autocomplete
      v-model="state4"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入内容"
      :trigger-on-focus="true"
      @select="handleSelect"
      ></el-autocomplete>
    </div>

    <div class="block">
      <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" :disabled="false" :step="2"></el-input-number>
    </div>

    <div class="block">
      <el-select v-model="value" clearable multiple placeholder="清选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled"></el-option>
      </el-select>
    </div>

    <div class="block">
      <el-select v-model="value6" class="my-city" placeholder="请选择">
        <el-option
        v-for="item in selectCities"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        >
        <span style="float: left">{{item.label}}</span>
        <span style="float: right; color: #8492a6;font-size: 13px">{{item.value}}</span>
        </el-option>
      </el-select>
    </div>

    <div class="block">
      <el-select v-model="value7" placeholder="请选择">
        <el-option-group
        v-for="group in options3"
        :key="group.label"
        :label="group.label"
        >
        <el-option
        v-for="item in group.options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        ></el-option>
        </el-option-group>
      </el-select>
    </div>

    <div class="block">
      <span class="demonstration">默认click触发子菜单</span>
      <el-cascader
      :options="options4"
      v-model="selectedOptions"
      @change="handleChange"
      >

      </el-cascader>
    </div>

    <div class="block">
      <el-switch
        v-model="switch1"
        on-text=""
        off-text=""
      >
      </el-switch>
      <el-switch
        v-model="switch2"
        on-color="#13ce66"
        off-color="#ff4949"
        disabled
      >
      </el-switch>

    </div>

    <div class="block">
      <el-tooltip
      :content="'Switch value: ' + switch3"
      placement="top"
      >
        <el-switch
          v-model="switch3"
          on-color="#13ce66"
          off-color="#ff4949"
          on-value="100"
          off-value="0"
        >

        </el-switch>
      </el-tooltip>
    </div>
    <div class="block">
      <el-slider
        v-model="slider1"
        :step="10"
        vertical
        show-stops
        height="200px"
      >
      </el-slider>
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
  InputNumber,
  Select,
  Option,
  OptionGroup,
  Autocomplete,
  Cascader,
  Switch,
  Tooltip,
  Slider
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
Vue.use(Select)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Autocomplete)
Vue.use(Cascader)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Slider)

Vue.component('my-item-zh', {
  functional: true,
  render: function (h, ctx) {
    var item = ctx.props.item;
    return h('li', ctx.data, [
      h('div', { attrs: { class: 'name' } }, [item.value]),
      h('span', { attrs: { class: 'addr' } }, [item.address])
    ]);
  },
  props: {
    item: { type: Object, required: true }
  }
});

const cityOptions = ['上海', '北京', '广州', '深圳']
export default {
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
      textarea3: '',
      input3: '',
      input4: '',
      input5: '',
      select: '',
      restaurants: [],
      state1: '',
      state2: '',
      state3: '',
      state4: '',
      timeout: null,
      num1: 1,
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶',
        disabled: true
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      value6: '',
      selectCities: [
        {
          value: 'Beijing',
          label: '北京'
        },
        {
          value: 'Shanghai',
          label: '上海'
        },{
          value: 'Guangzhou',
          label: '广州'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }
      ],
      value7: '',
      options3: [
        {
          label: '热门城市',
          options: [
            {
              value: 'Beijing',
              label: '北京'
            },
            {
              value: 'Shanghai',
              label: '上海'
            },{
              value: 'Guangzhou',
              label: '广州'
            }, {
              value: 'Shenzhen',
              label: '深圳'
            }
          ]
        },
        {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }
      ],
      options4: [{
          value: 'zhinan',
          label: '指南',
          disabled: true,
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],
        switch1: true,
        switch2: true,
        switch3: '100',
        slider1: 0
    }
  },
  mounted() {
    if (!this.banner.length) {
      this.getBannerList()
    }
    this.comConf({ title: '战狼-2' })
    this.restaurants = this.loadAll()
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
    },
    querySearch(queryString, cb) {
      const restaurants = this.restaurants
      const results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
      // 调用callback返回建议列表的数据
      cb(results)
    },
    createFilter (queryString) {
      return (restaurant) => {
        return restaurant.value.indexOf(queryString.toLowerCase()) === 0
      }
    },
    querySearchAsync (queryString, cb) {
      const restaurants = this.restaurants
      const results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants

      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        // 调用callback返回建议列表的数据
        cb(results)
      }, 3000 * Math.random())

    },
    handleChange(value) {
      console.log(value)
    },
    loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
          { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
          { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
          { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
          { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
          { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
          { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
          { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
          { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
          { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
          { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
          { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
          { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
          { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
          { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
          { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
          { "value": "枪会山", "address": "上海市普陀区棕榈路" },
          { "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" },
          { "value": "钱记", "address": "上海市长宁区天山西路" },
          { "value": "壹杯加", "address": "上海市长宁区通协路" },
          { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
          { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
          { "value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
          { "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" },
          { "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
          { "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号" },
          { "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号" },
          { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
          { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" },
          { "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号" },
          { "value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室" },
          { "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部" },
          { "value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B" },
          { "value": "浏阳蒸菜", "address": "天山西路430号" },
          { "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
          { "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
          { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
          { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
          { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
          { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
          { "value": "阳阳麻辣烫", "address": "天山西路389号" },
          { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
        ];
      },
      handleSelect(item) {
        console.log(item);
      }
  }

}
</script>
<style lang="scss" scoped>
.parent-container {
  margin: 8px;
  max-height: 50vh;
  max-width: 100vw;
  overflow-y: auto;
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

<style lang="scss">
.el-select .el-input {
  width: 110px;
}
.my-city .el-input {
  width: 220px;
}
.my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;
    .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .addr {
      font-size: 12px;
      color: #b4b4b4;
    }
    .highlighted .addr {
      color: #ddd;
    }
  }
}
</style>



