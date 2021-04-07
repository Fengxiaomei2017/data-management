<template>
  <el-dialog class="t-dialog" :title="form.id?'编辑数据字典':'新增数据字典'" v-if="visible" :visible="visible" :close-on-click-modal="false" width="40%" @close="close">
    <el-form class="t-form-block" ref="form" :model="form" :rules="rules" label-width="120px" size="small">
      <el-form-item label="数据字典名称" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="数据值" prop="code">
        <el-input v-model="form.code"></el-input>
      </el-form-item>
      <el-form-item label="描述" prop="description">
        <el-input v-model="form.description"></el-input>
      </el-form-item>
      <!-- <el-form-item label="是否可用" prop="isAvailable">
        <el-select v-model="form.isAvailable" placeholder="请选择">
            <el-option
            v-for="item in isAvailable"
            :key="item"
            :label="item"
            :value="item">
            </el-option>
        </el-select>
      </el-form-item> -->
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button size="small" @click="close">取 消</el-button>
      <el-button type="primary" size="small" @click="save">保 存</el-button>
    </span>
  </el-dialog>
</template>
<script>
import { addDictionary, updateDictionary} from '@/server/school-module';
export default {
  props:['dataForm', 'visible'],
  data () {
    return {
      form: {},
      rules: {
        name: [
          { required: true, message: '请输入字典名称', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入字典代码', trigger: 'blur' }
        ]
      },
      isAvailable: ["是", "否"]
    }
  },
  watch: {
    visible(newVal){
      if(newVal){
        this.form = Object.assign({}, this.dataForm);
      }
    }
  },
  methods: {
    close(){
      this.$emit('update:visible', false);
    },
    save(){
       this.$refs.form.validate((valid) => {
        if(!valid) return;
        if (this.form.id) {
          updateDictionary(this.form).then((result) => {
            this.$emit('save');
            this.close();
            this.$message.success('保存成功');
          }).catch((error) => {
            this.$message.error(error.error.message);
          })
        } else {
          addDictionary(this.form).then((result) => {
            this.$emit('save');
            this.close();
            this.$message.success('保存成功');
          }).catch((error) => {
            this.$message.error(error.error.message);
          })
        }
       });
    }
  }
}
</script>
