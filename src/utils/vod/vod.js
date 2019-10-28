import Upload from './api-upload'

const time = 1000

/*eslint-disable*/

function getSignature(callback) {
  Upload.getUploadSign()
    .then((res) => {
      callback && callback(res.data.signature)
    })
    .catch((err) => {
      console.error(err)
      throw new Error('获取签名失败')
    })
}

export function uploadFiles(file, callback) {
  return new Promise((resolve, reject) => {
    qcVideo.ugcUploader.start({
      videoFile: file, // 视频，类型为 File
      getSignature: getSignature, // 前文中所述的获取上传签名的函数
      error: reject,
      finish: (res) => {
        setTimeout(() => {
          Upload.saveFile({file_id: res.fileId}).then((response) => {
            let result = Object.assign({}, response, {vod: res})
            resolve(result)
          })
        }, time)
      },
      progress(result) {
        let curr = result.curr * 100
        curr = Math.min(99, Math.floor(curr))
        callback && callback(curr, result)
      }
    })
  })
}

export function cancelUpload(reuslt) {
  qcVideo.ugcUploader.cancel(reuslt)
}
