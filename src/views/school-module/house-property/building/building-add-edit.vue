<template>
    <div>
      <el-card class="t-box-card">
        <div slot="header" class="t-box-card-header">
          <span>{{id?'编辑建筑物':'新增建筑物'}}</span>
        </div>
        <el-form class="t-page-form t-form-block" ref="form" :model="form" :rules="rules" label-width="220px" size="small">
            <el-row :gutter="50">
                <el-col :span="12">
                    <el-form-item label="建筑物代码" prop="code">
                        <el-input v-model="form.code"></el-input>
                    </el-form-item>
                    <el-form-item label="卫生保健室面积" prop="healthCareRoomArea">
                        <el-input type="number" v-model.number="form.healthCareRoomArea"></el-input>
                    </el-form-item>           
                    <el-form-item label="房屋产权" prop="housingPropertyRightCode">
                        <!-- <el-select v-model="form.housingPropertyRightCode" placeholder="请选择">
                            <el-option v-for="item in selectList" :label="item.label" :value="item.value" :key="item.id"></el-option>
                        </el-select> -->
                        <el-input v-model="form.housingPropertyRightCode"></el-input>
                    </el-form-item>
                    <el-form-item label="建筑物结构" prop="structureCode">
                        <el-input v-model="form.structureCode"></el-input>
                    </el-form-item>
                    <el-form-item label="总建筑面积" prop="totalArea">
                        <el-input type="number" v-model.number="form.totalArea"></el-input>
                    </el-form-item>
                    <el-form-item label="总使用面积" prop="totalUsedArea">
                        <el-input type="number" v-model.number="form.totalUsedArea"></el-input>
                    </el-form-item>
                    <el-form-item label="抗震设防烈度码" prop="seismicFortificationIntensityCode">
                        <el-input v-model="form.seismicFortificationIntensityCode"></el-input>
                    </el-form-item>
                    <el-form-item label="抗震设防标准码" prop="seismicFortificationStandardCode">
                        <el-input v-model="form.seismicFortificationStandardCode"></el-input>
                    </el-form-item>
                    <el-form-item label="产权证号" prop="propertyRightCardNumber">
                        <el-input v-model="form.propertyRightCardNumber"></el-input>
                    </el-form-item>
                    <el-form-item label="是否有构造柱" prop="hasConstructionPillar">
                        <el-input v-model="form.hasConstructionPillar"></el-input>
                    </el-form-item>
                    <el-form-item label="圈梁" prop="hasRingBeam">
                        <el-input v-model="form.hasRingBeam"></el-input>
                    </el-form-item>
                    <el-form-item label="教学及辅助用房总面积" prop="teachingAuxiliaryRoomArea">
                        <el-input type="number" v-model.number="form.teachingAuxiliaryRoomArea"></el-input>
                    </el-form-item>
                    <el-form-item label="教室面积" prop="classRoomArea">
                        <el-input type="number" v-model.number="form.classRoomArea"></el-input>
                    </el-form-item>
                    <el-form-item label="实验室面积" prop="laboratoryArea">
                        <el-input type="number" v-model.number="form.laboratoryArea"></el-input>
                    </el-form-item>
                    <el-form-item label="图书室面积" prop="libraryArea">
                        <el-input type="number" v-model.number="form.libraryArea"></el-input>
                    </el-form-item>
                    <el-form-item label="微机室面积" prop="computerLabArea">
                        <el-input type="number" v-model.number="form.computerLabArea"></el-input>
                    </el-form-item>
                    <el-form-item label="语音室面积" prop="languageLabArea">
                        <el-input type="number" v-model.number="form.languageLabArea"></el-input>
                    </el-form-item>
                    <el-form-item label="体育活动室面积" prop="sportsRoomArea">
                        <el-input type="number" v-model.number="form.sportsRoomArea"></el-input>
                    </el-form-item>
                    <el-form-item label="其他教辅用房面积" prop="otherTeachingAuxiliaryRoom">
                        <el-input type="number" v-model.number="form.otherTeachingAuxiliaryRoom"></el-input>
                    </el-form-item>
                    <el-form-item label="归属校区" prop="campusCode">
                        <el-input v-model="form.campusCode"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="建筑物名称" prop="name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="层数" prop="numberOfFloors">
                        <el-input v-model.number="form.numberOfFloors" class="t-input-group">
                            <span slot="append">层</span>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="使用状态" prop="usageStatusCode">
                        <el-input v-model="form.usageStatusCode"></el-input>
                    </el-form-item>
                    <el-form-item label="建筑物分类" prop="classificationCode">
                        <el-input v-model="form.classificationCode"></el-input>
                    </el-form-item>
                    <el-form-item label="建筑物地址" prop="address">
                        <el-input v-model="form.address"></el-input>
                    </el-form-item>
                    <el-form-item label="建筑物状况码" prop="statusCode">
                        <el-input v-model="form.statusCode"></el-input>
                    </el-form-item>
                    <el-form-item label="其他行政办公用房面积" prop="otherExecutiveOfficeArea">
                        <el-input type="number" v-model.number="form.otherExecutiveOfficeArea"></el-input>
                    </el-form-item>
                    <el-form-item label="建筑物位置情况" prop="isInCampus">
                        <!-- <el-select v-model="form.isInCampus" placeholder="请选择">
                            <el-option v-for="item in isInCampus" :label="item" :value="item" :key="item"></el-option>
                        </el-select> -->
                        <el-input v-model="form.isInCampus"></el-input>
                    </el-form-item>
                    <el-form-item label="规划审批文号" prop="planningApprovalDocumentCode">
                        <el-input v-model="form.planningApprovalDocumentCode"></el-input>
                    </el-form-item>
                    <el-form-item label="生活用房总面积" prop="livingRoomArea">
                        <el-input type="number" v-model.number="form.livingRoomArea"></el-input>
                    </el-form-item>
                    <el-form-item label="学生宿舍面积" prop="studentDormitoryArea">
                       <el-input type="number" v-model.number="form.studentDormitoryArea"></el-input>
                    </el-form-item>
                    <el-form-item label="食堂面积" prop="canteenArea">
                       <el-input type="number" v-model.number="form.canteenArea"></el-input>
                    </el-form-item>
                    <el-form-item label="厕所面积" prop="toiletArea">
                       <el-input type="number" v-model.number="form.toiletArea"></el-input>
                    </el-form-item>
                    <el-form-item label="锅炉房(开水房)面积" prop="boilingWaterRoomArea">
                        <el-input type="number" v-model.number="form.boilingWaterRoomArea"></el-input>
                    </el-form-item>
                    <el-form-item label="浴室面积" prop="bathRoomArea">
                        <el-input type="number" v-model.number="form.bathRoomArea"></el-input>
                    </el-form-item>
                    <el-form-item label="教工宿舍面积" prop="facultyDormitoryArea">
                        <el-input type="number" v-model.number="form.facultyDormitoryArea"></el-input>
                    </el-form-item>
                    <el-form-item label="其他生活用房面积" prop="otherLivingRoomArea">
                        <el-input type="number" v-model.number="form.otherLivingRoomArea"></el-input>
                    </el-form-item>
                    <el-form-item label="行政办公用房总面积" prop="executiveOfficeArea">
                        <el-input type="number" v-model.number="form.executiveOfficeArea"></el-input>
                    </el-form-item>
                    <el-form-item label="教职工办公室面积" prop="facultyOfficeArea">
                        <el-input type="number" v-model.number="form.facultyOfficeArea"></el-input>
                    </el-form-item>
                    <el-form-item label="其他用房面积" prop="otherArea">
                        <el-input type="number" v-model.number="form.otherArea"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="50" style="margin-bottom: 25px;font-weight: bold;">
                <span v-if="isShow">关闭</span>
                <span v-else>打开</span>
                扩展信息 <el-switch v-model="isShow">
            </el-switch>
            </el-row>
            <el-row v-if="isShow">
                <el-col :span="12">
                    <el-form-item label="用途" prop="usageCode">
                        <el-input v-model="form.usageCode"></el-input>
                        <!-- <el-select v-model="form.usageCode" placeholder="请选择">
                            <el-option v-for="item in selectList" :label="item.label" :value="item.value" :key="item.id"></el-option>
                        </el-select> -->
                    </el-form-item>
                    <el-form-item label="建成年月" prop="constructionDate">
                        <el-date-picker
                            v-model="form.constructionDate"
                            type="date"
                            placeholder="请选择日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="经费来源码" prop="fundingSourceCode">
                        <el-input v-model="form.fundingSourceCode"></el-input>
                    </el-form-item>

                    <el-form-item label="投资总额" prop="totalInvestment">
                        <el-input v-model.number="form.totalInvestment"></el-input>
                    </el-form-item>

                    <el-form-item label="建筑物图片" prop="photoUrl">
                        <el-input v-model="form.photoUrl"></el-input>
                    </el-form-item>
                    <el-form-item label="建筑物平面图" prop="floorPlanUrl">
                        <el-input v-model="form.floorPlanUrl"></el-input>
                    </el-form-item>

                    <el-form-item label="学校单位层次码" prop="campusLevelCode">
                        <el-input v-model="form.campusLevelCode"></el-input>
                    </el-form-item>

                    <el-form-item label="综合防灾能力" prop="disasterPreventionAbility">
                        <el-input v-model="form.disasterPreventionAbility"></el-input>
                    </el-form-item>

                    <el-form-item label="计划使用年限" prop="planedYearsOfUse">
                        <el-input v-model.number="form.planedYearsOfUse"></el-input>
                    </el-form-item>

                    <el-form-item label="是否有预警避险措施" prop="hasEarlyWarningMeasurement">
                        <el-input v-model="form.hasEarlyWarningMeasurement"></el-input>
                    </el-form-item>

                    <el-form-item label="是否可用于应急避难场所" prop="canBeUsedAsEmergencyShelter">
                        <el-input v-model="form.canBeUsedAsEmergencyShelter"></el-input>
                    </el-form-item>
                    <el-form-item label="文物建筑等级码" prop="culturalRelicLevelCode">
                        <el-input v-model="form.culturalRelicLevelCode"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="建筑物总高度" prop="constructionHeight">
                        <el-input v-model.number="form.constructionHeight"></el-input>
                    </el-form-item>
                    <el-form-item label="危房鉴定部门" prop="dilapidatedHouseAppraisingDepartment">
                        <el-input v-model="form.dilapidatedHouseAppraisingDepartment"></el-input>
                    </el-form-item>
                    <el-form-item label="危房鉴定文号" prop="dilapidatedHouseAppraisingDocumentCode">
                        <el-input v-model="form.dilapidatedHouseAppraisingDocumentCode"></el-input>
                    </el-form-item>

                    <el-form-item label="危房鉴定日期" prop="dilapidatedHouseAppraisingDate">
                        <el-date-picker
                            v-model="form.dilapidatedHouseAppraisingDate"
                            type="date"
                            placeholder="请选择日期">
                        </el-date-picker>
                    </el-form-item>

                    <el-form-item label="供暖方式码" prop="heatingMethodCode">
                        <el-input v-model="form.heatingMethodCode"></el-input>
                    </el-form-item>

                    <el-form-item label="建筑物基础形式码" prop="basicFormCode">
                        <el-input v-model="form.basicFormCode"></el-input>
                    </el-form-item>
                    <el-form-item label="建筑物平面形式代码" prop="flatFormCode">
                        <el-input v-model="form.flatFormCode"></el-input>
                    </el-form-item>
                    <el-form-item label="建筑物楼板形式码" prop="floorFormCode">
                        <el-input v-model="form.floorFormCode"></el-input>
                    </el-form-item>
                    <el-form-item label="最近安全改造完成日期" prop="latestSafetyRenovationTime">
                        <el-date-picker
                            v-model="form.latestSafetyRenovationTime"
                            type="date"
                            placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="最近安全改造后预计使用年限" prop="planedYearsOfUseAfterSafetyRenovation">
                        <el-input v-model.number="form.planedYearsOfUseAfterSafetyRenovation"></el-input>
                    </el-form-item>
                    <el-form-item label="专项类型" prop="isCentralSpecialProject">
                        <el-input v-model="form.isCentralSpecialProject"></el-input>
                    </el-form-item>
                    <el-form-item label="中央专项投资补助名称码" prop="subsidyNameCode">
                        <el-input v-model="form.subsidyNameCode"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-form-item>
                <el-button type="primary" @click="save">保存</el-button>
            </el-form-item>
        </el-form>
      </el-card>
    </div>
</template>
<script>
import { getBuilding, addBuilding, updateBuilding } from '@/server/school-module'
export default {
  data () {
    return {
      form: {},
      rules: {
          code: [
            { required: true, message: '请输入建筑物号', trigger: 'blur' },
            { max: 6, message: '字符长度必须小于6', trigger: 'blur' }
          ],
          campusCode: [
            { required: true, message: '请输入校区号', trigger: 'blur' },
            { max: 2, message: '字符长度必须小于2', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '请输入建筑物名称', trigger: 'blur' },
            { max: 30, message: '字符长度必须小于30', trigger: 'blur' }
          ],
          usageStatusCode: [
            { required: true, message: '请输入使用状况代码', trigger: 'blur' }
          ],
          housingPropertyRightCode: [
            { required: true, message: '请输入房屋产权', trigger: 'blur' }
          ],
          classificationCode: [
            { required: true, message: '请输入建筑物分类码', trigger: 'blur' }
          ],
          structureCode: [
            { required: true, message: '请输入建筑物结构码', trigger: 'blur' }
          ],
          numberOfFloors: [
            { required: true, message: '请输入建筑物层数', trigger: 'blur' },
            { validator: function(rule, value, callback) {
                if (!Number.isInteger(value)) {
                    callback(new Error('建筑物层数必须是数字'));
                } else {
                    callback();
                }
            }, trigger: 'blur'}
          ],
          totalArea: [
            { required: true, message: '请输入总建筑面积', trigger: 'blur' },
            { type: 'number', message: '请输入数字', trigger: 'blur'}
          ],
          totalUsedArea: [
            { required: true, message: '请输入总使用面积', trigger: 'blur' },
            { type: 'number', message: '请输入数字', trigger: 'blur'}
          ],
          seismicFortificationIntensityCode: [
            { required: true, message: '请输入抗震设防烈度码', trigger: 'blur' }
          ],
          seismicFortificationStandardCode: [
            { required: true, message: '请输入抗震设防标准码', trigger: 'blur' }
          ],
          address: [
            { required: true, message: '请输入建筑物地址', trigger: 'blur' },
            { max: 180, message: '字符长度必须小于180', trigger: 'blur' }
          ],
          statusCode: [
            { required: true, message: '请输入建筑物状况码', trigger: 'blur' }
          ],
          isInCampus: [
            { required: true, message: '请输入建筑物位置情况', trigger: 'blur' }
          ],
          planningApprovalDocumentCode: [
            { required: true, message: '请输入规划审批文号', trigger: 'blur' },
            { max: 24, message: '字符长度必须小于24', trigger: 'blur' }
          ],
          propertyRightCardNumber: [
            { required: true, message: '请输入产权证号', trigger: 'blur' },
            { max: 20, message: '字符长度必须小于20', trigger: 'blur' }  
          ],
          hasConstructionPillar: [
            { required: true, message: '请输入构造柱', trigger: 'blur' } 
          ],
          hasRingBeam: [
            { required: true, message: '请输入圈梁*', trigger: 'blur' }   
          ],
          teachingAuxiliaryRoomArea: [
            { required: true, message: '请输入教学及辅助用房总面积', trigger: 'blur' },
            { type: 'number', message: '请输入数字', trigger: 'blur'}  
          ],
          classRoomArea: [
            { required: true, message: '请输入教室面积', trigger: 'blur' },
            { type: 'number', message: '请输入数字', trigger: 'blur'}    
          ],
          laboratoryArea: [
            { required: true, message: '请输入实验室面积', trigger: 'blur' },
            { type: 'number', message: '请输入数字', trigger: 'blur'}   
          ],
          libraryArea: [
            { required: true, message: '请输入图书室面积', trigger: 'blur' },
            { type: 'number', message: '请输入数字', trigger: 'blur'} 
          ],
          computerLabArea: [
            { required: true, message: '请输入微机室面积', trigger: 'blur' },
            { type: 'number', message: '请输入数字', trigger: 'blur'}   
          ],
          languageLabArea: [
            { required: true, message: '请输入语音室面积', trigger: 'blur' },
            { type: 'number', message: '请输入数字', trigger: 'blur'}  
          ],
          sportsRoomArea: [
            { required: true, message: '请输入体育活动室面积', trigger: 'blur' },
            { type: 'number', message: '请输入数字', trigger: 'blur'}   
          ],
          otherTeachingAuxiliaryRoom: [
            { required: true, message: '请输入其他教辅用房面积', trigger: 'blur' },
            { type: 'number', message: '请输入数字', trigger: 'blur'}    
          ],
          livingRoomArea: [
            { required: true, message: '请输入生活用房总面积', trigger: 'blur' },
            { type: 'number', message: '请输入数字', trigger: 'blur'}   
          ],
          studentDormitoryArea: [
            { required: true, message: '请输入学生宿舍面积', trigger: 'blur' },
            { type: 'number', message: '请输入数字', trigger: 'blur'}  
          ],
          canteenArea: [
            { required: true, message: '请输入食堂面积', trigger: 'blur' },
            { type: 'number', message: '请输入数字', trigger: 'blur'}  
          ],
          toiletArea: [
            { required: true, message: '请输入厕所面积', trigger: 'blur' },
            { type: 'number', message: '请输入数字', trigger: 'blur'}  
          ],
          boilingWaterRoomArea: [
            { required: true, message: '请输入锅炉房(开水房)面积', trigger: 'blur' },
            { type: 'number', message: '请输入数字', trigger: 'blur'}  
          ],
          bathRoomArea: [
            { required: true, message: '请输入浴室面积', trigger: 'blur' },
            { type: 'number', message: '请输入数字', trigger: 'blur'}  
          ],
          facultyDormitoryArea: [
            { required: true, message: '请输入教工宿舍面积', trigger: 'blur' },
            { type: 'number', message: '请输入数字', trigger: 'blur'}  
          ],
          otherLivingRoomArea: [
            { required: true, message: '请输入其他生活用房面积', trigger: 'blur' },
            { type: 'number', message: '请输入数字', trigger: 'blur'} 
          ],
          executiveOfficeArea: [
            { required: true, message: '请输入行政办公用房总面积', trigger: 'blur' },
            { type: 'number', message: '请输入数字', trigger: 'blur'} 
          ],
          facultyOfficeArea: [
            { required: true, message: '请输入教职工办公室面积', trigger: 'blur' },
            { type: 'number', message: '请输入数字', trigger: 'blur'} 
          ],
          healthCareRoomArea: [
            { required: true, message: '请输入卫生保健室面积', trigger: 'blur' },
            { type: 'number', message: '请输入数字', trigger: 'blur'}   
          ],
          otherExecutiveOfficeArea: [
            { required: true, message: '请输入其他行政办公用房面积', trigger: 'blur' },
            { type: 'number', message: '请输入数字', trigger: 'blur'}  
          ],
          otherArea: [{ required: true, message: '请输入其他用房面积', trigger: 'blur' },
          { type: 'number',  validator: function(rule, value, callback) {
                if (value && (!Number(value))) {
                    return callback(new Error('其他用房面积必须是数字'))
                } else {
                    callback();
                }
            }, trigger: 'blur'}],
        //   constructionDate: [],
          totalInvestment: [{ type: 'number', message: '请输入数字', trigger: 'blur'}],
          fundingSourceCode: [],
          photoUrl: [],
          floorPlanUrl: [],
          campusLevelCode: [],
          disasterPreventionAbility: [
            { max: 60, message: '字符长度必须小于60', trigger: 'blur' }
          ],
          planedYearsOfUse: [
            { validator: function(rule, value, callback) {
                if (value && (!Number.isInteger(value))) {
                    return callback(new Error('计划使用年限必须是数字'))
                } else {
                    callback();
                }
            }, trigger: 'blur'}
          ],
          hasEarlyWarningMeasurement: [],
          canBeUsedAsEmergencyShelter: [],
          usageCode: [
            { max: 2, message: '字符长度必须小于2', trigger: 'blur' }
          ],
          constructionHeight: [
            { validator: function(rule, value, callback) {
                if (value && (!Number.isInteger(value))) {
                    return callback(new Error('建筑物总高度必须是数字'))
                } else {
                    callback();
                }
            }, trigger: 'blur'}  
          ],
          dilapidatedHouseAppraisingDepartment: [
            { max: 60, message: '字符长度必须小于60', trigger: 'blur' }
          ],
          dilapidatedHouseAppraisingDocumentCode: [
            { max: 20, message: '字符长度必须小于20', trigger: 'blur' } 
          ],
        //   dilapidatedHouseAppraisingDate: [],
        //   heatingMethodCode: [],
        //   basicFormCode: [],
        //   flatFormCode: [],
        //   floorFormCode: [],
        //   latestSafetyRenovationTime: [],
          planedYearsOfUseAfterSafetyRenovation: [
            { validator: function(rule, value, callback) {
                if (value && (!Number.isInteger(value))) {
                    return callback(new Error('必须是数字'))
                } else {
                    callback();
                }
            }, trigger: 'blur'}  
          ]
        //   isCentralSpecialProject: [],
        //   subsidyNameCode: [],
        //   culturalRelicLevelCode: []
      },
      selectList: [],
      id: '',
      form2: {},
      isShow: true,
      isInCampus: ['校内', '校外']
    }
  },
  created () {
    this.$route.params.id ? this.id = this.$route.params.id : this.id = '';
    if (this.id) this.initForm();
  },
  activated () {
    this.id = this.$route.params.id;
    this.form = {}
    if (this.id) this.initForm();
  },
  methods: {
    back () {
        this.$router.go(-1);
    },
    initForm () {
        getBuilding(this.id).then((result) => {
            this.form = Object.assign({}, result);
            this.form2 =Object.assign({}, result);
        })
    },
    save () {
       this.$refs.form.validate((valid) => {
        if(!valid) return;
        if (this.id) {
            this.form.id = this.id;
            if (this.form === this.form2) {
                this.back();
            } else {
                updateBuilding(this.form).then((result) => {
                    this.$message.success('修改成功');
                    this.back();
                })
            }
        } else {
            addBuilding(this.form).then((result) => {
                this.$message.success('保存成功');
                this.back();
            })
        }
       });
    }
  }
}
</script>