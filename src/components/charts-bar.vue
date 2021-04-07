<template>
  <div :style="{height:height}" style="width: '100%'"></div>
</template>

<script>
export default {
  name: "chartsBar",
  props: {
    height: {
      type: String,
      default: () => {
        return "300px"
      }
    },
    // title: {
    //   type: String,
    //   default: ''
    // },
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
        color: ['#3398DB'],
        title: {
          show: !!this.title,
          text: this.title,
          x: 'center',
          y: 'top',
        },
        tooltip: {
          confine: true,
        },
        calculable: true,
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
          {
              type : 'category',
              data: this.data.map(item => item.name),
              axisTick: {
                  alignWithLabel: true
              }
          }
        ],
        yAxis: {},
        series: [
          {
            name:'',
            type:'bar',
            barWidth: '20%',
            data: this.data.map(item => item.value)
          }
        ]
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