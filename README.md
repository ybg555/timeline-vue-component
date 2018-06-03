timeline-vue-component
==========================

[![Travis](https://img.shields.io/travis/ybg555/timeline-vue-component.svg)](https://travis-ci.org/ybg555/timeline-vue-component) [![npm](https://img.shields.io/npm/dm/timeline-vue-component.svg)](https://www.npmjs.com/package/timeline-vue-component) [![npm](https://img.shields.io/npm/v/timeline-vue-component.svg)](https://www.npmjs.com/package/timeline-vue-component)

Timeline components

![](https://user-images.githubusercontent.com/6490371/38771016-1649e1b4-404e-11e8-9d8f-83e3c2c84fc6.png)

### Features

* Support for lazy loading and paging
* Data sources support front-end pure static and asynchronous interface acquisition
* Slot custom content display
* Support layout and style customization

### Installation

```sh
npm install timeline-vue-component --save
```

### Usages

---

```js
import Timeline from 'timeline-vue-component';

Vue.component('timeline', Timeline);
```

```html
<!--The data source is front-end static data-->

<timeline
  pagination-type="frontend"
  :timeline-data="data"
  :page-size="10"
  :spacing="180"
>
  <!--Customize symbol in start icon, pass-->
  <template slot="startCircle">
    <i class="el-icon-arrow-up"></i>
  </template>

  <!--Customize symbo al in start icon, pass-->
  <template slot="endCircle">
    <i class="el-icon-arrow-down"></i>
  </template>

  <!--Content on-demand custom layout and data layout, pass-->
  <template slot="list" scope="scope">
    {{ scope.data }}
  </template>
</timeline>
```

```html
<!--The data source is asynchronous interface data-->
<!--The next point in the component triggers the next event.-->
<!--The first parameter of the `onFetchRemoteData` callback function is page => {current,size},
which synchronizes the pagination value of the parent component.-->

<timeline
  pagination-type="remote"
  :timeline-data="data"
  :page-size="10"
  @fetch-remote="onFetchRemoteData"
  :spacing="180"
>
  <!--Customize symbol in start icon, pass-->
  <template slot="startCircle">
    <i class="el-icon-arrow-up"></i>
  </template>
  
  <!--Customize symbo al in start icon, pass-->
  <template slot="endCircle">
    <i class="el-icon-arrow-down"></i>
  </template>
  
  <!--Content on-demand custom layout and data layout, pass-->
  <template slot="list" scope="scope">
    {{ scope.data }}
  </template>
</timeline>
```

Timeline data format

```js
// :timeline-data="data"
data: [
  { // Received through scope
    groupTile: 'Group header',
    title: 'Title',
    content: [
      { field: '自定义内容' },
    ],
  },
]
```

### API

---

##### config

参数名 | 类型 | 默认值 | 备注
------------ | ------------- | ------------ | ---------
paginationType | String  | - | 数据来源类型 frontend、remote（必填）
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

