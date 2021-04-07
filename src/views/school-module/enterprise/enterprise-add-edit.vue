<template>
    <div>
      <el-card class="t-box-card">
        <div slot="header" class="t-box-card-header">
          <span>{{id?'编辑':'新增'}}合作企业</span>
        </div>
        <el-form class="t-page-form t-form-block" ref="form" :model="form" :rules="rules" label-width="120px" size="small">
            <el-row :gutter="50">
                <el-col :span="12">
                    <el-form-item label="企业编码" prop="enterpriseId">
                        <el-input v-model="form.enterpriseId"></el-input>
                    </el-form-item>
                    <el-form-item label="合作合同名称" prop="cooperationContractName">
                        <el-input v-model="form.cooperationContractName"></el-input>
                    </el-form-item>
                    <el-form-item label="单位名称" prop="enterpriseName">
                        <el-input v-model="form.enterpriseName"></el-input>
                    </el-form-item>
                    <el-form-item label="企业地址" prop="enterpriseAddress">
                        <el-input v-model="form.enterpriseAddress"></el-input>
                    </el-form-item>
                    <el-form-item label="法人代表" prop="enterpriseLegalRepresentative">
                        <el-input v-model="form.enterpriseLegalRepresentative"></el-input>
                    </el-form-item>
                    <el-form-item label="企业邮政编码" prop="enterprisePostalCode">
                        <el-input v-model="form.enterprisePostalCode"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="合作合同编码" prop="cooperationContractId">
                        <el-input v-model="form.cooperationContractId"></el-input>
                    </el-form-item>
                    <el-form-item label="基地类别" prop="typeCode">
                        <el-input v-model="form.typeCode"></el-input>
                        <!-- <el-select v-model="form.name" placeholder="请选择">
                            <el-option v-for="item in selectList" :label="item.label" :value="item.value" :key="item.id"></el-option>
                        </el-select> -->
                    </el-form-item>
                    <el-form-item label="企业行政区" prop="enterpriseAdministrativeDivisionCode">
                        <el-input v-model="form.enterpriseAdministrativeDivisionCode"></el-input>
                    </el-form-item>
                    <el-form-item label="企业性质" prop="enterpriseNature">
                        <el-input v-model="form.enterpriseNature"></el-input>
                    </el-form-item>
                    <el-form-item label="企业联系人" prop="enterpriseContact">
                        <el-input v-model="form.enterpriseContact"></el-input>
                    </el-form-item>
                    <el-form-item label="企业联系电话" prop="enterprisePhoneNumber">
                        <el-input v-model="form.enterprisePhoneNumber"></el-input>
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
import { addOffCampusInternshipBase, updateOffCampusInternshipBase } from "@/server/school-module";
export default {
  data () {
    return {
      form: {},
      rules: {
          enterpriseId: [
            { required: true, message: '请输入企业编号', trigger: 'blur' },
            { max: 20, message: '字符长度必须小于20', trigger: 'blur' }
          ],
          cooperationContractName: [
            { required: true, message: '请输入合作合同名称', trigger: 'blur' },
            { max: 50, message: '字符长度必须小于50', trigger: 'blur' }
          ],
          enterpriseName: [
            { required: true, message: '请输入单位名称', trigger: 'blur' },
            { max: 50, message: '字符长度必须小于50', trigger: 'blur' }
          ],
          enterpriseAddress: [
            { max: 180, message: '字符长度必须小于180', trigger: 'blur' }
          ],
          enterpriseLegalRepresentative: [
            { max: 36, message: '字符长度必须小于36', trigger: 'blur' }
          ],
          enterprisePostalCode: [
            { max: 6, message: '字符长度必须小于6', trigger: 'blur' }
          ],
          cooperationContractId: [
            { required: true, message: '请输入合作合同编码', trigger: 'blur' },
            { max: 20, message: '字符长度必须小于20', trigger: 'blur' }
          ],
          typeCode: [
            { required: true, message: '请输入基地类别', trigger: 'blur' }
          ],
          enterpriseAdministrativeDivisionCode: [
            { required: true, message: '请输入企业行政区', trigger: 'blur' },
            { max: 6, message: '字符长度必须小于6', trigger: 'blur' }
          ],
          enterpriseNature: [
            { max: 2, message: '字符长度必须小于2', trigger: 'blur' } 
          ],
          enterpriseContact: [
            { max: 36, message: '字符长度必须小于36', trigger: 'blur' } 
          ],
          enterprisePhoneNumber: [
            { max: 30, message: '字符长度必须小于30', trigger: 'blur' }   
          ]
      },
      selectList: [],
      id: ''
    }
  },
  activated () {
      this.form = this.$route.params.row || {};
      this.id = this.$route.params.id || '';
  },
  methods: {
    back () {
        this.$message.success('保存成功');
        this.$router.go(-1);
    },
    save(){
       this.$refs.form.validate((valid) => {
        if(!valid) return;
        if (this.id) {
            updateOffCampusInternshipBase(this.form).then((result) => {
                this.back();
            })
        } else {
            addOffCampusInternshipBase(this.form).then((result) => {
                this.back();
            })
        }
       });
    }
  }
}
</script>