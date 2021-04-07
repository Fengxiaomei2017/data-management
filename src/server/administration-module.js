import http from './http'

// 创建专业数据
export const addProfessionalInfo = (data) => http('/app/professionalBasicInfo', data, 'POST');

// 分页查询专业数据
export const getProfessionalInfo = (data) => http('/app/professionalBasicInfo', data);

// 更新专业数据
export const updateProfessionalInfo = (data) => http('/app/professionalBasicInfo/' + data.id, data, 'PUT');

// 删除专业数据
export const deleteProfessionalInfo = (id) => http('/app/professionalBasicInfo/' + id, {}, 'DELETE');

// 创建课程数据
export const addCourses = (data) => http('/app/courses', data, 'POST');

// 分页查询课程数据
export const getCourses = (data) => http('/app/courses', data);

// 更新课程数据
export const updateCourses = (data) => http('/app/courses/' + data.id, data, 'PUT');

// 删除课程数据
export const deleteCourses = (id) => http('/app/courses/' + id, {}, 'DELETE');

// 教学计划
// 创建教学计划
export const addTeachingPlan = (data) => http('/app/teachingPlan', data, 'POST');

// 获得所以教学计划
export const getTeachingPlan = (data) => http('/app/teachingPlan', data);

// 更新教学计划
export const updateTeachingPlan = (data) => http('/app/teachingPlan/' + data.id, data, 'PUT');

// 删除教学计划
export const deleteTeachingPlan = (id) => http('/app/teachingPlan/' + id, {}, 'DELETE');

// 获得教学计划课程信息列表
export const getTeachingPlanCourseInfo = (id) => http('/app/teachingPlan/courseInfoList/' + id, {});

// 创建教学计划课程
export const addTeachingPlanCourse = (planId, data) => http('/app/teachingPlan/courseInfo/' + planId, data, 'POST');

// 更新教学计划课程信息
export const updateTeachingPlanCourse = (data) => http('/app/teachingPlan/courseInfo' + '?planId=' + data.planId + '&infoId=' + data.id, data, 'PUT');

// 获得教学计划单个课程信息
export const getSinglePlanCourseInfo = (data) => http('/app/teachingPlan/courseInfo', data);

// 删除教学计划课程信息
export const deleteTeachingPlanCourse = (planId, infoId) => http('/app/teachingPlan/courseInfo' + '?planId=' + planId + '&infoId=' + infoId, {}, 'DELETE');
