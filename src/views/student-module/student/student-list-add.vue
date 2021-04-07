<template>
    <div>
        <el-card class="t-box-card">
            <div slot="header" class="t-box-card-header">
                <span>{{id?'编辑学生':'新增学生'}}</span>
            </div>
            <el-tabs v-model="activeIndex" tab-position="left" @tab-click="handleClick">
                <!-- 基本信息 -->
                <el-tab-pane name="1" label="基本信息">
                    <el-form class="t-page-form t-form-block" ref="baseInfor" :model="baseInfor" :rules="baseInforRules" label-width="200px" size="small">
                        <el-row :gutter="50">
                            <el-col :span="12">
                                <el-form-item label="学号" prop="studentNumber">
                                    <el-input v-model="baseInfor.studentNumber"></el-input>
                                </el-form-item>
                                <el-form-item label="英文姓名" prop="studentEnglishName">
                                    <el-input v-model="baseInfor.studentEnglishName"></el-input>
                                </el-form-item>
                                <el-form-item label="曾用名" prop="usedName">
                                    <el-input v-model="baseInfor.usedName"></el-input>
                                </el-form-item>
                                <el-form-item label="身份证号" prop="idNumber">
                                    <el-input v-model="baseInfor.idNumber"></el-input>
                                </el-form-item>
                                <el-form-item label="血型" prop="bloodTypeCode">
                                    <el-input v-model="baseInfor.bloodTypeCode"></el-input>
                                </el-form-item>
                                <el-form-item label="出生地" prop="birthplaceCode">
                                    <el-input v-model="baseInfor.birthplaceCode"></el-input>
                                    <!-- <el-select v-model="baseInfor.birthplaceCode" placeholder="请选择">
                                        <el-option v-for="item in selectList1" :label="item.label" :value="item.value" :key="item.id"></el-option>
                                    </el-select> -->
                                </el-form-item>
                                <el-form-item label="民族码" prop="nationalCode">
                                    <el-input v-model="baseInfor.nationalCode"></el-input>
                                </el-form-item>
                                <el-form-item label="信仰宗教码" prop="faithReligion">
                                    <el-input v-model="baseInfor.faithReligion"></el-input>
                                </el-form-item>
                                <el-form-item label="健康状况码" prop="healthStatusCode">
                                    <el-input v-model="baseInfor.healthStatusCode"></el-input>
                                </el-form-item>
                                <el-form-item label="户口所在地行政区划码" prop="hukouAreaNumberCode">
                                    <el-input v-model="baseInfor.hukouAreaNumberCode"></el-input>
                                </el-form-item>
                                <el-form-item label="是否是流动人口" prop="whetherItIsFloatingPopulation">
                                    <el-select v-model="baseInfor.whetherItIsFloatingPopulation" placeholder="选择">
                                        <el-option v-for="item in isList" :label="item.value" :value="item.value" :key="item.value"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="特长" prop="oneIsStrongSuit">
                                    <el-input v-model="baseInfor.oneIsStrongSuit"></el-input>
                                </el-form-item>
                                <el-form-item label="网络地址" prop="networkAddress">
                                    <el-input v-model="baseInfor.networkAddress"></el-input>
                                </el-form-item>
                                <el-form-item label="电子信箱" prop="email">
                                    <el-input v-model="baseInfor.email"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="saveNext1">下一步</el-button>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="姓名" prop="studentName">
                                    <el-input v-model="baseInfor.studentName"></el-input>
                                </el-form-item>
                                <el-form-item label="姓名拼音" prop="studentNameSpell">
                                    <el-input v-model="baseInfor.studentNameSpell"></el-input>
                                </el-form-item>
                                <el-form-item label="证件类型" prop="idTypeCode">
                                    <el-input v-model="baseInfor.idTypeCode"></el-input>
                                    <!-- <el-select v-model="baseInfor.idTypeCode" placeholder="请选择">
                                        <el-option v-for="item in selectList2" :label="item.label" :value="item.value" :key="item.id"></el-option>
                                    </el-select> -->
                                </el-form-item>
                                <el-form-item label="性别" prop="genderCode">
                                    <el-select v-model="baseInfor.genderCode" placeholder="请选择">
                                        <el-option v-for="item in genderCode" :label="item.value" :value="item.value" :key="item.value"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="出生日期" prop="dateOfBirth">
                                    <el-date-picker
                                        v-model="baseInfor.dateOfBirth"
                                        type="date"
                                        placeholder="选择日期">
                                    </el-date-picker>
                                </el-form-item>
                                <el-form-item label="籍贯" prop="nativePlace">
                                    <el-input v-model="baseInfor.nativePlace"></el-input>
                                </el-form-item>
                                <el-form-item label="婚姻状况码" prop="maritalStatusCode">
                                    <el-input v-model="baseInfor.maritalStatusCode"></el-input>
                                </el-form-item>
                                <el-form-item label="港澳台侨外码" prop="hK_Macao_TW_OC_OutlanderCode">
                                    <el-input v-model="baseInfor.hK_Macao_TW_OC_OutlanderCode"></el-input>
                                </el-form-item>
                                <el-form-item label="政治面貌码" prop="politicsStatusCode">
                                    <el-input v-model="baseInfor.politicsStatusCode"></el-input>
                                </el-form-item>
                                <el-form-item label="户口类别码" prop="hukouTypeCode">
                                    <el-select v-model="baseInfor.hukouTypeCode" placeholder="请选择">
                                        <el-option v-for="item in hukouTypeCode" :label="item.label" :value="item.value" :key="item.value"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="国籍/地区码" prop="nationalityRegionCode">
                                    <el-input v-model="baseInfor.nationalityRegionCode"></el-input>
                                </el-form-item>
                                <el-form-item label="学生联系电话" prop="studentContactNumber">
                                    <el-input v-model="baseInfor.studentContactNumber"></el-input>
                                </el-form-item>
                                <el-form-item label="即时通讯号" prop="instantMessagingNumber">
                                    <el-input v-model="baseInfor.instantMessagingNumber"></el-input>
                                </el-form-item>
                                <el-form-item label="正面免冠证件照片" prop="photo">
                                    <UploadImage></UploadImage>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </el-tab-pane>
                <!-- 家庭情况 -->
                <el-tab-pane name="2" label="家庭情况">
                    <el-form class="t-page-form t-form-block" ref="studentFamilyForm" :model="studentFamilyInfor" :rules="studentFamilyRules" label-width="120px" size="small">
                        <el-row :gutter="50">
                            <el-col :span="12">
                                <el-form-item label="家庭住址" prop="address">
                                    <el-input v-model="studentFamilyInfor.address"></el-input>
                                </el-form-item>
                                <el-form-item label="邮政编码" prop="postalCode">
                                    <el-input v-model="studentFamilyInfor.postalCode"></el-input>
                                </el-form-item>
                                <el-form-item label="家庭电话" prop="phone">
                                    <el-input v-model="studentFamilyInfor.phone"></el-input>
                                </el-form-item>
                                <el-form-item label="联系人" prop="contacts">
                                    <el-input v-model="studentFamilyInfor.contacts"></el-input>
                                </el-form-item>
                                <el-form-item label="电子邮箱" prop="email">
                                    <el-input v-model="studentFamilyInfor.email"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="saveNext2">下一步</el-button>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="家庭人口" prop="population">
                                    <el-input v-model.number="studentFamilyInfor.population"></el-input>
                                </el-form-item>
                                <el-form-item label="主要收入来源" prop="majorIncomeSource">
                                    <el-input v-model="studentFamilyInfor.majorIncomeSource"></el-input>
                                </el-form-item>
                                <el-form-item label="月收入金额" prop="monthlyIncome">
                                    <el-input type="number" v-model.number="studentFamilyInfor.monthlyIncome"></el-input>
                                </el-form-item>
                                <el-form-item label="年收入金额" prop="annualIncome">
                                    <el-input type="number" v-model.number="studentFamilyInfor.annualIncome"></el-input>
                                </el-form-item>
                                <el-form-item label="离家最近火车站" prop="nearestTrainStation">
                                    <el-input v-model="studentFamilyInfor.nearestTrainStation"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </el-tab-pane>


                <!-- 家庭成员 -->
                <el-tab-pane name="3" label="家庭成员">
                    <el-button type="primary" size="small" style="margin-bottom:10px;" @click="addEdit()">添加新成员</el-button>
                    <el-table class="t-table-list" ref="table" border stripe size="small" tooltip-effect="dark"
                        :data="familyMemberList">
                        <el-table-column type="selection" width="40"></el-table-column>
                        <el-table-column prop="name" label="姓名" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="relationCode" label="与本人关系" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="employmentUnit" label="所在单位" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="memberOccupationCode" label="家庭成员职业码" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="politicalStatusCode" label="政治面貌" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="phone" label="电话" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="mobilePhoneNumber" label="移动电话" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column fixed="right" label="操作" width="100" align="center">
                        <template slot-scope="scope">
                            <el-button type="text" size="small" @click="gotoEdit(scope.$index, scope.row)">编辑</el-button>
                            <el-button type="text" size="small" @click="delFamily(scope.row)">删除</el-button>
                        </template>
                        </el-table-column>
                    </el-table>
                    <el-button type="primary" @click="saveNext3" style="margin-top:10px; ">下一步</el-button>
                </el-tab-pane>

                <!-- 添加家庭成员列表 -->
                <el-dialog
                    title="添加新成员"
                    :visible.sync="dialogVisible"
                    width="40%">
                    <el-form class="t-page-form t-form-block" ref="studentFamilyMemberForm" :model="studentFamilyMemberInfor" :rules="studentFamilyMemberRules" label-width="120px" size="small">
                        <el-row :gutter="50">
                            <el-col :span="12">
                                <el-form-item label="姓名" prop="name">
                                    <el-input v-model="studentFamilyMemberInfor.name"></el-input>
                                </el-form-item>
                                <el-form-item label="关系码" prop="relationCode">
                                    <el-input v-model="studentFamilyMemberInfor.relationCode"></el-input>
                                </el-form-item>
                                <el-form-item label="家庭成员职业码" prop="memberOccupationCode">
                                    <el-input v-model="studentFamilyMemberInfor.memberOccupationCode"></el-input>
                                </el-form-item>
                                <el-form-item label="政治面貌码" prop="politicalStatusCode">
                                    <el-input v-model="studentFamilyMemberInfor.politicalStatusCode"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="所在单位" prop="employmentUnit">
                                    <el-input v-model="studentFamilyMemberInfor.employmentUnit"></el-input>
                                </el-form-item>
                                <el-form-item label="电话" prop="phone">
                                    <el-input v-model="studentFamilyMemberInfor.phone"></el-input>
                                </el-form-item>
                                <el-form-item label="移动电话" prop="mobilePhone">
                                    <el-input v-model="studentFamilyMemberInfor.mobilePhone"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible = false">取消</el-button>
                        <el-button type="primary" @click="saveFamily()">保存</el-button>
                    </span>
                </el-dialog>

                <!-- 学籍信息 -->
                <el-tab-pane name="4" label="学籍信息">
                    <el-form class="t-page-form t-form-block" ref="studentSchoolRollForm" :model="studentSchoolRoll" :rules="studentSchoolRollRules" label-width="120px" size="small">
                        <el-row :gutter="50">
                            <el-col :span="12">
                                <el-form-item label="入学年月" prop="enrollmentYear">
                                    <el-date-picker
                                        v-model="studentSchoolRoll.enrollmentYear"
                                        type="date"
                                        value-format="yyyy-MM-dd"
                                        placeholder="请选择">
                                    </el-date-picker>
                                </el-form-item>
                                <el-form-item label="学生类别码" prop="studentTypeCode">
                                    <el-input v-model="studentSchoolRoll.studentTypeCode"></el-input>
                                </el-form-item>
                                <el-form-item label="学制" prop="lengthOfSchooling">
                                    <el-input v-model.number="studentSchoolRoll.lengthOfSchooling"></el-input>
                                </el-form-item>
                                <el-form-item label="学生当前状态码" prop="studentStatusCode">
                                    <el-input v-model="studentSchoolRoll.studentStatusCode"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="save">保存</el-button>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="专业码" prop="professionalCode">
                                    <el-input v-model="studentSchoolRoll.professionalCode"></el-input>
                                </el-form-item>
                                <el-form-item label="所在班号" prop="classCode">
                                    <el-input v-model="studentSchoolRoll.classCode"></el-input>
                                </el-form-item>
                                <el-form-item label="所在年级" prop="gradeCode">
                                    <el-input v-model="studentSchoolRoll.gradeCode"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>
<script>
import {getStudentInfo,
        addStudent, 
        addStudentFamily,
        addStudentFamilyMemberInfo, 
        addStudentSchoolRoll,
        updateStudent,
        updateStudentFamily,
        updateStudentFamilyMemberInfo,
        updateStudentSchoolRoll,
        deleteStudentFamilyMemberInfo} from "@/server/student-module";
import { UploadImage } from "@/components";
import { isList, genderCode } from '@/config';
export default {
  data () {
    return {
      dialogVisible: false,
      form: {},
      rules: {},
      isList,
      genderCode,
      baseInfor: {},
      studentFamilyInfor: {},
      studentFamilyMemberInfor: {}, 
      studentSchoolRoll: {},
      familyMemberList: [],
      subBaseInfor: {},
      subStudentFamilyInfor: {},
      subStudentSchoolRoll: {},
      studentFamilyMemberRules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { max: 36, message: '字符长度必须小于36', trigger: 'blur' }
          ],
          relationCode: [
            { required: true, message: '请输入关系码', trigger: 'blur' },
            { max: 2, message: '字符长度必须小于2', trigger: 'blur' }
          ],
          memberOccupationCode: [
            { required: true, message: '请输入家庭成员职业码', trigger: 'blur' },
            { max: 3, message: '字符长度必须小于3', trigger: 'blur' }
          ],
          politicalStatusCode: [
            { max: 2, message: '字符长度必须小于2', trigger: 'blur' }  
          ],
          employmentUnit: [
            { max: 60, message: '字符长度必须小于60', trigger: 'blur' } 
          ],
          phone: [
            { max: 30, message: '字符长度必须小于30', trigger: 'blur' } 
          ],
          mobilePhone: [
            { max: 30, message: '字符长度必须小于30', trigger: 'blur' }  
          ]
      },
      baseInforRules: {
          studentNumber: [
            { required: true, message: '请输入学号', trigger: 'blur' },
            { max: 20, message: '字符长度必须小于20', trigger: 'blur' }
          ],
          studentName: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { max: 36, message: '字符长度必须小于36', trigger: 'blur' }
          ],
          studentEnglishName: [
            { max: 60, message: '字符长度必须小于60', trigger: 'blur' }  
          ],
          studentNameSpell: [
            { required: true, message: '请输入姓名拼音', trigger: 'blur' },
            { max: 60, message: '字符长度必须小于60', trigger: 'blur' } 
          ],
          idNumber: [
            { required: true, message: '请输入身份证件号', trigger: 'blur' },
            { max: 20, message: '字符长度必须小于20', trigger: 'blur' }  
          ],
          usedName: [
            { max: 36, message: '字符长度必须小于36', trigger: 'blur' }  
          ],
          idTypeCode: [
            { required: true, message: '请输入身份证件类型码', trigger: 'blur' },
            { max: 1, message: '字符长度必须小于1', trigger: 'blur' }  
          ],
          genderCode: [
            { required: true, message: '请输入性别码', trigger: 'change' },
            { max: 1, message: '字符长度必须小于1', trigger: 'change' }  
          ],
          bloodTypeCode: [
            { max: 1, message: '字符长度必须小于1', trigger: 'blur' }  
          ],
          dateOfBirth: [
            { required: true, message: '请输入出生日期', trigger: 'blur' } 
          ],
          birthplaceCode: [
            { required: true, message: '请输入出生地码', trigger: 'blur' },
            { max: 6, message: '字符长度必须小于1', trigger: 'blur' }   
          ],
          nativePlace: [
            { required: true, message: '请输入籍贯', trigger: 'blur' },
            { max: 20, message: '字符长度必须小于20', trigger: 'blur' }  
          ],
          nationalCode: [
            { required: true, message: '请输入民族码', trigger: 'blur' },
            { max: 2, message: '字符长度必须小于2', trigger: 'blur' } 
          ],
          maritalStatusCode: [
            { required: true, message: '请输入婚姻状况码', trigger: 'blur' },
            { max: 2, message: '字符长度必须小于2', trigger: 'blur' }  
          ],
          faithReligion: [
            { max: 2, message: '字符长度必须小于2', trigger: 'blur' }  
          ],
          hK_Macao_TW_OC_OutlanderCode: [
            { max: 2, message: '字符长度必须小于2', trigger: 'blur' }  
          ],
          healthStatusCode: [
            { max: 1, message: '字符长度必须小于1', trigger: 'blur' }   
          ],
          politicsStatusCode: [
            { required: true, message: '请输入政治面貌码', trigger: 'blur' },
            { max: 2, message: '字符长度必须小于2', trigger: 'blur' }  
          ],
          hukouAreaNumberCode: [
            { required: true, message: '请输入户口所在地行政区划码', trigger: 'blur' },
            { max: 6, message: '字符长度必须小于6', trigger: 'blur' }   
          ],
          hukouTypeCode: [
            { required: true, message: '请输入户口类别码', trigger: 'change' },
            { max: 1, message: '字符长度必须小于1', trigger: 'change' }  
          ],
          whetherItIsFloatingPopulation: [
            { required: true, message: '请选择是否为流动人口', trigger: 'change' },
            { max: 1, message: '字符长度必须小于1', trigger: 'change' } 
          ],
          nationalityRegionCode: [
            { max: 3, message: '字符长度必须小于3', trigger: 'blur' }   
          ],
          studentContactNumber: [
            { max: 30, message: '字符长度必须小于30', trigger: 'blur' }
          ],
          networkAddress: [
            { max: 60, message: '字符长度必须小于60', trigger: 'blur' }  
          ],
          instantMessagingNumber: [
            { max: 40, message: '字符长度必须小于40', trigger: 'blur' }  
          ],
          email: [
            { max: 40, message: '字符长度必须小于40', trigger: 'blur' }  
          ]
      },
      studentFamilyRules: {
          address: [
            { required: true, message: '请输入家庭住址', trigger: 'blur' },
            { max: 180, message: '字符长度必须小于180', trigger: 'blur' }
          ],
          postalCode: [
            { required: true, message: '请输入家庭邮政编码', trigger: 'blur' },
            { max: 6, message: '字符长度必须小于6', trigger: 'blur' }
          ],
          phone: [
            { max: 30, message: '字符长度必须小于30', trigger: 'blur' }  
          ],
          contacts: [
            { required: true, message: '请输入家庭联系人姓名', trigger: 'blur' },
            { max: 36, message: '字符长度必须小于36', trigger: 'blur' }  
          ],
          email: [
            { max: 40, message: '字符长度必须小于40', trigger: 'blur' }    
          ],
          population: [
            { type: 'number', message: '必须为数字', trigger: 'blur' }    
          ],
          nearestTrainStation: [
            { max: 30, message: '字符长度必须小于30', trigger: 'blur' }    
          ]
      },
      studentSchoolRollRules: {
        enrollmentYear: [
            { required: true, message: '请输入入学年月', trigger: 'blur' }
        ],
        studentTypeCode: [
            { required: true, message: '请输入学生类别码', trigger: 'blur' },
            { max: 5, message: '字符长度必须小于5', trigger: 'blur' }
        ],
        lengthOfSchooling: [
            { type: 'number', message: '请输入数字', trigger: 'blur' }
        ],
        professionalCode: [
          { max: 6, message: '字符长度必须小于6', trigger: 'blur' }  
        ],
        classCode: [
          { max: 10, message: '字符长度必须小于10', trigger: 'blur' }   
        ],
        gradeCode: [
          { max: 4, message: '字符长度必须小于4', trigger: 'blur' }  
        ],
        studentStatusCode: [
          { required: true, message: '请输入学生当前状态码', trigger: 'blur' },
          { max: 2, message: '字符长度必须小于2', trigger: 'blur' }  
        ]
      },
      hukouTypeCode: [
          {value: '0', label: '未落常住户'},
          {value: '1', label: '非农业家庭'},
          {value: '2', label: '农业家庭户口'}
      ],
      selectList1: [],
      selectList2: [],
      selectList3: [],
      activeIndex: '1',
      id: '',
      studentId: '',
      studentFamilyMemberId: '',
      value1: '',
      isFloatingPopulation: '',
      studentData: {},
      index: -1
    }
  },
  activated () {
    this.baseInfor = {};
    this.studentFamilyInfor = {};
    this.studentFamilyMemberInfor = {};
    this.studentSchoolRoll = {};
    this.familyMemberList = [];
    this.id = this.$route.params.id;
    if(this.id) this.initForm();
  },
//   created(){
//     this.id = this.$route.params.id;
//     if(this.id) this.initForm();
//   },
  methods: {
    initForm() {
        getStudentInfo(this.id).then((result) => {
           //  学生全部信息
           this.studentData = result;
           this.baseInfor = Object.assign({}, result);
           this.subBaseInfor = Object.assign({}, result);
           if (result.family) {
                this.studentFamilyInfor = Object.assign({}, result.family);
                this.subStudentFamilyInfor = Object.assign({}, result.family);
           }
           if (result.family) {
               //  家庭成员列表
               this.familyMemberList = result.family.familyMemberInfos;
            }
            if (result.schoolRoll) {
                this.studentSchoolRoll = Object.assign({}, result.schoolRoll);
                this.subStudentSchoolRoll = Object.assign({}, result.schoolRoll);
            }
        })
    },
    handleClick(tab) {
        let index = tab.name;
        if (index !== '1' && !this.id) {
            this.$message.error('请先填写基本信息');
        }
    },
    // 跳转方法
    next(num) {
         this.$message.success('保存成功');
         this.activeIndex = num
    },
    // 基本信息
    saveNext1(){
        if (this.id && JSON.stringify(this.baseInfor) === JSON.stringify(this.subBaseInfor)) {
            this.activeIndex = '2';
            return;
        }
        this.$refs.baseInfor.validate((valid) => {
            if(!valid) return;
            // 更新基本信息
            if (this.id) {
                this.baseInfor.id = this.id;
                updateStudent(this.baseInfor).then((result) => {
                    this.next('2');
                 })
            } else {
                // 添加基本信息
                addStudent(this.baseInfor).then((result) => {
                    this.id = result.id;
                    this.next('2');
                }).catch((error) => {
                    this.$message.error(error.error.message);
                })
            }
        })
    },
    // 家庭情况
    saveNext2(){
        if (this.id && JSON.stringify(this.studentFamilyInfor) === JSON.stringify(this.subStudentFamilyInfor)) {
            this.activeIndex = '3';
            return;
        }
       if (this.id || this.studentId) {
            this.$refs.studentFamilyForm.validate((valid) => {
                if(!valid) return;
                // 更新家庭情况
                if (this.id && this.studentData.family != undefined || this.studentData.family != null) {
                    this.studentFamilyInfor.id = this.id;
                    updateStudentFamily(this.studentFamilyInfor).then((result) => {
                        this.next('3');
                    }).catch((error) => {
                        this.$message.error(error.error.message);
                    })
                } else {
                    // 添加家庭情况
                    this.studentFamilyInfor.id = this.studentId || this.id;
                    addStudentFamily(this.studentFamilyInfor).then((result) => {
                        this.next('3');
                    }).catch((error) => {
                        this.$message.error(error.error.message);
                    })
                }
            })
       } else {
          this.$message.error('请先填写基本信息');
       }
    },
    // 添加或修改新成员
    saveFamily() {
        if (this.id || this.studentId) {
            this.$refs.studentFamilyMemberForm.validate((valid) => {
                if(!valid) return;
                // 更新新成员
                if (this.id && this.studentFamilyMemberId && this.index > -1) {
                    this.studentFamilyMemberInfor.id = this.id;
                    updateStudentFamilyMemberInfo(this.id, this.studentFamilyMemberId, this.studentFamilyMemberInfor).then((result) => {
                       this.$message.success('保存成功');
                       this.initForm();
                       this.dialogVisible = false;
                    }).catch((error) => {
                        this.$message.error(error.error.message);
                    })
                } else {
                    // 添加新成员
                    this.initForm();
                    this.studentFamilyMemberInfor.id = this.studentId || this.id;
                    addStudentFamilyMemberInfo(this.studentFamilyMemberInfor).then((result) => {
                        this.$message.success('保存成功');
                        this.initForm();
                        this.dialogVisible = false;
                    }).catch((error) => {
                        this.$message.error(error.error.message);
                    })
                }
            })
        } else {
           this.$message.error('请先填写基本信息');
        }
    },
    // 家庭成员
    saveNext3(){
       this.activeIndex = '4'
    },
    // 学籍信息
    save(){
        if (this.id && JSON.stringify(this.studentSchoolRoll) === JSON.stringify(this.subStudentSchoolRoll)) {
            this.$router.go(-1);
            return;
        };
       if (this.id || this.studentId) {
            this.$refs.studentSchoolRollForm.validate((valid) => {
                if(!valid) return;
                // 更新学籍信息
                if (this.id && this.studentData.schoolRoll != undefined || this.studentData.schoolRoll != null) {
                    this.studentSchoolRoll.id = this.id;
                    updateStudentSchoolRoll(this.studentSchoolRoll).then((result) => {
                        this.$message.success('保存成功');
                        this.$router.go(-1);
                    }).catch((error) => {
                        this.$message.error(error.error.message);
                    })
                } else {
                    // 添加学籍信息
                    this.studentSchoolRoll.id = this.id || this.studentId;
                    addStudentSchoolRoll(this.studentSchoolRoll).then((result) => {
                        this.$message.success('保存成功');
                        this.$router.go(-1);
                    }).catch((error) => {
                        this.$message.error(error.error.message);
                    })
                }
            })
       } else {
          this.$message.error('请先填写基本信息'); 
       }
    },
    addEdit() {
        if (this.id || this.studentId) {
            this.dialogVisible = true;
            this.familyMemberInformation = {};
        } else {
            this.$message.error('请先设置基本信息');
        }
    },
    gotoEdit(index, row) {
        this.index = index;
        this.studentFamilyMemberInfor = row;
        this.studentFamilyMemberId = row.id;
        this.dialogVisible = true;
    },
    delFamily(row) {
        this.$confirm(`此操作将删除【${row.name}】数据， 是否继续？`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            let id = this.id || this.studentId;
            deleteStudentFamilyMemberInfo(id, row.id).then((result) => {
                this.$message.success('删除成功');
                this.initForm();
            }).catch((error) => {
                this.$message.error(error.error.message);
            })
        }).catch(() => {});
    }
  },
  components: {
    UploadImage
  }
}
</script>