<template>
  <div>
    <!-- 列表 -->
    <el-card class="t-box-card">
      <div slot="header" class="t-box-card-header">
        <span>校区列表</span>
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
        <el-table-column prop="name" label="校区名称" :show-overflow-tooltip="true" align="center"></el-table-column>
        <el-table-column prop="principal" label="校区联系人" :show-overflow-tooltip="true" align="center"></el-table-column>
        <el-table-column prop="contactNumber" label="联系人电话" :show-overflow-tooltip="true" align="center"></el-table-column>
        <el-table-column prop="address" label="地址" :show-overflow-tooltip="true" align="center"></el-table-column>
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
import { pageSize } from "@/config.js";
import { getCampus, deleteCampus } from '@/server/school-module';
import { pagination } from "@/components";
// import { getCampusList } from "@/server/school-module.js";
export default {
  data () {
    return {
      pageSize,
      total: 0,
      tableData: [],
      isSelectAll: false,
      multipleSelection: [],
    }
  },
  components: {
    pagination
  },
  activated() {
    this.initDataList();
  },
  methods: {
    initDataList (SkipCount = 0, pageSize = this.pageSize) {
      let data = {SkipCount: SkipCount, MaxResultCount: pageSize};
      getCampus(data).then((result) => {
       this.tableData = result.items;
       this.total = result.totalCount;
      })
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
     * 改变每页多少条
     */
    handleSizeChange (val) {
      this.pageSize = val;
      this.currentPage = 1;
      this.getList();
    },
    /**
     * 当前页数
     */
    handleCurrentChange (val) {
      this.currentPage = val;
      this.getList();
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
          deleteCampus(row.id).then((result) => {
            this.$message.success('删除成功');
            this.initDataList();
          })
        }).catch(() => {
          this.$message.success('删除失败');
        });
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
        this.$router.push({name: "campus-add"})
    },
    gotoEdit(row){
        this.$router.push({name: "campus-edit", params: {id: row.id}})
    }
  }
}
</script>
