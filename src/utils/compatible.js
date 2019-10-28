// 兼容部分ios手机input失焦后页面上移问题
(function() {
  let myFunction
  let isWXAndIos = isWeiXinAndIos()
  if (isWXAndIos) { // 既是微信浏览器 又是ios============（因为查到只有在微信环境下，ios手机上才会出现input失去焦点的时候页面被顶起）
    document.body.addEventListener('focusin', () => { // 软键盘弹起事件
      clearTimeout(myFunction)
    })
    document.body.addEventListener('focusout', () => { // 软键盘关闭事件
      clearTimeout(myFunction)
      myFunction = setTimeout(function() {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})// 重点  =======当键盘收起的时候让页面回到原始位置
      }, 200)
    })
  }
})()

function isWeiXinAndIos() {
  // window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
  let ua = '' + window.navigator.userAgent.toLowerCase()
  // 通过正则表达式匹配ua中是否含有MicroMessenger字符串且是IOS系统
  let isWeixin = /MicroMessenger/i.test(ua) // 是在微信浏览器
  let isIos = /\(i[^;]+;( U;)? CPU.+Mac OS X/i.test(ua) // 是IOS系统
  return isWeixin && isIos
}
