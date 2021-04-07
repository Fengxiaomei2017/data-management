<template>
  <el-dialog class="t-dialog" :title="form.id?'编辑角色':'新增角色'" v-if="visible" :visible="visible" :close-on-click-modal="false" width="40%" @close="close">
    <el-form class="t-form-block" ref="form" :model="form" :rules="rules" label-width="120px" size="small">
      <el-form-item label="角色名称" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="是否默认权限" prop="isDefault">
        <el-radio-group v-model="form.isDefault">
            <el-radio v-for="item in valueList" :label="item.value" :key="item.label">{{item.label}}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否公共权限" prop="isPublic">
        <el-radio-group v-model="form.isPublic">
            <el-radio v-for="item in valueList" :label="item.value" :key="item.label">{{item.label}}</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button size="small" @click="close">取 消</el-button>
      <el-button type="primary" size="small" @click="save">保 存</el-button>
    </span>
  </el-dialog>
</template>
<script>
import { addRole, updateRole } from '@/server/system-module'
export default {
  props: ['dataForm', 'visible'],
  data () {
    return {
      form: {},
      rules: {
        name: [
          { required: true, message: '请输入角色名称', trigger: 'blur' },
          { max: 256, message: '字符长度必须小于256', trigger: 'blur' }
        ]
      },
      valueList: [{label: '是', value: true}, {label: '否', value: false}]
    }
  },
  watch: {
    visible (newVal) {
      if (newVal) {
        this.form = Object.assign({}, this.dataForm)
      }
    }
  },
  methods: {
    close () {
      this.$emit('update:visible', false)
    },
    save () {
      this.$refs.form.validate((valid) => {
        if (!valid) return
        if (this.form.id) {
          // 编辑
          updateRole(this.form).then((data) => {
            this.$emit('save', this.form)
            this.close()
          }).catch(msg => {
            this.$message.error(msg)
          })
        } else {
          // 新增
          addRole(this.form).then((data) => {
            this.$emit('save', this.form)
            this.close()
          }).catch(msg => {
            this.$message.error(msg)
          })
        }
      })
    }
  }
}
</script>
