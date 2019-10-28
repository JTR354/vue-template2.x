<template>
  <div class="mine">
    mine
    <router-link tag="p" :to="$pages.mineDetail">go to the mine detail</router-link>
    <base-router-view @refresh="refresh"></base-router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  // import * as Helpers from './modules/helpers'
  // import API from '@api'
  const PAGE_NAME = 'MINE'
  const TITLE = 'mine'

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
      // ...Helpers.mineComputed,
    },
    methods: {
      // ...Helpers.mineMethods,
      refresh() {
        console.log('mine, refresh')
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@design"

  .mine
    position absolute
    top: 0
    right: 0
    left: 0
    bottom :$bottom-tab-height
    background-color #ff0
    overflow hidden
</style>
