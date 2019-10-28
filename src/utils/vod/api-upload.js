import request from '@utils/http'

export default {
  /**
   * 获取签名
   * @returns {Promise.<*>}
   */
  getUploadSign() {
    const url = `/post_vod_sign`
    const doctor = () => {}
    return request.post({url, doctor})
  },
  /**
   * 数据入库
   * @param data
   * @returns {Promise.<*>}
   */
  saveFile(data) {
    const url = `/api/merchant/check_default_image`
    const doctor = () => {}
    return request.post({url, data, doctor})
  }
}
