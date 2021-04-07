import http from './http';

// ===学生基础信息===
// 创建学生基础信息
export const addStudent = (data) => http('/app/student/student', data, 'POST');

// 更新学生基础信息
export const updateStudent = (data) => http('/app/student/student/' + data.id, data, 'PUT');

// 分页查询学生基础信息（包含家庭、成员信息）
export const getStudent = (data) => http('/app/student', data);

// 根据学生ID查询
export const getStudentInfo = (id) => http('/app/student/' + id, {});

// 删除学生基础信息
export const deleteStudent = (id) => http('/app/student/student/' + id, {}, 'DELETE');

// ===学生家庭信息===
// 创建学生家庭信息
export const addStudentFamily = (data) => http('/app/student/studentFamily/' + data.id, data, 'POST');

// 更新学生家庭信息
export const updateStudentFamily = (data) => http('/app/student/studentFamily/' + data.id, data, 'PUT');

// 删除学生家庭信息
export const deleteStudentFamily = (id) => http('/app/student/studentFamily/' + id, {}, 'DELETE');

// ===学生家庭成员信息===
// 创建学生家庭成员信息
export const addStudentFamilyMemberInfo = (data) => http('/app/student/studentFamilyMemberInfo/' + data.id, data, 'POST');

// 更新学生家庭成员信息
export const updateStudentFamilyMemberInfo = (studentId, studentFamilyMemberId, data) => 
http('/app/student/studentFamilyMemberInfo' + '?studentId=' + studentId + '&studentFamilyMemberId=' + studentFamilyMemberId, data, 'PUT');

// 删除家庭成员信息
export const deleteStudentFamilyMemberInfo = (studentId, studentFamilyMemberId) => http('/app/student/studentFamilyMemberInfo' + '?studentId=' + studentId + '&studentFamilyMemberId=' + studentFamilyMemberId, {}, 'DELETE');

// ===学籍信息===
// 创建学籍信息
export const addStudentSchoolRoll = (data) => http('/app/student/studentSchoolRoll/' + data.id, data, 'POST');

// 更新学籍信息
export const updateStudentSchoolRoll = (data) => http('/app/student/studentSchoolRoll/' + data.id, data, 'PUT');

// 删除学籍信息
export const deleteStudentSchoolRoll = (id) => http('/app/student/studentSchoolRoll/' + id, {}, 'DELETE');
