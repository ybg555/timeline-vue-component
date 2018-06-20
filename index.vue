<template>
  <div>
    <ul class="timeline-wrap" :style="{paddingLeft: spacing + 'px'}" v-if="list.length > 0">
      <li
        v-for="(timeline, index) in list"
        :key="'timeline-' + index"
        class="timeline-item"
        :class="{'timeline-start': index === 0, 'timeline-end': index === (list.length - 1)}">
        <span class="item-grouptitle"
          :style="{
            width: titleWidth + 'px',
            left: -spacing + 'px'
          }" v-if="timeline.groupTile" :title="timeline.groupTile">{{ timeline.groupTile }}</span>
        <span class="item-title" :style="{width: titleWidth + 'px', left: -spacing + 'px'}" :title="timeline.title">{{ timeline.title }}</span>
        <div class="item-start"
          :style="{
            width: startCircleWidth + 'px',
            height: startCircleWidth + 'px',
            borderRadius: startCircleWidth + 'px',
            top: -startCircleWidth + 'px',
            left: -startCircleLeft + 'px',
          }" v-if="index === 0">
            <slot name="startCircle"></slot>
          </div>
        <div :class="'item-circle item-circle-' + index + ' item-circle-' + (index % 2 === 0 ? 'even' : 'odd')"
          :style="{
            width: circleWidth + 'px',
            height: circleWidth + 'px',
            left: circleLeft + 'px'
          }"></div>
        <div
          @click="onPagination(index)"
          class="item-end"
          :class="{'item-next': next}"
          :style="{
            width: startCircleWidth + 'px',
            height: startCircleWidth + 'px',
            borderRadius: startCircleWidth + 'px',
            left: -startCircleLeft + 'px',
            bottom: -startCircleWidth + 'px',
          }" v-if="index === (list.length - 1)">
            <slot name="endCircle"></slot>
        </div>
        <div>
          <div class="timeline-content">
            <slot name="list" :data="timeline"></slot>
          </div>
        </div>
      </li>
      <li class="timeline-vertical-bar" :style="{left: verticalBarLeft + 'px'}"></li>
    </ul>
    <p class="timeline-empty" v-else>数据为空</p>
  </div>
</template>

<script>
import vm from './vm.js';
export default vm;
</script>

<style lang="scss">
.timeline-wrap {
	font-size: 14px;
	box-sizing: border-box;
	position: relative;
	list-style: none;
	/* margin: 20px; */
	padding-left: 150px;
  .timeline-vertical-bar {
    position: absolute;
    top: 0;
    left: 115px;
    width: 2px;
    height: 100%;
    background-color: #D3DCE6
  }
  .timeline-item {
    padding: 20px 0;
    position: relative;
  }
	.timeline-start {
		padding-top: 40px;
	}
	.timeline-end {
		padding-bottom: 40px;
	}
  .item-grouptitle {
		position: absolute;
		margin-top: -22px;
    left: -150px;
    width: 80px;
    text-align: center;
    color: #324057;
    font-size: 14px;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space: nowrap
	}
	.item-title {
		position: absolute;
    left: -150px;
    width: 80px;
    text-align: right;
    color: #8492A6;
    font-size: 13px;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space: nowrap
	}
	.item-start {
		box-sizing: border-box;
    position: absolute;
		top: 0;
    left: -42px;
    z-index: 1;
    width: 16px;
    height: 16px;
    border-radius: 10px;
    color: #D3DCE6;
    border: 2px solid #D3DCE6;
    text-align: center;
	}
	.item-circle {
		box-sizing: border-box;
    position: absolute;
    left: -42px;
    margin-top: 4px;
    z-index: 1;
    width: 16px;
    height: 16px;
    border-radius: 10px;
    background: #D3DCE6;
	}
	.item-end {
		box-sizing: border-box;
    position: absolute;
		bottom: 0;
    left: -42px;
    z-index: 1;
    width: 16px;
    height: 16px;
    border-radius: 10px;
    color: #D3DCE6;
    border: 2px solid #D3DCE6;
    text-align: center;
	}
  .item-next {
    transition: all .3s ease 0.3s;
    border-color: #58B7FF;
    color: #58B7FF;
    cursor: pointer;
  }
  .timeline-content {
    color: #324057;
  }
}
.timeline-empty {
  text-align: center;
  line-height: 100px;
  color: #8492A6;
}
</style>