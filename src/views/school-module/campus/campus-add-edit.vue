<template>
    <div>
      <el-card class="t-box-card">
        <div slot="header" class="t-box-card-header">
          <span>{{id?'编辑校区':'新增校区'}}</span>
        </div>
        <el-form class="t-page-form t-form-block" ref="form" :model="form" :rules="rules" label-width="120px" size="small">
            <el-row :gutter="50">
                <el-col :span="12">
                    <el-form-item label="校区代码" prop="code">
                        <el-input v-model="form.code"></el-input>
                    </el-form-item>
                    <el-form-item label="校区地址" prop="address">
                        <el-input v-model="form.address"></el-input>
                    </el-form-item>
                    <el-form-item label="联系电话" prop="contactNumber">
                        <el-input v-model="form.contactNumber"></el-input>
                    </el-form-item>
                    <el-form-item label="邮政编码" prop="postalCode">
                        <el-input v-model="form.postalCode"></el-input>
                    </el-form-item>
                    <el-form-item label="校区面积" prop="area">
                        <el-input type="number" v-model.number="form.area"></el-input>
                    </el-form-item>
                    <el-form-item label="仪器设备总值" prop="teachingAndResearchEquipmentWorth">
                        <el-input type="number" v-model.number="form.teachingAndResearchEquipmentWorth"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="校区名称" prop="name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="负责人号" prop="principal">
                         <el-input v-model="form.principal"></el-input>
                    </el-form-item>
                    <el-form-item label="电子邮件" prop="email">
                        <el-input v-model="form.email"></el-input>
                    </el-form-item>
                    <el-form-item label="行政区划码" prop="areaNumberCode">
                        <el-input v-model="form.areaNumberCode"></el-input>
                        <!-- <el-select v-model="form.name" placeholder="请选择">
                            <el-option v-for="item in selectList" :label="item.label" :value="item.value" :key="item.id"></el-option>
                        </el-select> -->
                    </el-form-item>
                    <el-form-item label="校区建筑面积" prop="coveredArea">
                        <el-input type="number" v-model.number="form.coveredArea"></el-input>
                    </el-form-item>
                    <el-form-item label="固定资产总值" prop="fixedAssetsWorth">
                        <el-input type="number" v-model.number="form.fixedAssetsWorth"></el-input>
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
import { addCampus, getCampusDetail, updateCampus } from '@/server/school-module';
import { initParam } from "@/utils/method";
export default {
  data () {
    return {
      form: {},
      rules: {
          code: [
            { required: true, message: '请输入校区代码', trigger: 'blur' },
            { max: 2, message: '字符长度必须小于2', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '请输入校区名称', trigger: 'blur' },
            { max: 20, message: '字符长度必须小于20', trigger: 'blur' }
          ],
          address: [
            { required: true, message: '请输入校区地址', trigger: 'blur' },
            { max: 180, message: '字符长度必须小于180', trigger: 'blur' }
          ],
          contactNumber: [
            { required: true, message: '请输入校区联系电话', trigger: 'blur' },
            { max: 30, message: '字符长度必须小于30', trigger: 'blur' }
          ],
          principal: [
            { required: true, message: '请输入校区负责人号', trigger: 'blur' },
            { max: 20, message: '字符长度必须小于20', trigger: 'blur' }
          ],
          email: [
            { required: true, message: '请输入电子邮件', trigger: 'blur' },
            { max: 40, message: '字符长度必须小于40', trigger: 'blur' }
          ],
          postalCode: [
            { required: true, message: '请输入校区邮政编码', trigger: 'blur' },
            { max: 6, message: '字符长度必须小于6', trigger: 'blur' }
          ],
          areaNumberCode: [
            { max: 6, message: '字符长度必须小于6', trigger: 'blur' }
          ],
          area: [
            { required: true, message: '请输入校区面积', trigger: 'blur' }
          ],
          coveredArea: [
            { required: true, message: '请输入建筑面积', trigger: 'blur' }
          ]
      },
      selectList: [],
      id: ''
    }
  },
  activated() {
    this.form = {};
    this.id = this.$route.params.id;
    if (this.id) this.initData();
  },
  methods: {
    initData () {
        getCampusDetail(this.id).then((result) => {
            this.form = result;
        })
    },
    save(){
       this.$refs.form.validate((valid) => {
        if(!valid) return;
        if (this.id) {
            this.form.id = this.id;
            updateCampus(this.form).then((result) => {
                this.$message.success('保存成功');
                this.$router.go(-1);
            }).catch((error) => {
              this.$message.error(error.error.message);
            })
        } else {
            addCampus(this.form).then((result) => {
                this.$message.success('保存成功');
                this.$router.go(-1);
            }).catch((error) => {
              this.$message.error(error.error.message);
            })
        }
       });
    }
  }
}
</script>