<template>
    <div style="background-color: #fff;padding: 20px;">
        <el-container>
            <el-aside  width="auto">
                <div class="t-operate-top">
                    <!-- 查询条件 -->
                    <el-form class="t-operate-filter" :inline="true" :model="conditionForm" size="small">
                        <el-form-item>
                        <el-input class="input-append" v-model="conditionForm.keyword" placeholder="请输入关键字搜索">
                            <el-button slot="append">查询</el-button>
                        </el-input>
                        </el-form-item>
                    </el-form>
                </div>
                <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose">
                    <el-menu-item index="1"><span>学校概况类</span></el-menu-item>
                    <el-menu-item index="2"><span>学生管理类</span></el-menu-item>
                    <!-- <el-menu-item index="3"><span>招生管理类</span></el-menu-item>
                    <el-menu-item index="4"><span>教职工管理类</span></el-menu-item>
                    <el-menu-item index="5"><span>教务管理类</span></el-menu-item> -->
                </el-menu>
            </el-aside>
            <el-container>
                <el-header>
                    <el-row :gutter="20">
                        <el-col :span="16"><span>分类名称：学生管理类</span></el-col>
                        <el-col :span="8">
                            <div class="t-operate-buttons">
                                <div class="t-operate-top">
                                    <!-- 查询条件 -->
                                    <el-form class="t-operate-filter" :inline="true" :model="searchApi" size="small">
                                        <el-form-item>
                                        <el-input class="input-append" v-model="searchApi.keyword" placeholder="请输入关键字搜索">
                                            <el-button slot="append">查询</el-button>
                                        </el-input>
                                        </el-form-item>
                                    </el-form>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </el-header>
                <el-main style="padding: 0 20px;">
                    <!-- 表格 -->
                    <el-table class="t-table-list" ref="table" border stripe size="small" tooltip-effect="dark"
                        :data="tableData">
                        <el-table-column type="index" label="序号" width="50" align="center"></el-table-column>
                        <el-table-column
                        label="API名称">
                        <template slot-scope="scope">
                            <el-button @click="handleClick" type="text" size="small">{{ scope.row.name1 }}</el-button>
                        </template>
                        </el-table-column>
                        <el-table-column prop="name2" label="描述" :show-overflow-tooltip="true" align="center"></el-table-column>
                    </el-table>
                </el-main>
            </el-container>
        </el-container>
    
    </div>
</template>
<script>
import { MenuTree } from "../../components";
export default {
    data () {
        return {
            conditionForm: {},
            searchApi: {},
            tableData: [
                {
                    name1: 'GetStuBaseInfo',
                    name2: '获取学生的基本信息，包括学生、姓名、身份证号等基本信息。'
                },
                {
                    name1: 'GetStuBaseInfo',
                    name2: '获取学生的基本信息，包括学生、姓名、身份证号等基本信息。'
                },
            ]
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            // console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            // console.log(key, keyPath);
        },
        handleClick() {
            this.$router.push("/data/detail");
        }
    },
    components: {
        MenuTree
    }
}
</script>
