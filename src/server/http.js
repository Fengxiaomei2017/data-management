import request from '../utils/request'
import { Message } from 'element-ui';

function http (url, params = {}, method = 'GET') {
  return new Promise((resolve, reject) => {
    let req;
    if(method === 'GET' || method === 'DELETE'){
      req = { url, method, params }
    } else {
      req = { url, method, data: params }
    }

    // addUrl ? url = url + '/' + params : url;
    // if(method === 'GET' || method === 'DELETE'){
    //   req = { url, method, params }
    // } else {
    //   req = { url, method, data: params }
    // }
    
    request(req)
      .then(({data, status}) => {
        if (status === 200) {
          resolve(data);
        } else {
          Message.error('系统返回错误');
          reject(data)
        }
        // if (data.success) {
        //   resolve(data.result)
        // } else {
        //   reject('系统错误')
        // }
        // if (data) {
        //   resolve(data)
        // } else {
        //   reject('系统返回错误')
        // }
      })
      .catch(({data}) => {
        // Message.error('系统返回错误');
        reject(data)
        // if (!data.success) {
        //   reject(data.error.message)
        // }else{
        //   reject('系统返回错误')
        // }
      })
  })
}

export default http
