<template>
  <div>
    <div class="t-operate-top">
      <!-- 查询条件 -->
      <el-form class="t-operate-filter" :inline="true" :model="conditionForm" size="small">
        <el-form-item>
          <el-input class="input-append" v-model="conditionForm.keyword" placeholder="请输入年级名称">
            <el-button slot="append">查询</el-button>
          </el-input>
        </el-form-item>
      </el-form>
    </div>

    <!-- 列表 -->
    <el-card class="t-box-card">
      <div slot="header" class="t-box-card-header">
        <span>专业列表</span>
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
        <el-table-column prop="professionalCode" label="专业编码" :show-overflow-tooltip="true" align="center"></el-table-column>
        <el-table-column prop="professionalName" label="专业名称" :show-overflow-tooltip="true" align="center"></el-table-column>
        <!-- <el-table-column prop="name3" label="办学层次" :show-overflow-tooltip="true" align="center"></el-table-column> -->
        <el-table-column prop="professionalCode" label="专业代码" :show-overflow-tooltip="true" align="center"></el-table-column>
        <!-- <el-table-column prop="name5" label="校区" :show-overflow-tooltip="true" align="center"></el-table-column> -->
        <el-table-column prop="establishmentNumber" label="开设机构" :show-overflow-tooltip="true" align="center"></el-table-column>
        <!-- <el-table-column prop="name7" label="状态" :show-overflow-tooltip="true" align="center"></el-table-column> -->
        <el-table-column fixed="right" label="操作" width="100" align="center">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="gotoEdit(scope.row)">编辑</el-button>
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

  </div>
</template>
<script>
import { getProfessionalInfo, deleteProfessionalInfo } from '@/server/administration-module';
import { pageSize } from "@/config.js";
import { pagination } from "@/components";
export default {
  data () {
    return {
      // Sorting: '', 
      conditionForm: {},
      pageSize,
      currentPage: 1,
      total: 0,
      tableData: [
          {id: 1,name1: '01001',name2: '电子商务',name3: '大专',name4: '电子商务(121100)',name5: '四川理工黄岭校区',name6: '计算机与科学学院',name7: '启用'},
          {id: 2,name1: '01002',name2: '电子商务',name3: '大专',name4: '电子商务(121100)',name5: '四川理工黄岭校区',name6: '计算机与科学学院',name7: '启用'},
      ],
      isSelectAll: false,
      multipleSelection: [],
    }
  },
  components: {
    pagination
  },
  activated () {
    this.initProfessionalInfo();
  },
  // created () {
  //   this.initProfessionalInfo();
  // },
  methods: {
    /**
     * 分页查询专业数据
     */
    initProfessionalInfo (SkipCount = 0, pageSize = this.pageSize) {
      let data = {SkipCount: SkipCount, MaxResultCount: pageSize};
      getProfessionalInfo(data).then((dataList) => {
        this.tableData = dataList.items;
        this.total = dataList.totalCount;
      })
    },
    /**
    * 接收改变后每页多少条
    */
    handleSize (SkipCount, pageSize) {
      this.initProfessionalInfo(SkipCount, pageSize);
    },
    /**
     * 接收当前页数
     */
    handleCurrent (SkipCount, pageSize) {
      this.initProfessionalInfo(SkipCount, pageSize);
    },
    /**
     * 删除
     */
    del (row) {
      this.$confirm(`此操作将删除【${row.professionalName}】数据， 是否继续？`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteProfessionalInfo(row.id).then((data) => {
            console.log(data);
            this.$message.success('删除成功');
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
        this.$router.push({name: "profession-add"})
    },
    gotoEdit(row){
        this.$router.push({name: "profession-edit", params: {row: row}})
    }
  }
}
</script>
