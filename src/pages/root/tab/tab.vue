<template>
  <div class="tab border-top-1px">
    <router-link v-for="(item, index) in tabList" :key="index" :to="item.path" tag="div" class="tab-item">
      <div class="item-container">
        <div class="icon" :class="item.iconClass">
        <!-- <div class="red-block" v-if="index == 1 && hasNoRead"></div>-->
        </div>
        <p class="icon-text">{{item.text}}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
  const COMPONENT_NAME = 'Tab'
  const TABS = [
    {text: '首页', path: '/home', id: 1, iconClass: 'icon-radar'},
    {text: '我的', path: '/mine', id: 5, iconClass: 'icon-mine'}
  ]
  export default {
    name: COMPONENT_NAME,
    data() {
      return {
        tabList: TABS
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@design"

  .tab
    position: fixed
    bottom: 0
    width: 100vw
    height: $bottom-tab-height
    background: $color-white
    display: flex
    .tab-item
      flex: 1
      overflow: hidden
      height: $bottom-tab-height
      .item-container
        overflow: hidden
        width: 100%
        height: 100%
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        font-size: 0
        .icon
          display: block
          width: 21px
          height: 21px
          margin-bottom: 5px
          background-size: 20px 20px
          position: relative
          .red-block
            position: absolute
            width: 6px
            height: 6px
            border: 1px solid $color-white
            border-radius: 50%
            background: $color-red
            top: -2px
            right: -1px
          &.icon-radar
            icon-image1x('./home')
          &.icon-mine
            icon-image1x('./my')
        .icon-text
          font-family: $font-family-regular
          color: #15182D
          font-size: $font-size-10
      &.router-link-active .item-container
        .icon-radar
          icon-image1x('./home-active')
        .icon-mine
          icon-image1x('./my-active')
        .icon-text
          color: $color-text-main
</style>
