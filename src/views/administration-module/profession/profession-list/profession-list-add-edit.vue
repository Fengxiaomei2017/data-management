<template>
    <div>
      <el-card class="t-box-card">
        <div slot="header" class="t-box-card-header">
          <span>{{id ? '编辑专业' : '新增专业'}}</span>
        </div>
        <el-form class="t-page-form t-form-block" ref="form" :model="form" :rules="rules" label-width="120px" size="small">
            <el-row :gutter="50">
                <el-col :span="12">
                    <el-form-item label="专业编码" prop="professionalNumber">
                        <el-input v-model="form.professionalNumber"></el-input>
                    </el-form-item>
                    <el-form-item label="专业名称" prop="professionalName">
                        <el-input v-model="form.professionalName"></el-input>
                    </el-form-item>
                    <el-form-item label="英文名" prop="professionalEnglishName">
                        <el-input v-model="form.professionalEnglishName"></el-input>
                    </el-form-item>
                    <!-- <el-form-item label="办学层次" prop="name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item> -->
                    <el-form-item label="建立年月" prop="establishMonthly">
                        <el-date-picker
                            v-model="form.establishMonthly"
                            type="date"
                            value-format="yyyy-MM-dd"
                            placeholder="输入">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="总学分" prop="totalCredits">
                        <el-input v-model.number="form.totalCredits"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="专业代码" prop="professionalCode">
                        <el-input v-model="form.professionalCode"></el-input>
                        <!-- <el-select v-model="form.professionalCode" placeholder="请选择">
                            <el-option v-for="item in selectList" :label="item.label" :value="item.value" :key="item.id"></el-option>
                        </el-select> -->
                    </el-form-item>
                    <el-form-item label="专业简称" prop="professionalAbbreviation">
                         <el-input v-model="form.professionalAbbreviation"></el-input>
                    </el-form-item>
                    <el-form-item label="专业方向" prop="professionalEmphasisName">
                        <el-input v-model="form.professionalEmphasisName"></el-input>
                    </el-form-item>
                    <el-form-item label="学制" prop="lengthOfSchooling">
                        <el-input v-model.number="form.lengthOfSchooling"></el-input>
                    </el-form-item>
                    <el-form-item label="开设机构" prop="establishmentNumber">
                        <!-- <el-popover placement="bottom" title="选择开设机构" trigger="click">
                            <OrganizationTreeSearch @selectNode="handdleSearchNode"></OrganizationTreeSearch>
                            <el-input slot="reference" v-model="form.establishmentNumber"></el-input>
                        </el-popover> -->
                        <el-input v-model="form.establishmentNumber"></el-input>
                    </el-form-item>
                    <el-form-item label="专业教师数" prop="professionalTeachersNumber">
                        <el-input v-model.number="form.professionalTeachersNumber"></el-input>
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
import { addProfessionalInfo, updateProfessionalInfo } from '@/server/administration-module';
import { OrganizationTreeSearch } from "@/components";
export default {
  data () {
    var checkTotalCredits = (rule, value, callback) => {
        if (!value) {
            return callback(new Error('总学分不能为空'))
        }
        if ((!Number.isInteger(value))) {
            return callback(new Error('总学分必须是数字'))
        } else {
            if (value < 0) {
                callback(new Error('总学分不能小于0'))
            } else if (value > 100) {
                callback(new Error('总学分不能大于100'))
            } else {
                callback();
            }
        }
    }
    return {
      id: '',
      form: {},
      rules: {
        professionalNumber: [
            { required: true, message: '请输入专业编码', trigger: 'blur' },
            {  max: 4, message: '字符长度必须小于4', trigger: 'blur' }
        ],
        professionalName: [
            { required: true, message: '请输入专业编码', trigger: 'blur' },
            {  max: 50, message: '字符长度必须小于50', trigger: 'blur' }
        ],
        establishMonthly: [
            { required: true, message: '请选择年月', trigger: 'blur' }
        ],
        professionalEnglishName: [{message: '请输入英文名称'}],
        totalCredits: [
            { required: true, validator: checkTotalCredits, trigger: 'blur' }
        ],
        professionalCode: [
            { required: true, message: '请输入专业代码', trigger: 'blur' },
            { max: 6, message: '字符长度必须小于6', trigger: 'blur' }
        ],
        professionalAbbreviation: [
            { required: true, message: '请输入专业简称', trigger: 'blur' },
            {  max: 100, message: '字符长度必须小于100', trigger: 'blur' }
        ],
        professionalEmphasisName: [
            { required: true, message: '请输入专业方向', trigger: 'blur' },
            { max: 4, message: '字符长度必须小于4', trigger: 'blur' }
        ],
        lengthOfSchooling: [
            { required: true, message: '请输入专业学制', trigger: 'blur' },
            { type: 'number', message: '请输入数字', trigger: 'blur' }
        ],
        establishmentNumber: [
            { required: true, message: '请输入开设机构编码', trigger: 'blur' },
            { max: 6, message: '字符长度必须小于6', trigger: 'blur' }
        ],
        professionalTeachersNumber: [
            { type: 'number', message: '请输入数字', trigger: 'blur' }
        ]
      },
      selectList: []
    }
  },
  activated(){
    let params = this.$route.params.row;
    this.form = params || {};
    if (params) this.id = params.id;
  },
  methods: {
    goBack () {
        this.$router.go(-1);
    },
    save(){
       this.$refs.form.validate((valid) => {
        if(!valid) return;
        if (this.id) {
           updateProfessionalInfo(this.form).then((data) => {
               this.$message.success('保存成功');
               this.goBack();
           }).catch((error) => {
               this.$message.error(error.error.message);
           });
        } else {
            addProfessionalInfo(this.form).then((data) => {
                this.$message.success('保存成功');
                this.goBack();
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