# http说明文档

> http采用单例模式，可以放心的important  
> 剥离http的业务功能至--> http-handler.js  
> 参数采用Object格式

## 基本使用
```js
// api 文件中
import request from '@utils/http'

export default {
  // 授权
  getToken(args) {
    const url = `/api/jwt/customer/login`
    return request.get({url, ...args})
  }
}
// 页面中使用
let data = {hello: 'world'}
API.Jwt.getToken({data}).then((res) => {
  // do some thing
})
```

## 页面调用参数简述
> 设计说明:
>> 1. 方便业务开发,默认提供全局toast处理,loading处理  
>> 2. 可以在async await异步语法糖中联系请求,不主动抛出响应阶段的异常;每个请求配置了doctor参数进行错误处理,注意上下文this;错误信息也会返回至then方法中  
>> 3. formatter函数方便处理请求回来的数据,建议处理掉多余的数据,介绍页面中的监听属性  
>> 4. doctor会抛出对应的接口路由  

- loading 默认为true; Boolean 或 Function 页面请求loading
- toast 默认为true; Boolean 或 Function 页面异常toast
- formatter 默认为undefined; Function 页面处理后台数据拦截,必须return处理完的数据
- doctor 默认为undefined;  Function 页面报错处理函数

```js
// loading 为function 不会执行默认的关闭loading方法
let data = {hello: 'world'}
API.Jwt.getToken({
  data,
  loading:() => {
    // to do some thing
  },
  toast:() => {
    // to do some thing
  },
  formatter:(err, res) => {
    // format res 
    if (err) { // 当有错误的时候处理函数
      // ...
    }
    return res
  },
  /**
  * 
* @param res 响应数据
* @param url 请求路由
*/
  doctor:(res, url) =>{
    // to do some thing, fix error
  }
}).then((res) => {
  // do some thing
})
```
### doctor参数说明
> doctor默认值为undefined；此时后台code码错误走catch，正确逻辑走then
```js
API.Global.getToken().then(res => {
  // 正确的逻辑
}).catch(e => {
  // 错误逻辑
  console.log(e, 'catch')
})

```
> doctor 为function时；此时后台的code码不会走catch;相当于自己的方法处理;
>> 注意： 此时then也会执行

```js
// 一般的业务场景用于连续的接口调用
async function f() {
  try {
    let res = await API.Global.getToken({
      doctor: (e) => {
        // 自己处理错误逻辑
      }
    })
    // res 也会返回后台的数据，此时需要自己处理
    res = await API.Global.getToken2({
      doctor: (e) => {
        // 自己处理错误逻辑
      }
    })
  } catch (e) {
    // 不走catch
  }
}
```
## HTTP-API简述

- init 初始化http的基本配置

```js
HTTP.init(http => {
  http.config.timeout = TIME_OUT
  http.config.headers = COMMON_HEADER
  http.config.baseURL = baseURL.api
})
```

- setHeaders 设置http头部信息

> 建议vuex全局统一控制权限,然后设置头部信息;    
> 不需要每次请求前进行拦截然后设置头部信息,通过wx.getStorageSync(...token)...  

```js
// 设置头部信息
HTTP.setHeaders({
  'Authorization': 'token',
  'Current-Shop': 'shopId'
})
```

- setCallback 注册http生命周期的函数
  - beforeRequest 请求前
  - willRequest 请求拦截器
  - willResponse 响应拦截器
  - responseFulfilled 响应完成

```js
 HTTP.setCallback({
   // 请求前处理
   beforeRequest({loading = true}) {
     // ... do to some thing
   },
   // 请求拦截
   willRequest(request) {
     // ... do to some thing
     return request
   },
   // 响应拦截
   willResponse(response) {
     // ... do to some thing
     return response
   },
   // 请求完成后的逻辑处理
   responseFulfilled(res, {loading = true, toast = true, formatter, doctor}) {
     // ... do to some thing
     return res
   }
 })
```
