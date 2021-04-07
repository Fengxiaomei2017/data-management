<template>
    <div>
        <el-card class="box-card card-bottom" :body-style="{ padding: '0px' }" >
            <div class="big-title">学籍数据挖掘</div>
            <div class="t-operate-top pd10">
                <!-- 查询条件 -->
                <el-form class="t-operate-filter" :inline="true" :model="conditionForm" size="small">
                    <el-form-item label="学年学期">
                        <el-popover placement="bottom-start" width="240">
                            <checkbox-group-all :block="true" :checkboxList="semesterList" @change="changeSemester"></checkbox-group-all>
                            <el-input slot="reference" class="input-append" v-model="conditionForm.keyword1" :readonly="true" placeholder="请点击选择"></el-input>
                        </el-popover>
                    </el-form-item>
                    <el-form-item label="学生状态">
                        <el-popover placement="bottom-start" width="240">
                            <checkbox-group-all :checkboxList="studentList" @change="changeStudent"></checkbox-group-all>
                            <el-input slot="reference" class="input-append" v-model="conditionForm.keyword2" :readonly="true" placeholder="请点击选择"></el-input>
                        </el-popover>
                    </el-form-item>
                    <el-form-item label="统计维度">
                        <el-select v-model="dimensionRadio" placeholder="请选择">
                            <el-option v-for="item in dimensionRadioList" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </el-form-item> 
                    <el-form-item>
                        <el-button @click="queryList">查询</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <el-row>
                <charts-bar height="400px" :data="chartData"></charts-bar>
                <!-- <el-col :span="6"  style="border-right: 1px solid #e1eaf8">
                    <div class="big-title">统计维度</div>
                    <div style="border-top: 1px solid #e1eaf8">
                        <el-radio-group class="pd10" v-model="dimensionRadio">
                            <el-radio v-for="(item, index) in dimensionRadioList" :key="index" :label="item.value">{{item.label}}</el-radio>
                        </el-radio-group>
                        <div class="pd10" style="border-top: 1px solid #e1eaf8">
                            <checkbox-group-all :block="true" :checkboxList="dimensionCheckboxList" @change="changeDimension"></checkbox-group-all>
                        </div>
                    </div>
                </el-col>
                <el-col :span="18">
                    
                </el-col> -->
            </el-row>
        </el-card>
    </div>
</template>
<script>
import { chartsBar } from "@/components";
import checkboxGroupAll from "./checkbox-group-all";
import { getSemester } from "@/server/grade-module";
import { getSchoolRollData } from "@/server/dataAnalysis-module";
export default {
    data () {
        return {
            conditionForm: {
                keyword1: '',
                keyword2: '',
            },
            semesterChecked: [],
            semesterList: [],
            studentChecked: [],
            studentList: [{label: '在读', value: '1'},{label: '停学', value: '2'},{label: '休学', value: '3'}],
            dimensionRadio: '',
            dimensionRadioList: [{label: '专业', value: '1'},{label: '班级', value: '2'}],
            // dimensionCheckboxList: [{label: '18汽修1班', value: '1'},{label: '17学前1班', value: '2'},{label: '计算机应用', value: '3'}],
            dimensionChecked: [],
            chartData: [
                // {name: '18汽修1班', value: 25},
                // {name: '17学前1班', value: 75},
                // {name: '计算机应用', value: 110},
            ]
        }
    },
    created(){
        this.init();
    },
    methods: {
        init(){
            getSemester().then(data => {
                this.semesterList = data.items.map(semester => {
                    return Object.assign({}, semester, {
                        label: semester.schoolYear,
                        value: semester.semesterCode
                    });
                })
            })

            this.queryList();
        },
        // 学年学期
        changeSemester(checkedList){
            this.semesterChecked = checkedList;
            this.conditionForm.keyword1 = checkedList.length ? this.semesterList.find(item => checkedList[0] === item.value).label + '等' : ''
        },
        // 学生状态
        changeStudent(checkedList){
            this.studentChecked = checkedList;
            this.conditionForm.keyword2 = checkedList.length ? this.studentList.find(item => checkedList[0] === item.value).label + '等' : ''
        },
        // 查询
        queryList(){
            let params = {
                semester: this.semesterChecked,
                status: this.studentChecked,
                vdoing: this.dimensionRadio
            }

            getSchoolRollData(params).then(data => {
                this.chartData = data.vdoing.map(semester => {
                    return Object.assign({}, semester, {
                        label: semester.name,
                        value: semester.count
                    });
                })
            })
        },
        // 统计维度
        // changeDimension(checkedList){
        //     this.dimensionChecked = checkedList;
        // }
        
    },
    components: {
        chartsBar,
        checkboxGroupAll
    }
}
</script>
<style lang="less" scoped>
.big-title {
    width: 99%;
    height: 50px;
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
.pd10{
    padding: 10px;
}
</style>