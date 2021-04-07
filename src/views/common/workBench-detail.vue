<template>
<div class="wapper">
    <home-top></home-top>
    <div class="back">个人工作台 <el-link type="primary" @click="goBack()">返回上一页</el-link></div>
    <div class="sub-title">
        <strong>GetStuBaseInfo接口请求异常</strong>
        <small>2019-02-20 02:20  数据中台</small>
    </div>
    <div class="content-box">
        <div>
            <line-bar :title=titles[0]></line-bar>
            <div class="content">点威数字校园（DW201989765）</div>
        </div>
        <div>
            <line-bar :title=titles[1]></line-bar>
            <div class="content">2019-02-20 02:15</div>
        </div>
        <div>
            <line-bar :title=titles[2]></line-bar>
            <div class="content">教务管理平台</div>
        </div>
        <div>
            <line-bar :title=titles[3]></line-bar>
            <div class="content content-3">
                
            “/”应用程序中的服务器错误。
            
            
            “=”附近有语法错误。   SQL语句:select * from XXXX where lsdf=


            说明: 执行当前 Web 请求期间，出现未经处理的异常。请检查堆栈跟踪信息，以了解有关该错误以及代码中导致错误的出处的详细信息。


            异常详细信息: System.Exception: “=”附近有语法错误。   SQL语句:select * from XXXX where lsdf=


            源错误:


            执行当前 Web 请求期间生成了未经处理的异常。可以使用下面的异常堆栈跟踪信息确定有关异常原因和发生位置的信息。


            堆栈跟踪:



            [Exception: “=”附近有语法错误。   SQL语句:select * from XXXX where lsdf=]


            FWay.Data.DataSql.GetDataTable(String sql) +401


            FWay.Data.DataSql.GetDataRow(String sql) +72


            WebRoot.Main.i_GetUserTel() +41


            WebRoot.Main.Page_Load(Object sender, EventArgs e) +513


            Sys
            tem.Web.Util.CalliEventHandlerDelegateProxy.Callback(Object sender, EventArgs e) +51


            System.Web.UI.Control.OnLoad(EventArgs e) +95


            System.Web.UI.Control.LoadRecursive() +59


            System.Web.UI.Page.ProcessRequestMain(Boolean includeStagesBeforeAsyncPoint, Boolean includeStagesAfterAsyncPoint) +2952

            </div>
        </div>
    </div>
</div>
</template>
<style lang="less" scoped>
.wapper {
    width: 92vw;
    margin: 5px auto;
    .back,.sub-title {
        margin: 20px 0;
    }
    .sub-title {
        padding: 10px 0;
        text-align: center;
        border-bottom: 1px solid rgb(215,215,215);
        strong {
            display: block;
            margin-bottom: 15px;
            font-size: 30px;
        }
        small {
            color: rgb(204,204,204);
        }
    }
    .content-box {
        margin: 0 50px;
        .content {
            margin: 20px 0;
        }
        .content-3 {
            line-height: 40px;
            background-color: rgb(245,247,250);
        }
    }
}
</style>
<script>
import { lineBar, homeTop } from "@/components";
export default {
    data () {
        return {
            titles: ['请求账户', '请求时间', '请求系统', '描述信息']
        }
    },
    components: {
        lineBar,
        homeTop
    },
    methods: {
        goBack () {
            this.$router.go(-1);
        }
    }
}
</script>
