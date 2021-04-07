<template>
    <div>
        <!-- 列表 -->
        <el-row :gutter="10">
            <el-col :span="8">
                <el-card class="t-box-card" :body-style="{height: '768px',overflowY: 'auto'}">
                    <div slot="header" class="t-box-card-header">
                        <span>组织机构</span>
                    </div>
                    <el-form class="t-operate-filter" label-width="48px" size="mini">
                        <el-form-item label="维度">
                            <el-select v-model="selectedDimension" placeholder="请选择">
                                <el-option v-for="item in dimensionList" :label="item.label" :value="item.value" :key="item.id"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                    <OrganizationTree @selectNode="haddleOrganizationNode"></OrganizationTree>
                </el-card>
            </el-col>
            
            <el-col :span="16">
                <el-card class="t-box-card mt">
                    <div slot="header" class="t-box-card-header">
                        <span>组织机构</span>
                        <div class="t-operate-buttons">
                            <el-button type="primary" size="mini" @click="addEdit()">新增子机构</el-button>
                        </div>
                    </div>

                    <el-table class="t-table-list" ref="table" border stripe size="small" tooltip-effect="dark" :data="tableData">
                        <el-table-column prop="name" label="机构名称" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="organizationNumber" label="机构代码" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="subjectionSuperiorNumber" label="所属上级" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="subjectionCampusNumber" label="所属校区" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="whetherEntity" label="是否实体" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="createYears" label="建立年月" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="principalNumber" label="负责人" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column fixed="right" label="操作" width="100" align="center">
                        <template slot-scope="scope">
                            <el-button type="text" size="small" @click="addEdit(scope.row)">编辑</el-button>
                            <el-button type="text" size="small" @click="del(scope.row)">删除</el-button>
                        </template>
                        </el-table-column>
                    </el-table>
                    <!-- <div class="t-operate-footer"> -->
                        <!-- 分页组件 -->
                        <!-- <pagination :total="total" @sizeChange="handleSize" @currentChange="handleCurrent"></pagination>
                    </div> -->
                </el-card>

                <el-dialog :title="form.id?'编辑子机构':'新增子机构'" :visible.sync="dialogFormVisible">
                        <el-form class="t-page-form t-form-block" ref="form" :model="form" :rules="rules" label-width="120px" size="small">
                            <el-form-item label="所属上级" prop="subjectionSuperiorNumber">
                                <el-input v-model="form.subjectionSuperiorNumber"></el-input>
                            </el-form-item>
                            <el-form-item label="所属校区" prop="subjectionCampusNumber">
                                <el-input v-model="form.subjectionCampusNumber"></el-input>
                            </el-form-item>
                            <el-form-item label="机构名称" prop="name">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="机构代码" prop="organizationNumber">
                                <el-input v-model="form.organizationNumber"></el-input>
                            </el-form-item>
                            <el-form-item label="机构英文名" prop="englishName">
                                <el-input v-model="form.englishName"></el-input>
                            </el-form-item>
                            <el-form-item label="机构简称" prop="abbreviation">
                                <el-input v-model="form.abbreviation"></el-input>
                            </el-form-item>
                            <el-form-item label="机构简拼" prop="logogram">
                                <el-input v-model="form.logogram"></el-input>
                            </el-form-item>
                            <el-form-item label="机构地址" prop="address">
                                <el-input v-model="form.address"></el-input>
                            </el-form-item>
                            <el-form-item label="有效标识" prop="mark">
                                <el-radio-group v-model="form.mark">
                                    <el-radio v-for="item in isList" :label="item.value" :key="item.value">{{item.value}}</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="是否实体" prop="whetherEntity">
                                <el-radio-group v-model="form.whetherEntity">
                                    <el-radio v-for="item in isList" :label="item.value" :key="item.value">{{item.value}}</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="建立年月" prop="createYears">
                                <el-date-picker v-model="form.createYears" type="date" placeholder="选择日期"></el-date-picker>
                            </el-form-item>
                            <el-form-item label="负责人" prop="principalNumber">
                                <el-input v-model="form.principalNumber"></el-input>
                            </el-form-item>
                            <el-form-item label="邮政编码" prop="postalCode">
                                <el-input v-model="form.postalCode"></el-input>
                            </el-form-item>
                            <el-form-item label="维度" prop="dimensionality">
                                <el-input v-model="form.dimensionality"></el-input>
                            </el-form-item>
                        </el-form>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="dialogFormVisible = false">取消</el-button>
                            <el-button type="primary" @click="save">保存</el-button>
                        </span>
                </el-dialog>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import { OrganizationTree } from "@/components";
import { isList } from '@/config';
import { addSchoolOrganization, 
         getSchoolOrganization, 
         updateSchoolOrganization, 
         deleteSchoolOrganization } from '@/server/school-module';
export default {
    data(){
        return{
            isList,
            selectedDimension: '',
            dialogFormVisible: false,
            selectNode: {},
            dimensionList: [{
                label: '行政维度',
                value: '1',
                id: 1
            }],
            form: {},
            tableData: [],
            rules: {
                organizationNumber: [
                    { required: true, message: '请输入机构代码', trigger: 'blur' },
                    {  max: 6, message: '字符长度必须小于6', trigger: 'blur' }
                ],
                name: [
                    { required: true, message: '请输入机构名称', trigger: 'blur' },
                    {  max: 100, message: '字符长度必须小于100', trigger: 'blur' } 
                ],
                englishName: [
                    {  max: 100, message: '字符长度必须小于100', trigger: 'blur' } 
                ],
                abbreviation: [
                    {  max: 50, message: '字符长度必须小于50', trigger: 'blur' } 
                ],
                logogram: [
                    { required: true, message: '请输入机构简拼', trigger: 'blur' },
                    {  max: 20, message: '字符长度必须小于20', trigger: 'blur' } 
                ],
                address: [
                    {  max: 180, message: '字符长度必须小于180', trigger: 'blur' } 
                ],
                subjectionSuperiorNumber: [
                    { required: true, message: '请输入隶属上级机构号', trigger: 'blur' },
                    {  max: 6, message: '字符长度必须小于6', trigger: 'blur' }
                ],
                subjectionCampusNumber: [
                    {  max: 2, message: '字符长度必须小于2', trigger: 'blur' }
                ],
                mark: [
                    { required: true, message: '请选择机构有效标识', trigger: 'change' },
                    { max: 1, message: '字符长度必须小于1', trigger: 'change' },
                ],
                whetherEntity: [
                    { required: true, message: '请选择机构是否为实体', trigger: 'change' },
                    { max: 1, message: '字符长度必须小于1', trigger: 'change' },
                ],
                postalCode: [
                    { required: true, message: '请输入机构邮政编码', trigger: 'blur' },
                    {  max: 6, message: '字符长度必须小于6', trigger: 'blur' }
                ],
                principalNumber: [
                    { required: true, message: '请输入负责人号', trigger: 'blur' },
                    {  max: 20, message: '字符长度必须小于20', trigger: 'blur' } 
                ]
            }
        }
    },
    created () {
        this.initData();
    },
    methods: {
        initData () {
            getSchoolOrganization().then((result) => {
                this.tableData = result.items;
                console.log(result.items);
            })
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
                    deleteSchoolOrganization(row.id).then((result) => {
                        this.initData();
                        this.$message.success('删除成功');
                    }).catch((error) => {
                        this.$message.error(error.error.message);
                    })
                }).catch(() => {});
        },
        /**
         * 编辑与新增子机构
         */
        addEdit(row){
            this.form = row || {};
            this.dialogFormVisible = true;
        },
        /**
         * 保存
         */
        save(){
            this.$refs.form.validate((valid) => {
                if(!valid) return;
                if (this.form.id) {
                    updateSchoolOrganization(this.form).then((result) => {
                        this.initData();
                        this.dialogFormVisible = false;
                        this.$message.success('保存成功');
                    }).catch((error) => {
                        this.$message.error(error.error.message);
                    })
                } else {
                    addSchoolOrganization(this.form).then((result) => {
                        this.initData();
                        this.dialogFormVisible = false;
                        this.$message.success('保存成功');
                    }).catch((error) => {
                        this.$message.error(error.error.message);
                    })
                }
            });
        },
        /**
         * 选择的组织结构
         */
        haddleOrganizationNode(node){
            console.log(node);
            this.selectNode = node;
        }
    },
    components: {
        OrganizationTree
    }
}
</script>

