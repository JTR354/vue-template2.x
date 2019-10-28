<template>
  <div class="home-detail">
    home-detail
  </div>
</template>

<script type="text/ecmascript-6">
  // import * as Helpers from './modules/helpers'
  // import API from '@api'
  const PAGE_NAME = 'HOME_DETAIL'
  const TITLE = 'home-detail'

  export default {
    name: PAGE_NAME,
    page: {
      title: TITLE
    },
    data() {
      return {

      }
    },
    computed: {
      // ...Helpers.homeDetailComputed,
    },
    methods: {
      // ...Helpers.homeDetailMethods,
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@design"

  .home-detail
    fill-box(fixed)
    z-index: 50
    background: #fff
</style>
