<template>
  <el-dialog class="t-dialog" :title="form.id?'编辑用户':'新增用户'" v-if="visible" :visible="visible" :close-on-click-modal="false" width="40%" @close="close">
    <el-form class="t-form-block" ref="form" :model="form" :rules="rules" label-width="120px" size="small">
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="form.userName"></el-input>
      </el-form-item>
      <el-form-item label="姓氏" prop="surname">
        <el-input v-model="form.surname"></el-input>
      </el-form-item>
      <el-form-item label="真实名称" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="电子邮箱" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="电话号码" prop="phoneNumber">
        <el-input v-model="form.phoneNumber"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button size="small" @click="close">取 消</el-button>
      <el-button type="primary" size="small" @click="save">保 存</el-button>
    </span>
  </el-dialog>
</template>
<script>
import { addUser, updateUser } from '@/server/system-module'
export default {
  props: ['dataForm', 'visible'],
  data () {
    return {
      form: {},
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { max: 256, message: '字符长度必须小于256', trigger: 'blur' }
        ],
        name: [
          { max: 64, message: '字符长度必须小于64', trigger: 'blur' }
        ],
        surName: [
          { max: 64, message: '字符长度必须小于64', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入电子邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur'] },
          { max: 256, message: '字符长度必须小于256', trigger: 'blur' }
        ],
        phoneNumber: [
          { required: true, message: '请输入电话号码', trigger: 'blur' },
          { max: 16, message: '字符长度必须小于16', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { max: 32, message: '字符长度必须小于32', trigger: 'blur' }
        ]
      }
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
          updateUser(this.form).then((data) => {
            this.$emit('save', this.form)
            this.close()
          }).catch(msg => {
            this.$message.error(msg)
          })
        } else {
          // 新增
          addUser(this.form).then((data) => {
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
