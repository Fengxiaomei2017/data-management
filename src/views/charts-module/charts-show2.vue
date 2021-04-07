<template>
  <div>
        <el-tabs type="card" class="tabs">
            <line-bar :title="describle"></line-bar>
            <div class="content">
                <el-row>
                        <el-col :span="8">
                            <el-card style="margin-right: 18%;">
                                <div slot="header" class="clearfix">
                                    <span>教师来源</span>
                                </div>
                                <customized-pie :height="height" title="饼图" :data="data11"></customized-pie>
                            </el-card>
                        </el-col>
                        <el-col :span="8">
                            <el-card style="margin: 0 9%;">
                                <div slot="header" class="clearfix">
                                    <span>教师类型</span>
                                </div>
                                <pie-chart :height="height" title="饼图" :data="data12" :color="color1"></pie-chart>
                            </el-card>
                        </el-col>
                        <el-col :span="8">
                            <el-card style="margin-left: 18%;">
                                <div slot="header" class="clearfix">
                                    <span>教学科研成功及获取情况</span>
                                </div>
                                <pie-chart :height="height" title="饼图" :data="data13" :color="color2"></pie-chart>
                            </el-card>
                    </el-col>
                </el-row>
            </div>
        </el-tabs>
        <el-tabs type="card" class="tabs">
            <line-bar :title="teacher"></line-bar>
                <div class="content">
                    <el-row>
                        <el-col :span="6">
                            <el-card style="margin-right: 2%;">
                                <div slot="header" class="clearfix">
                                    <span>学历情况</span>
                                </div>
                                <simple-encode :height="height" title="饼图" :data="education"></simple-encode>
                            </el-card>
                        </el-col>
                        <el-col :span="6">
                            <el-card style="margin:0 1%;">
                                <div slot="header" class="clearfix">
                                    <span>职称情况</span>
                                </div>
                                <simple-encode :height="height" title="饼图" :data="name"></simple-encode>
                            </el-card>
                        </el-col>
                        <el-col :span="6">
                            <el-card style="margin:0 1%;">
                                <div slot="header" class="clearfix">
                                    <span>工作年限</span>
                                </div>
                                <simple-encode :height="height" title="饼图" :data="workYear"></simple-encode>
                            </el-card>
                        </el-col>
                        <el-col :span="6">
                            <el-card style="margin-left: 2%;">
                                <div slot="header" class="clearfix">
                                    <span>特别资历</span>
                                </div>
                                <simple-encode :height="height" title="饼图" :data="special"></simple-encode>
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
        </el-tabs>
    <!-- <doughnut-chart :height="height" title="环形图" :data="data1"></doughnut-chart>
    <pie-chart :height="height" title="饼图" :data="data2"></pie-chart>
    <simple-encode :height="height" title="饼图" :data="data4"></simple-encode> -->
  </div>
</template>

<script>
import { doughnutChart,pieChart,customizedPie,simpleEncode,lineBar } from "@/components";
export default {
  components: {
      doughnutChart,
      pieChart,
      customizedPie,
      simpleEncode,
      lineBar
  },
  data(){
      return {
        describle: '描述',
        teacher: '教师资历情况',
        color1: ['#7cb5ec', '#d8d8d9'],
        color2: ['#7cb5ec', '#d8d8d9', '#e8fbf4'],
        data1: [
            {value:2000, name:'专科及专科以上学历'},
            {value:310, name:'专科一下学历'},
        ],
        data2: [
            {value:10, name:'rose1'},
            {value:5, name:'rose2'},
            {value:15, name:'rose3'},
            {value:25, name:'rose4'},
            {value:20, name:'rose5'},
            {value:35, name:'rose6'},
            {value:30, name:'rose7'},
            {value:40, name:'rose8'}
        ],
        data11: [
            {value:235, name:'其他'},
            {value:274, name:'录用'},
            {value:310, name:'军队转业'},
            {value:335, name:'复员'},
            {value:400, name:'调入'},
            {value:400, name:'回国定居'}
        ],
        data12: [
            {value:200, name:'专职教师'},
            {value:20, name:'兼职教师'},
        ],
        data13: [
            {value:200, name:'科研工作'},
            {value:50, name:'专业技术'},
            {value:20, name:'其它'}
        ],
        education: [
            ['score', 'amount', 'product'],
            [0, 79146, '其它'],
            [80, '专科以下'],
            [10, 12755, '专科'],
            [6, 41032, '博士研究生'],
            [10, 10, '硕士研究生'],
            [80, 80, '本科'],
        ],
        name: [
            ['score', 'amount', 'product'],
            [95, 12755, '正高级讲师'],
            [6, 41032, '高级讲师'],
            [80, 78254, '讲师'],
            [20, 58212, '助理讲师'],
        ],
        workYear: [
            ['score', 'amount', 'product'],
            [20, 12755, '1年以下'],
            [90, 41032, '3 - 5年'],
            [40, 78254, '5 - 10年'],
            [60, 58212, '10年以上']
        ],
        special: [
            ['score', 'amount', 'product'],
            [20, 79146, '全日制师范类专业毕业'],
            [25, 20145, '有特殊教育从业证书'],
            [20, 12755, '县特级教师'],
            [30, 41032, '博士县级以上骨干教师研究生']          
        ],
        data4: [
            ['score', 'amount', 'product'],
            [89.3, 58212, '全日制师范类专业毕业'],
            [57.1, 78254, '有特殊教育从业证书'],
            [74.4, 41032, '县特级教师'],
            [50.1, 12755, '县级以上骨干教师']
        ],
        height:'280px'
      }
  },
};
</script>
<style lang="less" scoped>
el-col {
    height: 500px;
}
.content {
    margin: 20px 0;
}
.tabs {
    margin: 8px 0;
    background-color: #fff;padding: 0 10px;
}
</style>