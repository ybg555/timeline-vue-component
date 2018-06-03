export default {
  name: 'Timeline',

  props: {
    spacing: { type: Number, default: () => 180 },
    pageSize: { type: Number, default: () => 10 },
    titleWidth: { type: Number, default: () => 100 },
    circleWidth: { type: Number, default: () => 10 },
    timelineData: { type: Array, default: () => [] },
    paginationType: { type: String, default: () => 'frontend' },
    startCircleWidth: { type: Number, default: () => 30 },
  },

  data: () => ({
    list: [],
    next: true,
    current: 1,
    remoteEmit: false,
    timelineLoading: false,
  }),

  computed: {
    circleLeft () {
      return (this.titleWidth - this.spacing) / 2;
    },

    verticalBarLeft () {
      return (this.spacing + this.circleLeft) + this.circleWidth / 2 - 1;
    },

    startCircleLeft () {
      return (this.spacing - this.verticalBarLeft) + this.startCircleWidth / 2 - 1;
    },
  },

  watch: {
    timelineData: {
      handler (value) {
        if (this.paginationType !== 'remote') {
          return;
        }

        if (!this.remoteEmit) {
          console.info('Acquire data from the interface asynchronously, reset the request parameters in the parent component: pagination.current = 1');
          this.list = [];
          this.current = 1;
        }

        this.remoteRender(value);
        this.remoteEmit = false;
      },
      deep: true,
    },
  },

  methods: {
    // 前端静态数据判断next
    hasNext () {
      return this.timelineData.length > this.list.length;
    },

    // 前端静态数据分页
    frontendPagination (index) {
      const lens = this.pageSize + index + 1;

      this.list = this.timelineData.filter((item, i) => i > index + 1 && i < lens);
      this.next = this.hasNext();
    },

    // remote 分页
    remotePagination () {
      this.$emit('fetch-remote', {
        current: this.current,
        size: this.pageSize,
      });
      this.remoteEmit = true;
    },

    remoteRender (value) {
      this.list = value.filter((item, index) => index < this.pageSize);
      this.next = !(value && value.length < Number(this.pageSize));
      this.current++;
    },

    onPagination (index) {
      if (!this.next) {
        return;
      }

      if (this.paginationType === 'remote') {
        this.remotePagination();
      } else {
        this.frontendPagination(index);
      }
    },
  },

  created () {
    if (this.paginationType === 'remote') {
      return;
    }

    this.list = this.timelineData.filter((item, index) => index < this.pageSize);
    this.next = this.hasNext();
  },
};
