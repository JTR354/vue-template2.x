<template>
  <div class="home">
    home
    <router-link tag="p" :to="$pages.homeDetail">go to this detail</router-link>
    <h1 @click="test">go to the home its own detail page</h1>
    <base-router-view @refresh="refresh"></base-router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  // import * as Helpers from './modules/helpers'
  // import API from '@api'
  const PAGE_NAME = 'HOME'
  const TITLE = 'home'

  export default {
    name: PAGE_NAME,
    page: {
      title: TITLE
    },
    data() {
      console.log(this.$pages, '----')
      return {
      }
    },
    computed: {
      // ...Helpers.homeComputed,
    },
    methods: {
      // ...Helpers.homeMethods,
      refresh() {
        console.log('tends-list, refresh')
      },
      test() {
        this.$router.push(this.$pages.homeDetail)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@design"

  .home
    position absolute
    top: 0
    right: 0
    left: 0
    bottom :$bottom-tab-height
    background-color #fff
    overflow hidden
</style>
