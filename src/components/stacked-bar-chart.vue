<template>
    <div :style="{height:height}" style="width: '100%'"></div>
</template>
<script>
export default {
    name: "stackedBarChart",
    props: {
        height: {
            type: String,
            default: () => {
                return "300px"
            }
        },
        teacherData: {
            type: Object,
            default: () => {}
        },
        studentData: {
            type: Object,
            default: () => {}
        },
        yData: {
            type: Array,
            default: () => []
        }
    },
    data () {
        return {
            chart: null
        }
    },
    mounted() {
    if(this.teacherData && this.studentData) {
       this.initChart();
    }
  },
  watch: {
    teacherData: {
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
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: [Object.keys(this.teacherData)[0], Object.keys(this.studentData)[0]]
        },
        grid: {
            top: '5%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {type: 'value'},
        yAxis: {
            type: 'category',
            data: this.yData
        },
        series: [
            {
                name: Object.keys(this.teacherData)[0],
                type: 'bar',
                barWidth: '50%',
                barGap: 0,
                color: ['rgb(103,224,227)'],
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
              data: Object.values(this.teacherData)[0]
            },
            {
                name: Object.keys(this.studentData)[0],
                type: 'bar',
                color: ['rgb(76,202,114)'],
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: Object.values(this.studentData)[0]
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
}
</script>
