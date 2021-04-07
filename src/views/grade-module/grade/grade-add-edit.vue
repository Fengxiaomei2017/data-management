<template>
  <el-dialog class="t-dialog" :title="form.id?'编辑年级':'新增年级'" v-if="visible" :visible="visible" :close-on-click-modal="false" width="40%" @close="close">
    <el-form class="t-form-block" ref="form" :model="form" :rules="rules" label-width="80px" size="small">
      <el-form-item label="年级代码" prop="gradeCode">
        <el-input v-model="form.gradeCode"></el-input>
      </el-form-item>
      <el-form-item label="年级名称" prop="gradeName">
        <el-input v-model="form.gradeName"></el-input>
      </el-form-item>
      <el-form-item label="所属年份" prop="belongYear">
        <!-- <el-input type="textarea" v-model="form.belongYear"></el-input> -->
        <el-date-picker
          v-model="form.belongYear"
          type="date"
          placeholder="输入时间"
          value-format="yyyy-MM-dd">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="年级状态" prop="gradeState">
        <el-radio-group v-model="form.gradeState">
            <el-radio v-for="item in overdueList" :label="item.value" :key="item.label">{{item.label}}</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button size="small" @click="close">取 消</el-button>
      <el-button type="primary" size="small" @click="save">保 存</el-button>
    </span>
  </el-dialog>
</template>
<script>
import { addSchoolGrade, updateSchoolGrade } from '@/server/grade-module'
export default {
  props:['dataForm', 'visible'],
  data () {
    return {
      form: {},
      rules: {
        gradeCode: [
          { required: true, message: '请输入年级代码', trigger: 'blur' },
          { max: 4, message: '字符长度必须小于4', trigger: 'blur' }
        ],
        gradeName: [
          { required: true, message: '请输入年级名称', trigger: 'blur' },
          { max: 10, message: '字符长度必须小于10', trigger: 'blur' }
        ],
        belongYear: [
          { required: true, message: '请输入所属年份', trigger: 'blur' }
        ],
        gradeState: [
          { required: true, message: '请输入年级状态', trigger: 'change' }
        ],
      },
      overdueList:[{label: '过期', value: '1'},{label: '未过期', value: '0'}]
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
        if(this.form.id){
          // 编辑
          updateSchoolGrade(this.form).then((data) => {
            this.$emit('save', this.form);
            this.close();
          }).catch(msg => {
            this.$message.error(msg);
          });
        }else{
          // 新增
          addSchoolGrade(this.form).then((data) => {
            this.$emit('save', this.form);
            this.close();
          }).catch(msg => {
            this.$message.error(msg);
          });
        }
       });
    }
  }
}
</script>
