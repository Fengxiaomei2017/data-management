<template>
  <div :style="{height:height}" style="width: '100%'"></div>
</template>

<script>
export default {
  name: "simpleEncode",
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
        dataset: {
            source: this.data
        },
    grid: {containLabel: true},
    xAxis: {name: 'amount'},
    yAxis: {type: 'category'},
    // visualMap: {
    //     orient: 'horizontal',
    //     left: 'center',
    //     min: 10,
    //     max: 100,
    //     text: ['High Score', 'Low Score'],
    //     // Map the score column to color
    //     dimension: 0,
    //     inRange: {
    //         color: ['#D7DA8B']
    //     }
    // },
    color: ['#7cb5ec'],
    series: [
        {
            type: 'bar',
            encode: {
                // Map the "amount" column to X axis.
                x: '',
                // Map the "product" column to Y axis
                y: 'product'
            }
        }
    ]}, true);
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