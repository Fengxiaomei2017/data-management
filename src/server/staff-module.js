import http from './http'

// 创建职工基础信息
export const addSchoolFacultyBasic = (data) => http('/app/faculty', data, 'POST');

// 获取职工基础信息
export const getSchoolFacultyBasic = (data) => http('/app/faculty', data);

// 更新职工基础信息
export const updateSchoolFacultyBasic = (data) => http('/app/faculty/' + data.id, data, 'PUT');

// 创建教职工家庭情况
export const addFamilySituation = (data) => http('/app/faculty/setFamilySituation/' + data.id, data, 'POST');

// 获取教职工家庭情况
export const getFamilySituation = (id) => http('/app/faculty/familySituation/' + id, {});

// 更新教职工家庭情况
export const updateFamilySituation = (data) => http('/app/faculty/familySituation/' + data.id, data, 'PUT');

// 创建教职工家庭成员信息
export const addFamilyMemberInformation = (data) => http('/app/faculty/familyMemberInfo/' + data.id, data, 'POST');

// 获取教职工家庭成员信息
export const getFamilyMemberInformation = (id) => http('/app/faculty/familyMemberInfoList/' + id, {});

// 删除教职工家庭成员信息
export const deleteFamilyMemberInformation = (data) => http('/app/faculty/familyMemberInfo', data, 'DELETE');

// 更新教职工家庭成员信息
export const updateFamilyMemberInformation = (data) => http('/app/faculty/familyMemberInfo', data, 'PUT');

// 创建教职工联系信息
export const addContactInformation = (data) => http('/app/faculty/setContactInfo/' + data.id, data, 'POST');

// 获取教职工联系信息
export const getContactInformation = (id) => http('/app/faculty/contactInfo/' + id, {});

// 更新教职工联系信息
export const updateContactInformation = (data) => http('/app/faculty/contactInfo/' + data.id, data, 'PUT');

// 删除教职工
export const deleteSchoolFaculty = (id) => http('/app/faculty/' + id, {}, 'DELETE');
