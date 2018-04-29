export default {
  name: 'Timeline',
  props: {
    timelineData: {
      type: Array,
      default () {
        return [];
      }
    },
    pageSize: {
      type: Number,
      default: 10
    },
    paginationType: {
      type: String,
      default: 'frontend'
    },
    spacing: {
      type: Number,
      default: 180
    },
    titleWidth: {
      type: Number,
      default: 100
    },
    circleWidth: {
      type: Number,
      default: 10
    },
    startCircleWidth: {
      type: Number,
      default: 30
    }
  },
  data() {
    return {
      timelineLoading: false,
      list: [],
      current: 1,
      next: true,
      remoteEmit: false,
    };
  },
  computed: {
    circleLeft() {
      return (this.titleWidth - this.spacing) / 2;
    },
    verticalBarLeft() {
      return (this.spacing + this.circleLeft) + this.circleWidth / 2 - 1;
    },
    startCircleLeft() {
      return (this.spacing - this.verticalBarLeft) + this.startCircleWidth / 2 - 1;
    }
  },
  watch: {
    timelineData: {
      handler(newlval) {
        if (this.paginationType === 'remote') {
          if (this.remoteEmit) {
            this._remoteRender(newlval);
          } else {
            console.info('异步从接口获取数据，请重置父组件中的请求参数: pagination.current = 1');
            this.list = [];
            this.current = 1;
            this._remoteRender(newlval);
          }
        }
        this.remoteEmit = false;
      },
      deep: true
    }
  },
  methods: {
    // 前端静态数据判断next
    _hasNext() {
      return this.timelineData.length > this.list.length;
    },
    // 前端静态数据init
    _appendList(timelineList) {
      if (this.paginationType !== 'remote') {
        timelineList.forEach((item, index) => {
          if (index < this.pageSize) {
            this.list.push(item);
          }
        });
        this.next = this._hasNext();
      }
    },
    // 前端静态数据分页
    _frontendPagination(index) {
      const lens = this.pageSize + index + 1;
      for (let i = index + 1; i < lens; i++) {
        if (this.timelineData[i]) {
          this.list.push(this.timelineData[i]);
        }
      }
      this.next = this._hasNext();
    },
    // remote 分页
    _remotePagination(index) {
      this.$emit('fetch-remote', {
        current: this.current,
        size: this.pageSize
      });
      this.remoteEmit = true;
    },
    _remoteRender(newlval) {
      newlval.forEach((item, index) => {
        if (index < this.pageSize) {
          this.list.push(item);
        }
      });
      if (newlval && newlval.length < Number(this.pageSize)) {
        this.next = false;
      } else {
        this.next = true;
      }
      this.current += 1;
    },
    onPagination(index) {
      if (this.next) {
        if (this.paginationType === 'remote') {
          this._remotePagination(index);
        } else {
          this._frontendPagination(index);
        }
      }
    }
  },
  created() {
    this._appendList(this.timelineData);
  }
};