<template>
  <transition name="fade">
    <div v-if="showToast" class="toast">
      <div class="content">{{content}}</div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        showToast: false,
        content: 'carNumber error!'
      }
    },
    methods: {
      show(content, time) {
        if (!content) return
        this.content = content
        this.showToast = true
        const showTime = time || 2000
        setTimeout(() => {
          this.showToast = false
        }, showTime)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@design"

  .toast
    position: fixed
    left: 50%
    transform: translateX(-50%)
    z-index: 9999
    top: 30%
    padding: 11.5px 23px
    border-radius: 6px
    transition: all .5s ease-out
    text-align: center
    background-color: rgba(0, 0, 0, 0.5)
    .content
      min-width :150px
      max-width :260px
      text-align: center
      font-family: $font-family-regular
      line-height: 16px
      font-size: 14px
      color: #FFFFFF
      word-break :break-all

</style>
