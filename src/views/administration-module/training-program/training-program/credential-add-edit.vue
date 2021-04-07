<template>
  <el-dialog class="t-dialog" :title="form.id?'编辑证书要求':'新增证书要求'" v-if="visible" :visible="visible" :close-on-click-modal="false" width="40%" @close="close">
    <el-form class="t-form-block" ref="form" :model="form" :rules="rules" label-width="80px" size="small">
      <el-form-item label="证书名称" prop="name1">
        <el-select v-model="form.name1" placeholder="请选择">
            <el-option v-for="item in selectList" :label="item.label" :value="item.value" :key="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="要求等级" prop="name2">
        <el-select v-model="form.name1" placeholder="请选择">
            <el-option v-for="item in selectList" :label="item.label" :value="item.value" :key="item.id"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button size="small" @click="close">取 消</el-button>
      <el-button type="primary" size="small" @click="save">保 存</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  props:['dataForm', 'visible'],
  data () {
    return {
      form: {},
      rules: {},
      selectList: []
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

        this.$emit('save', this.form);
        this.close();
       });
    }
  }
}
</script>
