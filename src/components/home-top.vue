<template>
    <div class="top-title">
        <el-row type="flex" justify="space-between" align="bottom">
            <el-col :span="4">
                <img src="" alt="">
                <strong>统一门户</strong>
                <small>Index Portal</small>
            </el-col>
            <el-col :span="10" style="text-align: right;">
                <el-avatar :size="50" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                 新消息<el-badge class="mark" :value="12" />
                <el-button style="margin-left: 20px;">修改密码</el-button>
                <el-button type="info">退出系统</el-button>
            </el-col>
        </el-row>
    </div>
</template>
<style lang="less" scoped>
.top-title {
    padding: 10px;
    border-bottom: 1px solid rgb(211,220,230);
    strong {
        display: block;
        margin-bottom: 8px;
        font-size: 25px;
        color: rgb(68,146,195);
    }
    small {
       font-size: 15px;
       color: rgb(68,146,195); 
    }
}
</style>
<script>
export default {
    name: 'homeTop'
}
</script>
