<template>
    <div>
      <el-card class="t-box-card">
        <div slot="header" class="t-box-card-header">
          <span>{{id?'编辑课程学科':'新增课程学科'}}</span>
        </div>
        <el-form class="t-page-form t-form-block" ref="form" :model="form" :rules="rules" label-width="120px" size="small">
            <el-row :gutter="50">
                <el-col :span="12">
                    <el-form-item label="课程编码" prop="courseNumber">
                        <el-input v-model="form.courseNumber"></el-input>
                    </el-form-item>
                    <el-form-item label="课程英文名" prop="courseEnglishName">
                        <el-input v-model="form.courseEnglishName"></el-input>
                    </el-form-item>
                    <el-form-item label="学分" prop="credit">
                        <el-input type="number" v-model.number="form.credit" max="99.9"></el-input>
                    </el-form-item>
                    <el-form-item label="理论学时" prop="theoryClassHours">
                        <el-input v-model.number="form.theoryClassHours" max="99"></el-input>
                    </el-form-item>
                    <el-form-item label="其他学时" prop="restsClassHours">
                        <el-input v-model.number="form.restsClassHours" max="99"></el-input>
                    </el-form-item>
                    <el-form-item label="考试形式" prop="examinationForm">
                        <el-select v-model="form.examinationForm" placeholder="请选择">
                            <el-option v-for="item in examinationForm" :label="item.label" :value="item.value" :key="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="课程费用" prop="courseFee">
                        <el-input type="number" v-model.number="form.courseFee"></el-input>
                    </el-form-item>
                    <el-form-item label="课程介绍" prop="courseDescription">
                        <el-input type="textarea" v-model="form.courseDescription"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="课程名称" prop="courseName">
                        <!-- <el-select v-model="form.courseName" placeholder="请选择">
                            <el-option v-for="item in courseName" :label="item.label" :value="item.value" :key="item.id"></el-option>
                        </el-select> -->
                        <el-input v-model="form.courseName"></el-input>
                    </el-form-item>
                    <el-form-item label="课程别名" prop="courseAlias">
                         <el-input v-model="form.courseAlias"></el-input>
                    </el-form-item>
                    <el-form-item label="总学时" prop="totalClassHours">
                        <el-input v-model.number="form.totalClassHours" max="99"></el-input>
                    </el-form-item>
                    <el-form-item label="实践学时" prop="practiceClassHours">
                        <el-input v-model.number="form.practiceClassHours" max="99"></el-input>
                    </el-form-item>
                    <el-form-item label="开课机构" prop="courseUnits">
                      <el-input v-model.number="form.courseUnits" max="99"></el-input>
                        <!-- <el-popover placement="bottom" title="选择开设机构" trigger="click">
                            <OrganizationTreeSearch @selectNode="handdleSearchNode"></OrganizationTreeSearch>
                            <el-input slot="reference" v-model="form.name"></el-input>
                        </el-popover> -->
                    </el-form-item>
                    <el-form-item label="授课方式" prop="teachingModeCode">
                        <el-select v-model="form.teachingModeCode" placeholder="请选择">
                            <el-option v-for="item in teachingModeCode" :label="item.label" :value="item.value" :key="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="参考书目" prop="reference">
                        <el-input v-model="form.reference"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-form-item>
                <el-button type="primary" @click="save">保存</el-button>
            </el-form-item>
        </el-form>
      </el-card>
    </div>
</template>
<script>
import { addCourses, updateCourses } from '@/server/administration-module';
import { OrganizationTreeSearch } from "@/components";
export default {
  data () {
    return {
      form: {},
      rules: {
          courseNumber: [
            { required: true, message: '请输入课程编码', trigger: 'blur' },
            { max: 6, message: '字符长度必须小于6', trigger: 'blur' }
          ],
          courseEnglishName: [
            { max: 100, message: '字符长度必须小于100', trigger: 'blur' }
          ],
          credit: [
            { required: true, message: '请输入学分', trigger: 'blur' }
          ],
          theoryClassHours: [
            { required: true, message: '请输入理论学时', trigger: 'blur' },
            { type: 'number', message: '请输入数字', trigger: 'blur' }
          ],
          restsClassHours: [
            { required: true, message: '请输入其他学时', trigger: 'blur' },
            { type: 'number', message: '请输入数字', trigger: 'blur' }
          ],
          examinationForm: [
            { required: true, message: '请选择考试形式', trigger: 'change' }
          ],
          courseDescription: [
            { max: 200, message: '字符长度必须小于200', trigger: 'blur' }
          ],
          courseName: [
            { required: true, message: '请输入课程名称', trigger: 'blur' },
            { max: 100, message: '字符长度必须小于100', trigger: 'blur' }
          ],
          courseAlias: [
            { max: 100, message: '字符长度必须小于100', trigger: 'blur' }
          ],
          totalClassHours: [
            { required: true, message: '请输入总学时', trigger: 'blur' },
            { type: 'number', message: '请输入数字', trigger: 'blur' }
          ],
          practiceClassHours: [
            { required: true, message: '请输入实践学时', trigger: 'blur' },
            { type: 'number', message: '请输入数字', trigger: 'blur' }
          ],
          teachingModeCode: [
            { required: true, message: '请选择授课方式码', trigger: 'change' }
          ]
      },
      selectList: [],
    //   courseName: [],
      examinationForm: [
        {value: 1, label: '考试'},
        {value: 2, label: '考查'}
      ],
      teachingModeCode: [
        {value: 1, label: '面授讲课'},
        {value: 2, label: '辅导'},
        {value: 3, label: '录像讲课'},
        {value: 4, label: '网络教学'},
        {value: 5, label: '实验'},
        {value: 6, label: '实习'},
      ],
      id: ''
    }
  },
  activated() {
    this.id = this.$route.params.id || '';
    this.form = this.$route.params.row || {};
  },
  methods: {
    save(){
       this.$refs.form.validate((valid) => {
        if(!valid) return;
        if (this.id) {
          updateCourses(this.form).then(() => {
            this.$message.success('保存成功');
            this.$router.go(-1);
          }).catch((error) => {
            this.$message.error(error.error.message);
          });
        } else {
          addCourses(this.form).then((data) => {
            this.$message.success('保存成功');
            this.$router.go(-1);
          }).catch((error) => {
            this.$message.error(error.error.message);
           });
        }
       });
    },
    handdleSearchNode(node){
      console.log(node);
    }
  },
  components: {
    OrganizationTreeSearch
  }
}
</script>