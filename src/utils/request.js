import axios from 'axios'
import { baseURL } from '../config'

const request = axios.create({
  baseURL: baseURL,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

/**
 * 请求拦截
 */
request.interceptors.request.use(config => {
  // token
  let Authorization = sessionStorage.getItem('Authorization')
  if (Authorization) {
    Authorization = JSON.parse(Authorization)
    config.headers['Authorization'] = Authorization.token_type + ' ' + Authorization.access_token
  }

  // 对请求数据做点什么
  return config
},
error => {
  // 对请求错误做点什么
  return Promise.reject(error.response)
}
)

/**
 * 响应拦截
 */
request.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    return response
  },
  error => {
    // 对响应错误做点什么
    return Promise.reject(error.response)
  }
)

export default request
