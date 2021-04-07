<template>
    <div>
      <el-card class="t-box-card">
        <div slot="header" class="t-box-card-header">
          <span>{{id?'编辑培养方案':'新增培养方案'}}</span>
        </div>
        <el-tabs v-model="activeIndex" tab-position="left">
            <!-- 基本信息 -->
            <el-tab-pane name="1" label="基本信息">
                <el-form class="t-page-form t-form-block" ref="formInfo" :model="formInfo" :rules="rulesInfo" label-width="120px" size="small">
                    <el-row :gutter="50">
                        <el-col :span="12">
                            <el-form-item label="计划编号" prop="code">
                                <el-input v-model="formInfo.code"></el-input>
                            </el-form-item>
                            <el-form-item label="计划专业名称" prop="majorName">
                                <el-input v-model="formInfo.majorName"></el-input>
                            </el-form-item>
                            <el-form-item label="是否可用" prop="isAvailable">
                                <el-select v-model="formInfo.isAvailable" placeholder="请选择">
                                   <el-option v-for="item in isList" :label="item.value" :value="item.value" :key="item.value"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="年级" prop="setUpTime">
                                 <el-date-picker v-model="formInfo.setUpTime" format="yyyy-MM" type="date" placeholder="选择年月"></el-date-picker>
                            </el-form-item>
                            <el-form-item label="附件" prop="attachmentUrl">
                                <el-radio v-model="formInfo.attachmentUrl" label="1">允许学生查看</el-radio>
                                <UploadFile> </UploadFile>
                            </el-form-item>
                            <!-- <el-form-item label="培养方案名称" prop="name">
                                <el-input v-model="formInfo.name"></el-input>
                            </el-form-item>
                            <el-form-item label="组织机构" prop="name">
                                <el-select v-model="formInfo.name" placeholder="请选择">
                                    <el-option v-for="item in selectList" :label="item.label" :value="item.value" :key="item.id"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="专业" prop="name">
                                <el-select v-model="formInfo.name" placeholder="请选择">
                                    <el-option v-for="item in selectList" :label="item.label" :value="item.value" :key="item.id"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="年级" prop="name">
                                <el-select v-model="formInfo.name" placeholder="请选择">
                                    <el-option v-for="item in selectList" :label="item.label" :value="item.value" :key="item.id"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="附件" prop="name">
                                <el-radio v-model="formInfo.name" label="1">允许学生查看</el-radio>
                                <UploadFile> </UploadFile>
                            </el-form-item> -->
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="计划年级" prop="year">
                                <el-date-picker v-model="formInfo.year" type="date" format="yyyy-MM-dd" placeholder="选择年"></el-date-picker>
                            </el-form-item>
                            <el-form-item label="总学分要求" prop="totalCreditRequirement">
                                <el-input v-model.number="formInfo.totalCreditRequirement"></el-input>
                            </el-form-item>
                            <el-form-item label="适用学制" prop="forAcademicYear">
                                <el-input v-model.number="formInfo.forAcademicYear" class="t-input-group">
                                    <span slot="append">年</span>
                                </el-input>
                            </el-form-item>
                            <el-form-item label="培养目标" prop="trainingTarget">
                                <el-input v-model="formInfo.trainingTarget" type="textarea"></el-input>
                            </el-form-item>
                            <!-- <el-form-item label="版本" prop="name">
                                <el-date-picker v-model="formInfo.name" value-format="yyyy" type="year" placeholder="选择年"></el-date-picker>
                            </el-form-item>
                            <el-form-item label="层次" prop="name">
                                <el-select v-model="formInfo.name" placeholder="请选择">
                                    <el-option v-for="item in selectList" :label="item.label" :value="item.value" :key="item.id"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="适用学制" prop="name">
                                <el-input v-model="formInfo.name" readonly="readonly" class="t-input-group">
                                    <span slot="append">年</span>
                                </el-input>
                            </el-form-item>
                            <el-form-item label="描述" prop="name">
                                <el-input v-model="formInfo.name" type="textarea"></el-input>
                            </el-form-item> -->
                        </el-col>
                    </el-row>
                    <el-form-item>
                        <el-button type="primary" @click="saveNext1">下一步</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>

            <!-- 学分证书 -->
            <el-tab-pane name="2" label="学分证书">
                <el-card class="t-box-card">
                    <div slot="header" class="t-box-card-header">
                        <span>学分要求</span>
                        <div class="t-operate-buttons">
                            <el-button type="primary" size="mini" @click="addEditCredit()">新增</el-button>
                        </div>
                    </div>

                    <el-table class="t-table-list" ref="table" border stripe size="small" tooltip-effect="dark" :data="tableDataCredit">
                        <el-table-column prop="name1" label="课程类别" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="name2" label="要求学分" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column fixed="right" label="操作" width="100" align="center">
                        <template slot-scope="scope">
                            <el-button type="text" size="small" @click="addEditCredit(scope.row)">编辑</el-button>
                            <el-button type="text" size="small" @click="delCredit(scope.row)">删除</el-button>
                        </template>
                        </el-table-column>
                    </el-table>
                </el-card>

                <el-card class="t-box-card mt">
                    <div slot="header" class="t-box-card-header">
                        <span>证书要求</span>
                        <div class="t-operate-buttons">
                            <el-button type="primary" size="mini" @click="addEditCredential()">新增</el-button>
                        </div>
                    </div>

                    <el-table class="t-table-list" ref="table" border stripe size="small" tooltip-effect="dark" :data="tableDataCredential">
                        <el-table-column prop="name1" label="证书名称" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="name2" label="证书类型" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="name2" label="等级" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="name2" label="开始考证学期" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column fixed="right" label="操作" width="100" align="center">
                        <template slot-scope="scope">
                            <el-button type="text" size="small" @click="addEditCredential(scope.row)">编辑</el-button>
                            <el-button type="text" size="small" @click="delCredential(scope.row)">删除</el-button>
                        </template>
                        </el-table-column>
                    </el-table>
                </el-card>
                <el-button type="primary" size="small"  class="mt" @click="saveNext2">下一步</el-button>
            </el-tab-pane>

            <!-- 教学计划 -->
            <el-tab-pane name="3" label="教学计划">
                <el-card class="t-box-card mt">
                    <div slot="header" class="t-box-card-header">
                        <span>教学计划</span>
                        <div class="t-operate-buttons">
                            <el-button type="primary" size="mini" @click="searchTeaching()">新增</el-button>
                        </div>
                    </div>

                    <el-table class="t-table-list" ref="table" border stripe size="small" tooltip-effect="dark" :data="tableDataTeaching">
                        <el-table-column prop="courseCode" label="课程号" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="courseName" label="课程名称" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <!-- <el-table-column prop="name2" label="授课方式" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="name3" label="课程属性" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="name4" label="开课学期" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="name5" label="理论周学时" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="name6" label="实操周学时" :show-overflow-tooltip="true" align="center"></el-table-column> -->
                        <el-table-column prop="creditRequirement" label="学期学分" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="courseClassificationCode" label="课程分类码" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="coursePropertyCode" label="课程属性码" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="semestersToCarryOut" label="执行学期" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="prerequisiteCourse" label="预修课程" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="isPrimaryCourse" label="是否是核心课程" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <!-- <el-table-column prop="name8" label="考核方式" :show-overflow-tooltip="true" align="center"></el-table-column> -->
                        <el-table-column fixed="right" label="操作" width="100" align="center">
                        <template slot-scope="scope">
                            <el-button type="text" size="small" @click="editTeaching(scope.row)">编辑</el-button>
                            <el-button type="text" size="small" @click="delTeaching(scope.row)">删除</el-button>
                        </template>
                        </el-table-column>
                    </el-table>
                    <div class="t-operate-footer">
                        <!-- 分页组件 -->
                        <pagination :total="total" @sizeChange="handleSize" @currentChange="handleCurrent"></pagination>
                    </div>
                </el-card>
                <el-button type="primary" size="small"  class="mt" @click="saveNext3">保存</el-button>
            </el-tab-pane>
        </el-tabs>
      </el-card>

       <add-edit-credit :dataForm="addEditForm" :visible.sync="addEditCreditVisible" @save="addEditCreditSave"></add-edit-credit>
       <add-edit-credential :dataForm="addEditForm" :visible.sync="addEditCredentialVisible" @save="addEditCredentialSave"></add-edit-credential>
       <edit-teaching :planId="id || planId" :dataForm="addEditForm" :visible.sync="editTeachingVisible" @save="editTeachingSave"></edit-teaching>
       <search-teaching :visible.sync="searchTeachingVisible" :id="id || planId" @save="addTeachingSave"></search-teaching>
    </div>
</template> 
<script>
import addEditCredit from "./credit-add-edit";
import addEditCredential from "./credential-add-edit";
import editTeaching from "./teaching-edit";
import searchTeaching from "./teaching-search";
import { UploadFile } from "@/components";
import{ addTeachingPlan, updateTeachingPlan, getTeachingPlanCourseInfo, deleteTeachingPlanCourse } from "@/server/administration-module";
import { pageSize, isList } from "@/config.js";
import { pagination } from "@/components";
export default {
  data () {
    return {
      total: 0,
      pageSize,
      isList,
      activeIndex: '1',
      formInfo: {},
      rulesInfo: {
          code: [
            { required: true, message: '请输入计划编号', trigger: 'blur' },
            {  max: 5, message: '字符长度必须小于5', trigger: 'blur' }
          ],
          majorName: [
            { required: true, message: '请输入计划专业名称', trigger: 'blur' },
            {  max: 50, message: '字符长度必须小于50', trigger: 'blur' } 
          ],
          isAvailable: [
            { required: true, message: '请选择是否可用', trigger: 'change' },
          ],
          year: [
            { required: true, message: '请输入计划年级', trigger: 'blur' }
          ],
          totalCreditRequirement: [
            { required: true, message: '请输入计划专业名称', trigger: 'blur' },
            { type: 'number', message: '必须输入数字', trigger: 'blur' } 
          ],
          forAcademicYear: [
            { type: 'number', message: '必须输入数字', trigger: 'blur' } 
          ]
      },
      selectList: [],
      id: '',
      planId: '',
      tableDataCredit: [],
      tableDataCredential: [],
      tableDataTeaching: [],
      addEditForm: {},
      addEditCreditVisible: false,
      addEditCredentialVisible: false,
      editTeachingVisible: false,
      searchTeachingVisible: false,
      isAvailable: ['是', '否']
    }
  },
  activated () {
    this.id = this.$route.params.id || '';
    this.formInfo = this.$route.params.row || {};
    this.tableDataTeaching = [];
    if (this.id) this.initTeachingPlanCourseInfo();
  },
  methods: {
    // 获得教学计划课程信息列表
    initTeachingPlanCourseInfo() {
        // let data = {SkipCount: SkipCount, MaxResultCount: pageSize};
        let id = this.id || this.planId;
        if (!id) return;
        getTeachingPlanCourseInfo(id).then((result) => {
            this.tableDataTeaching = result.items;
            this.total = result.totalCount;
        })
    },
    /**
    * 接收改变后每页多少条
    */
    handleSize (SkipCount, pageSize) {
      this.initTeachingPlanCourseInfo(SkipCount, pageSize);
    },
    /**
     * 接收当前页数
     */
    handleCurrent (SkipCount, pageSize) {
      this.initTeachingPlanCourseInfo(SkipCount, pageSize);
    },
    // 学分要求
    addEditCredit(row){
        this.addEditForm = row || {};
        this.addEditCreditVisible = true;
    },
    delCredit(row){

    },
    addEditCreditSave(){
        this.$message.success('保存成功');
    },
    saveNext1(){
        this.$refs.formInfo.validate((valid) => {
            if (!valid) return;
            if (this.id) {
                updateTeachingPlan(this.formInfo).then((result) => {
                    this.activeIndex = '2'
                    this.$message.success('保存成功');
                }).catch((error) => {
                    this.$message.error(error.error.message);
                });
            } else {
                addTeachingPlan(this.formInfo).then((result) => {
                    this.activeIndex = '2'
                    this.$message.success('保存成功');
                    this.planId = result.id;
                }).catch((error) => {
                    this.$message.error(error.error.message);
                });
            }
        })
    },
    // 证书要求
    addEditCredential(row){
        this.addEditForm = row || {};
        this.addEditCredentialVisible = true;
    },
    delCredential(row){

    },
    addEditCredentialSave(){
        this.$message.success('保存成功');
    },
    saveNext2(){
       this.activeIndex = '3'
    },
    // 教学计划
    editTeaching(row){
        this.addEditForm = row || {};
        this.editTeachingVisible = true;
    },
    delTeaching(row){
        this.$confirm(`此操作将删除【${row.courseName}】课程计划数据， 是否继续？`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            let id = this.id || this.planId;
            deleteTeachingPlanCourse(id, row.id).then(() => {
                this.$message.success('删除成功');
                this.initTeachingPlanCourseInfo();
            })
        }).catch(() => {});
    },
    editTeachingSave(){
        this.$message.success('保存成功');
        this.initTeachingPlanCourseInfo();
    },
    searchTeaching(){
        if (this.planId || this.id) {
            this.searchTeachingVisible = true;
        } else {
            this.$message.error('请先设置基本信息');
        }
        
    },
    addTeachingSave(){
        this.$message.success('保存成功');
        this.initTeachingPlanCourseInfo();
    },
    saveNext3(){
       
    },
  },
  components: {
      UploadFile,
      addEditCredit,
      addEditCredential,
      editTeaching,
      searchTeaching,
      pagination
  }
}
</script>