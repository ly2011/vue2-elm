## ERROR

- 2017-08-02

引入 `element-ui` 后，对 `element-ui` 没法提取外链css

解决方案：

```
use: ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use:['css-loader', 'postcss-loader'] // 原来把 `style-loader` 也写在下面了
})
```

参考：
1. [https://github.com/dwqs/vue-typescript](https://github.com/dwqs/vue-typescript)
1、[https://github.com/ron0115/v-ncmusic](https://github.com/ron0115/v-ncmusic)
2、[http://c.damaiplus.com/tn/web/bull-backup/dist/#/index/my](http://c.damaiplus.com/tn/web/bull-backup/dist/#/index/my)
3、[https://github.com/javaSwing/NeteaseCloudWebApp](https://github.com/javaSwing/NeteaseCloudWebApp)
4、[https://music.163.com/m/](https://music.163.com/m/)
5、[https://github.com/SimonZhangITer/VueDemo_Sell_Eleme/blob/master/src/components/goods/goods.vue](https://github.com/SimonZhangITer/VueDemo_Sell_Eleme/blob/master/src/components/goods/goods.vue)