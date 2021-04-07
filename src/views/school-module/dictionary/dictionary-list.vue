<template>
    <div>
        <div class="t-operate-top">
        <!-- 查询条件 -->
        <el-form class="t-operate-filter" :inline="true" :model="conditionForm" size="small">
            <el-form-item>
            <el-input class="input-append" v-model="conditionForm.keyword" placeholder="请输入字段名或描述">
                <el-button slot="append">查询</el-button>
            </el-input>
            </el-form-item>
        </el-form>
        </div>

        <el-row :gutter="50">
            <el-col :span="8">
                <el-card class="t-box-card">
                    <div slot="header" class="t-box-card-header">
                    <span>数据字典列表</span>
                    <!-- 操作按钮 -->
                    <div class="t-operate-buttons">
                    <!-- <el-button type="primary" size="mini">导入</el-button> -->
                    <el-button type="primary" size="mini" @click="addEdit()">新增</el-button>
                    </div>
                    </div>
                    <el-radio-group v-model="radio" style="width: 100%;">
                        <div v-for="(item, index) in dictionary" :key="index" @click="clickTab(index)" style="height: 40px;line-height: 40px;">
                            <el-radio v-model="radio" :label="index + 1">{{item.name}}</el-radio>
                            <span style="float: right;">
                                <el-button size="mini" round @click.stop="addEdit(item)">编辑</el-button>
                                <el-button size="mini" round @click.stop="remove(item)">删除</el-button>
                            </span>
                        </div>
                    </el-radio-group>
                </el-card>
            </el-col>
            <el-col :span="16">
                <el-card class="t-box-card">
                    <div slot="header" class="t-box-card-header">
                        <span>数据字典条目列表</span>
                        <!-- 操作按钮 -->
                        <div class="t-operate-buttons">
                        <!-- <el-button type="primary" size="mini">导入</el-button> -->
                        <el-button type="primary" size="mini" @click="addEditEntry()">新增</el-button>
                        </div>
                    </div>

                    <!-- 表格 -->
                    <el-table class="t-table-list" ref="table" border stripe size="small" tooltip-effect="dark"
                        :data="tableData" @selection-change="handleSelectionChange">
                        <el-table-column type="selection" width="40"></el-table-column>
                        <el-table-column type="index" label="序号" width="50" align="center"></el-table-column>
                        <el-table-column prop="name" label="字典项名称" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="value" label="字典项值" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="description" label="字典项描述" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="preserveFields" label="是否是保留字段" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column fixed="right" label="操作" width="100" align="center">
                        <template slot-scope="scope">
                            <el-button type="text" size="small" @click="addEditEntry(scope.row)">编辑</el-button>
                            <el-button type="text" size="small" @click="del(scope.row)">删除</el-button>
                        </template>
                        </el-table-column>
                    </el-table>

                    <div class="t-operate-footer">
                        <!-- 批量操作 -->
                        <!-- <div class="t-batch-operate">
                        <el-checkbox v-model="isSelectAll" class="t-select-all" @change="selectAll()">全选</el-checkbox>
                        <el-button type="primary" size="mini" :disabled="!this.multipleSelection.length" @click="delMulti">删除</el-button>
                        <el-button type="primary" size="mini" :disabled="!this.multipleSelection.length" @click="exportList">导出</el-button>
                        </div> -->

                        <!-- 分页 -->
                        <!-- <el-pagination class="t-table-pagination" small background @size-change="handleSizeChange" @current-change="handleCurrentChange"
                        :current-page="currentPage" :page-sizes="pageSizes" :page-size="pageSize" :total="total"
                        layout="total, sizes, prev, pager, next, jumper"
                        ></el-pagination> -->
                    </div>
                    <add-edit :dataForm="addEditForm" :visible.sync="addEditVisible" @save="addEditSave"></add-edit>
                    
                    <!-- 增加字典项弹窗 -->
                    <el-dialog :title="form.id?'编辑数据字典条目':'新增数据字典条目'" :visible.sync="dialogFormVisible">
                        <el-form class="t-form-block" ref="form" :model="form" :rules="rules" label-width="120px" size="small">
                            <el-form-item label="字典项名称" prop="name">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="字典项值" prop="value">
                                <el-input v-model="form.value"></el-input>
                            </el-form-item>
                            <el-form-item label="字典项描述" prop="description">
                                <el-input v-model="form.description"></el-input>
                            </el-form-item>
                            <!-- <el-form-item label="是否是保留字段" prop="preserveFields">
                                <el-select v-model="form.preserveFields" placeholder="请选择">
                                    <el-option
                                        v-for="item in isAvailable"
                                        :key="item"
                                        :label="item"
                                        :value="item">
                                    </el-option>
                                </el-select>
                            </el-form-item> -->
                        </el-form>
                        <span slot="footer" class="dialog-footer">
                            <el-button size="small" @click="close">取 消</el-button>
                            <el-button type="primary" size="small" @click="save">保 存</el-button>
                        </span>
                    </el-dialog>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import { pageSizes, pageSize } from "@/config.js";
import addEdit from "./dictionary-add.vue"
import { getDataDictionary, 
         addDataDictionary, 
         deleteDataDictionary, 
         updateDataDictionary,
         deleteDictionary} from '@/server/school-module';
// import schoolServer from "@/server/school.js";
export default {
    data () {
        return {
            form: {},
            radio: 1,
            rules: {
                name: [
                    { required: true, message: '请输入字典名称', trigger: 'blur' }
                ],
                value: [
                    { required: true, message: '请输入字典代码', trigger: 'blur' }
                ]
            },
            dictionary: [],
            conditionForm: {},
            pageSizes,
            pageSize,
            currentPage: 1,
            total: 0,
            tableData: [],
            isSelectAll: false,
            multipleSelection: [],
            addEditForm: {},         // 添加编辑表单数据
            addEditVisible: false,    // 添加编辑模态框
            dialogFormVisible: false,  // 添加编辑模态框
            dataDictionaryId: '',
            dictionaryEntryId: '',
            isAvailable: ["是", "否"]
        }
    },
    components: {
        addEdit
    },
    created() {
        this.initDictionary();
    },
    methods: {
        initDictionary () {
            getDataDictionary().then((result) => {
                this.dictionary = result.items;
                this.tableData = this.dictionary[0].dictionaryEntries;
                this.dataDictionaryId = this.dictionary[0].id;
            })
        },
        clickTab(index) {
            this.tableData = this.dictionary[index].dictionaryEntries;
            this.dataDictionaryId = this.dictionary[index].id;
        },
        remove(row) {
             this.$confirm(`此操作将删除【${row.name}】数据， 是否继续？`, '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                deleteDictionary(row.id).then((result) => {
                    this.initDictionary();
                    this.$message.success("删除成功");
                }).catch(() => {
                    this.$message.error("删除失败");
                })
            })
        },
        save(){
            this.$refs.form.validate((valid) => {
                if(!valid) return;
                if (this.dictionaryEntryId) {
                    updateDataDictionary(this.dataDictionaryId, this.form).then((result) => {
                        this.dialogFormVisible = false;
                        this.tableData = result.dictionaryEntries;
                        this.$message.success("更新成功");
                    }).catch(() => {
                        this.$message.error("更新失败");
                    })
                } else {
                    addDataDictionary(this.dataDictionaryId, this.form).then((result) => {
                        this.dialogFormVisible = false;
                        this.tableData = result.dictionaryEntries;
                        this.$message.success('保存成功');
                    }).catch((error) => {
                        this.$message.error(error.error.message);
                    })
                }
            });
        },
        /**
         * 改变每页多少条
         */
        handleSizeChange (val) {
        this.pageSize = val;
        this.currentPage = 1;
        this.getList();
        },
        /**
         * 当前页数
         */
        handleCurrentChange (val) {
        this.currentPage = val;
        this.getList();
        },
        /**
         * 删除
         */
        del (row) {
            this.$confirm(`此操作将删除【${row.name}】数据， 是否继续？`, '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                deleteDataDictionary(this.dataDictionaryId, row.id).then((result) => {
                    this.tableData = result.dictionaryEntries;
                    this.$message.success('删除成功');
                }).catch((error) => {
                    this.$message.error(error.error.message);
                });
            })
        },
        /**
         * 删除多个
         */
        delMulti(){
            console.log(this.multipleSelection);
        },
        /**
         * 导出
         */
        exportList() {
            
        },
        /**
         * 全选
         */
        selectAll(){
            this.$refs.table.toggleAllSelection();
        },
        handleSelectionChange(val){
            this.multipleSelection = val;

            // 判断是否是全选
            this.isSelectAll = this.tableData.length === this.multipleSelection.length;
        },
        addEdit(row){
            this.addEditForm = row || {};
            this.addEditVisible = true;
        },
        // 新增or编辑字典条目
        addEditEntry(row) {
            this.form = row || {};
            row ? this.dictionaryEntryId = row.id : this.dictionaryEntryId = '';
            this.dialogFormVisible = true;
        },
        addEditSave(){
            this.initDictionary();
            // this.dictionary = item;

        },
        close() {
            this.dialogFormVisible = false;
        },
    }
}
</script>
