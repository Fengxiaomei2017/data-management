import http from './http'

// ========  学年学期  =========
// 新增学期
export const addSemesterDto = (data) => http('/app/semester', data, 'POST');

// 分页查询学期数据
export const getSemester = (data) => http('/app/semester', data);

// 删除学期数据
export const deleteSemester = (id) => http('/app/semester/' + id, {}, 'DELETE');

// 更新学期数据
export const updateSemester = (data) => http('/app/semester/' + data.id, data, 'PUT');

// 查询学期数据详细信息
// export const searchSemester = (data) => http('/app/semester', data, 'GET', true);
export const searchSemester = (id) => http('/app/semester/' + id, {});

// ========  年级管理 ==========
// 新增年级
export const addSchoolGrade = (data) => http('/app/schoolGrade', data, 'POST');

// 分页查询年级数据
export const getSchoolGrade = (data) => http('/app/schoolGrade', data);

// 删除年级数据
export const deleteSchoolGrade = (id) => http('/app/schoolGrade/' + id, {}, 'DELETE');

// 更新年级数据
// export const updateSchoolGrade = (data) => http('/app/schoolGrade', data, 'PUT', true);
export const updateSchoolGrade = (data) => http('/app/schoolGrade/' + data.id, data, 'PUT');
