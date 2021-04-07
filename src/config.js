// 请求接口的前缀路径
export const baseURL = process.env.NODE_ENV === 'production' ? '/api' : 'http://dev.api.basicdata.gedewisdom.com/api';
// 页码数
export const pageSizes = [10, 20, 50];   // 页码数数组
export const pageSize = 10;    // 默认页码数


// =========  参数值 ========
// 过期  未过期
export const overdueList = [{label: '过期', value: '1'},{label: '未过期', value: '0'}];
export const isList = [{value: '是'},{value: '否'}];
export const genderCode = [{value: '男'},{value: '女'}];
