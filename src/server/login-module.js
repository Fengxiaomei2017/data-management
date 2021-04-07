import http from './http'

// 登录
export const loginSystem = (data) => http('/account/login', data, 'POST')
// 登出
export const loginOutSystem = (data) => http('/app/appUser/logout', data, 'POST')
