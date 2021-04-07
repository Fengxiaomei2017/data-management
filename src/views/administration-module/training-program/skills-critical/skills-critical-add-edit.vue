<template>
  <el-dialog class="t-dialog" :title="form.id?'编辑技能鉴定':'新增技能鉴定'" v-if="visible" :visible="visible" :close-on-click-modal="false" width="40%" @close="close">
    <el-form class="t-form-block" ref="form" :model="form" :rules="rules" label-width="80px" size="small">
      <el-form-item label="工种名称" prop="name1">
        <el-input v-model="form.name1"></el-input>
      </el-form-item>
      <el-form-item label="证书名称" prop="name2">
        <el-input v-model="form.name2"></el-input>
      </el-form-item>
      <el-form-item label="等级" prop="name3">
        <el-input v-model="form.name3"></el-input>
      </el-form-item>
      <el-form-item label="等级状态" prop="name4">
        <el-input v-model="form.name4"></el-input>
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
      rules: {}
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
