<template>
  <div :style="{height:height}" style="width: '100%'"></div>
</template>

<script>
export default {
  name: "areaChart",
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
    yearData: {
      type: Array,
      default: () => []
    },
    seriesData: {
      type: Array,
      default: () => []
    },
    teacherCount: {
        type: Array,
        fefault: () => []
    },
    color: {
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
    if(this.yearData && this.yearData.length){
       this.initChart();
    }
  },
  watch: {
    yearData: {
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
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: this.yearData
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: this.seriesData,
                color: 'rgb(83,163,255)',
                type: 'line',
                areaStyle: {}
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
