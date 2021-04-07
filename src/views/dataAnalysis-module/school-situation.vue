<template>
    <div>
        <el-row :gutter="22">
            <el-col :span="7">
                <el-card class="box-card card-bottom" :body-style="{ padding: '0px' }">
                    <div class="big-title">{{schoolCount.title}}</div>
                    <card-item :data="schoolCount.detail"></card-item>
                </el-card>
                <el-card class="box-card card-bottom" :body-style="{ padding: '0px' }">
                    <div class="big-title">专业概况</div>
                    <stackedBarChart height="300px" :teacherData="teacherData" :studentData="studentData" :yData="yData"></stackedBarChart>
                    <el-row>
                        <el-col :span="8">
                            <el-card shadow="hover" :body-style="{ padding: '10px' }" style="margin: 10px;">
                                <div>总专业</div>
                                <strong class="red">{{major.total}}</strong>门
                            </el-card>
                        </el-col>
                        <el-col :span="8">
                            <el-card shadow="hover" :body-style="{ padding: '10px' }" style="margin: 10px;">
                                <div>国示范重点专业</div>
                                <strong class="red">{{major.stateKeySpecialty}}</strong>门
                            </el-card>
                        </el-col>
                        <el-col :span="8">
                            <el-card shadow="hover" :body-style="{ padding: '10px' }" style="margin: 10px;">
                                <div>省示范重点专业</div>
                                <strong class="red">{{major.provinceKeySpecialty}}</strong>门
                            </el-card>
                        </el-col>
                    </el-row>
                </el-card>
                <el-card class="box-card card-bottom" :body-style="{ padding: '0px' }">
                    <div class="big-title">{{classCount.title}}</div>
                    <card-item :data="classCount.detail"></card-item>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card class="box-card card-bottom" :body-style="{ padding: '0px' }" style="margin-bottom: 10px;">
                    <div class="big-title">学生生源地分布</div>
                    <map-echart height="400px" :geoCoordMap="geoCoordMap" :data="data"></map-echart>
                </el-card>
                <el-row :gutter="30">
                    <el-col :span="12">
                       <el-card class="box-card card-bottom" :body-style="{ padding: '0px' }">
                           <div class="big-title">教师概况</div>
                            <el-row>
                                <el-col :span="4">
                                    <el-menu class="el-menu-vertical-demo" default-active="5" @select="handleSelect">
                                        <el-menu-item v-for="(item,index) in teacherCountData" :key="item.year" :index="index + 1 + ''">
                                            <span slot="title">{{item.year}}年</span>
                                        </el-menu-item>
                                    </el-menu>
                                </el-col>
                                <el-col :span="20">
                                    <!-- <div>{{teacherCountData[teacherCountTitle].}}</div> -->
                                    <excell-home-chart height="300px" :teacherCount="teacherCount" :data="teacherCountData[teacherCountIndex]"></excell-home-chart>
                                </el-col>
                            </el-row>
                        </el-card>
                    </el-col>
                    <el-col :span="12">
                        <el-card class="box-card card-bottom" :body-style="{ padding: '0px' }" style="height: 350px;">
                            <div class="big-title">课程概况</div>
                            <el-row :gutter="30">
                                <el-col :span="12">   
                                     <el-card shadow="hover" style="margin: 10px;">
                                        <div>课程总数</div>
                                        <strong class="red">{{courseCount.total}}</strong>门
                                    </el-card>
                                    <!-- <el-card shadow="hover" style="margin: 10px;">
                                        <div>{{item.text}}</div>
                                        <strong class="red">{{item.num}}</strong>门
                                    </el-card> -->   
                                </el-col>
                                <el-col :span="12">
                                     <el-card shadow="hover" style="margin: 10px;">
                                        <div>国家级精品课程</div>
                                        <strong class="red">{{courseCount.stateExcellentCourse}}</strong>门
                                    </el-card>
                                </el-col>
                                <el-col :span="12">
                                    <el-card shadow="hover" style="margin: 10px;">
                                        <div>省级精品课程</div>
                                        <strong class="red">{{courseCount.provinceExcellentCourse}}</strong>门
                                    </el-card>
                                </el-col>
                                <el-col :span="12">
                                    <el-card shadow="hover" style="margin: 10px;">
                                        <div>校级精品课程</div>
                                        <strong class="red">{{courseCount.schoolExcellentCourse}}</strong>门
                                    </el-card>
                                </el-col>
                            </el-row>
                        </el-card>
                    </el-col>
                </el-row>
                <div class="big-title">预警概况</div>
                <el-table
                    :data="tableData"
                    style="width: 100%">
                    <el-table-column
                        prop="date"
                        label="事件"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="相关人"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="时间">
                    </el-table-column>
                    </el-table>
            </el-col>
            <el-col :span="5">
              <el-card class="box-card" :body-style="{ padding: '0px' }">
                <div class="big-title">学校总体情况</div>
                <div class="text item">
                    <ul>
                    <li>
                        <p>学校总人数 {{schoolTotal.total}}</p>
                        <div><strong class="strong">{{schoolTotal.total}}</strong>人</div>
                    </li>
                    <li>
                        <p>人均校园用地面积</p>
                        <span class="left"><strong class="strong">{{schoolTotal.perStudentCampusArea}}</strong>平方米</span> <span>总面积：<span class="green">{{schoolTotal.campusAreaTotal}}</span>平方米</span>
                    </li>
                    <li>
                        <p>人生均校舍建筑面积</p>
                        <span class="left"><strong class="strong">{{schoolTotal.perStudentCoveredArea}}</strong>平方米</span> <span>总面积：<span class="green">{{schoolTotal.coveredAreaTotal}}</span>平方米</span>
                    </li>
                    <li>
                        <p>人生均体育用地面积</p>
                        <span class="left"><strong class="strong">{{schoolTotal.perCapitalSportsLandArea}}</strong>平方米</span> <span>总面积：<span class="green">{{schoolTotal.sportsLandAreaTotal}}</span>平方米</span>
                    </li>
                    <li>
                        <p>寄宿学生校舍使用面积</p>
                        <span class="left"><strong class="strong">{{schoolTotal.perCapitalDormitoryArea}}</strong>平方米</span> <span>总面积：<span class="green">{{schoolTotal.dormitoryAreaTotal}}</span>平方米</span>
                    </li>
                    <li>
                        <p>计算机配置</p>
                        <span class="left"><strong class="strong">{{schoolTotal.computer}}</strong>平方米</span> <span>总面积：<span class="green">{{schoolTotal.computerTotal}}</span>平方米</span>
                    </li>
                    <li>
                        <p>图书配置</p>
                        <span class="left"><strong class="strong">{{schoolTotal.book}}</strong>平方米</span> <span>总面积：<span class="green">{{schoolTotal.bookTotal}}</span>平方米</span>
                    </li>
                    <li>
                        <p>从未使用资产</p>
                        <span><span style="color: #99cfb8;">{{schoolTotal.unused}}&nbsp;</span>件</span>
                    </li>
                    </ul>
                </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import { mapEchart, stackedBarChart, simpleEncode, excellHomeChart } from "../../components";
import { getClassroomOverview, getCourseOverview, getMajorOverview, getSchoolOverview, getStudentBirthPlaceDistribution, getTeacherOverview } from "@/server/dataAnalysis-module.js"
import cardItem from "./card-item.vue"
export default {
    data () {
        return {
            teacherCountIndex: 4,
            geoCoordMap: {
                '上海': [121.4648, 31.2891],
                '成都': [103.9526, 30.7617],
                '武汉': [114.3896, 30.6628],
            },
            teacherData: {},
            studentData: {},
            schoolTotal: {},
            major: {},
            // yData: ['学前教育', '酒店服务与管理', '信息技术', '计算机应用', '计算机科学'],
            yData: [],
            data: [
                {
                    location: '上海',
                    data: [
                        [{ name: '上海' }, { name: '上海', value: 200 }],
                        [{ name: '上海' }, { name: '成都', value: 95 }],
                        [{ name: '上海' }, { name: '武汉', value: 30 }],
                    ]
                }
            ],
            schoolCount: {
                title: '学校',
                detail: []
            },
            classCount: {
                title: '教室情况',
                detail: []
            },
            education: [
                ['score', 'amount', 'product'],
                [0, 79146, '其它'],
                [80, '专科以下'],
                [10, 12755, '专科'],
                [6, 41032, '博士研究生'],
                [10, 10, '硕士研究生'],
                [80, 80, '本科'],
            ],
            teacherCount: ['教职工总数','专任教师','高级教师','中级教师','校外兼职'],
            teacherCountData: [
                {
                    year: '2015', 
                    teacherCountTitle: '2015年度教师分布',
                    dataStart: [0, 1700, 1400, 1200, 300],
                    dataEnd: [789, 380, 120, 200, 89]
                },{
                    year: '2016', 
                    teacherCountTitle: '2016年度教师分布',
                    dataStart: [0, 1700, 1400, 1200, 300],
                    dataEnd: [689, 380,  20, 200, 89]
                },{
                    year: '2017', 
                    teacherCountTitle: '2017年度教师分布', 
                    dataStart: [0, 1700, 1400, 1200, 300],
                    dataEnd: [789, 480, 120, 100, 89]
                },{
                    year: '2018', 
                    teacherCountTitle: '2018年度教师分布', 
                    dataStart: [0, 1700, 1400, 1200, 300],
                    dataEnd: [889, 480, 120, 200, 89]
                },{
                    year: '2019', 
                    teacherCountTitle: '2019年度教师分布',
                    dataStart: [0, 1700, 1400, 1200, 300],
                    dataEnd: [889, 480, 120, 200, 89]
                },
            ],
            courseCount: {},
            tableData: [{
                date: '张琴同学疑似晚归，提醒相关老师关注',
                name: '张琴',
                address: '2019/05/10'
            }, {
                date: '张琴同学疑似晚归，提醒相关老师关注',
                name: '张琴',
                address: '2019/05/10'
            }, {
               date: '张琴同学疑似晚归，提醒相关老师关注',
                name: '张琴',
                address: '2019/05/10'
            }]
        }
    },
    created () {
        this.initData();
    },
    methods: {
        initData () {
            getClassroomOverview().then((result) => {
                this.classCount.detail = result;
            });
            getStudentBirthPlaceDistribution().then((result) => {
                // console.log(result);
            })
            getSchoolOverview().then((result) => {
                this.schoolTotal = result;
                this.schoolCount.detail = [
                    {typeName: '教职工总数', total: result.facultyTotal},
                    {typeName: '经费收入', total: result.earning}, 
                    {typeName: '经费支出', total: result.expenditure}, 
                    {typeName: '校企合作', total: result.cooperation}
                ];
                // console.log(result);
            });
            getMajorOverview().then((result) => {
                let data = result.majorDetails;
                this.major = result;
                let teacherNum = [];
                let studentNum = [];
                data.forEach((element) => {
                    this.yData.push(element.name);
                    teacherNum.push(element.numberOfTeacher);
                    studentNum.push(element.numberOfStudent);
                })
                if (teacherNum.length > 0) {
                    this.teacherData = {
                        "教师": teacherNum
                    }
                }

                if (studentNum.length > 0) {
                    this.studentData = {
                        "学生": studentNum
                    }
                }
            });
            getCourseOverview().then((result) => {
                this.courseCount = result;
                // console.log(result);
            })
        },
        handleSelect(index) {
            this.teacherCountIndex = index - 1;
            // console.log(this.teacherCountIndex);
        },
    },
    components: {
        mapEchart,
        stackedBarChart,
        simpleEncode,
        cardItem,
        excellHomeChart
    }
}
</script>
<style lang="less" scoped>
.big-title {
    width: 99%;
    height: 50px;
    padding-left: 10px;
    line-height: 50px;
    font-size: 16px;
    text-align: center;
    border: 2px solid rgb(225, 234, 248);
    background-color: rgb(245,247,250);
}
.card-bottom {
    margin-bottom: 8px;
    padding-bottom: 8px;
}
.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}
ul {
    list-style: none;
}
.green {
    color: rgb(165,215,224);
}
.class-span {
    width: 100px;
    display: inline-block;
}
.strong {
    display: inline-block;
    width: 60px;
    font-size: 20px;
    color: #3399ff;
    margin: 0 10px 2px 5px;
    font-weight: normal;
  }
</style>
