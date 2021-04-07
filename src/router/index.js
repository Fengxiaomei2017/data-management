import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 开发环境不使用懒加载, 因为懒加载页面太多的话会造成webpack热更新太慢, 所以只有生产环境使用懒加载
const _import = require('./import-' + process.env.NODE_ENV)

export default new Router({
  routes: [
    { path: '/', name: 'login', component: _import('common/login') },
    { path: '/home', name: 'home', component: _import('common/home')},
    { path: '/home/workbench', name: 'workbench', component: _import('common/workBench-detail')},
    { path: '/container',
      component: _import('common/container'),
      children: [
        { path: '/', redirect: '/error/404' },
        // 学生管理
        {
          path: '/student/list',
          name: 'student-list',
          component: _import('student-module/student/student-list'),
          meta: {title: ['学生管理', '学生信息管理', '学生列表']}
        },
        { path: '/student/add',
          name: 'student-add',
          component: _import('student-module/student/student-list-add'),
          meta: {title: ['学生管理', '学生信息管理', '新增学生']}
        },
        { path: '/student/edit/:id',
          name: 'student-edit',
          component: _import('student-module/student/student-list-add'),
          meta: {title: ['学生管理', '学生信息管理', '编辑学生']}
        },
        // 年级班级
        {
          path: '/semester/list',
          name: 'semester-list',
          component: _import('grade-module/semester/semester-list'),
          meta: {title: ['年级班级', '学年学期']}
        },
        {
          path: '/grade/list',
          name: 'grade-list',
          component: _import('grade-module/grade/grade-list'),
          meta: {title: ['年级班级', '年级管理']}
        },
        // 教职工管理
        {
          path: '/staff/list',
          name: 'staff-list',
          component: _import('staff-module/staff/staff-list'),
          meta: {title: ['教职工管理', '职工管理', '职工列表']}
        },
        {
          path: '/staff/add',
          name: 'staff-add',
          component: _import('staff-module/staff/staff-add-edit'),
          meta: {title: ['教职工管理', '职工管理', '新增职工']}
        },
        {
          path: '/staff/edit/:id',
          name: 'staff-edit',
          component: _import('staff-module/staff/staff-add-edit'),
          meta: {title: ['教职工管理', '职工管理', '编辑职工']}
        },
        // 学校管理
        {
          path: '/school/info',
          name: 'school-info',
          component: _import('school-module/school/school-add-edit'),
          meta: {title: ['学校管理', '学校信息']}
        },
        {
          path: '/campus/list',
          name: 'campus-list',
          component: _import('school-module/campus/campus-list'),
          meta: {title: ['学校管理', '校区管理', '校区列表']}
        },
        {
          path: '/campus/add',
          name: 'campus-add',
          component: _import('school-module/campus/campus-add-edit'),
          meta: {title: ['学校管理', '校区管理', '新增校区']}
        },
        {
          path: '/campus/edit/:id',
          name: 'campus-edit',
          component: _import('school-module/campus/campus-add-edit'),
          meta: {title: ['学校管理', '校区管理', '编辑校区']}
        },
        {
          path: '/leader/list',
          name: 'leader-list',
          component: _import('school-module/leader/leader-list'),
          meta: {title: ['学校管理', '学校领导', '领导列表']}
        },
        {
          path: '/leader/add',
          name: 'leader-add',
          component: _import('school-module/leader/leader-add-edit'),
          meta: {title: ['学校管理', '学校领导', '新增领导']}
        },
        {
          path: '/leader/edit/:id',
          name: 'leader-edit',
          component: _import('school-module/leader/leader-add-edit'),
          meta: {title: ['学校管理', '学校领导', '编辑领导']}
        },
        {
          path: '/organization/list',
          name: 'organization-list',
          component: _import('school-module/organization/organization-list'),
          meta: {title: ['学校管理', '机构管理', '组织机构']}
        },
        {
          path: '/dimension/list',
          name: 'dimension-list',
          component: _import('school-module/dimension/dimension-list'),
          meta: {title: ['学校管理', '机构管理', '机构维度']}
        },
        {
          path: '/enterprise/list',
          name: 'enterprise-list',
          component: _import('school-module/enterprise/enterprise-list'),
          meta: {title: ['学校管理', '合作企业', '合作企业列表']}
        },
        {
          path: '/enterprise/add',
          name: 'enterprise-add',
          component: _import('school-module/enterprise/enterprise-add-edit'),
          meta: {title: ['学校管理', '合作企业', '新增合作企业']}
        },
        {
          path: '/enterprise/edit/:id',
          name: 'enterprise-edit',
          component: _import('school-module/enterprise/enterprise-add-edit'),
          meta: {title: ['学校管理', '合作企业', '编辑合作企业']}
        },
        {
          path: '/building/list',
          name: 'building-list',
          component: _import('school-module/house-property/building/building-list'),
          meta: {title: ['学校管理', '房产设施管理', '建筑物管理', '建筑物列表']}
        },
        {
          path: '/building/add',
          name: 'building-add',
          component: _import('school-module/house-property/building/building-add-edit'),
          meta: {title: ['学校管理', '房产设施管理', '建筑物管理', '新增建筑物']}
        },
        {
          path: '/building/edit/:id',
          name: 'building-edit',
          component: _import('school-module/house-property/building/building-add-edit'),
          meta: {title: ['学校管理', '房产设施管理', '建筑物管理', '编辑建筑物']}
        },
        {
          path: '/classroom/list',
          name: 'classroom-list',
          component: _import('school-module/house-property/classroom/classroom-list'),
          meta: {title: ['学校管理', '房产设施管理', '建筑物管理', '教室管理', '教室列表']}
        },
        {
          path: '/classroom/add',
          name: 'classroom-add',
          component: _import('school-module/house-property/classroom/classroom-add-edit'),
          meta: {title: ['学校管理', '房产设施管理', '建筑物管理', '教室管理', '新增教室']}
        },
        {
          path: '/classroom/edit/:id',
          name: 'classroom-edit',
          component: _import('school-module/house-property/classroom/classroom-add-edit'),
          meta: {title: ['学校管理', '房产设施管理', '建筑物管理', '教室管理', '编辑教室']}
        },
        {
          path: '/dormitory/list',
          name: 'dormitory-list',
          component: _import('school-module/house-property/dormitory/dormitory-list'),
          meta: {title: ['学校管理', '房产设施管理', '建筑物管理', '寝室管理', '寝室列表']}
        },
        {
          path: '/dormitory/add',
          name: 'dormitory-add',
          component: _import('school-module/house-property/dormitory/dormitory-add-edit'),
          meta: {title: ['学校管理', '房产设施管理', '建筑物管理', '寝室管理', '新增寝室']}
        },
        {
          path: '/dormitory/edit/:id',
          name: 'dormitory-edit',
          component: _import('school-module/house-property/dormitory/dormitory-add-edit'),
          meta: {title: ['学校管理', '房产设施管理', '建筑物管理', '寝室管理', '编辑寝室']}
        },
        {
          path: '/dormitory-type/list',
          name: 'dormitory-type-list',
          component: _import('school-module/house-property/dormitory-type/dormitory-type-list'),
          meta: {title: ['学校管理', '房产设施管理', '建筑物管理', '寝室管理', '寝室类型']}
        },
        {
          path: '/dictionary/list',
          name: 'dictionary-list',
          component: _import('school-module/dictionary/dictionary-list'),
          meta: {title: ['学校管理', '数据字典管理', '数据列表']}
        },

        // 教务管理
        {
          path: '/school-running/list',
          name: 'school-running-list',
          component: _import('administration-module/profession/school-running/school-running-list'),
          meta: {title: ['教务管理', '专业管理', '办学层次']}
        },
        {
          path: '/school-running/add',
          name: 'school-running-add',
          component: _import('administration-module/profession/school-running/school-running-add-edit'),
          meta: {title: ['教务管理', '专业管理', '新增办学层次']}
        },
        {
          path: '/school-running/edit/:id',
          name: 'school-running-edit',
          component: _import('administration-module/profession/school-running/school-running-add-edit'),
          meta: {title: ['教务管理', '专业管理', '编辑办学层次']}
        },
        {
          path: '/profession/list',
          name: 'profession-list',
          component: _import('administration-module/profession/profession-list/profession-list'),
          meta: {title: ['教务管理', '专业管理', '专业列表']}
        },
        {
          path: '/profession/add',
          name: 'profession-add',
          component: _import('administration-module/profession/profession-list/profession-list-add-edit'),
          meta: {title: ['教务管理', '专业管理', '新增专业列表']}
        },
        {
          path: '/profession/edit/:id',
          name: 'profession-edit',
          component: _import('administration-module/profession/profession-list/profession-list-add-edit'),
          meta: {title: ['教务管理', '专业管理', '编辑专业列表']}
        },
        {
          path: '/profession-direction/list',
          name: 'profession-direction-list',
          component: _import('administration-module/profession/profession-direction/profession-direction-list'),
          meta: {title: ['教务管理', '专业管理', '专业方向']}
        },
        {
          path: '/profession-direction/add',
          name: 'profession-direction-add',
          component: _import('administration-module/profession/profession-direction/profession-direction-add-edit'),
          meta: {title: ['教务管理', '专业管理', '新增专业方向']}
        },
        {
          path: '/profession-direction/edit/:id',
          name: 'profession-direction-edit',
          component: _import('administration-module/profession/profession-direction/profession-direction-add-edit'),
          meta: {title: ['教务管理', '专业管理', '编辑专业方向']}
        },
        {
          path: '/course-subject/list',
          name: 'course-subject-list',
          component: _import('administration-module/course/course-subject/course-subject-list'),
          meta: {title: ['教务管理', '课程管理', '课程学科']}
        },
        {
          path: '/course-subject/add',
          name: 'course-subject-add',
          component: _import('administration-module/course/course-subject/course-subject-add-edit'),
          meta: {title: ['教务管理', '课程管理', '新增课程学科']}
        },
        {
          path: '/course-subject/edit/:id',
          name: 'course-subject-edit',
          component: _import('administration-module/course/course-subject/course-subject-add-edit'),
          meta: {title: ['教务管理', '课程管理', '编辑课程学科']}
        },
        {
          path: '/training-program/list',
          name: 'training-program-list',
          component: _import('administration-module/training-program/training-program/training-program-list'),
          meta: {title: ['教务管理', '人才培养方案', '培养方案']}
        },
        {
          path: '/training-program/add',
          name: 'training-program-add',
          component: _import('administration-module/training-program/training-program/training-program-add-edit'),
          meta: {title: ['教务管理', '人才培养方案', '新增培养方案']}
        },
        {
          path: '/training-program/edit/:id',
          name: 'training-program-edit',
          component: _import('administration-module/training-program/training-program/training-program-add-edit'),
          meta: {title: ['教务管理', '人才培养方案', '编辑培养方案']}
        },
        {
          path: '/skills-critical/list',
          name: 'skills-critical-list',
          component: _import('administration-module/training-program/skills-critical/skills-critical-list'),
          meta: {title: ['教务管理', '人才培养方案', '技能鉴定管理']}
        },
        // 数据分析
        {
          path: '/data-analysis/school-situation',
          name: 'analysis-school-situation',
          component: _import('dataAnalysis-module/school-situation'),
          meta: {title: ['数据分析', '校情数据分析']}
        },
        {
          path: '/data-analysis/schoolRoll-situation',
          name: 'analysis-schoolRoll-situation',
          component: _import('dataAnalysis-module/schoolRoll-situation'),
          meta: {title: ['数据分析', '学籍数据分析']}
        },
        {
          path: '/data-analysis/enrollmentInfor-situation',
          name: 'analysis-enrollmentInfor-situation',
          component: _import('dataAnalysis-module/enrollmentInfor-situation'),
          meta: {title: ['数据分析', '招生数据分析']}
        },
        // 数据中心API页面
        {
          path: '/data/list',
          name: 'data-list',
          component: _import('datacenter-module/data-list'),
          meta: {title: ['数据中心API页面', 'API查看页面']}
        },
        {
          path: '/data/detail',
          name: 'data-detail',
          component: _import('datacenter-module/data-detail'),
          meta: {title: ['数据中心API页面', 'API查看页面', 'API详情']}
        },
        // 图表展示
        {
          path: '/show/1',
          name: 'chart-show1',
          component: _import('charts-module/charts-show1'),
          meta: {title: ['图表展示', '数据中台-整体概况']}
        },
        {
          path: '/show/2',
          name: 'chart-show2',
          component: _import('charts-module/charts-show2'),
          meta: {title: ['图表展示', '数据中台-教师情况']}
        },
        {
          path: '/show/3',
          name: 'chart-show3',
          component: _import('charts-module/charts-show3'),
          meta: {title: ['图表展示', '数据中台-学生情况']}
        },
        //  系统管理
        {
          path: '/role/list',
          name: 'role-list',
          component: _import('system-module/role/role-list'),
          meta: {title: ['系统管理', '角色管理', '角色列表']}
        },
        {
          path: '/user/list',
          name: 'user-list',
          component: _import('system-module/user/user-list'),
          meta: {title: ['系统管理', '用户管理', '用户列表']}
        }
      ],
      beforeEnter (to, from, next) {
        let Authorization = sessionStorage.getItem('Authorization')
        if (!Authorization) {
          next({ name: 'login' })
        }
        next()
      }
    },
    { path: '/error/404', name: 'error404', component: _import('common/error_404') },
    { path: '*', redirect: '/error/404' }
  ]
})
