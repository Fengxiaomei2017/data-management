<template>
  <div :style="{height:height}" style="width: '100%'"></div>
</template>

<script>
export default {
  name: "basicChart",
  props: {
    height: {
      type: String,
      default: () => {
        return "300px"
      }
    },
    title: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    if(this.data && this.data.length){
       this.initChart();
    }
  },
  watch: {
    data: {
      deep: true,
      handler (val) {
        this.initChart(val)
      }
    }
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    setOptions() {
      this.chart.setOption({
        tooltip: {},
        legend: {
            data: ['优秀学生画像', '个人学生画像']
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
            }
            },
            indicator: this.data
        },
        series: [{
            // name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data : [
                {
                    value : [5000, 12000, 28000, 31000, 50000, 21000],
                    name : '优秀学生画像'
                },
                {
                    value : [4300, 10000, 22000, 28000, 40000, 18000],
                    name : '个人学生画像'
                }
            ]
        }]
      }, true);
    },
    initChart() {
      this.chart = this.$echarts.init(this.$el);
      this.setOptions();
      
      window.addEventListener('resize', () => {
        if (!this.chart) return
        this.chart.resize()
      })
    }
  }
};
</script>
