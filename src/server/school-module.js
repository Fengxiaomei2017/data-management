import http from './http'

// ===学校信息===
// 创建学校信息
export const addSchoolBasic = (data) => http('/app/schoolBasic', data, 'POST');

// 获取学校信息
export const getSchoolBasic = (data) => http('/app/schoolBasic', data);

// 更新学校信息
export const updateSchoolBasic = (data) => http('/app/schoolBasic/' + data.id, data, 'PUT');

// 删除学校信息
// export const deleteSchoolBasic = (id) => http('/app/schoolBasic/' + id, {}, 'DELETE');

// ===建筑物===
// 创建校区数据
export const addCampus = (data) => http('/app/campus', data, 'POST');

// 获取校区数据
export const getCampus = (data) => http('/app/campus', data);

// 获取校区详细信息
export const getCampusDetail = (id) => http('/app/campus/' + id, {});

// 更新校区数据
export const updateCampus = (data) => http('/app/campus/' + data.id, data, 'PUT');

// 删除校区数据
export const deleteCampus = (id) => http('/app/campus/' + id, {}, 'DELETE');

// ===学校机构===
// 创建学校机构数据
export const addSchoolOrganization = (data) => http('/app/schoolOrganization', data, 'POST');

// 获取学校机构数据
export const getSchoolOrganization = (data) => http('/app/schoolOrganization', data);

// 更新学校机构数据
export const updateSchoolOrganization = (data) => http('/app/schoolOrganization/' + data.id, data, 'PUT');

// 删除学校机构数据
export const deleteSchoolOrganization = (id) => http('/app/schoolOrganization/' + id, {}, 'DELETE');


// ===建筑物===
// 创建新的建筑物
export const addBuilding = (data) => http('/app/building', data, 'POST');

// 获取建筑物信息
export const getBuilding = (id) => http('/app/building/' + id, {});

// 更新建筑物信息
export const updateBuilding = (data) => http('/app/building/' + data.id, data, 'PUT');

// 删除建筑物信息
export const deleteBuilding = (id) => http('/app/building/' + id, {}, 'DELETE');

// 获取建筑物列表
export const getBuildingList = (data) => http('/app/building', data);

// 从指定的建筑物创建新的教室
export const addClassRoom = (data) => http('/app/classRoom', data, 'POST');

// 获得教室分页列表
export const getClassRoomList = (data) => http('/app/classRoom', data);

// 更新教室
export const updateClassRoom = (data) => http('/app/classRoom/' + data.id, data, 'PUT');

// 删除教室
export const deleteClassRoom = (id) => http('/app/classRoom/' + id, {}, 'DELETE');

// 创建学生宿舍数据
export const addStudentDormitory = (data) => http('/app/studentDormitory', data, 'POST');

// 获得学生宿舍数据
export const getStudentDormitory = (data) => http('/app/studentDormitory', data);

// 修改学生宿舍数据
export const updateStudentDormitory = (data) => http('/app/studentDormitory/' + data.id, data, 'PUT');

// 删除学生宿舍数据
export const deleteStudentDormitory = (id) => http('/app/studentDormitory/' + id, {}, 'DELETE');

// 关键字查询学生宿舍数据详细信息
export const searchStudentDormitory = (id) => http('/app/studentDormitory/'+ id, {});

// 创建新的校外实习基地
export const addOffCampusInternshipBase = (data) => http('/app/offCampusInternshipBase', data, 'POST');

// 获得新的校外实习基地列表
export const getOffCampusInternshipBaseList = (data) => http('/app/offCampusInternshipBase', data);

// 获得新的校外实习基地
export const getOffCampusInternshipBase = (id) => http('/app/offCampusInternshipBase/' + id, {});

// 修改新的校外实习基地
export const updateOffCampusInternshipBase = (data) => http('/app/offCampusInternshipBase/' + data.id, data, 'PUT');

// 删除新的校外实习基地
export const deleteOffCampusInternshipBase = (id) => http('/app/offCampusInternshipBase/' + id, {}, 'DELETE');

// ===字典===
// 创建字典超级管理员可以用，用于创建基础字典
export const addDictionary = (data) => http('/app/dataDictionary/dictionary', data, 'POST');

// 创建字典项
export const addDataDictionary = (dataDictionaryId, data) => http('/app/dataDictionary' + '?dataDictionaryId=' + dataDictionaryId, data, 'POST');

// 获取字典
export const getDataDictionary = (data) => http('/app/dataDictionary', data);

// 获取数据字典详情
export const getDataDictionaryDetail = (id) => http('/app/dataDictionary/' + id, {});

// 更新字典，超级管理员可以用
export const updateDictionary = (data) => http('/app/dataDictionary/dictionary/' + data.id, data, 'PUT');

// 更新字典项
export const updateDataDictionary = (dataDictionaryId, data) => http('/app/dataDictionary' + '?dataDictionaryId=' + dataDictionaryId, data, 'PUT');

// 删除字典，超级管理员可以用
export const deleteDictionary = (id) => http('/app/dataDictionary/dictionary/' + id, {}, 'DELETE');

// 删除字典项
export const deleteDataDictionary = (dictionaryId, dictionaryEntryId) => http('/app/dataDictionary' + '?dictionaryId=' + dictionaryId + '&dictionaryEntryId=' + dictionaryEntryId, {}, 'DELETE');