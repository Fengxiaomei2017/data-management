<template>
  <div>
    <div class="t-operate-top">
      <!-- 查询条件 -->
      <el-form class="t-operate-filter" :inline="true" :model="conditionForm" size="small">
        <el-form-item>
          <el-input class="input-append" v-model="conditionForm.keyword" placeholder="请输入专业方向">
            <el-button slot="append">查询</el-button>
          </el-input>
        </el-form-item>
      </el-form>
    </div>

    <!-- 列表 -->
    <el-card class="t-box-card">
      <div slot="header" class="t-box-card-header">
        <span>专业方向</span>
        <!-- 操作按钮 -->
        <div class="t-operate-buttons">
          <!-- <el-button type="primary" size="mini">导入</el-button> -->
          <el-button type="primary" size="mini" @click="gotoAdd()">新增</el-button>
        </div>
      </div>

      <el-row :gutter="10">
        <el-col :span="4">
          <el-tabs v-model="activeIndex">
            <el-tab-pane label="按分类" name="1">
              <el-select v-model="activeValue" size="small" placeholder="请选择">
                <el-option v-for="item in selectList" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-tab-pane>
            <el-tab-pane label="按机构" name="2">
              <el-select v-model="activeValue" size="small" placeholder="请选择">
                <el-option v-for="item in selectList" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span="20">
          <!-- 表格 -->
          <el-table class="t-table-list" ref="table" border stripe size="small" tooltip-effect="dark"
            :data="tableData" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="40"></el-table-column>
            <el-table-column type="index" label="序号" width="50" align="center"></el-table-column>
            <el-table-column prop="name1" label="方向代码" :show-overflow-tooltip="true" align="center"></el-table-column>
            <el-table-column prop="name2" label="专业方向" :show-overflow-tooltip="true" align="center"></el-table-column>
            <el-table-column prop="name3" label="专业分类" :show-overflow-tooltip="true" align="center"></el-table-column>
            <el-table-column prop="name4" label="适用学制" :show-overflow-tooltip="true" align="center"></el-table-column>
            <el-table-column prop="name5" label="所属机构" :show-overflow-tooltip="true" align="center"></el-table-column>
            <el-table-column fixed="right" label="操作" width="100" align="center">
              <template slot-scope="scope">
                <el-button type="text" size="small" @click="gotoEdit(scope.row)">编辑</el-button>
                <el-button type="text" size="small" @click="del(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>

      

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

  </div>
</template>
<script>
import { pageSizes, pageSize } from "@/config.js";
export default {
  data () {
    return {
      pageSizes,
      pageSize,
      conditionForm: {},
      activeIndex: '1',
      activeValue: '',
      selectList: [],
      currentPage: 1,
      total: 0,
      tableData: [
          {id: 1,name1: '00011',name2: '电子商务物流方向',name3: '电子商务',name4: '3.5',name5: '计算机与科学学院'},
          {id: 2,name1: '00011',name2: '电子商务物流方向',name3: '电子商务',name4: '3.5',name5: '计算机与科学学院'},
      ],
      isSelectAll: false,
      multipleSelection: [],
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
    gotoAdd(){
        this.$router.push({name: "profession-direction-add"})
    },
    gotoEdit(row){
        this.$router.push({name: "profession-direction-edit", params: {id: row.id}})
    }
  }
}
</script>
