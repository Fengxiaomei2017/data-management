<template>
  <div>
    <!-- 列表 -->
    <el-card class="t-box-card">
      <div slot="header" class="t-box-card-header">
        <span>寝室列表</span>
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
        <el-table-column prop="buildingNumber" label="寝室编码" :show-overflow-tooltip="true" align="center"></el-table-column>
        <el-table-column prop="roomNumber" label="房间编号" :show-overflow-tooltip="true" align="center"></el-table-column>
        <el-table-column prop="sex" label="入住性别" :show-overflow-tooltip="true" align="center"></el-table-column>
        <el-table-column prop="available" label="是否可用" :show-overflow-tooltip="true" align="center"></el-table-column>
        <el-table-column prop="networkPort" label="网络端口" :show-overflow-tooltip="true" align="center"></el-table-column>
        <el-table-column prop="television" label="安装电视机" :show-overflow-tooltip="true" align="center"></el-table-column>
        <el-table-column prop="phonePort" label="电话端口" :show-overflow-tooltip="true" align="center"></el-table-column>
        <el-table-column prop="phoneNumber" label="电话号码" :show-overflow-tooltip="true" align="center"></el-table-column>
        <el-table-column prop="waterMeter" label="水表底数" :show-overflow-tooltip="true" align="center"></el-table-column>
        <el-table-column prop="electricityMeter" label="电表底数" :show-overflow-tooltip="true" align="center"></el-table-column>
        <el-table-column prop="remark" label="宿舍备注" :show-overflow-tooltip="true" align="center"></el-table-column>
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
  </div>
</template>
<script>
import { pageSize } from "@/config.js";
import { getStudentDormitory,deleteStudentDormitory } from '@/server/school-module';
import { pagination } from "@/components";
export default {
  data () {
    return {
      // Sorting: '',
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
  created () {
    this.initData();
  },
  activated () {
    this.initData();
  },
  methods: {
    // 获得学生宿舍数据
    initData (SkipCount = 0, pageSize = this.pageSize) {
      let data = {SkipCount: SkipCount, MaxResultCount: pageSize};
      getStudentDormitory(data).then((result) => {
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
     * 获取当前页数
     */
    handleCurrent (SkipCount, pageSize) {
      this.initData(SkipCount, pageSize);
    },
    /**
     * 删除
     */
    del (row) {
      this.$confirm(`此操作将删除【${row.roomNumber}】数据， 是否继续？`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteStudentDormitory(row.id).then((result) => {
            this.$message.success('删除成功');
            this.initData();
          }).catch((error) => {
            this.$message.error(error.error.message);
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
        this.$router.push({name: "dormitory-add"})
    },
    // 编辑
    gotoEdit(row){
        this.$router.push({name: "dormitory-edit", params: {id: row.id, row: row}});
    }
  },
}
</script>
