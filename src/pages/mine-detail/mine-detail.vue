<template>
  <div class="mine-detail">
    <base-scroll
      ref="scroll"
      bcColor="#ffffff"
      :data="dataArray"
    >
      <p v-for="(item, index) in dataArray" :key="index" style="height: 50px">{{index}}</p>
    </base-scroll>
    <base-router-view @refresh="refresh"></base-router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  // import * as Helpers from './modules/helpers'
  // import API from '@api'
  const PAGE_NAME = 'MINE_DETAIL'
  const TITLE = 'mine-detail'

  export default {
    name: PAGE_NAME,
    page: {
      title: TITLE
    },
    data() {
      return {
        dataArray: new Array(20).fill({})
      }
    },
    computed: {
      // ...Helpers.mineDetailComputed,
    },
    methods: {
      // ...Helpers.mineDetailMethods,
      refresh() {
        console.log('mine-detail, refresh')
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@design"

  .mine-detail
    fill-box(fixed)
    z-index: 50
    background: #fff
</style>
