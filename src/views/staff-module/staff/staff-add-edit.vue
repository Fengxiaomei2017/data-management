<template>
    <div>
        <el-card class="t-box-card">
            <div slot="header" class="t-box-card-header">
                <span>{{id?'编辑学生':'新增学生'}}</span>
            </div>
            <el-tabs v-model="activeIndex" tab-position="left" @tab-click="handleClick">
                <!-- 基础信息 -->
                <el-tab-pane name="1" label="基础信息">
                    <el-form class="t-page-form t-form-block" ref="schoolFacultyBasic" v-if="basicInfoForm" :model="basicInfoForm" :rules="basicInfoRules" label-width="140px" size="small">
                        <el-row :gutter="50">
                            <el-col :span="12">
                                <el-form-item label="工号" prop="employeeId">
                                    <el-input v-model="basicInfoForm.employeeId"></el-input>
                                </el-form-item>
                                <el-form-item label="英文姓名" prop="englishName">
                                    <el-input v-model="basicInfoForm.englishName"></el-input>
                                </el-form-item>
                                <el-form-item label="曾用名" prop="formerName">
                                    <el-input v-model="basicInfoForm.formerName"></el-input>
                                </el-form-item>
                                <el-form-item label="身份证号" prop="identityCardNumber">
                                    <el-input v-model="basicInfoForm.identityCardNumber"></el-input>
                                </el-form-item>
                                <el-form-item label="出生日期" prop="birthDay">
                                    <el-date-picker
                                        v-model="basicInfoForm.birthDay"
                                        type="date"
                                        placeholder="请选择日期">
                                    </el-date-picker>
                                </el-form-item>
                                <el-form-item label="血型" prop="bloodTypeCode">
                                    <el-input v-model="basicInfoForm.bloodTypeCode"></el-input>
                                </el-form-item>
                                <el-form-item label="名族码" prop="ethnicGroupCode">
                                    <el-input v-model="basicInfoForm.ethnicGroupCode"></el-input>
                                </el-form-item>
                                <el-form-item label="籍贯" prop="birthPlace">
                                    <el-input v-model="basicInfoForm.birthPlace"></el-input>
                                </el-form-item>
                                <el-form-item label="婚姻状态" prop="maritalStatusCode">
                                    <el-select v-model="basicInfoForm.maritalStatusCode" placeholder="请选择">
                                        <el-option v-for="item in maritalStatusCode" :label="item" :value="item" :key="item"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="户口所在地" prop="registeredPermanentResidenceAdministrativeDivisionCode">
                                    <el-input v-model="basicInfoForm.registeredPermanentResidenceAdministrativeDivisionCode"></el-input>
                                </el-form-item>
                                <el-form-item label="户口类别码" prop="householdRegistrationTypeCode">
                                    <el-input v-model="basicInfoForm.householdRegistrationTypeCode"></el-input>
                                </el-form-item>
                                <el-form-item label="当前地址" prop="currentAddress">
                                    <el-input v-model="basicInfoForm.currentAddress"></el-input>
                                </el-form-item>
                                <el-form-item label="邮政编码" prop="currentAddressZipCode">
                                    <el-input v-model="basicInfoForm.currentAddressZipCode"></el-input>
                                </el-form-item>
                                <el-form-item label="参加工作年月" prop="workingDate">
                                    <el-date-picker
                                        v-model="basicInfoForm.workingDate"
                                        type="date"
                                        format="yyyy-MM"
                                        placeholder="选择参加工作年月">
                                    </el-date-picker>
                                </el-form-item>
                                <el-form-item label="从教年月" prop="teachingDate">
                                    <el-date-picker
                                        v-model="basicInfoForm.teachingDate"
                                        type="date"
                                        format="yyyy-MM"
                                        placeholder="选择从教年月">
                                    </el-date-picker>
                                </el-form-item>
                                <el-form-item label="在校年月" prop="joinSchoolDate">
                                    <el-date-picker
                                        v-model="basicInfoForm.joinSchoolDate"
                                        type="date"
                                        format="yyyy-MM"
                                        placeholder="选择在校年月">
                                    </el-date-picker>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="saveNext1">下一步</el-button>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="姓名" prop="name">
                                    <el-input v-model="basicInfoForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="姓名拼音" prop="pinyinName">
                                    <el-input v-model="basicInfoForm.pinyinName"></el-input>
                                </el-form-item>
                                <el-form-item label="证件类型" prop="identityCardTypeCode">
                                    <el-input v-model="basicInfoForm.identityCardTypeCode"></el-input>
                                    <!-- <el-select v-model="basicInfoForm.identityCardTypeCode" placeholder="请选择">
                                        <el-option v-for="item in selectList" :label="item.label" :value="item.value" :key="item.id"></el-option>
                                    </el-select> -->
                                </el-form-item>
                                <el-form-item label="性别" prop="sexCode">
                                    <el-select v-model="basicInfoForm.sexCode" placeholder="请选择">
                                        <el-option v-for="item in sexCode" :label="item" :value="item" :key="item"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="编制类别码" prop="officialStaffingTypeCode">
                                    <el-input v-model="basicInfoForm.officialStaffingTypeCode"></el-input>
                                </el-form-item>
                                <el-form-item label="政治面貌" prop="politicalStatusCode">
                                    <el-input v-model="basicInfoForm.politicalStatusCode"></el-input>
                                </el-form-item>
                                <el-form-item label="出生地行政区划码" prop="birthPlaceAdministrativeDivisionCode">
                                    <el-input v-model="basicInfoForm.birthPlaceAdministrativeDivisionCode"></el-input>
                                </el-form-item>
                                <el-form-item label="教职工类别码" prop="facultyTypeCode">
                                    <el-input v-model="basicInfoForm.facultyTypeCode"></el-input>
                                </el-form-item>
                                <el-form-item label="岗位类别码" prop="postTypeCode">
                                    <el-input v-model="basicInfoForm.postTypeCode"></el-input>
                                </el-form-item>
                                <el-form-item label="是否兼职教师" prop="isPartTimeTeacher">
                                    <el-radio-group v-model="basicInfoForm.isPartTimeTeacher">
                                        <el-radio v-for="item in isRadio" :label="item" :key="item">{{item}}</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="是否双师型教师" prop="isDoubleQualifiedTeacher">
                                    <el-radio-group v-model="basicInfoForm.isDoubleQualifiedTeacher">
                                        <el-radio v-for="item in isRadio" :label="item" :key="item">{{item}}</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="当前状态码" prop="currentStatusCode">
                                    <el-input v-model="basicInfoForm.currentStatusCode"></el-input>
                                </el-form-item>
                                <el-form-item label="照片" prop="photo">
                                    <UploadImage></UploadImage>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </el-tab-pane>
                <!-- 组织机构 -->
                <el-tab-pane name="2" label="组织机构">
                    <el-button type="primary" size="small" style="margin-bottom:10px;" @click="addOrganization()">添加组织机构</el-button>
                    <el-table class="t-table-list" ref="table" border stripe size="small" tooltip-effect="dark"
                        :data="tableData">
                        <el-table-column type="selection" width="40"></el-table-column>
                        <el-table-column prop="name1" label="纬度名称" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="name2" label="机构" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="name3" label="职务" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="name4" label="是否为主组织机构" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="name5" label="是否部门负责人" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column fixed="right" label="操作" width="100" align="center">
                        <template slot-scope="scope">
                            <el-button type="text" size="small">删除</el-button>
                        </template>
                        </el-table-column>
                    </el-table>
                    <el-button type="primary" @click="saveNext2" style="margin-top:10px; ">下一步</el-button>
                </el-tab-pane>
                <!-- 联系方式 -->
                <el-tab-pane name="3" label="联系方式">
                    <el-form class="t-page-form t-form-block" ref="contactInfor" :model="contactInfor" :rules="contactInforRules" label-width="140px" size="small">
                        <el-row :gutter="50">
                            <el-col :span="12">
                                <el-form-item label="移动电话" prop="mobilePhoneNumber">
                                    <el-input v-model="contactInfor.mobilePhoneNumber"></el-input>
                                </el-form-item>
                                <el-form-item label="固定电话" prop="telephone">
                                    <el-input v-model="contactInfor.telephone"></el-input>
                                </el-form-item>
                                <el-form-item label="邮政编码" prop="postalcode">
                                    <el-input v-model="contactInfor.postalcode"></el-input>
                                </el-form-item>
                                <el-form-item label="通信地址" prop="address">
                                    <el-input v-model="contactInfor.address"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="saveNext3" style="margin-top:10px; ">下一步</el-button>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="电子邮箱" prop="email">
                                    <el-input v-model="contactInfor.email"></el-input>
                                </el-form-item>
                                <el-form-item label="网络地址" prop="webSite">
                                    <el-input v-model="contactInfor.webSite"></el-input>
                                </el-form-item>
                                <el-form-item label="即时通信号" prop="instantMessagingNumber">
                                    <el-input v-model="contactInfor.instantMessagingNumber"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </el-tab-pane>
                <!-- 家庭情况 -->
                <el-tab-pane name="4" label="家庭情况">
                    <el-form class="t-page-form t-form-block" ref="familySituation" :model="familySituationForm" :rules="familySituationRules" label-width="140px" size="small">
                        <el-row :gutter="50">
                            <el-col :span="12">
                                <!-- <el-form-item label="邮政编码" prop="name1">
                                    <el-input v-model="familySituationForm.name1"></el-input>
                                </el-form-item> -->
                                <el-form-item label="家庭人数" prop="population">
                                    <el-input v-model.number="familySituationForm.population"></el-input>
                                </el-form-item>
                                <el-form-item label="家庭地址" prop="address">
                                    <el-input v-model="familySituationForm.address"></el-input>
                                </el-form-item>
                                <el-form-item label="邮政编码" prop="postalcode">
                                    <el-input v-model="familySituationForm.postalcode"></el-input>
                                </el-form-item>
                                <!-- <el-form-item label="家庭电话" prop="name">
                                    <el-input v-model="familySituationForm.name2"></el-input>
                                </el-form-item> -->
                                <el-form-item label="家庭联系人" prop="contact">
                                    <el-input v-model="familySituationForm.contact"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="saveNext4" style="margin-top:10px; ">下一步</el-button>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="家庭收入来源" prop="phoneNumber">
                                    <el-input v-model="familySituationForm.phoneNumber"></el-input>
                                </el-form-item>
                                <el-form-item label="家庭收入来源" prop="primarySourceOfIncome">
                                    <el-input v-model="familySituationForm.primarySourceOfIncome"></el-input>
                                </el-form-item>
                                <el-form-item label="家庭月收入金额" prop="monthlyIncome">
                                    <el-input type="number" v-model.number="familySituationForm.monthlyIncome"></el-input>
                                </el-form-item>
                                <el-form-item label="家庭年收入金额" prop="annualHouseholdIncome">
                                    <el-input type="number" v-model.number="familySituationForm.annualHouseholdIncome"></el-input>
                                </el-form-item>
                                <!-- <el-form-item label="情况描述" prop="name3">
                                    <el-input type="textarea" v-model="familySituationForm.name3"></el-input>
                                </el-form-item> -->
                            </el-col>
                        </el-row>
                    </el-form>
                </el-tab-pane>
                <!-- 家庭成员 -->
                <el-tab-pane name="5" label="家庭成员">
                    <el-button type="primary" size="small" style="margin-bottom:10px;" @click="addEdit()">添加新成员</el-button>
                    <el-table class="t-table-list" ref="table" border stripe size="small" tooltip-effect="dark"
                        :data="familyMemberList">
                        <el-table-column type="selection" width="40"></el-table-column>
                        <el-table-column prop="name" label="姓名" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="relationshipCode" label="与本人关系" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <!-- <el-table-column prop="name3" label="性别" :show-overflow-tooltip="true" align="center"></el-table-column> -->
                        <!-- <el-table-column prop="name4" label="出生日期" :show-overflow-tooltip="true" align="center"></el-table-column> -->
                        <el-table-column prop="politicalStatusCode" label="政治面貌" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="memberProfessionCode" label="职业" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <el-table-column prop="mobilePhoneNumber" label="联系电话" :show-overflow-tooltip="true" align="center"></el-table-column>
                        <!-- <el-table-column prop="name5" label="是否为监护人" :show-overflow-tooltip="true" align="center"></el-table-column> -->
                        <el-table-column fixed="right" label="操作" width="100" align="center">
                        <template slot-scope="scope">
                            <el-button type="text" size="small" @click="delFamily(scope.row)">删除</el-button>
                        </template>
                        </el-table-column>
                    </el-table>
                    <el-button type="primary" @click="saveNext5" style="margin-top:10px; ">下一步</el-button>
                </el-tab-pane>

                <!-- 添加新成员列表 -->
                <el-dialog
                    title="添加新成员"
                    :visible.sync="dialogVisible"
                    width="40%">
                    <el-form label-width="100px" ref="familyMemberInfor" :rules="familyMemberInforRules" :model="familyMemberInformation">
                        <el-form-item prop="name" label="姓名">
                            <el-input v-model="familyMemberInformation.name"></el-input>
                        </el-form-item>
                        <el-form-item prop="relationshipCode" label="关系码">
                            <el-input v-model="familyMemberInformation.relationshipCode"></el-input>
                        </el-form-item>
                        <el-form-item prop="memberProfessionCode" label="职业码">
                            <el-input v-model="familyMemberInformation.memberProfessionCode"></el-input>
                        </el-form-item>
                        <el-form-item prop="mobilePhoneNumber" label="电话">
                            <el-input v-model="familyMemberInformation.mobilePhoneNumber"></el-input>
                        </el-form-item>
                        <el-form-item prop="politicalStatusCode" label="政治面貌码">
                            <el-input v-model="familyMemberInformation.politicalStatusCode"></el-input>
                        </el-form-item>
                        <el-form-item prop="agency" label="所在单位">
                            <el-input v-model="familyMemberInformation.agency"></el-input>
                        </el-form-item>
                    </el-form>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible = false">取消</el-button>
                        <el-button type="primary" @click="saveFamily()">保存</el-button>
                    </span>
                </el-dialog>
                <!-- 学历学位 -->
                <!-- <el-tab-pane name="6" label="学历学位">
                    <el-form class="t-page-form t-form-block" ref="form" :model="form" :rules="rules" label-width="140px" size="small">
                        <el-row :gutter="50">
                            <el-col :span="12">
                                <el-form-item label="入学年月" prop="name">
                                    <el-input v-model="form.name"></el-input>
                                </el-form-item>
                                <el-form-item label="学制" prop="name">
                                    <el-input v-model="form.name"></el-input>
                                </el-form-item>
                                <el-form-item label="学习方式码" prop="name">
                                    <el-input v-model="form.name"></el-input>
                                </el-form-item>
                                <el-form-item label="学习形式码" prop="name">
                                    <el-input v-model="form.name"></el-input>
                                </el-form-item>
                                <el-form-item label="学历" prop="name">
                                    <el-input v-model="form.name"></el-input>
                                </el-form-item>
                                <el-form-item label="所学专业码" prop="name">
                                    <el-input v-model="form.name"></el-input>
                                </el-form-item>
                                <el-form-item label="结束学业年月" prop="name">
                                    <el-input v-model="form.name"></el-input>
                                </el-form-item>
                                <el-form-item label="毕肄业学校" prop="name">
                                    <el-input v-model="form.name"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="saveNext6" style="margin-top:10px; ">下一步</el-button>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="学历证书号" prop="name">
                                    <el-input v-model="form.name"></el-input>
                                </el-form-item>
                                <el-form-item label="获得学位码" prop="name">
                                    <el-input v-model="form.name"></el-input>
                                </el-form-item>
                                <el-form-item label="授学位单位名称" prop="name">
                                    <el-input v-model="form.name"></el-input>
                                </el-form-item>
                                <el-form-item label="授学位国家地区" prop="name">
                                    <el-input v-model="form.name"></el-input>
                                </el-form-item>
                                <el-form-item label="获学位专业码" prop="name">
                                    <el-input v-model="form.name"></el-input>
                                </el-form-item>
                                <el-form-item label="获学位日期" prop="name">
                                    <el-input v-model="form.name"></el-input>
                                </el-form-item>
                                <el-form-item label="学位证书号" prop="name">
                                    <el-input v-model="form.name"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </el-tab-pane> -->
                <!-- 聘用信息 -->
                <!-- <el-tab-pane name="7" label="聘用信息">
                    <el-form class="t-page-form t-form-block" ref="form" :model="form" :rules="rules" label-width="140px" size="small">
                        <div>
                            <h5>校内职务</h5>
                            <el-row :gutter="50">
                                <el-col :span="12">
                                    <el-form-item label="岗位起始年月" prop="name">
                                        <el-date-picker v-model="form.name" type="date" placeholder="选择日期"></el-date-picker>
                                    </el-form-item>
                                    <el-form-item label="是否在岗" prop="name">
                                        <el-select v-model="form.name" placeholder="请选择">
                                            <el-option v-for="item in selectList" :label="item.label" :value="item.value" :key="item.id"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="岗位起始年月" prop="name">
                                        <el-date-picker v-model="form.name" type="date" placeholder="选择日期"></el-date-picker>
                                    </el-form-item>
                                    <el-form-item label="情况描述" prop="name">
                                        <el-input type="textarea" v-model="form.name"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </div>
                        <div v-if="basicInfoForm.isDoubleQualifiedTeacher === '是'">
                            <h5>“双师型”教师</h5>
                            <el-row :gutter="50">
                                <el-col :span="12">
                                    <el-form-item label="双师类型" prop="name">
                                        <el-input v-model="form.name"></el-input>
                                    </el-form-item>
                                    <el-form-item label="获得双师日期" prop="name">
                                        <el-input v-model="form.name"></el-input>
                                    </el-form-item>
                                    <el-form-item label="证书颁发机构" prop="name">
                                        <el-input v-model="form.name"></el-input>
                                    </el-form-item>
                                    <el-form-item label="职业资质证书" prop="name">
                                        <el-input v-model="form.name"></el-input>
                                    </el-form-item>
                                    <el-form-item label="专业技术职务" prop="name">
                                        <el-input v-model="form.name"></el-input>
                                    </el-form-item>
                                    <el-form-item label="职业资格证书" prop="name">
                                        <el-input v-model="form.name"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="职称获得日期" prop="name">
                                        <el-input v-model="form.name"></el-input>
                                    </el-form-item>
                                    <el-form-item label="专业证书名称" prop="name">
                                        <el-input v-model="form.name"></el-input>
                                    </el-form-item>
                                    <el-form-item label="专业证书编号" prop="name">
                                        <el-input v-model="form.name"></el-input>
                                    </el-form-item>
                                    <el-form-item label="专业证书取得日期" prop="name">
                                        <el-input v-model="form.name"></el-input>
                                    </el-form-item>
                                    <el-form-item label="主要研究方向" prop="name">
                                        <el-input v-model="form.name"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </div>
                        <div v-if="basicInfoForm.isPartTimeTeacher === '是'">
                            <h5>兼职教师</h5>
                            <el-row :gutter="50">
                                <el-col :span="12">
                                    <el-form-item label="全职工作单位" prop="name">
                                        <el-input v-model="form.name"></el-input>
                                    </el-form-item>
                                    <el-form-item label="聘用起始日期" prop="name">
                                        <el-input v-model="form.name"></el-input>
                                    </el-form-item>
                                    <el-form-item label="聘用终止日期" prop="name">
                                        <el-input v-model="form.name"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="兼职岗位码" prop="name">
                                        <el-input v-model="form.name"></el-input>
                                    </el-form-item>
                                    <el-form-item label="合同编号" prop="name">
                                        <el-input v-model="form.name"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </div>
                        <el-form-item>
                            <el-button type="primary" @click="save" style="margin-top:10px; ">保存</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane> -->
            </el-tabs>
        </el-card>
    </div>
</template>
<script>
import { 
    addSchoolFacultyBasic,
    updateSchoolFacultyBasic,
    addFamilySituation,
    getFamilySituation,
    updateFamilySituation,
    addFamilyMemberInformation,
    getFamilyMemberInformation,
    addContactInformation,
    getContactInformation,
    updateContactInformation,
    deleteFamilyMemberInformation} from "@/server/staff-module"
import { UploadImage } from "@/components";
export default {
  data () {
    return {
      dialogVisible: false,
      basicInfoForm: {},
      familySituationForm: {},
      familyMemberList: [],
      familyMemberInformation: {},
      contactInfor: {},
      basicInfoRules: {
        name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { max: 36, message: '字符长度必须小于36', trigger: 'blur' }
        ],
        employeeId: [
            { required: true, message: '请输入工号', trigger: 'blur' },
            { max: 20, message: '字符长度必须小于20', trigger: 'blur' }
        ],
        pinyinName: [
            { required: true, message: '请输入姓名拼音', trigger: 'blur' },
            { max: 30, message: '字符长度必须小于30', trigger: 'blur' }
        ],
        identityCardTypeCode: [
            { required: true, message: '请输入身份证件类型码', trigger: 'blur' },
            { max: 20, message: '字符长度必须小于20', trigger: 'blur' }
        ],
        identityCardNumber: [
            { required: true, message: '请输入身份证件号', trigger: 'blur' },
        ],
        birthDay: [
            { required: true, message: '请选择出生日期', trigger: 'blur' },
        ],
        sexCode: [
            { required: true, message: '请输入性别码', trigger: 'blur' },
        ],
        ethnicGroupCode: [
            { required: true, message: '请输入名族码', trigger: 'blur' },
        ],
        maritalStatusCode: [
            { required: true, message: '请输入婚姻状态码', trigger: 'change' },
        ],
        politicalStatusCode: [
            { required: true, message: '请输入政治面貌码', trigger: 'blur' },
        ],
        birthPlace: [
            { required: true, message: '请输入籍贯', trigger: 'blur' },
            { max: 20, message: '字符长度必须小于20', trigger: 'blur' }
        ],
        birthPlaceAdministrativeDivisionCode: [
            { required: true, message: '请输入出生地行政区划码', trigger: 'blur' },
        ],
        registeredPermanentResidenceAdministrativeDivisionCode: [
            { required: true, message: '请输入教职工户口所在地行政区划码', trigger: 'blur' },
        ],
        householdRegistrationTypeCode: [
            { required: true, message: '请输入户口类别码', trigger: 'blur' },
        ],
        currentAddress: [
            { required: true, message: '请输入当前住址', trigger: 'blur' },
            { max: 180, message: '字符长度必须小于180', trigger: 'blur' }
        ],
        currentAddressZipCode: [
            { required: true, message: '请输入当前住址邮政编码', trigger: 'blur' },
            { max: 6, message: '字符长度必须小于6', trigger: 'blur' }
        ],
        workingDate: [
            { required: true, message: '请选择参加工作年月', trigger: 'blur' },
        ],
        joinSchoolDate: [
            { required: true, message: '请输入来校年月', trigger: 'blur' },
        ],
        officialStaffingTypeCode: [
            { required: true, message: '请输入编制类别码', trigger: 'blur' },
        ],
        facultyTypeCode: [
            { required: true, message: '请输入教职工类别码', trigger: 'blur' },
        ],
        postTypeCode: [
            { required: true, message: '请输入岗位类别码', trigger: 'blur' },
        ],
        isPartTimeTeacher: [
            { required: true, message: '是否兼职教师', trigger: 'blur' },
        ],
        isDoubleQualifiedTeacher: [
            { required: true, message: '是否双师型教师', trigger: 'blur' },
        ],
        currentStatusCode: [
            { required: true, message: '请输入当前状态码', trigger: 'blur' },
        ]
        
      },
      contactInforRules: {
          mobilePhoneNumber: [
            { required: true, message: '请输入移动电话', trigger: 'blur' },
            { max: 30, message: '字符长度必须小于30', trigger: 'blur' }  
          ],
          email: [
            { required: true, message: '请输入电子信箱', trigger: 'blur' },
            { max: 40, message: '字符长度必须小于40', trigger: 'blur' }  
          ],
          telephone: [
            { max: 30, message: '字符长度必须小于30', trigger: 'blur' } 
          ],
          postalcode: [
            { max: 6, message: '字符长度必须小于6', trigger: 'blur' }   
          ],
          instantMessagingNumber: [
            { max: 40, message: '字符长度必须小于40', trigger: 'blur' } 
          ],
          address: [
            { max: 180, message: '字符长度必须小于180', trigger: 'blur' }   
          ],
          webSite: [
            { max: 60, message: '字符长度必须小于40', trigger: 'blur' } 
          ]
      },
      familySituationRules: {
          address: [
            { required: true, message: '请输入家庭住址', trigger: 'blur' },
            { max: 180, message: '字符长度必须小于180', trigger: 'blur' }    
          ],
          postalcode: [
            { required: true, message: '请输入家庭邮政编码', trigger: 'blur' },
            { max: 6, message: '字符长度必须小于6', trigger: 'blur' }    
          ],
          contact: [
            { required: true, message: '请输入家庭联系人', trigger: 'blur' },
            { max: 36, message: '字符长度必须小于36', trigger: 'blur' }   
          ],
          population: [
            { required: true, message: '请输入家庭人口数', trigger: 'blur' },
            { type: 'number', message: '人口数必须是数字', trigger: 'blur' }
          ],
          phoneNumber: [
            { max: 30, message: '字符长度必须小于30', trigger: 'blur' }   
          ],
          primarySourceOfIncome: [
            { max: 100, message: '字符长度必须小于100', trigger: 'blur' } 
          ]
      },
      familyMemberInforRules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { max: 36, message: '字符长度必须小于36', trigger: 'blur' }
          ],
          relationshipCode: [
            { required: true, message: '请输入关系码', trigger: 'blur' }
          ],
          memberProfessionCode: [
            { required: true, message: '请输入职业码*', trigger: 'blur' }  
          ],
          telephone: [
            { max: 30, message: '字符长度必须小于30', trigger: 'blur' }  
          ],
          mobilePhoneNumber: [
            { max: 30, message: '字符长度必须小于30', trigger: 'blur' }  
          ],
          agency: [
            { max: 60, message: '字符长度必须小于60', trigger: 'blur' }
          ]
      },
      maritalStatusCode: ['已婚', '未婚'],
      sexCode: ['男', '女'],
      isRadio: ['是', '否'],
      form: {},
      rules: {},
      selectList: [],
      activeIndex: '1',
      id: '',
      tableData: [],
      tableData2: [],
      userId: '',
      basicInfoForm2: {},
      contactInfor2: {},
      familySituationForm2: {},

    }
  },
  activated () {
    this.basicInfoForm = {};
    this.familySituationForm = {};
    this.familyMemberList = [];
    this.contactInfor = {}
  },
  created() {
    this.id = this.$route.params.id;
    let row = this.$route.params.row;
    this.id ? this.basicInfoForm = Object.assign({}, row) : this.basicInfoForm = {};
    this.basicInfoForm2 = Object.assign({}, row);
  },
//   watch: {
//       '$route' () {
//           this.basicInfoForm = {},
//           this.familySituationForm = {},
//           this.familyMemberList = [],
//           this.contactInfor = {}
//       }
//   },
  methods: {
    addOrganization() {
        this.$message('暂无可选机构');
    },
    handleClick(tab, event) {
        let index = tab.index;
        if (!this.id) return;
        if (index === '1') {
            // 获取组织机构信息
        } else if (index === '2') {
            // 获取联系方式
            this._getContactInformation();
        } else if (index === '3') {
            // 获取家庭情况
            this._getFamilySituation();
        } else if (index === '4') {
            // 获取学历学位
        } else if (index === '5') {
            // 获取聘用信息
        }
    },
    next(msg, index) {
        this.$message.success(msg); 
        this.activeIndex = index
    },
    errorMsg() {
        this.$message.error('请先设置基本信息');
    },
    addEdit() {
        // this.userId || this.id ? this.dialogVisible = true : this.$message.error('请先设置基本信息');
        if (this.userId || this.id) {
            this.dialogVisible = true;
            this.familyMemberInformation = {};
        } else {
            this.$message.error('请先设置基本信息');
        }
    },

    // 更新基础信息
    _updateSchoolFacultyBasic(data) {
        updateSchoolFacultyBasic(data).then((dataList) => {
            this.next('修改成功', '2');
        })
    },

    // 获取教职工家庭情况
    _getFamilySituation() {
        getFamilySituation(this.id).then((dataList) => {
            console.log(dataList);
            this.familySituationForm = Object.assign({}, dataList);
            // console.log(this.familySituationForm);
            this.familySituationForm2 = Object.assign({}, dataList);
            // this.next('保存成功', '4');
        })
    },

    // 更新教职工家庭情况
    _updateFamilySituation(data) {
        updateFamilySituation(data).then((dataList) => {
            this.next('修改成功', '5');
        })
    },

    // 获取教职工家庭成员信息
    _getFamilyMemberInformation() {
        getFamilyMemberInformation(this.id).then((dataList) => {
            this.familyMemberList = dataList;
            // this.next('保存成功', '5');
        })
    },

    // 获取教职工联系信息
    _getContactInformation() {
        getContactInformation(this.id).then((dataList) => {
            this.contactInfor = Object.assign({}, dataList);
            this.contactInfor2 = Object.assign({}, dataList);
            // this.next('保存成功', '3');
        })
    },

    // 更新教职工联系信息
    _updateContactInformation(data) {
        updateContactInformation(data).then((dataList) => {
            this.next('修改成功', '4');
        })
    },

    // 创建职工基础信息 && 更新职工基础信息
    saveNext1() {
        this.$refs.schoolFacultyBasic.validate((valid) => {
            if(!valid) return;
            if (this.id) {
                if (this.basicInfoForm !== this.basicInfoForm2) {
                    this._updateSchoolFacultyBasic(this.basicInfoForm);
                    this.next('修改成功', '2');
                } else {
                    this.activeIndex = '2'
                }
                
            } else {
                addSchoolFacultyBasic(this.basicInfoForm).then((result) => {
                    // console.log(result.id);
                    this.userId = result.id;
                    this.next('保存成功', '2');
                })
                
            }
        })
    },
    saveNext2(){
        if(this.userId) {
           this.contactInfor.id = this.userId;
           this.next('保存成功', '3');
       } else if (this.id) {
           this._getContactInformation();
           this.next('修改成功', '3');

       } else {
           this.errorMsg();
       } 
    },

    // 删除成员信息
    delFamily(row) {
        let data = {
            facultyId: this.id,
            memberInfoId: row.id
        }
        this.$confirm(`此操作将删除【${row.name}】数据， 是否继续？`, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(() => {
             deleteFamilyMemberInformation(data).then((result) => {
                this.$message.success('删除成功');
                this._getFamilyMemberInformation();
            })
        }).catch(() => {});
        
    },

    // 创建教职工联系信息
    saveNext3(){
       if(this.userId) {
           this.contactInfor.id = this.userId;
           addContactInformation(this.contactInfor).then((result) => {
               this.next('保存成功', '4');
           })
       } else if (this.id) {
           this._getFamilySituation();
           if(this.contactInfor !== this.contactInfor2) {
               this.contactInfor.id = this.id;
           this._updateContactInformation(this.contactInfor);
           this.next('修改成功', '4');
           } else {
               this.activeIndex = '4';
           }
       } else {
           this.errorMsg();
       }
    },

    // 创建教职工家庭情况
    saveNext4(){
       this.$refs.familySituation.validate((valid) => {
           if(!valid) return;
           if (this.userId) {
                this.familySituationForm.id = this.userId;
                addFamilySituation(this.familySituationForm).then((result) => {
                    this.next('保存成功', '5');
                })
           } else if (this.id) {
               this._getFamilyMemberInformation();
               if(this.familySituationForm !== this.familySituationForm2) {
                   this.familySituationForm.id = this.id;
                //    console.log(this.familySituationForm);
                    this._updateFamilySituation(this.familySituationForm);
                    this.next('修改成功', '5');
               } else {
                   this.activeIndex = '5'
               }
           } else {
               this.errorMsg();
           }
       })
    },

    // 创建教职工家庭成员信息
    saveFamily() {
        this.$refs.familyMemberInfor.validate((valid) => {
            if(!valid) return;
            this.familyMemberInformation.id = this.id || this.userId;
            addFamilyMemberInformation(this.familyMemberInformation).then((result) => {
                this.$message.success('保存成功'); 
                this.dialogVisible = false;
                this.familyMemberList = result;
            })
        })
    },

    saveNext5(){
       this.activeIndex = '6'
    },

    saveNext6(){
       this.activeIndex = '7'
    },

    save(){
       this.$refs.form.validate((valid) => {
        if(!valid) return;
       });
    }
  },
  components: {
      UploadImage
  }
}
</script>