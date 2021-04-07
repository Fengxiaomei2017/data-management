<template>
  <div :style="{height:height}" style="width: '100%'"></div>
</template>

<script>
import echarts from 'echarts';
export default {
  name: "stackedColumn",
  props: {
    height: {
      type: String,
      default: () => {
        return "300px"
      }
    },
    xAxisData: {
      type: Array,
      default: () => []
    },
    girlData: {
      type: Array,
      default: () => []
    },
    boyData: {
      type: Array,
      default: () => []
    },
    todayData: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ''
    },
    // teacherCount: {
    //     type: Array,
    //     fefault: () => []
    // },
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
    if (this.xAxisData && this.xAxisData.length) {
       this.initChart();
    }
  },
  watch: {
    xAxisData: {
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
        backgroundColor: '#001120',
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['男生','女生',"今日招生"],
        textStyle: {
            color: 'rgba(55,255,249,1)'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : this.xAxisData,
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(55,255,249,1)',
                }
            },
            axisLabel: {
                color: 'rgba(55,255,249,1)'
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(55,255,249,1)',
                }
            }
        }
    ],
    series : [
        {
            name:'男生',
            type:'bar',
            barWidth: 20,
            itemStyle: {
               barBorderRadius: 20, 
               color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "rgba(55,255,249,1)"
                    },
                    {
                        offset: 1,
                        color: "rgba(0,222,215,0.2)"
                    }
                ])
            },
            data: this.boyData
        },
        {  // 替代柱状图 默认不显示颜色，是最下方柱图（邮件营销）的value值 - 20 
            type:'bar',
            barWidth: 20,
            barGap: '-100%',
            stack: '广告',
            itemStyle: {
              color: 'transparent'  
            },
            data: this.boyData
        },
        {
            name:'女生',
            type:'bar',
            barWidth: 20,
            barGap: '-100%',
            stack: '广告',
            itemStyle: {
               barBorderRadius: 20, 
               color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0.4,
                        color: "rgba(255,252,0,1)"
                    },
                    {
                        offset: 1,
                        color: "rgba(8,228,222,0.2)"
                    }
                ])
            },
            data: this.girlData
        },
        {
            name:'今日招生',
            type:'bar',
            barWidth: 20,
            barGap: '-100%',
            stack: '广告',
            itemStyle: {
               barBorderRadius: 20, 
               color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0.4,
                        color: "rgba(155,165,255)"
                    },
                    {
                        offset: 1,
                        color: "rgba(38,162,255)"
                    }
                ])
            },
            data: this.todayData
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
