<template>
    <div>
      <el-card class="t-box-card">
        <div slot="header" class="t-box-card-header">
          <span>{{id?'编辑领导':'新增领导'}}</span>
        </div>
        <el-form class="t-page-form t-form-block" ref="form" :model="form" :rules="rules" label-width="120px" size="small">
            <el-row :gutter="50">
                <el-col :span="12">
                    <el-form-item label="领导姓名" prop="name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="分管工作" prop="name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="任职开始时间" prop="date">
                        <el-date-picker v-model="form.date" type="date" placeholder="选择日期"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="工作内容" prop="name">
                        <el-input type="textarea" v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="领导职务" prop="name">
                        <el-select v-model="form.name" placeholder="请选择">
                            <el-option v-for="item in selectList" :label="item.label" :value="item.value" :key="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="任职状态" prop="name">
                        <el-select v-model="form.name" placeholder="请选择">
                            <el-option v-for="item in selectList" :label="item.label" :value="item.value" :key="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="任职结束时间" prop="date">
                        <el-date-picker v-model="form.date" type="date" placeholder="选择日期"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="任职评价" prop="name">
                        <el-input type="textarea" v-model="form.name"></el-input>
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
export default {
  data () {
    return {
      form: {},
      rules: {},
      selectList: [],
      id: ''
    }
  },
  created(){
    this.id = this.$route.params.id;
  },
  methods: {
    save(){
       this.$refs.form.validate((valid) => {
        if(!valid) return;

        this.$message.success('保存成功');
       });
    }
  }
}
</script>