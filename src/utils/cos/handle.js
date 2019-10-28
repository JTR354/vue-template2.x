import {fileType} from './file-config'

const {IMAGE_TYPE, VIDEO_TYPE} = fileType
const CHOICE_ERROR = '选择文件类型错误'

/**
 * @param type 文件类型
 * @param count 选择数量
 * @returns {Promise}
 */
export function fileController(type, count = 1) {
  return new Promise((resolve, reject) => {
    let input = document.createElement('input')
    input.type = 'file'
    if (count > 1) {
      input.multiple = 'multiple'
    }
    input['onchange'] = function() {
      let files = this.files
      let arr = _changeToArray(files)
      arr = arr.splice(0, count)
      switch (type) {
        case IMAGE_TYPE:
          if (!_isAllImage(arr)) {
            reject(_handleException(CHOICE_ERROR))
          }
          resolve(arr)
          break
        case VIDEO_TYPE:
          if (!_isAllVideo(arr)) {
            reject(_handleException(CHOICE_ERROR))
          }
          resolve(arr)
          break
        default:
          break
      }
    }
    input.click()
  })
}

function _isAllImage(arr) {
  return arr.some((val) => /image/.test(val.type))
}

function _isAllVideo(arr) {
  return arr.some((val) => /video/.test(val.type))
}

function _changeToArray(files) {
  return Array.from(files)
}

function _handleException(error) {
  return new Error(error)
}

// 文件类型转流
export function createFile(options) {
  let buffer = new ArrayBuffer(options.size || 0)
  let arr = new Uint8Array(buffer)
  ;[].forEach.call(arr, function(char, i) {
    arr[i] = 0
  })
  let opt = {}
  options.type && (opt.type = options.type)
  let blob = new Blob([buffer], options)
  return blob
}

// 文件类型base64
export function fileReader2Base64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (event) => {
      resolve(event.target.result)
    }
  })
}

// base64转流
export function getBlobBydataURI(dataURI, type = 'image/jpeg') {
  let binary = atob(dataURI.split(',')[1])
  let array = []
  for (let i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i))
  }
  return new Blob([new Uint8Array(array)], {type: type})
}

export function getObjectURL(file) {
  let url
  if (window.createObjcectURL !== undefined) {
    url = window.createOjcectURL(file)
  } else if (window.URL !== undefined) {
    url = window.URL.createObjectURL(file)
  } else if (window.webkitURL !== undefined) {
    url = window.webkitURL.createObjectURL(file)
  }
  return url
}

export function createFormData($Blob, type = 'image/jpeg') {
  let imageExt = '.' + type.split('/')[1]
  let formData = new FormData()
  formData.append('file', $Blob, 'file_' + Date.now() + imageExt)
  return formData
}
