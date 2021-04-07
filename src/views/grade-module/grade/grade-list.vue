<template>
  <div>
    <div class="t-operate-top">
      <!-- 查询条件 -->
      <el-form class="t-operate-filter" :inline="true" :model="conditionForm" size="small">
        <el-form-item>
          <el-input class="input-append" v-model="conditionForm.keyword" placeholder="请输入年级名称">
            <el-button slot="append" @click="queryList">查询</el-button>
          </el-input>
        </el-form-item>
      </el-form>
    </div>

    <!-- 列表 -->
    <el-card class="t-box-card">
      <div slot="header" class="t-box-card-header">
        <span>年级列表</span>
        <!-- 操作按钮 -->
        <div class="t-operate-buttons">
          <!-- <el-button type="primary" size="mini">导入</el-button> -->
          <el-button type="primary" size="mini" @click="addEdit()">新增</el-button>
        </div>
      </div>

      <!-- 表格 -->
      <el-table class="t-table-list" ref="table" border stripe size="small" tooltip-effect="dark"
         :data="tableData" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="40"></el-table-column>
        <el-table-column type="index" label="序号" width="50" align="center"></el-table-column>
        <el-table-column prop="gradeCode" label="年份代码" :show-overflow-tooltip="true" align="center"></el-table-column>
        <el-table-column prop="gradeName" label="年级名称" :show-overflow-tooltip="true" align="center"></el-table-column>
        <el-table-column prop="belongYear" label="所属年份" :show-overflow-tooltip="true" align="center"></el-table-column>
        <el-table-column prop="gradeState" label="年级状态" :show-overflow-tooltip="true" align="center">
          <template slot-scope="scope">
            <span>{{scope.row.gradeState | getLabel(overdueList)}}</span>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100" align="center">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="addEdit(scope.row)">编辑</el-button>
            <el-button type="text" size="small" @click="del(scope.row)">删除</el-button>
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

    <add-edit :dataForm="addEditForm" :visible.sync="addEditVisible" @save="addEditSave"></add-edit>
  </div>
</template>
<script>
import { getSchoolGrade,deleteSchoolGrade } from '@/server/grade-module'
import addEdit from "./grade-add-edit";
import { pageSize } from "@/config.js";
import { time } from "@/utils/method.js";
import { pagination } from "@/components";

export default {
  data () {
    return {
      // Sorting: '',
      overdueList:[{label: '过期', value: '1'},{label: '未过期', value: '0'}],        // 过期  未过期
      pageSize,           // 当前页查询的条数
      conditionForm: {},  // 筛选条件
      total: 0,           // 列表总数
      tableData: [],      // 列表数据
      isSelectAll: false,      // 是否是全选
      multipleSelection: [],   // 多选的数据
      addEditForm: {},         // 添加编辑表单数据
      addEditVisible: false    // 添加编辑模态框
    }
  },
  created () {
    this.initDataList();
  },
  components: {
    addEdit,
    pagination
  },
  methods: {
    initDataList (SkipCount = 0, pageSize = this.pageSize) {
      // 列表参数  查询条件conditionForm  加上页码SkipCount
      let data = {SkipCount: SkipCount, MaxResultCount: pageSize};
      getSchoolGrade(data).then((dataList) => {
        this.tableData = dataList.items;      // 列表数据
        this.total = dataList.totalCount;     // 设置总数
        this.filter(this.tableData);
      }).catch(msg => {
        this.$message.error(msg);
      })
    },

    filter (data) {
      data.forEach(list => {
        if(list.belongYear){
          list.belongYear = time.formatDate(new Date(list.belongYear));
        }
      });
    },
    /**
     * 条件查询列表
     */
    queryList(){
      this.initDataList();
    },
    /**
    * 接收改变后每页多少条
    */
    handleSize (SkipCount, pageSize) {
      this.initDataList(SkipCount, pageSize);
    },
    /**
     * 接收当前页数
     */
    handleCurrent (SkipCount, pageSize) {
      this.initDataList(SkipCount, pageSize);
    },
    /**
     * 删除
     */
    del (row) {
      this.$confirm(`此操作将删除【${row.gradeName}】数据， 是否继续？`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteSchoolGrade(row.id).then((data) => {
            this.$message.success('删除成功');
            this.initDataList();
          }).catch(msg => {
            this.$message.error(msg);
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
    addEdit(row){
      this.addEditForm = row || {};
      this.addEditVisible = true;
    },
    addEditSave(item){
      this.$message.success('保存成功');
      this.initDataList();
    },
  }
}
</script>
