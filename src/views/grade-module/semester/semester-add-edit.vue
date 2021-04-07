<template>
  <el-dialog class="t-dialog" :title="form.id?'编辑办学层次':'新增办学层次'" v-if="visible" :visible="visible" :close-on-click-modal="false" width="40%" @close="close">
    <el-form class="t-form-block" ref="form" :model="form" :rules="rules" label-width="120px" size="small">
      <el-form-item label="学年" required>
        <el-row>
          <el-col :span="10">
            <el-form-item>
               <el-date-picker
                v-model="schoolYearStart"
                type="year"
                placeholder="选择开始学年"
                format="yyyy"
                value-format="yyyy">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="2" :push="1">至</el-col>
          <el-col :span="11" :offset="1">
            <el-form-item>
              <el-date-picker
                v-model="schoolYearEnd"
                type="year"
                placeholder="选择结束学年"
                format="yyyy"
                value-format="yyyy">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="学期码" prop="semesterCode">
        <el-select v-model="form.semesterCode" placeholder="选择学期码">
        <el-option
          v-for="item in semesterCode"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      </el-form-item>
      <el-form-item label="学期名称" prop="semesterName">
        <el-input placeholder="例如：2009年秋季学期" v-model="form.semesterName"></el-input>
      </el-form-item>
      <el-form-item label="学期开始时间" prop="semesterStartDate">
        <el-date-picker
          v-model="form.semesterStartDate"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="学期开始时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="学期结束时间" prop="semesterStopDate">
        <el-date-picker
          v-model="form.semesterStopDate"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="学期结束时间">
        </el-date-picker>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button size="small" @click="close">取 消</el-button>
      <el-button type="primary" size="small" @click="save">保 存</el-button>
    </span>
  </el-dialog>
</template>
<script>
import { addSemesterDto, updateSemester } from '@/server/grade-module'
export default {
  props:['dataForm', 'visible'],
  data () {
    return {
      form: {},
      rules: {
        semesterCode: [{required: true, message: '请选择学期码', trigger: 'change' }],
        semesterName: [
          { required: true, message: '请输入学期名称', trigger: 'blur' },
          { max: 10, message: '字符长度必须小于10', trigger: 'blur' }
        ]
      },
      schoolYearStart: '',
      schoolYearEnd: '',
      semesterCode: [{label: '秋季学期', value: '1'},{label: '春季学期', value: '2'}, {label: '夏季学期', value: '3'},{label: '其他', value: '9'}]
    }
  },
  watch: {
    visible(newVal){
      if(newVal){
        this.form = Object.assign({}, this.dataForm);
        this.from ? this.form.semesterStartDate = this.form.semesterStartDate.slice(0, 10) : '';
        this.from ? this.form.semesterStopDate = this.form.semesterStopDate.slice(0, 10) : '';

        if (this.form.schoolYear) {
          this.schoolYearStart = this.form.schoolYear.slice(0,4);
          this.schoolYearEnd = this.form.schoolYear.slice(5);
        }
      }
    },
  },
  methods: {
    close(){
      this.$emit('update:visible', false);
    },
    save(){
       this.$refs.form.validate((valid) => {
        if(!valid) return;
        if (this.schoolYearStart && this.schoolYearEnd) {
          if (this.schoolYearStart > this.schoolYearEnd) {
            this.$message.error("开始学年必须小于结束学年");
            return;
          }
          this.form.schoolYear = this.schoolYearStart + '-' + this.schoolYearEnd;
           if (this.form.id) {
              updateSemester(this.form).then((data) => {
                this.$emit('save', this.form);
                this.close();
              }).catch((error) => {
                this.$message.error(error.error.message);
              })
            } else {
              addSemesterDto(this.form).then((data) => {
                this.$emit('save', this.form);
                this.close();
              }).catch((error) => {
                this.$message.error(error.error.message);
              })
            }
        } else {
          if (!this.schoolYearStart) this.$message.error('请选择开始学年');
          if (!this.schoolYearEnd) this.$message.error('请选择结束学年');
        }
       });
    }
  }
}
</script>
