<template>
  <div :style="{height:height}" style="width: '100%'"></div>
</template>

<script>
export default {
  name: "pieChart",
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
        // tooltip : {
        //     trigger: 'item',
        //     formatter: "{a} <br/>{b} : {c} ({d}%)"
        // },
        color: this.color,
        // legend: {
        //     orient: 'vertical',
        //     left: 'left',
        //     data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        // },
        series : [
            {
                name: '',
                type: 'pie',
                radius: '55%',
                center: ['50%', '50%'],
                data: this.data,
                itemStyle: {
                    emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
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
