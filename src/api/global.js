import request from '@utils/http'

export default {
  // 授权
  getToken(args) {
    const url = `/api/jwt/customer/login`
    return request.get({url, ...args})
  }
}
