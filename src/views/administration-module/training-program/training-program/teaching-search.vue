<template>
  <el-dialog class="t-dialog" title="新增学分要求" v-if="visible" :append-to-body="true" :visible="visible" :close-on-click-modal="false" width="80%" @close="close">
    <div class="t-operate-top">
      <!-- 查询条件 -->
      <el-form class="t-operate-filter" :inline="true" :model="conditionForm" size="small">
        <el-form-item>
          <el-input class="input-append" v-model="conditionForm.keyword" placeholder="请输入课程名称">
            <el-button slot="append">查询</el-button>
          </el-input>
        </el-form-item>
        <el-form-item>
            <el-select v-model="conditionForm.name1" placeholder="请选择开课机构">
                <el-option v-for="item in selectList" :label="item.label" :value="item.value" :key="item.id"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-select v-model="conditionForm.name2" placeholder="请选择授课方式">
                <el-option v-for="item in selectList" :label="item.label" :value="item.value" :key="item.id"></el-option>
            </el-select>
        </el-form-item>
      </el-form>
    </div>
    <el-table class="t-table-list" ref="table" border stripe size="small" tooltip-effect="dark"
         :data="tableData" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="40"></el-table-column>
        <el-table-column type="index" label="序号" width="50" align="center"></el-table-column>
        <el-table-column prop="courseName" label="课程名称" :show-overflow-tooltip="true" align="center"></el-table-column>
        <el-table-column prop="teachingModeCode" label="授课方式" :show-overflow-tooltip="true" align="center"></el-table-column>
        <el-table-column prop="courseUnits" label="开课机构" :show-overflow-tooltip="true" align="center"></el-table-column>
        <el-table-column prop="theoryClassHours" label="理论周学时" :show-overflow-tooltip="true" align="center"></el-table-column>
        <el-table-column prop="practiceClassHours" label="实操周学时" :show-overflow-tooltip="true" align="center"></el-table-column>
        <el-table-column prop="credit" label="学期学分" :show-overflow-tooltip="true" align="center"></el-table-column>
        <el-table-column prop="examinationForm" label="考核方式" :show-overflow-tooltip="true" align="center"></el-table-column>
    </el-table>
    <!-- 分页组件 -->
    <div class="t-operate-footer"><pagination :total="total" @sizeChange="handleSize" @currentChange="handleCurrent"></pagination></div>
    <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="close">取 消</el-button>
        <el-button type="primary" size="small" @click="add">添加所选课程到教学计划</el-button>
    </span>

    <add-teaching :id="id" :data="multipleSelection" :visible.sync="addTeachingVisible" @save="editTeachingSave"></add-teaching>
  </el-dialog>
</template>
<script>
import addTeaching from './teaching-add'
import { getCourses } from '@/server/administration-module';
import { pageSize } from "@/config.js";
import { pagination } from "@/components";
export default {
  props:['id', 'visible'],
  data () {
    return {
      pageSize,
      total: 0,
      rules: {},
      conditionForm: {},
      selectList: [],
      tableData: [],
      multipleSelection: [],
      addTeachingVisible: false,
    }
  },
  components: {
    pagination,
    addTeaching
  },
  activated () {
    this.initDataList();
  },
  created () {
    this.initDataList();
  },
  methods: {
    initDataList (SkipCount = 0, pageSize = this.pageSize) {
      let data = {SkipCount: SkipCount, MaxResultCount: pageSize};
      getCourses(data).then((result) => {
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
    handleSelectionChange(val){
      this.multipleSelection = val;
    },
    close(){
      this.$emit('update:visible', false);
    },
    add(){
       this.addTeachingVisible = true;
    },
    editTeachingSave(data){
        this.addTeachingVisible = false;
        this.close();
        this.$emit('save', data)
    }
  }
}
</script>
