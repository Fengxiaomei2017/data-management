import http from './http'
// 校情数据分析-----
// 获取教室概况
export const getClassroomOverview = (data) => http('/app/schoolDataAnalysis/classroomOverview', data);

// 获取课程概况
export const getCourseOverview = (data) => http('/app/schoolDataAnalysis/courseOverview', data);

// 获取专业概况
export const getMajorOverview = (data) => http('/app/schoolDataAnalysis/majorOverview', data);

// 获取学校总体情况数据
export const getSchoolOverview = (data) => http('/app/schoolDataAnalysis/schoolOverview', data);

// 获取学生生源地数据
export const getStudentBirthPlaceDistribution = (data) => http('/app/schoolDataAnalysis/studentBirthPlaceDistribution', data);

// 获取教师情况数据
export const getTeacherOverview = (data) => http('/app/schoolDataAnalysis/teacherOverview', data);

// 招生数据分析------
// 获取专业招生情况数据
export const getProfessionalEnrollmentSurvey = (data) => http('/app/enrollmentDataAnalysis/professionalEnrollmentSurveys', data);

// 获取各学年招生情况数据
export const getAcademicYearEnrollmentSurveys = (data) => http('/app/enrollmentDataAnalysis/academicYearEnrollmentSurveys', data);

// 获取招生报道情况数据
export const getEnrollmentReportSurvey = (data) => http('/app/enrollmentDataAnalysis/enrollmentReportSurvey', data);


// ===========  学籍数据分析  ========
// 查询学籍数据
export const getSchoolRollData = (data) => http('/app/schoolRollDataAnalysis/schoolRollDataMining', data);
