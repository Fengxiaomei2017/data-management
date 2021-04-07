<template>
  <el-dialog class="t-dialog" title="管理类型" v-if="visible" :visible="visible" :close-on-click-modal="false" width="50%" @close="close">
    <el-form class="t-form-block" ref="form" :model="form" :rules="rules" size="small">
      <el-form-item prop="name">
        <el-input v-model="form.name">
            <el-button slot="append" @click="save">新增</el-button>
        </el-input>
      </el-form-item>
    </el-form>
    <el-table class="t-table-list" ref="table" border stripe size="small" tooltip-effect="dark" :data="tableData">
        <el-table-column type="index" label="序号" width="50" align="center"></el-table-column>
        <el-table-column prop="name1" label="机构类型" :show-overflow-tooltip="true" align="center"></el-table-column>
        <el-table-column fixed="right" label="操作" width="150" align="center">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="addEdit(scope.row)">编辑</el-button>
            <el-button type="text" size="small" @click="del(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
  </el-dialog>
</template>
<script>
export default {
  props:['dataForm', 'visible'],
  data () {
    return {
      form: {},
      rules: {},
      tableData: [
          {id: 1,name1: '职能部门'},
      ]
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
    addEdit(row){

    },
    del(row){
      
    },
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
