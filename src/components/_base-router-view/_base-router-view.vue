<template>
  <transition :name="transitionType">
    <keep-alive v-if="keepAlive">
      <router-view @refresh="refresh"></router-view>
    </keep-alive>
    <router-view v-else @refresh="refresh"></router-view>
  </transition>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'BASE_ROUTER_VIEW'

  export default {
    name: COMPONENT_NAME,
    data() {
      return {
        keepAlive: false,
        transitionType: ''
      }
    },
    watch: {
      $route(to, from) {
        this.keepAlive = to.meta.keepAlive
      }
    },
    methods: {
      refresh() {
        this.$emit('refresh', ...arguments)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
