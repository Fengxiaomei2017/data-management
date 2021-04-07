<template>
    <div>
        <el-row :gutter="30">
            <el-col :span="12">
                <el-card class="box-card" :body-style="{ padding: '0px' }">
                    <div class="big-title">专业招生情况</div>
                    <stacked-colum height="800px" :xAxisData="xAxisData" :girlData="girlData" :boyData="boyData" :todayData="todayData"></stacked-colum>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card class="box-card" :body-style="{ padding: '0px' }">
                    <div class="big-title">招生报道情况</div>
                    <el-row>
                        <el-col :span="7">
                            <gauge-car height="300px" :dataValue="dataValue1" name="已报道人数"></gauge-car>
                        </el-col>
                        <el-col :span="10">
                            <gauge-car height="300px" :dataValue="dataValue2" name="招生报到率" :total="true"></gauge-car>
                        </el-col>
                        <el-col :span="7">
                            <gauge-car height="300px" :dataValue="dataValue3" name="未报道人数"></gauge-car>
                        </el-col>
                    </el-row>
                </el-card>
                <el-card class="box-card" :body-style="{ padding: '0px' }">
                    <div class="big-title">各学年招生情况</div>
                    <areaChart height="442px" :yearData="yearData" :seriesData="seriesData"></areaChart>
                </el-card>
            </el-col>
        </el-row>
    </div>
    
</template>
<script>
import { stackedColum,gaugeCar,areaChart } from "@/components";
import { getProfessionalEnrollmentSurvey, getAcademicYearEnrollmentSurveys, getEnrollmentReportSurvey } from "@/server/dataAnalysis-module.js"
export default {
    components: {
        stackedColum,
        gaugeCar,
        areaChart
    },
    data () {
        return {
            xAxisData: [],
            girlData: [],
            boyData: [],
            todayData: [],
            dataValue1: 0,
            dataValue2: 0,
            dataValue3: 0,
            yearData: [],
            seriesData: [],
            
        }
    },
    created () {
        this.initData();
    },
    methods: {
        initData () {
            getProfessionalEnrollmentSurvey().then((result) => {
                let majorEnroll = result;
                majorEnroll.forEach((element) => {
                    this.xAxisData.push(element.name);
                    this.girlData.push(element.girl);
                    this.boyData.push(element.boy);
                    this.todayData.push(element.toatl);
                })
            });
            getEnrollmentReportSurvey().then((result) => {
                this.dataValue1 = result.haveBeenReported;
                // this.dataValue2 = result.toatl;
                this.dataValue2 = result.haveBeenReported / result.toatl * 100;
                this.dataValue3 = result.notReported;
                console.log(result);
            });
            getAcademicYearEnrollmentSurveys().then((result) => {
                result.forEach((element) => {
                    this.yearData.push(element.academicYear);
                    this.seriesData.push(element.total);
                })
            })
        }
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
</style>