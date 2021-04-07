<template>
    <div>
      <el-card class="t-box-card">
        <div slot="header" class="t-box-card-header">
          <span>{{id?'编辑寝室':'新增寝室'}}</span>
        </div>
        <el-form class="t-page-form t-form-block" ref="form" :model="form" :rules="rules" label-width="120px" size="small">
            <el-row :gutter="50">
                <el-col :span="12">
                    <!-- <el-form-item label="选择校区" prop="name">
                        <el-select v-model="form.name" placeholder="请选择">
                            <el-option v-for="item in selectList" :label="item.label" :value="item.value" :key="item.id"></el-option>
                        </el-select>
                    </el-form-item> -->
                    <!-- <el-form-item label="建筑物号" prop="name">
                        <el-select v-model="form.name" placeholder="请选择">
                            <el-option v-for="item in selectList" :label="item.label" :value="item.value" :key="item.id"></el-option>
                        </el-select>
                    </el-form-item> -->
                    <el-form-item label="寝室编号" prop="buildingNumber">
                        <el-input v-model="form.buildingNumber"></el-input>
                    </el-form-item>
                    <el-form-item label="电话号码" prop="phoneNumber">
                        <el-input v-model="form.phoneNumber"></el-input>
                    </el-form-item>
                    <el-form-item label="网络端口" prop="networkPort">
                        <el-input v-model="form.networkPort"></el-input>
                    </el-form-item>
                    <el-form-item label="电话端口" prop="phonePort">
                        <el-input v-model="form.phonePort"></el-input>
                    </el-form-item>
                    <el-form-item label="水表底数" prop="waterMeter">
                        <el-input v-model.number="form.waterMeter"></el-input>
                    </el-form-item>
                    <el-form-item label="电表底数" prop="electricityMeter">
                        <el-input v-model.number="form.electricityMeter"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <!-- <el-form-item label="建筑物用途" prop="name">
                        <el-select v-model="form.name" placeholder="请选择">
                            <el-option v-for="item in selectList" :label="item.label" :value="item.value" :key="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="楼层号" prop="name">
                        <el-select v-model="form.name" placeholder="请选择">
                            <el-option v-for="item in selectList" :label="item.label" :value="item.value" :key="item.id"></el-option>
                        </el-select>
                    </el-form-item> -->
                    <el-form-item label="房间编号" prop="roomNumber">
                        <el-input v-model="form.roomNumber" class="t-input-group"></el-input>
                    </el-form-item>
                    <!-- <el-form-item label="寝室类型" prop="name">
                        <el-input v-model="form.name" class="t-input-group">
                            <span slot="append">入住人数 10 人</span>
                        </el-input>
                    </el-form-item> -->
                    <el-form-item label="入住性别" prop="sex">
                        <el-select v-model="form.sex" placeholder="请选择">
                            <el-option v-for="item in sex" :label="item.label" :value="item.value" :key="item.value"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="是否可用" prop="available">
                        <el-radio-group v-model="form.available">
                            <el-radio v-for="item in available" :label="item.value" :key="item.value">{{item.label}}</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="安装电视" prop="television">
                        <el-radio-group v-model="form.television">
                            <el-radio v-for="item in television" :label="item.value" :key="item.value">{{item.label}}</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="宿舍备注" prop="remark">
                        <el-input type="textarea" v-model="form.remark"></el-input>
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
import {addStudentDormitory, updateStudentDormitory} from '@/server/school-module';
export default {
  data () {
    return {
      form: {},
      rules: {
          buildingNumber: [
            { required: true, message: '请输入宿舍楼编号', trigger: 'blur' },
            { max: 6, message: '字符长度必须小于6', trigger: 'blur' }
          ],
          roomNumber: [
            { required: true, message: '请输入房间编号', trigger: 'blur' },
            { max: 10, message: '字符长度必须小于10', trigger: 'blur' }
          ], 
          sex: [
            { required: true, message: '请选择性别', trigger: 'change' }   
          ],
          available: [
            { required: true, message: '请选择是否可用', trigger: 'change' } 
          ],
          networkPort: [
            { max: 20, message: '字符长度必须小于20', trigger: 'blur' }
          ],
          television: [
            { max: 1, message: '字符长度必须小于1', trigger: 'blur' } 
          ],
          phonePort: [
            { max: 20, message: '字符长度必须小于20', trigger: 'blur' }  
          ],
          phoneNumber: [
            { max: 20, message: '字符长度必须小于20', trigger: 'blur' }  
          ],
          waterMeter: [
            { type: 'number', message: '请输入数字', trigger: 'blur'}  
          ],
          electricityMeter: [
            { type: 'number', message: '请输入数字', trigger: 'blur'}   
          ]
      },
      selectList: [],
      id: '',
      sex: [
          {label: '女', value: '2'},
          {label: '男', value: '1'}
      ],
      available: [
          {label: '可用', value: '1'},
          {label: '不可用', value: '0'}
      ],
      television: [
          {label: '已安装', value: '1'},
          {label: '未安装', value: '0'}
      ]
    }
  },
  created(){
    this.$route.params.id ? this.id = this.$route.params.id : this.id = '';
  },
  activated () {
    this.form = {}
    if (this.$route.params.row) this.form = this.$route.params.row;
  },
  methods: {
    save(){
       this.$refs.form.validate((valid) => {
        if(!valid) return;
        if (this.id) {
            // 修改
            this.form.id = this.id;
            updateStudentDormitory(this.form).then((result) => {
                this.$message.success('保存成功');
                this.$router.go(-1);
            }).catch((error) => {
              this.$message.error(error.error.message);
            })
        } else {
            // 新增
            addStudentDormitory(this.form).then((result) => {
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
