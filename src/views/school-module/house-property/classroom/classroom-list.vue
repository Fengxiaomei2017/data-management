<template>
  <div>
        <!-- 列表 -->
        <el-card class="t-box-card">
          <div slot="header" class="t-box-card-header">
            <span>教室列表</span>
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
            <el-table-column prop="campusCode" label="校区代码" :show-overflow-tooltip="true" align="center"></el-table-column>
            <el-table-column prop="buildingCode" label="建筑物号" :show-overflow-tooltip="true" align="center"></el-table-column>
            <el-table-column prop="code" label="教室编号" :show-overflow-tooltip="true" align="center"></el-table-column>
            <!-- <el-table-column prop="name2" label="建筑物名称" :show-overflow-tooltip="true" align="center"></el-table-column>
            <el-table-column prop="name3" label="所属校区" :show-overflow-tooltip="true" align="center"></el-table-column> -->
            <el-table-column prop="typeCode" label="教室类型" :show-overflow-tooltip="true" align="center"></el-table-column>
            <el-table-column prop="roomCapacity" label="实际容量" :show-overflow-tooltip="true" align="center"></el-table-column>
            <el-table-column prop="maxClassSchedulingCapacity" label="最大排课容量" :show-overflow-tooltip="true" align="center"></el-table-column>
            <el-table-column prop="isNetworkConnected" label="网络状态" :show-overflow-tooltip="true" align="center"></el-table-column>
            <el-table-column prop="isMultimediaClassroom" label="多媒体状态" :show-overflow-tooltip="true" align="center"></el-table-column>
            <el-table-column prop="isAvailable" label="是否可用" :show-overflow-tooltip="true" align="center"></el-table-column>
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
import { getClassRoomList, deleteClassRoom } from '@/server/school-module';
import { pagination } from "@/components";
export default {
  data () {
    return {
      total: 0,
      // Sorting: '',
      pageSize,
      currentPage: 1,
      tableData: [],
      isSelectAll: false,
      multipleSelection: []
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
    /**
     * 获得教室分页列表
     */
    initData (SkipCount = 0, pageSize = this.pageSize) {
      let data = {SkipCount: SkipCount, MaxResultCount: pageSize};
      getClassRoomList(data).then((result) => {
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
      this.$confirm(`此操作将删除【${row.campusCode}】数据， 是否继续？`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteClassRoom(row.id).then((result) => {
            this.$message.success('删除成功');
            this.initData();
          }).catch(() => {
            this.$message.error('删除失败');
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
    // 新增
    gotoAdd(){
        this.$router.push({name: "classroom-add"})
    },
    gotoEdit(row){
        this.$router.push({name: "classroom-edit", params: {id: row.id, row: row}})
    }
  },
}
</script>
