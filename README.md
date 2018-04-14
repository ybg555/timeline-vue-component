timeline-vue-component
==========================

[![Travis](https://img.shields.io/travis/ybg555/timeline-vue-component.svg)](https://travis-ci.org/ybg555/timeline-vue-component) [![npm](https://img.shields.io/npm/dm/timeline-vue-component.svg)](https://www.npmjs.com/package/timeline-vue-component) [![npm](https://img.shields.io/npm/v/timeline-vue-component.svg)](https://www.npmjs.com/package/timeline-vue-component)

时间轴组件

![](https://user-images.githubusercontent.com/6490371/38771016-1649e1b4-404e-11e8-9d8f-83e3c2c84fc6.png)

### Features

---

* 支持懒加载和分页
* slot 定制内容显示
* 支持布局和样式定制


### Installation

---

```shell
npm install timeline-vue-component --save
```


### Usages

---

```js
import Timeline from 'timeline-vue-component';

Vue.component('timeline', Timeline);
```

```html
<timeline
  :timelineData="data"
  :pageSize="10"
  :spacing="180">
  <!--开始图标内定制符号，选传-->
  <template slot="startCircle">
    <i class="el-icon-arrow-up"></i>
  </template>
  <!--结尾图标内定制符号，选传-->
  <template slot="endCircle">
    <i class="el-icon-arrow-down"></i>
  </template>
  <!--内容按需定制布局和数据排版，必传-->
  <template slot="list" scope="scope">
    {{ scope.data }}
  </template>
</timeline>
```

时间轴数据(demo)
```js
// :timelineData="data"
data: [
  {
    groupTile: '分组标题',
    title: '标题',
    content: [ // 通过 scope 接收
      {
        field: '自定义内容',
      }
    ]
  },
]
```

### API

---

##### config

参数名 | 类型 | 默认值 | 备注
------------ | ------------- | ------------ | ---------
timelineData | Array  | - | 时间轴数据（必填）
pageSize | Number  | - | 分页 （选填）
spacing | Number  | - | 时间轴左边和右边的间距 （选填）
titleWidth | Number  | - | 标题的宽度 （选填）
circleWidth | Number  | - | 中间节点（时间轴上的圆点）宽高 （选填）
startCircleWidth | Number  | - | 时间轴上开始和结束节点的宽高 （选填）


### Issues

---

Submit the [issues](https://github.com/ybg555/timeline-vue-component/issues) if you find any bug or have any suggestion.


### Contribution

---

Fork the [repository](https://github.com/ybg555/timeline-vue-component) and submit pull requests.


### Release Notes

---

see [CHANGELOG](https://github.com/ybg555/timeline-vue-component/blob/master/CHANGELOG.md)


### License

---

[![npm](https://img.shields.io/npm/l/timeline-vue-component.svg)]()

