import request from '@utils/http'
import storage from 'storage-controller'
import {API_PUB} from '../constant'

/**
 * 数据入库
 * @param data
 * @returns {Promise.<*>}
 */
function _saveFile(data) {
  const url = `${API_PUB}/api/cos/save-file`
  return request.post({method: 'post', url, data})
}

/**
 * 获取cos签名
 * @param options
 * @param callback
 * @private
 */
function _getAuthorization(options, callback) {
  const method = (options.Method || 'get').toLowerCase()
  const key = options.Key || ''
  // const pathname = key.indexOf('/') === 0 ? key : '/' + key
  const pathname = key
  const Authorization = storage.get('auth.currentUser') ? storage.get('auth.currentUser').access_token : ''
  const url = API_PUB + '/api/cos/h5-upload-image-sign?method=' + method + '&image=' + encodeURIComponent(pathname)
  const xhr = new XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.setRequestHeader('Authorization', Authorization)
  xhr.setRequestHeader('current-corp', process.env.VUE_APP_CURRENT_CORP)
  xhr.onload = function(e) {
    let AuthData
    try {
      AuthData = JSON.parse(xhr.responseText)
    } catch (e) {
      console.error(e)
    }
    if (AuthData.data && AuthData.data.authorization) {
      callback(null, AuthData.data)
    } else {
      console.error('获取签名出错')
    }
  }
  xhr.onerror = function(e) {
    console.error('获取签名出错', e)
  }
  xhr.send()
}

/**
 * 跳过选择图片的操作，直接上传
 * @param fileType 文件类型
 * @param filePaths 文件路径
 * @param showProcess 展示进度条方法
 * @param processCallBack 进度条回调方法let
 * @returns {Promise<any>}
 */
export function uploadFiles({fileType, files, showProcess, processCallBack}) {
  if (!files.map) {
    throw new Error('please use Array')
  }
  showProcess && showProcess()
  return new Promise((resolve, reject) => {
    let requests = files.map((file) => {
      let Key = Date.now() + '-' + file.name
      return new Promise((resolve, reject) => {
        _getAuthorization({Method: 'PUT', Key: Key}, (err, info) => {
          if (err) {
            console.error(err)
            return
          }
          const auth = info['authorization']
          const XCosSecurityToken = info['x_cos_security_token']
          const Bucket = info['bucket']
          const Region = info['region']
          const protocol = location.protocol === 'https:' ? 'https:' : 'http:'
          const prefix = protocol + '//' + Bucket + '.cos.' + Region + '.myqcloud.com/'
          const url = prefix + info.pathname
          const xhr = new XMLHttpRequest()
          xhr.open('PUT', url, true)
          xhr.setRequestHeader('Authorization', auth)
          XCosSecurityToken && xhr.setRequestHeader('x-cos-security-token', XCosSecurityToken)
          xhr.upload.onprogress = function(e) {
            let progress = Math.floor((e.loaded / e.total) * 10000) / 100
            processCallBack && processCallBack(progress)
          }
          xhr.onload = function() {
            if (xhr.status === 200 || xhr.status === 206) {
              _saveFile({path: '/' + encodeURIComponent(info.pathname), type: 'image'}).then((resp) => {
                resolve(resp)
              })
            } else {
              reject(new Error('文件 ' + Key + ' 上传失败，状态码：' + xhr.status))
            }
          }
          xhr.onerror = function() {
            reject(new Error('文件 ' + Key + ' 上传失败，请检查是否没配置 CORS 跨域规则'))
          }
          xhr.send(file)
        })
      })
    })
    Promise.all(requests)
    .then(resolve)
    .catch(reject)
  })
}
