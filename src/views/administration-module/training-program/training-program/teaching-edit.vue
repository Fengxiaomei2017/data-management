<template>
  <el-dialog class="t-dialog" title="编辑教学计划" v-if="visible" :visible="visible" :close-on-click-modal="false" width="40%" @close="close">
    <el-form class="t-form-block" ref="form" :model="form" :rules="rules" label-width="120px" size="small">
       <el-form-item label="课程号" prop="courseCode">
        <el-input :disabled="true" v-model="form.courseCode"></el-input>
      </el-form-item>
      <el-form-item label="课程名称" prop="courseName">
        <el-input :disabled="true" v-model="form.courseName"></el-input>
      </el-form-item>
      <el-form-item label="学期学分" prop="creditRequirement">
        <el-input :disabled="true" v-model="form.creditRequirement"></el-input>
      </el-form-item>
      <el-form-item label="课程属性" prop="coursePropertyCode">
        <el-input v-model="form.coursePropertyCode"></el-input>
      </el-form-item>
      <el-form-item label="开课学期" prop="semestersToCarryOut">
        <el-input v-model="form.semestersToCarryOut"></el-input>
      </el-form-item>
      <el-form-item label="预修课程" prop="prerequisiteCourse">
        <el-input v-model="form.prerequisiteCourse"></el-input>
      </el-form-item>
      <el-form-item label="是否是核心课程" prop="isPrimaryCourse">
        <el-input v-model="form.isPrimaryCourse"></el-input>
      </el-form-item>
      <el-form-item label="课程分类码" prop="courseClassificationCode">
        <el-input v-model="form.courseClassificationCode"></el-input>
      </el-form-item>
      <!-- <el-form-item label="课程名称" prop="name1">
        <span>{{form.name1}}</span>
      </el-form-item>
      <el-form-item label="课程名称" prop="name1">
        <span>{{form.name1}}</span>
      </el-form-item>
      <el-form-item label="授课方式" prop="name2">
        <span>{{form.name2}}</span>
      </el-form-item>
      <el-form-item label="课程属性" prop="name3">
        <el-select v-model="form.name3" placeholder="请选择">
            <el-option v-for="item in selectList" :label="item.label" :value="item.value" :key="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="开课学期" prop="name4">
        <el-select v-model="form.name4" placeholder="请选择">
            <el-option v-for="item in selectList" :label="item.label" :value="item.value" :key="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="理论周学时" prop="name5">
        <el-input v-model="form.name5"></el-input>
      </el-form-item>
      <el-form-item label="实操周学时" prop="name6">
        <el-input v-model="form.name6"></el-input>
      </el-form-item>
      <el-form-item label="学期学分" prop="name7">
        <span>{{form.name7}}</span>
      </el-form-item>
      <el-form-item label="考核方式" prop="name8">
        <span>{{form.name8}}</span>
      </el-form-item> -->
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button size="small" @click="close">取 消</el-button>
      <el-button type="primary" size="small" @click="save">保 存</el-button>
    </span>
  </el-dialog>
</template>
<script>
import{ updateTeachingPlanCourse } from "@/server/administration-module";
export default {
  props:['planId', 'dataForm', 'visible'],
  data () {
    return {
      form: {},
      rules: {},
      selectList: []
    }
  },
  watch: {
    visible(newVal){
      if(newVal){
        this.form = Object.assign({}, this.dataForm);
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
        // 更新教学计划课程信息
        this.form.planId = this.planId;
        updateTeachingPlanCourse(this.form).then((result) => {
          this.$emit('save', this.form);
          this.close();
        }).catch(() => {
          this.$message.error('保存失败');
        })
       });
    }
  }
}
</script>
