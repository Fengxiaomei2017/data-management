<template>
    <div class="box">
        <div class="title">{{title}}</div>
    </div>
</template>
<script>
export default {
    name: "lineBar",
    props: ['title']
}
</script>
<style lang="less" scoped>
    .box {
        width: 100%;
        // margin-bottom: 10px;
        border-bottom: 1px solid rgb(228,231,237);
        background-color: #fff;
        .title {
            width: 120px;
            height: 45px;
            line-height: 45px;
            text-align: center;
            border-radius: 5px 5px 0 0;
            border: 1px solid rgb(228,231,237);
            border-bottom: none;
        }
    }
</style>