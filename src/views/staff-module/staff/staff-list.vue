<template>
    <div>
        <div class="t-operate-top">
            <!-- 查询条件 -->
            <el-form class="t-operate-filter" :inline="true" :model="conditionForm" size="small">
                <el-form-item>
                <el-input class="input-append" v-model="conditionForm.keyword" placeholder="请输入工号、姓名、身份证号">
                    <el-button slot="append">查询</el-button>
                </el-input>
                </el-form-item>
            </el-form>
        </div>
        <!-- 列表 -->
        <el-row :gutter="10">
            <el-col :span="8">
                <el-card class="t-box-card" :body-style="{height: '768px',overflowY: 'auto'}">
                    <div slot="header" class="t-box-card-header">
                        <span>组织机构</span>
                    </div>
                    <el-form class="t-operate-filter" label-width="48px" size="mini">
                        <el-form-item label="维度">
                            <el-select v-model="selectedDimension" placeholder="请选择">
                                <el-option v-for="item in dimensionList" :label="item.label" :value="item.value" :key="item.id"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                    <OrganizationTree @selectNode="haddleOrganizationNode"></OrganizationTree>
                </el-card>
            </el-col>
            <el-col :span="16">
                <el-card class="t-box-card">
                    <div slot="header" class="t-box-card-header">
                        <!-- 操作按钮 -->
                        <div class="t-operate-buttons">
                        <!-- <el-button type="primary" size="mini">导入</el-button> -->
                        <el-button type="primary" size="mini" @click="gotoAdd()">新增</el-button>
                        </div>
                    </div>
                    <!-- 表格 -->
                    <el-table class="t-table-list" ref="table" border stripe size="small" tooltip-effect="dark"
                        :data="tableData" @selection-change="handleSelectionChange">
                        <el-table-column type="selection" width="40"></el-table-column>
                        <el-table-column type="index" label="序号" width="50" align="center"></el-table-column>
                        <el-table-column prop="employeeId" label="工号" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="name" label="姓名" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="sexCode" label="性别" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="identityCardNumber" label="身份证号" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="currentStatusCode" label="在职状态" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column fixed="right" label="操作" width="100" align="center">
                        <template slot-scope="scope">
                            <el-button type="text" size="small" @click="gotoEdit(scope.row)">编辑</el-button>
                            <el-button type="text" size="small" @click="del(scope.row)">删除</el-button>
                        </template>
                        </el-table-column>
                    </el-table>

                    <div class="t-operate-footer">
                        <!-- 批量操作 -->
                        <div class="t-batch-operate">
                        <el-checkbox v-model="isSelectAll" class="t-select-all" @change="selectAll()">全选</el-checkbox>
                        <el-button type="primary" size="mini" :disabled="!this.multipleSelection.length" @click="delMulti">删除</el-button>
                        </div>

                        <!-- 分页组件 -->
                        <pagination :total="total" @sizeChange="handleSize" @currentChange="handleCurrent"></pagination>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import { getSchoolFacultyBasic, deleteSchoolFaculty } from "@/server/staff-module"
import { OrganizationTree,pagination } from "@/components";
import { pageSize } from "@/config.js";
export default {
    data(){
        return{
            // Sorting: '', 
            conditionForm: {},
            selectList: [],
            selectedDimension: '',
            selectNode: {},
            dimensionList: [{
                label: '行政维度',
                value: '1',
                id: 1
            }],
            pageSize,
            currentPage: 1,
            total: 0,
            tableData: [],
            isSelectAll: false,
            multipleSelection: [],
        }
    },
    components: {
        OrganizationTree,
        pagination
    },
    activated () {
        this.initSchoolFaculty();
    },
    created () {
        this.initSchoolFaculty();
    },
    methods: {
        /**
         * 获取表单数据
         */
        initSchoolFaculty (SkipCount = 0, pageSize = this.pageSize) {
           let data = {SkipCount: SkipCount, MaxResultCount: pageSize};
            getSchoolFacultyBasic(data).then((dataList) => {
                this.tableData = dataList.items;
                this.total = dataList.totalCount;
            })
        },
        /**
         * 选择的组织结构
         */
        haddleOrganizationNode(node){
            // console.log(node);
            this.selectNode = node;
        },
        /**
        * 接收改变后每页多少条
        */
        handleSize (SkipCount, pageSize) {
        this.initSchoolFaculty(SkipCount, pageSize);
        },
        /**
         * 获取当前页数
         */
        handleCurrent (SkipCount, pageSize) {
        this.initSchoolFaculty(SkipCount, pageSize);
        },
        /**
         * 删除
         */
        del (row) {
            this.$confirm(`此操作将删除【${row.name}】数据， 是否继续？`, '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    deleteSchoolFaculty(row.id).then((result) => {
                        this.$message.success('删除成功');
                        this.initSchoolFaculty();
                    })
                }).catch(() => {});
        },
        /**
         * 删除多个
         */
        delMulti(){
            console.log(this.multipleSelection);
        },
        /**
         * 全选
         */
        selectAll(){
            this.$refs.table.toggleAllSelection();
        },
        handleSelectionChange(val){
            this.multipleSelection = val;

            // 判断是否是全选
            this.isSelectAll = this.tableData.length === this.multipleSelection.length;
        },
        gotoAdd(){
            this.$router.push({name: "staff-add"})
        },
        gotoEdit(row){
            this.$router.push({name: "staff-edit", params: {id: row.id, row: row}})
        }
    }
}
</script>

