<template>
  <div>
    <div class="t-operate-top">
      <!-- 查询条件 -->
      <el-form class="t-operate-filter" :inline="true" :model="conditionForm" size="small">
        <el-form-item>
          <el-input class="input-append" v-model="conditionForm.keyword" placeholder="请输入学号姓名或身份证号">
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
        <!-- 表格 -->
        <el-table class="t-table-list" ref="table" border stripe size="small" tooltip-effect="dark"
            :data="tableData" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="40"></el-table-column>
            <el-table-column type="index" label="序号" width="50" align="center"></el-table-column>
            <el-table-column prop="studentNumber" label="学号" :show-overflow-tooltip="true" align="center"></el-table-column>
            <el-table-column prop="studentName" label="姓名" :show-overflow-tooltip="true" align="center"></el-table-column>
            <el-table-column prop="genderCode" label="性别" :show-overflow-tooltip="true" align="center"></el-table-column>
            <el-table-column prop="idNumber" label="身份证号" :show-overflow-tooltip="true" align="center"></el-table-column>
            <el-table-column prop="gradeCode" label="班级年级" :show-overflow-tooltip="true" align="center"></el-table-column>
            <el-table-column prop="classCode" label="班级名称" :show-overflow-tooltip="true" align="center"></el-table-column>
            <el-table-column prop="lengthOfSchooling" label="学制" :show-overflow-tooltip="true" align="center"></el-table-column>
            <!-- <el-table-column prop="name8" label="学籍状态" :show-overflow-tooltip="true" align="center"></el-table-column> -->
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
import { getStudent, deleteStudent } from "@/server/student-module";
import { pageSize } from "@/config.js";
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
  components: {
    pagination
  },
  activated () {
    this.initDataList();
  },
  // created () {
  //   this.initDataList();
  // },
  methods: {
    initDataList (SkipCount = 0, pageSize = this.pageSize) {
      let data = {SkipCount: SkipCount, MaxResultCount: pageSize};
      this.tableData = [],
      getStudent(data).then((result) => {
        let data = result.items;
        data.forEach((element) => {
          let gradeCode, classCode, lengthOfSchooling;
          element.schoolRoll ? gradeCode = element.schoolRoll.gradeCode : '';
          element.schoolRoll ? classCode = element.schoolRoll.classCode : '';
          element.schoolRoll ? lengthOfSchooling = element.schoolRoll.lengthOfSchooling : '';

          this.tableData.push({
            id: element.id,
            studentNumber: element.studentNumber,
            studentName: element.studentName,
            genderCode: element.genderCode,
            idNumber: element.idNumber,
            gradeCode: gradeCode,
            classCode: classCode,
            lengthOfSchooling: lengthOfSchooling
          })
        })
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
      this.$confirm(`此操作将删除【${row.studentName}】数据， 是否继续？`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteStudent(row.id).then((result) => {
             this.initDataList();
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
        this.$router.push({name: "student-add"})
    },
    gotoEdit(row){
        this.$router.push({name: "student-edit", params: {id: row.id}})
    }
  }
}
</script>

