import http from './http'

// ========  角色管理 ==========
// 新增角色
export const addRole = (data) => http('/identity/roles', data, 'POST')

// 分页查询角色数据
export const getRolesList = (data) => http('/identity/roles', data)

// 删除角色数据
export const deleteRole = (id) => http('/identity/roles/' + id, {}, 'DELETE')

// 更新角色数据
export const updateRole = (data) => http('/identity/roles/' + data.id, data, 'PUT')

// ========  用户管理 ==========
// 新增用户
export const addUser = (data) => http('/identity/users', data, 'POST')

// 分页查询用户数据
export const getUsersList = (data) => http('/identity/users', data)

// 删除用户数据
export const deleteUser = (id) => http('/identity/users/' + id, {}, 'DELETE')

// 更新用户数据
export const updateUser = (data) => http('/identity/users/' + data.id, data, 'PUT')
