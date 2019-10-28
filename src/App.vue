<template>
  <transition name="fade">
    <div id="app">
      <router-view></router-view>
    </div>
  </transition>
</template>

<script>
  /** eslint-disable **/
  import appConfig from '@src/app.config'

  export default {
    page: {
      titleTemplate(title) {
        title = typeof title === 'function' ? title(this.$store) : title
        return title || appConfig.title
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./design/_globals.styl"
  @import "~nprogress/nprogress.css"

  #nprogress .bar
    background: $color-main !important

  #nprogress .peg
    box-shadow: 0 0 10px $color-main, 0 0 5px $color-main !important
</style>
