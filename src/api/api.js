import axios from 'axios'
import {
  Message,
  Loading
} from 'element-ui'
import qs from 'qs'
// 判断是否是生产环境
const isPro = process.env.NODE_ENV === 'production' // process.env.NODE_ENV用于区分是生产环境还是开发环境
// 配置不同的baseURL
let baseURL = isPro ? '/weixin-api' : '/api'
const service = axios.create({
  baseURL: baseURL,
  timeout: 30000 // 请求超时时间
})
let loading = ''
// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // console.log(config)
    // 在请求发送之前做一些处理
    if (!(config.headers['Content-Type'])) {
      loading = Loading.service({
        lock: true,
        text: '加载中...',
        spinner: 'el-icon-loading',
        background: 'rgba(255,255,255,0.7)',
        customClass: 'request-loading'
      })
      if (config.method === 'post') {
        config.headers['Content-Type'] =
          'application/x-www-form-urlencoded;charset=UTF-8'
        for (var key in config.data) {
          if (config.data[key] === '') {
            delete config.data[key]
          }
        }
        config.data = qs.stringify(config.data)
      } else {
        config.headers['Content-Type'] =
          'application/x-www-form-urlencoded;charset=UTF-8'
        // config.params
      }
    }
    const token = 'token'
    // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    if (token) {
      config.headers['Authorization'] = token
    }
    return config
  },
  (error) => {
    loading.close()

    // 发送失败
    console.log('发送失败', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    loading.close()
    const dataAxios = response.data
    // 这个状态码是和后端约定的
    return dataAxios
  },
  (error) => {
    Message({
      message: '系统错误,请稍后重试！',
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
