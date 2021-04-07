<template>
  <div>
    <div class="t-operate-top">
      <!-- 查询条件 -->
      <el-form class="t-operate-filter" :inline="true" :model="conditionForm" size="small">
        <el-form-item>
          <el-input class="input-append" v-model="conditionForm.keyword" placeholder="请输入培养方案名称">
            <el-button slot="append">查询</el-button>
          </el-input>
        </el-form-item>
        <el-form-item>
            <el-select v-model="conditionForm.keyword" placeholder="请选择组织机构">
                <el-option v-for="item in selectList" :label="item.label" :value="item.value" :key="item.id"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-select v-model="conditionForm.keyword" placeholder="请选择年级">
                <el-option v-for="item in selectList" :label="item.label" :value="item.value" :key="item.id"></el-option>
            </el-select>
        </el-form-item>
      </el-form>
    </div>

    <!-- 列表 -->
    <el-card class="t-box-card">
      <div slot="header" class="t-box-card-header">
        <span>培养方案</span>
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
        <el-table-column prop="code" label="计划编号" :show-overflow-tooltip="true" align="center"></el-table-column>
        <el-table-column prop="year" label="计划年级" :show-overflow-tooltip="true" align="center"></el-table-column>
        <el-table-column prop="majorName" label="计划专业名称" :show-overflow-tooltip="true" align="center"></el-table-column>
        <el-table-column prop="totalCreditRequirement" label="总学分要求" :show-overflow-tooltip="true" align="center"></el-table-column>
        <el-table-column prop="isAvailable" label="是否可用" :show-overflow-tooltip="true" align="center"></el-table-column>
        <el-table-column prop="setUpTime" label="建立年月" :show-overflow-tooltip="true" align="center"></el-table-column>
        <el-table-column prop="forAcademicYear" label="适用学制" :show-overflow-tooltip="true" align="center"></el-table-column>
        <el-table-column prop="trainingTarget" label="培养目标" :show-overflow-tooltip="true" align="center"></el-table-column>
        <el-table-column prop="attachmentUrl" label="附件" :show-overflow-tooltip="true" align="center"></el-table-column>
        <el-table-column fixed="right" label="操作" width="130" align="center">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="gotoEdit(scope.row)">编辑</el-button>
            <el-button type="text" size="small" @click="del(scope.row)">删除</el-button>
            <!-- <el-button type="text" size="small" @click="stop(scope.row)">停用</el-button> -->
          </template>
        </el-table-column>
      </el-table>

      <div class="t-operate-footer">
        <!-- 批量操作 -->
        <!-- <div class="t-batch-operate">
          <el-checkbox v-model="isSelectAll" class="t-select-all" @change="selectAll()">全选</el-checkbox>
          <el-button type="primary" size="mini" :disabled="!this.multipleSelection.length" @click="delMulti">删除</el-button>
        </div> -->

        <!-- 分页组件 -->
        <pagination :total="total" @sizeChange="handleSize" @currentChange="handleCurrent"></pagination>
      </div>
      
    </el-card>

  </div>
</template>
<script>
import { pageSize } from "@/config.js";
import{ getTeachingPlan,deleteTeachingPlan } from "@/server/administration-module";
import { pagination } from "@/components";
export default {
  data () {
    return {
      pageSize,
      conditionForm: {},
      activeIndex: '1',
      activeValue: '',
      selectList: [],
      currentPage: 1,
      total: 0,
      tableData: [],
      isSelectAll: false,
      multipleSelection: [],
    }
  },
  created () {
    this.initData();
  },
  components: {
    pagination
  },
  methods: {
    initData (SkipCount = 0, pageSize = this.pageSize) {
      let data = {SkipCount: SkipCount, MaxResultCount: pageSize};
      getTeachingPlan(data).then((result) => {
        this.tableData = result.items;
        this.total = result.totalCount; 
      })
    },
    /**
    * 接收改变后每页多少条
    */
    handleSize (SkipCount, pageSize) {
      this.initData(SkipCount, pageSize);
    },
    /**
     * 接收当前页数
     */
    handleCurrent (SkipCount, pageSize) {
      this.initData(SkipCount, pageSize);
    },
    /**
     * 删除
     */
    del (row) {
      this.$confirm(`此操作将删除【${row.code}】数据， 是否继续？`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteTeachingPlan(row.id).then((result) => {
            this.initData();
            this.$message.success('删除成功');
          }).catch((error) => {
               this.$message.error(error.error.message);
          });
        })
    },
    /**
     * 停用
     */
    stop (row) {
      
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
        this.$router.push({name: "training-program-add"})
    },
    gotoEdit(row){
        this.$router.push({name: "training-program-edit", params: {id: row.id, row: row}})
    }
  }
}
</script>
