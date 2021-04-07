<template>
    <div>
      <el-card class="t-box-card">
        <div slot="header" class="t-box-card-header">
          <span>{{id?'编辑专业方向':'新增专业方向'}}</span>
        </div>
        <el-form class="t-page-form t-form-block" ref="form" :model="form" :rules="rules" label-width="120px" size="small">
            <el-row :gutter="50">
                <el-col :span="12">
                    <el-form-item label="所属专业" prop="name">
                        <el-select v-model="form.name" placeholder="请选择">
                            <el-option v-for="item in selectList" :label="item.label" :value="item.value" :key="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="专业分类" prop="name">
                        <el-select v-model="form.name" placeholder="请选择">
                            <el-option v-for="item in selectList" :label="item.label" :value="item.value" :key="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="专业方向名称" prop="name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="学制" prop="name">
                        <el-select v-model="form.name" placeholder="请选择">
                            <el-option v-for="item in selectList" :label="item.label" :value="item.value" :key="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="专业方向描述" prop="name">
                        <el-input type="textarea" v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="办学层次" prop="name">
                        <el-select v-model="form.name" placeholder="请选择">
                            <el-option v-for="item in selectList" :label="item.label" :value="item.value" :key="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="方向代码" prop="name">
                         <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="专业方向简称" prop="name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="状态" prop="name">
                        <el-select v-model="form.name" placeholder="请选择">
                            <el-option v-for="item in selectList" :label="item.label" :value="item.value" :key="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="所属机构" prop="name">
                        <el-popover placement="bottom" title="选择开设机构" trigger="click">
                            <OrganizationTreeSearch @selectNode="handdleSearchNode"></OrganizationTreeSearch>
                            <el-input slot="reference" v-model="form.name"></el-input>
                        </el-popover>
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
import { OrganizationTreeSearch } from "@/components";
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