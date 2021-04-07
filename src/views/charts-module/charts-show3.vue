<template>
  <div>
      <el-tabs type="card" >
            <line-bar :title="avatar"></line-bar>
                <div class="content">
                    <el-row>
                        <el-col :span="16">
                            <el-row>
                                <el-col :span="12">
                                    <el-card  style="margin-right: 20px;height: 379px;">
                                        <div slot="header" class="clearfix">
                                            <span>基本信息</span>
                                        </div>
                                        <div>
                                            <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt="头像"/>
                                            <el-row>
                                                <el-col :span="12">
                                                        <p>学号：G902348080</p>
                                                        <p>姓名：张琴</p>
                                                        <p>性别：女</p>
                                                        <p>专业：学前教育</p>
                                                        <p>班级：2019学前2班</p>
                                                        <p>入学时间：2019年9月</p>
                                                </el-col>
                                                <el-col :span="12">
                                                        <p>出生地：宜宾</p>
                                                        <p>籍贯：宜宾</p>
                                                        <p>民族：汉</p>
                                                        <p>出生年月：2002年5月</p>
                                                        <p>政治面貌：团员</p>
                                                        <p>宿舍：东区3栋2－05</p>
                                                </el-col>
                                            </el-row>
                                        </div>
                                    </el-card>
                                </el-col>
                                <el-col :span="12">
                                    <el-card style="margin-left: 20px;">
                                        <div slot="header" class="clearfix">
                                            <span>行为画像</span>
                                        </div>
                                        <basic-Chart :height="height" title="环形图" :data="data12"></basic-Chart>
                                    </el-card>
                                </el-col>
                                <el-col :span="24" style="margin-top: 10px;">
                                    <el-card>
                                        <div slot="header" class="clearfix">
                                            <span>课程成绩</span>
                                        </div>
                                        <charts-bar :height="height" title="条形图标题" :data="data111"></charts-bar>
                                    </el-card>
                                </el-col>
                            </el-row>
                        </el-col>
                        <el-col :span="7" :offset="1">
                            <el-row>
                                <el-col :span="24">
                                    <el-card>
                                        <div slot="header" class="clearfix">
                                            <span>消费习惯</span>
                                        </div>
                                        <doughnut-chart :height="height" :data="data11" :color="color"></doughnut-chart>
                                    </el-card>
                                </el-col>
                                <el-col :span="24" style="margin-top: 10px;">
                                    <el-card>
                                        <div slot="header" class="clearfix">
                                            <span>图书借阅</span>
                                        </div>
                                        <charts-bar :height="height" :data="data222"></charts-bar>
                                    </el-card>
                                </el-col>
                            </el-row>
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
import { chartsBar,doughnutChart,pieChart,customizedPie,simpleEncode,basicChart,lineBar } from "@/components";
export default {
  components: {
      chartsBar,
      doughnutChart,
      pieChart,
      customizedPie,
      simpleEncode,
      basicChart,
      lineBar
  },
  data(){
      return {
        avatar: '学生画像',
        color8: ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80'],
        color: ['#8a8feb', '#7cb5ec', '#434348', '#90ed7d', '#f7a35c'],
        data: [
            {name: '衬衫', value: 125},
            {name: '羊毛衫', value: 86},
            {name: '雪纺衫', value: 256},
            {name: '裤子', value: 345},
            {name: '高跟鞋', value: 45},
        ],
        data11: [
            {value:20, name:'duo'},
            {value:2000, name:'西区小卖部'},
            {value:1000, name:'东区小卖部'},
            {value:310, name:'东区食堂'},
            {value:250, name:'西区食堂'}
        ],
        data111: [
            {name: '多媒体教学', value: 25},
            {name: '教育心理学', value: 75},
            {name: '普通话', value: 110},
            {name: '学前教育学', value: 120},
            {name: '中国教育史', value: 140},
            {name: '教育社会学', value: 175}
        ],
        data222: [
            {name: '文艺', value: 4},
            {name: '旅游', value: 2},
            {name: '科技', value: 1},
            {name: '生活', value: 1},
            {name: '小说', value: 4}
        ],
        data12: [
            { name: '读书', max: 6500},
            { name: '成绩', max: 16000},
            { name: '消费', max: 30000},
            { name: '生活', max: 38000},
            { name: '纪律', max: 52000},
            { name: '上网', max: 25000}
        ],
        // data2: [
        //     {value:235, name:'视频广告'},
        //     {value:274, name:'联盟广告'},
        //     {value:310, name:'邮件营销'},
        //     {value:335, name:'直接访问'},
        //     {value:400, name:'搜索引擎'}
        // ],
        // data3: [
        //     {value:235, name:'视频广告'},
        //     {value:274, name:'联盟广告'},
        //     {value:310, name:'邮件营销'},
        //     {value:335, name:'直接访问'},
        //     {value:400, name:'搜索引擎'}
        // ],
        // data4: [
        //     ['score', 'amount', 'product'],
        //     [89.3, 58212, 'Matcha Latte'],
        //     [57.1, 78254, 'Milk Tea'],
        //     [74.4, 41032, 'Cheese Cocoa'],
        //     [50.1, 12755, 'Cheese Brownie'],
        //     [89.7, 20145, 'Matcha Cocoa'],
        //     [68.1, 79146, 'Tea'],
        //     [19.6, 91852, 'Orange Juice'],
        //     [10.6, 101852, 'Lemon Juice'],
        //     [32.7, 20112, 'Walnut Brownie']
        // ],
        height:'300px',
      }
  }
};
</script>
<style lang="less" scoped>
img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-left: 38%;
}
p {
    font-size: 13px;
}
.content {
    margin: 3px 0;
}
</style>