<template>
  <div>
    <el-row>
      <el-col :span="4">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>教室情况</span>
          </div>
          <div v-for="o in classCount" :key="o.text" class="text item">
            <img  style="vertical-align:middle" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            <span class="class-span">{{o.text}}</span><strong style="color: #ff0000;margin: 0 15px 0 8px;font-size: 18px;">{{o.num}}</strong>间
          </div>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-card>
          <div slot="header" class="clearfix">
            <span>教师与学生情况</span>
          </div>
          <el-row>
            <el-col :span="8">
              <span>教师学历达标情况（%）</span>
              <doughnut-chart class="chart-box" style="margin-right: 2%" :height="height" title="环形图" :data="data11" :color="color11"></doughnut-chart>
            </el-col>
            <el-col :span="8">
              <span>教职工与学生比（%）</span>
              <doughnut-chart class="chart-box" style="margin: 0 1%" :height="height" title="环形图" :data="data12" :color="color11"></doughnut-chart>
            </el-col>
            <el-col :span="8">
              <span>在校生巩固率（%）</span>
              <doughnut-chart class="chart-box" style="margin-left: 2%" :height="height" title="环形图" :data="data13" :color="color11"></doughnut-chart>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <span>学生来源占比（%）</span>
              <pie-chart class="chart-box" :height="height" title="饼图" :data="data21" :color="color1"></pie-chart>
              </el-col>
            <el-col :span="8">
              <span>学生男女比例（%）</span>
              <pie-chart class="chart-box" :height="height" title="饼图" :data="data22" :color="color2"></pie-chart>
              </el-col>
            <el-col :span="8">
              <span>贫困生占比（%）</span>
              <pie-chart class="chart-box" :height="height" title="饼图" :data="data23" :color="color3">
                </pie-chart></el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>学校总体情况</span>
          </div>
          <div class="text item">
            <ul>
              <li>
                <p>学校总人数</p>
                <div><strong class="strong">3869</strong>人</div>
              </li>
              <li>
                <p>人均校园用地面积</p>
                <div class="left"><strong class="strong">58</strong>平方米</div>
              </li>
              <li>
                <p>人生均校舍建筑面积</p>
                <div class="left"><strong class="strong">26</strong>平方米</div>
              </li>
              <li>
                <p>人生均体育用地面积</p>
                <div class="left"><strong class="strong">7</strong>平方米</div>
              </li>
              <li>
                <p>寄宿学生校舍使用面积</p>
                <div class="left"><strong class="strong">6</strong>平方米</div>
              </li>
              <li>
                <p>计算机配置</p>
                <div class="left"><strong class="strong">13</strong>平方米</div>
              </li>
              <li>
                <p>图书配置</p>
                <div class="left"><strong class="strong">13</strong>平方米</div>
              </li>
              <li>
                <p>从未使用资产</p>
                <div><span style="color: #99cfb8;">224402&nbsp;</span>件</div>
              </li>
            </ul>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- <charts-bar :height="height" title="条形图标题" :data="data"></charts-bar> -->
  </div>
</template>

<script>
import { doughnutChart,pieChart } from "@/components";
export default {
  components: {
    doughnutChart,
    pieChart,
  },
  data(){
      return {
        color1: ['#346da4', '#0f487f'],
        color2: ['#262629', '#6099d0'],
        color3: ['#0f487f', '#346da4'],
        color11: ['#7cb5ec', '#434348'],
        classCount: [
          {text: '音乐教室', num: '2'},
          {text: '美术教室', num: '3'},
          {text: '计算机教室', num: '5'},
          {text: '图书馆', num: '1'},
          {text: '体育教室', num: '2'}
        ],
        data11: [
            {value:2000, name:'专科一下学历'},
            {value:40, name:'专科及以上学历'},
        ],
        data12: [
            {value:2000, name:'校职工人数'},
            {value:150, name:'学生总人数'},
        ],
        data13: [
            {value:2000, name:'离开学生数'},
            {value:50, name:'巩固学生数'},
        ],
        data21: [
            {value:274, name:'农村'},
            {value:235, name:'城镇'}
        ],
        data22: [
            {value:274, name:'男'},
            {value:235, name:'女'}  
        ],
        data23: [
            {value:20, name:'贫困生'},
            {value:274, name:'非贫困生'}
        ],
        // data: [
        //     {name: '衬衫', value: 125},
        //     {name: '羊毛衫', value: 86},
        //     {name: '雪纺衫', value: 256},
        //     {name: '裤子', value: 345},
        //     {name: '高跟鞋', value: 45},
        // ],
        height:'280px'
      }
  },
};
</script>
<style lang="less" scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    height: 695px;
    margin: 0 10px;
  }
  .chart-box {
    background-color: #fff;
    margin: 0 10px 10px 10px;
  }
  img {
    width: 50px;
    height: 50px;
  }
  ul {
    list-style: none;
  }
  .class-span {
    width: 100px;
    display: inline-block;
  }
  .strong {
    display: inline-block;
    width: 60px;
    font-size: 28px;
    color: #3399ff;
    margin: 0 10px 2px 30px;
    font-weight: normal;
  }
  // li {
  //   margin-top: 10px;
  // }
</style>