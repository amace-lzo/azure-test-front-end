import axios from '@/api/api.js'

export function getUserInfo (params) {
  return axios.get('/user/allUserInfo', {
    params
  })
}
