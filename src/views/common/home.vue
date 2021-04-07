<template>
    <div class="wapper">
        <home-top></home-top>
        <el-row class="content" :gutter="10">
            <el-col :span="4">
                <el-card class="box-card" style="text-align: center;height: 360px;line-height: 30px;margin-top: 15px;">
                    <el-avatar :size="100" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                    <div>
                        <span>张力</span>
                        <div class="bottom clearfix">
                            <div>上一次登录时间：<time class="time">2019/09/05</time></div>
                            <span>超级管理员</span>
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="18">
                    <div class="big-title">
                        <span>个人工作台</span>
                        <el-button style="float: right; height: 60px;margin-right: 60px;" type="text">更多...</el-button>
                    </div>
                    <el-card class="box-card">
                        <el-table
                            :data="tableData"
                            :row-class-name="tableRowClassName"
                            height="245"
                            size="small"
                            style="width: 100%">
                            <el-table-column
                                prop="date"
                                label="标题"
                                width="350">
                            </el-table-column>
                            <el-table-column
                                prop="time"
                                label="时间"
                                width="300">
                            </el-table-column>
                            <el-table-column
                                prop="origin"
                                label="来源"
                                width="300">
                            </el-table-column>
                            <el-table-column
                                label="操作"
                                width="200">
                                <template slot-scope="scope">
                                    <el-button @click="handleClick" type="text" size="small">详情</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-card>
            </el-col>
            <el-col :offset="4" :span="10" style="margin-top: 10px;">
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="123">
                </el-pagination>
            </el-col>
        </el-row>
        <div class="big-title">大数据平台</div>
        <div class="content">
            <el-row>
                <el-col :span="4" v-for="o in 2" :key="o" >
                    <el-image :src="src" style="height: 150px;" class="image">
                        <div slot="placeholder" class="image-slot">
                            Loading<span class="dot">...</span>
                        </div>
                    </el-image>
                </el-col>
            </el-row>
        </div>
        <div class="big-title">第三方集成平台</div>
        <div class="content">
            <el-row>
                <el-col :span="4" v-for="o in 5" :key="o">
                    <img style="height: 120px;" :src="src" class="image">
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import { homeTop } from '@/components';
export default {
    data () {
        return {
            src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
            tableData: [{
                    date: 'GetStuBaseInfo接口请求异常',
                    time: '2019-02-20 02:20',
                    origin: '数据开放平台'
                }, {
                    date: 'GetStuBaseInfo接口请求异常',
                    time: '2019-02-20 02:20',
                    origin: '数据开放平台'
                }, {
                    date: 'GetStuBaseInfo接口请求异常',
                    time: '2019-02-20 02:20',
                    origin: '数据开放平台'
                }, {
                    date: 'GetStuBaseInfo接口请求异常',
                    time: '2019-02-20 02:20',
                    origin: '数据开放平台'
            }]
        }
    },
    components: {
        homeTop
    },
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      handleClick() {
        this.$router.push({name: "workbench"});
      }
    }
}
</script>
<style lang="less" scoped>
.wapper {
    // padding: 0 10px;
    width: 92vw;
    margin: 5px auto 50px auto;;
    .top-title {
        padding: 10px;
        border-bottom: 1px solid rgb(211,220,230);
    }
}
.big-title {
    width: 99%;
    height: 60px;
    margin: 15px 0;
    padding-left: 10px;
    line-height: 60px;
    font-size: 16px;
    border-left: 8px solid rgb(69,147,191);
    background-color: rgb(245,247,250);
}
.content {
    // margin: 0 25px;
}
.el-table .warning-row {
    background: oldlace;
}

.el-table .success-row {
    background: #f0f9eb;
}
.time {
    font-size: 13px;
    color: #999;
}
.image {
    width: 90%;
    display: block;
}
</style>
