<template>
  <div v-if="isShow" id="loading" class="weui_loading_toast" style="display: block">
    <div class="weui_mask_transparent"></div>
    <div class="weui_toast">
      <div class="weui-loading-box">
        <div class="wrapper">
          <!--<div class="weui-_loading"></div>-->
          <img width="38" height="38" src="./loading.gif">
        </div>
      </div>
      <p class="weui_toast_content">{{content}}</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'GLOBAL_LOADING'

  export default {
    name: COMPONENT_NAME,
    data() {
      return {
        content: '数据加载中',
        isShow: false
      }
    },
    methods: {
      show(content) {
        if (content) {
          this.content = content
        }
        if (!this.isShow) {
          this.isShow = true
        }
      },
      hide() {
        this.content = '数据加载中'
        this.isShow = false
      },
      showCurr(curr) {
        this.content = `上传中...${curr}%`
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .weui_mask_transparent
    position: fixed
    z-index: 1900
    width: 100%
    height: 100%
    top: 0
    left: 0

  .weui_loading_toast .weui_toast
    width: 122px
    min-height: 122px

  .weui_toast
    position: fixed
    z-index: 1900
    top: 180px
    left: 50%
    -webkit-transform: translateX(-50%)
    transform: translateX(-50%)
    background: rgba(40, 40, 40, 0.75)
    text-align: center
    border-radius: 5px
    color: #FFFFFF

  .weui_toast_content
    margin: 15px 0

  .weui_loading_toast .weui_toast_content
    margin-top: 64%
    font-size: 14px

  .weui_loading
    position: absolute
    width: 0px
    z-index: 9999
    left: 50%
    top: 38%

  .wrapper
    position: absolute
    top: 28px
    left: 0
    right: 0
    bottom: 0

  .weui-loading
    width: 38px
    height: 38px
    display: inline-block
    vertical-align: middle
    animation: weuiLoading 1s steps(12, end) infinite
    background: transparent url("data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 100 100'%3E%3Cpath fill='none' d='M0 0h100v100H0z'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23E9E9E9' rx='5' ry='5' transform='translate(0 -30)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23989697' rx='5' ry='5' transform='rotate(30 105.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%239B999A' rx='5' ry='5' transform='rotate(60 75.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23A3A1A2' rx='5' ry='5' transform='rotate(90 65 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23ABA9AA' rx='5' ry='5' transform='rotate(120 58.66 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23B2B2B2' rx='5' ry='5' transform='rotate(150 54.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23BAB8B9' rx='5' ry='5' transform='rotate(180 50 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23C2C0C1' rx='5' ry='5' transform='rotate(-150 45.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23CBCBCB' rx='5' ry='5' transform='rotate(-120 41.34 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23D2D2D2' rx='5' ry='5' transform='rotate(-90 35 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23DADADA' rx='5' ry='5' transform='rotate(-60 24.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23E2E2E2' rx='5' ry='5' transform='rotate(-30 -5.98 65)'/%3E%3C/svg%3E") no-repeat
    background-size: 100%

    &.weui-loading_transparent,
    .weui-btn_loading.weui-btn_primary &,
    .weui-btn_loading.weui-btn_warn &
      background-image: url("data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 100 100'%3E%3Cpath fill='none' d='M0 0h100v100H0z'/%3E%3Crect xmlns='http://www.w3.org/2000/svg' width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.56)' rx='5' ry='5' transform='translate(0 -30)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.5)' rx='5' ry='5' transform='rotate(30 105.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.43)' rx='5' ry='5' transform='rotate(60 75.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.38)' rx='5' ry='5' transform='rotate(90 65 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.32)' rx='5' ry='5' transform='rotate(120 58.66 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.28)' rx='5' ry='5' transform='rotate(150 54.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.25)' rx='5' ry='5' transform='rotate(180 50 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.2)' rx='5' ry='5' transform='rotate(-150 45.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.17)' rx='5' ry='5' transform='rotate(-120 41.34 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.14)' rx='5' ry='5' transform='rotate(-90 35 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.1)' rx='5' ry='5' transform='rotate(-60 24.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.03)' rx='5' ry='5' transform='rotate(-30 -5.98 65)'/%3E%3C/svg%3E")

  @-webkit-keyframes weuiLoading
    0%
      transform: rotate3d(0, 0, 1, 0deg)

    100%
      transform: rotate3d(0, 0, 1, 360deg)

  @keyframes weuiLoading
    0%
      transform: rotate3d(0, 0, 1, 0deg)

    100%
      transform: rotate3d(0, 0, 1, 360deg)
</style>
