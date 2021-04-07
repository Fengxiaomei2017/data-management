<template>
    <div style="background-color: #fff;">
        <div slot="header" class="t-box-card-header" style="padding: 20px 0 0 20px;">
            <span>GetStuBaseInfo</span>
        </div>
        <div class="card-list">
            <el-tabs type="card">
                <line-bar :title=titles[0]></line-bar>
                <div class="content">获取学生的基本信息，包括学生、姓名、身份证号等基本信息。</div>
            </el-tabs>
            <el-tabs type="card">
                <line-bar :title=titles[1]></line-bar>
                <div class="content">
                    <a href='#'>http://XXXX.com/datacenter/GetStuBaseInfo</a>
                </div>
            </el-tabs>
            <el-tabs type="card">
                <line-bar :title=titles[2]></line-bar>
                <div class="content">不需要</div>
            </el-tabs>
            <el-tabs type="card">
                <line-bar :title=titles[3]></line-bar>
                <div class="content">
                        <el-table :row-class-name="tableRowClassName" :data="tableData1" border size="small">
                            <el-table-column prop="name1" label="字段名"  align="center"></el-table-column>
                            <el-table-column prop="name2" label="变量名" align="center"></el-table-column>
                            <el-table-column prop="name3" label="必填"  align="center"></el-table-column>
                            <el-table-column prop="name4" label="类型" align="center"></el-table-column>
                            <el-table-column prop="name5" label="示例值" align="center"></el-table-column>
                            <el-table-column prop="name6" label="描述" align="center"></el-table-column>
                        </el-table>
                </div>
                <div style="margin-left: 10px;">
                    <p>举例说明</p>
                    <ul class="exmple">
                        <li>{</li>
                        <li> &nbsp;&nbsp;"StudentID":"20169877667",</li>
                        <li> &nbsp;&nbsp;"字段1":"1008450740201411110005820873",</li>
                        <li> &nbsp;&nbsp; "字段2":"FDD167FAA73459FD921B144BAF4F4CA2"</li>
                        <li>}</li>
                    </ul>
                </div>
            </el-tabs>
            <el-tabs type="card">
                <line-bar :title=titles[4]></line-bar>
                <div class="content">
                        <el-table class="t-table-list" :row-class-name="tableRowClassName" ref="table" :data="tableData2" border stripe size="small" tooltip-effect="dark">
                            <el-table-column prop="name1" label="字段名" :show-overflow-tooltip="true" align="center"></el-table-column>
                            <el-table-column prop="name2" label="变量名" :show-overflow-tooltip="true" align="center"></el-table-column>
                            <el-table-column prop="name3" label="必填" :show-overflow-tooltip="true" align="center"></el-table-column>
                            <el-table-column prop="name4" label="类型" :show-overflow-tooltip="true" align="center"></el-table-column>
                            <el-table-column prop="name5" label="示例值" :show-overflow-tooltip="true" align="center"></el-table-column>
                            <el-table-column prop="name6" label="描述" :show-overflow-tooltip="true" align="center"></el-table-column>
                        </el-table>
                        <div>
                            <p style="margin-top: 25px;">以下字段在return_code为SUCCESS的时候有返回</p>
                            <el-table class="t-table-list" :row-class-name="tableRowClassName" ref="table" :data="tableData3" border stripe size="small" tooltip-effect="dark">
                                <el-table-column prop="name1" label="字段名" :show-overflow-tooltip="true" align="center"></el-table-column>
                                <el-table-column prop="name2" label="变量名" :show-overflow-tooltip="true" align="center"></el-table-column>
                                <el-table-column prop="name3" label="必填" :show-overflow-tooltip="true" align="center"></el-table-column>
                                <el-table-column prop="name4" label="类型" :show-overflow-tooltip="true" align="center"></el-table-column>
                                <el-table-column prop="name5" label="示例值" :show-overflow-tooltip="true" align="center"></el-table-column>
                                <el-table-column prop="name6" label="描述" :show-overflow-tooltip="true" align="center"></el-table-column>
                            </el-table>
                        </div>
                </div>
            </el-tabs>
            <el-tabs type="card">
                <line-bar :title=titles[5]></line-bar>
                <div class="content">
                        <el-table class="t-table-list" :row-class-name="tableRowClassName" ref="table" :data="tableData4" border stripe size="small" tooltip-effect="dark">
                            <el-table-column prop="name1" label="名称" :show-overflow-tooltip="true" align="center"></el-table-column>
                            <el-table-column prop="name2" label="描述" :show-overflow-tooltip="true" align="center"></el-table-column>
                            <el-table-column prop="name3" label="原因" :show-overflow-tooltip="true" align="center"></el-table-column>
                            <el-table-column prop="name4" label="解决方案" :show-overflow-tooltip="true" align="center"></el-table-column>
                        </el-table>
                </div>
            </el-tabs>
        </div>
        <div class="right-nav">
            <div ref="rightNav" v-if="isShow">
                <el-menu
                    default-active="1"
                    class="el-menu-vertical-demo">
                    <el-menu-item index="1"><a href="#name1"></a><span>描述</span></el-menu-item>
                    <el-menu-item index="2"><a href="#name2"></a><span>接口链接</span></el-menu-item>
                    <el-menu-item index="3"><a href="#name3"></a><span>是否需要证书</span></el-menu-item>
                    <el-menu-item index="3"><a href="#name4"></a><span>请求参数</span></el-menu-item>
                    <el-menu-item index="4"><a href="#name5"></a><span>返回结果</span></el-menu-item>
                    <el-menu-item index="5"><a href="#name6"></a><span>错误码</span></el-menu-item>
                </el-menu>
                <el-menu
                    class="el-menu-vertical-demo"
                    style="border-top: 5px solid #e7e8e8;">
                    <el-menu-item index="1"><span @click="back">返回上一页</span></el-menu-item>
                    <el-menu-item index="2"><span>返回顶部</span></el-menu-item>
                    <el-menu-item index="3"><span @click="hidden">收起侧边栏</span></el-menu-item>
                </el-menu>
            </div>
            <div v-else>
                <p class="hidden" @click="show">
                    展开侧边栏
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import { lineBar } from "@/components";
export default {
    data() {
        return {
            titles: ['描述', '接口链接', '是否需要证书', '请求参数', '返回结果', '错误码'],
            isShow: true,
            tableData: {},
            tableData1: [{
                name1: '学号',
                name2: 'StudentID',
                name3: '',
                name4: 'String(32)',
                name5: '20169877667',
                name6: '学生的学籍号'
            }, {
                name1: '身份证号',
                name2: 'StudentID',
                name3: '',
                name4: 'String(32)',
                name5: '20169877667',
                name6: '学生的身份号'
            }, {
                name1: '学生联系电话',
                name2: 'StudentID',
                name3: '',
                name4: 'String(32)',
                name5: '20169877667',
                name6: '学生的联系电话'
            }],
            tableData2: [{
                name1: '返回状态码',
                name2: 'return_code',
                name3: '是',
                name4: 'String(16)',
                name5: 'SUCCESS',
                name6: 'SUCCESS/FAIL，代表通信请求是否成功'
            }, {
                name1: '返回信息',
                name2: 'return_msg',
                name3: '是',
                name4: 'String(128)',
                name5: 'OK',
                name6: `当return_code为FAIL时返回信息为错误原因 ，例如参数格式校验错误`
            }],
            tableData3: [{
                name1: '学号',
                name2: 'XH',
                name3: '是',
                name4: 'String(16)',
                name5: '',
                name6: ''
            }, {
                name1: '姓名',
                name2: 'XM',
                name3: '是',
                name4: 'String(128)',
                name5: '',
                name6: ''
            },
            {
                name1: '英文姓名',
                name2: 'YWXM',
                name3: 'f否',
                name4: 'String(16)',
                name5: '',
                name6: ''
            }, {
                name1: '姓名拼音',
                name2: 'XMPY',
                name3: '否',
                name4: 'String(128)',
                name5: '',
                name6: ''
            },{
                name1: '曾用名',
                name2: 'CYM',
                name3: '否',
                name4: 'String(16)',
                name5: '',
                name6: ''
            }, {
                name1: '身份证件类',
                name2: 'SFZJLXH',
                name3: '是',
                name4: 'String(128)',
                name5: '',
                name6: ''
            },{
                name1: '身份证件号',
                name2: 'SFZJH',
                name3: '是',
                name4: 'String(16)',
                name5: '',
                name6: ''
            }, {
                name1: '性别码',
                name2: 'XBM',
                name3: '否',
                name4: 'String(128)',
                name5: '',
                name6: ''
            },
            {
                name1: '血型码',
                name2: 'XXM',
                name3: '否',
                name4: 'String(16)',
                name5: '',
                name6: ''
            }, {
                name1: '出生日期',
                name2: 'CSRQ',
                name3: '否',
                name4: 'String(128)',
                name5: '',
                name6: ''
            },{
                name1: '出生地码',
                name2: 'CSDM',
                name3: '否',
                name4: 'String(16)',
                name5: '',
                name6: ''
            }, {
                name1: '籍贯',
                name2: 'JG',
                name3: '是',
                name4: 'String(128)',
                name5: '',
                name6: ''
            }, {
                name1: '民族码',
                name2: 'MZM',
                name3: '是',
                name4: 'String(128)',
                name5: '',
                name6: ''
            },{
                name1: '婚姻状况码',
                name2: 'HYZHM',
                name3: '否',
                name4: 'String(16)',
                name5: '',
                name6: ''
            }, {
                name1: '特长',
                name2: 'TC',
                name3: '否',
                name4: 'String(128)',
                name5: '',
                name6: ''
            },
            {
                name1: '学生联系电话',
                name2: 'XSLXM',
                name3: '是',
                name4: 'String(16)',
                name5: '',
                name6: ''
            }, {
                name1: '即时通讯号',
                name2: 'JSTX',
                name3: '否',
                name4: 'String(128)',
                name5: '',
                name6: ''
            },{
                name1: '电子信箱',
                name2: 'DZXX',
                name3: '否',
                name4: 'String(16)',
                name5: '',
                name6: ''
            }, {
                name1: '照片',
                name2: 'ZP',
                name3: '否',
                name4: 'String(128)',
                name5: '',
                name6: ''
            },
            {
                name1: '业务结果',
                name2: 'YWJG',
                name3: '是',
                name4: 'String(16)',
                name5: '',
                name6: ''
            }, {
                name1: '错误代码',
                name2: 'CWDM',
                name3: '否',
                name4: 'String(128)',
                name5: '',
                name6: ''
            },{
                name1: '错误代码描述  ',
                name2: 'CWDMMX',
                name3: '否',
                name4: 'String(16)',
                name5: '',
                name6: ''
            }],
            tableData4: [{
                name1: 'SYSTEMERROR',
                name2: '系统错误',
                name3: '后台系统返回错误',
                name4: '系统异常，请再调用发起查询'
            }, {
                name1: 'Studdent_idnotFind',
                name2: '学号未找到',
                name3: '接口返回错误',
                name4: '请核实该学生ID在系统中是否存在'
            }],
        }
    },
    components: {
        lineBar
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        back() {
            this.$router.go(-1);
        },
        hidden() {
            this.isShow = !this.isShow
        },
        show() {
            this.isShow = !this.isShow
        },
        tableRowClassName({row, rowIndex}) {
            if (rowIndex === 1) {
            return 'warning-row';
            } else if (rowIndex === 3) {
            return 'success-row';
            }
            return '';
        }
    }
}
</script>
<style lang="less" scoped>
    .card-list {
        width: 80%;
        padding: 20px;
        .content {
            font-size: 12px;
            padding: 20px;
        }
    }
    .el-tabs--card>.el-tabs__header .el-tabs__item.is-active,.el-tabs--card>.el-tabs__header .el-tabs__item {
        border-bottom-color:#e4e7ed !important; 
    }
    .el-tabs--card>.el-tabs__header .el-tabs__item:first-child {
        border-left: .5px solid #e4e7ed;
    }
    
    .right-nav {
        position: fixed;
        z-index: 999;
        top: 30%;
        left: 85%;
        border: 5px solid #e7e8e8;
    }
    .hidden {
        width: 20px;
        padding: 8px 5px;
        text-align: center;
    }
    .el-tabs__item.is-active {
        color: #000 !important;
    }
    .exmple {
        list-style-type: none;
        margin: 20px 0;
        padding: 20px;
        border: 1px solid #e7e8e8;
        font-size: 12px;
        li {
            margin-top: 5px;
        }
    }
    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }
</style>