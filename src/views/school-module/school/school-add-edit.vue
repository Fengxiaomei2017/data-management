<template>
    <div>
      <el-card class="t-box-card">
        <div slot="header" class="t-box-card-header">
          <span>学校信息</span>
        </div>
        <el-form class="t-page-form t-form-block" ref="form" :model="form" :rules="rules" label-width="120px" size="small">
            <el-row :gutter="50">
                <el-col :span="12">
                    <el-form-item label="学校代码" prop="code">
                        <el-input v-model="form.code"></el-input>
                    </el-form-item>
                    <el-form-item label="英文名称" prop="englishName">
                        <el-input v-model="form.englishName"></el-input>
                    </el-form-item>
                    <el-form-item label="主管部门码" prop="competentDepartmentCode">
                        <el-input v-model="form.competentDepartmentCode"></el-input>
                        <!-- <el-select v-model="form.name" placeholder="请选择">
                            <el-option v-for="item in selectList" :label="item.label" :value="item.value" :key="item.id"></el-option>
                        </el-select> -->
                    </el-form-item>
                    <el-form-item label="邮政编码" prop="postalCode">
                        <el-input v-model="form.postalCode"></el-input>
                    </el-form-item>
                    <el-form-item label="建校年月" prop="createYears">
                        <el-date-picker
                            v-model="form.createYears"
                            type="date"
                            value-format="yyyy-MM-dd"
                            placeholder="输入">
                        </el-date-picker>
                        <!-- <el-input v-model="form.name"></el-input> -->
                    </el-form-item>
                    <el-form-item label="成立背景" prop="background">
                        <el-input type="textarea" v-model="form.background"></el-input>
                    </el-form-item>
                    <el-form-item label="校区数" prop="campusNumber">
                        <el-input v-model.number="form.campusNumber"></el-input>
                    </el-form-item>
                    <el-form-item label="评估情况说明" prop="evaluationFactSheet">
                        <el-input type="textarea" v-model="form.evaluationFactSheet"></el-input>
                    </el-form-item>
                    <el-form-item label="法定代表人号" prop="legalRepresentativeNumber">
                        <el-input v-model="form.legalRepresentativeNumber"></el-input>
                    </el-form-item>
                    <el-form-item label="联系电话" prop="contactNumber">
                        <el-input v-model="form.contactNumber"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="学校名称" prop="name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="举办者码" prop="organizerCode">
                        <el-input v-model="form.organizerCode"></el-input>
                        <!-- <el-select v-model="form.organizerCode" placeholder="请选择">
                            <el-option v-for="item in selectList" :label="item.label" :value="item.value" :key="item.id"></el-option>
                        </el-select> -->
                    </el-form-item>
                    <el-form-item label="学校地址" prop="address">
                        <el-input v-model="form.address"></el-input>
                    </el-form-item>
                    <el-form-item label="行政区划码" prop="areaNumberCode">
                        <el-input v-model="form.areaNumberCode"></el-input>
                        <!-- <el-select v-model="form.name" placeholder="请选择">
                            <el-option v-for="item in selectList" :label="item.label" :value="item.value" :key="item.id"></el-option>
                        </el-select> -->
                    </el-form-item>
                    <el-form-item label="校庆日" prop="decorationDay">
                        <el-date-picker
                            v-model="form.decorationDay"
                            type="date"
                            value-format="yyyy-MM-dd"
                            placeholder="输入">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="历史沿革" prop="history">
                        <el-input type="textarea" v-model="form.history"></el-input>
                    </el-form-item>
                    <el-form-item label="评估类型" prop="assessmentType">
                        <el-input v-model="form.assessmentType"></el-input>
                    </el-form-item>
                    <el-form-item label="主页地址" prop="websiteAddress">
                        <el-input v-model="form.websiteAddress"></el-input>
                    </el-form-item>
                    <el-form-item label="法定证书号" prop="legalRepresentativeCertificateNumber">
                        <el-input v-model="form.legalRepresentativeCertificateNumber"></el-input>
                    </el-form-item>
                    <el-form-item label="传真电话" prop="fax">
                        <el-input v-model="form.fax"></el-input>
                    </el-form-item>
                    <el-form-item label="电子信箱" prop="email">
                        <el-input v-model="form.email"></el-input>
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
import { addSchoolBasic, getSchoolBasic, updateSchoolBasic } from '@/server/school-module';
export default {
  data () {
    return {
      form: {},
      rules: {
          code: [
            { required: true, message: '请输入学校代码', trigger: 'blur' },
            { max: 10, message: '字符长度必须小于10', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '请输入学校名称', trigger: 'blur' },
            { max: 60, message: '字符长度必须小于60', trigger: 'blur' }  
          ],
          englishName: [
            { max: 180, message: '字符长度必须小于180', trigger: 'blur' }
          ],
          organizerCode: [
            { required: true, message: '请输入学校举办者码', trigger: 'blur' },
            { max: 3, message: '字符长度必须小于3', trigger: 'blur' }  
          ],
         competentDepartmentCode: [
            { required: true, message: '请输入学校主管部门码', trigger: 'blur' },
            { max: 3, message: '字符长度必须小于3', trigger: 'blur' }
         ],
         address: [
            { required: true, message: '请输入学校地址', trigger: 'blur' },
            { max: 180, message: '字符长度必须小于180', trigger: 'blur' }
          ],
          postalCode: [
            { required: true, message: '请输入学校邮政编码', trigger: 'blur' },
            { max: 6, message: '字符长度必须小于6', trigger: 'blur' }   
          ],
          areaNumberCode: [
            { required: true, message: '请输入行政区划码', trigger: 'blur' },
            { max: 6, message: '字符长度必须小于6', trigger: 'blur' }   
          ],
          createYears: [
            { required: true, message: '请选择建校年月', trigger: 'blur' }
          ],
          decorationDay: [
            { required: true, message: '请选择校庆日', trigger: 'blur' }  
          ],
          campusNumber: [
            { required: true, message: '请输入学校校区数', trigger: 'blur' },
            { type: 'number', message: '必须是数字', trigger: 'blur' }
          ],
          assessmentType: [
            { required: true, message: '请输入学校评估类型', trigger: 'blur' },
            { max: 1, message: '字符长度必须小于1', trigger: 'blur' }  
          ],
          websiteAddress: [
            { required: true, message: '请输入主页地址', trigger: 'blur' }
          ],
          legalRepresentativeNumber: [
            { required: true, message: '请输入法定代表人号', trigger: 'blur' },
            { max: 20, message: '字符长度必须小于20', trigger: 'blur' }   
          ],
          legalRepresentativeCertificateNumber: [
            { required: true, message: '请输入法人证书号', trigger: 'blur' }  
          ],
          contactNumber: [
            { required: true, message: '请输入联系电话', trigger: 'blur' },
            { max: 20, message: '字符长度必须小于20', trigger: 'blur' }  
          ],
          fax: [
            { required: true, message: '请输入传真电话', trigger: 'blur' },
            { max: 20, message: '字符长度必须小于20', trigger: 'blur' }  
          ],
          email: [
            { required: true, message: '请输入电子信箱', trigger: 'blur' },
            { max: 40, message: '字符长度必须小于40', trigger: 'blur' }  
          ]
      },
      selectList: [],
      id: ''
    }
  },
  created () {
    this.initData();
  },
  methods: {
    initData() {
       getSchoolBasic().then((result) => {
           this.form = result.items[0];
           this.id = this.form.id;
       }) 
    },
    save(){
       this.$refs.form.validate((valid) => {
        if(!valid) return;
        if (this.id) {
            updateSchoolBasic(this.form).then((result) => {
                this.$message.success('修改成功');
            })
        } else {
            addSchoolBasic(this.form).then((result) => {
                this.$message.success('保存成功');
                this.initData();
            })
        }
       });
    }
  }
}
</script>