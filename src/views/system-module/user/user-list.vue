<template>
  <div>
    <div class="t-operate-top">
      <!-- 查询条件 -->
      <el-form class="t-operate-filter" :inline="true" :model="conditionForm" size="small">
        <el-form-item>
          <el-input class="input-append" v-model="conditionForm.keyword" placeholder="请输入关键字">
            <el-button slot="append" @click="queryList">查询</el-button>
          </el-input>
        </el-form-item>
      </el-form>
    </div>

    <!-- 列表 -->
    <el-card class="t-box-card">
      <div slot="header" class="t-box-card-header">
        <span>角色管理</span>
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
          <el-table-column prop="userName" label="用户名" align="center"></el-table-column>
          <el-table-column prop="name" label="真实名称" align="center"></el-table-column>
          <el-table-column prop="email" label="电子邮箱" align="center"></el-table-column>
          <el-table-column prop="phoneNumber" label="电话号码" align="center"></el-table-column>
          <el-table-column fixed="right" label="操作" width="100" align="center">
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="addEdit(scope.row)">编辑</el-button>
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

    <add-edit :dataForm="addEditForm" :visible.sync="addEditVisible" @save="addEditSave"></add-edit>
  </div>
</template>
<script>
import { getUsersList, deleteUser } from '@/server/system-module'
import addEdit from './user-add-edit'
import { pageSize } from '@/config.js'
import { pagination } from '@/components'

export default {
  data () {
    return {
      // Sorting: '',
      pageSize, // 当前页查询的条数
      conditionForm: {}, // 筛选条件
      total: 0, // 列表总数
      tableData: [], // 列表数据
      isSelectAll: false, // 是否是全选
      multipleSelection: [], // 多选的数据
      addEditForm: {}, // 添加编辑表单数据
      addEditVisible: false // 添加编辑模态框
    }
  },
  created () {
    this.initDataList()
  },
  components: {
    addEdit,
    pagination
  },
  methods: {
    initDataList (SkipCount = 0, pageSize = this.pageSize) {
      // 列表参数  查询条件conditionForm  加上页码SkipCount
      let data = {SkipCount: SkipCount, MaxResultCount: pageSize}
      getUsersList(data).then((dataList) => {
        this.tableData = dataList.items // 列表数据
        this.total = dataList.totalCount // 设置总数
      }).catch(msg => {
        this.$message.error(msg)
      })
    },
    /**
     * 条件查询列表
     */
    queryList () {
      this.initDataList()
    },
    /**
    * 接收改变后每页多少条
    */
    handleSize (SkipCount, pageSize) {
      this.initDataList(SkipCount, pageSize)
    },
    /**
     * 接收当前页数
     */
    handleCurrent (SkipCount, pageSize) {
      this.initDataList(SkipCount, pageSize)
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
        deleteUser(row.id).then((data) => {
          this.$message.success('删除成功')
          this.initDataList()
        }).catch(msg => {
          this.$message.error(msg)
        })
      }).catch(() => {})
    },
    /**
     * 删除多个
     */
    delMulti () {
      console.log(this.multipleSelection)
    },
    /**
     * 全选
     */
    selectAll () {
      this.$refs.table.toggleAllSelection()
    },
    handleSelectionChange (val) {
      this.multipleSelection = val

      // 判断是否是全选
      this.isSelectAll = this.tableData.length === this.multipleSelection.length
    },
    addEdit (row) {
      this.addEditForm = row || {}
      this.addEditVisible = true
    },
    addEditSave (item) {
      this.$message.success('保存成功')
      this.initDataList()
    }
  }
}
</script>
