const REG_PHONE = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[0-9])\d{8}$/

// 获取设备信息
export function getPlatform() {
  const navigator = window.navigator
  const u = navigator.userAgent
  const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
  return isiOS ? 'ios' : 'android'
}

// 电话号码正则
export function checkIsPhoneNumber(phoneNum) {
  return REG_PHONE.test(phoneNum)
}

// im 日期格式化
export function radarTimeFormat(time) {
  let resTime = new Date(time * 1000)
  let nowDate = resTime.toLocaleDateString()
  let nowTime = formatTime(resTime)
  let todayTime = new Date()
  let todayDate = formatDateTime(todayTime)
  let yesToday = todayTime.setDate(todayTime.getDate() - 1)
  let yesTodayDateTime = new Date(yesToday)
  let yesTodayDate = formatDateTime(yesTodayDateTime)
  nowDate = nowDate.replace(todayDate, '')
  nowDate = nowDate.replace(yesTodayDate, '昨天').trim()
  nowTime = nowTime.replace(todayDate, '')
  nowTime = nowTime.replace(yesTodayDate, '昨天').trim()
  return {
    date: nowDate,
    time: nowTime
  }
}

export function formatDateTime(time) {
  let date = new Date(time)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return [year, month, day].join('/')
}

export function formatTime(time) {
  let date = new Date(time)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()

  const t1 = [year, month, day].join('/')
  const t2 = [hour, minute].map(formatNumber).join(':')
  return `${t1} ${t2}`
}

export function formatNumber(n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}
/* 深度拷贝 */
export function objDeepCopy(source) {
  let sourceCopy = source instanceof Array ? [] : {}
  for (let item in source) {
    sourceCopy[item] = typeof source[item] === 'object' ? objDeepCopy(source[item]) : source[item]
  }
  return sourceCopy
}
