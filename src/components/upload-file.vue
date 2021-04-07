<template>
    <el-upload ref="upload" action="/" :file-list="fileList" :auto-upload="false"
     :on-change="handdleChange" :before-upload="beforeUpload" :on-remove="handleRemove" :on-success="handleSuccess">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button class="ml" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
    </el-upload>
</template>

<script>
  export default {
    name: 'UploadFile',
    props: ['files'],
    data() {
        return {
            fileList: [] 
        };
    },
    watch: {
        files(newFiles){
            if(newFiles && newFiles.length){
               this.fileList = newFiles
            }
        }
    },
    methods: {
      submitUpload() {
        this.$refs.upload.submit();
      },
      handdleChange(file, fileList){

      },
      beforeUpload(file){

      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handleSuccess(res, file){

      }
    }
  }
</script>