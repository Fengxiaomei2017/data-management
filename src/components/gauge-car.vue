<template>
  <div :style="{height:height}" style="width: '100%'"></div>
</template>

<script>
export default {
  name: "gaugeCar",
  props: {
    height: {
      type: String,
      default: () => {
        return "300px"
      }
    },
    dataValue : {
      type: Number,
      default: () => 0
    },
    name: {
      type: String,
      default: () => ''
    },
    total: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    if(this.dataValue){
       this.initChart();
    }
  },
  watch: {
    dataValue: {
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
    setOptions(formatter) {
        this.chart.setOption({
            series: [
                {
                    name: '业务指标',
                    type: 'gauge',
                    radius: "95%", //仪表大小
                    // detail: {formatter:'{value}%',fontSize: 12},
                    detail: {formatter: formatter,fontSize: 12},
                    // detail: detail,
                    axisTick : { //刻度线样式（及短线样式）
                      length : 10
                    },
                    data: [{
                      value: this.dataValue,
                      name: this.name
                    }],
                    pointer: {
                        width:5,//指针的宽度
                        length:"60%", //指针长度，按照半圆半径的百分比
                        shadowBlur: 5
                    },
                    axisLabel: {            // 坐标轴小标记             
                      textStyle: {       // 属性lineStyle控制线条样式
                          color: '#000',
                          fontSize: 8,   //改变仪表盘内刻度数字的大小
                          shadowColor : '#000', //默认透明    
                      }
                    },
                    title : {
                      offsetCenter: [0, '-30%'],       //改变标题的位置
                      textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                          fontWeight: 'bolder',
                          fontSize: 12,
                          // color: '#000',
                          // shadowColor : '#000', //默认透明
                      }
                  }
                }
            ],
        }, true);
    },
    initChart() {
      this.chart = this.$echarts.init(this.$el);
      let formatter;
      this.total ? formatter = '{value}%' : formatter = '{value}'
      this.setOptions(formatter);
      
      window.addEventListener('resize', () => {
        if (!this.chart) return
        this.chart.resize()
      })
    }
  }
};
</script>
