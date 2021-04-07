<template>
    <div>
      <el-card class="t-box-card">
        <div slot="header" class="t-box-card-header">
          <span>{{id?'编辑教室':'新增教室'}}</span>
        </div>
        <el-form class="t-page-form t-form-block" ref="form" :model="form" :rules="rules" label-width="120px" size="small">
            <el-row :gutter="50">
                <el-col :span="12">
                    <el-form-item label="选择校区" prop="campusCode">
                        <!-- <el-select v-model="form.campusCode" placeholder="请选择">
                            <el-option v-for="item in campusCode" :label="item.label" :value="item.value" :key="item.id"></el-option>
                        </el-select> -->
                        <el-input v-model="form.campusCode"></el-input>
                    </el-form-item>
                    <!-- <el-form-item label="建筑物号" prop="buildingCode">
                        <el-input v-model="form.buildingCode"></el-input>
                    </el-form-item> -->
                    <el-form-item label="教室编号" prop="code">
                        <el-input v-model="form.code"></el-input>
                    </el-form-item>
                    <el-form-item label="实际容量" prop="roomCapacity">
                        <el-input v-model.number="form.roomCapacity"></el-input>
                    </el-form-item>
                    <el-form-item label="网络状态" prop="isNetworkConnected">
                        <el-input v-model="form.isNetworkConnected"></el-input>
                        <!-- <el-radio-group v-model="form.isNetworkConnected">
                            <el-radio v-for="item in isNetworkConnected" :label="item.value" :key="item.value">{{item.label}}</el-radio>
                        </el-radio-group> -->
                    </el-form-item>
                    <el-form-item label="教室备注" prop="remarks">
                        <el-input type="textarea" v-model="form.remarks"></el-input>
                    </el-form-item>
                    <el-form-item label="平面图" prop="floorPlanUrl">
                        <!-- <el-upload action="/" list-type="picture" :file-list="fileList">
                            <el-button size="small" type="primary">点击上传</el-button>
                        </el-upload> -->
                        <UploadImage></UploadImage>
                    </el-form-item>
                    <el-form-item label="图片" prop="photoUrl">
                        <!-- <el-upload action="/" list-type="picture" :file-list="fileList">
                            <el-button size="small" type="primary">点击上传</el-button>
                        </el-upload> -->
                        <UploadImage></UploadImage>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="选择所属建筑物" prop="buildingCode">
                        <el-select v-model="form.buildingCode" placeholder="请选择">
                            <el-option v-for="item in navdata" :label="item.name" :value="item.code" :key="item.code"></el-option>
                        </el-select>
                    </el-form-item>
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
                    <el-form-item label="教室类型" prop="typeCode">
                        <el-input v-model="form.typeCode"></el-input>
                        <!-- <el-select v-model="form.typeCode" placeholder="请选择">
                            <el-option v-for="item in typeCode" :label="item.label" :value="item.value" :key="item.id"></el-option>
                        </el-select> -->
                    </el-form-item>
                    <el-form-item label="最大排课容量" prop="maxClassSchedulingCapacity">
                        <el-input v-model.number="form.maxClassSchedulingCapacity"></el-input>
                    </el-form-item>
                    <el-form-item label="是否多媒体" prop="isMultimediaClassroom">
                        <el-radio-group v-model="form.isMultimediaClassroom">
                            <el-radio v-for="item in isMultimediaClassroom" :label="item" :key="item">{{item}}</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="是否可用" prop="isAvailable">
                        <el-radio-group v-model="form.isAvailable">
                            <el-radio v-for="item in isMultimediaClassroom" :label="item" :key="item">{{item}}</el-radio>
                        </el-radio-group>
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
import { UploadImage } from "@/components";
import { getBuildingList, addClassRoom, updateClassRoom } from '@/server/school-module';
export default {
  data () {
    return {
      navdata: [],
      form: {},
      rules: {
        code: [
            { required: true, message: '请输入教室编号', trigger: 'blur' },
            { max: 10, message: '字符长度必须小于10', trigger: 'blur' }
        ],
        typeCode: [
            { required: true, message: '请输入教室类型代码', trigger: 'blur' }  
        ],
        roomCapacity: [
            { required: true, message: '请输入实际容量', trigger: 'blur' },
            { type: 'number', message: '实际容量只能是数字', trigger: 'blur'}
        ],
        maxClassSchedulingCapacity: [
            { required: true, message: '请输入最大排课容量', trigger: 'blur' },
            { type: 'number', message: '最大排课容量只能是数字', trigger: 'blur'}
        ],
        isNetworkConnected: [
            { required: true, message: '请输入网络状态', trigger: 'blur' }
        ],
        isMultimediaClassroom: [
            { required: true, message: '请选择是否为多媒体教室', trigger: 'blur' } 
        ],
        isAvailable: [
           { required: true, message: '请选择是否可用', trigger: 'blur' }  
        ],
        buildingCode: [
           { required: true, message: '请选择', trigger: 'change' }
        ]
      },
      selectList: [],
      fileList: [],
      id: '',
      isMultimediaClassroom: ['是', '否']
    }
  },
  created(){
    this.initData();
  },
  activated () {
      this.id = this.$route.params.id || '';
      this.form = this.$route.params.row || {};
      console.log(this.form);
  },
  methods: {
    back () {
        this.$message.success('保存成功');
        this.$router.go(-1);
    },
      /**
     * 获取建筑物列表
     */
    initData () {
      getBuildingList({}).then((result) => {
        this.navdata = result.items;
      })
    },
    save(){
       this.$refs.form.validate((valid) => {
        if(!valid) return;
        if (this.id) {
            updateClassRoom(this.form).then((result) => {
                this.back();
                console.log(this.form);
            }).catch((error) => {
                this.$message.error(error.error.message);
            })
        } else {
            addClassRoom(this.form).then((result) => {
                this.back();
            }).catch((error) => {
                this.$message.error(error.error.message);
            })
        }
       });
    }
  },
  components: {
      UploadImage
  }
}
</script>
