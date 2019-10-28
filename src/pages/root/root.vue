<template>
  <div class="root">
    <router-view></router-view>
    <tab></tab>
  </div>
</template>

<script type="text/ecmascript-6">
  // import * as Helpers from './modules/helpers'
  // import API from '@api'
  import Tab from './tab/tab'
  const PAGE_NAME = 'ROOT'
  const TITLE = 'root'

  export default {
    name: PAGE_NAME,
    page: {
      title: TITLE
    },
    components: {
      Tab
    },
    data() {
      return {

      }
    },
    computed: {
      // ...Helpers.rootComputed,
    },
    methods: {
      // ...Helpers.rootMethods,
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@design"

  .root
    width: 100%
</style>
