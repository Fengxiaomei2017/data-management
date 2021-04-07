<template>
  <el-dialog class="t-dialog" title="添加教学计划" v-if="visible" :append-to-body="true" :visible="visible" :close-on-click-modal="false" width="60%" @close="close">
    <div class="t-operate-top">
      <!-- 查询条件 -->
      <el-form class="t-operate-filter" ref="form" :inline="true" :model="form" size="small">
        <el-form-item>
            <el-select v-model="form.name1" placeholder="请选择课程属性">
                <el-option v-for="item in selectList" :label="item.label" :value="item.value" :key="item.id"></el-option>
            </el-select>
        </el-form-item>
      </el-form>
    </div>

    <el-table class="t-table-list" ref="table" border stripe size="small" tooltip-effect="dark" :data="tableData">
        <el-table-column type="index" label="序号" width="50" align="center"></el-table-column>
        <el-table-column prop="courseName" label="课程名称" :show-overflow-tooltip="true" align="center"></el-table-column>
        <el-table-column prop="credit" label="总学分" :show-overflow-tooltip="true" align="center"></el-table-column>
        <el-table-column prop="courseCode" label="课程号" :resizable="true">
          <template slot-scope="scope">
            <el-input v-model="scope.row.courseCode"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="courseClassificationCode" label="课程分类码" align="center" :resizable="true">
            <!-- <template scope="scope">
                <el-select v-model="form.name2" placeholder="请选择">
                    <el-option v-for="item in selectList" :label="item.label" :value="item.value" :key="item.id"></el-option>
                </el-select>
            </template> -->
            <template slot-scope="scope">
              <el-input v-model="scope.row.courseClassificationCode"></el-input>
            </template>
        </el-table-column>
        <el-table-column prop="coursePropertyCode" label="课程属性码" :resizable="true">
          <template slot-scope="scope">
            <el-input v-model="scope.row.coursePropertyCode"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="semestersToCarryOut" label="执行学期" align="center" :resizable="true">
            <template slot-scope="scope">
                <el-select v-model="scope.row.semestersToCarryOut" placeholder="请选择">
                    <el-option v-for="item in 14" :label="item" :value="item" :key="item"></el-option>
                </el-select>
            </template>
        </el-table-column>
        <el-table-column prop="prerequisiteCourse" label="预修课程" :show-overflow-tooltip="true" align="center">
            <template slot-scope="scope">
                <el-input v-model="scope.row.prerequisiteCourse"></el-input>
            </template>
        </el-table-column>
        <el-table-column prop="isPrimaryCourse" label="是否是核心课程" :show-overflow-tooltip="true" align="center">
            <template slot-scope="scope">
                <el-input v-model="scope.row.isPrimaryCourse"></el-input>
            </template>
        </el-table-column>
    </el-table>
    <span slot="footer" class="dialog-footer">
      <el-button size="small" @click="close">取 消</el-button>
      <el-button type="primary" size="small" @click="save">保 存</el-button>
    </span>
  </el-dialog>
</template>
<script>
import { addTeachingPlanCourse } from '@/server/administration-module';
export default {
  props:['id', 'data', 'visible'],
  data () {
    return {
      form: {},
      rules: {},
      selectList: [],
      isPrimaryCourse: ['是', '否'],
      tableData: []
    }
  },
  watch: {
    visible(newVal){
      if(newVal){
        this.tableData = JSON.parse(JSON.stringify(this.data));
        console.log(this.id);
        console.log(this.tableData);
      }
    }
  },
  methods: {
    close(){
      this.$emit('update:visible', false);
    },
    save(){
       this.$refs.form.validate((valid) => {
        if(!valid) return;
        addTeachingPlanCourse(this.id, this.tableData).then((result) => {
          this.$emit('save', this.tableData);
          this.close();
        }).catch(() => {
          this.$message.error('保存失败');
        })
       });
    }
  }
}
</script>
