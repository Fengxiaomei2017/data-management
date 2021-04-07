<template>
  <div>
    <!-- 列表 -->
    <el-card class="t-box-card">
      <div slot="header" class="t-box-card-header">
        <span>机构维度列表</span>
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
        <el-table-column prop="name1" label="维度名称" :show-overflow-tooltip="true" align="center"></el-table-column>
        <el-table-column prop="name2" label="维度描述" :show-overflow-tooltip="true" align="center"></el-table-column>
        <el-table-column prop="name3" label="机构类型" :show-overflow-tooltip="true" align="center"></el-table-column>
        <el-table-column fixed="right" label="操作" width="150" align="center">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="addEdit(scope.row)">编辑</el-button>
            <el-button type="text" size="small" @click="typeAdd(scope.row)">管理类型</el-button>
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

        <!-- 分页 -->
        <el-pagination class="t-table-pagination" small background @size-change="handleSizeChange" @current-change="handleCurrentChange"
          :current-page="currentPage" :page-sizes="pageSizes" :page-size="pageSize" :total="total"
          layout="total, sizes, prev, pager, next, jumper"
        ></el-pagination>
      </div>
      
    </el-card>

    <add-edit :dataForm="addEditForm" :visible.sync="addEditVisible" @save="addEditSave"></add-edit>
    <type-add :dataForm="typeAddForm" :visible.sync="typeAddVisible" @save="typeAddSave"></type-add>
  </div>
</template>
<script>
import addEdit from "./dimension-add-edit";
import typeAdd from "./dimension-type-add";
import { pageSizes, pageSize } from "@/config.js";
export default {
  data () {
    return {
      pageSizes,
      pageSize,
      currentPage: 1,
      total: 0,
      tableData: [
          {id: 1,name1: '行政维度',name2: '校区和职能部门角色',name3: '校区、职能部门'},
          {id: 2,name1: '教学维度',name2: '教研组和职能部门角色',name3: '教研组、职能部门'},
      ],
      isSelectAll: false,
      multipleSelection: [],
      addEditForm: {},
      addEditVisible: false,
      typeAddForm: {},
      typeAddVisible: false,
    }
  },
  methods: {
    /**
     * 改变每页多少条
     */
    handleSizeChange (val) {
      this.pageSize = val;
    },
    /**
     * 当前页数
     */
    handleCurrentChange (val) {
      this.currentPage = val;
    },
    /**
     * 删除
     */
    del (row) {
      this.$confirm(`此操作将删除【${row.name1}】数据， 是否继续？`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message.success('删除成功');
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
    addEditSave(){
      this.$message.success('保存成功');
    },
    typeAdd(row){
      this.typeAddForm = row;
      this.typeAddVisible = true;
    },
    typeAddSave(){

    }
  },
  components: {
      addEdit,
      typeAdd
  }
}
</script>
