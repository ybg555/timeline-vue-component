export default {
  name: 'Timeline',
  props: {
    timelineData: {
      type: Array,
      default() {
        return [];
      }
    },
    pageSize: {
      type: Number,
      default: 10
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
      list: [],
      timelineLoading: false
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
  },
  methods: {
    onPagination(index) {
      if (this.timelineData.length > this.list.length) {
        const lens = this.pageSize + index + 1;
        for (let i = index + 1; i < lens; i++) {
          if (this.timelineData[ i ]) {
            this.list.push(this.timelineData[ i ]);
          }
        }
      }
    }
  },
  created() {
    this.timelineData.forEach((item, index) => {
      if (index < this.pageSize) {
        this.list.push(item);
      }
    });
  }
};