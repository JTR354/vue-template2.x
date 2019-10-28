import Fly from '@flyio'

class HTTP {
  static getInstance() {
    if (!this.instance) {
      this.instance = new HTTP()
    }
    return this.instance
  }
  constructor() {
    this.http = new Fly()
    this.callback = {}
    this.http.interceptors.request.use((request) => {
      if (typeof this.callback.willRequest === 'function') {
        request = this.callback.willRequest(request)
      }
      return request
    })
    // 添加响应拦截器，响应拦截器会在then/catch处理之前执行
    this.http.interceptors.response.use(
      (response) => {
        // 只将请求结果的data字段返回
        if (typeof this.callback.willResponse === 'function') {
          response = this.callback.willResponse(response)
        }
        return response
      },
      (err) => {
        // 发生网络错误后会走到这里
        return Promise.resolve(err)
      }
    )
  }
  get(args) {
    return this._formatRequestData(args, {method: 'GET'})
  }
  post(args) {
    return this._formatRequestData(args, {method: 'POST'})
  }
  put(args) {
    return this._formatRequestData(args, {method: 'PUT'})
  }
  delete(args) {
    return this._formatRequestData(args, {method: 'DELETE'})
  }
  _formatRequestData(args, {method}) {
    const {url, data} = args
    if (typeof this.callback.beforeRequest === 'function') {
      this.callback.beforeRequest(args)
    }
    return this.http.request(url, data, {
      method
    }).then((response) => {
      return checkStatus(response)
    }).then(res => {
      if (typeof this.callback.responseFulfilled === 'function') {
        return this.callback.responseFulfilled(res, args)
      } else {
        return res
      }
    })
  }
  // 设置回调函数
  setCallback(callback) {
    this.callback = {...this.callback, ...callback}
  }
  // 设置头部信息
  setHeaders(args = {}) {
    for (let [key, value] of Object.entries(args)) {
      this.http.config.headers[key] = value
    }
  }
  // 初始化函数
  init(fn) {
    fn && fn(this.http)
  }
}

// 检查http状态码
function checkStatus(response) {
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status < 400)) {
    return response.data || {}
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  return {
    message: '网络开小差'
  }
}

export default HTTP.getInstance()
